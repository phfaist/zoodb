/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 17:30:20
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
/* 000006 */ export {ParsedArgumentsInfo, LatexWalkerLocatedError, FLMFragment, FLMArgumentSpec, FLMMacroSpecBase, latexnodes_parsers, Feature};
/* 000001 */ var __name__ = 'flm.feature.refs';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var ReferenceableInfo =  __class__ ('ReferenceableInfo', [object], {
/* 000026 */ 	__module__: __name__,
/* 000027 */ 	get __init__ () {return __get__ (this, function (self, formatted_ref_flm_text, labels) {
/* 000027 */ 		if (arguments.length) {
/* 000027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000027 */ 					switch (__attrib0__) {
/* 000027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 					}
/* 000027 */ 				}
/* 000027 */ 			}
/* 000027 */ 		}
/* 000027 */ 		else {
/* 000027 */ 		}
/* 000028 */ 		__call__ (__call__ (__super__, null, ReferenceableInfo, '__init__'), null, self);
/* 000029 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000030 */ 		self.labels = labels;
/* 000032 */ 		self._fields = tuple (['formatted_ref_flm_text', 'labels']);
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
/* 000055 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_flm_text, target_href, counter_value, counter_formatter_id) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000057 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000058 */ 		self.ref_type = ref_type;
/* 000059 */ 		self.ref_label = ref_label;
/* 000060 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000061 */ 		self.target_href = target_href;
/* 000062 */ 		self.counter_value = counter_value;
/* 000063 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000065 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_flm_text', 'target_href', 'counter_value', 'counter_formatter_id']);
/* 000065 */ 	});},
/* 000068 */ 	get asdict () {return __get__ (this, function (self) {
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000069 */ 		return (function () {
/* 000069 */ 			var __accu0__ = [];
/* 000069 */ 			var __iterable0__ = self._fields;
/* 000069 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000069 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000069 */ 				(function () {
/* 000069 */ 					var __accu1__ = __accu0__;
/* 000069 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000069 */ 				}) ();
/* 000069 */ 			}
/* 000069 */ 			return dict (__accu0__);
/* 000069 */ 		}) ();
/* 000069 */ 	});},
/* 000071 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000074 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000074 */ 			var __accu0__ = ', ';
/* 000074 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000074 */ 				var __accu1__ = [];
/* 000074 */ 				var __iterable0__ = self._fields;
/* 000074 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000074 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000074 */ 					(function () {
/* 000074 */ 						var __accu2__ = __accu1__;
/* 000074 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000074 */ 					}) ();
/* 000074 */ 				}
/* 000074 */ 				return py_iter (__accu1__);
/* 000074 */ 			}) ());
/* 000074 */ 		}) ()), ')');
/* 000074 */ 	});}
/* 000074 */ });
/* 000087 */ var hexstr = (v) => (+v).toString(16);
/* 000095 */ export var _rx_unsafe_char = (function () {
/* 000095 */ 	var __accu0__ = re;
/* 000095 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000095 */ }) ();
/* 000096 */ export var _rx_match_safechar = function (m) {
/* 000096 */ 	if (arguments.length) {
/* 000096 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 				switch (__attrib0__) {
/* 000096 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 	}
/* 000096 */ 	else {
/* 000096 */ 	}
/* 000097 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000097 */ 		var __accu0__ = m;
/* 000097 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000097 */ 	}) ())));
/* 000097 */ };
/* 000099 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000099 */ 	if (arguments.length) {
/* 000099 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 				switch (__attrib0__) {
/* 000099 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 				}
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 	}
/* 000099 */ 	else {
/* 000099 */ 	}
/* 000100 */ 	var ref_type_safe = (function () {
/* 000100 */ 		var __accu0__ = _rx_unsafe_char;
/* 000100 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000100 */ 	}) ();
/* 000101 */ 	var ref_label_safe = (function () {
/* 000101 */ 		var __accu0__ = _rx_unsafe_char;
/* 000101 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000101 */ 	}) ();
/* 000102 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000102 */ };
/* 000107 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000107 */ 	__module__: __name__,
/* 000109 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000109 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000109 */ 			var add_external_ref_resolvers = null;
/* 000109 */ 		};
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000110 */ 		self.ref_labels = dict ({});
/* 000111 */ 		self.registered_references = dict ({});
/* 000112 */ 		self.external_ref_resolvers = [];
/* 000113 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000114 */ 			(function () {
/* 000114 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000114 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000114 */ 			}) ();
/* 000114 */ 		}
/* 000115 */ 		(function () {
/* 000115 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000115 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000115 */ 		}) ();
/* 000117 */ 		self.registered_counter_formatters = dict ({});
/* 000117 */ 	});},
/* 000119 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000121 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000122 */ 			return ;
/* 000122 */ 		}
/* 000124 */ 		var target_href = __add__ ('#', (function () {
/* 000124 */ 			var __accu0__ = referenceable_info;
/* 000124 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000124 */ 		}) ());
/* 000126 */ 		var __iterable0__ = referenceable_info.labels;
/* 000126 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000126 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000126 */ 			var ref_type = __left0__ [0];
/* 000126 */ 			var ref_label = __left0__ [1];
/* 000127 */ 			(function () {
/* 000127 */ 				var __accu0__ = self;
/* 000127 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text, node: node, target_href: target_href}));
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000127 */ 	});},
/* 000134 */ 	get register_counter_formatter () {return __get__ (this, function (self) {
/* 000134 */ 		var counter_formatter_id = null;
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000135 */ 		if (__t__ (counter_formatter_id === null)) {
/* 000136 */ 			var counter_formatter_id = counter_formatter.counter_formatter_id;
/* 000136 */ 		}
/* 000137 */ 		if (__t__ (__in__ (counter_formatter_id, self.registered_counter_formatters))) {
/* 000138 */ 			var __except0__ = __call__ (ValueError, null, 'Counter formatter width ID ‘{}’ is already registered!'.format (counter_formatter_id));
/* 000138 */ 			__except0__.__cause__ = null;
/* 000138 */ 			throw __except0__;
/* 000138 */ 		}
/* 000141 */ 		__setitem__ (self.registered_counter_formatters, counter_formatter_id, counter_formatter);
/* 000141 */ 	});},
/* 000143 */ 	get register_reference_step_counter () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000143 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var ref_type = null;
/* 000143 */ 		};
/* 000143 */ 		if (typeof ref_label == 'undefined' || (ref_label != null && ref_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000143 */ 			var ref_label = null;
/* 000143 */ 		};
/* 000143 */ 		var target_href_fn = null;
/* 000143 */ 		var counter_with_prefix = true;
/* 000143 */ 		var counter_prefix_variant = null;
/* 000143 */ 		var counter_with_delimiters = true;
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter': var counter = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'target_href_fn': var target_href_fn = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000149 */ 		var node_id = (function () {
/* 000149 */ 			var __accu0__ = self;
/* 000149 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000149 */ 		}) ();
/* 000150 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000151 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000152 */ 			return __getitem__ (self.registered_references, kk);
/* 000152 */ 		}
/* 000154 */ 		(function () {
/* 000154 */ 			var __accu0__ = counter;
/* 000154 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000154 */ 		}) ();
/* 000156 */ 		var formatted_ref_flm_text = (function () {
/* 000156 */ 			var __accu0__ = counter;
/* 000156 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ ({with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000156 */ 		}) ();
/* 000162 */ 		if (__t__ (target_href_fn !== null)) {
/* 000163 */ 			var target_href = __call__ (target_href_fn, null, counter.value);
/* 000163 */ 		}
/* 000164 */ 		else {
/* 000165 */ 			var target_href = null;
/* 000165 */ 		}
/* 000167 */ 		return (function () {
/* 000167 */ 			var __accu0__ = self;
/* 000167 */ 			return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter.value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000167 */ 		}) ();
/* 000167 */ 	});},
/* 000177 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000177 */ 		var counter_value = null;
/* 000177 */ 		var counter_formatter_id = null;
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000192 */ 		var node_id = (function () {
/* 000192 */ 			var __accu0__ = self;
/* 000192 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000192 */ 		}) ();
/* 000193 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000194 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000195 */ 			return __getitem__ (self.registered_references, kk);
/* 000195 */ 		}
/* 000197 */ 		if (__t__ (__t__ (ref_type !== null) && __t__ (ref_label !== null) && __in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000199 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000199 */ 			__except0__.__cause__ = null;
/* 000199 */ 			throw __except0__;
/* 000199 */ 		}
/* 000203 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter_value, counter_formatter_id: counter_formatter_id}));
/* 000212 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000213 */ 		if (__t__ (__t__ (ref_type !== null) && ref_label !== null)) {
/* 000214 */ 			self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000214 */ 		}
/* 000215 */ 		// pass;
/* 000218 */ 		return refinstance;
/* 000218 */ 	});},
/* 000221 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000223 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000223 */ 		}
/* 000225 */ 		// pass;
/* 000231 */ 		// pass;
/* 000235 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000235 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000235 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000236 */ 			// pass;
/* 000239 */ 			var ref = (function () {
/* 000239 */ 				var __accu0__ = resolver;
/* 000239 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000239 */ 			}) ();
/* 000245 */ 			// pass;
/* 000248 */ 			if (__t__ (ref !== null)) {
/* 000249 */ 				return ref;
/* 000249 */ 			}
/* 000249 */ 		}
/* 000251 */ 		var __except0__ = __call__ (ValueError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label));
/* 000251 */ 		__except0__.__cause__ = null;
/* 000251 */ 		throw __except0__;
/* 000251 */ 	});},
/* 000255 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_flm, resource_info, render_context, counter_prefix_variant, counter_with_prefix, counter_with_delimiters) {
/* 000255 */ 		if (typeof counter_prefix_variant == 'undefined' || (counter_prefix_variant != null && counter_prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var counter_prefix_variant = null;
/* 000255 */ 		};
/* 000255 */ 		if (typeof counter_with_prefix == 'undefined' || (counter_with_prefix != null && counter_with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var counter_with_prefix = true;
/* 000255 */ 		};
/* 000255 */ 		if (typeof counter_with_delimiters == 'undefined' || (counter_with_delimiters != null && counter_with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var counter_with_delimiters = true;
/* 000255 */ 		};
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000260 */ 		var ref_instance = (function () {
/* 000260 */ 			var __accu0__ = self;
/* 000260 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000260 */ 		}) ();
/* 000262 */ 		return (function () {
/* 000262 */ 			var __accu0__ = self;
/* 000262 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_flm, render_context, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000262 */ 		}) ();
/* 000262 */ 	});},
/* 000269 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_flm, render_context, counter_prefix_variant, counter_with_prefix, counter_with_delimiters) {
/* 000269 */ 		if (typeof counter_prefix_variant == 'undefined' || (counter_prefix_variant != null && counter_prefix_variant.hasOwnProperty ("__kwargtrans__"))) {;
/* 000269 */ 			var counter_prefix_variant = null;
/* 000269 */ 		};
/* 000269 */ 		if (typeof counter_with_prefix == 'undefined' || (counter_with_prefix != null && counter_with_prefix.hasOwnProperty ("__kwargtrans__"))) {;
/* 000269 */ 			var counter_with_prefix = true;
/* 000269 */ 		};
/* 000269 */ 		if (typeof counter_with_delimiters == 'undefined' || (counter_with_delimiters != null && counter_with_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000269 */ 			var counter_with_delimiters = true;
/* 000269 */ 		};
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000273 */ 		if (__t__ (display_content_flm === null)) {
/* 000274 */ 			var display_content_flm = ref_instance.formatted_ref_flm_text;
/* 000274 */ 		}
/* 000276 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_flm, FLMFragment))))) {
/* 000277 */ 			var display_content_flm = (function () {
/* 000277 */ 				var __accu0__ = render_context.doc.environment;
/* 000277 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_flm, __kwargtrans__ ({standalone_mode: true}));
/* 000277 */ 			}) ();
/* 000277 */ 		}
/* 000282 */ 		var display_content_nodelist = display_content_flm.nodes;
/* 000284 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000286 */ 		return (function () {
/* 000286 */ 			var __accu0__ = fragment_renderer;
/* 000286 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000286 */ 		}) ();
/* 000286 */ 	});},
/* 000296 */ 	ref_many_use_flm_hyperref: true,
/* 000298 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info, render_context) {
/* 000298 */ 		var counter_prefix_variant = null;
/* 000298 */ 		var counter_with_delimiters = true;
/* 000298 */ 		var counter_with_prefix = true;
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000302 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000304 */ 		var ref_instances = (function () {
/* 000304 */ 			var __accu0__ = [];
/* 000304 */ 			var __iterable0__ = ref_type_label_list;
/* 000304 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000306 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000306 */ 				var ref_type = __left0__ [0];
/* 000306 */ 				var ref_label = __left0__ [1];
/* 000306 */ 				(function () {
/* 000306 */ 					var __accu1__ = __accu0__;
/* 000305 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000305 */ 						var __accu2__ = self;
/* 000305 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000305 */ 					}) ());
/* 000305 */ 				}) ();
/* 000305 */ 			}
/* 000305 */ 			return __accu0__;
/* 000305 */ 		}) ();
/* 000308 */ 		var ref_instances_by_counter_formatter_id = dict ({});
/* 000309 */ 		var ref_instances_nocounter = [];
/* 000310 */ 		var __iterable0__ = ref_instances;
/* 000310 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000310 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000311 */ 			if (__t__ (__t__ (ri.counter_value === null) || ri.counter_formatter_id === null)) {
/* 000312 */ 				(function () {
/* 000312 */ 					var __accu0__ = ref_instances_nocounter;
/* 000312 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000312 */ 				}) ();
/* 000312 */ 				continue;
/* 000312 */ 			}
/* 000314 */ 			if (__t__ (!__in__ (ri.counter_formatter_id, ref_instances_by_counter_formatter_id))) {
/* 000315 */ 				__setitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id, dict ({}));
/* 000315 */ 			}
/* 000317 */ 			__setitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id), ri.counter_value, ri);
/* 000317 */ 		}
/* 000319 */ 		var s_final_blocks = [];
/* 000321 */ 		var __iterable0__ = (function () {
/* 000321 */ 			var __accu0__ = ref_instances_by_counter_formatter_id;
/* 000321 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000321 */ 		}) ();
/* 000321 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000321 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000321 */ 			var counter_formatter_id = __left0__ [0];
/* 000321 */ 			var rcdict = __left0__ [1];
/* 000323 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, counter_formatter_id);
/* 000325 */ 			var s_items = (function () {
/* 000325 */ 				var __accu0__ = counter_formatter;
/* 000326 */ 				return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000326 */ 					var __accu1__ = rcdict;
/* 000326 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000326 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000326 */ 			}) ();
/* 000332 */ 			var s = '';
/* 000333 */ 			var __iterable1__ = s_items;
/* 000333 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000333 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000334 */ 				var s_frag = (function () {
/* 000334 */ 					var __accu0__ = render_context;
/* 000337 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000337 */ 				}) ();
/* 000339 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000340 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000340 */ 						var __accu0__ = fragment_renderer;
/* 000340 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000340 */ 					}) ());
/* 000340 */ 				}
/* 000341 */ 				else {
/* 000342 */ 					var rinst = __getitem__ (rcdict, __getitem__ (sit, 'n'));
/* 000343 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000343 */ 						var __accu0__ = fragment_renderer;
/* 000343 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['refcnt-{}'.format (counter_formatter_id)]}));
/* 000343 */ 					}) ());
/* 000343 */ 				}
/* 000343 */ 			}
/* 000351 */ 			(function () {
/* 000351 */ 				var __accu0__ = s_final_blocks;
/* 000351 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000351 */ 			}) ();
/* 000351 */ 		}
/* 000353 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000354 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000354 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000354 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000355 */ 				var s_final_blocks = __call__ (__iadd__, null, s_final_blocks, [(function () {
/* 000355 */ 					var __accu0__ = self;
/* 000355 */ 					return __call__ (__accu0__.render_ref_instance, __accu0__, ri, null, render_context);
/* 000355 */ 				}) ()]);
/* 000355 */ 			}
/* 000355 */ 		}
/* 000357 */ 		return (function () {
/* 000357 */ 			var __accu0__ = ', ';
/* 000357 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000357 */ 		}) ();
/* 000357 */ 	});},
/* 000361 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000363 */ 		try {
/* 000364 */ 			return (function () {
/* 000364 */ 				var __accu0__ = self;
/* 000364 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000364 */ 			}) ();
/* 000364 */ 		}
/* 000364 */ 		catch (__except0__) {
/* 000364 */ 			if (isinstance (__except0__, Exception)) {
/* 000364 */ 				var e = __except0__;
/* 000366 */ 				// pass;
/* 000372 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000372 */ 				__except1__.__cause__ = null;
/* 000372 */ 				throw __except1__;
/* 000372 */ 			}
/* 000372 */ 			else {
/* 000372 */ 				throw __except0__;
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 	});}
/* 000372 */ });
/* 000380 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000380 */ 	__module__: __name__,
/* 000386 */ 	feature_name: 'refs',
/* 000387 */ 	feature_title: 'Labels and cross-references',
/* 000389 */ 	RenderManager: FeatureRefsRenderManager,
/* 000391 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000391 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000391 */ 			var external_ref_resolvers = null;
/* 000391 */ 		};
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000392 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000394 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000395 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000395 */ 		}
/* 000396 */ 		else {
/* 000397 */ 			self.external_ref_resolvers = [];
/* 000397 */ 		}
/* 000398 */ 		// pass;
/* 000398 */ 	});},
/* 000403 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000404 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000405 */ 			(function () {
/* 000405 */ 				var __accu0__ = logger;
/* 000405 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000405 */ 			}) ();
/* 000405 */ 		}
/* 000407 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000407 */ 	});},
/* 000409 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000410 */ 		(function () {
/* 000410 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000410 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000410 */ 		}) ();
/* 000410 */ 	});},
/* 000412 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000419 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [__call__ (RefMacro, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])})), __call__ (RefMacro, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}))]}));
/* 000419 */ 	});},
/* 000428 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000428 */ 		if (arguments.length) {
/* 000428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 					switch (__attrib0__) {
/* 000428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		else {
/* 000428 */ 		}
/* 000431 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000431 */ 	});}
/* 000431 */ });
/* 000436 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000436 */ 	var __accu0__ = latexnodes_parsers;
/* 000436 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000439 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000439 */ 	var __accu0__ = latexnodes_parsers;
/* 000439 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000444 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'}))});
/* 000448 */ export var RefMacro =  __class__ ('RefMacro', [FLMMacroSpecBase], {
/* 000448 */ 	__module__: __name__,
/* 000450 */ 	delayed_render: true,
/* 000452 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000452 */ 		var ref_type = 'ref';
/* 000452 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000452 */ 		var counter_prefix_variant = null;
/* 000452 */ 		if (arguments.length) {
/* 000452 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 					switch (__attrib0__) {
/* 000452 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 		}
/* 000452 */ 		else {
/* 000452 */ 		}
/* 000462 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000462 */ 			var __accu0__ = self;
/* 000462 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000462 */ 		}) ()}));
/* 000464 */ 		self.ref_type = ref_type;
/* 000465 */ 		self.command_arguments = (function () {
/* 000465 */ 			var __accu0__ = [];
/* 000465 */ 			var __iterable0__ = command_arguments;
/* 000465 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000465 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000465 */ 				(function () {
/* 000465 */ 					var __accu1__ = __accu0__;
/* 000465 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000465 */ 						var __accu2__ = c;
/* 000465 */ 						return __call__ (__accu2__.py_replace, __accu2__, '[]', '');
/* 000465 */ 					}) ());
/* 000465 */ 				}) ();
/* 000465 */ 			}
/* 000465 */ 			return __accu0__;
/* 000465 */ 		}) ();
/* 000466 */ 		self.counter_prefix_variant = counter_prefix_variant;
/* 000466 */ 	});},
/* 000468 */ 	_fields: tuple (['macroname', 'ref_type', 'command_arguments', 'counter_prefix_variant']),
/* 000471 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000471 */ 		if (arguments.length) {
/* 000471 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000471 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000471 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000471 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000471 */ 					switch (__attrib0__) {
/* 000471 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000471 */ 					}
/* 000471 */ 				}
/* 000471 */ 			}
/* 000471 */ 		}
/* 000471 */ 		else {
/* 000471 */ 		}
/* 000472 */ 		return (function () {
/* 000472 */ 			var __accu0__ = [];
/* 000472 */ 			var __iterable0__ = command_arguments;
/* 000472 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000473 */ 				var argname = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 				(function () {
/* 000473 */ 					var __accu1__ = __accu0__;
/* 000473 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, argname));
/* 000473 */ 				}) ();
/* 000473 */ 			}
/* 000473 */ 			return __accu0__;
/* 000473 */ 		}) ();
/* 000473 */ 	});},
/* 000475 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000475 */ 		if (arguments.length) {
/* 000475 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000475 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000475 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000475 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000475 */ 					switch (__attrib0__) {
/* 000475 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000475 */ 					}
/* 000475 */ 				}
/* 000475 */ 			}
/* 000475 */ 		}
/* 000475 */ 		else {
/* 000475 */ 		}
/* 000477 */ 		var node_args = (function () {
/* 000477 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000477 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000477 */ 		}) ();
/* 000481 */ 		var ref_spec = (function () {
/* 000481 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000481 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000481 */ 		}) ();
/* 000482 */ 		var ref_pair_list = [];
/* 000483 */ 		var __iterable0__ = (function () {
/* 000483 */ 			var __accu0__ = ref_spec;
/* 000483 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000483 */ 		}) ();
/* 000483 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000483 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000484 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000484 */ 			var ref_type = __left0__ [0];
/* 000484 */ 			var ref_label = __left0__ [1];
/* 000485 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000486 */ 				var __left0__ = (function () {
/* 000486 */ 					var __accu0__ = ref_label;
/* 000486 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000486 */ 				}) ();
/* 000486 */ 				var ref_type = __left0__ [0];
/* 000486 */ 				var ref_label = __left0__ [1];
/* 000486 */ 			}
/* 000487 */ 			(function () {
/* 000487 */ 				var __accu0__ = ref_pair_list;
/* 000487 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000487 */ 			}) ();
/* 000487 */ 		}
/* 000489 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000490 */ 			var display_content_nodelist = (function () {
/* 000490 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000490 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000490 */ 			}) ();
/* 000490 */ 		}
/* 000491 */ 		else {
/* 000492 */ 			var display_content_nodelist = null;
/* 000492 */ 		}
/* 000494 */ 		node.flmarg_ref_list = ref_pair_list;
/* 000495 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000496 */ 			node.flmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000496 */ 		}
/* 000497 */ 		node.flm_ref_info = dict ({'ref_list': ref_pair_list, 'display_content_nodelist': display_content_nodelist});
/* 000497 */ 	});},
/* 000503 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000503 */ 		if (arguments.length) {
/* 000503 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000503 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000503 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000503 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000503 */ 					switch (__attrib0__) {
/* 000503 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 					}
/* 000503 */ 				}
/* 000503 */ 			}
/* 000503 */ 		}
/* 000503 */ 		else {
/* 000503 */ 		}
/* 000504 */ 		// pass;
/* 000504 */ 	});},
/* 000506 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000508 */ 		var ref_list = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000509 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000511 */ 		var mgr = (function () {
/* 000511 */ 			var __accu0__ = render_context;
/* 000511 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000511 */ 		}) ();
/* 000512 */ 		var resource_info = node.latex_walker.resource_info;
/* 000514 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000515 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000515 */ 			var ref_type = __left0__ [0];
/* 000515 */ 			var ref_label = __left0__ [1];
/* 000516 */ 			try {
/* 000517 */ 				return (function () {
/* 000517 */ 					var __accu0__ = mgr;
/* 000517 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, render_context, __kwargtrans__ ({counter_prefix_variant: self.counter_prefix_variant}));
/* 000517 */ 				}) ();
/* 000517 */ 			}
/* 000517 */ 			catch (__except0__) {
/* 000517 */ 				if (isinstance (__except0__, Exception)) {
/* 000517 */ 					var e = __except0__;
/* 000523 */ 					(function () {
/* 000523 */ 						var __accu0__ = logger;
/* 000524 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ @ {}'.format (ref_type, ref_label, e, (function () {
/* 000524 */ 							var __accu1__ = node;
/* 000524 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000524 */ 						}) (), (function () {
/* 000524 */ 							var __accu1__ = node;
/* 000524 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000524 */ 						}) ()));
/* 000524 */ 					}) ();
/* 000525 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000525 */ 					__except1__.__cause__ = null;
/* 000525 */ 					throw __except1__;
/* 000525 */ 				}
/* 000525 */ 				else {
/* 000525 */ 					throw __except0__;
/* 000525 */ 				}
/* 000525 */ 			}
/* 000525 */ 		}
/* 000534 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000536 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000536 */ 			__except0__.__cause__ = null;
/* 000536 */ 			throw __except0__;
/* 000536 */ 		}
/* 000538 */ 		return (function () {
/* 000538 */ 			var __accu0__ = mgr;
/* 000538 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info, render_context);
/* 000538 */ 		}) ();
/* 000538 */ 	});}
/* 000538 */ });
/* 000543 */ export var FeatureClass = FeatureRefs;
/* 000006 */ 
//# sourceMappingURL=flm.feature.refs.map