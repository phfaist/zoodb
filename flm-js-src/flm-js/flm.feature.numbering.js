/* 000001 */ // Transcrypt'ed from Python, 2025-10-21 23:26:10
/* 000006 */ var json = {};
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000017 */ import * as counter from './flm.counter.js';
/* 000012 */ import {ValueWithSubNums} from './flm.counter.js';
/* 000010 */ import {Feature} from './flm.feature._base.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ import * as __module_json__ from './json.js';
/* 000006 */ __nest__ (json, '', __module_json__);
/* 000006 */ export {counter, Feature, ValueWithSubNums};
/* 000001 */ var __name__ = 'flm.feature.numbering';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000024 */ export var Counter =  __class__ ('Counter', [object], {
/* 000024 */ 	__module__: __name__,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000030 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var initial_value = 0;
/* 000030 */ 		};
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000031 */ 		self.formatter = counter_formatter;
/* 000032 */ 		self.value = initial_value;
/* 000032 */ 	});},
/* 000034 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		self.value = value;
/* 000036 */ 		return self.value;
/* 000036 */ 	});},
/* 000038 */ 	get step () {return __get__ (this, function (self) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000040 */ 		return self.value;
/* 000040 */ 	});},
/* 000042 */ 	get reset () {return __get__ (this, function (self) {
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
/* 000043 */ 		self.value = self.initial_value;
/* 000044 */ 		return self.value;
/* 000044 */ 	});},
/* 000046 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000046 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000046 */ 			var value = null;
/* 000046 */ 		};
/* 000046 */ 		var kwargs = dict ();
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 				delete kwargs.__kwargtrans__;
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000047 */ 		if (__t__ (value === null)) {
/* 000048 */ 			var value = self.value;
/* 000048 */ 		}
/* 000049 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000050 */ 		(function () {
/* 000050 */ 			var __accu0__ = kwargs2;
/* 000050 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000050 */ 		}) ();
/* 000051 */ 		return (function () {
/* 000051 */ 			var __accu0__ = self.formatter;
/* 000051 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000051 */ 		}) ();
/* 000051 */ 	});},
/* 000053 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
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
/* 000054 */ 		var val = (function () {
/* 000054 */ 			var __accu0__ = self;
/* 000054 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000054 */ 		}) ();
/* 000055 */ 		return tuple ([val, (function () {
/* 000055 */ 			var __accu0__ = self;
/* 000055 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000055 */ 		}) ()]);
/* 000055 */ 	});}
/* 000055 */ });
/* 000058 */ export var CounterAlias =  __class__ ('CounterAlias', [object], {
/* 000058 */ 	__module__: __name__,
/* 000065 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, alias_counter) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		self.formatter = counter_formatter;
/* 000067 */ 		self.alias_counter = alias_counter;
/* 000067 */ 	});},
/* 000070 */ 	get _get_value () {return __get__ (this, function (self) {
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
/* 000071 */ 		return self.alias_counter.value;
/* 000071 */ 	});},
/* 000073 */ 	get step () {return __get__ (this, function (self) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000074 */ 		return (function () {
/* 000074 */ 			var __accu0__ = self.alias_counter;
/* 000074 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000074 */ 		}) ();
/* 000074 */ 	});},
/* 000076 */ 	get reset () {return __get__ (this, function (self) {
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000077 */ 		return (function () {
/* 000077 */ 			var __accu0__ = self.alias_counter;
/* 000077 */ 			return __call__ (__accu0__.reset, __accu0__);
/* 000077 */ 		}) ();
/* 000077 */ 	});},
/* 000079 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000079 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000079 */ 			var value = null;
/* 000079 */ 		};
/* 000079 */ 		var kwargs = dict ();
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 				delete kwargs.__kwargtrans__;
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000080 */ 		if (__t__ (value === null)) {
/* 000081 */ 			var value = self.value;
/* 000081 */ 		}
/* 000082 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000083 */ 		(function () {
/* 000083 */ 			var __accu0__ = kwargs2;
/* 000083 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000083 */ 		}) ();
/* 000084 */ 		return (function () {
/* 000084 */ 			var __accu0__ = self.formatter;
/* 000084 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000084 */ 		}) ();
/* 000084 */ 	});},
/* 000086 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000086 */ 		if (arguments.length) {
/* 000086 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000086 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000086 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000086 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000086 */ 					switch (__attrib0__) {
/* 000086 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000086 */ 					}
/* 000086 */ 				}
/* 000086 */ 			}
/* 000086 */ 		}
/* 000086 */ 		else {
/* 000086 */ 		}
/* 000087 */ 		var val = (function () {
/* 000087 */ 			var __accu0__ = self;
/* 000087 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000087 */ 		}) ();
/* 000088 */ 		return tuple ([val, (function () {
/* 000088 */ 			var __accu0__ = self;
/* 000088 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000088 */ 		}) ()]);
/* 000088 */ 	});}
/* 000088 */ });
/* 000088 */ Object.defineProperty (CounterAlias, 'value', property.call (CounterAlias, CounterAlias._get_value));;
/* 000097 */ export var _CounterIface =  __class__ ('_CounterIface', [object], {
/* 000097 */ 	__module__: __name__,
/* 000098 */ 	get __init__ () {return __get__ (this, function (self, counter_name, simple_counter, numbering_render_manager) {
/* 000098 */ 		if (typeof simple_counter == 'undefined' || (simple_counter != null && simple_counter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var simple_counter = null;
/* 000098 */ 		};
/* 000098 */ 		if (typeof numbering_render_manager == 'undefined' || (numbering_render_manager != null && numbering_render_manager.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var numbering_render_manager = null;
/* 000098 */ 		};
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'simple_counter': var simple_counter = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'numbering_render_manager': var numbering_render_manager = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000099 */ 		self.counter_name = counter_name;
/* 000100 */ 		self.simple_counter = simple_counter;
/* 000101 */ 		self.formatter = simple_counter.formatter;
/* 000102 */ 		self.numbering_render_manager = numbering_render_manager;
/* 000102 */ 	});},
/* 000104 */ 	get register_item () {return __get__ (this, function (self, custom_label) {
/* 000104 */ 		if (typeof custom_label == 'undefined' || (custom_label != null && custom_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000104 */ 			var custom_label = null;
/* 000104 */ 		};
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'custom_label': var custom_label = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		if (__t__ (self.numbering_render_manager !== null)) {
/* 000106 */ 			return (function () {
/* 000106 */ 				var __accu0__ = self.numbering_render_manager;
/* 000106 */ 				return __call__ (__accu0__.register_item, __accu0__, counter_name, __kwargtrans__ ({custom_label: custom_label}));
/* 000106 */ 			}) ();
/* 000106 */ 		}
/* 000109 */ 		if (__t__ (custom_label !== null)) {
/* 000110 */ 			return dict ({'value': null, 'numprefix': null, 'formatted_value': custom_label});
/* 000110 */ 		}
/* 000115 */ 		var __left0__ = (function () {
/* 000115 */ 			var __accu0__ = self.simple_counter;
/* 000115 */ 			return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000115 */ 		}) ();
/* 000115 */ 		var number = __left0__ [0];
/* 000115 */ 		var formatted_number = __left0__ [1];
/* 000117 */ 		return dict ({'value': __call__ (ValueWithSubNums, null, number), 'numprefix': null, 'formatted_value': formatted_number});
/* 000117 */ 	});}
/* 000117 */ });
/* 000123 */ export var get_document_render_counter = function (render_context, counter_name, counter_formatter, alias_counter, always_number_within) {
/* 000123 */ 	if (typeof alias_counter == 'undefined' || (alias_counter != null && alias_counter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000123 */ 		var alias_counter = null;
/* 000123 */ 	};
/* 000123 */ 	if (typeof always_number_within == 'undefined' || (always_number_within != null && always_number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000123 */ 		var always_number_within = null;
/* 000123 */ 	};
/* 000123 */ 	if (arguments.length) {
/* 000123 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 				switch (__attrib0__) {
/* 000123 */ 					case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					case 'always_number_within': var always_number_within = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 	}
/* 000123 */ 	else {
/* 000123 */ 	}
/* 000131 */ 	if (__t__ (!__t__ (((function () {
/* 000131 */ 		var __accu0__ = render_context;
/* 000131 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'numbering');
/* 000131 */ 	}) ())))) {
/* 000133 */ 		// pass;
/* 000139 */ 		if (__t__ (always_number_within !== null)) {
/* 000140 */ 			(function () {
/* 000140 */ 				var __accu0__ = logger;
/* 000140 */ 				return __call__ (__accu0__.error, __accu0__, "Requested always_number_within={} but 'numbering' feature is not supported; for counter_name={}.".format (always_number_within, counter_name));
/* 000140 */ 			}) ();
/* 000146 */ 			var __except0__ = __call__ (ValueError, null, "Counter ‘{}’ cannot be numbered within ‘{}’ without the 'numbering' feature enabled.".format (counter_name, (function () {
/* 000146 */ 				var __accu0__ = always_number_within;
/* 000146 */ 				return __call__ (__accu0__.py_get, __accu0__, 'reset_at', '???');
/* 000146 */ 			}) ()));
/* 000146 */ 			__except0__.__cause__ = null;
/* 000146 */ 			throw __except0__;
/* 000146 */ 		}
/* 000150 */ 		if (__t__ (alias_counter !== null)) {
/* 000153 */ 			return __call__ (_CounterIface, null, counter_name, __kwargtrans__ ({simple_counter: __call__ (CounterAlias, null, counter_formatter, alias_counter.simple_counter)}));
/* 000153 */ 		}
/* 000160 */ 		return __call__ (_CounterIface, null, counter_name, __kwargtrans__ ({simple_counter: __call__ (Counter, null, counter_formatter)}));
/* 000160 */ 	}
/* 000165 */ 	// pass;
/* 000171 */ 	var numbering_mgr = (function () {
/* 000171 */ 		var __accu0__ = render_context;
/* 000171 */ 		return __call__ (__accu0__.feature_render_manager, __accu0__, 'numbering');
/* 000171 */ 	}) ();
/* 000173 */ 	return (function () {
/* 000173 */ 		var __accu0__ = numbering_mgr;
/* 000173 */ 		return __call__ (__accu0__.register_counter, __accu0__, counter_name, counter_formatter, __kwargtrans__ ({alias_counter: alias_counter, always_number_within: always_number_within}));
/* 000173 */ 	}) ();
/* 000173 */ };
/* 000189 */ export var _DocCounterState =  __class__ ('_DocCounterState', [object], {
/* 000189 */ 	__module__: __name__,
/* 000190 */ 	get __init__ () {return __get__ (this, function (self, formatter, rdr_mgr, counter_name, base_use_doc_state_keys, numprefix_and_value_for_doc_state) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'formatter': var formatter = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'rdr_mgr': var rdr_mgr = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'base_use_doc_state_keys': var base_use_doc_state_keys = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'numprefix_and_value_for_doc_state': var numprefix_and_value_for_doc_state = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000194 */ 		self.formatter = formatter;
/* 000195 */ 		self.rdr_mgr = rdr_mgr;
/* 000196 */ 		self.counter_name = counter_name;
/* 000198 */ 		self.counter_by_filtered_doc_states = dict ({});
/* 000201 */ 		self.cur_filtered_doc_state = null;
/* 000202 */ 		self.cur_counter_state = null;
/* 000205 */ 		self.base_use_doc_state_keys = __call__ (list, null, __t__ (base_use_doc_state_keys) || []);
/* 000208 */ 		self.use_doc_state_keys = null;
/* 000210 */ 		self.numprefix_and_value_for_doc_state = numprefix_and_value_for_doc_state;
/* 000210 */ 	});},
/* 000212 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		var s = '_DocCounterState<‘{}’ {}'.format (self.counter_name, __call__ (repr, null, self.cur_counter_state));
/* 000214 */ 		if (__t__ (self.use_doc_state_keys !== null)) {
/* 000215 */ 			if (__t__ (__call__ (len, null, self.use_doc_state_keys))) {
/* 000216 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (' ⟨'.format (), (function () {
/* 000216 */ 					var __accu0__ = ', ';
/* 000216 */ 					return __call__ (__accu0__.join, __accu0__, self.use_doc_state_keys);
/* 000216 */ 				}) ()), '⟩'));
/* 000216 */ 			}
/* 000216 */ 		}
/* 000217 */ 		else if (__t__ (__call__ (len, null, self.base_use_doc_state_keys))) {
/* 000218 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (' ⟨'.format (), (function () {
/* 000218 */ 				var __accu0__ = ', ';
/* 000218 */ 				return __call__ (__accu0__.join, __accu0__, self.base_use_doc_state_keys);
/* 000218 */ 			}) ()), '⟩'));
/* 000218 */ 		}
/* 000219 */ 		var s = __call__ (__iadd__, null, s, '>'.format ());
/* 000220 */ 		return s;
/* 000220 */ 	});},
/* 000222 */ 	get get_filtered_doc_state () {return __get__ (this, function (self) {
/* 000222 */ 		if (arguments.length) {
/* 000222 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000222 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000222 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000222 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000222 */ 					switch (__attrib0__) {
/* 000222 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000222 */ 					}
/* 000222 */ 				}
/* 000222 */ 			}
/* 000222 */ 		}
/* 000222 */ 		else {
/* 000222 */ 		}
/* 000227 */ 		var rs = self.rdr_mgr.render_doc_states;
/* 000228 */ 		return (function () {
/* 000228 */ 			var __accu0__ = json;
/* 000228 */ 			return __call__ (__accu0__.dumps, __accu0__, (function () {
/* 000228 */ 				var __accu1__ = [];
/* 000228 */ 				var __iterable0__ = self.use_doc_state_keys;
/* 000228 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000228 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000228 */ 					(function () {
/* 000228 */ 						var __accu2__ = __accu1__;
/* 000228 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000228 */ 							var __accu3__ = rs;
/* 000228 */ 							return __call__ (__accu3__.py_get, __accu3__, k, null);
/* 000228 */ 						}) ());
/* 000228 */ 					}) ();
/* 000228 */ 				}
/* 000228 */ 				return __accu1__;
/* 000228 */ 			}) ());
/* 000228 */ 		}) ();
/* 000228 */ 	});},
/* 000230 */ 	get register_item () {return __get__ (this, function (self) {
/* 000230 */ 		var kwargs = dict ();
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 				delete kwargs.__kwargtrans__;
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		return (function () {
/* 000231 */ 			var __accu0__ = self.rdr_mgr;
/* 000231 */ 			return __call__ (__accu0__.register_item, __accu0__, self.counter_name, __kwargtrans__ (kwargs));
/* 000231 */ 		}) ();
/* 000231 */ 	});},
/* 000233 */ 	get _impl_register_item () {return __get__ (this, function (self) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000235 */ 		(function () {
/* 000235 */ 			var __accu0__ = self;
/* 000235 */ 			return __call__ (__accu0__._update_state_from_doc_state, __accu0__);
/* 000235 */ 		}) ();
/* 000237 */ 		__setitem__ (self.cur_counter_state, 'value', (function () {
/* 000237 */ 			var __accu0__ = __getitem__ (self.cur_counter_state, 'value');
/* 000237 */ 			return __call__ (__accu0__.incremented, __accu0__);
/* 000237 */ 		}) ());
/* 000239 */ 		// pass;
/* 000246 */ 		var cur_value = __getitem__ (self.cur_counter_state, 'value');
/* 000247 */ 		var cur_numprefix = __getitem__ (self.cur_counter_state, 'numprefix');
/* 000248 */ 		var formatted_value = (function () {
/* 000248 */ 			var __accu0__ = self.formatter;
/* 000248 */ 			return __call__ (__accu0__.format_flm, __accu0__, cur_value, __kwargtrans__ ({numprefix: cur_numprefix, with_prefix: false}));
/* 000248 */ 		}) ();
/* 000255 */ 		return dict ({'value': cur_value, 'number': (function () {
/* 000255 */ 			var __accu0__ = cur_value;
/* 000255 */ 			return __call__ (__accu0__.get_num, __accu0__);
/* 000256 */ 		}) (), 'subnums': (function () {
/* 000256 */ 			var __accu0__ = cur_value;
/* 000256 */ 			return __call__ (__accu0__.get_subnums, __accu0__);
/* 000256 */ 		}) (), 'numprefix': cur_numprefix, 'formatted_value': formatted_value});
/* 000256 */ 	});},
/* 000261 */ 	get _ensure_use_doc_state_keys () {return __get__ (this, function (self) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000262 */ 		if (__t__ (self.use_doc_state_keys !== null)) {
/* 000263 */ 			return ;
/* 000263 */ 		}
/* 000265 */ 		self.use_doc_state_keys = (function () {
/* 000265 */ 			var __accu0__ = self.rdr_mgr;
/* 000265 */ 			return __call__ (__accu0__.compute_use_doc_state_keys, __accu0__, self.counter_name);
/* 000265 */ 		}) ();
/* 000267 */ 		// pass;
/* 000267 */ 	});},
/* 000272 */ 	get _update_state_from_doc_state () {return __get__ (this, function (self) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000273 */ 		(function () {
/* 000273 */ 			var __accu0__ = self;
/* 000273 */ 			return __call__ (__accu0__._ensure_use_doc_state_keys, __accu0__);
/* 000273 */ 		}) ();
/* 000275 */ 		var new_filtered_doc_state = (function () {
/* 000275 */ 			var __accu0__ = self;
/* 000275 */ 			return __call__ (__accu0__.get_filtered_doc_state, __accu0__);
/* 000275 */ 		}) ();
/* 000276 */ 		if (__t__ (__eq__ (new_filtered_doc_state, self.cur_filtered_doc_state))) {
/* 000279 */ 			// pass;
/* 000279 */ 		}
/* 000280 */ 		else if (__t__ (__in__ (new_filtered_doc_state, self.counter_by_filtered_doc_states))) {
/* 000284 */ 			self.cur_filtered_doc_state = new_filtered_doc_state;
/* 000285 */ 			self.cur_counter_state = __getitem__ (self.counter_by_filtered_doc_states, new_filtered_doc_state);
/* 000286 */ 			// pass;
/* 000286 */ 		}
/* 000287 */ 		else {
/* 000299 */ 			self.cur_filtered_doc_state = new_filtered_doc_state;
/* 000301 */ 			if (__t__ (self.numprefix_and_value_for_doc_state)) {
/* 000302 */ 				var __left0__ = (function () {
/* 000302 */ 					var __accu0__ = self.numprefix_and_value_for_doc_state;
/* 000302 */ 					return __call__ (__accu0__.compute, __accu0__, self.rdr_mgr.render_doc_states);
/* 000302 */ 				}) ();
/* 000302 */ 				var cur_numprefix = __left0__ [0];
/* 000302 */ 				var cur_value = __left0__ [1];
/* 000305 */ 				var cur_value = __call__ (ValueWithSubNums, null, cur_value);
/* 000305 */ 			}
/* 000306 */ 			else {
/* 000307 */ 				var cur_numprefix = null;
/* 000308 */ 				var cur_value = __call__ (ValueWithSubNums, null, 0);
/* 000308 */ 			}
/* 000310 */ 			var new_counter_state = dict ({'value': cur_value, 'numprefix': cur_numprefix});
/* 000314 */ 			__setitem__ (self.counter_by_filtered_doc_states, new_filtered_doc_state, new_counter_state);
/* 000315 */ 			self.cur_counter_state = new_counter_state;
/* 000317 */ 			// pass;
/* 000317 */ 		}
/* 000317 */ 	});},
/* 000326 */ 	get _get_cur_counter_state () {return __get__ (this, function (self) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000330 */ 		(function () {
/* 000330 */ 			var __accu0__ = self;
/* 000330 */ 			return __call__ (__accu0__._update_state_from_doc_state, __accu0__);
/* 000330 */ 		}) ();
/* 000331 */ 		return self.cur_counter_state;
/* 000331 */ 	});},
/* 000333 */ 	get get_formatted_counter_value () {return __get__ (this, function (self) {
/* 000333 */ 		var kwargs = dict ();
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 				delete kwargs.__kwargtrans__;
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000337 */ 		var cur_counter_state = (function () {
/* 000337 */ 			var __accu0__ = self;
/* 000337 */ 			return __call__ (__accu0__._get_cur_counter_state, __accu0__);
/* 000337 */ 		}) ();
/* 000338 */ 		if (__t__ (__t__ (cur_counter_state === null) || !__t__ ((__getitem__ (cur_counter_state, 'value'))))) {
/* 000339 */ 			(function () {
/* 000339 */ 				var __accu0__ = logger;
/* 000339 */ 				return __call__ (__accu0__.warning, __accu0__, "Requested counter ‘{}’'s value but none was set.".format (self.counter_name));
/* 000339 */ 			}) ();
/* 000342 */ 			return '';
/* 000342 */ 		}
/* 000343 */ 		return (function () {
/* 000343 */ 			var __accu0__ = self.formatter;
/* 000344 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({value: (function () {
/* 000344 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000344 */ 				return __call__ (__accu1__.get_num, __accu1__);
/* 000345 */ 			}) (), subnums: (function () {
/* 000345 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000345 */ 				return __call__ (__accu1__.get_subnums, __accu1__);
/* 000345 */ 			}) (), numprefix: __getitem__ (cur_counter_state, 'numprefix')}, kwargs)));
/* 000345 */ 		}) ();
/* 000345 */ 	});}
/* 000345 */ });
/* 000351 */ export var _DocCounterStateAliasCounter =  __class__ ('_DocCounterStateAliasCounter', [object], {
/* 000351 */ 	__module__: __name__,
/* 000352 */ 	get __init__ () {return __get__ (this, function (self, alias_counter, formatter, counter_name) {
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'formatter': var formatter = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000353 */ 		__call__ (__call__ (__super__, null, _DocCounterStateAliasCounter, '__init__'), null, self);
/* 000354 */ 		self.alias_counter = alias_counter;
/* 000355 */ 		self.counter_name = counter_name;
/* 000356 */ 		self.formatter = formatter;
/* 000356 */ 	});},
/* 000358 */ 	get register_item () {return __get__ (this, function (self) {
/* 000358 */ 		var kwargs = dict ();
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 				delete kwargs.__kwargtrans__;
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000359 */ 		var count_info = (function () {
/* 000359 */ 			var __accu0__ = self.alias_counter;
/* 000359 */ 			return __call__ (__accu0__.register_item, __accu0__, __kwargtrans__ (kwargs));
/* 000359 */ 		}) ();
/* 000360 */ 		var formatted_value = (function () {
/* 000360 */ 			var __accu0__ = self.formatter;
/* 000360 */ 			return __call__ (__accu0__.format_flm, __accu0__, __getitem__ (count_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (count_info, 'numprefix'), with_prefix: false}));
/* 000360 */ 		}) ();
/* 000365 */ 		__setitem__ (count_info, 'formatted_value', formatted_value);
/* 000366 */ 		// pass;
/* 000373 */ 		return count_info;
/* 000373 */ 	});},
/* 000375 */ 	get get_formatted_counter_value () {return __get__ (this, function (self) {
/* 000375 */ 		var kwargs = dict ();
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 				delete kwargs.__kwargtrans__;
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000379 */ 		var cur_counter_state = (function () {
/* 000379 */ 			var __accu0__ = self.alias_counter;
/* 000379 */ 			return __call__ (__accu0__._get_cur_counter_state, __accu0__);
/* 000379 */ 		}) ();
/* 000380 */ 		return (function () {
/* 000380 */ 			var __accu0__ = self.formatter;
/* 000381 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({value: (function () {
/* 000381 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000381 */ 				return __call__ (__accu1__.get_num, __accu1__);
/* 000382 */ 			}) (), subnums: (function () {
/* 000382 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000382 */ 				return __call__ (__accu1__.get_subnums, __accu1__);
/* 000382 */ 			}) (), numprefix: __getitem__ (cur_counter_state, 'numprefix')}, kwargs)));
/* 000382 */ 		}) ();
/* 000382 */ 	});}
/* 000382 */ });
/* 000390 */ export var _NumprefixAndValueForDocStateCompute =  __class__ ('_NumprefixAndValueForDocStateCompute', [object], {
/* 000390 */ 	__module__: __name__,
/* 000391 */ 	get __init__ () {return __get__ (this, function (self, numprefix_for_doc_state_fn, counter_name, counters, number_within, value_for_doc_state_fn) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'numprefix_for_doc_state_fn': var numprefix_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'counters': var counters = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'value_for_doc_state_fn': var value_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000393 */ 		self.numprefix_for_doc_state_fn = numprefix_for_doc_state_fn;
/* 000394 */ 		self.counter_name = counter_name;
/* 000395 */ 		self.counters = counters;
/* 000396 */ 		self.number_within = number_within;
/* 000397 */ 		self.value_for_doc_state_fn = value_for_doc_state_fn;
/* 000397 */ 	});},
/* 000399 */ 	get compute () {return __get__ (this, function (self, rs) {
/* 000399 */ 		if (arguments.length) {
/* 000399 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000399 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000399 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000399 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000399 */ 					switch (__attrib0__) {
/* 000399 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 						case 'rs': var rs = __allkwargs0__ [__attrib0__]; break;
/* 000399 */ 					}
/* 000399 */ 				}
/* 000399 */ 			}
/* 000399 */ 		}
/* 000399 */ 		else {
/* 000399 */ 		}
/* 000400 */ 		if (__t__ (self.numprefix_for_doc_state_fn !== null)) {
/* 000401 */ 			var numprefix = (function () {
/* 000401 */ 				var __accu0__ = self;
/* 000401 */ 				return __call__ (__accu0__.numprefix_for_doc_state_fn, __accu0__, rs, self);
/* 000401 */ 			}) ();
/* 000401 */ 		}
/* 000402 */ 		else if (__t__ (__in__ (self.counter_name, self.number_within))) {
/* 000403 */ 			var numprefix_template = __getitem__ (__getitem__ (self.number_within, self.counter_name), 'numprefix');
/* 000404 */ 			// pass;
/* 000411 */ 			if (__t__ (numprefix_template === null)) {
/* 000412 */ 				var numprefix_template = '';
/* 000412 */ 			}
/* 000413 */ 			if (__t__ (__call__ (callable, null, numprefix_template))) {
/* 000414 */ 				var numprefix = __call__ (numprefix_template, null, __kwargtrans__ ({counters: self.counters}));
/* 000414 */ 			}
/* 000416 */ 			else {
/* 000418 */ 				try {
/* 000419 */ 					var numprefix = (function () {
/* 000419 */ 						var __accu0__ = counter;
/* 000419 */ 						return __call__ (__accu0__._replace_dollar_template_use_callable, __accu0__, numprefix_template, self._get_counter_value);
/* 000419 */ 					}) ();
/* 000419 */ 				}
/* 000419 */ 				catch (__except0__) {
/* 000419 */ 					if (isinstance (__except0__, KeyError)) {
/* 000419 */ 						var e = __except0__;
/* 000424 */ 						var __except1__ = __call__ (ValueError, null, 'In numprefix_template of number_within for ‘{}’: Cannot find value for counter: {}'.format (self.counter_name, e));
/* 000424 */ 						__except1__.__cause__ = null;
/* 000424 */ 						throw __except1__;
/* 000424 */ 					}
/* 000424 */ 					else {
/* 000424 */ 						throw __except0__;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000427 */ 		else {
/* 000429 */ 			var numprefix = null;
/* 000429 */ 		}
/* 000431 */ 		if (__t__ (self.value_for_doc_state_fn !== null)) {
/* 000432 */ 			var value = (function () {
/* 000432 */ 				var __accu0__ = self;
/* 000432 */ 				return __call__ (__accu0__.value_for_doc_state_fn, __accu0__, rs, self);
/* 000432 */ 			}) ();
/* 000432 */ 		}
/* 000433 */ 		else {
/* 000434 */ 			var value = 0;
/* 000434 */ 		}
/* 000436 */ 		return tuple ([numprefix, value]);
/* 000436 */ 	});},
/* 000438 */ 	get _get_counter_value () {return __get__ (this, function (self, dcname) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'dcname': var dcname = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000439 */ 		var dcstate = __getitem__ (self.counters, dcname);
/* 000440 */ 		return (function () {
/* 000440 */ 			var __accu0__ = dcstate;
/* 000440 */ 			return __call__ (__accu0__.get_formatted_counter_value, __accu0__, __kwargtrans__ ({with_prefix: false}));
/* 000440 */ 		}) ();
/* 000440 */ 	});}
/* 000440 */ });
/* 000445 */ export var FeatureNumbering =  __class__ ('FeatureNumbering', [Feature], {
/* 000445 */ 	__module__: __name__,
/* 000447 */ 	feature_name: 'numbering',
/* 000450 */ 	feature_title: 'Numbering for figures, sections, equations, theorems, and more',
/* 000450 */ 	RenderManager: __class__ ('RenderManager', [Feature.RenderManager], {
/* 000450 */ 		__module__: __name__,
/* 000452 */ 		get initialize () {return __get__ (this, function (self, number_within) {
/* 000452 */ 			if (typeof number_within == 'undefined' || (number_within != null && number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000452 */ 				var number_within = null;
/* 000452 */ 			};
/* 000452 */ 			if (arguments.length) {
/* 000452 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000452 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000452 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000452 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000452 */ 						switch (__attrib0__) {
/* 000452 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 							case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000452 */ 						}
/* 000452 */ 					}
/* 000452 */ 				}
/* 000452 */ 			}
/* 000452 */ 			else {
/* 000452 */ 			}
/* 000453 */ 			self.counters = dict ({});
/* 000455 */ 			self.render_doc_states = __call__ (dict, null);
/* 000457 */ 			self.render_doc_states_clear_dependants = __call__ (dict, null);
/* 000462 */ 			if (__t__ (number_within !== null)) {
/* 000463 */ 				self.number_within = number_within;
/* 000463 */ 			}
/* 000464 */ 			else {
/* 000465 */ 				self.number_within = self.feature.number_within;
/* 000465 */ 			}
/* 000467 */ 			if (__t__ (self.number_within !== null)) {
/* 000468 */ 				var __iterable0__ = (function () {
/* 000468 */ 					var __accu0__ = self.number_within;
/* 000468 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000468 */ 				}) ();
/* 000468 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000468 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000468 */ 					var k = __left0__ [0];
/* 000468 */ 					var v = __left0__ [1];
/* 000469 */ 					if (__t__ (!__in__ ('reset_at', v))) {
/* 000474 */ 						var __except0__ = __call__ (ValueError, null, __add__ ("numering feature config: number_within should be a dict of the type dict(equation=dict(reset_at='section', numprefix='${{subsection}}.'), ...).' .  Got ", __call__ (repr, null, self.number_within)));
/* 000474 */ 						__except0__.__cause__ = null;
/* 000474 */ 						throw __except0__;
/* 000474 */ 					}
/* 000474 */ 				}
/* 000474 */ 			}
/* 000486 */ 			// pass;
/* 000486 */ 		});},
/* 000491 */ 		get register_counter () {return __get__ (this, function (self, counter_name, counter_formatter) {
/* 000491 */ 			var alias_counter = null;
/* 000491 */ 			var always_number_within = null;
/* 000491 */ 			var use_doc_state_keys = null;
/* 000491 */ 			var numprefix_for_doc_state_fn = null;
/* 000491 */ 			var value_for_doc_state_fn = null;
/* 000491 */ 			if (arguments.length) {
/* 000491 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 						switch (__attrib0__) {
/* 000491 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'always_number_within': var always_number_within = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'use_doc_state_keys': var use_doc_state_keys = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'numprefix_for_doc_state_fn': var numprefix_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 							case 'value_for_doc_state_fn': var value_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						}
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 			}
/* 000491 */ 			else {
/* 000491 */ 			}
/* 000504 */ 			if (__t__ (!__t__ ((counter_name)))) {
/* 000505 */ 				var __except0__ = __call__ (ValueError, null, 'register_counter(), please specify a counter_name'.format ());
/* 000505 */ 				__except0__.__cause__ = null;
/* 000505 */ 				throw __except0__;
/* 000505 */ 			}
/* 000507 */ 			if (__t__ (__in__ (counter_name, self.counters))) {
/* 000508 */ 				var __except0__ = __call__ (ValueError, null, 'Counter ‘{}’ already registered!'.format (counter_name));
/* 000508 */ 				__except0__.__cause__ = null;
/* 000508 */ 				throw __except0__;
/* 000508 */ 			}
/* 000510 */ 			if (__t__ (always_number_within !== null)) {
/* 000511 */ 				if (__t__ (alias_counter)) {
/* 000512 */ 					var __except0__ = __call__ (ValueError, null, __add__ ('register_counter(): Cannot specify both alias_counter and always_number_within, got ', 'alias_counter={} and always_number_within={}'.format (alias_counter, always_number_within)));
/* 000512 */ 					__except0__.__cause__ = null;
/* 000512 */ 					throw __except0__;
/* 000512 */ 				}
/* 000517 */ 				if (__t__ (__in__ (counter_name, self.number_within))) {
/* 000518 */ 					__setitem__ (__getitem__ (self.number_within, counter_name), 'reset_at', __getitem__ (always_number_within, 'reset_at'));
/* 000518 */ 				}
/* 000520 */ 				else {
/* 000521 */ 					__setitem__ (self.number_within, counter_name, dict ({'reset_at': __getitem__ (always_number_within, 'reset_at'), 'numprefix': __getitem__ (always_number_within, 'numprefix')}));
/* 000521 */ 				}
/* 000525 */ 				// pass;
/* 000525 */ 			}
/* 000533 */ 			if (__t__ (alias_counter)) {
/* 000536 */ 				__setitem__ (self.counters, counter_name, __call__ (_DocCounterStateAliasCounter, null, __kwargtrans__ ({alias_counter: alias_counter, formatter: counter_formatter, counter_name: counter_name})));
/* 000541 */ 				// pass;
/* 000545 */ 				return __getitem__ (self.counters, counter_name);
/* 000545 */ 			}
/* 000552 */ 			var _numprefix_and_value_for_doc_state = __call__ (_NumprefixAndValueForDocStateCompute, null, __kwargtrans__ ({numprefix_for_doc_state_fn: numprefix_for_doc_state_fn, counter_name: counter_name, counters: self.counters, number_within: self.number_within, value_for_doc_state_fn: value_for_doc_state_fn}));
/* 000560 */ 			var doc_counter_state = __call__ (_DocCounterState, null, __kwargtrans__ ({formatter: counter_formatter, rdr_mgr: self, counter_name: counter_name, base_use_doc_state_keys: use_doc_state_keys, numprefix_and_value_for_doc_state: _numprefix_and_value_for_doc_state}));
/* 000567 */ 			__setitem__ (self.counters, counter_name, doc_counter_state);
/* 000569 */ 			// pass;
/* 000573 */ 			return doc_counter_state;
/* 000573 */ 		});},
/* 000575 */ 		get _number_within_parent_counters () {return __get__ (this, function (self, c) {
/* 000575 */ 			if (arguments.length) {
/* 000575 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000575 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000575 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000575 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000575 */ 						switch (__attrib0__) {
/* 000575 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						}
/* 000575 */ 					}
/* 000575 */ 				}
/* 000575 */ 			}
/* 000575 */ 			else {
/* 000575 */ 			}
/* 000576 */ 			if (__t__ (!__in__ (c, self.number_within))) {
/* 000577 */ 				return [];
/* 000577 */ 			}
/* 000579 */ 			var pc = __getitem__ (__getitem__ (self.number_within, c), 'reset_at');
/* 000580 */ 			var parent_counters = [pc];
/* 000581 */ 			while (__t__ (__in__ (pc, self.number_within))) {
/* 000582 */ 				var pc = __getitem__ (__getitem__ (self.number_within, pc), 'reset_at');
/* 000583 */ 				(function () {
/* 000583 */ 					var __accu0__ = parent_counters;
/* 000583 */ 					return __call__ (__accu0__.append, __accu0__, pc);
/* 000583 */ 				}) ();
/* 000583 */ 			}
/* 000584 */ 			return parent_counters;
/* 000584 */ 		});},
/* 000586 */ 		get compute_use_doc_state_keys () {return __get__ (this, function (self, counter_name) {
/* 000586 */ 			if (arguments.length) {
/* 000586 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000586 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000586 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000586 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000586 */ 						switch (__attrib0__) {
/* 000586 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000586 */ 						}
/* 000586 */ 					}
/* 000586 */ 				}
/* 000586 */ 			}
/* 000586 */ 			else {
/* 000586 */ 			}
/* 000588 */ 			var use_doc_state_keys = __call__ (list, null, __getitem__ (self.counters, counter_name).base_use_doc_state_keys);
/* 000590 */ 			var __iterable0__ = (function () {
/* 000590 */ 				var __accu0__ = self;
/* 000590 */ 				return __call__ (__accu0__._number_within_parent_counters, __accu0__, counter_name);
/* 000590 */ 			}) ();
/* 000590 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000590 */ 				var parent_counter = __getitem__ (__iterable0__, __index0__);
/* 000591 */ 				(function () {
/* 000591 */ 					var __accu0__ = use_doc_state_keys;
/* 000591 */ 					return __call__ (__accu0__.append, __accu0__, 'cnt-{}'.format (parent_counter));
/* 000591 */ 				}) ();
/* 000591 */ 			}
/* 000593 */ 			return use_doc_state_keys;
/* 000593 */ 		});},
/* 000595 */ 		get set_render_doc_state () {return __get__ (this, function (self, state_type, state_value, clear_self_upon_change) {
/* 000595 */ 			if (typeof clear_self_upon_change == 'undefined' || (clear_self_upon_change != null && clear_self_upon_change.hasOwnProperty ("__kwargtrans__"))) {;
/* 000595 */ 				var clear_self_upon_change = null;
/* 000595 */ 			};
/* 000595 */ 			if (arguments.length) {
/* 000595 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000595 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000595 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000595 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000595 */ 						switch (__attrib0__) {
/* 000595 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 							case 'state_type': var state_type = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 							case 'state_value': var state_value = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 							case 'clear_self_upon_change': var clear_self_upon_change = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						}
/* 000595 */ 					}
/* 000595 */ 				}
/* 000595 */ 			}
/* 000595 */ 			else {
/* 000595 */ 			}
/* 000598 */ 			// pass;
/* 000602 */ 			__setitem__ (self.render_doc_states, state_type, state_value);
/* 000604 */ 			if (__t__ (__in__ (state_type, self.render_doc_states_clear_dependants))) {
/* 000605 */ 				var __iterable0__ = __getitem__ (self.render_doc_states_clear_dependants, state_type);
/* 000605 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000605 */ 					var dep = __getitem__ (__iterable0__, __index0__);
/* 000606 */ 					// pass;
/* 000609 */ 					(function () {
/* 000609 */ 						var __accu0__ = self;
/* 000609 */ 						return __call__ (__accu0__.set_render_doc_state, __accu0__, dep, null);
/* 000609 */ 					}) ();
/* 000609 */ 				}
/* 000609 */ 			}
/* 000614 */ 			if (__t__ (clear_self_upon_change)) {
/* 000615 */ 				var __iterable0__ = clear_self_upon_change;
/* 000615 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000615 */ 					var pdep = __getitem__ (__iterable0__, __index0__);
/* 000616 */ 					if (__t__ (!__in__ (pdep, self.render_doc_states_clear_dependants))) {
/* 000617 */ 						__setitem__ (self.render_doc_states_clear_dependants, pdep, __call__ (set, null));
/* 000617 */ 					}
/* 000618 */ 					(function () {
/* 000618 */ 						var __accu0__ = __getitem__ (self.render_doc_states_clear_dependants, pdep);
/* 000618 */ 						return __call__ (__accu0__.add, __accu0__, state_type);
/* 000618 */ 					}) ();
/* 000618 */ 				}
/* 000620 */ 				// pass;
/* 000620 */ 			}
/* 000620 */ 		});},
/* 000627 */ 		get clear_render_doc_state () {return __get__ (this, function (self, state_type) {
/* 000627 */ 			if (arguments.length) {
/* 000627 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000627 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000627 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000627 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000627 */ 						switch (__attrib0__) {
/* 000627 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 							case 'state_type': var state_type = __allkwargs0__ [__attrib0__]; break;
/* 000627 */ 						}
/* 000627 */ 					}
/* 000627 */ 				}
/* 000627 */ 			}
/* 000627 */ 			else {
/* 000627 */ 			}
/* 000628 */ 			// pass;
/* 000628 */ 			delete __getitem__ (self.render_doc_states, state_type);
/* 000633 */ 			if (__t__ (__in__ (state_type, self.render_doc_states_clear_dependants))) {
/* 000634 */ 				var __iterable0__ = __getitem__ (self.render_doc_states_clear_dependants, state_type);
/* 000634 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000634 */ 					var dep = __getitem__ (__iterable0__, __index0__);
/* 000635 */ 					// pass;
/* 000638 */ 					(function () {
/* 000638 */ 						var __accu0__ = self;
/* 000638 */ 						return __call__ (__accu0__.set_render_doc_state, __accu0__, dep, null);
/* 000638 */ 					}) ();
/* 000638 */ 				}
/* 000638 */ 			}
/* 000638 */ 		});},
/* 000643 */ 		get register_item () {return __get__ (this, function (self, counter_name, custom_label) {
/* 000643 */ 			if (typeof custom_label == 'undefined' || (custom_label != null && custom_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000643 */ 				var custom_label = null;
/* 000643 */ 			};
/* 000643 */ 			if (arguments.length) {
/* 000643 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000643 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000643 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000643 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000643 */ 						switch (__attrib0__) {
/* 000643 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 							case 'custom_label': var custom_label = __allkwargs0__ [__attrib0__]; break;
/* 000643 */ 						}
/* 000643 */ 					}
/* 000643 */ 				}
/* 000643 */ 			}
/* 000643 */ 			else {
/* 000643 */ 			}
/* 000645 */ 			if (__t__ (custom_label !== null)) {
/* 000646 */ 				var item_info = dict ({'value': null, 'number': null, 'subnums': null, 'numprefix': null, 'formatted_value': custom_label});
/* 000646 */ 			}
/* 000652 */ 			else {
/* 000654 */ 				var item_info = (function () {
/* 000654 */ 					var __accu0__ = __getitem__ (self.counters, counter_name);
/* 000654 */ 					return __call__ (__accu0__._impl_register_item, __accu0__);
/* 000654 */ 				}) ();
/* 000654 */ 			}
/* 000658 */ 			var our_full_parents = null;
/* 000659 */ 			if (__t__ (__in__ (counter_name, self.number_within))) {
/* 000660 */ 				var pc = __getitem__ (__getitem__ (self.number_within, counter_name), 'reset_at');
/* 000661 */ 				var our_full_parents = [pc];
/* 000662 */ 				while (__t__ (__in__ (pc, self.number_within))) {
/* 000663 */ 					var pc = __getitem__ (__getitem__ (self.number_within, pc), 'reset_at');
/* 000664 */ 					(function () {
/* 000664 */ 						var __accu0__ = our_full_parents;
/* 000664 */ 						return __call__ (__accu0__.append, __accu0__, pc);
/* 000664 */ 					}) ();
/* 000664 */ 				}
/* 000664 */ 			}
/* 000666 */ 			(function () {
/* 000666 */ 				var __accu0__ = self;
/* 000666 */ 				return __call__ (__accu0__.set_render_doc_state, __accu0__, 'cnt-{}'.format (counter_name), __getitem__ (item_info, 'formatted_value'), __kwargtrans__ ({clear_self_upon_change: (__t__ (our_full_parents) ? (function () {
/* 000666 */ 					var __accu1__ = [];
/* 000669 */ 					var __iterable0__ = our_full_parents;
/* 000669 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000669 */ 						var pcntname = __getitem__ (__iterable0__, __index0__);
/* 000669 */ 						(function () {
/* 000669 */ 							var __accu2__ = __accu1__;
/* 000669 */ 							return __call__ (__accu2__.append, __accu2__, 'cnt-{}'.format (pcntname));
/* 000669 */ 						}) ();
/* 000669 */ 					}
/* 000669 */ 					return __accu1__;
/* 000669 */ 				}) () : null)}));
/* 000669 */ 			}) ();
/* 000675 */ 			// pass;
/* 000678 */ 			// pass;
/* 000682 */ 			return item_info;
/* 000682 */ 		});},
/* 000684 */ 		get get_formatted_counter_value () {return __get__ (this, function (self, counter_name) {
/* 000684 */ 			var kwargs = dict ();
/* 000684 */ 			if (arguments.length) {
/* 000684 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000684 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000684 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000684 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000684 */ 						switch (__attrib0__) {
/* 000684 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000684 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000684 */ 						}
/* 000684 */ 					}
/* 000684 */ 					delete kwargs.__kwargtrans__;
/* 000684 */ 				}
/* 000684 */ 			}
/* 000684 */ 			else {
/* 000684 */ 			}
/* 000688 */ 			var counter = __getitem__ (self.counters, counter_name);
/* 000689 */ 			if (__t__ (counter === null)) {
/* 000690 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid counter: {}'.format (counter_name));
/* 000690 */ 				__except0__.__cause__ = null;
/* 000690 */ 				throw __except0__;
/* 000690 */ 			}
/* 000691 */ 			return (function () {
/* 000691 */ 				var __accu0__ = counter;
/* 000691 */ 				return __call__ (__accu0__.get_formatted_counter_value, __accu0__, __kwargtrans__ (kwargs));
/* 000691 */ 			}) ();
/* 000691 */ 		});}
/* 000691 */ 	}),
/* 000695 */ 	get __init__ () {return __get__ (this, function (self, number_within) {
/* 000695 */ 		if (typeof number_within == 'undefined' || (number_within != null && number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000695 */ 			var number_within = null;
/* 000695 */ 		};
/* 000695 */ 		if (arguments.length) {
/* 000695 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000695 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000695 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000695 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000695 */ 					switch (__attrib0__) {
/* 000695 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 						case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000695 */ 					}
/* 000695 */ 				}
/* 000695 */ 			}
/* 000695 */ 		}
/* 000695 */ 		else {
/* 000695 */ 		}
/* 000696 */ 		__call__ (__call__ (__super__, null, FeatureNumbering, '__init__'), null, self);
/* 000697 */ 		self.number_within = __t__ (number_within) || dict ({});
/* 000697 */ 	});}
/* 000697 */ });
/* 000701 */ export var FeatureClass = FeatureNumbering;
/* 000006 */ 
//# sourceMappingURL=flm.feature.numbering.map