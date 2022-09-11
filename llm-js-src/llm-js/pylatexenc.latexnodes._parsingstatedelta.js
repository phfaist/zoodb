/* 000001 */ // Transcrypt'ed from Python, 2022-09-11 22:27:56
/* 000039 */ var logging = {};
/* 000039 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000039 */ import * as __module_logging__ from './logging.js';
/* 000039 */ __nest__ (logging, '', __module_logging__);
/* 000001 */ var __name__ = 'pylatexenc.latexnodes._parsingstatedelta';
/* 000040 */ export var logger = (function () {
/* 000040 */ 	var __accu0__ = logging;
/* 000040 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000040 */ }) ();
/* 000044 */ export var ParsingStateDelta =  __class__ ('ParsingStateDelta', [object], {
/* 000044 */ 	__module__: __name__,
/* 000066 */ 	get __init__ () {return __get__ (this, function (self, set_attributes) {
/* 000066 */ 		if (typeof set_attributes == 'undefined' || (set_attributes != null && set_attributes.hasOwnProperty ("__kwargtrans__"))) {;
/* 000066 */ 			var set_attributes = null;
/* 000066 */ 		};
/* 000066 */ 		var kwargs = dict ();
/* 000066 */ 		if (arguments.length) {
/* 000066 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000066 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000066 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000066 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000066 */ 					switch (__attrib0__) {
/* 000066 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						case 'set_attributes': var set_attributes = __allkwargs0__ [__attrib0__]; break;
/* 000066 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000066 */ 					}
/* 000066 */ 				}
/* 000066 */ 				delete kwargs.__kwargtrans__;
/* 000066 */ 			}
/* 000066 */ 		}
/* 000066 */ 		else {
/* 000066 */ 		}
/* 000067 */ 		__call__ (__call__ (__super__, null, ParsingStateDelta, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000068 */ 		self.set_attributes = (__t__ (set_attributes) ? __call__ (dict, null, set_attributes) : null);
/* 000069 */ 		self._fields = tuple (['set_attributes']);
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
/* 000074 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000074 */ 			var __accu0__ = ', ';
/* 000074 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000074 */ 				var __accu1__ = [];
/* 000074 */ 				var __iterable0__ = self._fields;
/* 000074 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000076 */ 					var k = __getitem__ (__iterable0__, __index0__);
/* 000076 */ 					(function () {
/* 000076 */ 						var __accu2__ = __accu1__;
/* 000075 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000075 */ 							var __accu3__ = '{}={!r}';
/* 000075 */ 							return __call__ (__accu3__.format, __accu3__, k, __call__ (getattr, null, self, k, '<??>'));
/* 000075 */ 						}) ());
/* 000075 */ 					}) ();
/* 000075 */ 				}
/* 000075 */ 				return __accu1__;
/* 000075 */ 			}) ());
/* 000075 */ 		}) ()), ')');
/* 000075 */ 	});},
/* 000081 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000090 */ 		if (__t__ (self.set_attributes)) {
/* 000091 */ 			return (function () {
/* 000091 */ 				var __accu0__ = parsing_state;
/* 000091 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ (self.set_attributes));
/* 000091 */ 			}) ();
/* 000091 */ 		}
/* 000093 */ 		return parsing_state;
/* 000093 */ 	});}
/* 000093 */ });
/* 000099 */ export var ParsingStateDeltaReplaceParsingState =  __class__ ('ParsingStateDeltaReplaceParsingState', [ParsingStateDelta], {
/* 000099 */ 	__module__: __name__,
/* 000104 */ 	get __init__ () {return __get__ (this, function (self, set_parsing_state) {
/* 000104 */ 		var kwargs = dict ();
/* 000104 */ 		if (arguments.length) {
/* 000104 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000104 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000104 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000104 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000104 */ 					switch (__attrib0__) {
/* 000104 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						case 'set_parsing_state': var set_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000104 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000104 */ 					}
/* 000104 */ 				}
/* 000104 */ 				delete kwargs.__kwargtrans__;
/* 000104 */ 			}
/* 000104 */ 		}
/* 000104 */ 		else {
/* 000104 */ 		}
/* 000105 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaReplaceParsingState, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000106 */ 		self.set_parsing_state = set_parsing_state;
/* 000107 */ 		self._fields = tuple (['set_parsing_state']);
/* 000107 */ 	});},
/* 000109 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000110 */ 		if (__t__ (self.set_parsing_state !== null)) {
/* 000111 */ 			return self.set_parsing_state;
/* 000111 */ 		}
/* 000112 */ 		return parsing_state;
/* 000112 */ 	});}
/* 000112 */ });
/* 000121 */ export var ParsingStateDeltaWalkerEvent =  __class__ ('ParsingStateDeltaWalkerEvent', [ParsingStateDelta], {
/* 000121 */ 	__module__: __name__,
/* 000129 */ 	get __init__ () {return __get__ (this, function (self, walker_event_name, walker_event_kwargs) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'walker_event_name': var walker_event_name = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'walker_event_kwargs': var walker_event_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000130 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaWalkerEvent, '__init__'), null, self);
/* 000131 */ 		self.walker_event_name = walker_event_name;
/* 000132 */ 		self.walker_event_kwargs = walker_event_kwargs;
/* 000133 */ 		self._fields = tuple (['walker_event_name', 'walker_event_kwargs']);
/* 000133 */ 	});},
/* 000135 */ 	get get_updated_parsing_state () {return __get__ (this, function (self, parsing_state, latex_walker) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		var handler = (function () {
/* 000136 */ 			var __accu0__ = latex_walker;
/* 000136 */ 			return __call__ (__accu0__.parsing_state_event_handler, __accu0__);
/* 000136 */ 		}) ();
/* 000137 */ 		var handler_fn = __call__ (getattr, null, handler, self.walker_event_name);
/* 000138 */ 		var parsing_state_delta = __call__ (handler_fn, null, __kwargtrans__ (self.walker_event_kwargs));
/* 000139 */ 		return __call__ (get_updated_parsing_state_from_delta, null, parsing_state, parsing_state_delta, latex_walker);
/* 000139 */ 	});}
/* 000139 */ });
/* 000145 */ export var ParsingStateDeltaEnterMathMode =  __class__ ('ParsingStateDeltaEnterMathMode', [ParsingStateDeltaWalkerEvent], {
/* 000145 */ 	__module__: __name__,
/* 000157 */ 	get __init__ () {return __get__ (this, function (self, math_mode_delimiter, trigger_token) {
/* 000157 */ 		if (typeof math_mode_delimiter == 'undefined' || (math_mode_delimiter != null && math_mode_delimiter.hasOwnProperty ("__kwargtrans__"))) {;
/* 000157 */ 			var math_mode_delimiter = null;
/* 000157 */ 		};
/* 000157 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000157 */ 			var trigger_token = null;
/* 000157 */ 		};
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'math_mode_delimiter': var math_mode_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000160 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaEnterMathMode, '__init__'), null, self, __kwargtrans__ ({walker_event_name: 'enter_math_mode', walker_event_kwargs: __call__ (dict, null, __kwargtrans__ ({math_mode_delimiter: math_mode_delimiter, trigger_token: trigger_token}))}));
/* 000160 */ 	});}
/* 000160 */ });
/* 000166 */ export var ParsingStateDeltaLeaveMathMode =  __class__ ('ParsingStateDeltaLeaveMathMode', [ParsingStateDeltaWalkerEvent], {
/* 000166 */ 	__module__: __name__,
/* 000173 */ 	get __init__ () {return __get__ (this, function (self, trigger_token) {
/* 000173 */ 		if (typeof trigger_token == 'undefined' || (trigger_token != null && trigger_token.hasOwnProperty ("__kwargtrans__"))) {;
/* 000173 */ 			var trigger_token = null;
/* 000173 */ 		};
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'trigger_token': var trigger_token = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000176 */ 		__call__ (__call__ (__super__, null, ParsingStateDeltaLeaveMathMode, '__init__'), null, self, __kwargtrans__ ({walker_event_name: 'leave_math_mode', walker_event_kwargs: __call__ (dict, null, __kwargtrans__ ({trigger_token: trigger_token}))}));
/* 000176 */ 	});}
/* 000176 */ });
/* 000184 */ export var get_updated_parsing_state_from_delta = function (parsing_state, parsing_state_delta, latex_walker) {
/* 000184 */ 	if (arguments.length) {
/* 000184 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 				switch (__attrib0__) {
/* 000184 */ 					case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 	}
/* 000184 */ 	else {
/* 000184 */ 	}
/* 000185 */ 	if (__t__ (parsing_state_delta === null)) {
/* 000186 */ 		return parsing_state;
/* 000186 */ 	}
/* 000187 */ 	return (function () {
/* 000187 */ 		var __accu0__ = parsing_state_delta;
/* 000187 */ 		return __call__ (__accu0__.get_updated_parsing_state, __accu0__, parsing_state, latex_walker);
/* 000187 */ 	}) ();
/* 000187 */ };
/* 000039 */ 
//# sourceMappingURL=pylatexenc.latexnodes._parsingstatedelta.map