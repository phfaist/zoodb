/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 00:52:17
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, LatexParserBase, LatexWalkerParseError, nodes, format_pos, to_str, LatexGeneralNodesParser, LatexWalkerLocatedErrorFormatter, LatexWalkerEndOfStream, LatexWalkerLocatedError, _unicode_from_str, __all__, LatexWalkerError, LatexWalkerNodesParseError, get_updated_parsing_state_from_delta};
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
/* 000457 */ 		(function () {
/* 000457 */ 			var __accu0__ = logger;
/* 000457 */ 			return __call__ (__accu0__.debug, __accu0__, 'LatexDelimitedExpressionParser moved token reader past token %r', token);
/* 000457 */ 		}) ();
/* 000457 */ 	});},
/* 000462 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 			}
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 		}
/* 000476 */ 		if (__t__ (self.child_parsing_state_delta !== null)) {
/* 000477 */ 			(function () {
/* 000477 */ 				var __accu0__ = logger;
/* 000477 */ 				return __call__ (__accu0__.debug, __accu0__, 'Requested child parsing state, applying delta %r', self.child_parsing_state_delta);
/* 000477 */ 			}) ();
/* 000479 */ 			return __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, self.child_parsing_state_delta, self.latex_walker);
/* 000479 */ 		}
/* 000485 */ 		(function () {
/* 000485 */ 			var __accu0__ = logger;
/* 000485 */ 			return __call__ (__accu0__.debug, __accu0__, 'Requested child parsing state, keeping default %r', parsing_state);
/* 000485 */ 		}) ();
/* 000486 */ 		return parsing_state;
/* 000486 */ 	});},
/* 000489 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000489 */ 		if (arguments.length) {
/* 000489 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000489 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000489 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000489 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000489 */ 					switch (__attrib0__) {
/* 000489 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000489 */ 					}
/* 000489 */ 				}
/* 000489 */ 			}
/* 000489 */ 		}
/* 000489 */ 		else {
/* 000489 */ 		}
/* 000499 */ 		return opening_delimiter;
/* 000499 */ 	});},
/* 000502 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000502 */ 		if (arguments.length) {
/* 000502 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000502 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000502 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000502 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000502 */ 					switch (__attrib0__) {
/* 000502 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000502 */ 					}
/* 000502 */ 				}
/* 000502 */ 			}
/* 000502 */ 		}
/* 000502 */ 		else {
/* 000502 */ 		}
/* 000537 */ 		var first_token = self.first_token;
/* 000538 */ 		var delimiters = self.delimiters;
/* 000540 */ 		if (__t__ (delimiters === null)) {
/* 000541 */ 			var delimiters = first_token.arg;
/* 000541 */ 		}
/* 000543 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000544 */ 			var opening_delimiter = delimiters;
/* 000545 */ 			var closing_delimiter = (function () {
/* 000545 */ 				var __accu0__ = self;
/* 000545 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000545 */ 			}) ();
/* 000546 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000546 */ 		}
/* 000548 */ 		return delimiters;
/* 000548 */ 	});},
/* 000550 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000550 */ 		if (arguments.length) {
/* 000550 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000550 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000550 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000550 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000550 */ 					switch (__attrib0__) {
/* 000550 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 					}
/* 000550 */ 				}
/* 000550 */ 			}
/* 000550 */ 		}
/* 000550 */ 		else {
/* 000550 */ 		}
/* 000565 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000566 */ 			var expected_matching = (function () {
/* 000566 */ 				var __accu0__ = 'matching ‘{}’';
/* 000566 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000566 */ 			}) ();
/* 000566 */ 		}
/* 000567 */ 		else {
/* 000568 */ 			var expected_matching = 'matching closing delimiter';
/* 000568 */ 		}
/* 000575 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000575 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000575 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000575 */ 		}) ()}));
/* 000575 */ 	});},
/* 000578 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000578 */ 		if (arguments.length) {
/* 000578 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000578 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000578 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000578 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000578 */ 					switch (__attrib0__) {
/* 000578 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000578 */ 					}
/* 000578 */ 				}
/* 000578 */ 			}
/* 000578 */ 		}
/* 000578 */ 		else {
/* 000578 */ 		}
/* 000585 */ 		return tuple ([(function () {
/* 000585 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000585 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000585 */ 		}) (), self.first_token]);
/* 000585 */ 	});},
/* 000590 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000590 */ 		if (arguments.length) {
/* 000590 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000590 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000590 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000590 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000590 */ 					switch (__attrib0__) {
/* 000590 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000590 */ 					}
/* 000590 */ 				}
/* 000590 */ 			}
/* 000590 */ 		}
/* 000590 */ 		else {
/* 000590 */ 		}
/* 000603 */ 		var pos_end = (function () {
/* 000603 */ 			var __accu0__ = token_reader;
/* 000603 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000603 */ 		}) ();
/* 000605 */ 		var group_node = (function () {
/* 000605 */ 			var __accu0__ = latex_walker;
/* 000605 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000605 */ 		}) ();
/* 000614 */ 		return tuple ([group_node, parsing_state_delta]);
/* 000614 */ 	});}
/* 000614 */ });
/* 000624 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000624 */ 	__module__: __name__,
/* 000686 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000686 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var optional = false;
/* 000686 */ 		};
/* 000686 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var allow_pre_space = false;
/* 000686 */ 		};
/* 000686 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var discard_parsing_state_delta = true;
/* 000686 */ 		};
/* 000686 */ 		var kwargs = dict ();
/* 000686 */ 		if (arguments.length) {
/* 000686 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000686 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000686 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000686 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000686 */ 					switch (__attrib0__) {
/* 000686 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000686 */ 					}
/* 000686 */ 				}
/* 000686 */ 				delete kwargs.__kwargtrans__;
/* 000686 */ 			}
/* 000686 */ 		}
/* 000686 */ 		else {
/* 000686 */ 		}
/* 000693 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000694 */ 		self.delimiters = delimiters;
/* 000695 */ 		self.optional = optional;
/* 000696 */ 		self.allow_pre_space = allow_pre_space;
/* 000705 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000707 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000707 */ 	});},
/* 000710 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000710 */ 		if (arguments.length) {
/* 000710 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000710 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000710 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000710 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000710 */ 					switch (__attrib0__) {
/* 000710 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000710 */ 					}
/* 000710 */ 				}
/* 000710 */ 			}
/* 000710 */ 		}
/* 000710 */ 		else {
/* 000710 */ 		}
/* 000711 */ 		return self.optional;
/* 000711 */ 	});},
/* 000714 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000714 */ 		var kwargs = dict ();
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 				delete kwargs.__kwargtrans__;
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000717 */ 		var group_parsing_state = (function () {
/* 000717 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000717 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000717 */ 		}) ();
/* 000724 */ 		var opening_delimiter_tokens = null;
/* 000726 */ 		try {
/* 000728 */ 			var opening_delimiter_tokens = (function () {
/* 000728 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000728 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000728 */ 			}) ();
/* 000728 */ 		}
/* 000728 */ 		catch (__except0__) {
/* 000728 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000728 */ 				var e = __except0__;
/* 000738 */ 				var recovery_token = null;
/* 000739 */ 				if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000740 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000740 */ 				}
/* 000742 */ 				if (__t__ (self.optional)) {
/* 000744 */ 					if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000745 */ 						(function () {
/* 000745 */ 							var __accu0__ = token_reader;
/* 000745 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000745 */ 						}) ();
/* 000745 */ 					}
/* 000746 */ 					return tuple ([null, null]);
/* 000746 */ 				}
/* 000748 */ 				var pos = null;
/* 000749 */ 				if (__t__ (recovery_token !== null)) {
/* 000750 */ 					var pos = recovery_token.pos;
/* 000750 */ 				}
/* 000756 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: pos, recovery_nodes: (function () {
/* 000756 */ 					var __accu0__ = latex_walker;
/* 000756 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000756 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000756 */ 				__except1__.__cause__ = null;
/* 000756 */ 				throw __except1__;
/* 000756 */ 			}
/* 000756 */ 			else {
/* 000756 */ 				throw __except0__;
/* 000756 */ 			}
/* 000756 */ 		}
/* 000770 */ 		var contents_parser_info = (function () {
/* 000770 */ 			var __accu0__ = self;
/* 000770 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000770 */ 		}) ();
/* 000779 */ 		(function () {
/* 000779 */ 			var __accu0__ = contents_parser_info;
/* 000779 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000779 */ 		}) ();
/* 000782 */ 		var contents_parser = (function () {
/* 000782 */ 			var __accu0__ = contents_parser_info;
/* 000782 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000782 */ 		}) ();
/* 000787 */ 		var __left0__ = (function () {
/* 000787 */ 			var __accu0__ = latex_walker;
/* 000791 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000791 */ 				var __accu1__ = contents_parser_info;
/* 000791 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000791 */ 			}) ()}));
/* 000791 */ 		}) ();
/* 000791 */ 		var nodelist = __left0__ [0];
/* 000791 */ 		var parsing_state_delta = __left0__ [1];
/* 000796 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000797 */ 			(function () {
/* 000797 */ 				var __accu0__ = logger;
/* 000797 */ 				return __call__ (__accu0__.debug, __accu0__, 'Discarding parsing state changes after delimited expression: %r', parsing_state_delta);
/* 000797 */ 			}) ();
/* 000799 */ 			var parsing_state_delta = null;
/* 000799 */ 		}
/* 000802 */ 		var __left0__ = (function () {
/* 000802 */ 			var __accu0__ = contents_parser_info;
/* 000802 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000802 */ 		}) ();
/* 000802 */ 		var groupnode = __left0__ [0];
/* 000802 */ 		var parsing_state_delta = __left0__ [1];
/* 000809 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000809 */ 	});}
/* 000809 */ });
/* 000819 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000819 */ 	__module__: __name__,
/* 000826 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000826 */ 		var kwargs = dict ();
/* 000826 */ 		if (arguments.length) {
/* 000826 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000826 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000826 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000826 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000826 */ 					switch (__attrib0__) {
/* 000826 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000826 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000826 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000826 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000826 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000826 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000826 */ 					}
/* 000826 */ 				}
/* 000826 */ 				delete kwargs.__kwargtrans__;
/* 000826 */ 			}
/* 000826 */ 		}
/* 000826 */ 		else {
/* 000826 */ 		}
/* 000852 */ 		if (__t__ (delimiters === null)) {
/* 000853 */ 			return parsing_state;
/* 000853 */ 		}
/* 000855 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000856 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000858 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000858 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000858 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000858 */ 				}) ());
/* 000858 */ 				__except0__.__cause__ = null;
/* 000858 */ 				throw __except0__;
/* 000858 */ 			}
/* 000861 */ 			return parsing_state;
/* 000861 */ 		}
/* 000863 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000868 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000868 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000868 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000869 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000871 */ 				return parsing_state;
/* 000871 */ 			}
/* 000871 */ 		}
/* 000874 */ 		return (function () {
/* 000874 */ 			var __accu0__ = parsing_state;
/* 000874 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000874 */ 		}) ();
/* 000874 */ 	});},
/* 000881 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000881 */ 		var kwargs = dict ();
/* 000881 */ 		if (arguments.length) {
/* 000881 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000881 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000881 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000881 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000881 */ 					switch (__attrib0__) {
/* 000881 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000881 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000881 */ 					}
/* 000881 */ 				}
/* 000881 */ 				delete kwargs.__kwargtrans__;
/* 000881 */ 			}
/* 000881 */ 		}
/* 000881 */ 		else {
/* 000881 */ 		}
/* 000887 */ 		if (__t__ (delimiters !== null)) {
/* 000888 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000889 */ 				return [delimiters];
/* 000889 */ 			}
/* 000890 */ 			else {
/* 000891 */ 				return [__getitem__ (delimiters, 0)];
/* 000891 */ 			}
/* 000891 */ 		}
/* 000893 */ 		return (function () {
/* 000893 */ 			var __accu0__ = [];
/* 000893 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000893 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000895 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000895 */ 				var od = __left0__ [0];
/* 000895 */ 				var cd = __left0__ [1];
/* 000895 */ 				(function () {
/* 000895 */ 					var __accu1__ = __accu0__;
/* 000895 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000895 */ 				}) ();
/* 000895 */ 			}
/* 000895 */ 			return __accu0__;
/* 000895 */ 		}) ();
/* 000895 */ 	});},
/* 000899 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000899 */ 		var kwargs = dict ();
/* 000899 */ 		if (arguments.length) {
/* 000899 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000899 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000899 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000899 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000899 */ 					switch (__attrib0__) {
/* 000899 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000899 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000899 */ 					}
/* 000899 */ 				}
/* 000899 */ 				delete kwargs.__kwargtrans__;
/* 000899 */ 			}
/* 000899 */ 		}
/* 000899 */ 		else {
/* 000899 */ 		}
/* 000902 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000903 */ 			return false;
/* 000903 */ 		}
/* 000905 */ 		if (__t__ (!__t__ (((function () {
/* 000905 */ 			var __accu0__ = cls;
/* 000905 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000905 */ 		}) ())))) {
/* 000908 */ 			return false;
/* 000908 */ 		}
/* 000910 */ 		return true;
/* 000910 */ 	});},
/* 000916 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000916 */ 		if (arguments.length) {
/* 000916 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000916 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000916 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000916 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000916 */ 					switch (__attrib0__) {
/* 000916 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000916 */ 					}
/* 000916 */ 				}
/* 000916 */ 			}
/* 000916 */ 		}
/* 000916 */ 		else {
/* 000916 */ 		}
/* 000917 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000918 */ 			(function () {
/* 000918 */ 				var __accu0__ = logger;
/* 000918 */ 				return __call__ (__accu0__.debug, __accu0__, 'LatexDelimitedGroupParser encountered the expected closing brace %r', token);
/* 000918 */ 			}) ();
/* 000922 */ 			return true;
/* 000922 */ 		}
/* 000923 */ 		return false;
/* 000923 */ 	});},
/* 000926 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000926 */ 		if (arguments.length) {
/* 000926 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000926 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000926 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000926 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000926 */ 					switch (__attrib0__) {
/* 000926 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000926 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000926 */ 					}
/* 000926 */ 				}
/* 000926 */ 			}
/* 000926 */ 		}
/* 000926 */ 		else {
/* 000926 */ 		}
/* 000934 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000934 */ 	});}
/* 000934 */ });
/* 000938 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000938 */ 	__module__: __name__,
/* 000957 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000957 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000957 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000957 */ 		};
/* 000957 */ 		var kwargs = dict ();
/* 000957 */ 		if (arguments.length) {
/* 000957 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000957 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000957 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000957 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000957 */ 					switch (__attrib0__) {
/* 000957 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000957 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000957 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000957 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000957 */ 					}
/* 000957 */ 				}
/* 000957 */ 				delete kwargs.__kwargtrans__;
/* 000957 */ 			}
/* 000957 */ 		}
/* 000957 */ 		else {
/* 000957 */ 		}
/* 000961 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000961 */ 	});}
/* 000961 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map