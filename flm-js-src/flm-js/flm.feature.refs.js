/* 000001 */ // Transcrypt'ed from Python, 2026-02-15 15:34:34
/* 000006 */ var logging = {};
/* 000006 */ var re = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000022 */ import {ValueWithSubNums} from './flm.counter.js';
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
/* 000006 */ export {ParsedArgumentsInfo, latexnodes_parsers, FLMMacroSpecBase, FLMArgumentSpec, Feature, ValueWithSubNums, FLMFragment, LatexWalkerLocatedError};
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
/* 000067 */ 	get __init__ () {return __get__ (this, function (self, ref_type, ref_label, formatted_ref_flm_text, target_href, counter_value, counter_numprefix, counter_formatter_id) {
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
/* 000067 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
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
/* 000075 */ 		self.counter_numprefix = counter_numprefix;
/* 000076 */ 		self.counter_formatter_id = counter_formatter_id;
/* 000078 */ 		self._fields = tuple (['ref_type', 'ref_label', 'formatted_ref_flm_text', 'target_href', 'counter_value', 'counter_numprefix', 'counter_formatter_id']);
/* 000078 */ 	});},
/* 000081 */ 	get asdict () {return __get__ (this, function (self) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		return (function () {
/* 000082 */ 			var __accu0__ = [];
/* 000082 */ 			var __iterable0__ = self._fields;
/* 000082 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000082 */ 				var k = __getitem__ (__iterable0__, __index0__);
/* 000082 */ 				(function () {
/* 000082 */ 					var __accu1__ = __accu0__;
/* 000082 */ 					return __call__ (__accu1__.append, __accu1__, [k, __call__ (getattr, null, self, k)]);
/* 000082 */ 				}) ();
/* 000082 */ 			}
/* 000082 */ 			return dict (__accu0__);
/* 000082 */ 		}) ();
/* 000082 */ 	});},
/* 000084 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000087 */ 		return __add__ (__add__ ('{}('.format (self.__class__.__name__), (function () {
/* 000087 */ 			var __accu0__ = ', ';
/* 000087 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000087 */ 				var __accu1__ = [];
/* 000087 */ 				var __iterable0__ = self._fields;
/* 000087 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000087 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000087 */ 					(function () {
/* 000087 */ 						var __accu2__ = __accu1__;
/* 000087 */ 						return __call__ (__accu2__.append, __accu2__, '{}={}'.format (k, __call__ (repr, null, __call__ (getattr, null, self, k))));
/* 000087 */ 					}) ();
/* 000087 */ 				}
/* 000087 */ 				return py_iter (__accu1__);
/* 000087 */ 			}) ());
/* 000087 */ 		}) ()), ')');
/* 000087 */ 	});}
/* 000087 */ });
/* 000100 */ var hexstr = (v) => (+v).toString(16);
/* 000108 */ export var _rx_unsafe_char = (function () {
/* 000108 */ 	var __accu0__ = re;
/* 000108 */ 	return __call__ (__accu0__.compile, __accu0__, '[^a-zA-Z0-9-]');
/* 000108 */ }) ();
/* 000109 */ export var _rx_match_safechar = function (m) {
/* 000109 */ 	if (arguments.length) {
/* 000109 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 				switch (__attrib0__) {
/* 000109 */ 					case 'm': var m = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 	}
/* 000109 */ 	else {
/* 000109 */ 	}
/* 000110 */ 	return '_{}X'.format (__call__ (hexstr, null, __call__ (ord, null, (function () {
/* 000110 */ 		var __accu0__ = m;
/* 000110 */ 		return __call__ (__accu0__.group, __accu0__);
/* 000110 */ 	}) ())));
/* 000110 */ };
/* 000112 */ export var get_safe_target_id = function (ref_type, ref_label) {
/* 000112 */ 	if (arguments.length) {
/* 000112 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 				switch (__attrib0__) {
/* 000112 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 	}
/* 000112 */ 	else {
/* 000112 */ 	}
/* 000113 */ 	var ref_type_safe = (function () {
/* 000113 */ 		var __accu0__ = _rx_unsafe_char;
/* 000113 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_type);
/* 000113 */ 	}) ();
/* 000114 */ 	var ref_label_safe = (function () {
/* 000114 */ 		var __accu0__ = _rx_unsafe_char;
/* 000114 */ 		return __call__ (__accu0__.sub, __accu0__, _rx_match_safechar, ref_label);
/* 000114 */ 	}) ();
/* 000115 */ 	return '{}-{}'.format (ref_type_safe, ref_label_safe);
/* 000115 */ };
/* 000120 */ export var FeatureRefsRenderManager =  __class__ ('FeatureRefsRenderManager', [Feature.RenderManager], {
/* 000120 */ 	__module__: __name__,
/* 000122 */ 	get initialize () {return __get__ (this, function (self, add_external_ref_resolvers) {
/* 000122 */ 		if (typeof add_external_ref_resolvers == 'undefined' || (add_external_ref_resolvers != null && add_external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000122 */ 			var add_external_ref_resolvers = null;
/* 000122 */ 		};
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'add_external_ref_resolvers': var add_external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		self.ref_labels = dict ({});
/* 000124 */ 		self.registered_references = dict ({});
/* 000125 */ 		self.external_ref_resolvers = [];
/* 000126 */ 		if (__t__ (add_external_ref_resolvers)) {
/* 000127 */ 			(function () {
/* 000127 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000127 */ 				return __call__ (__accu0__.extend, __accu0__, add_external_ref_resolvers);
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000128 */ 		(function () {
/* 000128 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000128 */ 			return __call__ (__accu0__.extend, __accu0__, self.feature.external_ref_resolvers);
/* 000128 */ 		}) ();
/* 000130 */ 		self.registered_counter_formatters = dict ({});
/* 000130 */ 	});},
/* 000132 */ 	get register_reference_referenceable () {return __get__ (this, function (self) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'referenceable_info': var referenceable_info = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000134 */ 		if (__t__ (!__t__ ((referenceable_info.labels)))) {
/* 000135 */ 			return ;
/* 000135 */ 		}
/* 000137 */ 		var target_href = __add__ ('#', (function () {
/* 000137 */ 			var __accu0__ = referenceable_info;
/* 000137 */ 			return __call__ (__accu0__.get_target_id, __accu0__);
/* 000137 */ 		}) ());
/* 000139 */ 		var __iterable0__ = referenceable_info.labels;
/* 000139 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000139 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000139 */ 			var ref_type = __left0__ [0];
/* 000139 */ 			var ref_label = __left0__ [1];
/* 000140 */ 			(function () {
/* 000140 */ 				var __accu0__ = self;
/* 000140 */ 				return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({formatted_ref_flm_text: referenceable_info.formatted_ref_flm_text, node: node, target_href: target_href}));
/* 000140 */ 			}) ();
/* 000140 */ 		}
/* 000140 */ 	});},
/* 000147 */ 	get register_counter_formatter () {return __get__ (this, function (self) {
/* 000147 */ 		var counter_formatter_id = null;
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000148 */ 		if (__t__ (counter_formatter_id === null)) {
/* 000149 */ 			var counter_formatter_id = counter_formatter.counter_formatter_id;
/* 000149 */ 		}
/* 000150 */ 		if (__t__ (__in__ (counter_formatter_id, self.registered_counter_formatters))) {
/* 000151 */ 			var __except0__ = __call__ (ValueError, null, 'Counter formatter width ID ‘{}’ is already registered!'.format (counter_formatter_id));
/* 000151 */ 			__except0__.__cause__ = null;
/* 000151 */ 			throw __except0__;
/* 000151 */ 		}
/* 000154 */ 		__setitem__ (self.registered_counter_formatters, counter_formatter_id, counter_formatter);
/* 000154 */ 	});},
/* 000156 */ 	get register_reference_step_counter () {return __get__ (this, function (self) {
/* 000156 */ 		var ref_type = null;
/* 000156 */ 		var ref_label = null;
/* 000156 */ 		var target_href_fn = null;
/* 000156 */ 		var counter_with_prefix = true;
/* 000156 */ 		var counter_prefix_variant = null;
/* 000156 */ 		var counter_with_delimiters = true;
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'counter_iface': var counter_iface = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'target_href_fn': var target_href_fn = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000168 */ 		var node_id = (function () {
/* 000168 */ 			var __accu0__ = self;
/* 000168 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000168 */ 		}) ();
/* 000169 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000170 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000171 */ 			return __getitem__ (self.registered_references, kk);
/* 000171 */ 		}
/* 000173 */ 		var cnt_info = (function () {
/* 000173 */ 			var __accu0__ = counter_iface;
/* 000173 */ 			return __call__ (__accu0__.register_item, __accu0__);
/* 000173 */ 		}) ();
/* 000178 */ 		var formatted_ref_flm_text = (function () {
/* 000178 */ 			var __accu0__ = counter_iface.formatter;
/* 000178 */ 			return __call__ (__accu0__.format_flm, __accu0__, __getitem__ (cnt_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (cnt_info, 'numprefix'), with_prefix: counter_with_prefix, prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters}));
/* 000178 */ 		}) ();
/* 000186 */ 		if (__t__ (target_href_fn !== null)) {
/* 000187 */ 			var target_href = __call__ (target_href_fn, null, __getitem__ (cnt_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (cnt_info, 'numprefix')}));
/* 000187 */ 		}
/* 000190 */ 		else {
/* 000192 */ 			var target_href = null;
/* 000192 */ 		}
/* 000194 */ 		return (function () {
/* 000194 */ 			var __accu0__ = self;
/* 000194 */ 			return __call__ (__accu0__.register_reference, __accu0__, ref_type, ref_label, __kwargtrans__ ({node: node, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: __getitem__ (cnt_info, 'value'), counter_numprefix: __getitem__ (cnt_info, 'numprefix'), counter_formatter_id: counter_iface.formatter.counter_formatter_id}));
/* 000194 */ 		}) ();
/* 000194 */ 	});},
/* 000205 */ 	get register_reference () {return __get__ (this, function (self, ref_type, ref_label) {
/* 000205 */ 		var counter_value = null;
/* 000205 */ 		var counter_numprefix = null;
/* 000205 */ 		var counter_formatter_id = null;
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'formatted_ref_flm_text': var formatted_ref_flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'counter_value': var counter_value = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'counter_numprefix': var counter_numprefix = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'counter_formatter_id': var counter_formatter_id = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000223 */ 		var node_id = (function () {
/* 000223 */ 			var __accu0__ = self;
/* 000223 */ 			return __call__ (__accu0__.get_node_id, __accu0__, node);
/* 000223 */ 		}) ();
/* 000224 */ 		var kk = tuple ([node_id, ref_type, ref_label]);
/* 000225 */ 		if (__t__ (__in__ (kk, self.registered_references))) {
/* 000226 */ 			return __getitem__ (self.registered_references, kk);
/* 000226 */ 		}
/* 000228 */ 		if (__t__ (__t__ (ref_type !== null) && __t__ (ref_label !== null) && __in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000230 */ 			var __except0__ = __call__ (ValueError, null, 'Duplicate reference label ‘{}:{}’ in the same document!'.format (ref_type, ref_label));
/* 000230 */ 			__except0__.__cause__ = null;
/* 000230 */ 			throw __except0__;
/* 000230 */ 		}
/* 000234 */ 		var refinstance = __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: formatted_ref_flm_text, target_href: target_href, counter_value: counter_value, counter_numprefix: counter_numprefix, counter_formatter_id: counter_formatter_id}));
/* 000244 */ 		__setitem__ (self.registered_references, kk, refinstance);
/* 000245 */ 		if (__t__ (__t__ (ref_type !== null) && ref_label !== null)) {
/* 000246 */ 			self.ref_labels.__setitem__ ([ref_type, ref_label], refinstance);
/* 000246 */ 		}
/* 000247 */ 		// pass;
/* 000250 */ 		return refinstance;
/* 000250 */ 	});},
/* 000253 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000254 */ 		if (__t__ (__in__ (tuple ([ref_type, ref_label]), self.ref_labels))) {
/* 000255 */ 			return self.ref_labels.__getitem__ ([ref_type, ref_label]);
/* 000255 */ 		}
/* 000257 */ 		// pass;
/* 000263 */ 		// pass;
/* 000267 */ 		var __iterable0__ = self.external_ref_resolvers;
/* 000267 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000267 */ 			var resolver = __getitem__ (__iterable0__, __index0__);
/* 000268 */ 			// pass;
/* 000271 */ 			var ref = (function () {
/* 000271 */ 				var __accu0__ = resolver;
/* 000271 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info, self.render_context);
/* 000271 */ 			}) ();
/* 000277 */ 			// pass;
/* 000280 */ 			if (__t__ (ref !== null)) {
/* 000281 */ 				return ref;
/* 000281 */ 			}
/* 000281 */ 		}
/* 000283 */ 		var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Ref target ‘{}:{}’ found neither within database nor with any set external resolvers'.format (ref_type, ref_label), __kwargtrans__ ({pos: null}));
/* 000283 */ 		__except0__.__cause__ = null;
/* 000283 */ 		throw __except0__;
/* 000283 */ 	});},
/* 000290 */ 	get render_ref () {return __get__ (this, function (self, ref_type, ref_label, display_content_flm, resource_info) {
/* 000290 */ 		var counter_prefix_variant = null;
/* 000290 */ 		var counter_with_prefix = true;
/* 000290 */ 		var counter_with_delimiters = true;
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000296 */ 		var ref_instance = (function () {
/* 000296 */ 			var __accu0__ = self;
/* 000296 */ 			return __call__ (__accu0__._get_ref_instance, __accu0__, ref_type, ref_label, resource_info);
/* 000296 */ 		}) ();
/* 000298 */ 		return (function () {
/* 000298 */ 			var __accu0__ = self;
/* 000298 */ 			return __call__ (__accu0__.render_ref_instance, __accu0__, ref_instance, display_content_flm, __kwargtrans__ ({counter_prefix_variant: counter_prefix_variant, counter_with_prefix: counter_with_prefix, counter_with_delimiters: counter_with_delimiters}));
/* 000298 */ 		}) ();
/* 000298 */ 	});},
/* 000305 */ 	get render_ref_instance () {return __get__ (this, function (self, ref_instance, display_content_flm) {
/* 000305 */ 		var counter_prefix_variant = null;
/* 000305 */ 		var counter_with_prefix = true;
/* 000305 */ 		var counter_with_delimiters = true;
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'ref_instance': var ref_instance = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'display_content_flm': var display_content_flm = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000310 */ 		if (__t__ (display_content_flm === null)) {
/* 000311 */ 			var display_content_flm = ref_instance.formatted_ref_flm_text;
/* 000311 */ 		}
/* 000313 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, display_content_flm, FLMFragment))))) {
/* 000314 */ 			var display_content_flm = (function () {
/* 000314 */ 				var __accu0__ = self.render_context.doc.environment;
/* 000314 */ 				return __call__ (__accu0__.make_fragment, __accu0__, display_content_flm, __kwargtrans__ ({standalone_mode: true}));
/* 000314 */ 			}) ();
/* 000314 */ 		}
/* 000319 */ 		var display_content_nodelist = display_content_flm.nodes;
/* 000321 */ 		var fragment_renderer = self.render_context.fragment_renderer;
/* 000323 */ 		return (function () {
/* 000323 */ 			var __accu0__ = fragment_renderer;
/* 000323 */ 			return __call__ (__accu0__.render_link, __accu0__, 'ref', ref_instance.target_href, display_content_nodelist, __kwargtrans__ ({render_context: self.render_context, annotations: ['ref-{}'.format (ref_instance.ref_type)]}));
/* 000323 */ 		}) ();
/* 000323 */ 	});},
/* 000333 */ 	ref_many_use_flm_hyperref: true,
/* 000335 */ 	get render_ref_many () {return __get__ (this, function (self, ref_type_label_list, resource_info) {
/* 000335 */ 		var counter_prefix_variant = null;
/* 000335 */ 		var counter_with_delimiters = true;
/* 000335 */ 		var counter_with_prefix = true;
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'ref_type_label_list': var ref_type_label_list = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'counter_with_delimiters': var counter_with_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'counter_with_prefix': var counter_with_prefix = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000340 */ 		var render_context = self.render_context;
/* 000341 */ 		var fragment_renderer = render_context.fragment_renderer;
/* 000343 */ 		var ref_instances = (function () {
/* 000343 */ 			var __accu0__ = [];
/* 000343 */ 			var __iterable0__ = ref_type_label_list;
/* 000343 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000345 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000345 */ 				var ref_type = __left0__ [0];
/* 000345 */ 				var ref_label = __left0__ [1];
/* 000345 */ 				(function () {
/* 000345 */ 					var __accu1__ = __accu0__;
/* 000344 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000344 */ 						var __accu2__ = self;
/* 000344 */ 						return __call__ (__accu2__._get_ref_instance, __accu2__, ref_type, ref_label, resource_info);
/* 000344 */ 					}) ());
/* 000344 */ 				}) ();
/* 000344 */ 			}
/* 000344 */ 			return __accu0__;
/* 000344 */ 		}) ();
/* 000349 */ 		var ref_instances_by_counter_formatter_id = __call__ (dict, null);
/* 000350 */ 		var ref_instances_by_counter_formatter_id_numprefixes = __call__ (dict, null);
/* 000351 */ 		var ref_instances_nocounter = [];
/* 000352 */ 		var __iterable0__ = ref_instances;
/* 000352 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 			var ri = __getitem__ (__iterable0__, __index0__);
/* 000353 */ 			if (__t__ (__t__ (ri.counter_value === null) || ri.counter_formatter_id === null)) {
/* 000354 */ 				(function () {
/* 000354 */ 					var __accu0__ = ref_instances_nocounter;
/* 000354 */ 					return __call__ (__accu0__.append, __accu0__, ri);
/* 000354 */ 				}) ();
/* 000354 */ 				continue;
/* 000354 */ 			}
/* 000356 */ 			var ricfid = ri.counter_formatter_id;
/* 000357 */ 			if (__t__ (!__in__ (ricfid, ref_instances_by_counter_formatter_id))) {
/* 000358 */ 				__setitem__ (ref_instances_by_counter_formatter_id, ricfid, dict ({}));
/* 000359 */ 				__setitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid, []);
/* 000359 */ 			}
/* 000361 */ 			var c_numprefix = ri.counter_numprefix;
/* 000362 */ 			var c_numprefix_s = __call__ (repr, null, c_numprefix);
/* 000363 */ 			var c_value = __call__ (ValueWithSubNums, null, ri.counter_value);
/* 000364 */ 			if (__t__ (!__in__ (c_numprefix, __getitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid)))) {
/* 000365 */ 				(function () {
/* 000365 */ 					var __accu0__ = __getitem__ (ref_instances_by_counter_formatter_id_numprefixes, ricfid);
/* 000365 */ 					return __call__ (__accu0__.append, __accu0__, c_numprefix);
/* 000365 */ 				}) ();
/* 000366 */ 				__setitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ricfid), c_numprefix_s, []);
/* 000366 */ 			}
/* 000367 */ 			(function () {
/* 000367 */ 				var __accu0__ = __getitem__ (__getitem__ (ref_instances_by_counter_formatter_id, ricfid), c_numprefix_s);
/* 000367 */ 				return __call__ (__accu0__.append, __accu0__, dict ({'value': c_value, 'ri': ri}));
/* 000367 */ 			}) ();
/* 000367 */ 		}
/* 000372 */ 		var s_final_blocks = [];
/* 000374 */ 		var __iterable0__ = (function () {
/* 000374 */ 			var __accu0__ = ref_instances_by_counter_formatter_id_numprefixes;
/* 000374 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000374 */ 		}) ();
/* 000374 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000374 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000374 */ 			var counter_formatter_id = __left0__ [0];
/* 000374 */ 			var rcnumprefixes = __left0__ [1];
/* 000375 */ 			var rcdict = __getitem__ (ref_instances_by_counter_formatter_id, counter_formatter_id);
/* 000377 */ 			var counter_formatter = __getitem__ (self.registered_counter_formatters, counter_formatter_id);
/* 000379 */ 			var s_items = (function () {
/* 000379 */ 				var __accu0__ = counter_formatter;
/* 000379 */ 				return __call__ (__accu0__.format_many_flm, __accu0__, (function () {
/* 000379 */ 					var __accu1__ = [];
/* 000380 */ 					var __iterable1__ = rcnumprefixes;
/* 000380 */ 					for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000381 */ 						var np = __getitem__ (__iterable1__, __index1__);
/* 000381 */ 						(function () {
/* 000381 */ 							var __accu2__ = __accu1__;
/* 000381 */ 							return __call__ (__accu2__.append, __accu2__, tuple ([np, (function () {
/* 000381 */ 								var __accu3__ = [];
/* 000380 */ 								var __iterable2__ = __getitem__ (rcdict, __call__ (repr, null, np));
/* 000380 */ 								for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000380 */ 									var d = __getitem__ (__iterable2__, __index2__);
/* 000380 */ 									(function () {
/* 000380 */ 										var __accu4__ = __accu3__;
/* 000380 */ 										return __call__ (__accu4__.append, __accu4__, __getitem__ (d, 'value'));
/* 000380 */ 									}) ();
/* 000380 */ 								}
/* 000380 */ 								return __accu3__;
/* 000380 */ 							}) ()]));
/* 000380 */ 						}) ();
/* 000380 */ 					}
/* 000380 */ 					return __accu1__;
/* 000380 */ 				}) (), __kwargtrans__ ({prefix_variant: counter_prefix_variant, with_delimiters: counter_with_delimiters, with_prefix: counter_with_prefix, get_raw_s_items: true}));
/* 000380 */ 			}) ();
/* 000389 */ 			var s = '';
/* 000390 */ 			var __iterable1__ = s_items;
/* 000390 */ 			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
/* 000390 */ 				var sit = __getitem__ (__iterable1__, __index1__);
/* 000391 */ 				var s_frag = (function () {
/* 000391 */ 					var __accu0__ = render_context;
/* 000394 */ 					return __call__ (__accu0__.make_standalone_fragment, __accu0__, __getitem__ (sit, 's'), __kwargtrans__ ({is_block_level: false, what: 'Rendered counter ref bit {}'.format (__call__ (repr, null, sit))}));
/* 000394 */ 				}) ();
/* 000396 */ 				if (__t__ (__t__ (__getitem__ (sit, 'n') === null) || __getitem__ (sit, 'n') === false)) {
/* 000397 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000397 */ 						var __accu0__ = fragment_renderer;
/* 000397 */ 						return __call__ (__accu0__.render_fragment, __accu0__, s_frag, render_context);
/* 000397 */ 					}) ());
/* 000397 */ 				}
/* 000398 */ 				else {
/* 000399 */ 					var rinst = null;
/* 000400 */ 					var __iterable2__ = __getitem__ (rcdict, __call__ (repr, null, __getitem__ (sit, 'np')));
/* 000400 */ 					for (var __index2__ = 0; __index2__ < len (__iterable2__); __index2__++) {
/* 000400 */ 						var rivalue = __getitem__ (__iterable2__, __index2__);
/* 000401 */ 						if (__t__ ((function () {
/* 000401 */ 							var __accu0__ = __getitem__ (rivalue, 'value');
/* 000401 */ 							return __call__ (__accu0__.equals, __accu0__, __getitem__ (sit, 'n'));
/* 000401 */ 						}) ())) {
/* 000402 */ 							var rinst = __getitem__ (rivalue, 'ri');
/* 000402 */ 							break;
/* 000402 */ 						}
/* 000402 */ 					}
/* 000404 */ 					var s = __call__ (__iadd__, null, s, (function () {
/* 000404 */ 						var __accu0__ = fragment_renderer;
/* 000404 */ 						return __call__ (__accu0__.render_link, __accu0__, 'ref', rinst.target_href, s_frag.nodes, __kwargtrans__ ({render_context: render_context, annotations: ['refcnt-{}'.format (counter_formatter_id)]}));
/* 000404 */ 					}) ());
/* 000404 */ 				}
/* 000404 */ 			}
/* 000412 */ 			(function () {
/* 000412 */ 				var __accu0__ = s_final_blocks;
/* 000412 */ 				return __call__ (__accu0__.append, __accu0__, s);
/* 000412 */ 			}) ();
/* 000412 */ 		}
/* 000414 */ 		if (__t__ (__call__ (len, null, ref_instances_nocounter))) {
/* 000415 */ 			var __iterable0__ = ref_instances_nocounter;
/* 000415 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000415 */ 				var ri = __getitem__ (__iterable0__, __index0__);
/* 000416 */ 				var s_final_blocks = __call__ (__iadd__, null, s_final_blocks, [(function () {
/* 000416 */ 					var __accu0__ = self;
/* 000416 */ 					return __call__ (__accu0__.render_ref_instance, __accu0__, ri, null);
/* 000416 */ 				}) ()]);
/* 000416 */ 			}
/* 000416 */ 		}
/* 000418 */ 		return (function () {
/* 000418 */ 			var __accu0__ = ', ';
/* 000418 */ 			return __call__ (__accu0__.join, __accu0__, s_final_blocks);
/* 000418 */ 		}) ();
/* 000418 */ 	});},
/* 000422 */ 	get _get_ref_instance () {return __get__ (this, function (self, ref_type, ref_label, resource_info) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000424 */ 		try {
/* 000425 */ 			return (function () {
/* 000425 */ 				var __accu0__ = self;
/* 000425 */ 				return __call__ (__accu0__.get_ref, __accu0__, ref_type, ref_label, resource_info);
/* 000425 */ 			}) ();
/* 000425 */ 		}
/* 000425 */ 		catch (__except0__) {
/* 000425 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000425 */ 				var e = __except0__;
/* 000427 */ 				// pass;
/* 000432 */ 				__except0__.__cause__ = null;
/* 000432 */ 				throw __except0__;
/* 000432 */ 			}
/* 000432 */ 			else if (isinstance (__except0__, Exception)) {
/* 000432 */ 				var e = __except0__;
/* 000434 */ 				// pass;
/* 000440 */ 				var __except1__ = __call__ (ValueError, null, 'Unable to resolve reference to ‘{}:{}’: {} [in {}]'.format (ref_type, ref_label, e, __call__ (repr, null, resource_info)));
/* 000440 */ 				__except1__.__cause__ = null;
/* 000440 */ 				throw __except1__;
/* 000440 */ 			}
/* 000440 */ 			else {
/* 000440 */ 				throw __except0__;
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 	});}
/* 000440 */ });
/* 000453 */ export var _ref_arg_specs = dict ({'ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000453 */ 	var __accu0__ = latexnodes_parsers;
/* 000453 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__);
/* 000457 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), '[]ref_label': __call__ (FLMArgumentSpec, null, (function () {
/* 000457 */ 	var __accu0__ = latexnodes_parsers;
/* 000457 */ 	return __call__ (__accu0__.LatexCharsGroupParser, __accu0__, __kwargtrans__ ({delimiters: tuple (['[', ']'])}));
/* 000470 */ }) (), __kwargtrans__ ({argname: 'ref_label'})), 'display_text': __call__ (FLMArgumentSpec, null, '{', __kwargtrans__ ({argname: 'display_text'})), 'Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'ref_label'})), '[]Xref_label': __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: 'r[]', argname: 'ref_label'}))});
/* 000477 */ export var RefMacro =  __class__ ('RefMacro', [FLMMacroSpecBase], {
/* 000477 */ 	__module__: __name__,
/* 000479 */ 	delayed_render: true,
/* 000481 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000481 */ 		var ref_type = 'ref';
/* 000481 */ 		var command_arguments = tuple (['ref_label', 'display_text']);
/* 000481 */ 		var counter_prefix_variant = null;
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'counter_prefix_variant': var counter_prefix_variant = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000489 */ 		var arguments_spec_list = (function () {
/* 000489 */ 			var __accu0__ = self;
/* 000489 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000489 */ 		}) ();
/* 000490 */ 		__call__ (__call__ (__super__, null, RefMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000494 */ 		self.ref_type = ref_type;
/* 000495 */ 		self.command_arguments = command_arguments;
/* 000496 */ 		self.counter_prefix_variant = counter_prefix_variant;
/* 000498 */ 		self.command_argnames = (function () {
/* 000498 */ 			var __accu0__ = [];
/* 000498 */ 			var __iterable0__ = arguments_spec_list;
/* 000498 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000498 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000498 */ 				(function () {
/* 000498 */ 					var __accu1__ = __accu0__;
/* 000498 */ 					return __call__ (__accu1__.append, __accu1__, c.argname);
/* 000498 */ 				}) ();
/* 000498 */ 			}
/* 000498 */ 			return __accu0__;
/* 000498 */ 		}) ();
/* 000498 */ 	});},
/* 000500 */ 	_fields: tuple (['macroname', 'ref_type', 'command_arguments', 'counter_prefix_variant']),
/* 000503 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000503 */ 		if (arguments.length) {
/* 000503 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000503 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000503 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000503 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000503 */ 					switch (__attrib0__) {
/* 000503 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 					}
/* 000503 */ 				}
/* 000503 */ 			}
/* 000503 */ 		}
/* 000503 */ 		else {
/* 000503 */ 		}
/* 000504 */ 		return (function () {
/* 000504 */ 			var __accu0__ = [];
/* 000504 */ 			var __iterable0__ = command_arguments;
/* 000504 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000504 */ 				var a = __getitem__ (__iterable0__, __index0__);
/* 000504 */ 				(function () {
/* 000504 */ 					var __accu1__ = __accu0__;
/* 000504 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_ref_arg_specs, a));
/* 000504 */ 				}) ();
/* 000504 */ 			}
/* 000504 */ 			return __accu0__;
/* 000504 */ 		}) ();
/* 000504 */ 	});},
/* 000506 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000508 */ 		var node_args = (function () {
/* 000508 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000508 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_argnames);
/* 000508 */ 		}) ();
/* 000512 */ 		var ref_spec = (function () {
/* 000512 */ 			var __accu0__ = __getitem__ (node_args, 'ref_label');
/* 000512 */ 			return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000512 */ 		}) ();
/* 000513 */ 		var ref_pair_list = [];
/* 000514 */ 		var __iterable0__ = (function () {
/* 000514 */ 			var __accu0__ = ref_spec;
/* 000514 */ 			return __call__ (__accu0__.py_split, __accu0__, ',');
/* 000514 */ 		}) ();
/* 000514 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000514 */ 			var ref_spec_one = __getitem__ (__iterable0__, __index0__);
/* 000515 */ 			var __left0__ = tuple ([null, ref_spec_one]);
/* 000515 */ 			var ref_type = __left0__ [0];
/* 000515 */ 			var ref_label = __left0__ [1];
/* 000516 */ 			if (__t__ (__in__ (':', ref_label))) {
/* 000517 */ 				var __left0__ = (function () {
/* 000517 */ 					var __accu0__ = ref_label;
/* 000517 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000517 */ 				}) ();
/* 000517 */ 				var ref_type = __left0__ [0];
/* 000517 */ 				var ref_label = __left0__ [1];
/* 000517 */ 			}
/* 000518 */ 			(function () {
/* 000518 */ 				var __accu0__ = ref_pair_list;
/* 000518 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000518 */ 			}) ();
/* 000518 */ 		}
/* 000520 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000521 */ 			var display_content_nodelist = (function () {
/* 000521 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000521 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000521 */ 			}) ();
/* 000521 */ 		}
/* 000522 */ 		else {
/* 000523 */ 			var display_content_nodelist = null;
/* 000523 */ 		}
/* 000525 */ 		node.flmarg_ref_list = ref_pair_list;
/* 000526 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_pair_list), 1))) {
/* 000527 */ 			node.flmarg_ref = __getitem__ (ref_pair_list, 0);
/* 000527 */ 		}
/* 000528 */ 		node.flm_ref_info = dict ({'ref_list': ref_pair_list, 'display_content_nodelist': display_content_nodelist});
/* 000528 */ 	});},
/* 000534 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000534 */ 		if (arguments.length) {
/* 000534 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000534 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000534 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000534 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000534 */ 					switch (__attrib0__) {
/* 000534 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 					}
/* 000534 */ 				}
/* 000534 */ 			}
/* 000534 */ 		}
/* 000534 */ 		else {
/* 000534 */ 		}
/* 000535 */ 		// pass;
/* 000535 */ 	});},
/* 000537 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000537 */ 		if (arguments.length) {
/* 000537 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000537 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000537 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000537 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000537 */ 					switch (__attrib0__) {
/* 000537 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000537 */ 					}
/* 000537 */ 				}
/* 000537 */ 			}
/* 000537 */ 		}
/* 000537 */ 		else {
/* 000537 */ 		}
/* 000539 */ 		var ref_list = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000540 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000542 */ 		var mgr = (function () {
/* 000542 */ 			var __accu0__ = render_context;
/* 000542 */ 			return __call__ (__accu0__.feature_render_manager, __accu0__, 'refs');
/* 000542 */ 		}) ();
/* 000543 */ 		var resource_info = node.latex_walker.resource_info;
/* 000545 */ 		if (__t__ (__eq__ (__call__ (len, null, ref_list), 1))) {
/* 000546 */ 			var __left0__ = __getitem__ (ref_list, 0);
/* 000546 */ 			var ref_type = __left0__ [0];
/* 000546 */ 			var ref_label = __left0__ [1];
/* 000547 */ 			try {
/* 000548 */ 				return (function () {
/* 000548 */ 					var __accu0__ = mgr;
/* 000548 */ 					return __call__ (__accu0__.render_ref, __accu0__, ref_type, ref_label, display_content_nodelist, resource_info, __kwargtrans__ ({counter_prefix_variant: self.counter_prefix_variant}));
/* 000548 */ 				}) ();
/* 000548 */ 			}
/* 000548 */ 			catch (__except0__) {
/* 000548 */ 				if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000548 */ 					var e = __except0__;
/* 000553 */ 					// pass;
/* 000559 */ 					(function () {
/* 000559 */ 						var __accu0__ = e;
/* 000559 */ 						return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000559 */ 					}) ();
/* 000560 */ 					var __except1__ = e;
/* 000560 */ 					__except1__.__cause__ = null;
/* 000560 */ 					throw __except1__;
/* 000560 */ 				}
/* 000560 */ 				else if (isinstance (__except0__, Exception)) {
/* 000560 */ 					var e = __except0__;
/* 000562 */ 					(function () {
/* 000562 */ 						var __accu0__ = logger;
/* 000563 */ 						return __call__ (__accu0__.error, __accu0__, 'Failed to resolve reference to ‘{}:{}’: {} in ‘{}’ {}'.format (ref_type, ref_label, e, (function () {
/* 000563 */ 							var __accu1__ = node;
/* 000563 */ 							return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000563 */ 						}) (), (function () {
/* 000563 */ 							var __accu1__ = node;
/* 000563 */ 							return __call__ (__accu1__.format_pos, __accu1__);
/* 000563 */ 						}) ()));
/* 000563 */ 					}) ();
/* 000564 */ 					var __except1__ = __call__ (LatexWalkerLocatedError, null, 'Unable to resolve reference to ‘{}:{}’: {}'.format (ref_type, ref_label, e), __kwargtrans__ ({pos: node.pos}));
/* 000564 */ 					__except1__.__cause__ = null;
/* 000564 */ 					throw __except1__;
/* 000564 */ 				}
/* 000564 */ 				else {
/* 000564 */ 					throw __except0__;
/* 000564 */ 				}
/* 000564 */ 			}
/* 000564 */ 		}
/* 000573 */ 		if (__t__ (display_content_nodelist !== null)) {
/* 000575 */ 			var __except0__ = __call__ (ValueError, null, __add__ ('Reference with custom display string cannot have multiple ref targets: ', __call__ (repr, null, ref_list)));
/* 000575 */ 			__except0__.__cause__ = null;
/* 000575 */ 			throw __except0__;
/* 000575 */ 		}
/* 000577 */ 		return (function () {
/* 000577 */ 			var __accu0__ = mgr;
/* 000577 */ 			return __call__ (__accu0__.render_ref_many, __accu0__, ref_list, resource_info);
/* 000577 */ 		}) ();
/* 000577 */ 	});},
/* 000582 */ 	get recompose_pure_latex () {return __get__ (this, function (self, node, recomposer) {
/* 000582 */ 		var kwargs = dict ();
/* 000582 */ 		if (arguments.length) {
/* 000582 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000582 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000582 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000582 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000582 */ 					switch (__attrib0__) {
/* 000582 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'recomposer': var recomposer = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000582 */ 					}
/* 000582 */ 				}
/* 000582 */ 				delete kwargs.__kwargtrans__;
/* 000582 */ 			}
/* 000582 */ 		}
/* 000582 */ 		else {
/* 000582 */ 		}
/* 000584 */ 		var recopt_refs = (function () {
/* 000584 */ 			var __accu0__ = recomposer;
/* 000584 */ 			return __call__ (__accu0__.get_options, __accu0__, 'refs');
/* 000584 */ 		}) ();
/* 000585 */ 		// pass;
/* 000588 */ 		var protect_surround = (function () {
/* 000588 */ 			var __accu0__ = recopt_refs;
/* 000588 */ 			return __call__ (__accu0__.py_get, __accu0__, 'protect_surround', tuple (['\\NoCaseChange{\\protect', '}']));
/* 000588 */ 		}) ();
/* 000592 */ 		var emit_flm_macro = (function () {
/* 000592 */ 			var __accu0__ = recopt_refs;
/* 000592 */ 			return __call__ (__accu0__.py_get, __accu0__, 'emit_flm_macro', false);
/* 000592 */ 		}) ();
/* 000594 */ 		if (__t__ (node.flm_ref_info === null)) {
/* 000597 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ ('Recomposing pure LaTeX: Invalid ref info in node ', __call__ (repr, null, node)), __kwargtrans__ ({pos: node.pos}));
/* 000597 */ 			__except0__.__cause__ = null;
/* 000597 */ 			throw __except0__;
/* 000597 */ 		}
/* 000600 */ 		var safe_ref_labels = [];
/* 000601 */ 		var __iterable0__ = __getitem__ (node.flm_ref_info, 'ref_list');
/* 000601 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000601 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000601 */ 			var ref_type = __left0__ [0];
/* 000601 */ 			var ref_label = __left0__ [1];
/* 000602 */ 			(function () {
/* 000602 */ 				var __accu0__ = safe_ref_labels;
/* 000603 */ 				return __call__ (__accu0__.append, __accu0__, (function () {
/* 000603 */ 					var __accu1__ = recomposer;
/* 000603 */ 					return __call__ (__accu1__.make_safe_label, __accu1__, 'ref', ref_type, ref_label, node.latex_walker.resource_info);
/* 000603 */ 				}) ());
/* 000603 */ 			}) ();
/* 000603 */ 		}
/* 000607 */ 		var display_content_nodelist = __getitem__ (node.flm_ref_info, 'display_content_nodelist');
/* 000609 */ 		if (__t__ (__t__ (display_content_nodelist !== null) && __t__ (display_content_nodelist.nodelist) && __call__ (len, null, display_content_nodelist.nodelist))) {
/* 000610 */ 			if (__t__ (__gt__ (__call__ (len, null, safe_ref_labels), 1))) {
/* 000612 */ 				var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Hyperref macro cannot have multiple ref targets because it specifies a custom display string.'.format (), __kwargtrans__ ({pos: node.pos}));
/* 000612 */ 				__except0__.__cause__ = null;
/* 000612 */ 				throw __except0__;
/* 000612 */ 			}
/* 000617 */ 			var safe_label = __getitem__ (__getitem__ (safe_ref_labels, 0), 'safe_label');
/* 000618 */ 			var disp_latex = (function () {
/* 000618 */ 				var __accu0__ = recomposer;
/* 000618 */ 				return __call__ (__accu0__.subrecompose, __accu0__, display_content_nodelist);
/* 000618 */ 			}) ();
/* 000619 */ 			if (__t__ (emit_flm_macro)) {
/* 000620 */ 				return __add__ (__add__ (__add__ (__add__ ('\\flmRefsHyperref{', __call__ (str, null, safe_label)), '}{'), __call__ (str, null, disp_latex)), '}');
/* 000620 */ 			}
/* 000625 */ 			return __add__ (__add__ (__add__ (__add__ (__add__ (__add__ (__getitem__ (protect_surround, 0), '\\hyperref[{'), __call__ (str, null, safe_label)), '}]{'), __call__ (str, null, disp_latex)), '}'), __getitem__ (protect_surround, 1));
/* 000625 */ 		}
/* 000629 */ 		var safe_labels_comma = (function () {
/* 000629 */ 			var __accu0__ = ',';
/* 000629 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000629 */ 				var __accu1__ = [];
/* 000629 */ 				var __iterable0__ = safe_ref_labels;
/* 000629 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000631 */ 					var safe_label_info = __getitem__ (__iterable0__, __index0__);
/* 000631 */ 					(function () {
/* 000631 */ 						var __accu2__ = __accu1__;
/* 000631 */ 						return __call__ (__accu2__.append, __accu2__, __getitem__ (safe_label_info, 'safe_label'));
/* 000631 */ 					}) ();
/* 000631 */ 				}
/* 000631 */ 				return __accu1__;
/* 000631 */ 			}) ());
/* 000631 */ 		}) ();
/* 000634 */ 		if (__t__ (emit_flm_macro)) {
/* 000635 */ 			return __add__ (__add__ ('\\flmRefsCref{', safe_labels_comma), '}');
/* 000635 */ 		}
/* 000637 */ 		(function () {
/* 000637 */ 			var __accu0__ = recomposer;
/* 000637 */ 			return __call__ (__accu0__.ensure_latex_package, __accu0__, 'cleveref');
/* 000637 */ 		}) ();
/* 000638 */ 		return __add__ (__add__ (__add__ (__add__ (__getitem__ (protect_surround, 0), '\\cref{'), safe_labels_comma), '}'), __getitem__ (protect_surround, 1));
/* 000638 */ 	});}
/* 000638 */ });
/* 000653 */ export var FeatureRefs =  __class__ ('FeatureRefs', [Feature], {
/* 000653 */ 	__module__: __name__,
/* 000659 */ 	feature_name: 'refs',
/* 000660 */ 	feature_title: 'Labels and cross-references',
/* 000662 */ 	RenderManager: FeatureRefsRenderManager,
/* 000664 */ 	get __init__ () {return __get__ (this, function (self, external_ref_resolvers, allow_unresolved_refs) {
/* 000664 */ 		if (typeof external_ref_resolvers == 'undefined' || (external_ref_resolvers != null && external_ref_resolvers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var external_ref_resolvers = null;
/* 000664 */ 		};
/* 000664 */ 		if (typeof allow_unresolved_refs == 'undefined' || (allow_unresolved_refs != null && allow_unresolved_refs.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var allow_unresolved_refs = false;
/* 000664 */ 		};
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'allow_unresolved_refs': var allow_unresolved_refs = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000665 */ 		__call__ (__call__ (__super__, null, FeatureRefs, '__init__'), null, self);
/* 000667 */ 		if (__t__ (external_ref_resolvers !== null)) {
/* 000668 */ 			self.external_ref_resolvers = __call__ (list, null, external_ref_resolvers);
/* 000668 */ 		}
/* 000669 */ 		else {
/* 000670 */ 			self.external_ref_resolvers = [];
/* 000670 */ 		}
/* 000672 */ 		if (__t__ (allow_unresolved_refs)) {
/* 000673 */ 			if (__t__ (allow_unresolved_refs === true)) {
/* 000674 */ 				var allow_unresolved_refs = dict ({});
/* 000674 */ 			}
/* 000675 */ 			var unknown_ref_resolver = __call__ (AllowedUnresolvedRefResolver, null, __kwargtrans__ (allow_unresolved_refs));
/* 000676 */ 			(function () {
/* 000676 */ 				var __accu0__ = self.external_ref_resolvers;
/* 000676 */ 				return __call__ (__accu0__.append, __accu0__, unknown_ref_resolver);
/* 000676 */ 			}) ();
/* 000676 */ 		}
/* 000678 */ 		// pass;
/* 000678 */ 	});},
/* 000683 */ 	get set_external_ref_resolvers () {return __get__ (this, function (self, external_ref_resolvers) {
/* 000683 */ 		if (arguments.length) {
/* 000683 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000683 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000683 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000683 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000683 */ 					switch (__attrib0__) {
/* 000683 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 						case 'external_ref_resolvers': var external_ref_resolvers = __allkwargs0__ [__attrib0__]; break;
/* 000683 */ 					}
/* 000683 */ 				}
/* 000683 */ 			}
/* 000683 */ 		}
/* 000683 */ 		else {
/* 000683 */ 		}
/* 000684 */ 		if (__t__ (__t__ (self.external_ref_resolvers !== null) && __call__ (len, null, self.external_ref_resolvers))) {
/* 000685 */ 			(function () {
/* 000685 */ 				var __accu0__ = logger;
/* 000685 */ 				return __call__ (__accu0__.warning, __accu0__, 'FeatureRefs.set_external_ref_resolvers(): There were already external refs resolvers set.  They will be replaced.');
/* 000685 */ 			}) ();
/* 000685 */ 		}
/* 000687 */ 		self.external_ref_resolvers = external_ref_resolvers;
/* 000687 */ 	});},
/* 000689 */ 	get add_external_ref_resolver () {return __get__ (this, function (self, external_ref_resolver) {
/* 000689 */ 		if (arguments.length) {
/* 000689 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000689 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000689 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000689 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000689 */ 					switch (__attrib0__) {
/* 000689 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 						case 'external_ref_resolver': var external_ref_resolver = __allkwargs0__ [__attrib0__]; break;
/* 000689 */ 					}
/* 000689 */ 				}
/* 000689 */ 			}
/* 000689 */ 		}
/* 000689 */ 		else {
/* 000689 */ 		}
/* 000690 */ 		(function () {
/* 000690 */ 			var __accu0__ = self.external_ref_resolvers;
/* 000690 */ 			return __call__ (__accu0__.append, __accu0__, external_ref_resolver);
/* 000690 */ 		}) ();
/* 000690 */ 	});},
/* 000692 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 000692 */ 		if (arguments.length) {
/* 000692 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000692 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000692 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000692 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000692 */ 					switch (__attrib0__) {
/* 000692 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 					}
/* 000692 */ 				}
/* 000692 */ 			}
/* 000692 */ 		}
/* 000692 */ 		else {
/* 000692 */ 		}
/* 000695 */ 		return __call__ (dict, null, __kwargtrans__ ({macros: [(function () {
/* 000695 */ 			var __accu0__ = self;
/* 000695 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['ref_label'])}));
/* 000699 */ 		}) (), (function () {
/* 000699 */ 			var __accu0__ = self;
/* 000699 */ 			return __call__ (__accu0__.RefMacroCls, __accu0__, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]ref_label', 'display_text'])}));
/* 000699 */ 		}) ()]}));
/* 000699 */ 	});},
/* 000706 */ 	RefMacroCls: RefMacro,
/* 000709 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000709 */ 		if (arguments.length) {
/* 000709 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000709 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000709 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000709 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000709 */ 					switch (__attrib0__) {
/* 000709 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 					}
/* 000709 */ 				}
/* 000709 */ 			}
/* 000709 */ 		}
/* 000709 */ 		else {
/* 000709 */ 		}
/* 000712 */ 		return '{}(external_ref_resolvers={})'.format (self.__class__.__name__, __call__ (repr, null, self.external_ref_resolvers));
/* 000712 */ 	});}
/* 000712 */ });
/* 000719 */ export var _display_unresolved_verbatim = function (ref_type, ref_label) {
/* 000719 */ 	if (arguments.length) {
/* 000719 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000719 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000719 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000719 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000719 */ 				switch (__attrib0__) {
/* 000719 */ 					case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 					case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 				}
/* 000719 */ 			}
/* 000719 */ 		}
/* 000719 */ 	}
/* 000719 */ 	else {
/* 000719 */ 	}
/* 000720 */ 	return __add__ (__add__ (__add__ ('\\textbf{<\\begin{verbatimtext}', (__t__ (ref_type !== null) ? __add__ (ref_type, ':') : '')), ref_label), '\\end{verbatimtext}>}');
/* 000720 */ };
/* 000728 */ export var AllowedUnresolvedRefResolver =  __class__ ('AllowedUnresolvedRefResolver', [object], {
/* 000728 */ 	__module__: __name__,
/* 000729 */ 	get __init__ () {return __get__ (this, function (self, display_unresolved) {
/* 000729 */ 		if (typeof display_unresolved == 'undefined' || (display_unresolved != null && display_unresolved.hasOwnProperty ("__kwargtrans__"))) {;
/* 000729 */ 			var display_unresolved = _display_unresolved_verbatim;
/* 000729 */ 		};
/* 000729 */ 		if (arguments.length) {
/* 000729 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000729 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000729 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000729 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000729 */ 					switch (__attrib0__) {
/* 000729 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'display_unresolved': var display_unresolved = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 					}
/* 000729 */ 				}
/* 000729 */ 			}
/* 000729 */ 		}
/* 000729 */ 		else {
/* 000729 */ 		}
/* 000730 */ 		__call__ (__call__ (__super__, null, AllowedUnresolvedRefResolver, '__init__'), null, self);
/* 000731 */ 		self.display_unresolved = display_unresolved;
/* 000731 */ 	});},
/* 000733 */ 	get get_ref () {return __get__ (this, function (self, ref_type, ref_label, resource_info, render_context) {
/* 000733 */ 		if (arguments.length) {
/* 000733 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000733 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000733 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000733 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000733 */ 					switch (__attrib0__) {
/* 000733 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 						case 'ref_label': var ref_label = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 						case 'resource_info': var resource_info = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000733 */ 					}
/* 000733 */ 				}
/* 000733 */ 			}
/* 000733 */ 		}
/* 000733 */ 		else {
/* 000733 */ 		}
/* 000735 */ 		if (__t__ (__call__ (callable, null, self.display_unresolved))) {
/* 000736 */ 			var display_flm_text = (function () {
/* 000736 */ 				var __accu0__ = self;
/* 000736 */ 				return __call__ (__accu0__.display_unresolved, __accu0__, ref_type, ref_label);
/* 000736 */ 			}) ();
/* 000736 */ 		}
/* 000737 */ 		else {
/* 000738 */ 			var display_flm_text = __call__ (str, null, self.display_unresolved);
/* 000738 */ 		}
/* 000740 */ 		return __call__ (RefInstance, null, __kwargtrans__ ({ref_type: ref_type, ref_label: ref_label, formatted_ref_flm_text: display_flm_text, target_href: 'javascript:alert("Unresolved reference!")', counter_value: null, counter_numprefix: null, counter_formatter_id: null}));
/* 000740 */ 	});}
/* 000740 */ });
/* 000755 */ export var FeatureClass = FeatureRefs;
/* 000006 */ 
//# sourceMappingURL=flm.feature.refs.map