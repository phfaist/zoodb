/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 12:01:29
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000041 */ import {LatexArgumentSpec, ParsedArguments, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes.js';
/* 000039 */ import {LatexParserBase, get_standard_argument_parser} from './pylatexenc.latexnodes.parsers.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {LatexParserBase, get_updated_parsing_state_from_delta, LatexArgumentSpec, get_standard_argument_parser, ParsedArguments};
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
/* 000083 */ 		var parsed = __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: [], argnlist: []}));
/* 000090 */ 		return tuple ([parsed, null]);
/* 000090 */ 	});},
/* 000092 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		return self.__class__ === other.__class__;
/* 000093 */ 	});}
/* 000093 */ });
/* 000100 */ export var LatexArgumentsParser =  __class__ ('LatexArgumentsParser', [LatexParserBase], {
/* 000100 */ 	__module__: __name__,
/* 000128 */ 	get __init__ () {return __get__ (this, function (self, arguments_spec_list) {
/* 000128 */ 		var kwargs = dict ();
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 				delete kwargs.__kwargtrans__;
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000132 */ 		__call__ (__call__ (__super__, null, LatexArgumentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000134 */ 		if (__t__ (arguments_spec_list === null)) {
/* 000135 */ 			var arguments_spec_list = [];
/* 000135 */ 		}
/* 000137 */ 		self.arguments_spec_list = (function () {
/* 000137 */ 			var __accu0__ = [];
/* 000137 */ 			var __iterable0__ = arguments_spec_list;
/* 000137 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000139 */ 				var arg = __getitem__ (__iterable0__, __index0__);
/* 000139 */ 				(function () {
/* 000139 */ 					var __accu1__ = __accu0__;
/* 000138 */ 					return __call__ (__accu1__.append, __accu1__, (__t__ (!__t__ ((__call__ (isinstance, null, arg, LatexArgumentSpec)))) ? __call__ (LatexArgumentSpec, null, arg) : arg));
/* 000138 */ 				}) ();
/* 000138 */ 			}
/* 000138 */ 			return __accu0__;
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000150 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000150 */ 		var kwargs = dict ();
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 				delete kwargs.__kwargtrans__;
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000155 */ 		var argnlist = [];
/* 000161 */ 		var __iterable0__ = __call__ (enumerate, null, self.arguments_spec_list);
/* 000161 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000161 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000161 */ 			var argj = __left0__ [0];
/* 000161 */ 			var arg = __left0__ [1];
/* 000163 */ 			var arg_node_parser = arg.parser;
/* 000165 */ 			(function () {
/* 000165 */ 				var __accu0__ = logger;
/* 000165 */ 				return __call__ (__accu0__.debug, __accu0__, 'Parsing argument %d / %s', argj, arg_node_parser);
/* 000165 */ 			}) ();
/* 000167 */ 			var peeked_token = (function () {
/* 000167 */ 				var __accu0__ = token_reader;
/* 000167 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000167 */ 			}) ();
/* 000169 */ 			if (__t__ (__call__ (isinstance, null, arg_node_parser, _basestring))) {
/* 000170 */ 				var arg_node_parser = __call__ (get_standard_argument_parser, null, arg_node_parser);
/* 000170 */ 			}
/* 000172 */ 			var arg_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, arg.parsing_state_delta, latex_walker);
/* 000178 */ 			(function () {
/* 000178 */ 				var __accu0__ = logger;
/* 000178 */ 				return __call__ (__accu0__.debug, __accu0__, 'Argument %d will use parsing state = %r (delta was %r)', argj, arg_parsing_state, arg.parsing_state_delta);
/* 000178 */ 			}) ();
/* 000181 */ 			var __left0__ = (function () {
/* 000181 */ 				var __accu0__ = latex_walker;
/* 000186 */ 				return __call__ (__accu0__.parse_content, __accu0__, arg_node_parser, token_reader, arg_parsing_state, __kwargtrans__ ({open_context: tuple ([(function () {
/* 000186 */ 					var __accu1__ = 'Argument {}';
/* 000186 */ 					return __call__ (__accu1__.format, __accu1__, argj);
/* 000186 */ 				}) (), peeked_token])}));
/* 000186 */ 			}) ();
/* 000186 */ 			var argnodes = __left0__ [0];
/* 000186 */ 			var parsing_state_delta = __left0__ [1];
/* 000190 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000191 */ 				(function () {
/* 000191 */ 					var __accu0__ = logger;
/* 000191 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing state changes information (%r) ignored in arguments!', parsing_state_delta);
/* 000191 */ 				}) ();
/* 000191 */ 			}
/* 000195 */ 			(function () {
/* 000195 */ 				var __accu0__ = argnlist;
/* 000195 */ 				return __call__ (__accu0__.append, __accu0__, argnodes);
/* 000195 */ 			}) ();
/* 000195 */ 		}
/* 000209 */ 		var parsed = __call__ (ParsedArguments, null, __kwargtrans__ ({arguments_spec_list: self.arguments_spec_list, argnlist: argnlist}));
/* 000216 */ 		(function () {
/* 000216 */ 			var __accu0__ = logger;
/* 000216 */ 			return __call__ (__accu0__.debug, __accu0__, 'Parsed arguments = %r', parsed);
/* 000216 */ 		}) ();
/* 000218 */ 		return tuple ([parsed, null]);
/* 000218 */ 	});},
/* 000221 */ 	get __eq__ () {return __get__ (this, function (self, other) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'other': var other = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		return __t__ (self.__class__ === other.__class__) && __eq__ (self.arguments_spec_list, other.arguments_spec_list);
/* 000222 */ 	});}
/* 000222 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._argumentsparser.map