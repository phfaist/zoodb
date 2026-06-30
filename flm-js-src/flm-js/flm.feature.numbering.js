/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:24
/* 000015 */ var json = {};
/* 000015 */ var logging = {};
/* 000015 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000028 */ import * as counter from './flm.counter.js';
/* 000023 */ import {ValueWithSubNums} from './flm.counter.js';
/* 000021 */ import {Feature, FeatureRenderManagerBase} from './flm.feature._base.js';
/* 000019 */ import {Mapping} from './flm._typing_helpers.js';
/* 000016 */ import * as __module_logging__ from './logging.js';
/* 000016 */ __nest__ (logging, '', __module_logging__);
/* 000015 */ import * as __module_json__ from './json.js';
/* 000015 */ __nest__ (json, '', __module_json__);
/* 000015 */ export {counter, FeatureRenderManagerBase, Feature, Mapping, ValueWithSubNums};
/* 000001 */ var __name__ = 'flm.feature.numbering';
/* 000017 */ export var logger = (function () {
/* 000017 */ 	var __accu0__ = logging;
/* 000017 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000017 */ }) ();
/* 000035 */ export var Counter =  __class__ ('Counter', [object], {
/* 000035 */ 	__module__: __name__,
/* 000045 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, initial_value) {
/* 000045 */ 		if (typeof initial_value == 'undefined' || (initial_value != null && initial_value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000045 */ 			var initial_value = 0;
/* 000045 */ 		};
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'initial_value': var initial_value = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000053 */ 		self.formatter = counter_formatter;
/* 000054 */ 		self.initial_value = initial_value;
/* 000055 */ 		self.value = initial_value;
/* 000055 */ 	});},
/* 000057 */ 	get set_value () {return __get__ (this, function (self, value) {
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000058 */ 		self.value = value;
/* 000059 */ 		return self.value;
/* 000059 */ 	});},
/* 000061 */ 	get step () {return __get__ (this, function (self) {
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000062 */ 		self.value = __call__ (__iadd__, null, self.value, 1);
/* 000063 */ 		return self.value;
/* 000063 */ 	});},
/* 000065 */ 	get reset () {return __get__ (this, function (self) {
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		self.value = self.initial_value;
/* 000067 */ 		return self.value;
/* 000067 */ 	});},
/* 000069 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000069 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000069 */ 			var value = null;
/* 000069 */ 		};
/* 000069 */ 		var kwargs = dict ();
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 				delete kwargs.__kwargtrans__;
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000070 */ 		if (__t__ (value === null)) {
/* 000071 */ 			var value = self.value;
/* 000071 */ 		}
/* 000072 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000073 */ 		(function () {
/* 000073 */ 			var __accu0__ = kwargs2;
/* 000073 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000073 */ 		}) ();
/* 000074 */ 		return (function () {
/* 000074 */ 			var __accu0__ = self.formatter;
/* 000074 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000074 */ 		}) ();
/* 000074 */ 	});},
/* 000076 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
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
/* 000077 */ 		var val = (function () {
/* 000077 */ 			var __accu0__ = self;
/* 000077 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000077 */ 		}) ();
/* 000078 */ 		return tuple ([val, (function () {
/* 000078 */ 			var __accu0__ = self;
/* 000078 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000078 */ 		}) ()]);
/* 000078 */ 	});}
/* 000078 */ });
/* 000081 */ export var CounterAlias =  __class__ ('CounterAlias', [object], {
/* 000081 */ 	__module__: __name__,
/* 000090 */ 	get __init__ () {return __get__ (this, function (self, counter_formatter, alias_counter) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000100 */ 		self.formatter = counter_formatter;
/* 000101 */ 		self.alias_counter = alias_counter;
/* 000101 */ 	});},
/* 000104 */ 	get _get_value () {return __get__ (this, function (self) {
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		return self.alias_counter.value;
/* 000105 */ 	});},
/* 000107 */ 	get step () {return __get__ (this, function (self) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		return (function () {
/* 000108 */ 			var __accu0__ = self.alias_counter;
/* 000108 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000108 */ 		}) ();
/* 000108 */ 	});},
/* 000110 */ 	get reset () {return __get__ (this, function (self) {
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000111 */ 		return (function () {
/* 000111 */ 			var __accu0__ = self.alias_counter;
/* 000111 */ 			return __call__ (__accu0__.reset, __accu0__);
/* 000111 */ 		}) ();
/* 000111 */ 	});},
/* 000113 */ 	get format_flm () {return __get__ (this, function (self, value) {
/* 000113 */ 		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 			var value = null;
/* 000113 */ 		};
/* 000113 */ 		var kwargs = dict ();
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 				delete kwargs.__kwargtrans__;
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000114 */ 		if (__t__ (value === null)) {
/* 000115 */ 			var value = self.value;
/* 000115 */ 		}
/* 000116 */ 		var kwargs2 = dict ({'with_prefix': false});
/* 000117 */ 		(function () {
/* 000117 */ 			var __accu0__ = kwargs2;
/* 000117 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000117 */ 		}) ();
/* 000118 */ 		return (function () {
/* 000118 */ 			var __accu0__ = self.formatter;
/* 000118 */ 			return __call__ (__accu0__.format_flm, __accu0__, value, __kwargtrans__ (kwargs2));
/* 000118 */ 		}) ();
/* 000118 */ 	});},
/* 000120 */ 	get step_and_format_flm () {return __get__ (this, function (self) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		var val = (function () {
/* 000121 */ 			var __accu0__ = self;
/* 000121 */ 			return __call__ (__accu0__.step, __accu0__);
/* 000121 */ 		}) ();
/* 000122 */ 		return tuple ([val, (function () {
/* 000122 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.format_flm, __accu0__, val);
/* 000122 */ 		}) ()]);
/* 000122 */ 	});}
/* 000122 */ });
/* 000122 */ Object.defineProperty (CounterAlias, 'value', property.call (CounterAlias, CounterAlias._get_value));;
/* 000131 */ export var _CounterIface =  __class__ ('_CounterIface', [object], {
/* 000131 */ 	__module__: __name__,
/* 000132 */ 	get __init__ () {return __get__ (this, function (self, counter_name, simple_counter, numbering_render_manager) {
/* 000132 */ 		if (typeof numbering_render_manager == 'undefined' || (numbering_render_manager != null && numbering_render_manager.hasOwnProperty ("__kwargtrans__"))) {;
/* 000132 */ 			var numbering_render_manager = null;
/* 000132 */ 		};
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'simple_counter': var simple_counter = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'numbering_render_manager': var numbering_render_manager = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		self.counter_name = counter_name;
/* 000134 */ 		self.simple_counter = simple_counter;
/* 000135 */ 		self.formatter = simple_counter.formatter;
/* 000136 */ 		self.numbering_render_manager = numbering_render_manager;
/* 000136 */ 	});},
/* 000138 */ 	get register_item () {return __get__ (this, function (self, custom_label) {
/* 000138 */ 		if (typeof custom_label == 'undefined' || (custom_label != null && custom_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000138 */ 			var custom_label = null;
/* 000138 */ 		};
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'custom_label': var custom_label = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		if (__t__ (self.numbering_render_manager !== null)) {
/* 000140 */ 			return (function () {
/* 000140 */ 				var __accu0__ = self.numbering_render_manager;
/* 000140 */ 				return __call__ (__accu0__.register_item, __accu0__, self.counter_name, __kwargtrans__ ({custom_label: custom_label}));
/* 000140 */ 			}) ();
/* 000140 */ 		}
/* 000143 */ 		if (__t__ (custom_label !== null)) {
/* 000144 */ 			return dict ({'value': null, 'numprefix': null, 'formatted_value': custom_label});
/* 000144 */ 		}
/* 000149 */ 		var __left0__ = (function () {
/* 000149 */ 			var __accu0__ = self.simple_counter;
/* 000149 */ 			return __call__ (__accu0__.step_and_format_flm, __accu0__);
/* 000149 */ 		}) ();
/* 000149 */ 		var number = __left0__ [0];
/* 000149 */ 		var formatted_number = __left0__ [1];
/* 000151 */ 		return dict ({'value': __call__ (ValueWithSubNums, null, number), 'numprefix': null, 'formatted_value': formatted_number});
/* 000151 */ 	});}
/* 000151 */ });
/* 000157 */ export var get_document_render_counter = function (render_context, counter_name, counter_formatter, alias_counter, always_number_within) {
/* 000157 */ 	if (typeof alias_counter == 'undefined' || (alias_counter != null && alias_counter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000157 */ 		var alias_counter = null;
/* 000157 */ 	};
/* 000157 */ 	if (typeof always_number_within == 'undefined' || (always_number_within != null && always_number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000157 */ 		var always_number_within = null;
/* 000157 */ 	};
/* 000157 */ 	if (arguments.length) {
/* 000157 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 				switch (__attrib0__) {
/* 000157 */ 					case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					case 'always_number_within': var always_number_within = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 	}
/* 000157 */ 	else {
/* 000157 */ 	}
/* 000190 */ 	if (__t__ (!__t__ (((function () {
/* 000190 */ 		var __accu0__ = render_context;
/* 000190 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'numbering');
/* 000190 */ 	}) ())))) {
/* 000192 */ 		// pass;
/* 000198 */ 		if (__t__ (always_number_within !== null)) {
/* 000199 */ 			(function () {
/* 000199 */ 				var __accu0__ = logger;
/* 000199 */ 				return __call__ (__accu0__.error, __accu0__, "Requested always_number_within={} but 'numbering' feature is not supported; for counter_name={}.".format (always_number_within, counter_name));
/* 000199 */ 			}) ();
/* 000205 */ 			var __except0__ = __call__ (ValueError, null, "Counter ‘{}’ cannot be numbered within ‘{}’ without the 'numbering' feature enabled.".format (counter_name, (function () {
/* 000205 */ 				var __accu0__ = always_number_within;
/* 000205 */ 				return __call__ (__accu0__.py_get, __accu0__, 'reset_at', '???');
/* 000205 */ 			}) ()));
/* 000205 */ 			__except0__.__cause__ = null;
/* 000205 */ 			throw __except0__;
/* 000205 */ 		}
/* 000209 */ 		if (__t__ (alias_counter !== null)) {
/* 000212 */ 			return __call__ (_CounterIface, null, counter_name, __kwargtrans__ ({simple_counter: __call__ (CounterAlias, null, counter_formatter, alias_counter.simple_counter)}));
/* 000212 */ 		}
/* 000219 */ 		return __call__ (_CounterIface, null, counter_name, __kwargtrans__ ({simple_counter: __call__ (Counter, null, counter_formatter)}));
/* 000219 */ 	}
/* 000224 */ 	// pass;
/* 000230 */ 	var numbering_mgr = (function () {
/* 000230 */ 		var __accu0__ = render_context;
/* 000230 */ 		return __call__ (__accu0__.feature_render_manager, __accu0__, 'numbering');
/* 000230 */ 	}) ();
/* 000232 */ 	return (function () {
/* 000232 */ 		var __accu0__ = numbering_mgr;
/* 000232 */ 		return __call__ (__accu0__.register_counter, __accu0__, counter_name, counter_formatter, __kwargtrans__ ({alias_counter: alias_counter, always_number_within: always_number_within}));
/* 000232 */ 	}) ();
/* 000232 */ };
/* 000248 */ export var _DocCounterState =  __class__ ('_DocCounterState', [object], {
/* 000248 */ 	__module__: __name__,
/* 000249 */ 	get __init__ () {return __get__ (this, function (self, formatter, rdr_mgr, counter_name, base_use_doc_state_keys, numprefix_and_value_for_doc_state) {
/* 000249 */ 		if (arguments.length) {
/* 000249 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 					switch (__attrib0__) {
/* 000249 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'formatter': var formatter = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'rdr_mgr': var rdr_mgr = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'base_use_doc_state_keys': var base_use_doc_state_keys = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 						case 'numprefix_and_value_for_doc_state': var numprefix_and_value_for_doc_state = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 					}
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 		else {
/* 000249 */ 		}
/* 000253 */ 		self.formatter = formatter;
/* 000254 */ 		self.rdr_mgr = rdr_mgr;
/* 000255 */ 		self.counter_name = counter_name;
/* 000257 */ 		self.counter_by_filtered_doc_states = dict ({});
/* 000260 */ 		self.cur_filtered_doc_state = null;
/* 000261 */ 		self.cur_counter_state = null;
/* 000264 */ 		self.base_use_doc_state_keys = __call__ (list, null, __t__ (base_use_doc_state_keys) || []);
/* 000267 */ 		self.use_doc_state_keys = null;
/* 000269 */ 		self.numprefix_and_value_for_doc_state = numprefix_and_value_for_doc_state;
/* 000269 */ 	});},
/* 000271 */ 	get __repr__ () {return __get__ (this, function (self) {
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
/* 000272 */ 		var s = '_DocCounterState<‘{}’ {}'.format (self.counter_name, __call__ (repr, null, self.cur_counter_state));
/* 000273 */ 		if (__t__ (self.use_doc_state_keys !== null)) {
/* 000274 */ 			if (__t__ (__call__ (len, null, self.use_doc_state_keys))) {
/* 000275 */ 				var s = __call__ (__iadd__, null, s, __add__ (__add__ (' ⟨'.format (), (function () {
/* 000275 */ 					var __accu0__ = ', ';
/* 000275 */ 					return __call__ (__accu0__.join, __accu0__, self.use_doc_state_keys);
/* 000275 */ 				}) ()), '⟩'));
/* 000275 */ 			}
/* 000275 */ 		}
/* 000276 */ 		else if (__t__ (__call__ (len, null, self.base_use_doc_state_keys))) {
/* 000277 */ 			var s = __call__ (__iadd__, null, s, __add__ (__add__ (' ⟨'.format (), (function () {
/* 000277 */ 				var __accu0__ = ', ';
/* 000277 */ 				return __call__ (__accu0__.join, __accu0__, self.base_use_doc_state_keys);
/* 000277 */ 			}) ()), '⟩'));
/* 000277 */ 		}
/* 000278 */ 		var s = __call__ (__iadd__, null, s, '>'.format ());
/* 000279 */ 		return s;
/* 000279 */ 	});},
/* 000281 */ 	get get_filtered_doc_state () {return __get__ (this, function (self) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000286 */ 		var rs = self.rdr_mgr.render_doc_states;
/* 000287 */ 		return (function () {
/* 000287 */ 			var __accu0__ = json;
/* 000287 */ 			return __call__ (__accu0__.dumps, __accu0__, (function () {
/* 000287 */ 				var __accu1__ = [];
/* 000287 */ 				var __iterable0__ = self.use_doc_state_keys;
/* 000287 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000287 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000287 */ 					(function () {
/* 000287 */ 						var __accu2__ = __accu1__;
/* 000287 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000287 */ 							var __accu3__ = rs;
/* 000287 */ 							return __call__ (__accu3__.py_get, __accu3__, k, null);
/* 000287 */ 						}) ());
/* 000287 */ 					}) ();
/* 000287 */ 				}
/* 000287 */ 				return __accu1__;
/* 000287 */ 			}) ());
/* 000287 */ 		}) ();
/* 000287 */ 	});},
/* 000289 */ 	get register_item () {return __get__ (this, function (self) {
/* 000289 */ 		var kwargs = dict ();
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 				delete kwargs.__kwargtrans__;
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		return (function () {
/* 000290 */ 			var __accu0__ = self.rdr_mgr;
/* 000290 */ 			return __call__ (__accu0__.register_item, __accu0__, self.counter_name, __kwargtrans__ (kwargs));
/* 000290 */ 		}) ();
/* 000290 */ 	});},
/* 000292 */ 	get _impl_register_item () {return __get__ (this, function (self) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000294 */ 		(function () {
/* 000294 */ 			var __accu0__ = self;
/* 000294 */ 			return __call__ (__accu0__._update_state_from_doc_state, __accu0__);
/* 000294 */ 		}) ();
/* 000296 */ 		__setitem__ (self.cur_counter_state, 'value', (function () {
/* 000296 */ 			var __accu0__ = __getitem__ (self.cur_counter_state, 'value');
/* 000296 */ 			return __call__ (__accu0__.incremented, __accu0__);
/* 000296 */ 		}) ());
/* 000298 */ 		// pass;
/* 000305 */ 		var cur_value = __getitem__ (self.cur_counter_state, 'value');
/* 000306 */ 		var cur_numprefix = __getitem__ (self.cur_counter_state, 'numprefix');
/* 000307 */ 		var formatted_value = (function () {
/* 000307 */ 			var __accu0__ = self.formatter;
/* 000307 */ 			return __call__ (__accu0__.format_flm, __accu0__, cur_value, __kwargtrans__ ({numprefix: cur_numprefix, with_prefix: false}));
/* 000307 */ 		}) ();
/* 000314 */ 		return dict ({'value': cur_value, 'number': (function () {
/* 000314 */ 			var __accu0__ = cur_value;
/* 000314 */ 			return __call__ (__accu0__.get_num, __accu0__);
/* 000315 */ 		}) (), 'subnums': (function () {
/* 000315 */ 			var __accu0__ = cur_value;
/* 000315 */ 			return __call__ (__accu0__.get_subnums, __accu0__);
/* 000315 */ 		}) (), 'numprefix': cur_numprefix, 'formatted_value': formatted_value});
/* 000315 */ 	});},
/* 000320 */ 	get _ensure_use_doc_state_keys () {return __get__ (this, function (self) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000321 */ 		if (__t__ (self.use_doc_state_keys !== null)) {
/* 000322 */ 			return ;
/* 000322 */ 		}
/* 000324 */ 		self.use_doc_state_keys = (function () {
/* 000324 */ 			var __accu0__ = self.rdr_mgr;
/* 000324 */ 			return __call__ (__accu0__.compute_use_doc_state_keys, __accu0__, self.counter_name);
/* 000324 */ 		}) ();
/* 000326 */ 		// pass;
/* 000326 */ 	});},
/* 000331 */ 	get _update_state_from_doc_state () {return __get__ (this, function (self) {
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000332 */ 		(function () {
/* 000332 */ 			var __accu0__ = self;
/* 000332 */ 			return __call__ (__accu0__._ensure_use_doc_state_keys, __accu0__);
/* 000332 */ 		}) ();
/* 000334 */ 		var new_filtered_doc_state = (function () {
/* 000334 */ 			var __accu0__ = self;
/* 000334 */ 			return __call__ (__accu0__.get_filtered_doc_state, __accu0__);
/* 000334 */ 		}) ();
/* 000335 */ 		if (__t__ (__eq__ (new_filtered_doc_state, self.cur_filtered_doc_state))) {
/* 000338 */ 			// pass;
/* 000338 */ 		}
/* 000339 */ 		else if (__t__ (__in__ (new_filtered_doc_state, self.counter_by_filtered_doc_states))) {
/* 000343 */ 			self.cur_filtered_doc_state = new_filtered_doc_state;
/* 000344 */ 			self.cur_counter_state = __getitem__ (self.counter_by_filtered_doc_states, new_filtered_doc_state);
/* 000345 */ 			// pass;
/* 000345 */ 		}
/* 000346 */ 		else {
/* 000358 */ 			self.cur_filtered_doc_state = new_filtered_doc_state;
/* 000360 */ 			if (__t__ (self.numprefix_and_value_for_doc_state)) {
/* 000361 */ 				var __left0__ = (function () {
/* 000361 */ 					var __accu0__ = self.numprefix_and_value_for_doc_state;
/* 000361 */ 					return __call__ (__accu0__.compute, __accu0__, self.rdr_mgr.render_doc_states);
/* 000361 */ 				}) ();
/* 000361 */ 				var cur_numprefix = __left0__ [0];
/* 000361 */ 				var cur_value = __left0__ [1];
/* 000364 */ 				var cur_value = __call__ (ValueWithSubNums, null, cur_value);
/* 000364 */ 			}
/* 000365 */ 			else {
/* 000366 */ 				var cur_numprefix = null;
/* 000367 */ 				var cur_value = __call__ (ValueWithSubNums, null, 0);
/* 000367 */ 			}
/* 000369 */ 			var new_counter_state = dict ({'value': cur_value, 'numprefix': cur_numprefix});
/* 000373 */ 			__setitem__ (self.counter_by_filtered_doc_states, new_filtered_doc_state, new_counter_state);
/* 000374 */ 			self.cur_counter_state = new_counter_state;
/* 000376 */ 			// pass;
/* 000376 */ 		}
/* 000376 */ 	});},
/* 000385 */ 	get _get_cur_counter_state () {return __get__ (this, function (self) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000389 */ 		(function () {
/* 000389 */ 			var __accu0__ = self;
/* 000389 */ 			return __call__ (__accu0__._update_state_from_doc_state, __accu0__);
/* 000389 */ 		}) ();
/* 000390 */ 		return self.cur_counter_state;
/* 000390 */ 	});},
/* 000392 */ 	get get_formatted_counter_value () {return __get__ (this, function (self) {
/* 000392 */ 		var kwargs = dict ();
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 				delete kwargs.__kwargtrans__;
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000396 */ 		var cur_counter_state = (function () {
/* 000396 */ 			var __accu0__ = self;
/* 000396 */ 			return __call__ (__accu0__._get_cur_counter_state, __accu0__);
/* 000396 */ 		}) ();
/* 000397 */ 		if (__t__ (__t__ (cur_counter_state === null) || !__t__ ((__getitem__ (cur_counter_state, 'value'))))) {
/* 000398 */ 			(function () {
/* 000398 */ 				var __accu0__ = logger;
/* 000398 */ 				return __call__ (__accu0__.warning, __accu0__, "Requested counter ‘{}’'s value but none was set.".format (self.counter_name));
/* 000398 */ 			}) ();
/* 000401 */ 			return '';
/* 000401 */ 		}
/* 000402 */ 		return (function () {
/* 000402 */ 			var __accu0__ = self.formatter;
/* 000403 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({value: (function () {
/* 000403 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000403 */ 				return __call__ (__accu1__.get_num, __accu1__);
/* 000404 */ 			}) (), subnums: (function () {
/* 000404 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000404 */ 				return __call__ (__accu1__.get_subnums, __accu1__);
/* 000404 */ 			}) (), numprefix: __getitem__ (cur_counter_state, 'numprefix')}, kwargs)));
/* 000404 */ 		}) ();
/* 000404 */ 	});}
/* 000404 */ });
/* 000410 */ export var _DocCounterStateAliasCounter =  __class__ ('_DocCounterStateAliasCounter', [object], {
/* 000410 */ 	__module__: __name__,
/* 000411 */ 	get __init__ () {return __get__ (this, function (self, alias_counter, formatter, counter_name) {
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'formatter': var formatter = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		__call__ (__call__ (__super__, null, _DocCounterStateAliasCounter, '__init__'), null, self);
/* 000413 */ 		self.alias_counter = alias_counter;
/* 000414 */ 		self.counter_name = counter_name;
/* 000415 */ 		self.formatter = formatter;
/* 000415 */ 	});},
/* 000417 */ 	get register_item () {return __get__ (this, function (self) {
/* 000417 */ 		var kwargs = dict ();
/* 000417 */ 		if (arguments.length) {
/* 000417 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000417 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000417 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000417 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000417 */ 					switch (__attrib0__) {
/* 000417 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000417 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000417 */ 					}
/* 000417 */ 				}
/* 000417 */ 				delete kwargs.__kwargtrans__;
/* 000417 */ 			}
/* 000417 */ 		}
/* 000417 */ 		else {
/* 000417 */ 		}
/* 000418 */ 		var count_info = (function () {
/* 000418 */ 			var __accu0__ = self.alias_counter;
/* 000418 */ 			return __call__ (__accu0__.register_item, __accu0__, __kwargtrans__ (kwargs));
/* 000418 */ 		}) ();
/* 000419 */ 		var formatted_value = (function () {
/* 000419 */ 			var __accu0__ = self.formatter;
/* 000419 */ 			return __call__ (__accu0__.format_flm, __accu0__, __getitem__ (count_info, 'value'), __kwargtrans__ ({numprefix: __getitem__ (count_info, 'numprefix'), with_prefix: false}));
/* 000419 */ 		}) ();
/* 000424 */ 		__setitem__ (count_info, 'formatted_value', formatted_value);
/* 000425 */ 		// pass;
/* 000432 */ 		return count_info;
/* 000432 */ 	});},
/* 000434 */ 	get get_formatted_counter_value () {return __get__ (this, function (self) {
/* 000434 */ 		var kwargs = dict ();
/* 000434 */ 		if (arguments.length) {
/* 000434 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000434 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000434 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000434 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000434 */ 					switch (__attrib0__) {
/* 000434 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000434 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000434 */ 					}
/* 000434 */ 				}
/* 000434 */ 				delete kwargs.__kwargtrans__;
/* 000434 */ 			}
/* 000434 */ 		}
/* 000434 */ 		else {
/* 000434 */ 		}
/* 000438 */ 		var cur_counter_state = (function () {
/* 000438 */ 			var __accu0__ = self.alias_counter;
/* 000438 */ 			return __call__ (__accu0__._get_cur_counter_state, __accu0__);
/* 000438 */ 		}) ();
/* 000439 */ 		return (function () {
/* 000439 */ 			var __accu0__ = self.formatter;
/* 000440 */ 			return __call__ (__accu0__.format_flm, __accu0__, __kwargtrans__ (__mergekwargtrans__ ({value: (function () {
/* 000440 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000440 */ 				return __call__ (__accu1__.get_num, __accu1__);
/* 000441 */ 			}) (), subnums: (function () {
/* 000441 */ 				var __accu1__ = __getitem__ (cur_counter_state, 'value');
/* 000441 */ 				return __call__ (__accu1__.get_subnums, __accu1__);
/* 000441 */ 			}) (), numprefix: __getitem__ (cur_counter_state, 'numprefix')}, kwargs)));
/* 000441 */ 		}) ();
/* 000441 */ 	});}
/* 000441 */ });
/* 000449 */ export var _NumprefixAndValueForDocStateCompute =  __class__ ('_NumprefixAndValueForDocStateCompute', [object], {
/* 000449 */ 	__module__: __name__,
/* 000450 */ 	get __init__ () {return __get__ (this, function (self, numprefix_for_doc_state_fn, counter_name, counters, number_within, value_for_doc_state_fn) {
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'numprefix_for_doc_state_fn': var numprefix_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'counters': var counters = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'value_for_doc_state_fn': var value_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000452 */ 		self.numprefix_for_doc_state_fn = numprefix_for_doc_state_fn;
/* 000453 */ 		self.counter_name = counter_name;
/* 000454 */ 		self.counters = counters;
/* 000455 */ 		self.number_within = number_within;
/* 000456 */ 		self.value_for_doc_state_fn = value_for_doc_state_fn;
/* 000456 */ 	});},
/* 000458 */ 	get compute () {return __get__ (this, function (self, rs) {
/* 000458 */ 		if (arguments.length) {
/* 000458 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000458 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000458 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000458 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000458 */ 					switch (__attrib0__) {
/* 000458 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000458 */ 						case 'rs': var rs = __allkwargs0__ [__attrib0__]; break;
/* 000458 */ 					}
/* 000458 */ 				}
/* 000458 */ 			}
/* 000458 */ 		}
/* 000458 */ 		else {
/* 000458 */ 		}
/* 000459 */ 		if (__t__ (self.numprefix_for_doc_state_fn !== null)) {
/* 000460 */ 			var numprefix = (function () {
/* 000460 */ 				var __accu0__ = self;
/* 000460 */ 				return __call__ (__accu0__.numprefix_for_doc_state_fn, __accu0__, rs, self);
/* 000460 */ 			}) ();
/* 000460 */ 		}
/* 000461 */ 		else if (__t__ (__in__ (self.counter_name, self.number_within))) {
/* 000462 */ 			var numprefix_template = __getitem__ (__getitem__ (self.number_within, self.counter_name), 'numprefix');
/* 000463 */ 			// pass;
/* 000470 */ 			if (__t__ (numprefix_template === null)) {
/* 000471 */ 				var numprefix_template = '';
/* 000471 */ 			}
/* 000472 */ 			if (__t__ (__call__ (callable, null, numprefix_template))) {
/* 000473 */ 				var numprefix = __call__ (numprefix_template, null, __kwargtrans__ ({counters: self.counters}));
/* 000473 */ 			}
/* 000475 */ 			else {
/* 000477 */ 				try {
/* 000478 */ 					var numprefix = (function () {
/* 000478 */ 						var __accu0__ = counter;
/* 000478 */ 						return __call__ (__accu0__._replace_dollar_template_use_callable, __accu0__, numprefix_template, self._get_counter_value);
/* 000478 */ 					}) ();
/* 000478 */ 				}
/* 000478 */ 				catch (__except0__) {
/* 000478 */ 					if (isinstance (__except0__, KeyError)) {
/* 000478 */ 						var e = __except0__;
/* 000483 */ 						var __except1__ = __call__ (ValueError, null, 'In numprefix_template of number_within for ‘{}’: Cannot find value for counter: {}'.format (self.counter_name, e));
/* 000483 */ 						__except1__.__cause__ = null;
/* 000483 */ 						throw __except1__;
/* 000483 */ 					}
/* 000483 */ 					else {
/* 000483 */ 						throw __except0__;
/* 000483 */ 					}
/* 000483 */ 				}
/* 000483 */ 			}
/* 000483 */ 		}
/* 000486 */ 		else {
/* 000488 */ 			var numprefix = null;
/* 000488 */ 		}
/* 000490 */ 		if (__t__ (self.value_for_doc_state_fn !== null)) {
/* 000491 */ 			var value = (function () {
/* 000491 */ 				var __accu0__ = self;
/* 000491 */ 				return __call__ (__accu0__.value_for_doc_state_fn, __accu0__, rs, self);
/* 000491 */ 			}) ();
/* 000491 */ 		}
/* 000492 */ 		else {
/* 000493 */ 			var value = 0;
/* 000493 */ 		}
/* 000495 */ 		return tuple ([numprefix, value]);
/* 000495 */ 	});},
/* 000497 */ 	get _get_counter_value () {return __get__ (this, function (self, dcname) {
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'dcname': var dcname = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000498 */ 		var dcstate = __getitem__ (self.counters, dcname);
/* 000499 */ 		return (function () {
/* 000499 */ 			var __accu0__ = dcstate;
/* 000499 */ 			return __call__ (__accu0__.get_formatted_counter_value, __accu0__, __kwargtrans__ ({with_prefix: false}));
/* 000499 */ 		}) ();
/* 000499 */ 	});}
/* 000499 */ });
/* 000515 */ export var FeatureNumbering =  __class__ ('FeatureNumbering', [Feature], {
/* 000515 */ 	__module__: __name__,
/* 000523 */ 	feature_name: 'numbering',
/* 000526 */ 	feature_title: 'Numbering for figures, sections, equations, theorems, and more',
/* 000526 */ 	RenderManager: __class__ ('RenderManager', [FeatureRenderManagerBase], {
/* 000526 */ 		__module__: __name__,
/* 000528 */ 		get initialize () {return __get__ (this, function (self, number_within) {
/* 000528 */ 			if (typeof number_within == 'undefined' || (number_within != null && number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000528 */ 				var number_within = null;
/* 000528 */ 			};
/* 000528 */ 			if (arguments.length) {
/* 000528 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 						switch (__attrib0__) {
/* 000528 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 							case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						}
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 			else {
/* 000528 */ 			}
/* 000529 */ 			self.counters = dict ({});
/* 000531 */ 			self.render_doc_states = __call__ (dict, null);
/* 000533 */ 			self.render_doc_states_clear_dependants = __call__ (dict, null);
/* 000538 */ 			if (__t__ (number_within !== null)) {
/* 000539 */ 				self.number_within = number_within;
/* 000539 */ 			}
/* 000540 */ 			else {
/* 000541 */ 				self.number_within = self.feature.number_within;
/* 000541 */ 			}
/* 000543 */ 			if (__t__ (self.number_within !== null)) {
/* 000544 */ 				var __iterable0__ = (function () {
/* 000544 */ 					var __accu0__ = self.number_within;
/* 000544 */ 					return __call__ (__accu0__.py_items, __accu0__);
/* 000544 */ 				}) ();
/* 000544 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000544 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000544 */ 					var k = __left0__ [0];
/* 000544 */ 					var v = __left0__ [1];
/* 000545 */ 					if (__t__ (!__in__ ('reset_at', v))) {
/* 000550 */ 						var __except0__ = __call__ (ValueError, null, __add__ ("numering feature config: number_within should be a dict of the type dict(equation=dict(reset_at='section', numprefix='${{subsection}}.'), ...).' .  Got ", __call__ (repr, null, self.number_within)));
/* 000550 */ 						__except0__.__cause__ = null;
/* 000550 */ 						throw __except0__;
/* 000550 */ 					}
/* 000550 */ 				}
/* 000550 */ 			}
/* 000562 */ 			// pass;
/* 000562 */ 		});},
/* 000567 */ 		get register_counter () {return __get__ (this, function (self, counter_name, counter_formatter) {
/* 000567 */ 			var alias_counter = null;
/* 000567 */ 			var always_number_within = null;
/* 000567 */ 			var use_doc_state_keys = null;
/* 000567 */ 			var numprefix_for_doc_state_fn = null;
/* 000567 */ 			var value_for_doc_state_fn = null;
/* 000567 */ 			if (arguments.length) {
/* 000567 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000567 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000567 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000567 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000567 */ 						switch (__attrib0__) {
/* 000567 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'alias_counter': var alias_counter = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'always_number_within': var always_number_within = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'use_doc_state_keys': var use_doc_state_keys = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'numprefix_for_doc_state_fn': var numprefix_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 							case 'value_for_doc_state_fn': var value_for_doc_state_fn = __allkwargs0__ [__attrib0__]; break;
/* 000567 */ 						}
/* 000567 */ 					}
/* 000567 */ 				}
/* 000567 */ 			}
/* 000567 */ 			else {
/* 000567 */ 			}
/* 000580 */ 			if (__t__ (!__t__ ((counter_name)))) {
/* 000581 */ 				var __except0__ = __call__ (ValueError, null, 'register_counter(), please specify a counter_name'.format ());
/* 000581 */ 				__except0__.__cause__ = null;
/* 000581 */ 				throw __except0__;
/* 000581 */ 			}
/* 000583 */ 			if (__t__ (__in__ (counter_name, self.counters))) {
/* 000584 */ 				var __except0__ = __call__ (ValueError, null, 'Counter ‘{}’ already registered!'.format (counter_name));
/* 000584 */ 				__except0__.__cause__ = null;
/* 000584 */ 				throw __except0__;
/* 000584 */ 			}
/* 000586 */ 			if (__t__ (always_number_within !== null)) {
/* 000587 */ 				if (__t__ (alias_counter)) {
/* 000588 */ 					var __except0__ = __call__ (ValueError, null, __add__ ('register_counter(): Cannot specify both alias_counter and always_number_within, got ', 'alias_counter={} and always_number_within={}'.format (alias_counter, always_number_within)));
/* 000588 */ 					__except0__.__cause__ = null;
/* 000588 */ 					throw __except0__;
/* 000588 */ 				}
/* 000593 */ 				if (__t__ (__in__ (counter_name, self.number_within))) {
/* 000594 */ 					__setitem__ (__getitem__ (self.number_within, counter_name), 'reset_at', __getitem__ (always_number_within, 'reset_at'));
/* 000594 */ 				}
/* 000596 */ 				else {
/* 000597 */ 					__setitem__ (self.number_within, counter_name, dict ({'reset_at': __getitem__ (always_number_within, 'reset_at'), 'numprefix': __getitem__ (always_number_within, 'numprefix')}));
/* 000597 */ 				}
/* 000601 */ 				// pass;
/* 000601 */ 			}
/* 000609 */ 			if (__t__ (alias_counter)) {
/* 000612 */ 				__setitem__ (self.counters, counter_name, __call__ (_DocCounterStateAliasCounter, null, __kwargtrans__ ({alias_counter: alias_counter, formatter: counter_formatter, counter_name: counter_name})));
/* 000617 */ 				// pass;
/* 000621 */ 				return __getitem__ (self.counters, counter_name);
/* 000621 */ 			}
/* 000628 */ 			var _numprefix_and_value_for_doc_state = __call__ (_NumprefixAndValueForDocStateCompute, null, __kwargtrans__ ({numprefix_for_doc_state_fn: numprefix_for_doc_state_fn, counter_name: counter_name, counters: self.counters, number_within: self.number_within, value_for_doc_state_fn: value_for_doc_state_fn}));
/* 000636 */ 			var doc_counter_state = __call__ (_DocCounterState, null, __kwargtrans__ ({formatter: counter_formatter, rdr_mgr: self, counter_name: counter_name, base_use_doc_state_keys: use_doc_state_keys, numprefix_and_value_for_doc_state: _numprefix_and_value_for_doc_state}));
/* 000643 */ 			__setitem__ (self.counters, counter_name, doc_counter_state);
/* 000645 */ 			// pass;
/* 000649 */ 			return doc_counter_state;
/* 000649 */ 		});},
/* 000651 */ 		get _number_within_parent_counters () {return __get__ (this, function (self, c) {
/* 000651 */ 			if (arguments.length) {
/* 000651 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000651 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000651 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000651 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000651 */ 						switch (__attrib0__) {
/* 000651 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
/* 000651 */ 						}
/* 000651 */ 					}
/* 000651 */ 				}
/* 000651 */ 			}
/* 000651 */ 			else {
/* 000651 */ 			}
/* 000652 */ 			if (__t__ (!__in__ (c, self.number_within))) {
/* 000653 */ 				return [];
/* 000653 */ 			}
/* 000655 */ 			var pc = __getitem__ (__getitem__ (self.number_within, c), 'reset_at');
/* 000656 */ 			var parent_counters = [pc];
/* 000657 */ 			while (__t__ (__in__ (pc, self.number_within))) {
/* 000658 */ 				var pc = __getitem__ (__getitem__ (self.number_within, pc), 'reset_at');
/* 000659 */ 				(function () {
/* 000659 */ 					var __accu0__ = parent_counters;
/* 000659 */ 					return __call__ (__accu0__.append, __accu0__, pc);
/* 000659 */ 				}) ();
/* 000659 */ 			}
/* 000660 */ 			return parent_counters;
/* 000660 */ 		});},
/* 000662 */ 		get compute_use_doc_state_keys () {return __get__ (this, function (self, counter_name) {
/* 000662 */ 			if (arguments.length) {
/* 000662 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000662 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000662 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000662 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000662 */ 						switch (__attrib0__) {
/* 000662 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000662 */ 						}
/* 000662 */ 					}
/* 000662 */ 				}
/* 000662 */ 			}
/* 000662 */ 			else {
/* 000662 */ 			}
/* 000664 */ 			var use_doc_state_keys = __call__ (list, null, __getitem__ (self.counters, counter_name).base_use_doc_state_keys);
/* 000666 */ 			var __iterable0__ = (function () {
/* 000666 */ 				var __accu0__ = self;
/* 000666 */ 				return __call__ (__accu0__._number_within_parent_counters, __accu0__, counter_name);
/* 000666 */ 			}) ();
/* 000666 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000666 */ 				var parent_counter = __getitem__ (__iterable0__, __index0__);
/* 000667 */ 				(function () {
/* 000667 */ 					var __accu0__ = use_doc_state_keys;
/* 000667 */ 					return __call__ (__accu0__.append, __accu0__, 'cnt-{}'.format (parent_counter));
/* 000667 */ 				}) ();
/* 000667 */ 			}
/* 000669 */ 			return use_doc_state_keys;
/* 000669 */ 		});},
/* 000671 */ 		get set_render_doc_state () {return __get__ (this, function (self, state_type, state_value, clear_self_upon_change) {
/* 000671 */ 			if (typeof clear_self_upon_change == 'undefined' || (clear_self_upon_change != null && clear_self_upon_change.hasOwnProperty ("__kwargtrans__"))) {;
/* 000671 */ 				var clear_self_upon_change = null;
/* 000671 */ 			};
/* 000671 */ 			if (arguments.length) {
/* 000671 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000671 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000671 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000671 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000671 */ 						switch (__attrib0__) {
/* 000671 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 							case 'state_type': var state_type = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 							case 'state_value': var state_value = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 							case 'clear_self_upon_change': var clear_self_upon_change = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						}
/* 000671 */ 					}
/* 000671 */ 				}
/* 000671 */ 			}
/* 000671 */ 			else {
/* 000671 */ 			}
/* 000674 */ 			// pass;
/* 000678 */ 			__setitem__ (self.render_doc_states, state_type, state_value);
/* 000680 */ 			if (__t__ (__in__ (state_type, self.render_doc_states_clear_dependants))) {
/* 000681 */ 				var __iterable0__ = __getitem__ (self.render_doc_states_clear_dependants, state_type);
/* 000681 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000681 */ 					var dep = __getitem__ (__iterable0__, __index0__);
/* 000682 */ 					// pass;
/* 000685 */ 					(function () {
/* 000685 */ 						var __accu0__ = self;
/* 000685 */ 						return __call__ (__accu0__.set_render_doc_state, __accu0__, dep, null);
/* 000685 */ 					}) ();
/* 000685 */ 				}
/* 000685 */ 			}
/* 000690 */ 			if (__t__ (clear_self_upon_change)) {
/* 000691 */ 				var __iterable0__ = clear_self_upon_change;
/* 000691 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000691 */ 					var pdep = __getitem__ (__iterable0__, __index0__);
/* 000692 */ 					if (__t__ (!__in__ (pdep, self.render_doc_states_clear_dependants))) {
/* 000693 */ 						__setitem__ (self.render_doc_states_clear_dependants, pdep, __call__ (set, null));
/* 000693 */ 					}
/* 000694 */ 					(function () {
/* 000694 */ 						var __accu0__ = __getitem__ (self.render_doc_states_clear_dependants, pdep);
/* 000694 */ 						return __call__ (__accu0__.add, __accu0__, state_type);
/* 000694 */ 					}) ();
/* 000694 */ 				}
/* 000696 */ 				// pass;
/* 000696 */ 			}
/* 000696 */ 		});},
/* 000703 */ 		get clear_render_doc_state () {return __get__ (this, function (self, state_type) {
/* 000703 */ 			if (arguments.length) {
/* 000703 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000703 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000703 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000703 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000703 */ 						switch (__attrib0__) {
/* 000703 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000703 */ 							case 'state_type': var state_type = __allkwargs0__ [__attrib0__]; break;
/* 000703 */ 						}
/* 000703 */ 					}
/* 000703 */ 				}
/* 000703 */ 			}
/* 000703 */ 			else {
/* 000703 */ 			}
/* 000704 */ 			// pass;
/* 000704 */ 			delete __getitem__ (self.render_doc_states, state_type);
/* 000709 */ 			if (__t__ (__in__ (state_type, self.render_doc_states_clear_dependants))) {
/* 000710 */ 				var __iterable0__ = __getitem__ (self.render_doc_states_clear_dependants, state_type);
/* 000710 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000710 */ 					var dep = __getitem__ (__iterable0__, __index0__);
/* 000711 */ 					// pass;
/* 000714 */ 					(function () {
/* 000714 */ 						var __accu0__ = self;
/* 000714 */ 						return __call__ (__accu0__.set_render_doc_state, __accu0__, dep, null);
/* 000714 */ 					}) ();
/* 000714 */ 				}
/* 000714 */ 			}
/* 000714 */ 		});},
/* 000719 */ 		get register_item () {return __get__ (this, function (self, counter_name, custom_label) {
/* 000719 */ 			if (typeof custom_label == 'undefined' || (custom_label != null && custom_label.hasOwnProperty ("__kwargtrans__"))) {;
/* 000719 */ 				var custom_label = null;
/* 000719 */ 			};
/* 000719 */ 			if (arguments.length) {
/* 000719 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000719 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000719 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000719 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000719 */ 						switch (__attrib0__) {
/* 000719 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 							case 'custom_label': var custom_label = __allkwargs0__ [__attrib0__]; break;
/* 000719 */ 						}
/* 000719 */ 					}
/* 000719 */ 				}
/* 000719 */ 			}
/* 000719 */ 			else {
/* 000719 */ 			}
/* 000721 */ 			if (__t__ (custom_label !== null)) {
/* 000722 */ 				var item_info = dict ({'value': null, 'number': null, 'subnums': null, 'numprefix': null, 'formatted_value': custom_label});
/* 000722 */ 			}
/* 000728 */ 			else {
/* 000730 */ 				var item_info = (function () {
/* 000730 */ 					var __accu0__ = __getitem__ (self.counters, counter_name);
/* 000730 */ 					return __call__ (__accu0__._impl_register_item, __accu0__);
/* 000730 */ 				}) ();
/* 000730 */ 			}
/* 000734 */ 			var our_full_parents = null;
/* 000735 */ 			if (__t__ (__in__ (counter_name, self.number_within))) {
/* 000736 */ 				var pc = __getitem__ (__getitem__ (self.number_within, counter_name), 'reset_at');
/* 000737 */ 				var our_full_parents = [pc];
/* 000738 */ 				while (__t__ (__in__ (pc, self.number_within))) {
/* 000739 */ 					var pc = __getitem__ (__getitem__ (self.number_within, pc), 'reset_at');
/* 000740 */ 					(function () {
/* 000740 */ 						var __accu0__ = our_full_parents;
/* 000740 */ 						return __call__ (__accu0__.append, __accu0__, pc);
/* 000740 */ 					}) ();
/* 000740 */ 				}
/* 000740 */ 			}
/* 000742 */ 			(function () {
/* 000742 */ 				var __accu0__ = self;
/* 000742 */ 				return __call__ (__accu0__.set_render_doc_state, __accu0__, 'cnt-{}'.format (counter_name), __getitem__ (item_info, 'formatted_value'), __kwargtrans__ ({clear_self_upon_change: (__t__ (our_full_parents) ? (function () {
/* 000742 */ 					var __accu1__ = [];
/* 000745 */ 					var __iterable0__ = our_full_parents;
/* 000745 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000745 */ 						var pcntname = __getitem__ (__iterable0__, __index0__);
/* 000745 */ 						(function () {
/* 000745 */ 							var __accu2__ = __accu1__;
/* 000745 */ 							return __call__ (__accu2__.append, __accu2__, 'cnt-{}'.format (pcntname));
/* 000745 */ 						}) ();
/* 000745 */ 					}
/* 000745 */ 					return __accu1__;
/* 000745 */ 				}) () : null)}));
/* 000745 */ 			}) ();
/* 000751 */ 			// pass;
/* 000754 */ 			// pass;
/* 000758 */ 			return item_info;
/* 000758 */ 		});},
/* 000760 */ 		get get_formatted_counter_value () {return __get__ (this, function (self, counter_name) {
/* 000760 */ 			var kwargs = dict ();
/* 000760 */ 			if (arguments.length) {
/* 000760 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000760 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000760 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000760 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000760 */ 						switch (__attrib0__) {
/* 000760 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 							case 'counter_name': var counter_name = __allkwargs0__ [__attrib0__]; break;
/* 000760 */ 							default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000760 */ 						}
/* 000760 */ 					}
/* 000760 */ 					delete kwargs.__kwargtrans__;
/* 000760 */ 				}
/* 000760 */ 			}
/* 000760 */ 			else {
/* 000760 */ 			}
/* 000764 */ 			var counter = __getitem__ (self.counters, counter_name);
/* 000765 */ 			if (__t__ (counter === null)) {
/* 000766 */ 				var __except0__ = __call__ (ValueError, null, 'Invalid counter: {}'.format (counter_name));
/* 000766 */ 				__except0__.__cause__ = null;
/* 000766 */ 				throw __except0__;
/* 000766 */ 			}
/* 000767 */ 			return (function () {
/* 000767 */ 				var __accu0__ = counter;
/* 000767 */ 				return __call__ (__accu0__.get_formatted_counter_value, __accu0__, __kwargtrans__ (kwargs));
/* 000767 */ 			}) ();
/* 000767 */ 		});}
/* 000767 */ 	}),
/* 000771 */ 	get __init__ () {return __get__ (this, function (self, number_within) {
/* 000771 */ 		if (typeof number_within == 'undefined' || (number_within != null && number_within.hasOwnProperty ("__kwargtrans__"))) {;
/* 000771 */ 			var number_within = null;
/* 000771 */ 		};
/* 000771 */ 		if (arguments.length) {
/* 000771 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000771 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000771 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000771 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000771 */ 					switch (__attrib0__) {
/* 000771 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 						case 'number_within': var number_within = __allkwargs0__ [__attrib0__]; break;
/* 000771 */ 					}
/* 000771 */ 				}
/* 000771 */ 			}
/* 000771 */ 		}
/* 000771 */ 		else {
/* 000771 */ 		}
/* 000772 */ 		__call__ (__call__ (__super__, null, FeatureNumbering, '__init__'), null, self);
/* 000773 */ 		self.number_within = __t__ (number_within) || dict ({});
/* 000773 */ 	});}
/* 000773 */ });
/* 000777 */ export var FeatureClass = FeatureNumbering;
/* 000015 */ 
//# sourceMappingURL=flm.feature.numbering.map