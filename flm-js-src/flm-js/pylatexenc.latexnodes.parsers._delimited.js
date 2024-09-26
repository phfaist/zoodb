/* 000001 */ // Transcrypt'ed from Python, 2024-09-26 21:06:57
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000049 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000048 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {ParsingStateDeltaReplaceParsingState, get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerParseError, format_pos, nodes, to_str, LatexWalkerLocatedErrorFormatter, LatexWalkerTokenParseError, LatexWalkerLocatedError, LatexWalkerNodesParseError, get_updated_parsing_state_from_delta, LatexWalkerEndOfStream, LatexParserBase, __all__, ParsingStateDeltaReplaceParsingState, _unicode_from_str, LatexGeneralNodesParser, LatexWalkerError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._delimited';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000054 */ export var _basestring = str;
/* 000071 */ export var LatexDelimitedExpressionParserOpeningDelimiterNotFound =  __class__ ('LatexDelimitedExpressionParserOpeningDelimiterNotFound', [Exception], {
/* 000071 */ 	__module__: __name__,
/* 000081 */ 	get __init__ () {return __get__ (this, function (self, first_tokens, msg) {
/* 000081 */ 		var kwargs = dict ();
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'first_tokens': var first_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 				delete kwargs.__kwargtrans__;
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000082 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserOpeningDelimiterNotFound, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000083 */ 		self.first_tokens = first_tokens;
/* 000084 */ 		self.msg = msg;
/* 000084 */ 	});}
/* 000084 */ });
/* 000090 */ export var LatexDelimitedExpressionParserInfo =  __class__ ('LatexDelimitedExpressionParserInfo', [object], {
/* 000090 */ 	__module__: __name__,
/* 000261 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000271 */ 		return parsing_state;
/* 000271 */ 	});},
/* 000275 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000283 */ 		return [];
/* 000283 */ 	});},
/* 000287 */ 	get parse_initial () {return __getcm__ (this, function (cls, delimiters, allow_pre_space, latex_walker, token_reader, group_parsing_state, delimited_expression_parser) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000328 */ 		var first_token = (function () {
/* 000328 */ 			var __accu0__ = token_reader;
/* 000328 */ 			return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: group_parsing_state}));
/* 000328 */ 		}) ();
/* 000330 */ 		var ok = true;
/* 000331 */ 		if (__t__ (__t__ (!__t__ ((allow_pre_space))) && first_token.pre_space)) {
/* 000332 */ 			var ok = false;
/* 000332 */ 		}
/* 000333 */ 		else if (__t__ (!__t__ (((function () {
/* 000333 */ 			var __accu0__ = cls;
/* 000333 */ 			return __call__ (__accu0__.is_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, first_token: first_token, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000333 */ 		}) ())))) {
/* 000340 */ 			var ok = false;
/* 000340 */ 		}
/* 000342 */ 		if (__t__ (!__t__ ((ok)))) {
/* 000347 */ 			var acceptable_opening_delimiters = (function () {
/* 000347 */ 				var __accu0__ = cls;
/* 000347 */ 				return __call__ (__accu0__.get_acceptable_open_delimiter_list, __accu0__, __kwargtrans__ ({delimiters: delimiters, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000347 */ 			}) ();
/* 000353 */ 			if (__t__ (!__t__ ((acceptable_opening_delimiters)))) {
/* 000354 */ 				var acceptable_delimiters_msg = '??';
/* 000354 */ 			}
/* 000355 */ 			else {
/* 000356 */ 				var acceptable_delimiters_msg = (function () {
/* 000356 */ 					var __accu0__ = ', ';
/* 000356 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000356 */ 						var __accu1__ = [];
/* 000356 */ 						var __iterable0__ = acceptable_opening_delimiters;
/* 000356 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000358 */ 							var od = __getitem__ (__iterable0__, __index0__);
/* 000358 */ 							(function () {
/* 000358 */ 								var __accu2__ = __accu1__;
/* 000357 */ 								return __call__ (__accu2__.append, __accu2__, (function () {
/* 000357 */ 									var __accu3__ = '‘{}’';
/* 000357 */ 									return __call__ (__accu3__.format, __accu3__, od);
/* 000357 */ 								}) ());
/* 000357 */ 							}) ();
/* 000357 */ 						}
/* 000357 */ 						return __accu1__;
/* 000357 */ 					}) ());
/* 000357 */ 				}) ();
/* 000357 */ 			}
/* 000362 */ 			var __except0__ = __call__ (LatexDelimitedExpressionParserOpeningDelimiterNotFound, null, __kwargtrans__ ({msg: (function () {
/* 000362 */ 				var __accu0__ = 'Expected an opening LaTeX delimiter ({}), got {}/‘{}’{}';
/* 000362 */ 				return __call__ (__accu0__.format, __accu0__, acceptable_delimiters_msg, first_token.tok, first_token.arg, (__t__ (first_token.pre_space) ? ' with leading whitespace' : ''));
/* 000362 */ 			}) (), first_tokens: [first_token]}));
/* 000362 */ 			__except0__.__cause__ = null;
/* 000362 */ 			throw __except0__;
/* 000362 */ 		}
/* 000371 */ 		return [first_token];
/* 000371 */ 	});},
/* 000375 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000383 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement is_opening_delimiter()');
/* 000383 */ 		__except0__.__cause__ = null;
/* 000383 */ 		throw __except0__;
/* 000383 */ 	});},
/* 000387 */ 	get check_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, parsed_opening_delimiter, latex_walker) {
/* 000387 */ 		if (arguments.length) {
/* 000387 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 					switch (__attrib0__) {
/* 000387 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'parsed_opening_delimiter': var parsed_opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 		}
/* 000387 */ 		else {
/* 000387 */ 		}
/* 000403 */ 		if (__t__ (delimiters === null)) {
/* 000404 */ 			return true;
/* 000404 */ 		}
/* 000406 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000407 */ 			var open_delim = delimiters;
/* 000407 */ 		}
/* 000408 */ 		else {
/* 000409 */ 			var open_delim = __getitem__ (delimiters, 0);
/* 000409 */ 		}
/* 000410 */ 		if (__t__ (__ne__ (parsed_opening_delimiter, open_delim))) {
/* 000411 */ 			return false;
/* 000411 */ 		}
/* 000412 */ 		return true;
/* 000412 */ 	});},
/* 000416 */ 	get __init__ () {return __get__ (this, function (self, delimited_expression_parser, opening_delimiter_tokens, group_parsing_state, parsing_state, delimiters, latex_walker) {
/* 000416 */ 		if (arguments.length) {
/* 000416 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 					switch (__attrib0__) {
/* 000416 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'opening_delimiter_tokens': var opening_delimiter_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 		}
/* 000416 */ 		else {
/* 000416 */ 		}
/* 000418 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserInfo, '__init__'), null, self);
/* 000421 */ 		self.delimited_expression_parser = delimited_expression_parser;
/* 000422 */ 		self.opening_delimiter_tokens = opening_delimiter_tokens;
/* 000423 */ 		if (__t__ (opening_delimiter_tokens)) {
/* 000424 */ 			self.first_token = __getitem__ (opening_delimiter_tokens, 0);
/* 000424 */ 		}
/* 000425 */ 		else {
/* 000426 */ 			self.first_token = null;
/* 000426 */ 		}
/* 000427 */ 		self.group_parsing_state = group_parsing_state;
/* 000428 */ 		self.parsing_state = parsing_state;
/* 000429 */ 		self.delimiters = delimiters;
/* 000430 */ 		self.latex_walker = latex_walker;
/* 000432 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000433 */ 		self.child_parsing_state_delta = null;
/* 000434 */ 		self.parsed_delimiters = tuple ([null, null]);
/* 000434 */ 	});},
/* 000436 */ 	get initialize () {return __get__ (this, function (self) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000444 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000445 */ 		self.child_parsing_state_delta = null;
/* 000446 */ 		self.parsed_delimiters = (function () {
/* 000446 */ 			var __accu0__ = self;
/* 000446 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000446 */ 		}) ();
/* 000446 */ 	});},
/* 000448 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000453 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement stop_token_condition()');
/* 000453 */ 		__except0__.__cause__ = null;
/* 000453 */ 		throw __except0__;
/* 000453 */ 	});},
/* 000455 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000455 */ 		if (arguments.length) {
/* 000455 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000455 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000455 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000455 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000455 */ 					switch (__attrib0__) {
/* 000455 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000455 */ 					}
/* 000455 */ 				}
/* 000455 */ 			}
/* 000455 */ 		}
/* 000455 */ 		else {
/* 000455 */ 		}
/* 000462 */ 		(function () {
/* 000462 */ 			var __accu0__ = token_reader;
/* 000462 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000462 */ 		}) ();
/* 000463 */ 		// pass;
/* 000463 */ 	});},
/* 000470 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class, token) {
/* 000470 */ 		if (arguments.length) {
/* 000470 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 					switch (__attrib0__) {
/* 000470 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 		}
/* 000470 */ 		else {
/* 000470 */ 		}
/* 000484 */ 		if (__t__ (self.child_parsing_state_delta !== null)) {
/* 000485 */ 			// pass;
/* 000489 */ 			return __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, self.child_parsing_state_delta, self.latex_walker);
/* 000489 */ 		}
/* 000495 */ 		// pass;
/* 000498 */ 		return parsing_state;
/* 000498 */ 	});},
/* 000501 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000501 */ 		if (arguments.length) {
/* 000501 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000501 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000501 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000501 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000501 */ 					switch (__attrib0__) {
/* 000501 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000501 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000501 */ 					}
/* 000501 */ 				}
/* 000501 */ 			}
/* 000501 */ 		}
/* 000501 */ 		else {
/* 000501 */ 		}
/* 000511 */ 		return opening_delimiter;
/* 000511 */ 	});},
/* 000514 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000514 */ 		if (arguments.length) {
/* 000514 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000514 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000514 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000514 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000514 */ 					switch (__attrib0__) {
/* 000514 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000514 */ 					}
/* 000514 */ 				}
/* 000514 */ 			}
/* 000514 */ 		}
/* 000514 */ 		else {
/* 000514 */ 		}
/* 000549 */ 		var first_token = self.first_token;
/* 000550 */ 		var delimiters = self.delimiters;
/* 000552 */ 		if (__t__ (delimiters === null)) {
/* 000553 */ 			var delimiters = first_token.arg;
/* 000553 */ 		}
/* 000555 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000556 */ 			var opening_delimiter = delimiters;
/* 000557 */ 			var closing_delimiter = (function () {
/* 000557 */ 				var __accu0__ = self;
/* 000557 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000557 */ 			}) ();
/* 000558 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000558 */ 		}
/* 000560 */ 		return delimiters;
/* 000560 */ 	});},
/* 000562 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000577 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000578 */ 			var expected_matching = (function () {
/* 000578 */ 				var __accu0__ = 'matching ‘{}’';
/* 000578 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000578 */ 			}) ();
/* 000578 */ 		}
/* 000579 */ 		else {
/* 000580 */ 			var expected_matching = 'matching closing delimiter';
/* 000580 */ 		}
/* 000587 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000587 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000587 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000587 */ 		}) ()}));
/* 000587 */ 	});},
/* 000590 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000597 */ 		return tuple ([(function () {
/* 000597 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000597 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000597 */ 		}) (), self.first_token]);
/* 000597 */ 	});},
/* 000602 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000602 */ 		if (arguments.length) {
/* 000602 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000602 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000602 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000602 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000602 */ 					switch (__attrib0__) {
/* 000602 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000602 */ 					}
/* 000602 */ 				}
/* 000602 */ 			}
/* 000602 */ 		}
/* 000602 */ 		else {
/* 000602 */ 		}
/* 000615 */ 		var pos_end = (function () {
/* 000615 */ 			var __accu0__ = token_reader;
/* 000615 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000615 */ 		}) ();
/* 000617 */ 		var group_node = (function () {
/* 000617 */ 			var __accu0__ = latex_walker;
/* 000617 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000617 */ 		}) ();
/* 000626 */ 		return tuple ([group_node, parsing_state_delta]);
/* 000626 */ 	});}
/* 000626 */ });
/* 000636 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000636 */ 	__module__: __name__,
/* 000698 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000698 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000698 */ 			var optional = false;
/* 000698 */ 		};
/* 000698 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000698 */ 			var allow_pre_space = false;
/* 000698 */ 		};
/* 000698 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000698 */ 			var discard_parsing_state_delta = true;
/* 000698 */ 		};
/* 000698 */ 		var kwargs = dict ();
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 				delete kwargs.__kwargtrans__;
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000705 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000706 */ 		self.delimiters = delimiters;
/* 000707 */ 		self.optional = optional;
/* 000708 */ 		self.allow_pre_space = allow_pre_space;
/* 000717 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000719 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000719 */ 	});},
/* 000722 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000722 */ 		if (arguments.length) {
/* 000722 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000722 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000722 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000722 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000722 */ 					switch (__attrib0__) {
/* 000722 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000722 */ 					}
/* 000722 */ 				}
/* 000722 */ 			}
/* 000722 */ 		}
/* 000722 */ 		else {
/* 000722 */ 		}
/* 000723 */ 		return self.optional;
/* 000723 */ 	});},
/* 000726 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000726 */ 		var kwargs = dict ();
/* 000726 */ 		if (arguments.length) {
/* 000726 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000726 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000726 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000726 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000726 */ 					switch (__attrib0__) {
/* 000726 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000726 */ 					}
/* 000726 */ 				}
/* 000726 */ 				delete kwargs.__kwargtrans__;
/* 000726 */ 			}
/* 000726 */ 		}
/* 000726 */ 		else {
/* 000726 */ 		}
/* 000729 */ 		var group_parsing_state = (function () {
/* 000729 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000729 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000729 */ 		}) ();
/* 000736 */ 		var opening_delimiter_tokens = null;
/* 000738 */ 		try {
/* 000740 */ 			var opening_delimiter_tokens = (function () {
/* 000740 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000740 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000740 */ 			}) ();
/* 000740 */ 		}
/* 000740 */ 		catch (__except0__) {
/* 000740 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000740 */ 				var e = __except0__;
/* 000750 */ 				var recovery_token = null;
/* 000751 */ 				if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000752 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000752 */ 				}
/* 000754 */ 				if (__t__ (self.optional)) {
/* 000756 */ 					if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000757 */ 						(function () {
/* 000757 */ 							var __accu0__ = token_reader;
/* 000757 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000757 */ 						}) ();
/* 000757 */ 					}
/* 000758 */ 					return tuple ([null, null]);
/* 000758 */ 				}
/* 000760 */ 				var pos = null;
/* 000761 */ 				if (__t__ (recovery_token !== null)) {
/* 000762 */ 					var pos = recovery_token.pos;
/* 000762 */ 				}
/* 000768 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: pos, recovery_nodes: (function () {
/* 000768 */ 					var __accu0__ = latex_walker;
/* 000768 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000768 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000768 */ 				__except1__.__cause__ = null;
/* 000768 */ 				throw __except1__;
/* 000768 */ 			}
/* 000768 */ 			else {
/* 000768 */ 				throw __except0__;
/* 000768 */ 			}
/* 000768 */ 		}
/* 000782 */ 		var contents_parser_info = (function () {
/* 000782 */ 			var __accu0__ = self;
/* 000782 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000782 */ 		}) ();
/* 000791 */ 		(function () {
/* 000791 */ 			var __accu0__ = contents_parser_info;
/* 000791 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000791 */ 		}) ();
/* 000794 */ 		var contents_parser = (function () {
/* 000794 */ 			var __accu0__ = contents_parser_info;
/* 000794 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000794 */ 		}) ();
/* 000799 */ 		var __left0__ = (function () {
/* 000799 */ 			var __accu0__ = latex_walker;
/* 000803 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000803 */ 				var __accu1__ = contents_parser_info;
/* 000803 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000803 */ 			}) ()}));
/* 000803 */ 		}) ();
/* 000803 */ 		var nodelist = __left0__ [0];
/* 000803 */ 		var parsing_state_delta = __left0__ [1];
/* 000808 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000809 */ 			// pass;
/* 000813 */ 			var parsing_state_delta = null;
/* 000813 */ 		}
/* 000816 */ 		var __left0__ = (function () {
/* 000816 */ 			var __accu0__ = contents_parser_info;
/* 000816 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000816 */ 		}) ();
/* 000816 */ 		var groupnode = __left0__ [0];
/* 000816 */ 		var parsing_state_delta = __left0__ [1];
/* 000823 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000823 */ 	});}
/* 000823 */ });
/* 000833 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000833 */ 	__module__: __name__,
/* 000840 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000840 */ 		var kwargs = dict ();
/* 000840 */ 		if (arguments.length) {
/* 000840 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000840 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000840 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000840 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000840 */ 					switch (__attrib0__) {
/* 000840 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000840 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000840 */ 					}
/* 000840 */ 				}
/* 000840 */ 				delete kwargs.__kwargtrans__;
/* 000840 */ 			}
/* 000840 */ 		}
/* 000840 */ 		else {
/* 000840 */ 		}
/* 000866 */ 		if (__t__ (delimiters === null)) {
/* 000867 */ 			return parsing_state;
/* 000867 */ 		}
/* 000869 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000870 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000872 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000872 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000872 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000872 */ 				}) ());
/* 000872 */ 				__except0__.__cause__ = null;
/* 000872 */ 				throw __except0__;
/* 000872 */ 			}
/* 000875 */ 			return parsing_state;
/* 000875 */ 		}
/* 000877 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000882 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000882 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000882 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000883 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000885 */ 				return parsing_state;
/* 000885 */ 			}
/* 000885 */ 		}
/* 000888 */ 		return (function () {
/* 000888 */ 			var __accu0__ = parsing_state;
/* 000888 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000888 */ 		}) ();
/* 000888 */ 	});},
/* 000895 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000895 */ 		var kwargs = dict ();
/* 000895 */ 		if (arguments.length) {
/* 000895 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000895 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000895 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000895 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000895 */ 					switch (__attrib0__) {
/* 000895 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000895 */ 					}
/* 000895 */ 				}
/* 000895 */ 				delete kwargs.__kwargtrans__;
/* 000895 */ 			}
/* 000895 */ 		}
/* 000895 */ 		else {
/* 000895 */ 		}
/* 000901 */ 		if (__t__ (delimiters !== null)) {
/* 000902 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000903 */ 				return [delimiters];
/* 000903 */ 			}
/* 000904 */ 			else {
/* 000905 */ 				return [__getitem__ (delimiters, 0)];
/* 000905 */ 			}
/* 000905 */ 		}
/* 000907 */ 		return (function () {
/* 000907 */ 			var __accu0__ = [];
/* 000907 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000907 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000909 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000909 */ 				var od = __left0__ [0];
/* 000909 */ 				var cd = __left0__ [1];
/* 000909 */ 				(function () {
/* 000909 */ 					var __accu1__ = __accu0__;
/* 000909 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000909 */ 				}) ();
/* 000909 */ 			}
/* 000909 */ 			return __accu0__;
/* 000909 */ 		}) ();
/* 000909 */ 	});},
/* 000913 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000913 */ 		var kwargs = dict ();
/* 000913 */ 		if (arguments.length) {
/* 000913 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000913 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000913 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000913 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000913 */ 					switch (__attrib0__) {
/* 000913 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000913 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000913 */ 					}
/* 000913 */ 				}
/* 000913 */ 				delete kwargs.__kwargtrans__;
/* 000913 */ 			}
/* 000913 */ 		}
/* 000913 */ 		else {
/* 000913 */ 		}
/* 000916 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000917 */ 			return false;
/* 000917 */ 		}
/* 000919 */ 		if (__t__ (!__t__ (((function () {
/* 000919 */ 			var __accu0__ = cls;
/* 000919 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000919 */ 		}) ())))) {
/* 000922 */ 			return false;
/* 000922 */ 		}
/* 000924 */ 		return true;
/* 000924 */ 	});},
/* 000930 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000930 */ 		if (arguments.length) {
/* 000930 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000930 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000930 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000930 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000930 */ 					switch (__attrib0__) {
/* 000930 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000930 */ 					}
/* 000930 */ 				}
/* 000930 */ 			}
/* 000930 */ 		}
/* 000930 */ 		else {
/* 000930 */ 		}
/* 000931 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000932 */ 			// pass;
/* 000938 */ 			return true;
/* 000938 */ 		}
/* 000939 */ 		return false;
/* 000939 */ 	});},
/* 000942 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000942 */ 		if (arguments.length) {
/* 000942 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000942 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000942 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000942 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000942 */ 					switch (__attrib0__) {
/* 000942 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000942 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000942 */ 					}
/* 000942 */ 				}
/* 000942 */ 			}
/* 000942 */ 		}
/* 000942 */ 		else {
/* 000942 */ 		}
/* 000950 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000950 */ 	});},
/* 000953 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class, token) {
/* 000953 */ 		if (arguments.length) {
/* 000953 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 					switch (__attrib0__) {
/* 000953 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 					}
/* 000953 */ 				}
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 		else {
/* 000953 */ 		}
/* 000959 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_open')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 0)))) {
/* 000961 */ 			return self.contents_parsing_state;
/* 000961 */ 		}
/* 000964 */ 		return self.parsing_state;
/* 000964 */ 	});}
/* 000964 */ });
/* 000968 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000968 */ 	__module__: __name__,
/* 000987 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000987 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000987 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000987 */ 		};
/* 000987 */ 		var kwargs = dict ();
/* 000987 */ 		if (arguments.length) {
/* 000987 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000987 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000987 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000987 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000987 */ 					switch (__attrib0__) {
/* 000987 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000987 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000987 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000987 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000987 */ 					}
/* 000987 */ 				}
/* 000987 */ 				delete kwargs.__kwargtrans__;
/* 000987 */ 			}
/* 000987 */ 		}
/* 000987 */ 		else {
/* 000987 */ 		}
/* 000991 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000991 */ 	});}
/* 000991 */ });
/* 001003 */ export var _default_delimiter_multi_delim_list = tuple ([tuple (['{', '}']), tuple (['[', ']']), tuple (['(', ')']), tuple (['<', '>'])]);
/* 001011 */ export var LatexDelimitedMultiDelimGroupParserInfo =  __class__ ('LatexDelimitedMultiDelimGroupParserInfo', [LatexDelimitedGroupParserInfo], {
/* 001011 */ 	__module__: __name__,
/* 001015 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 001015 */ 		var kwargs = dict ();
/* 001015 */ 		if (arguments.length) {
/* 001015 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001015 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001015 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001015 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001015 */ 					switch (__attrib0__) {
/* 001015 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 001015 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 001015 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 001015 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 001015 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 001015 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001015 */ 					}
/* 001015 */ 				}
/* 001015 */ 				delete kwargs.__kwargtrans__;
/* 001015 */ 			}
/* 001015 */ 		}
/* 001015 */ 		else {
/* 001015 */ 		}
/* 001015 */ 		assert (delimiters === null);
/* 001019 */ 		var delimiters_list = delimited_expression_parser.delimiters_list;
/* 001021 */ 		return (function () {
/* 001021 */ 			var __accu0__ = parsing_state;
/* 001021 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: delimiters_list}));
/* 001021 */ 		}) ();
/* 001021 */ 	});},
/* 001025 */ 	get initialize () {return __get__ (this, function (self) {
/* 001025 */ 		if (arguments.length) {
/* 001025 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001025 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001025 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001025 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001025 */ 					switch (__attrib0__) {
/* 001025 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001025 */ 					}
/* 001025 */ 				}
/* 001025 */ 			}
/* 001025 */ 		}
/* 001025 */ 		else {
/* 001025 */ 		}
/* 001026 */ 		__call__ (__call__ (__super__, null, LatexDelimitedMultiDelimGroupParserInfo, 'initialize'), null, self);
/* 001031 */ 		var contents_delimiters_list = __call__ (list, null, self.parsing_state.latex_group_delimiters);
/* 001033 */ 		var parsed_delimiters = self.parsed_delimiters;
/* 001034 */ 		var parsed_open_delim = __getitem__ (parsed_delimiters, 0);
/* 001035 */ 		var already_has_relevant_open_delim = false;
/* 001036 */ 		var __iterable0__ = contents_delimiters_list;
/* 001036 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001036 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001036 */ 			var od = __left0__ [0];
/* 001036 */ 			var cd = __left0__ [1];
/* 001037 */ 			if (__t__ (__eq__ (parsed_open_delim, od))) {
/* 001040 */ 				var already_has_relevant_open_delim = true;
/* 001040 */ 			}
/* 001040 */ 		}
/* 001041 */ 		if (__t__ (!__t__ ((already_has_relevant_open_delim)))) {
/* 001042 */ 			(function () {
/* 001042 */ 				var __accu0__ = contents_delimiters_list;
/* 001042 */ 				return __call__ (__accu0__.append, __accu0__, parsed_delimiters);
/* 001042 */ 			}) ();
/* 001042 */ 		}
/* 001044 */ 		self.contents_parsing_state = (function () {
/* 001044 */ 			var __accu0__ = self.parsing_state;
/* 001044 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: contents_delimiters_list}));
/* 001044 */ 		}) ();
/* 001044 */ 	});}
/* 001044 */ });
/* 001050 */ export var LatexDelimitedMultiDelimGroupParser =  __class__ ('LatexDelimitedMultiDelimGroupParser', [LatexDelimitedExpressionParser], {
/* 001050 */ 	__module__: __name__,
/* 001055 */ 	get __init__ () {return __get__ (this, function (self, delimiters_list, delimited_expression_parser_info_class) {
/* 001055 */ 		if (typeof delimiters_list == 'undefined' || (delimiters_list != null && delimiters_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 001055 */ 			var delimiters_list = _default_delimiter_multi_delim_list;
/* 001055 */ 		};
/* 001055 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 001055 */ 			var delimited_expression_parser_info_class = LatexDelimitedMultiDelimGroupParserInfo;
/* 001055 */ 		};
/* 001055 */ 		var kwargs = dict ();
/* 001055 */ 		if (arguments.length) {
/* 001055 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001055 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001055 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001055 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001055 */ 					switch (__attrib0__) {
/* 001055 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 						case 'delimiters_list': var delimiters_list = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 001055 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001055 */ 					}
/* 001055 */ 				}
/* 001055 */ 				delete kwargs.__kwargtrans__;
/* 001055 */ 			}
/* 001055 */ 		}
/* 001055 */ 		else {
/* 001055 */ 		}
/* 001059 */ 		__call__ (__call__ (__super__, null, LatexDelimitedMultiDelimGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: null, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 001064 */ 		self.delimiters_list = delimiters_list;
/* 001064 */ 	});}
/* 001064 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map