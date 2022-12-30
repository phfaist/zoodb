/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:10:09
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000048 */ import {LatexDelimitedExpressionParser, LatexDelimitedExpressionParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000043 */ import {ParsingStateDeltaEnterMathMode, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, LatexDelimitedExpressionParserInfo, LatexWalkerParseErrorFormatter, LatexWalkerEndOfStream, LatexWalkerError, __all__, format_pos, to_str, get_updated_parsing_state_from_delta, LatexWalkerParseError, LatexDelimitedExpressionParser, nodes, LatexWalkerNodesParseError, ParsingStateDeltaEnterMathMode, _unicode_from_str};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._math';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000056 */ export var _basestring = str;
/* 000069 */ export var LatexMathParserInfo =  __class__ ('LatexMathParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000069 */ 	__module__: __name__,
/* 000076 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000076 */ 		var kwargs = dict ();
/* 000076 */ 		if (arguments.length) {
/* 000076 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 					switch (__attrib0__) {
/* 000076 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000076 */ 					}
/* 000076 */ 				}
/* 000076 */ 				delete kwargs.__kwargtrans__;
/* 000076 */ 			}
/* 000076 */ 		}
/* 000076 */ 		else {
/* 000076 */ 		}
/* 000079 */ 		if (__t__ (!__in__ (first_token.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000080 */ 			return false;
/* 000080 */ 		}
/* 000082 */ 		if (__t__ (!__t__ (((function () {
/* 000082 */ 			var __accu0__ = cls;
/* 000082 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000082 */ 		}) ())))) {
/* 000087 */ 			return false;
/* 000087 */ 		}
/* 000089 */ 		return true;
/* 000089 */ 	});},
/* 000092 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000092 */ 		var kwargs = dict ();
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 				delete kwargs.__kwargtrans__;
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000095 */ 		if (__t__ (delimiters !== null)) {
/* 000096 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000097 */ 				return [delimiters];
/* 000097 */ 			}
/* 000098 */ 			else {
/* 000099 */ 				return [__getitem__ (delimiters, 0)];
/* 000099 */ 			}
/* 000099 */ 		}
/* 000101 */ 		return (function () {
/* 000101 */ 			var __accu0__ = [];
/* 000101 */ 			var __iterable0__ = __add__ (group_parsing_state.latex_inline_math_delimiters, group_parsing_state.latex_display_math_delimiters);
/* 000101 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000105 */ 				var od = __left0__ [0];
/* 000105 */ 				var cd = __left0__ [1];
/* 000103 */ 				(function () {
/* 000103 */ 					var __accu1__ = __accu0__;
/* 000103 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000103 */ 				}) ();
/* 000103 */ 			}
/* 000103 */ 			return __accu0__;
/* 000103 */ 		}) ();
/* 000103 */ 	});},
/* 000112 */ 	get initialize () {return __get__ (this, function (self) {
/* 000112 */ 		if (arguments.length) {
/* 000112 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000112 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000112 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000112 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000112 */ 					switch (__attrib0__) {
/* 000112 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000112 */ 					}
/* 000112 */ 				}
/* 000112 */ 			}
/* 000112 */ 		}
/* 000112 */ 		else {
/* 000112 */ 		}
/* 000115 */ 		self.math_mode_type = self.first_token.tok;
/* 000116 */ 		self.math_mode_delimiter = self.first_token.arg;
/* 000121 */ 		self.math_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, self.parsing_state, __call__ (ParsingStateDeltaEnterMathMode, null, __kwargtrans__ ({math_mode_delimiter: self.math_mode_delimiter, trigger_token: self.first_token})), self.latex_walker);
/* 000128 */ 		self.contents_parsing_state = self.math_parsing_state;
/* 000129 */ 		self.parsed_delimiters = (function () {
/* 000129 */ 			var __accu0__ = self;
/* 000129 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000129 */ 		}) ();
/* 000129 */ 	});},
/* 000131 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		if (__t__ (__t__ (__eq__ (token.tok, self.math_mode_type)) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000133 */ 			return true;
/* 000133 */ 		}
/* 000134 */ 		return false;
/* 000134 */ 	});},
/* 000136 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000137 */ 		return __getitem__ (self.math_parsing_state._math_expecting_close_delim_info, 'close_delim');
/* 000137 */ 	});},
/* 000140 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000145 */ 		var pos_end = (function () {
/* 000145 */ 			var __accu0__ = token_reader;
/* 000145 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000145 */ 		}) ();
/* 000149 */ 		if (__t__ (__eq__ (self.math_mode_type, 'mathmode_inline'))) {
/* 000150 */ 			var displaytype = 'inline';
/* 000150 */ 		}
/* 000151 */ 		else if (__t__ (__eq__ (self.math_mode_type, 'mathmode_display'))) {
/* 000152 */ 			var displaytype = 'display';
/* 000152 */ 		}
/* 000153 */ 		else {
/* 000154 */ 			var displaytype = '<unknown>';
/* 000154 */ 		}
/* 000156 */ 		var math_node = (function () {
/* 000156 */ 			var __accu0__ = latex_walker;
/* 000156 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexMathNode, __kwargtrans__ ({displaytype: displaytype, nodelist: nodelist, parsing_state: self.parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000156 */ 		}) ();
/* 000166 */ 		return tuple ([math_node, parsing_state_delta]);
/* 000166 */ 	});}
/* 000166 */ });
/* 000171 */ export var LatexMathParser =  __class__ ('LatexMathParser', [LatexDelimitedExpressionParser], {
/* 000171 */ 	__module__: __name__,
/* 000172 */ 	get __init__ () {return __get__ (this, function (self, math_mode_delimiters) {
/* 000172 */ 		var kwargs = dict ();
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'math_mode_delimiters': var math_mode_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 				delete kwargs.__kwargtrans__;
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000175 */ 		__call__ (__call__ (__super__, null, LatexMathParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: math_mode_delimiters, discard_parsing_state_delta: false, delimited_expression_parser_info_class: LatexMathParserInfo}, kwargs)));
/* 000175 */ 	});}
/* 000175 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._math.map