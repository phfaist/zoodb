/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 22:59:52
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
/* 000006 */ export {FLMArgumentSpec, FLMMacroSpecBase, FLMFragment, latexnodes_parsers, LatexWalkerLocatedError, ParsedArgumentsInfo, Feature};
/* 000001 */ var __name__ = 'flm.feature.refs';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000026 */ export var ReferenceableInfo =  __class__ ('ReferenceableInfo', [object], {
/* 000026 */ 	__module__: __name__,
/* 000036 */ 	get __init__ () {return __get__ (this, function (self, formatted_ref_flm_text, labels) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000037 */ 		__call__ (__call__ (__super__, null, ReferenceableInfo, '__init__'), null, self);
/* 000038 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000039 */ 		self.labels = labels;
/* 000041 */ 		self._fields = tuple (['formatted_ref_flm_text', 'labels']);
/* 000041 */ 	});},
/* 000043 */ 	get get_target_id () {return __get__ (this, function (self) {
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
/* 000045 */ 		if (__t__ (!__t__ ((self.labels)))) {
/* 000046 */ 			return null;
/* 000046 */ 		}
/* 000048 */ 		var __left0__ = __getitem__ (self.labels, 0);
/* 000048 */ 		var lbl_ref_type = __left0__ [0];
/* 000048 */ 		var lbl_ref_label = __left0__ [1];
/* 000049 */ 		return __call__ (get_safe_target_id, null, lbl_ref_type, lbl_ref_label);
/* 000049 */ 	});},
/* 000051 */ 	get asdict () {return __get__ (this, function (self) {
/* 000051 */ 		if (arguments.length) {
/* 000051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000051 */ 					switch (__attrib0__) {
/* 000051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000051 */ 					}
/* 000051 */ 				}
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 		else {
/* 000051 */ 		}
/* 000052 */ 		return (function () {
/* 000052 */ 			var __accu0__ = [];
/* 000052 */ 			var __iterable0__ = self._fields;
/* 000052 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000052 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000052 */ 				(function () {
/* 000052 */ 					var __accu1__ = __accu0__;
/* 000052 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000052 */ 				}) ();
/* 000052 */ 			}
/* 000052 */ 			return dict (__accu0__);
/* 000052 */ 		}) ();
/* 000052 */ 	});},
/* 000054 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000057 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000057 */ 			var __accu0__ = ', ';
/* 000057 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000057 */ 				var __accu1__ = [];
/* 000057 */ 				var __iterable0__ = self._fields;
/* 000057 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000057 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000057 */ 					(function () {
/* 000057 */ 						var __accu2__ = __accu1__;
/* 000057 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000057 */ 					}) ();
/* 000057 */ 				}
/* 000057 */ 				return py_iter (__accu1__);
/* 000057 */ 			}) ());
/* 000057 */ 		}) ()), ')');
/* 000057 */ 	});}
/* 000057 */ });
/* 000063 */ export var RefInstance =  __class__ ('RefInstance', [object], {
/* 000063 */ 	__module__: __name__,
/* 000064 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_flm_text, target_href, counter_value, counter_formatter_id) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000066 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000067 */ 		self.ref_type = ref_type;
/* 000068 */ 		self.ref_label = ref_label;
/* 000069 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000070 */ 		self.target_href = target_href;
/* 000071 */ 		self.counter_value = counter_value;
/* 000072 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000074 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_flm_text', 'target_href', 'counter_value', 'counter_formatter_id']);
/* 000074 */ 	});},
/* 000077 */ 	get asdict () {return __get__ (this, function (self) {
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000078 */ 		return (function () {
/* 000078 */ 			var __accu0__ = [];
/* 000078 */ 			var __iterable0__ = self._fields;
/* 000078 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000078 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000078 */ 				(function () {
/* 000078 */ 					var __accu1__ = __accu0__;
/* 000078 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000078 */ 				}) ();
/* 000078 */ 			}
/* 000078 */ 			return dict (__accu0__);
/* 000078 */ 		}) ();
/* 000078 */ 	});},
/* 000080 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000083 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000083 */ 			var __accu0__ = ', ';
/* 000083 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000083 */ 				var __accu1__ = [];
/* 000083 */ 				var __iterable0__ = self._fields;
/* 000083 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000083 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000083 */ 					(function () {
/* 000083 */ 						var __accu2__ = __accu1__;
/* 000083 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000083 */ 					}) ();
/* 000083 */ 				}
/* 000083 */ 				return py_iter (__accu1__);
/* 000083 */ 			}) ());
/* 000083 */ 		}) ()), ')');
/* 000083 */ 	});}
/* 000083 */ });
/* 000096 */ var hexstr = (v) => (+v).toString(16);
/* 000104 */ export var _rx_unsafe_char = (function () {
/* 000104 */ 	var __accu0__ = re;
/* 000104 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000104 */ }) ();
/* 000105 */ export var _rx_match_safechar = function (m) {
/* 000105 */ 	if (arguments.length) {
/* 000105 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 				switch (__attrib0__) {
/* 000105 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 	}
/* 000105 */ 	else {
/* 000105 */ 	}
/* 000106 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000106 */ 		var __accu0__ = m;
/* 000106 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000106 */ 	}) ())));
/* 000106 */ };
/* 000108 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000108 */ 	if (arguments.length) {
/* 000108 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 				switch (__attrib0__) {
/* 000108 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 				}
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 	}
/* 000108 */ 	else {
/* 000108 */ 	}
/* 000109 */ 	var ref_type_safe = (function () {
/* 000109 */ 		var __accu0__ = _rx_unsafe_char;
/* 000109 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000109 */ 	}) ();
/* 000110 */ 	var ref_label_safe = (function () {
/* 000110 */ 		var __accu0__ = _rx_unsafe_char;
/* 000110 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000110 */ 	}) ();
/* 000111 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000111 */ };
/* 000116 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000116 */ 	__module__: __name__,
/* 000118 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000118 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000118 */ 			var add_external_ref_resolvers = null;
/* 000118 */ 		};
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		self.ref_labels = dict ({});
/* 000120 */ 		self.registered_references = dict ({});
/* 000121 */ 		self.external_ref_resolvers = [];
/* 000122 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000123 */ 			(function () {
/* 000123 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000123 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000123 */ 			}) ();
/* 000123 */ 		}
/* 000124 */ 		(function () {
/* 000124 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000124 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000124 */ 		}) ();
/* 000126 */ 		self.registered_counter_formatters = dict ({});
/* 000126 */ 	});},
/* 000128 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000130 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000131 */ 			return ;
/* 000131 */ 		}
/* 000133 */ 		var target_href = __add__ ('#', (function () {
/* 000133 */ 			var __accu0__ = referenceable_info;
/* 000133 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000133 */ 		}) ());
/* 000135 */ 		var __iterable0__ = referenceable_info.labels;
/* 000135 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000135 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000135 */ 			var ref_type = __left0__ [0];
/* 000135 */ 			var ref_label = __left0__ [1];
/* 000136 */ 			(function () {
/* 000136 */ 				var __accu0__ = self;
/* 000136 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text, node: node, target_href: target_href}));
/* 000136 */ 			}) ();
/* 000136 */ 		}
/* 000136 */ 	});},
/* 000143 */ 	get register_counter_formatter () {return __get__ (this, function (self) {
/* 000143 */ 		var counter_formatter_id = null;
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		if (__t__ (counter_formatter_id === null)) {
/* 000145 */ 			var counter_formatter_id = counter_formatter.counter_formatter_id;
/* 000145 */ 		}
/* 000146 */ 		if (__t__ (__in__ (counter_formatter_id, self.registered_counter_formatters))) {
/* 000147 */ 			var __except0__ = __call__ (ValueError, null, 'Counter formatter width ID ‘{}’ is already registered!'.format (counter_formatter_id));
/* 000147 */ 			__except0__.__cause__ = null;
/* 000147 */ 			throw __except0__;
/* 000147 */ 		}
/* 000150 */ 		__setitem__ (self.registered_counter_formatters, counter_formatter_id, counter_formatter);
/* 000150 */ 	});},
/* 000152 */ 	get register_reference_step_counter () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000152 */ 		if (typeof ref_type == 'undefined' || (ref_type != null && ref_type.hasOwnProperty ("__kwargtrans__"))) {;
/* 000152 */ 			var ref_type = null;
/* 000152 */ 		};
/* 000152 */ 		if (typeof ref_label == 'undefined' || (ref_label != null && ref_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000152 */ 			var ref_label = null;
/* 000152 */ 		};
/* 000152 */ 		var target_href_fn = null;
/* 000152 */ 		var counter_with_prefix = true;
/* 000152 */ 		var counter_prefix_variant = null;
/* 000152 */ 		var counter_with_delimiters = true;
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'counter': var counter = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'target_href_fn': var target_href_fn = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000158 */ 		var node_id = (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000158 */ 		}) ();
/* 000159 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000160 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000161 */ 			return __getitem__ (self.registered_references, kk);
/* 000161 */ 		}
/* 000163 */ 		(function () {
/* 000163 */ 			var __accu0__ = counter;
/* 000163 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000163 */ 		}) ();
/* 000165 */ 		var formatted_ref_flm_text = (function () {
/* 000165 */ 			var __accu0__ = counter;
/* 000165 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ ({with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000165 */ 		}) ();
/* 000171 */ 		if (__t__ (target_href_fn !== null)) {
/* 000172 */ 			var target_href = __call__ (target_href_fn, null, counter.value);
/* 000172 */ 		}
/* 000173 */ 		else {
/* 000174 */ 			var target_href = null;
/* 000174 */ 		}
/* 000176 */ 		return (function () {
/* 000176 */ 			var __accu0__ = self;
/* 000176 */ 			return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter.value, counter_formatter_id: counter.formatter.counter_formatter_id}));
/* 000176 */ 		}) ();
/* 000176 */ 	});},
/* 000186 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000186 */ 		var counter_value = null;
/* 000186 */ 		var counter_formatter_id = null;
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000201 */ 		var node_id = (function () {
/* 000201 */ 			var __accu0__ = self;
/* 000201 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000201 */ 		}) ();
/* 000202 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000203 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000204 */ 			return __getitem__ (self.registered_references, kk);
/* 000204 */ 		}
/* 000206 */ 		if (__t__ (__t__ (ref_type !== null) && __t__ (ref_label !== null) && __in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000208 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000208 */ 			__except0__.__cause__ = null;
/* 000208 */ 			throw __except0__;
/* 000208 */ 		}
/* 000212 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter_value, counter_formatter_id: counter_formatter_id}));
/* 000221 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000222 */ 		if (__t__ (__t__ (ref_type !== null) && ref_label !== null)) {
/* 000223 */ 			self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000223 */ 		}
/* 000224 */ 		// pass;
/* 000227 */ 		return refinstance;
/* 000227 */ 	});},
/* 000230 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000232 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000232 */ 		}
/* 000234 */ 		// pass;
/* 000240 */ 		// pass;
/* 000244 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000244 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000244 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000245 */ 			// pass;
/* 000248 */ 			var ref = (function () {
/* 000248 */ 				var __accu0__ = resolver;
/* 000248 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000248 */ 			}) ();
/* 000254 */ 			// pass;
/* 000257 */ 			if (__t__ (ref !== null)) {
/* 000258 */ 				return ref;
/* 000258 */ 			}
/* 000258 */ 		}
/* 000260 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label), __kwargtrans__ ({pos: null}));
/* 000260 */ 		__except0__.__cause__ = null;
/* 000260 */ 		throw __except0__;
/* 000260 */ 	});},
/* 000267 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_flm, resource_info) {
/* 000267 */ 		var counter_prefix_variant = null;
/* 000267 */ 		var counter_with_prefix = true;
/* 000267 */ 		var counter_with_delimiters = true;
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000273 */ 		var ref_instance = (function () {
/* 000273 */ 			var __accu0__ = self;
/* 000273 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000273 */ 		}) ();
/* 000275 */ 		return (function () {
/* 000275 */ 			var __accu0__ = self;
/* 000275 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_flm, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000275 */ 		}) ();
/* 000275 */ 	});},
/* 000282 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_flm) {
/* 000282 */ 		var counter_prefix_variant = null;
/* 000282 */ 		var counter_with_prefix = true;
/* 000282 */ 		var counter_with_delimiters = true;
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000287 */ 		if (__t__ (display_content_flm === null)) {
/* 000288 */ 			var display_content_flm = ref_instance.formatted_ref_flm_text;
/* 000288 */ 		}
/* 000290 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_flm, FLMFragment))))) {
/* 000291 */ 			var display_content_flm = (function () {
/* 000291 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000291 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_flm, __kwargtrans__ ({standalone_mode: true}));
/* 000291 */ 			}) ();
/* 000291 */ 		}
/* 000296 */ 		var display_content_nodelist = display_content_flm.nodes;
/* 000298 */ 		var fragment_renderer = self.render_context.fragment_renderer;
/* 000300 */ 		return (function () {
/* 000300 */ 			var __accu0__ = fragment_renderer;
/* 000300 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: self.render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000300 */ 		}) ();
/* 000300 */ 	});},
/* 000310 */ 	ref_many_use_flm_hyperref: true,
/* 000312 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info) {
/* 000312 */ 		var counter_prefix_variant = null;
/* 000312 */ 		var counter_with_delimiters = true;
/* 000312 */ 		var counter_with_prefix = true;
/* 000312 */ 		if (arguments.length) {
/* 000312 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 					switch (__attrib0__) {
/* 000312 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 		else {
/* 000312 */ 		}
/* 000317 */ 		var render_context = self.render_context;
/* 000318 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000320 */ 		var ref_instances = (function () {
/* 000320 */ 			var __accu0__ = [];
/* 000320 */ 			var __iterable0__ = ref_type_label_list;
/* 000320 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000322 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000322 */ 				var ref_type = __left0__ [0];
/* 000322 */ 				var ref_label = __left0__ [1];
/* 000322 */ 				(function () {
/* 000322 */ 					var __accu1__ = __accu0__;
/* 000321 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000321 */ 						var __accu2__ = self;
/* 000321 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000321 */ 					}) ());
/* 000321 */ 				}) ();
/* 000321 */ 			}
/* 000321 */ 			return __accu0__;
/* 000321 */ 		}) ();
/* 000324 */ 		var ref_instances_by_counter_formatter_id = dict ({});
/* 000325 */ 		var ref_instances_nocounter = [];
/* 000326 */ 		var __iterable0__ = ref_instances;
/* 000326 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000326 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000327 */ 			if (__t__ (__t__ (ri.counter_value === null) || ri.counter_formatter_id === null)) {
/* 000328 */ 				(function () {
/* 000328 */ 					var __accu0__ = ref_instances_nocounter;
/* 000328 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000328 */ 				}) ();
/* 000328 */ 				continue;
/* 000328 */ 			}
/* 000330 */ 			if (__t__ (!__in__ (ri.counter_formatter_id, ref_instances_by_counter_formatter_id))) {
/* 000331 */ 				__setitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id, dict ({}));
/* 000331 */ 			}
/* 000333 */ 			__setitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ri.counter_formatter_id), ri.counter_value, ri);
/* 000333 */ 		}
/* 000335 */ 		var s_final_blocks = [];
/* 000337 */ 		var __iterable0__ = (function () {
/* 000337 */ 			var __accu0__ = ref_instances_by_counter_formatter_id;
/* 000337 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000337 */ 		}) ();
/* 000337 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000337 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000337 */ 			var counter_formatter_id = __left0__ [0];
/* 000337 */ 			var rcdict = __left0__ [1];
/* 000339 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, counter_formatter_id);
/* 000341 */ 			var s_items = (function () {
/* 000341 */ 				var __accu0__ = counter_formatter;
/* 000342 */ 				return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000342 */ 					var __accu1__ = rcdict;
/* 000342 */ 					return __call__ (__accu1__.py_keys, __accu1__);
/* 000342 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000342 */ 			}) ();
/* 000348 */ 			var s = '';
/* 000349 */ 			var __iterable1__ = s_items;
/* 000349 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000349 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000350 */ 				var s_frag = (function () {
/* 000350 */ 					var __accu0__ = render_context;
/* 000353 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000353 */ 				}) ();
/* 000355 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000356 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000356 */ 						var __accu0__ = fragment_renderer;
/* 000356 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000356 */ 					}) ());
/* 000356 */ 				}
/* 000357 */ 				else {
/* 000358 */ 					var rinst = __getitem__ (rcdict, __getitem__ (sit, 'n'));
/* 000359 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000359 */ 						var __accu0__ = fragment_renderer;
/* 000359 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['refcnt-{}'.format (counter_formatter_id)]}));
/* 000359 */ 					}) ());
/* 000359 */ 				}
/* 000359 */ 			}
/* 000367 */ 			(function () {
/* 000367 */ 				var __accu0__ = s_final_blocks;
/* 000367 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000367 */ 			}) ();
/* 000367 */ 		}
/* 000369 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000370 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000370 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000370 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000371 */ 				var s_final_blocks = __call__ (__iadd__, null, s_final_blocks, [(function () {
/* 000371 */ 					var __accu0__ = self;
/* 000371 */ 					return __call__ (__accu0__.render_ref_instance, __accu0__, ri, null);
/* 000371 */ 				}) ()]);
/* 000371 */ 			}
/* 000371 */ 		}
/* 000373 */ 		return (function () {
/* 000373 */ 			var __accu0__ = ', ';
/* 000373 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000373 */ 		}) ();
/* 000373 */ 	});},
/* 000377 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000379 */ 		try {
/* 000380 */ 			return (function () {
/* 000380 */ 				var __accu0__ = self;
/* 000380 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000380 */ 			}) ();
/* 000380 */ 		}
/* 000380 */ 		catch (__except0__) {
/* 000380 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000380 */ 				var e = __except0__;
/* 000382 */ 				// pass;
/* 000387 */ 				__except0__.__cause__ = null;
/* 000387 */ 				throw __except0__;
/* 000387 */ 			}
/* 000387 */ 			else if (isinstance (__except0__, Exception)) {
/* 000387 */ 				var e = __except0__;
/* 000389 */ 				// pass;
/* 000395 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000395 */ 				__except1__.__cause__ = null;
/* 000395 */ 				throw __except1__;
/* 000395 */ 			}
/* 000395 */ 			else {
/* 000395 */ 				throw __except0__;
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 	});}
/* 000395 */ });
/* 000408 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000408 */ 	var __accu0__ = latexnodes_parsers;
/* 000408 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000412 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000412 */ 	var __accu0__ = latexnodes_parsers;
/* 000412 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000425 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'})), 'Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'ref_label'})), '[]Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: 'r[]', argname: 'ref_label'}))});
/* 000432 */ export var RefMacro =  __class__ ('RefMacro', [FLMMacroSpecBase], {
/* 000432 */ 	__module__: __name__,
/* 000434 */ 	delayed_render: true,
/* 000436 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000436 */ 		var ref_type = 'ref';
/* 000436 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000436 */ 		var counter_prefix_variant = null;
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000444 */ 		var arguments_spec_list = (function () {
/* 000444 */ 			var __accu0__ = self;
/* 000444 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000444 */ 		}) ();
/* 000445 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000449 */ 		self.ref_type = ref_type;
/* 000450 */ 		self.command_arguments = command_arguments;
/* 000451 */ 		self.counter_prefix_variant = counter_prefix_variant;
/* 000453 */ 		self.command_argnames = (function () {
/* 000453 */ 			var __accu0__ = [];
/* 000453 */ 			var __iterable0__ = arguments_spec_list;
/* 000453 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000453 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000453 */ 				(function () {
/* 000453 */ 					var __accu1__ = __accu0__;
/* 000453 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000453 */ 			return __accu0__;
/* 000453 */ 		}) ();
/* 000453 */ 	});},
/* 000455 */ 	_fields: tuple (['macroname', 'ref_type', 'command_arguments', 'counter_prefix_variant']),
/* 000458 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000458 */ 		if (arguments.length) {
/* 000458 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000458 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000458 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000458 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000458 */ 					switch (__attrib0__) {
/* 000458 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000458 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000458 */ 					}
/* 000458 */ 				}
/* 000458 */ 			}
/* 000458 */ 		}
/* 000458 */ 		else {
/* 000458 */ 		}
/* 000459 */ 		return (function () {
/* 000459 */ 			var __accu0__ = [];
/* 000459 */ 			var __iterable0__ = command_arguments;
/* 000459 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000459 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000459 */ 				(function () {
/* 000459 */ 					var __accu1__ = __accu0__;
/* 000459 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, a));
/* 000459 */ 				}) ();
/* 000459 */ 			}
/* 000459 */ 			return __accu0__;
/* 000459 */ 		}) ();
/* 000459 */ 	});},
/* 000461 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000463 */ 		var node_args = (function () {
/* 000463 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000463 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000463 */ 		}) ();
/* 000467 */ 		var ref_spec = (function () {
/* 000467 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000467 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000467 */ 		}) ();
/* 000468 */ 		var ref_pair_list = [];
/* 000469 */ 		var __iterable0__ = (function () {
/* 000469 */ 			var __accu0__ = ref_spec;
/* 000469 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000469 */ 		}) ();
/* 000469 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000469 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000470 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000470 */ 			var ref_type = __left0__ [0];
/* 000470 */ 			var ref_label = __left0__ [1];
/* 000471 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000472 */ 				var __left0__ = (function () {
/* 000472 */ 					var __accu0__ = ref_label;
/* 000472 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000472 */ 				}) ();
/* 000472 */ 				var ref_type = __left0__ [0];
/* 000472 */ 				var ref_label = __left0__ [1];
/* 000472 */ 			}
/* 000473 */ 			(function () {
/* 000473 */ 				var __accu0__ = ref_pair_list;
/* 000473 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000473 */ 			}) ();
/* 000473 */ 		}
/* 000475 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000476 */ 			var display_content_nodelist = (function () {
/* 000476 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000476 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000476 */ 			}) ();
/* 000476 */ 		}
/* 000477 */ 		else {
/* 000478 */ 			var display_content_nodelist = null;
/* 000478 */ 		}
/* 000480 */ 		node.flmarg_ref_list = ref_pair_list;
/* 000481 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000482 */ 			node.flmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000482 */ 		}
/* 000483 */ 		node.flm_ref_info = dict ({'ref_list': ref_pair_list, 'display_content_nodelist': display_content_nodelist});
/* 000483 */ 	});},
/* 000489 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000489 */ 		if (arguments.length) {
/* 000489 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 					switch (__attrib0__) {
/* 000489 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 					}
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 		else {
/* 000489 */ 		}
/* 000490 */ 		// pass;
/* 000490 */ 	});},
/* 000492 */ 	get render () {return __get__ (this, function (self, node, render_context) {
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
/* 000494 */ 		var ref_list = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000495 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000497 */ 		var mgr = (function () {
/* 000497 */ 			var __accu0__ = render_context;
/* 000497 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000497 */ 		}) ();
/* 000498 */ 		var resource_info = node.latex_walker.resource_info;
/* 000500 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000501 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000501 */ 			var ref_type = __left0__ [0];
/* 000501 */ 			var ref_label = __left0__ [1];
/* 000502 */ 			try {
/* 000503 */ 				return (function () {
/* 000503 */ 					var __accu0__ = mgr;
/* 000503 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, __kwargtrans__ ({counter_prefix_variant: self.counter_prefix_variant}));
/* 000503 */ 				}) ();
/* 000503 */ 			}
/* 000503 */ 			catch (__except0__) {
/* 000503 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000503 */ 					var e = __except0__;
/* 000508 */ 					// pass;
/* 000514 */ 					(function () {
/* 000514 */ 						var __accu0__ = e;
/* 000514 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000514 */ 					}) ();
/* 000515 */ 					var __except1__ = e;
/* 000515 */ 					__except1__.__cause__ = null;
/* 000515 */ 					throw __except1__;
/* 000515 */ 				}
/* 000515 */ 				else if (isinstance (__except0__, Exception)) {
/* 000515 */ 					var e = __except0__;
/* 000517 */ 					(function () {
/* 000517 */ 						var __accu0__ = logger;
/* 000518 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ {}'.format (ref_type, ref_label, e, (function () {
/* 000518 */ 							var __accu1__ = node;
/* 000518 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000518 */ 						}) (), (function () {
/* 000518 */ 							var __accu1__ = node;
/* 000518 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000518 */ 						}) ()));
/* 000518 */ 					}) ();
/* 000519 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000519 */ 					__except1__.__cause__ = null;
/* 000519 */ 					throw __except1__;
/* 000519 */ 				}
/* 000519 */ 				else {
/* 000519 */ 					throw __except0__;
/* 000519 */ 				}
/* 000519 */ 			}
/* 000519 */ 		}
/* 000528 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000530 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000530 */ 			__except0__.__cause__ = null;
/* 000530 */ 			throw __except0__;
/* 000530 */ 		}
/* 000532 */ 		return (function () {
/* 000532 */ 			var __accu0__ = mgr;
/* 000532 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info);
/* 000532 */ 		}) ();
/* 000532 */ 	});},
/* 000537 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000537 */ 		var kwargs = dict ();
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 				delete kwargs.__kwargtrans__;
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000538 */ 		if (__t__ (node.flm_ref_info === null)) {
/* 000541 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid ref info in node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000541 */ 			__except0__.__cause__ = null;
/* 000541 */ 			throw __except0__;
/* 000541 */ 		}
/* 000544 */ 		var safe_ref_labels = [];
/* 000545 */ 		var __iterable0__ = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000545 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000545 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000545 */ 			var ref_type = __left0__ [0];
/* 000545 */ 			var ref_label = __left0__ [1];
/* 000546 */ 			(function () {
/* 000546 */ 				var __accu0__ = safe_ref_labels;
/* 000547 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000547 */ 					var __accu1__ = recomposer;
/* 000547 */ 					return __call__ (__accu1__.make_safe_label, __accu1__, 'ref', ref_type, ref_label);
/* 000547 */ 				}) ());
/* 000547 */ 			}) ();
/* 000547 */ 		}
/* 000549 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000551 */ 		if (__t__ (__t__ (display_content_nodelist !== null) && __t__ (display_content_nodelist.nodelist) && __call__ (len, null, display_content_nodelist.nodelist))) {
/* 000552 */ 			if (__t__ (__gt__ (__call__ (len, null, safe_ref_labels), 1))) {
/* 000554 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Hyperref macro cannot have multiple ref targets because it specifies a custom display string.'.format (), __kwargtrans__ ({pos: node.pos}));
/* 000554 */ 				__except0__.__cause__ = null;
/* 000554 */ 				throw __except0__;
/* 000554 */ 			}
/* 000559 */ 			var safe_label = __getitem__ (__getitem__ (safe_ref_labels, 0), 'safe_label');
/* 000560 */ 			var disp_latex_info = (function () {
/* 000560 */ 				var __accu0__ = recomposer;
/* 000560 */ 				return __call__ (__accu0__.recompose_pure_latex, __accu0__, display_content_nodelist);
/* 000560 */ 			}) ();
/* 000561 */ 			var disp_latex = __getitem__ (disp_latex_info, 'latex');
/* 000566 */ 			return __add__ (__add__ (__add__ (__add__ ('\\NoCaseChange{\\protect\\hyperref[', __call__ (str, null, safe_label)), ']{'), __call__ (str, null, disp_latex)), '}}');
/* 000566 */ 		}
/* 000569 */ 		(function () {
/* 000569 */ 			var __accu0__ = recomposer;
/* 000569 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'cleveref');
/* 000569 */ 		}) ();
/* 000572 */ 		return __add__ (__add__ ('\\NoCaseChange{\\protect\\cref{', (function () {
/* 000572 */ 			var __accu0__ = ',';
/* 000572 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000572 */ 				var __accu1__ = [];
/* 000572 */ 				var __iterable0__ = safe_ref_labels;
/* 000572 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000573 */ 					var safe_label_info = __getitem__ (__iterable0__, __index0__);
/* 000573 */ 					(function () {
/* 000573 */ 						var __accu2__ = __accu1__;
/* 000573 */ 						return __call__ (__accu2__.append, __accu2__, __getitem__ (safe_label_info, 'safe_label'));
/* 000573 */ 					}) ();
/* 000573 */ 				}
/* 000573 */ 				return __accu1__;
/* 000573 */ 			}) ());
/* 000573 */ 		}) ()), '}}');
/* 000573 */ 	});}
/* 000573 */ });
/* 000584 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000584 */ 	__module__: __name__,
/* 000590 */ 	feature_name: 'refs',
/* 000591 */ 	feature_title: 'Labels and cross-references',
/* 000593 */ 	RenderManager: FeatureRefsRenderManager,
/* 000595 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000595 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000595 */ 			var external_ref_resolvers = null;
/* 000595 */ 		};
/* 000595 */ 		if (arguments.length) {
/* 000595 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000595 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000595 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000595 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000595 */ 					switch (__attrib0__) {
/* 000595 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 					}
/* 000595 */ 				}
/* 000595 */ 			}
/* 000595 */ 		}
/* 000595 */ 		else {
/* 000595 */ 		}
/* 000596 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000598 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000599 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000599 */ 		}
/* 000600 */ 		else {
/* 000601 */ 			self.external_ref_resolvers = [];
/* 000601 */ 		}
/* 000602 */ 		// pass;
/* 000602 */ 	});},
/* 000607 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000607 */ 		if (arguments.length) {
/* 000607 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000607 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000607 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000607 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000607 */ 					switch (__attrib0__) {
/* 000607 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000607 */ 					}
/* 000607 */ 				}
/* 000607 */ 			}
/* 000607 */ 		}
/* 000607 */ 		else {
/* 000607 */ 		}
/* 000608 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000609 */ 			(function () {
/* 000609 */ 				var __accu0__ = logger;
/* 000609 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000609 */ 			}) ();
/* 000609 */ 		}
/* 000611 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000611 */ 	});},
/* 000613 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000613 */ 		if (arguments.length) {
/* 000613 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000613 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000613 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000613 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000613 */ 					switch (__attrib0__) {
/* 000613 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000613 */ 					}
/* 000613 */ 				}
/* 000613 */ 			}
/* 000613 */ 		}
/* 000613 */ 		else {
/* 000613 */ 		}
/* 000614 */ 		(function () {
/* 000614 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000614 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000614 */ 		}) ();
/* 000614 */ 	});},
/* 000616 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000619 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [(function () {
/* 000619 */ 			var __accu0__ = self;
/* 000619 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])}));
/* 000623 */ 		}) (), (function () {
/* 000623 */ 			var __accu0__ = self;
/* 000623 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}));
/* 000623 */ 		}) ()]}));
/* 000623 */ 	});},
/* 000630 */ 	RefMacroCls: RefMacro,
/* 000633 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000633 */ 		if (arguments.length) {
/* 000633 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 					switch (__attrib0__) {
/* 000633 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 			}
/* 000633 */ 		}
/* 000633 */ 		else {
/* 000633 */ 		}
/* 000636 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000636 */ 	});}
/* 000636 */ });
/* 000645 */ export var FeatureClass = FeatureRefs;
/* 000006 */ 
//# sourceMappingURL=flm.feature.refs.map