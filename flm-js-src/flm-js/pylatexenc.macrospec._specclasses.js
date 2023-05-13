/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:14:45
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000050 */ import {LatexEnvironmentBodyContentsParser} from './pylatexenc.macrospec._environmentbodyparser.js';
/* 000047 */ import {LatexEnvironmentCallParser, LatexMacroCallParser, LatexSpecialsCallParser} from './pylatexenc.macrospec._macrocallparser.js';
/* 000046 */ import {LatexArgumentsParser, LatexNoArgumentsParser} from './pylatexenc.macrospec._argumentsparser.js';
/* 000040 */ import {CallableSpecBase, ParsingStateDeltaEnterMathMode} from './pylatexenc.latexnodes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexEnvironmentBodyContentsParser, LatexEnvironmentCallParser, LatexMacroCallParser, CallableSpecBase, LatexSpecialsCallParser, LatexArgumentsParser, LatexNoArgumentsParser, ParsingStateDeltaEnterMathMode};
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
/* 000071 */ export var CallableSpec =  __class__ ('CallableSpec', [CallableSpecBase], {
/* 000071 */ 	__module__: __name__,
/* 000092 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list, spec_node_parser_type, macroname, environmentname, specials_chars, make_arguments_parsing_state_delta, make_body_parsing_state_delta, make_after_parsing_state_delta, make_body_parser, finalize_node) {
/* 000092 */ 		if (typeof macroname == 'undefined' || (macroname != null && macroname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var macroname = _NotSpecified;
/* 000092 */ 		};
/* 000092 */ 		if (typeof environmentname == 'undefined' || (environmentname != null && environmentname.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var environmentname = _NotSpecified;
/* 000092 */ 		};
/* 000092 */ 		if (typeof specials_chars == 'undefined' || (specials_chars != null && specials_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var specials_chars = _NotSpecified;
/* 000092 */ 		};
/* 000092 */ 		if (typeof make_arguments_parsing_state_delta == 'undefined' || (make_arguments_parsing_state_delta != null && make_arguments_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var make_arguments_parsing_state_delta = null;
/* 000092 */ 		};
/* 000092 */ 		if (typeof make_body_parsing_state_delta == 'undefined' || (make_body_parsing_state_delta != null && make_body_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var make_body_parsing_state_delta = null;
/* 000092 */ 		};
/* 000092 */ 		if (typeof make_after_parsing_state_delta == 'undefined' || (make_after_parsing_state_delta != null && make_after_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var make_after_parsing_state_delta = null;
/* 000092 */ 		};
/* 000092 */ 		if (typeof make_body_parser == 'undefined' || (make_body_parser != null && make_body_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var make_body_parser = null;
/* 000092 */ 		};
/* 000092 */ 		if (typeof finalize_node == 'undefined' || (finalize_node != null && finalize_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000092 */ 			var finalize_node = null;
/* 000092 */ 		};
/* 000092 */ 		var kwargs = dict ();
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'make_arguments_parsing_state_delta': var make_arguments_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'make_body_parsing_state_delta': var make_body_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'make_after_parsing_state_delta': var make_after_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'make_body_parser': var make_body_parser = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'finalize_node': var finalize_node = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 				delete kwargs.__kwargtrans__;
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000106 */ 		self.arguments_spec_list = arguments_spec_list;
/* 000108 */ 		self.spec_node_parser_type = spec_node_parser_type;
/* 000109 */ 		if (__t__ (macroname !== _NotSpecified)) {
/* 000110 */ 			self.macroname = macroname;
/* 000110 */ 		}
/* 000111 */ 		if (__t__ (environmentname !== _NotSpecified)) {
/* 000112 */ 			self.environmentname = environmentname;
/* 000112 */ 		}
/* 000113 */ 		if (__t__ (specials_chars !== _NotSpecified)) {
/* 000114 */ 			self.specials_chars = specials_chars;
/* 000114 */ 		}
/* 000120 */ 		if (__t__ (make_arguments_parsing_state_delta !== null)) {
/* 000121 */ 			self._fn_make_arguments_parsing_state_delta = make_arguments_parsing_state_delta;
/* 000121 */ 		}
/* 000122 */ 		if (__t__ (make_body_parsing_state_delta !== null)) {
/* 000123 */ 			self._fn_make_body_parsing_state_delta = make_body_parsing_state_delta;
/* 000123 */ 		}
/* 000124 */ 		if (__t__ (make_after_parsing_state_delta !== null)) {
/* 000125 */ 			self._fn_make_after_parsing_state_delta = make_after_parsing_state_delta;
/* 000125 */ 		}
/* 000126 */ 		if (__t__ (make_body_parser !== null)) {
/* 000127 */ 			self._fn_make_body_parser = make_body_parser;
/* 000127 */ 		}
/* 000128 */ 		if (__t__ (finalize_node !== null)) {
/* 000129 */ 			self._fn_finalize_node = finalize_node;
/* 000129 */ 		}
/* 000132 */ 		var use_legacy_args_parser = __call__ (_legacy_pyltxenc2_do, null, 'CallableSpec_init_from_args_parser', self, arguments_spec_list, kwargs);
/* 000139 */ 		var body_parsing_state_delta = (function () {
/* 000139 */ 			var __accu0__ = kwargs;
/* 000139 */ 			return __call__ (__accu0__.py_pop, __accu0__, 'body_parsing_state_delta', null);
/* 000139 */ 		}) ();
/* 000152 */ 		self.body_parsing_state_delta = body_parsing_state_delta;
/* 000154 */ 		__call__ (__call__ (__super__, null, CallableSpec, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000156 */ 		if (__t__ (!__t__ ((use_legacy_args_parser)))) {
/* 000157 */ 			if (__t__ (self.arguments_spec_list)) {
/* 000158 */ 				self.arguments_parser = __call__ (LatexArgumentsParser, null, arguments_spec_list);
/* 000158 */ 			}
/* 000159 */ 			else {
/* 000160 */ 				self.arguments_parser = __call__ (LatexNoArgumentsParser, null);
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 	});},
/* 000163 */ 	get get_node_parser () {return __get__ (this, function (self, token) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000178 */ 		return (function () {
/* 000178 */ 			var __accu0__ = self;
/* 000178 */ 			return __call__ (__accu0__.spec_node_parser_type, __accu0__, token, self);
/* 000178 */ 		}) ();
/* 000178 */ 	});},
/* 000190 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000203 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_finalize_node'))) {
/* 000204 */ 			return (function () {
/* 000204 */ 				var __accu0__ = self;
/* 000204 */ 				return __call__ (__accu0__._fn_finalize_node, __accu0__, node);
/* 000204 */ 			}) ();
/* 000204 */ 		}
/* 000206 */ 		return node;
/* 000206 */ 	});},
/* 000209 */ 	get make_arguments_parsing_state_delta () {return __get__ (this, function (self, token, latex_walker) {
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000216 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_arguments_parsing_state_delta'))) {
/* 000219 */ 			return (function () {
/* 000219 */ 				var __accu0__ = self;
/* 000219 */ 				return __call__ (__accu0__._fn_make_arguments_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, latex_walker: latex_walker}));
/* 000219 */ 			}) ();
/* 000219 */ 		}
/* 000223 */ 		return null;
/* 000223 */ 	});},
/* 000225 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000245 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_body_parsing_state_delta'))) {
/* 000248 */ 			return (function () {
/* 000248 */ 				var __accu0__ = self;
/* 000248 */ 				return __call__ (__accu0__._fn_make_body_parsing_state_delta, __accu0__, __kwargtrans__ ({token: token, nodeargd: nodeargd, arg_parsing_state_delta: arg_parsing_state_delta, latex_walker: latex_walker}));
/* 000248 */ 			}) ();
/* 000248 */ 		}
/* 000256 */ 		return self.body_parsing_state_delta;
/* 000256 */ 	});},
/* 000259 */ 	get make_after_parsing_state_delta () {return __get__ (this, function (self, parsed_node, latex_walker) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'parsed_node': var parsed_node = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000275 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_after_parsing_state_delta'))) {
/* 000278 */ 			return (function () {
/* 000278 */ 				var __accu0__ = self;
/* 000278 */ 				return __call__ (__accu0__._fn_make_after_parsing_state_delta, __accu0__, __kwargtrans__ ({parsed_node: parsed_node, latex_walker: latex_walker}));
/* 000278 */ 			}) ();
/* 000278 */ 		}
/* 000282 */ 		return null;
/* 000282 */ 	});},
/* 000285 */ 	get needs_arguments () {return __get__ (this, function (self) {
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000289 */ 		var __iterable0__ = self.arguments_spec_list;
/* 000289 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000289 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000290 */ 			if (__t__ ((function () {
/* 000290 */ 				var __accu0__ = arg.spec;
/* 000290 */ 				return __call__ (__accu0__.is_required, __accu0__);
/* 000290 */ 			}) ())) {
/* 000291 */ 				return true;
/* 000291 */ 			}
/* 000291 */ 		}
/* 000292 */ 		return false;
/* 000292 */ 	});},
/* 000295 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000301 */ 		if (__t__ (__call__ (hasattr, null, self, '_fn_make_body_parser'))) {
/* 000302 */ 			return (function () {
/* 000302 */ 				var __accu0__ = self;
/* 000302 */ 				return __call__ (__accu0__._fn_make_body_parser, __accu0__, token, nodeargd, arg_parsing_state_delta);
/* 000302 */ 			}) ();
/* 000302 */ 		}
/* 000303 */ 		return __call__ (LatexEnvironmentBodyContentsParser, null, __kwargtrans__ ({environmentname: token.arg}));
/* 000303 */ 	});},
/* 000308 */ 	get __repr__ () {return __get__ (this, function (self) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000311 */ 		return __add__ (__add__ (__add__ (self.__class__.__name__, '('), (function () {
/* 000311 */ 			var __accu0__ = ', ';
/* 000311 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000311 */ 				var __accu1__ = [];
/* 000313 */ 				var __iterable0__ = (function () {
/* 000313 */ 					var __accu2__ = self.__dict__;
/* 000313 */ 					return __call__ (__accu2__.py_items, __accu2__);
/* 000313 */ 				}) ();
/* 000313 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000313 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000313 */ 					var k = __left0__ [0];
/* 000313 */ 					var v = __left0__ [1];
/* 000314 */ 					if (__t__ (__t__ (!__t__ (((function () {
/* 000314 */ 						var __accu2__ = k;
/* 000314 */ 						return __call__ (__accu2__.startswith, __accu2__, '_');
/* 000314 */ 					}) ()))) && __t__ (v !== null) && !__in__ (k, tuple (['spec_node_parser_type'])))) {
/* 000316 */ 						(function () {
/* 000316 */ 							var __accu2__ = __accu1__;
/* 000312 */ 							return __call__ (__accu2__.append, __accu2__, (function () {
/* 000312 */ 								var __accu3__ = '{}={!r}';
/* 000312 */ 								return __call__ (__accu3__.format, __accu3__, k, v);
/* 000312 */ 							}) ());
/* 000312 */ 						}) ();
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 				return __accu1__;
/* 000312 */ 			}) ());
/* 000312 */ 		}) ()), ')');
/* 000312 */ 	});}
/* 000312 */ });
/* 000323 */ export var MacroSpec =  __class__ ('MacroSpec', [CallableSpec], {
/* 000323 */ 	__module__: __name__,
/* 000351 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000351 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000351 */ 			var arguments_spec_list = null;
/* 000351 */ 		};
/* 000351 */ 		var kwargs = dict ();
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 				delete kwargs.__kwargtrans__;
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		__call__ (__call__ (__super__, null, MacroSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000352 */ 	});}
/* 000352 */ });
/* 000369 */ export var EnvironmentSpec =  __class__ ('EnvironmentSpec', [CallableSpec], {
/* 000369 */ 	__module__: __name__,
/* 000427 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000427 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000427 */ 			var arguments_spec_list = null;
/* 000427 */ 		};
/* 000427 */ 		var kwargs = dict ();
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 				delete kwargs.__kwargtrans__;
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000429 */ 		__call__ (__call__ (__super__, null, EnvironmentSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000429 */ 	});}
/* 000429 */ });
/* 000455 */ export var SpecialsSpec =  __class__ ('SpecialsSpec', [CallableSpec], {
/* 000455 */ 	__module__: __name__,
/* 000480 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000480 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000480 */ 			var arguments_spec_list = null;
/* 000480 */ 		};
/* 000480 */ 		var kwargs = dict ();
/* 000480 */ 		if (arguments.length) {
/* 000480 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000480 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000480 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000480 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000480 */ 					switch (__attrib0__) {
/* 000480 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 				delete kwargs.__kwargtrans__;
/* 000480 */ 			}
/* 000480 */ 		}
/* 000480 */ 		else {
/* 000480 */ 		}
/* 000481 */ 		__call__ (__call__ (__super__, null, SpecialsSpec, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000481 */ 	});}
/* 000481 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._specclasses.map