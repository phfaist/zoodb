/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000011 */ var logging = {};
/* 000011 */ var re = {};
/* 000011 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000029 */ import {ValueWithSubNums} from './flm.counter.js';
/* 000028 */ import {Feature} from './flm.feature._base.js';
/* 000026 */ import {Any, Mapping, Sequence} from './flm._typing_helpers.js';
/* 000024 */ import {FLMArgumentSpec} from './flm.flmenvironment.js';
/* 000023 */ import {FLMMacroSpecBase} from './flm.flmspecinfo.js';
/* 000022 */ import {FLMFragment} from './flm.flmfragment.js';
/* 000016 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000015 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import * as __module_logging__ from './logging.js';
/* 000012 */ __nest__ (logging, '', __module_logging__);
/* 000011 */ import * as __module_re__ from './re.js';
/* 000011 */ __nest__ (re, '', __module_re__);
/* 000011 */ export {FLMMacroSpecBase, ParsedArgumentsInfo, Feature, latexnodes_parsers, Sequence, Mapping, FLMArgumentSpec, ValueWithSubNums, Any, FLMFragment, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.feature.refs';
/* 000013 */ export var logger = (function () {
/* 000013 */ 	var __accu0__ = logging;
/* 000013 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000013 */ }) ();
/* 000033 */ export var ReferenceableInfo =  __class__ ('ReferenceableInfo', [object], {
/* 000033 */ 	__module__: __name__,
/* 000045 */ 	get __init__ () {return __get__ (this, function (self, kind, formatted_ref_flm_text, labels) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'kind': var kind = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'labels': var labels = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		__call__ (__call__ (__super__, null, ReferenceableInfo, '__init__'), null, self);
/* 000047 */ 		self.kind = kind;
/* 000048 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000049 */ 		self.labels = labels;
/* 000051 */ 		self._fields = tuple (['kind', 'formatted_ref_flm_text', 'labels']);
/* 000051 */ 	});},
/* 000053 */ 	get get_target_id () {return __get__ (this, function (self) {
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000064 */ 		if (__t__ (!__t__ ((self.labels)))) {
/* 000065 */ 			return null;
/* 000065 */ 		}
/* 000067 */ 		var __left0__ = __getitem__ (self.labels, 0);
/* 000067 */ 		var lbl_ref_type = __left0__ [0];
/* 000067 */ 		var lbl_ref_label = __left0__ [1];
/* 000068 */ 		return __call__ (get_safe_target_id, null, lbl_ref_type, lbl_ref_label);
/* 000068 */ 	});},
/* 000070 */ 	get asdict () {return __get__ (this, function (self) {
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
/* 000077 */ 		return (function () {
/* 000077 */ 			var __accu0__ = [];
/* 000077 */ 			var __iterable0__ = self._fields;
/* 000077 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000077 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000077 */ 				(function () {
/* 000077 */ 					var __accu1__ = __accu0__;
/* 000077 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000077 */ 				}) ();
/* 000077 */ 			}
/* 000077 */ 			return dict (__accu0__);
/* 000077 */ 		}) ();
/* 000077 */ 	});},
/* 000079 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000082 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000082 */ 			var __accu0__ = ', ';
/* 000082 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000082 */ 				var __accu1__ = [];
/* 000082 */ 				var __iterable0__ = self._fields;
/* 000082 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000082 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 					(function () {
/* 000082 */ 						var __accu2__ = __accu1__;
/* 000082 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (getattr, null, self, k)));
/* 000082 */ 					}) ();
/* 000082 */ 				}
/* 000082 */ 				return py_iter (__accu1__);
/* 000082 */ 			}) ());
/* 000082 */ 		}) ()), ')');
/* 000082 */ 	});}
/* 000082 */ });
/* 000088 */ export var RefInstance =  __class__ ('RefInstance', [object], {
/* 000088 */ 	__module__: __name__,
/* 000093 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_flm_text, target_href, counter_value, counter_numprefix, counter_formatter_id) {
/* 000093 */ 		if (arguments.length) {
/* 000093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000093 */ 					switch (__attrib0__) {
/* 000093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000093 */ 					}
/* 000093 */ 				}
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 		else {
/* 000093 */ 		}
/* 000112 */ 		__call__ (__call__ (__super__, null, RefInstance, '__init__'), null, self);
/* 000113 */ 		self.ref_type = ref_type;
/* 000114 */ 		self.ref_label = ref_label;
/* 000115 */ 		self.formatted_ref_flm_text = formatted_ref_flm_text;
/* 000116 */ 		self.target_href = target_href;
/* 000117 */ 		self.counter_value = counter_value;
/* 000118 */ 		self.counter_numprefix = counter_numprefix;
/* 000119 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000121 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_flm_text', 'target_href', 'counter_value', 'counter_numprefix', 'counter_formatter_id']);
/* 000121 */ 	});},
/* 000124 */ 	get asdict () {return __get__ (this, function (self) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		return (function () {
/* 000125 */ 			var __accu0__ = [];
/* 000125 */ 			var __iterable0__ = self._fields;
/* 000125 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000125 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 				(function () {
/* 000125 */ 					var __accu1__ = __accu0__;
/* 000125 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000125 */ 				}) ();
/* 000125 */ 			}
/* 000125 */ 			return dict (__accu0__);
/* 000125 */ 		}) ();
/* 000125 */ 	});},
/* 000127 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000130 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000130 */ 			var __accu0__ = ', ';
/* 000130 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000130 */ 				var __accu1__ = [];
/* 000130 */ 				var __iterable0__ = self._fields;
/* 000130 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000130 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000130 */ 					(function () {
/* 000130 */ 						var __accu2__ = __accu1__;
/* 000130 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000130 */ 					}) ();
/* 000130 */ 				}
/* 000130 */ 				return py_iter (__accu1__);
/* 000130 */ 			}) ());
/* 000130 */ 		}) ()), ')');
/* 000130 */ 	});}
/* 000130 */ });
/* 000143 */ var hexstr = (v) => (+v).toString(16);
/* 000151 */ export var _rx_unsafe_char = (function () {
/* 000151 */ 	var __accu0__ = re;
/* 000151 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000151 */ }) ();
/* 000152 */ export var _rx_match_safechar = function (m) {
/* 000152 */ 	if (arguments.length) {
/* 000152 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 				switch (__attrib0__) {
/* 000152 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 	}
/* 000152 */ 	else {
/* 000152 */ 	}
/* 000153 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000153 */ 		var __accu0__ = m;
/* 000153 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000153 */ 	}) ())));
/* 000153 */ };
/* 000155 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000155 */ 	if (arguments.length) {
/* 000155 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 				switch (__attrib0__) {
/* 000155 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 	}
/* 000155 */ 	else {
/* 000155 */ 	}
/* 000166 */ 	var ref_type_safe = (function () {
/* 000166 */ 		var __accu0__ = _rx_unsafe_char;
/* 000166 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000166 */ 	}) ();
/* 000167 */ 	var ref_label_safe = (function () {
/* 000167 */ 		var __accu0__ = _rx_unsafe_char;
/* 000167 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000167 */ 	}) ();
/* 000168 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000168 */ };
/* 000173 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000173 */ 	__module__: __name__,
/* 000175 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000175 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000175 */ 			var add_external_ref_resolvers = null;
/* 000175 */ 		};
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 			}
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 		}
/* 000176 */ 		self.ref_labels = dict ({});
/* 000177 */ 		self.registered_references = dict ({});
/* 000178 */ 		self.external_ref_resolvers = [];
/* 000179 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000180 */ 			(function () {
/* 000180 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000180 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000180 */ 			}) ();
/* 000180 */ 		}
/* 000181 */ 		(function () {
/* 000181 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000181 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000181 */ 		}) ();
/* 000183 */ 		self.registered_counter_formatters = dict ({});
/* 000183 */ 	});},
/* 000185 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000187 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000188 */ 			return ;
/* 000188 */ 		}
/* 000190 */ 		var target_href = __add__ ('#', (function () {
/* 000190 */ 			var __accu0__ = referenceable_info;
/* 000190 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000190 */ 		}) ());
/* 000192 */ 		var __iterable0__ = referenceable_info.labels;
/* 000192 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000192 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000192 */ 			var ref_type = __left0__ [0];
/* 000192 */ 			var ref_label = __left0__ [1];
/* 000193 */ 			(function () {
/* 000193 */ 				var __accu0__ = self;
/* 000193 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text, node: node, target_href: target_href}));
/* 000193 */ 			}) ();
/* 000193 */ 		}
/* 000193 */ 	});},
/* 000200 */ 	get register_counter_formatter () {return __get__ (this, function (self) {
/* 000200 */ 		var counter_formatter_id = null;
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000201 */ 		if (__t__ (counter_formatter_id === null)) {
/* 000202 */ 			var counter_formatter_id = counter_formatter.counter_formatter_id;
/* 000202 */ 		}
/* 000203 */ 		if (__t__ (__in__ (counter_formatter_id, self.registered_counter_formatters))) {
/* 000204 */ 			var __except0__ = __call__ (ValueError, null, 'Counter formatter width ID ‘{}’ is already registered!'.format (counter_formatter_id));
/* 000204 */ 			__except0__.__cause__ = null;
/* 000204 */ 			throw __except0__;
/* 000204 */ 		}
/* 000207 */ 		__setitem__ (self.registered_counter_formatters, counter_formatter_id, counter_formatter);
/* 000207 */ 	});},
/* 000209 */ 	get register_reference_step_counter () {return __get__ (this, function (self) {
/* 000209 */ 		var ref_type = null;
/* 000209 */ 		var ref_label = null;
/* 000209 */ 		var target_href_fn = null;
/* 000209 */ 		var counter_with_prefix = true;
/* 000209 */ 		var counter_prefix_variant = null;
/* 000209 */ 		var counter_with_delimiters = true;
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'counter_iface': var counter_iface = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'target_href_fn': var target_href_fn = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000221 */ 		var node_id = (function () {
/* 000221 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000221 */ 		}) ();
/* 000222 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000223 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000224 */ 			return __getitem__ (self.registered_references, kk);
/* 000224 */ 		}
/* 000226 */ 		var cnt_info = (function () {
/* 000226 */ 			var __accu0__ = counter_iface;
/* 000226 */ 			return __call__ (__accu0__.register_item, __accu0__);
/* 000226 */ 		}) ();
/* 000231 */ 		var formatted_ref_flm_text = (function () {
/* 000231 */ 			var __accu0__ = counter_iface.formatter;
/* 000231 */ 			return __call__ (__accu0__.format_flm, __accu0__, __getitem__ (cnt_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (cnt_info, 'numprefix'), with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000231 */ 		}) ();
/* 000239 */ 		if (__t__ (target_href_fn !== null)) {
/* 000240 */ 			var target_href = __call__ (target_href_fn, null, __getitem__ (cnt_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (cnt_info, 'numprefix')}));
/* 000240 */ 		}
/* 000243 */ 		else {
/* 000245 */ 			var target_href = null;
/* 000245 */ 		}
/* 000247 */ 		return (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: __getitem__ (cnt_info, 'value'), counter_numprefix: __getitem__ (cnt_info, 'numprefix'), counter_formatter_id: counter_iface.formatter.counter_formatter_id}));
/* 000247 */ 		}) ();
/* 000247 */ 	});},
/* 000258 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000258 */ 		var counter_value = null;
/* 000258 */ 		var counter_numprefix = null;
/* 000258 */ 		var counter_formatter_id = null;
/* 000258 */ 		if (arguments.length) {
/* 000258 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000258 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000258 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000258 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000258 */ 					switch (__attrib0__) {
/* 000258 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000258 */ 					}
/* 000258 */ 				}
/* 000258 */ 			}
/* 000258 */ 		}
/* 000258 */ 		else {
/* 000258 */ 		}
/* 000284 */ 		var node_id = (function () {
/* 000284 */ 			var __accu0__ = self;
/* 000284 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000284 */ 		}) ();
/* 000285 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000286 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000287 */ 			return __getitem__ (self.registered_references, kk);
/* 000287 */ 		}
/* 000289 */ 		if (__t__ (__t__ (ref_type !== null) && __t__ (ref_label !== null) && __in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000291 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000291 */ 			__except0__.__cause__ = null;
/* 000291 */ 			throw __except0__;
/* 000291 */ 		}
/* 000295 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter_value, counter_numprefix: counter_numprefix, counter_formatter_id: counter_formatter_id}));
/* 000305 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000306 */ 		if (__t__ (__t__ (ref_type !== null) && ref_label !== null)) {
/* 000307 */ 			self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000307 */ 		}
/* 000308 */ 		// pass;
/* 000311 */ 		return refinstance;
/* 000311 */ 	});},
/* 000314 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000315 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000316 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000316 */ 		}
/* 000318 */ 		// pass;
/* 000324 */ 		// pass;
/* 000328 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000328 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000329 */ 			// pass;
/* 000332 */ 			var ref = (function () {
/* 000332 */ 				var __accu0__ = resolver;
/* 000332 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000332 */ 			}) ();
/* 000338 */ 			// pass;
/* 000341 */ 			if (__t__ (ref !== null)) {
/* 000342 */ 				return ref;
/* 000342 */ 			}
/* 000342 */ 		}
/* 000344 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label), __kwargtrans__ ({pos: null}));
/* 000344 */ 		__except0__.__cause__ = null;
/* 000344 */ 		throw __except0__;
/* 000344 */ 	});},
/* 000351 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_flm, resource_info) {
/* 000351 */ 		var counter_prefix_variant = null;
/* 000351 */ 		var counter_with_prefix = true;
/* 000351 */ 		var counter_with_delimiters = true;
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000357 */ 		var ref_instance = (function () {
/* 000357 */ 			var __accu0__ = self;
/* 000357 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000357 */ 		}) ();
/* 000359 */ 		return (function () {
/* 000359 */ 			var __accu0__ = self;
/* 000359 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_flm, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000359 */ 		}) ();
/* 000359 */ 	});},
/* 000366 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_flm) {
/* 000366 */ 		var counter_prefix_variant = null;
/* 000366 */ 		var counter_with_prefix = true;
/* 000366 */ 		var counter_with_delimiters = true;
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000371 */ 		if (__t__ (display_content_flm !== null)) {
/* 000372 */ 			return (function () {
/* 000372 */ 				var __accu0__ = self;
/* 000372 */ 				return __call__ (__accu0__._render_ref_with_display_text, __accu0__, ref_instance, display_content_flm);
/* 000372 */ 			}) ();
/* 000372 */ 		}
/* 000374 */ 		if (__t__ (__t__ (ref_instance.counter_value !== null) && ref_instance.counter_formatter_id !== null)) {
/* 000376 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, ref_instance.counter_formatter_id);
/* 000378 */ 			var display_content_flm = (function () {
/* 000378 */ 				var __accu0__ = counter_formatter;
/* 000379 */ 				return __call__ (__accu0__.format_flm, __accu0__, __call__ (ValueWithSubNums, null, ref_instance.counter_value), __kwargtrans__ ({numprefix: ref_instance.counter_numprefix, with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000379 */ 			}) ();
/* 000385 */ 			return (function () {
/* 000385 */ 				var __accu0__ = self;
/* 000385 */ 				return __call__ (__accu0__._render_ref_with_display_text, __accu0__, ref_instance, display_content_flm);
/* 000385 */ 			}) ();
/* 000385 */ 		}
/* 000387 */ 		return (function () {
/* 000387 */ 			var __accu0__ = self;
/* 000387 */ 			return __call__ (__accu0__._render_ref_with_display_text, __accu0__, ref_instance, ref_instance.formatted_ref_flm_text);
/* 000387 */ 		}) ();
/* 000387 */ 	});},
/* 000391 */ 	get _render_ref_with_display_text () {return __get__ (this, function (self, ref_instance, display_content_flm) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000393 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_flm, FLMFragment))))) {
/* 000394 */ 			var display_content_flm = (function () {
/* 000394 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000394 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_flm, __kwargtrans__ ({standalone_mode: true}));
/* 000394 */ 			}) ();
/* 000394 */ 		}
/* 000399 */ 		var display_content_nodelist = display_content_flm.nodes;
/* 000401 */ 		var fragment_renderer = self.render_context.fragment_renderer;
/* 000403 */ 		return (function () {
/* 000403 */ 			var __accu0__ = fragment_renderer;
/* 000403 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: self.render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000403 */ 		}) ();
/* 000403 */ 	});},
/* 000413 */ 	ref_many_use_flm_hyperref: true,
/* 000415 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info) {
/* 000415 */ 		var counter_prefix_variant = null;
/* 000415 */ 		var counter_with_delimiters = true;
/* 000415 */ 		var counter_with_prefix = true;
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000420 */ 		var render_context = self.render_context;
/* 000421 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000423 */ 		var ref_instances = (function () {
/* 000423 */ 			var __accu0__ = [];
/* 000423 */ 			var __iterable0__ = ref_type_label_list;
/* 000423 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000425 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000425 */ 				var ref_type = __left0__ [0];
/* 000425 */ 				var ref_label = __left0__ [1];
/* 000425 */ 				(function () {
/* 000425 */ 					var __accu1__ = __accu0__;
/* 000424 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000424 */ 						var __accu2__ = self;
/* 000424 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000424 */ 					}) ());
/* 000424 */ 				}) ();
/* 000424 */ 			}
/* 000424 */ 			return __accu0__;
/* 000424 */ 		}) ();
/* 000429 */ 		var ref_instances_by_counter_formatter_id = __call__ (dict, null);
/* 000430 */ 		var ref_instances_by_counter_formatter_id_numprefixes = __call__ (dict, null);
/* 000431 */ 		var ref_instances_nocounter = [];
/* 000432 */ 		var __iterable0__ = ref_instances;
/* 000432 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000432 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000433 */ 			if (__t__ (__t__ (ri.counter_value === null) || ri.counter_formatter_id === null)) {
/* 000434 */ 				(function () {
/* 000434 */ 					var __accu0__ = ref_instances_nocounter;
/* 000434 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000434 */ 				}) ();
/* 000434 */ 				continue;
/* 000434 */ 			}
/* 000436 */ 			var ricfid = ri.counter_formatter_id;
/* 000437 */ 			if (__t__ (!__in__ (ricfid, ref_instances_by_counter_formatter_id))) {
/* 000438 */ 				__setitem__ (ref_instances_by_counter_formatter_id, ricfid, dict ({}));
/* 000439 */ 				__setitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid, []);
/* 000439 */ 			}
/* 000441 */ 			var c_numprefix = ri.counter_numprefix;
/* 000442 */ 			var c_numprefix_s = __call__ (repr, null, c_numprefix);
/* 000443 */ 			var c_value = __call__ (ValueWithSubNums, null, ri.counter_value);
/* 000444 */ 			if (__t__ (!__in__ (c_numprefix, __getitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid)))) {
/* 000445 */ 				(function () {
/* 000445 */ 					var __accu0__ = __getitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid);
/* 000445 */ 					return __call__ (__accu0__.append, __accu0__, c_numprefix);
/* 000445 */ 				}) ();
/* 000446 */ 				__setitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ricfid), c_numprefix_s, []);
/* 000446 */ 			}
/* 000447 */ 			(function () {
/* 000447 */ 				var __accu0__ = __getitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ricfid), c_numprefix_s);
/* 000447 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'value': c_value, 'ri': ri}));
/* 000447 */ 			}) ();
/* 000447 */ 		}
/* 000452 */ 		var s_final_blocks = [];
/* 000454 */ 		var __iterable0__ = (function () {
/* 000454 */ 			var __accu0__ = ref_instances_by_counter_formatter_id_numprefixes;
/* 000454 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000454 */ 		}) ();
/* 000454 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000454 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000454 */ 			var counter_formatter_id = __left0__ [0];
/* 000454 */ 			var rcnumprefixes = __left0__ [1];
/* 000455 */ 			var rcdict = __getitem__ (ref_instances_by_counter_formatter_id, counter_formatter_id);
/* 000457 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, counter_formatter_id);
/* 000459 */ 			var s_items = (function () {
/* 000459 */ 				var __accu0__ = counter_formatter;
/* 000459 */ 				return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000459 */ 					var __accu1__ = [];
/* 000460 */ 					var __iterable1__ = rcnumprefixes;
/* 000460 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000461 */ 						var np = __getitem__ (__iterable1__, __index1__);
/* 000461 */ 						(function () {
/* 000461 */ 							var __accu2__ = __accu1__;
/* 000461 */ 							return __call__ (__accu2__.append, __accu2__, tuple ([np, (function () {
/* 000461 */ 								var __accu3__ = [];
/* 000460 */ 								var __iterable2__ = __getitem__ (rcdict, __call__ (repr, null, np));
/* 000460 */ 								for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000460 */ 									var d = __getitem__ (__iterable2__, __index2__);
/* 000460 */ 									(function () {
/* 000460 */ 										var __accu4__ = __accu3__;
/* 000460 */ 										return __call__ (__accu4__.append, __accu4__, __getitem__ (d, 'value'));
/* 000460 */ 									}) ();
/* 000460 */ 								}
/* 000460 */ 								return __accu3__;
/* 000460 */ 							}) ()]));
/* 000460 */ 						}) ();
/* 000460 */ 					}
/* 000460 */ 					return __accu1__;
/* 000460 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000460 */ 			}) ();
/* 000469 */ 			var s = '';
/* 000470 */ 			var __iterable1__ = s_items;
/* 000470 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000470 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000471 */ 				var s_frag = (function () {
/* 000471 */ 					var __accu0__ = render_context;
/* 000474 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000474 */ 				}) ();
/* 000476 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000477 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000477 */ 						var __accu0__ = fragment_renderer;
/* 000477 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000477 */ 					}) ());
/* 000477 */ 				}
/* 000478 */ 				else {
/* 000479 */ 					var rinst = null;
/* 000480 */ 					var __iterable2__ = __getitem__ (rcdict, __call__ (repr, null, __getitem__ (sit, 'np')));
/* 000480 */ 					for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000480 */ 						var rivalue = __getitem__ (__iterable2__, __index2__);
/* 000481 */ 						if (__t__ ((function () {
/* 000481 */ 							var __accu0__ = __getitem__ (rivalue, 'value');
/* 000481 */ 							return __call__ (__accu0__.equals, __accu0__, __getitem__ (sit, 'n'));
/* 000481 */ 						}) ())) {
/* 000482 */ 							var rinst = __getitem__ (rivalue, 'ri');
/* 000482 */ 							break;
/* 000482 */ 						}
/* 000482 */ 					}
/* 000484 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000484 */ 						var __accu0__ = fragment_renderer;
/* 000484 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['refcnt-{}'.format (counter_formatter_id)]}));
/* 000484 */ 					}) ());
/* 000484 */ 				}
/* 000484 */ 			}
/* 000492 */ 			(function () {
/* 000492 */ 				var __accu0__ = s_final_blocks;
/* 000492 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000492 */ 			}) ();
/* 000492 */ 		}
/* 000494 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000495 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000495 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000495 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000496 */ 				(function () {
/* 000496 */ 					var __accu0__ = s_final_blocks;
/* 000497 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000497 */ 						var __accu1__ = self;
/* 000497 */ 						return __call__ (__accu1__._render_ref_with_display_text, __accu1__, ri, ri.formatted_ref_flm_text);
/* 000497 */ 					}) ());
/* 000497 */ 				}) ();
/* 000497 */ 			}
/* 000497 */ 		}
/* 000502 */ 		return (function () {
/* 000502 */ 			var __accu0__ = ', ';
/* 000502 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000502 */ 		}) ();
/* 000502 */ 	});},
/* 000506 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000508 */ 		try {
/* 000509 */ 			return (function () {
/* 000509 */ 				var __accu0__ = self;
/* 000509 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000509 */ 			}) ();
/* 000509 */ 		}
/* 000509 */ 		catch (__except0__) {
/* 000509 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000509 */ 				var e = __except0__;
/* 000511 */ 				// pass;
/* 000516 */ 				__except0__.__cause__ = null;
/* 000516 */ 				throw __except0__;
/* 000516 */ 			}
/* 000516 */ 			else if (isinstance (__except0__, Exception)) {
/* 000516 */ 				var e = __except0__;
/* 000518 */ 				// pass;
/* 000524 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000524 */ 				__except1__.__cause__ = null;
/* 000524 */ 				throw __except1__;
/* 000524 */ 			}
/* 000524 */ 			else {
/* 000524 */ 				throw __except0__;
/* 000524 */ 			}
/* 000524 */ 		}
/* 000524 */ 	});}
/* 000524 */ });
/* 000537 */ export var _ref_arg_specs = dict ({'[]ref_options': __call__ (FLMArgumentSpec, null, (function () {
/* 000537 */ 	var __accu0__ = latexnodes_parsers;
/* 000537 */ 	return __call__ (__accu0__.LatexOptionalSquareBracketsParser, __accu0__);
/* 000541 */ }) (), __kwargtrans__ ({argname: 'ref_options'})), 'ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000541 */ 	var __accu0__ = latexnodes_parsers;
/* 000541 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000545 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000545 */ 	var __accu0__ = latexnodes_parsers;
/* 000545 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000558 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'})), 'Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'ref_label'})), '[]Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: 'r[]', argname: 'ref_label'}))});
/* 000565 */ export var RefMacro =  __class__ ('RefMacro', [FLMMacroSpecBase], {
/* 000565 */ 	__module__: __name__,
/* 000567 */ 	delayed_render: true,
/* 000569 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000569 */ 		var ref_type = 'ref';
/* 000569 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000569 */ 		var counter_prefix_variant = null;
/* 000569 */ 		if (arguments.length) {
/* 000569 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000569 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000569 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000569 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000569 */ 					switch (__attrib0__) {
/* 000569 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 					}
/* 000569 */ 				}
/* 000569 */ 			}
/* 000569 */ 		}
/* 000569 */ 		else {
/* 000569 */ 		}
/* 000577 */ 		var arguments_spec_list = (function () {
/* 000577 */ 			var __accu0__ = self;
/* 000577 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000577 */ 		}) ();
/* 000578 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000582 */ 		self.ref_type = ref_type;
/* 000583 */ 		self.command_arguments = command_arguments;
/* 000584 */ 		self.counter_prefix_variant = counter_prefix_variant;
/* 000586 */ 		self.command_argnames = (function () {
/* 000586 */ 			var __accu0__ = [];
/* 000586 */ 			var __iterable0__ = arguments_spec_list;
/* 000586 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000586 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000586 */ 				(function () {
/* 000586 */ 					var __accu1__ = __accu0__;
/* 000586 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000586 */ 				}) ();
/* 000586 */ 			}
/* 000586 */ 			return __accu0__;
/* 000586 */ 		}) ();
/* 000586 */ 	});},
/* 000588 */ 	_fields: tuple (['macroname', 'ref_type', 'command_arguments', 'counter_prefix_variant']),
/* 000591 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000591 */ 		if (arguments.length) {
/* 000591 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000591 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000591 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000591 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000591 */ 					switch (__attrib0__) {
/* 000591 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000591 */ 					}
/* 000591 */ 				}
/* 000591 */ 			}
/* 000591 */ 		}
/* 000591 */ 		else {
/* 000591 */ 		}
/* 000592 */ 		return (function () {
/* 000592 */ 			var __accu0__ = [];
/* 000592 */ 			var __iterable0__ = command_arguments;
/* 000592 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000592 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000592 */ 				(function () {
/* 000592 */ 					var __accu1__ = __accu0__;
/* 000592 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, a));
/* 000592 */ 				}) ();
/* 000592 */ 			}
/* 000592 */ 			return __accu0__;
/* 000592 */ 		}) ();
/* 000592 */ 	});},
/* 000594 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000594 */ 		if (arguments.length) {
/* 000594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000594 */ 					switch (__attrib0__) {
/* 000594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 					}
/* 000594 */ 				}
/* 000594 */ 			}
/* 000594 */ 		}
/* 000594 */ 		else {
/* 000594 */ 		}
/* 000596 */ 		var node_args = (function () {
/* 000596 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000596 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000596 */ 		}) ();
/* 000600 */ 		var ref_spec = (function () {
/* 000600 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000600 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000600 */ 		}) ();
/* 000601 */ 		var ref_pair_list = [];
/* 000602 */ 		var __iterable0__ = (function () {
/* 000602 */ 			var __accu0__ = ref_spec;
/* 000602 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000602 */ 		}) ();
/* 000602 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000602 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000603 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000603 */ 			var ref_type = __left0__ [0];
/* 000603 */ 			var ref_label = __left0__ [1];
/* 000604 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000605 */ 				var __left0__ = (function () {
/* 000605 */ 					var __accu0__ = ref_label;
/* 000605 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000605 */ 				}) ();
/* 000605 */ 				var ref_type = __left0__ [0];
/* 000605 */ 				var ref_label = __left0__ [1];
/* 000605 */ 			}
/* 000606 */ 			(function () {
/* 000606 */ 				var __accu0__ = ref_pair_list;
/* 000606 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000606 */ 			}) ();
/* 000606 */ 		}
/* 000608 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000609 */ 			var display_content_nodelist = (function () {
/* 000609 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000609 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000609 */ 			}) ();
/* 000609 */ 		}
/* 000610 */ 		else {
/* 000611 */ 			var display_content_nodelist = null;
/* 000611 */ 		}
/* 000613 */ 		if (__t__ (__in__ ('ref_options', node_args))) {
/* 000614 */ 			var ref_options_nodelist = (function () {
/* 000614 */ 				var __accu0__ = __getitem__ (node_args, 'ref_options');
/* 000614 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000614 */ 			}) ();
/* 000615 */ 			var ref_options = (function () {
/* 000615 */ 				var __accu0__ = ref_options_nodelist;
/* 000615 */ 				return __call__ (__accu0__.parse_keyval_content, __accu0__);
/* 000615 */ 			}) ();
/* 000615 */ 		}
/* 000616 */ 		else {
/* 000617 */ 			var ref_options_nodelist = null;
/* 000618 */ 			var ref_options = dict ({});
/* 000618 */ 		}
/* 000620 */ 		node.flmarg_ref_list = ref_pair_list;
/* 000621 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000622 */ 			node.flmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000622 */ 		}
/* 000623 */ 		node.flm_ref_info = dict ({'ref_list': ref_pair_list, 'ref_options': ref_options, 'display_content_nodelist': display_content_nodelist});
/* 000623 */ 	});},
/* 000630 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000630 */ 		if (arguments.length) {
/* 000630 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000630 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000630 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000630 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000630 */ 					switch (__attrib0__) {
/* 000630 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000630 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000630 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000630 */ 					}
/* 000630 */ 				}
/* 000630 */ 			}
/* 000630 */ 		}
/* 000630 */ 		else {
/* 000630 */ 		}
/* 000631 */ 		// pass;
/* 000631 */ 	});},
/* 000633 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000633 */ 		if (arguments.length) {
/* 000633 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000633 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000633 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000633 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000633 */ 					switch (__attrib0__) {
/* 000633 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000633 */ 					}
/* 000633 */ 				}
/* 000633 */ 			}
/* 000633 */ 		}
/* 000633 */ 		else {
/* 000633 */ 		}
/* 000635 */ 		var ref_list = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000636 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000637 */ 		var ref_options = __getitem__ (node.flm_ref_info, 'ref_options');
/* 000639 */ 		var mgr = (function () {
/* 000639 */ 			var __accu0__ = render_context;
/* 000639 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000639 */ 		}) ();
/* 000640 */ 		var resource_info = node.latex_walker.resource_info;
/* 000642 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000643 */ 			var counter_prefix_variant = self.counter_prefix_variant;
/* 000644 */ 			if (__t__ (__in__ ('S', ref_options))) {
/* 000645 */ 				var counter_prefix_variant = 'capital';
/* 000645 */ 			}
/* 000647 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000647 */ 			var ref_type = __left0__ [0];
/* 000647 */ 			var ref_label = __left0__ [1];
/* 000648 */ 			try {
/* 000649 */ 				return (function () {
/* 000649 */ 					var __accu0__ = mgr;
/* 000649 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant}));
/* 000649 */ 				}) ();
/* 000649 */ 			}
/* 000649 */ 			catch (__except0__) {
/* 000649 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000649 */ 					var e = __except0__;
/* 000654 */ 					// pass;
/* 000660 */ 					(function () {
/* 000660 */ 						var __accu0__ = e;
/* 000660 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000660 */ 					}) ();
/* 000661 */ 					var __except1__ = e;
/* 000661 */ 					__except1__.__cause__ = null;
/* 000661 */ 					throw __except1__;
/* 000661 */ 				}
/* 000661 */ 				else if (isinstance (__except0__, Exception)) {
/* 000661 */ 					var e = __except0__;
/* 000663 */ 					(function () {
/* 000663 */ 						var __accu0__ = logger;
/* 000664 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ {}'.format (ref_type, ref_label, e, (function () {
/* 000664 */ 							var __accu1__ = node;
/* 000664 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000664 */ 						}) (), (function () {
/* 000664 */ 							var __accu1__ = node;
/* 000664 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000664 */ 						}) ()));
/* 000664 */ 					}) ();
/* 000665 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000665 */ 					__except1__.__cause__ = null;
/* 000665 */ 					throw __except1__;
/* 000665 */ 				}
/* 000665 */ 				else {
/* 000665 */ 					throw __except0__;
/* 000665 */ 				}
/* 000665 */ 			}
/* 000665 */ 		}
/* 000674 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000676 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000676 */ 			__except0__.__cause__ = null;
/* 000676 */ 			throw __except0__;
/* 000676 */ 		}
/* 000678 */ 		return (function () {
/* 000678 */ 			var __accu0__ = mgr;
/* 000678 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info);
/* 000678 */ 		}) ();
/* 000678 */ 	});},
/* 000683 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000683 */ 		var kwargs = dict ();
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 				delete kwargs.__kwargtrans__;
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000685 */ 		var recopt_refs = (function () {
/* 000685 */ 			var __accu0__ = recomposer;
/* 000685 */ 			return __call__ (__accu0__.get_options, __accu0__, 'refs');
/* 000685 */ 		}) ();
/* 000686 */ 		// pass;
/* 000689 */ 		var protect_surround = (function () {
/* 000689 */ 			var __accu0__ = recopt_refs;
/* 000689 */ 			return __call__ (__accu0__.py_get, __accu0__, 'protect_surround', tuple (['\\NoCaseChange{\\protect', '}']));
/* 000689 */ 		}) ();
/* 000693 */ 		var emit_flm_macro = (function () {
/* 000693 */ 			var __accu0__ = recopt_refs;
/* 000693 */ 			return __call__ (__accu0__.py_get, __accu0__, 'emit_flm_macro', false);
/* 000693 */ 		}) ();
/* 000695 */ 		if (__t__ (node.flm_ref_info === null)) {
/* 000698 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid ref info in node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000698 */ 			__except0__.__cause__ = null;
/* 000698 */ 			throw __except0__;
/* 000698 */ 		}
/* 000701 */ 		var safe_ref_labels = [];
/* 000702 */ 		var __iterable0__ = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000702 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000702 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000702 */ 			var ref_type = __left0__ [0];
/* 000702 */ 			var ref_label = __left0__ [1];
/* 000703 */ 			(function () {
/* 000703 */ 				var __accu0__ = safe_ref_labels;
/* 000704 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000704 */ 					var __accu1__ = recomposer;
/* 000704 */ 					return __call__ (__accu1__.make_safe_label, __accu1__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000704 */ 				}) ());
/* 000704 */ 			}) ();
/* 000704 */ 		}
/* 000708 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000710 */ 		if (__t__ (__t__ (display_content_nodelist !== null) && __t__ (display_content_nodelist.nodelist) && __call__ (len, null, display_content_nodelist.nodelist))) {
/* 000711 */ 			if (__t__ (__gt__ (__call__ (len, null, safe_ref_labels), 1))) {
/* 000713 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Hyperref macro cannot have multiple ref targets because it specifies a custom display string.'.format (), __kwargtrans__ ({pos: node.pos}));
/* 000713 */ 				__except0__.__cause__ = null;
/* 000713 */ 				throw __except0__;
/* 000713 */ 			}
/* 000718 */ 			var safe_label = __getitem__ (__getitem__ (safe_ref_labels, 0), 'safe_label');
/* 000719 */ 			var disp_latex = (function () {
/* 000719 */ 				var __accu0__ = recomposer;
/* 000719 */ 				return __call__ (__accu0__.subrecompose, __accu0__, display_content_nodelist);
/* 000719 */ 			}) ();
/* 000720 */ 			if (__t__ (emit_flm_macro)) {
/* 000721 */ 				return __add__ (__add__ (__add__ (__add__ ('\\flmRefsHyperref{', __call__ (str, null, safe_label)), '}{'), __call__ (str, null, disp_latex)), '}');
/* 000721 */ 			}
/* 000726 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__getitem__ (protect_surround, 0), '\\hyperref[{'), __call__ (str, null, safe_label)), '}]{'), __call__ (str, null, disp_latex)), '}'), __getitem__ (protect_surround, 1));
/* 000726 */ 		}
/* 000730 */ 		var safe_labels_comma = (function () {
/* 000730 */ 			var __accu0__ = ',';
/* 000730 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000730 */ 				var __accu1__ = [];
/* 000730 */ 				var __iterable0__ = safe_ref_labels;
/* 000730 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000732 */ 					var safe_label_info = __getitem__ (__iterable0__, __index0__);
/* 000732 */ 					(function () {
/* 000732 */ 						var __accu2__ = __accu1__;
/* 000732 */ 						return __call__ (__accu2__.append, __accu2__, __getitem__ (safe_label_info, 'safe_label'));
/* 000732 */ 					}) ();
/* 000732 */ 				}
/* 000732 */ 				return __accu1__;
/* 000732 */ 			}) ());
/* 000732 */ 		}) ();
/* 000735 */ 		var flm_refs_options = __getitem__ (node.flm_ref_info, 'ref_options');
/* 000736 */ 		var flm_refs_options_string = '';
/* 000737 */ 		if (__t__ (__t__ (flm_refs_options !== null) && __call__ (len, null, flm_refs_options))) {
/* 000738 */ 			var opts_strings = [];
/* 000739 */ 			var __iterable0__ = (function () {
/* 000739 */ 				var __accu0__ = flm_refs_options;
/* 000739 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000739 */ 			}) ();
/* 000739 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000739 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000739 */ 				var opt_key = __left0__ [0];
/* 000739 */ 				var opt_val_nodelist = __left0__ [1];
/* 000740 */ 				var opt_s = opt_key;
/* 000742 */ 				if (__t__ (__t__ (opt_val_nodelist !== null) && (__t__ (__ne__ (__call__ (len, null, opt_val_nodelist), 1)) || __getitem__ (opt_val_nodelist, 0) !== null))) {
/* 000744 */ 					var opt_s = __call__ (__iadd__, null, opt_s, __add__ (__add__ ('={', (function () {
/* 000744 */ 						var __accu0__ = recomposer;
/* 000744 */ 						return __call__ (__accu0__.subrecompose, __accu0__, opt_val_nodelist);
/* 000744 */ 					}) ()), '}'));
/* 000744 */ 				}
/* 000745 */ 				(function () {
/* 000745 */ 					var __accu0__ = opts_strings;
/* 000745 */ 					return __call__ (__accu0__.append, __accu0__, opt_s);
/* 000745 */ 				}) ();
/* 000745 */ 			}
/* 000746 */ 			var flm_refs_options_string = __add__ (__add__ ('[', (function () {
/* 000746 */ 				var __accu0__ = ',';
/* 000746 */ 				return __call__ (__accu0__.join, __accu0__, opts_strings);
/* 000746 */ 			}) ()), ']');
/* 000746 */ 		}
/* 000748 */ 		if (__t__ (emit_flm_macro)) {
/* 000749 */ 			return __add__ (__add__ (__add__ (__add__ ('\\flmRefsCref', flm_refs_options_string), '{'), safe_labels_comma), '}');
/* 000749 */ 		}
/* 000753 */ 		(function () {
/* 000753 */ 			var __accu0__ = recomposer;
/* 000753 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'zref-clever');
/* 000753 */ 		}) ();
/* 000754 */ 		return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__getitem__ (protect_surround, 0), '\\zcref'), flm_refs_options_string), '{'), safe_labels_comma), '}'), __getitem__ (protect_surround, 1));
/* 000754 */ 	});}
/* 000754 */ });
/* 000779 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000779 */ 	__module__: __name__,
/* 000787 */ 	feature_name: 'refs',
/* 000788 */ 	feature_title: 'Labels and cross-references',
/* 000790 */ 	RenderManager: FeatureRefsRenderManager,
/* 000792 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers, allow_unresolved_refs) {
/* 000792 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000792 */ 			var external_ref_resolvers = null;
/* 000792 */ 		};
/* 000792 */ 		if (typeof allow_unresolved_refs == 'undefined' || (allow_unresolved_refs != null && allow_unresolved_refs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000792 */ 			var allow_unresolved_refs = false;
/* 000792 */ 		};
/* 000792 */ 		if (arguments.length) {
/* 000792 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000792 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000792 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000792 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000792 */ 					switch (__attrib0__) {
/* 000792 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 						case 'allow_unresolved_refs': var allow_unresolved_refs = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 					}
/* 000792 */ 				}
/* 000792 */ 			}
/* 000792 */ 		}
/* 000792 */ 		else {
/* 000792 */ 		}
/* 000794 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000796 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000797 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000797 */ 		}
/* 000798 */ 		else {
/* 000799 */ 			self.external_ref_resolvers = [];
/* 000799 */ 		}
/* 000801 */ 		if (__t__ (allow_unresolved_refs)) {
/* 000802 */ 			if (__t__ (allow_unresolved_refs === true)) {
/* 000803 */ 				var allow_unresolved_refs = dict ({});
/* 000803 */ 			}
/* 000804 */ 			var unknown_ref_resolver = __call__ (AllowedUnresolvedRefResolver, null, __kwargtrans__ (allow_unresolved_refs));
/* 000805 */ 			(function () {
/* 000805 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000805 */ 				return __call__ (__accu0__.append, __accu0__, unknown_ref_resolver);
/* 000805 */ 			}) ();
/* 000805 */ 		}
/* 000807 */ 		// pass;
/* 000807 */ 	});},
/* 000812 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000812 */ 		if (arguments.length) {
/* 000812 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000812 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000812 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000812 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000812 */ 					switch (__attrib0__) {
/* 000812 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000812 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000812 */ 					}
/* 000812 */ 				}
/* 000812 */ 			}
/* 000812 */ 		}
/* 000812 */ 		else {
/* 000812 */ 		}
/* 000813 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000814 */ 			(function () {
/* 000814 */ 				var __accu0__ = logger;
/* 000814 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000814 */ 			}) ();
/* 000814 */ 		}
/* 000816 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000816 */ 	});},
/* 000818 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000818 */ 		if (arguments.length) {
/* 000818 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000818 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000818 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000818 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000818 */ 					switch (__attrib0__) {
/* 000818 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000818 */ 					}
/* 000818 */ 				}
/* 000818 */ 			}
/* 000818 */ 		}
/* 000818 */ 		else {
/* 000818 */ 		}
/* 000819 */ 		(function () {
/* 000819 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000819 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000819 */ 		}) ();
/* 000819 */ 	});},
/* 000821 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000821 */ 		if (arguments.length) {
/* 000821 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000821 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000821 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000821 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000821 */ 					switch (__attrib0__) {
/* 000821 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000821 */ 					}
/* 000821 */ 				}
/* 000821 */ 			}
/* 000821 */ 		}
/* 000821 */ 		else {
/* 000821 */ 		}
/* 000824 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [(function () {
/* 000824 */ 			var __accu0__ = self;
/* 000824 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['[]ref_options', 'ref_label'])}));
/* 000828 */ 		}) (), (function () {
/* 000828 */ 			var __accu0__ = self;
/* 000828 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}));
/* 000828 */ 		}) ()]}));
/* 000828 */ 	});},
/* 000835 */ 	RefMacroCls: RefMacro,
/* 000838 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000838 */ 		if (arguments.length) {
/* 000838 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000838 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000838 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000838 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000838 */ 					switch (__attrib0__) {
/* 000838 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000838 */ 					}
/* 000838 */ 				}
/* 000838 */ 			}
/* 000838 */ 		}
/* 000838 */ 		else {
/* 000838 */ 		}
/* 000841 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000841 */ 	});}
/* 000841 */ });
/* 000848 */ export var _display_unresolved_verbatim = function (ref_type, ref_label) {
/* 000848 */ 	if (arguments.length) {
/* 000848 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000848 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000848 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000848 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000848 */ 				switch (__attrib0__) {
/* 000848 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000848 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000848 */ 				}
/* 000848 */ 			}
/* 000848 */ 		}
/* 000848 */ 	}
/* 000848 */ 	else {
/* 000848 */ 	}
/* 000849 */ 	return __add__ (__add__ (__add__ ('\\textbf{<\\begin{verbatimtext}', (__t__ (ref_type !== null) ? __add__ (ref_type, ':') : '')), ref_label), '\\end{verbatimtext}>}');
/* 000849 */ };
/* 000857 */ export var AllowedUnresolvedRefResolver =  __class__ ('AllowedUnresolvedRefResolver', [object], {
/* 000857 */ 	__module__: __name__,
/* 000858 */ 	get __init__ () {return __get__ (this, function (self, display_unresolved) {
/* 000858 */ 		if (typeof display_unresolved == 'undefined' || (display_unresolved != null && display_unresolved.hasOwnProperty ("__kwargtrans__"))) {;
/* 000858 */ 			var display_unresolved = _display_unresolved_verbatim;
/* 000858 */ 		};
/* 000858 */ 		if (arguments.length) {
/* 000858 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000858 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000858 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000858 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000858 */ 					switch (__attrib0__) {
/* 000858 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000858 */ 						case 'display_unresolved': var display_unresolved = __allkwargs0__ [__attrib0__]; break;
/* 000858 */ 					}
/* 000858 */ 				}
/* 000858 */ 			}
/* 000858 */ 		}
/* 000858 */ 		else {
/* 000858 */ 		}
/* 000859 */ 		__call__ (__call__ (__super__, null, AllowedUnresolvedRefResolver, '__init__'), null, self);
/* 000860 */ 		self.display_unresolved = display_unresolved;
/* 000860 */ 	});},
/* 000862 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info, render_context) {
/* 000862 */ 		if (arguments.length) {
/* 000862 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000862 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000862 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000862 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000862 */ 					switch (__attrib0__) {
/* 000862 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000862 */ 					}
/* 000862 */ 				}
/* 000862 */ 			}
/* 000862 */ 		}
/* 000862 */ 		else {
/* 000862 */ 		}
/* 000864 */ 		if (__t__ (__call__ (callable, null, self.display_unresolved))) {
/* 000865 */ 			var display_flm_text = (function () {
/* 000865 */ 				var __accu0__ = self;
/* 000865 */ 				return __call__ (__accu0__.display_unresolved, __accu0__, ref_type, ref_label);
/* 000865 */ 			}) ();
/* 000865 */ 		}
/* 000866 */ 		else {
/* 000867 */ 			var display_flm_text = __call__ (str, null, self.display_unresolved);
/* 000867 */ 		}
/* 000869 */ 		return __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: display_flm_text, target_href: 'javascript:alert("Unresolved reference!")', counter_value: null, counter_numprefix: null, counter_formatter_id: null}));
/* 000869 */ 	});}
/* 000869 */ });
/* 000884 */ export var FeatureClass = FeatureRefs;
/* 000011 */ 
//# sourceMappingURL=flm.feature.refs.map