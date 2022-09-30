/* 000001 */ // Transcrypt'ed from Python, 2022-09-30 23:10:29
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {LatexArgumentSpec, ParsedArguments, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes.js';
/* 000039 */ import {LatexParserBase, get_standard_argument_parser} from './pylatexenc.latexnodes.parsers.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {LatexParserBase, LatexArgumentSpec, get_updated_parsing_state_from_delta, get_standard_argument_parser, ParsedArguments};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._argumentsparser';
/* 000037 */ export var logger = (function () {
/* 000037 */ 	var __accu0__ = logging;
/* 000037 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000037 */ }) ();
/* 000049 */ export var _basestring = str;
/* 000065 */ export var LatexNoArgumentsParser =  __class__ ('LatexNoArgumentsParser', [LatexParserBase], {
/* 000065 */ 	__module__: __name__,
/* 000077 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000077 */ 		var kwargs = dict ();
/* 000077 */ 		if (arguments.length) {
/* 000077 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000077 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000077 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000077 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000077 */ 					switch (__attrib0__) {
/* 000077 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000077 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000077 */ 					}
/* 000077 */ 				}
/* 000077 */ 				delete kwargs.__kwargtrans__;
/* 000077 */ 			}
/* 000077 */ 		}
/* 000077 */ 		else {
/* 000077 */ 		}
/* 000079 */ 		var parsed = __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: [], argnlist: []}));
/* 000086 */ 		return tuple ([parsed, null]);
/* 000086 */ 	});},
/* 000088 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000089 */ 		return self.__class__ === other.__class__;
/* 000089 */ 	});}
/* 000089 */ });
/* 000096 */ export var LatexArgumentsParser =  __class__ ('LatexArgumentsParser', [LatexParserBase], {
/* 000096 */ 	__module__: __name__,
/* 000121 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list) {
/* 000121 */ 		var kwargs = dict ();
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 				delete kwargs.__kwargtrans__;
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000125 */ 		__call__ (__call__ (__super__, null, LatexArgumentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000127 */ 		if (__t__ (arguments_spec_list === null)) {
/* 000128 */ 			var arguments_spec_list = [];
/* 000128 */ 		}
/* 000130 */ 		self.arguments_spec_list = (function () {
/* 000130 */ 			var __accu0__ = [];
/* 000130 */ 			var __iterable0__ = arguments_spec_list;
/* 000130 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000132 */ 				var arg = __getitem__ (__iterable0__, __index0__);
/* 000132 */ 				(function () {
/* 000132 */ 					var __accu1__ = __accu0__;
/* 000131 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (!__t__ ((__call__ (isinstance, null, arg, LatexArgumentSpec)))) ? __call__ (LatexArgumentSpec, null, arg) : arg));
/* 000131 */ 				}) ();
/* 000131 */ 			}
/* 000131 */ 			return __accu0__;
/* 000131 */ 		}) ();
/* 000131 */ 	});},
/* 000143 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000143 */ 		var kwargs = dict ();
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 				delete kwargs.__kwargtrans__;
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000145 */ 		var argnlist = [];
/* 000151 */ 		var __iterable0__ = __call__ (enumerate, null, self.arguments_spec_list);
/* 000151 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000151 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000151 */ 			var argj = __left0__ [0];
/* 000151 */ 			var arg = __left0__ [1];
/* 000153 */ 			// pass;
/* 000157 */ 			var peeked_token = (function () {
/* 000157 */ 				var __accu0__ = token_reader;
/* 000157 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000157 */ 			}) ();
/* 000159 */ 			var arg_node_parser = arg.parser;
/* 000161 */ 			if (__t__ (__call__ (isinstance, null, arg_node_parser, _basestring))) {
/* 000162 */ 				var arg_node_parser = __call__ (get_standard_argument_parser, null, arg_node_parser);
/* 000162 */ 			}
/* 000164 */ 			var arg_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, arg.parsing_state_delta, latex_walker);
/* 000170 */ 			// pass;
/* 000175 */ 			var __left0__ = (function () {
/* 000175 */ 				var __accu0__ = latex_walker;
/* 000180 */ 				return __call__ (__accu0__.parse_content, __accu0__, arg_node_parser, token_reader, arg_parsing_state, __kwargtrans__ ({open_context: tuple ([(function () {
/* 000180 */ 					var __accu1__ = 'Argument {}';
/* 000180 */ 					return __call__ (__accu1__.format, __accu1__, argj);
/* 000180 */ 				}) (), peeked_token])}));
/* 000180 */ 			}) ();
/* 000180 */ 			var argnodes = __left0__ [0];
/* 000180 */ 			var parsing_state_delta = __left0__ [1];
/* 000184 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000185 */ 				(function () {
/* 000185 */ 					var __accu0__ = logger;
/* 000185 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing state changes information (%r) ignored in arguments!', parsing_state_delta);
/* 000185 */ 				}) ();
/* 000185 */ 			}
/* 000189 */ 			(function () {
/* 000189 */ 				var __accu0__ = argnlist;
/* 000189 */ 				return __call__ (__accu0__.append, __accu0__, argnodes);
/* 000189 */ 			}) ();
/* 000189 */ 		}
/* 000203 */ 		var parsed = __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: argnlist}));
/* 000210 */ 		// pass;
/* 000214 */ 		return tuple ([parsed, null]);
/* 000214 */ 	});},
/* 000217 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000218 */ 		return __t__ (self.__class__ === other.__class__) && __eq__ (self.arguments_spec_list, other.arguments_spec_list);
/* 000218 */ 	});}
/* 000218 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._argumentsparser.map