/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 17:30:20
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000050 */ import {LatexEnvironmentBodyContentsParser} from './pylatexenc.macrospec._environmentbodyparser.js';
/* 000047 */ import {LatexEnvironmentCallParser, LatexMacroCallParser, LatexSpecialsCallParser} from './pylatexenc.macrospec._macrocallparser.js';
/* 000046 */ import {LatexArgumentsParser, LatexNoArgumentsParser} from './pylatexenc.macrospec._argumentsparser.js';
/* 000040 */ import {CallableSpecBase, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNoArgumentsParser, LatexArgumentsParser, LatexMacroCallParser, LatexEnvironmentBodyContentsParser, LatexSpecialsCallParser, ParsingStateDeltaEnterMathMode, CallableSpecBase, LatexEnvironmentCallParser};
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
/* 000067 */ export var _NotSpecified =  __class__ ('_NotSpecified', [object], {
/* 000067 */ 	__module__: __name__,
/* 000067 */ });
/* 000071 */ export var _spec_node_parser_types = dict ({'macro': LatexMacroCallParser, 'environment': LatexEnvironmentCallParser, 'specials': LatexSpecialsCallParser});
/* 000078 */ export var CallableSpec =  __class__ ('CallableSpec', [CallableSpecBase], {
/* 000078 */ 	__module__: __name__,
/* 000099 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list, spec_node_parser_type, macroname, environmentname, specials_chars, make_arguments_parsing_state_delta, make_body_parsing_state_delta, make_after_parsing_state_delta, make_body_parser, finalize_node) {
/* 000099 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var macroname = _NotSpecified;
/* 000099 */ 		};
/* 000099 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var environmentname = _NotSpecified;
/* 000099 */ 		};
/* 000099 */ 		if (typeof specials_chars == 'undefined' || (specials_chars != null && specials_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var specials_chars = _NotSpecified;
/* 000099 */ 		};
/* 000099 */ 		if (typeof make_arguments_parsing_state_delta == 'undefined' || (make_arguments_parsing_state_delta != null && make_arguments_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var make_arguments_parsing_state_delta = null;
/* 000099 */ 		};
/* 000099 */ 		if (typeof make_body_parsing_state_delta == 'undefined' || (make_body_parsing_state_delta != null && make_body_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var make_body_parsing_state_delta = null;
/* 000099 */ 		};
/* 000099 */ 		if (typeof make_after_parsing_state_delta == 'undefined' || (make_after_parsing_state_delta != null && make_after_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var make_after_parsing_state_delta = null;
/* 000099 */ 		};
/* 000099 */ 		if (typeof make_body_parser == 'undefined' || (make_body_parser != null && make_body_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var make_body_parser = null;
/* 000099 */ 		};
/* 000099 */ 		if (typeof finalize_node == 'undefined' || (finalize_node != null && finalize_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000099 */ 			var finalize_node = null;
/* 000099 */ 		};
/* 000099 */ 		var kwargs = dict ();
/* 000099 */ 		if (arguments.length) {
/* 000099 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000099 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000099 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000099 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000099 */ 					switch (__attrib0__) {
/* 000099 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'make_arguments_parsing_state_delta': var make_arguments_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'make_body_parsing_state_delta': var make_body_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'make_after_parsing_state_delta': var make_after_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'make_body_parser': var make_body_parser = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						case 'finalize_node': var finalize_node = __allkwargs0__ [__attrib0__]; break;
/* 000099 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000099 */ 					}
/* 000099 */ 				}
/* 000099 */ 				delete kwargs.__kwargtrans__;
/* 000099 */ 			}
/* 000099 */ 		}
/* 000099 */ 		else {
/* 000099 */ 		}
/* 000114 */ 		self.arguments_spec_list = arguments_spec_list;
/* 000116 */ 		self.spec_node_parser_type = spec_node_parser_type;
/* 000117 */ 		if (__t__ (__call__ (isinstance, null, spec_node_parser_type, _basestring))) {
/* 000118 */ 			self.spec_node_parser_type = __getitem__ (_spec_node_parser_types, spec_node_parser_type);
/* 000118 */ 		}
/* 000120 */ 		if (__t__ (macroname !== _NotSpecified)) {
/* 000121 */ 			self.macroname = macroname;
/* 000121 */ 		}
/* 000122 */ 		if (__t__ (environmentname !== _NotSpecified)) {
/* 000123 */ 			self.environmentname = environmentname;
/* 000123 */ 		}
/* 000124 */ 		if (__t__ (specials_chars !== _NotSpecified)) {
/* 000125 */ 			self.specials_chars = specials_chars;
/* 000125 */ 		}
/* 000131 */ 		if (__t__ (make_arguments_parsing_state_delta !== null)) {
/* 000132 */ 			self._fn_make_arguments_parsing_state_delta = make_arguments_parsing_state_delta;
/* 000132 */ 		}
/* 000133 */ 		if (__t__ (make_body_parsing_state_delta !== null)) {
/* 000134 */ 			self._fn_make_body_parsing_state_delta = make_body_parsing_state_delta;
/* 000134 */ 		}
/* 000135 */ 		if (__t__ (make_after_parsing_state_delta !== null)) {
/* 000136 */ 			self._fn_make_after_parsing_state_delta = make_after_parsing_state_delta;
/* 000136 */ 		}
/* 000137 */ 		if (__t__ (make_body_parser !== null)) {
/* 000138 */ 			self._fn_make_body_parser = make_body_parser;
/* 000138 */ 		}
/* 000139 */ 		if (__t__ (finalize_node !== null)) {
/* 000140 */ 			self._fn_finalize_node = finalize_node;
/* 000140 */ 		}
/* 000143 */ 		var use_legacy_args_parser = __call__ (_legacy_pyltxenc2_do, null, 'CallableSpec_init_from_args_parser', self, arguments_spec_list, kwargs);
/* 000150 */ 		var body_parsing_state_delta = (function () {
/* 000150 */ 			var __accu0__ = kwargs;
/* 000150 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'body_parsing_state_delta', null);
/* 000150 */ 		}) ();
/* 000163 */ 		self.body_parsing_state_delta = body_parsing_state_delta;
/* 000165 */ 		__call__ (__call__ (__super__, null, CallableSpec, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000167 */ 		if (__t__ (!__t__ ((use_legacy_args_parser)))) {
/* 000168 */ 			if (__t__ (self.arguments_spec_list)) {
/* 000169 */ 				self.arguments_parser = __call__ (LatexArgumentsParser, null, arguments_spec_list);
/* 000169 */ 			}
/* 000170 */ 			else {
/* 000171 */ 				self.arguments_parser = __call__ (LatexNoArgumentsParser, null);
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 	});},
/* 000174 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000189 */ 		return (function () {
/* 000189 */ 			var __accu0__ = self;
/* 000189 */ 			return __call__ (__accu0__.spec_node_parser_type, __accu0__, token, self);
/* 000189 */ 		}) ();
/* 000189 */ 	});},
/* 000201 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 		}
/* 000214 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_finalize_node'))) {
/* 000215 */ 			return (function () {
/* 000215 */ 				var __accu0__ = self;
/* 000215 */ 				return __call__ (__accu0__._fn_finalize_node, __accu0__, node);
/* 000215 */ 			}) ();
/* 000215 */ 		}
/* 000217 */ 		return node;
/* 000217 */ 	});},
/* 000220 */ 	get make_arguments_parsing_state_delta () {return __get__ (this, function (self, token, latex_walker) {
/* 000220 */ 		if (arguments.length) {
/* 000220 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 					switch (__attrib0__) {
/* 000220 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					}
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 		else {
/* 000220 */ 		}
/* 000227 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_arguments_parsing_state_delta'))) {
/* 000230 */ 			return (function () {
/* 000230 */ 				var __accu0__ = self;
/* 000230 */ 				return __call__ (__accu0__._fn_make_arguments_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, latex_walker: latex_walker}));
/* 000230 */ 			}) ();
/* 000230 */ 		}
/* 000234 */ 		return null;
/* 000234 */ 	});},
/* 000236 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000256 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_body_parsing_state_delta'))) {
/* 000259 */ 			return (function () {
/* 000259 */ 				var __accu0__ = self;
/* 000259 */ 				return __call__ (__accu0__._fn_make_body_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, nodeargd: nodeargd, arg_parsing_state_delta: arg_parsing_state_delta, latex_walker: latex_walker}));
/* 000259 */ 			}) ();
/* 000259 */ 		}
/* 000267 */ 		return self.body_parsing_state_delta;
/* 000267 */ 	});},
/* 000270 */ 	get make_after_parsing_state_delta () {return __get__ (this, function (self, parsed_node, latex_walker) {
/* 000270 */ 		if (arguments.length) {
/* 000270 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000270 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000270 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000270 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000270 */ 					switch (__attrib0__) {
/* 000270 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'parsed_node': var parsed_node = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000270 */ 					}
/* 000270 */ 				}
/* 000270 */ 			}
/* 000270 */ 		}
/* 000270 */ 		else {
/* 000270 */ 		}
/* 000286 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_after_parsing_state_delta'))) {
/* 000289 */ 			return (function () {
/* 000289 */ 				var __accu0__ = self;
/* 000289 */ 				return __call__ (__accu0__._fn_make_after_parsing_state_delta, __accu0__, __kwargtrans__ ({parsed_node: parsed_node, latex_walker: latex_walker}));
/* 000289 */ 			}) ();
/* 000289 */ 		}
/* 000293 */ 		return null;
/* 000293 */ 	});},
/* 000296 */ 	get needs_arguments () {return __get__ (this, function (self) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000300 */ 		var __iterable0__ = self.arguments_spec_list;
/* 000300 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000300 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000301 */ 			if (__t__ ((function () {
/* 000301 */ 				var __accu0__ = arg.spec;
/* 000301 */ 				return __call__ (__accu0__.is_required, __accu0__);
/* 000301 */ 			}) ())) {
/* 000302 */ 				return true;
/* 000302 */ 			}
/* 000302 */ 		}
/* 000303 */ 		return false;
/* 000303 */ 	});},
/* 000306 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000312 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_body_parser'))) {
/* 000313 */ 			return (function () {
/* 000313 */ 				var __accu0__ = self;
/* 000313 */ 				return __call__ (__accu0__._fn_make_body_parser, __accu0__, token, nodeargd, arg_parsing_state_delta);
/* 000313 */ 			}) ();
/* 000313 */ 		}
/* 000314 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg}));
/* 000314 */ 	});},
/* 000319 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000322 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000322 */ 			var __accu0__ = ', ';
/* 000322 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000322 */ 				var __accu1__ = [];
/* 000324 */ 				var __iterable0__ = (function () {
/* 000324 */ 					var __accu2__ = self.__dict__;
/* 000324 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000324 */ 				}) ();
/* 000324 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000324 */ 					var k = __left0__ [0];
/* 000324 */ 					var v = __left0__ [1];
/* 000325 */ 					if (__t__ (__t__ (!__t__ (((function () {
/* 000325 */ 						var __accu2__ = k;
/* 000325 */ 						return __call__ (__accu2__.startswith, __accu2__, '_');
/* 000325 */ 					}) ()))) && __t__ (v !== null) && !__in__ (k, tuple (['spec_node_parser_type'])))) {
/* 000327 */ 						(function () {
/* 000327 */ 							var __accu2__ = __accu1__;
/* 000323 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000323 */ 								var __accu3__ = '{}={!r}';
/* 000323 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000323 */ 							}) ());
/* 000323 */ 						}) ();
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 				return __accu1__;
/* 000323 */ 			}) ());
/* 000323 */ 		}) ()), ')');
/* 000323 */ 	});}
/* 000323 */ });
/* 000334 */ export var MacroSpec =  __class__ ('MacroSpec', [CallableSpec], {
/* 000334 */ 	__module__: __name__,
/* 000362 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000362 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000362 */ 			var arguments_spec_list = null;
/* 000362 */ 		};
/* 000362 */ 		var kwargs = dict ();
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 				delete kwargs.__kwargtrans__;
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000363 */ 		__call__ (__call__ (__super__, null, MacroSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000363 */ 	});}
/* 000363 */ });
/* 000380 */ export var EnvironmentSpec =  __class__ ('EnvironmentSpec', [CallableSpec], {
/* 000380 */ 	__module__: __name__,
/* 000438 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000438 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000438 */ 			var arguments_spec_list = null;
/* 000438 */ 		};
/* 000438 */ 		var kwargs = dict ();
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 				delete kwargs.__kwargtrans__;
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000440 */ 		__call__ (__call__ (__super__, null, EnvironmentSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000440 */ 	});}
/* 000440 */ });
/* 000466 */ export var SpecialsSpec =  __class__ ('SpecialsSpec', [CallableSpec], {
/* 000466 */ 	__module__: __name__,
/* 000491 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000491 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000491 */ 			var arguments_spec_list = null;
/* 000491 */ 		};
/* 000491 */ 		var kwargs = dict ();
/* 000491 */ 		if (arguments.length) {
/* 000491 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 					switch (__attrib0__) {
/* 000491 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 				delete kwargs.__kwargtrans__;
/* 000491 */ 			}
/* 000491 */ 		}
/* 000491 */ 		else {
/* 000491 */ 		}
/* 000492 */ 		__call__ (__call__ (__super__, null, SpecialsSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000492 */ 	});}
/* 000492 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._specclasses.map