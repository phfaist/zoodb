/* 000001 */ // Transcrypt'ed from Python, 2026-02-13 22:15:41
/* 000039 */ var logging = {};
/* 000039 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000039 */ import * as __module_logging__ from './logging.js';
/* 000039 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsingstatedelta';
/* 000040 */ export var logger = (function () {
/* 000040 */ 	var __accu0__ = logging;
/* 000040 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000040 */ }) ();
/* 000044 */ export var ParsingStateDelta =  __class__ ('ParsingStateDelta', [object], {
/* 000044 */ 	__module__: __name__,
/* 000058 */ 	get __init__ () {return __get__ (this, function (self, set_attributes, _fields) {
/* 000058 */ 		if (typeof set_attributes == 'undefined' || (set_attributes != null && set_attributes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000058 */ 			var set_attributes = null;
/* 000058 */ 		};
/* 000058 */ 		if (typeof _fields == 'undefined' || (_fields != null && _fields.hasOwnProperty ("__kwargtrans__"))) {;
/* 000058 */ 			var _fields = null;
/* 000058 */ 		};
/* 000058 */ 		var kwargs = dict ();
/* 000058 */ 		if (arguments.length) {
/* 000058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000058 */ 					switch (__attrib0__) {
/* 000058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case 'set_attributes': var set_attributes = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						case '_fields': var _fields = __allkwargs0__ [__attrib0__]; break;
/* 000058 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000058 */ 					}
/* 000058 */ 				}
/* 000058 */ 				delete kwargs.__kwargtrans__;
/* 000058 */ 			}
/* 000058 */ 		}
/* 000058 */ 		else {
/* 000058 */ 		}
/* 000059 */ 		__call__ (__call__ (__super__, null, ParsingStateDelta, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000060 */ 		self.set_attributes = (__t__ (set_attributes) ? __call__ (dict, null, set_attributes) : null);
/* 000061 */ 		self._fields = (__t__ (_fields !== null) ? _fields : tuple (['set_attributes']));
/* 000061 */ 	});},
/* 000063 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000063 */ 		if (arguments.length) {
/* 000063 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000063 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000063 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000063 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000063 */ 					switch (__attrib0__) {
/* 000063 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000063 */ 					}
/* 000063 */ 				}
/* 000063 */ 			}
/* 000063 */ 		}
/* 000063 */ 		else {
/* 000063 */ 		}
/* 000066 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000066 */ 			var __accu0__ = ', ';
/* 000066 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000066 */ 				var __accu1__ = [];
/* 000066 */ 				var __iterable0__ = self._fields;
/* 000066 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000068 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000068 */ 					(function () {
/* 000068 */ 						var __accu2__ = __accu1__;
/* 000067 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000067 */ 							var __accu3__ = '{}={!r}';
/* 000067 */ 							return __call__ (__accu3__.format, __accu3__, k, (__t__ (__call__ (hasattr, null, self, k)) ? __call__ (getattr, null, self, k) : '<??>'));
/* 000067 */ 						}) ());
/* 000067 */ 					}) ();
/* 000067 */ 				}
/* 000067 */ 				return __accu1__;
/* 000067 */ 			}) ());
/* 000067 */ 		}) ()), ')');
/* 000067 */ 	});},
/* 000073 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000082 */ 		if (__t__ (self.set_attributes)) {
/* 000083 */ 			return (function () {
/* 000083 */ 				var __accu0__ = parsing_state;
/* 000083 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000083 */ 			}) ();
/* 000083 */ 		}
/* 000085 */ 		return parsing_state;
/* 000085 */ 	});}
/* 000085 */ });
/* 000091 */ export var ParsingStateDeltaReplaceParsingState =  __class__ ('ParsingStateDeltaReplaceParsingState', [ParsingStateDelta], {
/* 000091 */ 	__module__: __name__,
/* 000096 */ 	get __init__ () {return __get__ (this, function (self, set_parsing_state) {
/* 000096 */ 		var kwargs = dict ();
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'set_parsing_state': var set_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 				delete kwargs.__kwargtrans__;
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaReplaceParsingState, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['set_parsing_state'])}, kwargs)));
/* 000101 */ 		self.set_parsing_state = set_parsing_state;
/* 000101 */ 	});},
/* 000103 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000104 */ 		if (__t__ (self.set_parsing_state !== null)) {
/* 000105 */ 			return self.set_parsing_state;
/* 000105 */ 		}
/* 000106 */ 		return parsing_state;
/* 000106 */ 	});}
/* 000106 */ });
/* 000111 */ export var ParsingStateDeltaChained =  __class__ ('ParsingStateDeltaChained', [ParsingStateDelta], {
/* 000111 */ 	__module__: __name__,
/* 000115 */ 	get __init__ () {return __get__ (this, function (self, parsing_state_deltas) {
/* 000115 */ 		var kwargs = dict ();
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'parsing_state_deltas': var parsing_state_deltas = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 				delete kwargs.__kwargtrans__;
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000116 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaChained, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({_fields: tuple (['parsing_state_deltas'])}, kwargs)));
/* 000120 */ 		self.parsing_state_deltas = parsing_state_deltas;
/* 000120 */ 	});},
/* 000122 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000122 */ 		if (arguments.length) {
/* 000122 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000122 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000122 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000122 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000122 */ 					switch (__attrib0__) {
/* 000122 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000122 */ 					}
/* 000122 */ 				}
/* 000122 */ 			}
/* 000122 */ 		}
/* 000122 */ 		else {
/* 000122 */ 		}
/* 000123 */ 		var ps = parsing_state;
/* 000124 */ 		var __iterable0__ = self.parsing_state_deltas;
/* 000124 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000124 */ 			var delta = __getitem__ (__iterable0__, __index0__);
/* 000125 */ 			if (__t__ (delta !== null)) {
/* 000126 */ 				var ps = (function () {
/* 000126 */ 					var __accu0__ = delta;
/* 000126 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, ps, latex_walker);
/* 000126 */ 				}) ();
/* 000126 */ 			}
/* 000126 */ 		}
/* 000127 */ 		return ps;
/* 000127 */ 	});}
/* 000127 */ });
/* 000137 */ export var ParsingStateDeltaWalkerEvent =  __class__ ('ParsingStateDeltaWalkerEvent', [ParsingStateDelta], {
/* 000137 */ 	__module__: __name__,
/* 000145 */ 	get __init__ () {return __get__ (this, function (self, walker_event_name, walker_event_kwargs) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'walker_event_name': var walker_event_name = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'walker_event_kwargs': var walker_event_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000146 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaWalkerEvent, '__init__'), null, self, __kwargtrans__ ({_fields: tuple (['walker_event_name', 'walker_event_kwargs'])}));
/* 000149 */ 		self.walker_event_name = walker_event_name;
/* 000150 */ 		self.walker_event_kwargs = walker_event_kwargs;
/* 000150 */ 	});},
/* 000152 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		var handler = (function () {
/* 000153 */ 			var __accu0__ = latex_walker;
/* 000153 */ 			return __call__ (__accu0__.parsing_state_event_handler, __accu0__);
/* 000153 */ 		}) ();
/* 000154 */ 		var handler_fn = __call__ (getattr, null, handler, self.walker_event_name);
/* 000155 */ 		var parsing_state_delta = __call__ (handler_fn, null, __kwargtrans__ (self.walker_event_kwargs));
/* 000156 */ 		return __call__ (get_updated_parsing_state_from_delta, null, parsing_state, parsing_state_delta, latex_walker);
/* 000156 */ 	});}
/* 000156 */ });
/* 000162 */ export var ParsingStateDeltaEnterMathMode =  __class__ ('ParsingStateDeltaEnterMathMode', [ParsingStateDeltaWalkerEvent], {
/* 000162 */ 	__module__: __name__,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000174 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var math_mode_delimiter = null;
/* 000174 */ 		};
/* 000174 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var trigger_token = null;
/* 000174 */ 		};
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000177 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaEnterMathMode, '__init__'), null, self, __kwargtrans__ ({walker_event_name: 'enter_math_mode', walker_event_kwargs: __call__ (dict, null, __kwargtrans__ ({math_mode_delimiter: math_mode_delimiter, trigger_token: trigger_token}))}));
/* 000177 */ 	});}
/* 000177 */ });
/* 000183 */ export var ParsingStateDeltaLeaveMathMode =  __class__ ('ParsingStateDeltaLeaveMathMode', [ParsingStateDeltaWalkerEvent], {
/* 000183 */ 	__module__: __name__,
/* 000190 */ 	get __init__ () {return __get__ (this, function (self, trigger_token) {
/* 000190 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000190 */ 			var trigger_token = null;
/* 000190 */ 		};
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000193 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaLeaveMathMode, '__init__'), null, self, __kwargtrans__ ({walker_event_name: 'leave_math_mode', walker_event_kwargs: __call__ (dict, null, __kwargtrans__ ({trigger_token: trigger_token}))}));
/* 000193 */ 	});}
/* 000193 */ });
/* 000201 */ export var get_updated_parsing_state_from_delta = function (parsing_state, parsing_state_delta, latex_walker) {
/* 000201 */ 	if (arguments.length) {
/* 000201 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 				switch (__attrib0__) {
/* 000201 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 	}
/* 000201 */ 	else {
/* 000201 */ 	}
/* 000202 */ 	if (__t__ (parsing_state_delta === null)) {
/* 000203 */ 		return parsing_state;
/* 000203 */ 	}
/* 000204 */ 	return (function () {
/* 000204 */ 		var __accu0__ = parsing_state_delta;
/* 000204 */ 		return __call__ (__accu0__.get_updated_parsing_state, __accu0__, parsing_state, latex_walker);
/* 000204 */ 	}) ();
/* 000204 */ };
/* 000039 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstatedelta.map