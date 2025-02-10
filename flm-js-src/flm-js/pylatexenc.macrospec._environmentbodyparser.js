/* 000001 */ // Transcrypt'ed from Python, 2025-02-10 21:22:02
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000045 */ import {LatexDelimitedExpressionParser, LatexDelimitedExpressionParserInfo} from './pylatexenc.latexnodes.parsers.js';
/* 000042 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _basestring, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerNodesParseError, to_str, LatexWalkerError, LatexWalkerLocatedErrorFormatter, format_pos, get_updated_parsing_state_from_delta, LatexDelimitedExpressionParser, LatexDelimitedExpressionParserInfo, LatexWalkerParseError, __all__, LatexWalkerEndOfStream, _unicode_from_str, _basestring, LatexWalkerLocatedError, LatexWalkerTokenParseError};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._environmentbodyparser';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000052 */ export var LatexEnvironmentBodyContentsParserInfo =  __class__ ('LatexEnvironmentBodyContentsParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000052 */ 	__module__: __name__,
/* 000055 */ 	get parse_initial () {return __getcm__ (this, function (cls, delimiters, allow_pre_space, latex_walker, token_reader, group_parsing_state, delimited_expression_parser) {
/* 000055 */ 		if (arguments.length) {
/* 000055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000055 */ 					switch (__attrib0__) {
/* 000055 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000055 */ 					}
/* 000055 */ 				}
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 		else {
/* 000055 */ 		}
/* 000060 */ 		return [];
/* 000060 */ 	});},
/* 000064 */ 	get initialize () {return __get__ (this, function (self) {
/* 000064 */ 		if (arguments.length) {
/* 000064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000064 */ 					switch (__attrib0__) {
/* 000064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000064 */ 					}
/* 000064 */ 				}
/* 000064 */ 			}
/* 000064 */ 		}
/* 000064 */ 		else {
/* 000064 */ 		}
/* 000071 */ 		var contents_parsing_state_delta = (function () {
/* 000071 */ 			var __accu0__ = self.delimited_expression_parser;
/* 000071 */ 			return __call__ (__accu0__.get_contents_parsing_state_delta, __accu0__);
/* 000071 */ 		}) ();
/* 000073 */ 		self.contents_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, contents_parsing_state_delta, self.latex_walker);
/* 000082 */ 		self.child_parsing_state_delta = (function () {
/* 000082 */ 			var __accu0__ = self.delimited_expression_parser;
/* 000082 */ 			return __call__ (__accu0__.get_child_parsing_state_delta, __accu0__);
/* 000082 */ 		}) ();
/* 000085 */ 		self.parsed_delimiters = tuple ([(function () {
/* 000085 */ 			var __accu0__ = '\\begin{}{}{}';
/* 000085 */ 			return __call__ (__accu0__.format, __accu0__, '{', self.delimited_expression_parser.environmentname, '}');
/* 000086 */ 		}) (), (function () {
/* 000086 */ 			var __accu0__ = '\\end{}{}{}';
/* 000086 */ 			return __call__ (__accu0__.format, __accu0__, '{', self.delimited_expression_parser.environmentname, '}');
/* 000086 */ 		}) ()]);
/* 000089 */ 		// pass;
/* 000089 */ 	});},
/* 000100 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000103 */ 		return null;
/* 000103 */ 	});},
/* 000105 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'end_environment')) && __eq__ (token.arg, self.delimited_expression_parser.environmentname))) {
/* 000108 */ 			return true;
/* 000108 */ 		}
/* 000109 */ 		return false;
/* 000109 */ 	});},
/* 000115 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000118 */ 		if (__t__ (nodelist === null)) {
/* 000119 */ 			(function () {
/* 000119 */ 				var __accu0__ = logger;
/* 000119 */ 				return __call__ (__accu0__.warning, __accu0__, 'environment body contents parser: parsed nodelist is None');
/* 000119 */ 			}) ();
/* 000120 */ 			var nodelist = (function () {
/* 000120 */ 				var __accu0__ = latex_walker;
/* 000120 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, __kwargtrans__ ({nodelist: [], parsing_state: self.contents_parsing_state}));
/* 000120 */ 			}) ();
/* 000120 */ 		}
/* 000126 */ 		return tuple ([nodelist, parsing_state_delta]);
/* 000126 */ 	});}
/* 000126 */ });
/* 000131 */ export var LatexEnvironmentBodyContentsParser =  __class__ ('LatexEnvironmentBodyContentsParser', [LatexDelimitedExpressionParser], {
/* 000131 */ 	__module__: __name__,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self, environmentname, contents_parsing_state_delta, child_parsing_state_delta, discard_parsing_state_delta) {
/* 000174 */ 		if (typeof contents_parsing_state_delta == 'undefined' || (contents_parsing_state_delta != null && contents_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var contents_parsing_state_delta = null;
/* 000174 */ 		};
/* 000174 */ 		if (typeof child_parsing_state_delta == 'undefined' || (child_parsing_state_delta != null && child_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var child_parsing_state_delta = null;
/* 000174 */ 		};
/* 000174 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000174 */ 			var discard_parsing_state_delta = true;
/* 000174 */ 		};
/* 000174 */ 		var kwargs = dict ();
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'contents_parsing_state_delta': var contents_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'child_parsing_state_delta': var child_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 				delete kwargs.__kwargtrans__;
/* 000174 */ 			}
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 		}
/* 000180 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentBodyContentsParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: null, discard_parsing_state_delta: discard_parsing_state_delta, delimited_expression_parser_info_class: LatexEnvironmentBodyContentsParserInfo}, kwargs)));
/* 000186 */ 		self.environmentname = environmentname;
/* 000187 */ 		self.contents_parsing_state_delta = contents_parsing_state_delta;
/* 000188 */ 		self.child_parsing_state_delta = child_parsing_state_delta;
/* 000188 */ 	});},
/* 000190 */ 	get get_contents_parsing_state_delta () {return __get__ (this, function (self) {
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 		}
/* 000191 */ 		return self.contents_parsing_state_delta;
/* 000191 */ 	});},
/* 000193 */ 	get get_child_parsing_state_delta () {return __get__ (this, function (self) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000194 */ 		return self.child_parsing_state_delta;
/* 000194 */ 	});}
/* 000194 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.macrospec._environmentbodyparser.map