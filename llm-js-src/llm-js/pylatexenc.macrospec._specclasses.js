/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:23
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000050 */ import {LatexEnvironmentBodyContentsParser} from './pylatexenc.macrospec._environmentbodyparser.js';
/* 000047 */ import {LatexEnvironmentCallParser, LatexMacroCallParser, LatexSpecialsCallParser} from './pylatexenc.macrospec._macrocallparser.js';
/* 000046 */ import {LatexArgumentsParser, LatexNoArgumentsParser} from './pylatexenc.macrospec._argumentsparser.js';
/* 000040 */ import {CallableSpecBase, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNoArgumentsParser, LatexEnvironmentCallParser, LatexEnvironmentBodyContentsParser, LatexSpecialsCallParser, LatexArgumentsParser, ParsingStateDeltaEnterMathMode, CallableSpecBase, LatexMacroCallParser};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._specclasses';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000054 */ export var _basestring = str;
/* 000064 */ export var _legacy_pyltxenc2_do = (function __lambda__ () {
/* 000064 */ 	if (arguments.length) {
/* 000064 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		var args = tuple ([].slice.apply (arguments).slice (0, __ilastarg0__ + 1));
/* 000064 */ 	}
/* 000064 */ 	else {
/* 000064 */ 		var args = tuple ();
/* 000064 */ 	}
/* 000064 */ 	return null;
/* 000064 */ });
/* 000067 */ export var _SpecBase =  __class__ ('_SpecBase', [CallableSpecBase], {
/* 000067 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list, make_arguments_parsing_state_delta, make_body_parsing_state_delta, make_after_parsing_state_delta, finalize_node) {
/* 000068 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var arguments_spec_list = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof make_arguments_parsing_state_delta == 'undefined' || (make_arguments_parsing_state_delta != null && make_arguments_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var make_arguments_parsing_state_delta = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof make_body_parsing_state_delta == 'undefined' || (make_body_parsing_state_delta != null && make_body_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var make_body_parsing_state_delta = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof make_after_parsing_state_delta == 'undefined' || (make_after_parsing_state_delta != null && make_after_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var make_after_parsing_state_delta = null;
/* 000068 */ 		};
/* 000068 */ 		if (typeof finalize_node == 'undefined' || (finalize_node != null && finalize_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var finalize_node = null;
/* 000068 */ 		};
/* 000068 */ 		var kwargs = dict ();
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'make_arguments_parsing_state_delta': var make_arguments_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'make_body_parsing_state_delta': var make_body_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'make_after_parsing_state_delta': var make_after_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'finalize_node': var finalize_node = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 				delete kwargs.__kwargtrans__;
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000075 */ 		self.arguments_spec_list = arguments_spec_list;
/* 000077 */ 		self._fn_make_arguments_parsing_state_delta = make_arguments_parsing_state_delta;
/* 000078 */ 		self._fn_make_body_parsing_state_delta = make_body_parsing_state_delta;
/* 000079 */ 		self._fn_make_after_parsing_state_delta = make_after_parsing_state_delta;
/* 000080 */ 		self._fn_finalize_node = finalize_node;
/* 000083 */ 		var use_legacy_args_parser = __call__ (_legacy_pyltxenc2_do, null, 'SpecBase_init_from_args_parser', self, arguments_spec_list, kwargs);
/* 000087 */ 		__call__ (__call__ (__super__, null, _SpecBase, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000089 */ 		if (__t__ (!__t__ ((use_legacy_args_parser)))) {
/* 000090 */ 			if (__t__ (self.arguments_spec_list)) {
/* 000091 */ 				self.arguments_parser = __call__ (LatexArgumentsParser, null, arguments_spec_list);
/* 000091 */ 			}
/* 000092 */ 			else {
/* 000093 */ 				self.arguments_parser = __call__ (LatexNoArgumentsParser, null);
/* 000093 */ 			}
/* 000093 */ 		}
/* 000093 */ 	});},
/* 000106 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000117 */ 		if (__t__ (self._fn_finalize_node !== null)) {
/* 000118 */ 			return (function () {
/* 000118 */ 				var __accu0__ = self;
/* 000118 */ 				return __call__ (__accu0__._fn_finalize_node, __accu0__, node);
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000120 */ 		return node;
/* 000120 */ 	});},
/* 000123 */ 	get make_arguments_parsing_state_delta () {return __get__ (this, function (self, token, latex_walker) {
/* 000123 */ 		if (arguments.length) {
/* 000123 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000123 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000123 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000123 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000123 */ 					switch (__attrib0__) {
/* 000123 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000123 */ 					}
/* 000123 */ 				}
/* 000123 */ 			}
/* 000123 */ 		}
/* 000123 */ 		else {
/* 000123 */ 		}
/* 000124 */ 		if (__t__ (self._fn_make_arguments_parsing_state_delta !== null)) {
/* 000125 */ 			return (function () {
/* 000125 */ 				var __accu0__ = self;
/* 000125 */ 				return __call__ (__accu0__._fn_make_arguments_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, latex_walker: latex_walker}));
/* 000125 */ 			}) ();
/* 000125 */ 		}
/* 000129 */ 		return null;
/* 000129 */ 	});},
/* 000131 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000150 */ 		if (__t__ (self._fn_make_body_parsing_state_delta !== null)) {
/* 000151 */ 			return (function () {
/* 000151 */ 				var __accu0__ = self;
/* 000151 */ 				return __call__ (__accu0__._fn_make_body_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, nodeargd: nodeargd, arg_parsing_state_delta: arg_parsing_state_delta, latex_walker: latex_walker}));
/* 000151 */ 			}) ();
/* 000151 */ 		}
/* 000159 */ 		return self.body_parsing_state_delta;
/* 000159 */ 	});},
/* 000162 */ 	get make_after_parsing_state_delta () {return __get__ (this, function (self, parsed_node, latex_walker) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'parsed_node': var parsed_node = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000178 */ 		if (__t__ (self._fn_make_after_parsing_state_delta !== null)) {
/* 000179 */ 			return (function () {
/* 000179 */ 				var __accu0__ = self;
/* 000179 */ 				return __call__ (__accu0__._fn_make_after_parsing_state_delta, __accu0__, __kwargtrans__ ({parsed_node: parsed_node, latex_walker: latex_walker}));
/* 000179 */ 			}) ();
/* 000179 */ 		}
/* 000183 */ 		return null;
/* 000183 */ 	});},
/* 000186 */ 	get needs_arguments () {return __get__ (this, function (self) {
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 		}
/* 000187 */ 		var __iterable0__ = self.arguments_spec_list;
/* 000187 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000187 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000188 */ 			if (__t__ ((function () {
/* 000188 */ 				var __accu0__ = arg.spec;
/* 000188 */ 				return __call__ (__accu0__.is_required, __accu0__);
/* 000188 */ 			}) ())) {
/* 000189 */ 				return true;
/* 000189 */ 			}
/* 000189 */ 		}
/* 000190 */ 		return false;
/* 000190 */ 	});},
/* 000192 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000195 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000195 */ 			var __accu0__ = ', ';
/* 000195 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000195 */ 				var __accu1__ = [];
/* 000196 */ 				var __iterable0__ = (function () {
/* 000196 */ 					var __accu2__ = self.__dict__;
/* 000196 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000196 */ 				}) ();
/* 000196 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000196 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000196 */ 					var k = __left0__ [0];
/* 000196 */ 					var v = __left0__ [1];
/* 000197 */ 					if (__t__ (!__t__ (((function () {
/* 000197 */ 						var __accu2__ = k;
/* 000197 */ 						return __call__ (__accu2__.startswith, __accu2__, '_');
/* 000197 */ 					}) ())))) {
/* 000197 */ 						(function () {
/* 000197 */ 							var __accu2__ = __accu1__;
/* 000195 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000195 */ 								var __accu3__ = '{}={!r}';
/* 000195 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000195 */ 							}) ());
/* 000195 */ 						}) ();
/* 000195 */ 					}
/* 000195 */ 				}
/* 000195 */ 				return __accu1__;
/* 000195 */ 			}) ());
/* 000195 */ 		}) ()), ')');
/* 000195 */ 	});}
/* 000195 */ });
/* 000203 */ export var MacroSpec =  __class__ ('MacroSpec', [_SpecBase], {
/* 000203 */ 	__module__: __name__,
/* 000224 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000224 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 			var arguments_spec_list = null;
/* 000224 */ 		};
/* 000224 */ 		var kwargs = dict ();
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 				delete kwargs.__kwargtrans__;
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		__call__ (__call__ (__super__, null, MacroSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000228 */ 		self.macroname = macroname;
/* 000228 */ 	});},
/* 000230 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		return __call__ (LatexMacroCallParser, null, token, self);
/* 000231 */ 	});}
/* 000231 */ });
/* 000236 */ export var EnvironmentSpec =  __class__ ('EnvironmentSpec', [_SpecBase], {
/* 000236 */ 	__module__: __name__,
/* 000286 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000286 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000286 */ 			var arguments_spec_list = null;
/* 000286 */ 		};
/* 000286 */ 		var kwargs = dict ();
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 				delete kwargs.__kwargtrans__;
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000288 */ 		var make_body_parser = (function () {
/* 000288 */ 			var __accu0__ = kwargs;
/* 000288 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'make_body_parser', null);
/* 000288 */ 		}) ();
/* 000289 */ 		var body_parsing_state_delta = (function () {
/* 000289 */ 			var __accu0__ = kwargs;
/* 000289 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'body_parsing_state_delta', null);
/* 000289 */ 		}) ();
/* 000296 */ 		__call__ (__call__ (__super__, null, EnvironmentSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000312 */ 		self.environmentname = environmentname;
/* 000313 */ 		self.body_parsing_state_delta = body_parsing_state_delta;
/* 000314 */ 		self._fn_make_body_parser = make_body_parser;
/* 000314 */ 	});},
/* 000316 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		return __call__ (LatexEnvironmentCallParser, null, token, self);
/* 000317 */ 	});},
/* 000319 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000320 */ 		if (__t__ (self._fn_make_body_parser !== null)) {
/* 000321 */ 			return (function () {
/* 000321 */ 				var __accu0__ = self;
/* 000321 */ 				return __call__ (__accu0__._fn_make_body_parser, __accu0__, token, nodeargd, arg_parsing_state_delta);
/* 000321 */ 			}) ();
/* 000321 */ 		}
/* 000322 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg}));
/* 000322 */ 	});}
/* 000322 */ });
/* 000328 */ export var SpecialsSpec =  __class__ ('SpecialsSpec', [_SpecBase], {
/* 000328 */ 	__module__: __name__,
/* 000346 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000346 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000346 */ 			var arguments_spec_list = null;
/* 000346 */ 		};
/* 000346 */ 		var kwargs = dict ();
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				delete kwargs.__kwargtrans__;
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		__call__ (__call__ (__super__, null, SpecialsSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000349 */ 		self.specials_chars = specials_chars;
/* 000349 */ 	});},
/* 000351 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		return (function () {
/* 000352 */ 			var __accu0__ = 'SpecialsSpec(specials_chars={!r}, arguments_spec_list={!r})';
/* 000352 */ 			return __call__ (__accu0__.format, __accu0__, self.specials_chars, self.arguments_spec_list);
/* 000352 */ 		}) ();
/* 000352 */ 	});},
/* 000356 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		return __call__ (LatexSpecialsCallParser, null, token, self);
/* 000357 */ 	});}
/* 000357 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._specclasses.map