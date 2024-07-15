/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:38
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerError, _unicode_from_str, LatexParserBase, format_pos, get_updated_parsing_state_from_delta, to_str, __all__, nodes, LatexGeneralNodesParser, LatexWalkerNodesParseError, LatexWalkerLocatedErrorFormatter, LatexWalkerParseError, LatexWalkerTokenParseError, LatexWalkerLocatedError, LatexWalkerEndOfStream};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._delimited';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000051 */ export var _basestring = str;
/* 000068 */ export var LatexDelimitedExpressionParserOpeningDelimiterNotFound =  __class__ ('LatexDelimitedExpressionParserOpeningDelimiterNotFound', [Exception], {
/* 000068 */ 	__module__: __name__,
/* 000078 */ 	get __init__ () {return __get__ (this, function (self, first_tokens, msg) {
/* 000078 */ 		var kwargs = dict ();
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'first_tokens': var first_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'msg': var msg = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 				delete kwargs.__kwargtrans__;
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserOpeningDelimiterNotFound, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000080 */ 		self.first_tokens = first_tokens;
/* 000081 */ 		self.msg = msg;
/* 000081 */ 	});}
/* 000081 */ });
/* 000087 */ export var LatexDelimitedExpressionParserInfo =  __class__ ('LatexDelimitedExpressionParserInfo', [object], {
/* 000087 */ 	__module__: __name__,
/* 000255 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000265 */ 		return parsing_state;
/* 000265 */ 	});},
/* 000269 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000277 */ 		return [];
/* 000277 */ 	});},
/* 000281 */ 	get parse_initial () {return __getcm__ (this, function (cls, delimiters, allow_pre_space, latex_walker, token_reader, group_parsing_state, delimited_expression_parser) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000322 */ 		var first_token = (function () {
/* 000322 */ 			var __accu0__ = token_reader;
/* 000322 */ 			return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: group_parsing_state}));
/* 000322 */ 		}) ();
/* 000324 */ 		var ok = true;
/* 000325 */ 		if (__t__ (__t__ (!__t__ ((allow_pre_space))) && first_token.pre_space)) {
/* 000326 */ 			var ok = false;
/* 000326 */ 		}
/* 000327 */ 		else if (__t__ (!__t__ (((function () {
/* 000327 */ 			var __accu0__ = cls;
/* 000327 */ 			return __call__ (__accu0__.is_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, first_token: first_token, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000327 */ 		}) ())))) {
/* 000334 */ 			var ok = false;
/* 000334 */ 		}
/* 000336 */ 		if (__t__ (!__t__ ((ok)))) {
/* 000341 */ 			var acceptable_opening_delimiters = (function () {
/* 000341 */ 				var __accu0__ = cls;
/* 000341 */ 				return __call__ (__accu0__.get_acceptable_open_delimiter_list, __accu0__, __kwargtrans__ ({delimiters: delimiters, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000341 */ 			}) ();
/* 000347 */ 			if (__t__ (!__t__ ((acceptable_opening_delimiters)))) {
/* 000348 */ 				var acceptable_delimiters_msg = '??';
/* 000348 */ 			}
/* 000349 */ 			else {
/* 000350 */ 				var acceptable_delimiters_msg = (function () {
/* 000350 */ 					var __accu0__ = ', ';
/* 000350 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000350 */ 						var __accu1__ = [];
/* 000350 */ 						var __iterable0__ = acceptable_opening_delimiters;
/* 000350 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000352 */ 							var od = __getitem__ (__iterable0__, __index0__);
/* 000352 */ 							(function () {
/* 000352 */ 								var __accu2__ = __accu1__;
/* 000351 */ 								return __call__ (__accu2__.append, __accu2__, (function () {
/* 000351 */ 									var __accu3__ = '‘{}’';
/* 000351 */ 									return __call__ (__accu3__.format, __accu3__, od);
/* 000351 */ 								}) ());
/* 000351 */ 							}) ();
/* 000351 */ 						}
/* 000351 */ 						return __accu1__;
/* 000351 */ 					}) ());
/* 000351 */ 				}) ();
/* 000351 */ 			}
/* 000356 */ 			var __except0__ = __call__ (LatexDelimitedExpressionParserOpeningDelimiterNotFound, null, __kwargtrans__ ({msg: (function () {
/* 000356 */ 				var __accu0__ = 'Expected an opening LaTeX delimiter ({}), got {}/‘{}’{}';
/* 000356 */ 				return __call__ (__accu0__.format, __accu0__, acceptable_delimiters_msg, first_token.tok, first_token.arg, (__t__ (first_token.pre_space) ? ' with leading whitespace' : ''));
/* 000356 */ 			}) (), first_tokens: [first_token]}));
/* 000356 */ 			__except0__.__cause__ = null;
/* 000356 */ 			throw __except0__;
/* 000356 */ 		}
/* 000365 */ 		return [first_token];
/* 000365 */ 	});},
/* 000369 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 		}
/* 000377 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement is_opening_delimiter()');
/* 000377 */ 		__except0__.__cause__ = null;
/* 000377 */ 		throw __except0__;
/* 000377 */ 	});},
/* 000381 */ 	get check_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, parsed_opening_delimiter, latex_walker) {
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'parsed_opening_delimiter': var parsed_opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000397 */ 		if (__t__ (delimiters === null)) {
/* 000398 */ 			return true;
/* 000398 */ 		}
/* 000400 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000401 */ 			var open_delim = delimiters;
/* 000401 */ 		}
/* 000402 */ 		else {
/* 000403 */ 			var open_delim = __getitem__ (delimiters, 0);
/* 000403 */ 		}
/* 000404 */ 		if (__t__ (__ne__ (parsed_opening_delimiter, open_delim))) {
/* 000405 */ 			return false;
/* 000405 */ 		}
/* 000406 */ 		return true;
/* 000406 */ 	});},
/* 000410 */ 	get __init__ () {return __get__ (this, function (self, delimited_expression_parser, opening_delimiter_tokens, group_parsing_state, parsing_state, delimiters, latex_walker) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'opening_delimiter_tokens': var opening_delimiter_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000412 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserInfo, '__init__'), null, self);
/* 000415 */ 		self.delimited_expression_parser = delimited_expression_parser;
/* 000416 */ 		self.opening_delimiter_tokens = opening_delimiter_tokens;
/* 000417 */ 		if (__t__ (opening_delimiter_tokens)) {
/* 000418 */ 			self.first_token = __getitem__ (opening_delimiter_tokens, 0);
/* 000418 */ 		}
/* 000419 */ 		else {
/* 000420 */ 			self.first_token = null;
/* 000420 */ 		}
/* 000421 */ 		self.group_parsing_state = group_parsing_state;
/* 000422 */ 		self.parsing_state = parsing_state;
/* 000423 */ 		self.delimiters = delimiters;
/* 000424 */ 		self.latex_walker = latex_walker;
/* 000426 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000427 */ 		self.child_parsing_state_delta = null;
/* 000428 */ 		self.parsed_delimiters = tuple ([null, null]);
/* 000428 */ 	});},
/* 000430 */ 	get initialize () {return __get__ (this, function (self) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000438 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000439 */ 		self.child_parsing_state_delta = null;
/* 000440 */ 		self.parsed_delimiters = (function () {
/* 000440 */ 			var __accu0__ = self;
/* 000440 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000440 */ 		}) ();
/* 000440 */ 	});},
/* 000442 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000447 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement stop_token_condition()');
/* 000447 */ 		__except0__.__cause__ = null;
/* 000447 */ 		throw __except0__;
/* 000447 */ 	});},
/* 000449 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000456 */ 		(function () {
/* 000456 */ 			var __accu0__ = token_reader;
/* 000456 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000456 */ 		}) ();
/* 000457 */ 		// pass;
/* 000457 */ 	});},
/* 000464 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000464 */ 		if (arguments.length) {
/* 000464 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000464 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000464 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000464 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000464 */ 					switch (__attrib0__) {
/* 000464 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000464 */ 					}
/* 000464 */ 				}
/* 000464 */ 			}
/* 000464 */ 		}
/* 000464 */ 		else {
/* 000464 */ 		}
/* 000478 */ 		if (__t__ (self.child_parsing_state_delta !== null)) {
/* 000479 */ 			// pass;
/* 000483 */ 			return __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, self.child_parsing_state_delta, self.latex_walker);
/* 000483 */ 		}
/* 000489 */ 		// pass;
/* 000492 */ 		return parsing_state;
/* 000492 */ 	});},
/* 000495 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000495 */ 		if (arguments.length) {
/* 000495 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000495 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000495 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000495 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000495 */ 					switch (__attrib0__) {
/* 000495 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000495 */ 					}
/* 000495 */ 				}
/* 000495 */ 			}
/* 000495 */ 		}
/* 000495 */ 		else {
/* 000495 */ 		}
/* 000505 */ 		return opening_delimiter;
/* 000505 */ 	});},
/* 000508 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000543 */ 		var first_token = self.first_token;
/* 000544 */ 		var delimiters = self.delimiters;
/* 000546 */ 		if (__t__ (delimiters === null)) {
/* 000547 */ 			var delimiters = first_token.arg;
/* 000547 */ 		}
/* 000549 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000550 */ 			var opening_delimiter = delimiters;
/* 000551 */ 			var closing_delimiter = (function () {
/* 000551 */ 				var __accu0__ = self;
/* 000551 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000551 */ 			}) ();
/* 000552 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000552 */ 		}
/* 000554 */ 		return delimiters;
/* 000554 */ 	});},
/* 000556 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000556 */ 		if (arguments.length) {
/* 000556 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 					switch (__attrib0__) {
/* 000556 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 			}
/* 000556 */ 		}
/* 000556 */ 		else {
/* 000556 */ 		}
/* 000571 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000572 */ 			var expected_matching = (function () {
/* 000572 */ 				var __accu0__ = 'matching ‘{}’';
/* 000572 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000572 */ 			}) ();
/* 000572 */ 		}
/* 000573 */ 		else {
/* 000574 */ 			var expected_matching = 'matching closing delimiter';
/* 000574 */ 		}
/* 000581 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000581 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000581 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000581 */ 		}) ()}));
/* 000581 */ 	});},
/* 000584 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000584 */ 		if (arguments.length) {
/* 000584 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000584 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000584 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000584 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000584 */ 					switch (__attrib0__) {
/* 000584 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 					}
/* 000584 */ 				}
/* 000584 */ 			}
/* 000584 */ 		}
/* 000584 */ 		else {
/* 000584 */ 		}
/* 000591 */ 		return tuple ([(function () {
/* 000591 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000591 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000591 */ 		}) (), self.first_token]);
/* 000591 */ 	});},
/* 000596 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000596 */ 		if (arguments.length) {
/* 000596 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000596 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000596 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000596 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000596 */ 					switch (__attrib0__) {
/* 000596 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000596 */ 					}
/* 000596 */ 				}
/* 000596 */ 			}
/* 000596 */ 		}
/* 000596 */ 		else {
/* 000596 */ 		}
/* 000609 */ 		var pos_end = (function () {
/* 000609 */ 			var __accu0__ = token_reader;
/* 000609 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000609 */ 		}) ();
/* 000611 */ 		var group_node = (function () {
/* 000611 */ 			var __accu0__ = latex_walker;
/* 000611 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000611 */ 		}) ();
/* 000620 */ 		return tuple ([group_node, parsing_state_delta]);
/* 000620 */ 	});}
/* 000620 */ });
/* 000630 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000630 */ 	__module__: __name__,
/* 000692 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000692 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000692 */ 			var optional = false;
/* 000692 */ 		};
/* 000692 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000692 */ 			var allow_pre_space = false;
/* 000692 */ 		};
/* 000692 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000692 */ 			var discard_parsing_state_delta = true;
/* 000692 */ 		};
/* 000692 */ 		var kwargs = dict ();
/* 000692 */ 		if (arguments.length) {
/* 000692 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000692 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000692 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000692 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000692 */ 					switch (__attrib0__) {
/* 000692 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000692 */ 					}
/* 000692 */ 				}
/* 000692 */ 				delete kwargs.__kwargtrans__;
/* 000692 */ 			}
/* 000692 */ 		}
/* 000692 */ 		else {
/* 000692 */ 		}
/* 000699 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000700 */ 		self.delimiters = delimiters;
/* 000701 */ 		self.optional = optional;
/* 000702 */ 		self.allow_pre_space = allow_pre_space;
/* 000711 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000713 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000713 */ 	});},
/* 000716 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000716 */ 		if (arguments.length) {
/* 000716 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000716 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000716 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000716 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000716 */ 					switch (__attrib0__) {
/* 000716 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000716 */ 					}
/* 000716 */ 				}
/* 000716 */ 			}
/* 000716 */ 		}
/* 000716 */ 		else {
/* 000716 */ 		}
/* 000717 */ 		return self.optional;
/* 000717 */ 	});},
/* 000720 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000720 */ 		var kwargs = dict ();
/* 000720 */ 		if (arguments.length) {
/* 000720 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000720 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000720 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000720 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000720 */ 					switch (__attrib0__) {
/* 000720 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000720 */ 					}
/* 000720 */ 				}
/* 000720 */ 				delete kwargs.__kwargtrans__;
/* 000720 */ 			}
/* 000720 */ 		}
/* 000720 */ 		else {
/* 000720 */ 		}
/* 000723 */ 		var group_parsing_state = (function () {
/* 000723 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000723 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000723 */ 		}) ();
/* 000730 */ 		var opening_delimiter_tokens = null;
/* 000732 */ 		try {
/* 000734 */ 			var opening_delimiter_tokens = (function () {
/* 000734 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000734 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000734 */ 			}) ();
/* 000734 */ 		}
/* 000734 */ 		catch (__except0__) {
/* 000734 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000734 */ 				var e = __except0__;
/* 000744 */ 				var recovery_token = null;
/* 000745 */ 				if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000746 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000746 */ 				}
/* 000748 */ 				if (__t__ (self.optional)) {
/* 000750 */ 					if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000751 */ 						(function () {
/* 000751 */ 							var __accu0__ = token_reader;
/* 000751 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000751 */ 						}) ();
/* 000751 */ 					}
/* 000752 */ 					return tuple ([null, null]);
/* 000752 */ 				}
/* 000754 */ 				var pos = null;
/* 000755 */ 				if (__t__ (recovery_token !== null)) {
/* 000756 */ 					var pos = recovery_token.pos;
/* 000756 */ 				}
/* 000762 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: pos, recovery_nodes: (function () {
/* 000762 */ 					var __accu0__ = latex_walker;
/* 000762 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000762 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000762 */ 				__except1__.__cause__ = null;
/* 000762 */ 				throw __except1__;
/* 000762 */ 			}
/* 000762 */ 			else {
/* 000762 */ 				throw __except0__;
/* 000762 */ 			}
/* 000762 */ 		}
/* 000776 */ 		var contents_parser_info = (function () {
/* 000776 */ 			var __accu0__ = self;
/* 000776 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000776 */ 		}) ();
/* 000785 */ 		(function () {
/* 000785 */ 			var __accu0__ = contents_parser_info;
/* 000785 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000785 */ 		}) ();
/* 000788 */ 		var contents_parser = (function () {
/* 000788 */ 			var __accu0__ = contents_parser_info;
/* 000788 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000788 */ 		}) ();
/* 000793 */ 		var __left0__ = (function () {
/* 000793 */ 			var __accu0__ = latex_walker;
/* 000797 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000797 */ 				var __accu1__ = contents_parser_info;
/* 000797 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000797 */ 			}) ()}));
/* 000797 */ 		}) ();
/* 000797 */ 		var nodelist = __left0__ [0];
/* 000797 */ 		var parsing_state_delta = __left0__ [1];
/* 000802 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000803 */ 			// pass;
/* 000807 */ 			var parsing_state_delta = null;
/* 000807 */ 		}
/* 000810 */ 		var __left0__ = (function () {
/* 000810 */ 			var __accu0__ = contents_parser_info;
/* 000810 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000810 */ 		}) ();
/* 000810 */ 		var groupnode = __left0__ [0];
/* 000810 */ 		var parsing_state_delta = __left0__ [1];
/* 000817 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000817 */ 	});}
/* 000817 */ });
/* 000827 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000827 */ 	__module__: __name__,
/* 000834 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000834 */ 		var kwargs = dict ();
/* 000834 */ 		if (arguments.length) {
/* 000834 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000834 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000834 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000834 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000834 */ 					switch (__attrib0__) {
/* 000834 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000834 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000834 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000834 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000834 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000834 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000834 */ 					}
/* 000834 */ 				}
/* 000834 */ 				delete kwargs.__kwargtrans__;
/* 000834 */ 			}
/* 000834 */ 		}
/* 000834 */ 		else {
/* 000834 */ 		}
/* 000860 */ 		if (__t__ (delimiters === null)) {
/* 000861 */ 			return parsing_state;
/* 000861 */ 		}
/* 000863 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000864 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000866 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000866 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000866 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000866 */ 				}) ());
/* 000866 */ 				__except0__.__cause__ = null;
/* 000866 */ 				throw __except0__;
/* 000866 */ 			}
/* 000869 */ 			return parsing_state;
/* 000869 */ 		}
/* 000871 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000876 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000876 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000876 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000877 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000879 */ 				return parsing_state;
/* 000879 */ 			}
/* 000879 */ 		}
/* 000882 */ 		return (function () {
/* 000882 */ 			var __accu0__ = parsing_state;
/* 000882 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000882 */ 		}) ();
/* 000882 */ 	});},
/* 000889 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000889 */ 		var kwargs = dict ();
/* 000889 */ 		if (arguments.length) {
/* 000889 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000889 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000889 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000889 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000889 */ 					switch (__attrib0__) {
/* 000889 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000889 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000889 */ 					}
/* 000889 */ 				}
/* 000889 */ 				delete kwargs.__kwargtrans__;
/* 000889 */ 			}
/* 000889 */ 		}
/* 000889 */ 		else {
/* 000889 */ 		}
/* 000895 */ 		if (__t__ (delimiters !== null)) {
/* 000896 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000897 */ 				return [delimiters];
/* 000897 */ 			}
/* 000898 */ 			else {
/* 000899 */ 				return [__getitem__ (delimiters, 0)];
/* 000899 */ 			}
/* 000899 */ 		}
/* 000901 */ 		return (function () {
/* 000901 */ 			var __accu0__ = [];
/* 000901 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000901 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000903 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000903 */ 				var od = __left0__ [0];
/* 000903 */ 				var cd = __left0__ [1];
/* 000903 */ 				(function () {
/* 000903 */ 					var __accu1__ = __accu0__;
/* 000903 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000903 */ 				}) ();
/* 000903 */ 			}
/* 000903 */ 			return __accu0__;
/* 000903 */ 		}) ();
/* 000903 */ 	});},
/* 000907 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000907 */ 		var kwargs = dict ();
/* 000907 */ 		if (arguments.length) {
/* 000907 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000907 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000907 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000907 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000907 */ 					switch (__attrib0__) {
/* 000907 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000907 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000907 */ 					}
/* 000907 */ 				}
/* 000907 */ 				delete kwargs.__kwargtrans__;
/* 000907 */ 			}
/* 000907 */ 		}
/* 000907 */ 		else {
/* 000907 */ 		}
/* 000910 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000911 */ 			return false;
/* 000911 */ 		}
/* 000913 */ 		if (__t__ (!__t__ (((function () {
/* 000913 */ 			var __accu0__ = cls;
/* 000913 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000913 */ 		}) ())))) {
/* 000916 */ 			return false;
/* 000916 */ 		}
/* 000918 */ 		return true;
/* 000918 */ 	});},
/* 000924 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000924 */ 		if (arguments.length) {
/* 000924 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000924 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000924 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000924 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000924 */ 					switch (__attrib0__) {
/* 000924 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000924 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000924 */ 					}
/* 000924 */ 				}
/* 000924 */ 			}
/* 000924 */ 		}
/* 000924 */ 		else {
/* 000924 */ 		}
/* 000925 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000926 */ 			// pass;
/* 000932 */ 			return true;
/* 000932 */ 		}
/* 000933 */ 		return false;
/* 000933 */ 	});},
/* 000936 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000936 */ 		if (arguments.length) {
/* 000936 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000936 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000936 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000936 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000936 */ 					switch (__attrib0__) {
/* 000936 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000936 */ 					}
/* 000936 */ 				}
/* 000936 */ 			}
/* 000936 */ 		}
/* 000936 */ 		else {
/* 000936 */ 		}
/* 000944 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000944 */ 	});}
/* 000944 */ });
/* 000948 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000948 */ 	__module__: __name__,
/* 000967 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000967 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000967 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000967 */ 		};
/* 000967 */ 		var kwargs = dict ();
/* 000967 */ 		if (arguments.length) {
/* 000967 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000967 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000967 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000967 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000967 */ 					switch (__attrib0__) {
/* 000967 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000967 */ 					}
/* 000967 */ 				}
/* 000967 */ 				delete kwargs.__kwargtrans__;
/* 000967 */ 			}
/* 000967 */ 		}
/* 000967 */ 		else {
/* 000967 */ 		}
/* 000971 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000971 */ 	});}
/* 000971 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map