/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 09:47:56
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerLocatedErrorFormatter, nodes, to_str, LatexWalkerEndOfStream, LatexWalkerTokenParseError, LatexGeneralNodesParser, LatexWalkerParseError, LatexWalkerLocatedError, LatexWalkerNodesParseError, get_updated_parsing_state_from_delta, format_pos, __all__, LatexWalkerError, _unicode_from_str, LatexParserBase};
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
/* 000254 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000264 */ 		return parsing_state;
/* 000264 */ 	});},
/* 000268 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000276 */ 		return [];
/* 000276 */ 	});},
/* 000280 */ 	get parse_initial () {return __getcm__ (this, function (cls, delimiters, allow_pre_space, latex_walker, token_reader, group_parsing_state, delimited_expression_parser) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000321 */ 		var first_token = (function () {
/* 000321 */ 			var __accu0__ = token_reader;
/* 000321 */ 			return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: group_parsing_state}));
/* 000321 */ 		}) ();
/* 000323 */ 		var ok = true;
/* 000324 */ 		if (__t__ (__t__ (!__t__ ((allow_pre_space))) && first_token.pre_space)) {
/* 000325 */ 			var ok = false;
/* 000325 */ 		}
/* 000326 */ 		else if (__t__ (!__t__ (((function () {
/* 000326 */ 			var __accu0__ = cls;
/* 000326 */ 			return __call__ (__accu0__.is_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, first_token: first_token, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000326 */ 		}) ())))) {
/* 000333 */ 			var ok = false;
/* 000333 */ 		}
/* 000335 */ 		if (__t__ (!__t__ ((ok)))) {
/* 000340 */ 			var acceptable_opening_delimiters = (function () {
/* 000340 */ 				var __accu0__ = cls;
/* 000340 */ 				return __call__ (__accu0__.get_acceptable_open_delimiter_list, __accu0__, __kwargtrans__ ({delimiters: delimiters, group_parsing_state: group_parsing_state, delimited_expression_parser: delimited_expression_parser, latex_walker: latex_walker}));
/* 000340 */ 			}) ();
/* 000346 */ 			if (__t__ (!__t__ ((acceptable_opening_delimiters)))) {
/* 000347 */ 				var acceptable_delimiters_msg = '??';
/* 000347 */ 			}
/* 000348 */ 			else {
/* 000349 */ 				var acceptable_delimiters_msg = (function () {
/* 000349 */ 					var __accu0__ = ', ';
/* 000349 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000349 */ 						var __accu1__ = [];
/* 000349 */ 						var __iterable0__ = acceptable_opening_delimiters;
/* 000349 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000351 */ 							var od = __getitem__ (__iterable0__, __index0__);
/* 000351 */ 							(function () {
/* 000351 */ 								var __accu2__ = __accu1__;
/* 000350 */ 								return __call__ (__accu2__.append, __accu2__, (function () {
/* 000350 */ 									var __accu3__ = '‘{}’';
/* 000350 */ 									return __call__ (__accu3__.format, __accu3__, od);
/* 000350 */ 								}) ());
/* 000350 */ 							}) ();
/* 000350 */ 						}
/* 000350 */ 						return __accu1__;
/* 000350 */ 					}) ());
/* 000350 */ 				}) ();
/* 000350 */ 			}
/* 000355 */ 			var __except0__ = __call__ (LatexDelimitedExpressionParserOpeningDelimiterNotFound, null, __kwargtrans__ ({msg: (function () {
/* 000355 */ 				var __accu0__ = 'Expected an opening LaTeX delimiter ({}), got {}/‘{}’{}';
/* 000355 */ 				return __call__ (__accu0__.format, __accu0__, acceptable_delimiters_msg, first_token.tok, first_token.arg, (__t__ (first_token.pre_space) ? ' with leading whitespace' : ''));
/* 000355 */ 			}) (), first_tokens: [first_token]}));
/* 000355 */ 			__except0__.__cause__ = null;
/* 000355 */ 			throw __except0__;
/* 000355 */ 		}
/* 000364 */ 		return [first_token];
/* 000364 */ 	});},
/* 000368 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000376 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement is_opening_delimiter()');
/* 000376 */ 		__except0__.__cause__ = null;
/* 000376 */ 		throw __except0__;
/* 000376 */ 	});},
/* 000380 */ 	get check_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, parsed_opening_delimiter, latex_walker) {
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'parsed_opening_delimiter': var parsed_opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000396 */ 		if (__t__ (delimiters === null)) {
/* 000397 */ 			return true;
/* 000397 */ 		}
/* 000399 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000400 */ 			var open_delim = delimiters;
/* 000400 */ 		}
/* 000401 */ 		else {
/* 000402 */ 			var open_delim = __getitem__ (delimiters, 0);
/* 000402 */ 		}
/* 000403 */ 		if (__t__ (__ne__ (parsed_opening_delimiter, open_delim))) {
/* 000404 */ 			return false;
/* 000404 */ 		}
/* 000405 */ 		return true;
/* 000405 */ 	});},
/* 000409 */ 	get __init__ () {return __get__ (this, function (self, delimited_expression_parser, opening_delimiter_tokens, group_parsing_state, parsing_state, delimiters, latex_walker) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'opening_delimiter_tokens': var opening_delimiter_tokens = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000411 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParserInfo, '__init__'), null, self);
/* 000414 */ 		self.delimited_expression_parser = delimited_expression_parser;
/* 000415 */ 		self.opening_delimiter_tokens = opening_delimiter_tokens;
/* 000416 */ 		if (__t__ (opening_delimiter_tokens)) {
/* 000417 */ 			self.first_token = __getitem__ (opening_delimiter_tokens, 0);
/* 000417 */ 		}
/* 000418 */ 		else {
/* 000419 */ 			self.first_token = null;
/* 000419 */ 		}
/* 000420 */ 		self.group_parsing_state = group_parsing_state;
/* 000421 */ 		self.parsing_state = parsing_state;
/* 000422 */ 		self.delimiters = delimiters;
/* 000423 */ 		self.latex_walker = latex_walker;
/* 000425 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000426 */ 		self.child_parsing_state_delta = null;
/* 000427 */ 		self.parsed_delimiters = tuple ([null, null]);
/* 000427 */ 	});},
/* 000429 */ 	get initialize () {return __get__ (this, function (self) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000437 */ 		self.contents_parsing_state = self.group_parsing_state;
/* 000438 */ 		self.child_parsing_state_delta = null;
/* 000439 */ 		self.parsed_delimiters = (function () {
/* 000439 */ 			var __accu0__ = self;
/* 000439 */ 			return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000439 */ 		}) ();
/* 000439 */ 	});},
/* 000441 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 			}
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 		}
/* 000446 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses must reimplement stop_token_condition()');
/* 000446 */ 		__except0__.__cause__ = null;
/* 000446 */ 		throw __except0__;
/* 000446 */ 	});},
/* 000448 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000455 */ 		(function () {
/* 000455 */ 			var __accu0__ = token_reader;
/* 000455 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000455 */ 		}) ();
/* 000456 */ 		(function () {
/* 000456 */ 			var __accu0__ = logger;
/* 000456 */ 			return __call__ (__accu0__.debug, __accu0__, 'LatexDelimitedExpressionParser moved token reader past token %r', token);
/* 000456 */ 		}) ();
/* 000456 */ 	});},
/* 000461 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000461 */ 		if (arguments.length) {
/* 000461 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000461 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000461 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000461 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000461 */ 					switch (__attrib0__) {
/* 000461 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 			}
/* 000461 */ 		}
/* 000461 */ 		else {
/* 000461 */ 		}
/* 000475 */ 		if (__t__ (self.child_parsing_state_delta !== null)) {
/* 000476 */ 			(function () {
/* 000476 */ 				var __accu0__ = logger;
/* 000476 */ 				return __call__ (__accu0__.debug, __accu0__, 'Requested child parsing state, applying delta %r', self.child_parsing_state_delta);
/* 000476 */ 			}) ();
/* 000478 */ 			return __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, self.child_parsing_state_delta, self.latex_walker);
/* 000478 */ 		}
/* 000484 */ 		(function () {
/* 000484 */ 			var __accu0__ = logger;
/* 000484 */ 			return __call__ (__accu0__.debug, __accu0__, 'Requested child parsing state, keeping default %r', parsing_state);
/* 000484 */ 		}) ();
/* 000485 */ 		return parsing_state;
/* 000485 */ 	});},
/* 000488 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000498 */ 		return opening_delimiter;
/* 000498 */ 	});},
/* 000501 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000501 */ 		if (arguments.length) {
/* 000501 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000501 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000501 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000501 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000501 */ 					switch (__attrib0__) {
/* 000501 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000501 */ 					}
/* 000501 */ 				}
/* 000501 */ 			}
/* 000501 */ 		}
/* 000501 */ 		else {
/* 000501 */ 		}
/* 000536 */ 		var first_token = self.first_token;
/* 000537 */ 		var delimiters = self.delimiters;
/* 000539 */ 		if (__t__ (delimiters === null)) {
/* 000540 */ 			var delimiters = first_token.arg;
/* 000540 */ 		}
/* 000542 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000543 */ 			var opening_delimiter = delimiters;
/* 000544 */ 			var closing_delimiter = (function () {
/* 000544 */ 				var __accu0__ = self;
/* 000544 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000544 */ 			}) ();
/* 000545 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000545 */ 		}
/* 000547 */ 		return delimiters;
/* 000547 */ 	});},
/* 000549 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000549 */ 		if (arguments.length) {
/* 000549 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000549 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000549 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000549 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000549 */ 					switch (__attrib0__) {
/* 000549 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000549 */ 					}
/* 000549 */ 				}
/* 000549 */ 			}
/* 000549 */ 		}
/* 000549 */ 		else {
/* 000549 */ 		}
/* 000564 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000565 */ 			var expected_matching = (function () {
/* 000565 */ 				var __accu0__ = 'matching ‘{}’';
/* 000565 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000565 */ 			}) ();
/* 000565 */ 		}
/* 000566 */ 		else {
/* 000567 */ 			var expected_matching = 'matching closing delimiter';
/* 000567 */ 		}
/* 000574 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000574 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000574 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000574 */ 		}) ()}));
/* 000574 */ 	});},
/* 000577 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000577 */ 		if (arguments.length) {
/* 000577 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000577 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000577 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000577 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000577 */ 					switch (__attrib0__) {
/* 000577 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000577 */ 					}
/* 000577 */ 				}
/* 000577 */ 			}
/* 000577 */ 		}
/* 000577 */ 		else {
/* 000577 */ 		}
/* 000584 */ 		return tuple ([(function () {
/* 000584 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000584 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000584 */ 		}) (), self.first_token]);
/* 000584 */ 	});},
/* 000589 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000589 */ 		if (arguments.length) {
/* 000589 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000589 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000589 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000589 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000589 */ 					switch (__attrib0__) {
/* 000589 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000589 */ 					}
/* 000589 */ 				}
/* 000589 */ 			}
/* 000589 */ 		}
/* 000589 */ 		else {
/* 000589 */ 		}
/* 000602 */ 		var pos_end = (function () {
/* 000602 */ 			var __accu0__ = token_reader;
/* 000602 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000602 */ 		}) ();
/* 000604 */ 		var group_node = (function () {
/* 000604 */ 			var __accu0__ = latex_walker;
/* 000604 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000604 */ 		}) ();
/* 000613 */ 		return tuple ([group_node, parsing_state_delta]);
/* 000613 */ 	});}
/* 000613 */ });
/* 000623 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000623 */ 	__module__: __name__,
/* 000685 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000685 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000685 */ 			var optional = false;
/* 000685 */ 		};
/* 000685 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000685 */ 			var allow_pre_space = false;
/* 000685 */ 		};
/* 000685 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000685 */ 			var discard_parsing_state_delta = true;
/* 000685 */ 		};
/* 000685 */ 		var kwargs = dict ();
/* 000685 */ 		if (arguments.length) {
/* 000685 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000685 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000685 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000685 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000685 */ 					switch (__attrib0__) {
/* 000685 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000685 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000685 */ 					}
/* 000685 */ 				}
/* 000685 */ 				delete kwargs.__kwargtrans__;
/* 000685 */ 			}
/* 000685 */ 		}
/* 000685 */ 		else {
/* 000685 */ 		}
/* 000692 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000693 */ 		self.delimiters = delimiters;
/* 000694 */ 		self.optional = optional;
/* 000695 */ 		self.allow_pre_space = allow_pre_space;
/* 000704 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000706 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000706 */ 	});},
/* 000709 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000709 */ 		if (arguments.length) {
/* 000709 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000709 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000709 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000709 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000709 */ 					switch (__attrib0__) {
/* 000709 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000709 */ 					}
/* 000709 */ 				}
/* 000709 */ 			}
/* 000709 */ 		}
/* 000709 */ 		else {
/* 000709 */ 		}
/* 000710 */ 		return self.optional;
/* 000710 */ 	});},
/* 000713 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000713 */ 		var kwargs = dict ();
/* 000713 */ 		if (arguments.length) {
/* 000713 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000713 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000713 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000713 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000713 */ 					switch (__attrib0__) {
/* 000713 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000713 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000713 */ 					}
/* 000713 */ 				}
/* 000713 */ 				delete kwargs.__kwargtrans__;
/* 000713 */ 			}
/* 000713 */ 		}
/* 000713 */ 		else {
/* 000713 */ 		}
/* 000716 */ 		var group_parsing_state = (function () {
/* 000716 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000716 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000716 */ 		}) ();
/* 000723 */ 		var opening_delimiter_tokens = null;
/* 000725 */ 		try {
/* 000727 */ 			var opening_delimiter_tokens = (function () {
/* 000727 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000727 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000727 */ 			}) ();
/* 000727 */ 		}
/* 000727 */ 		catch (__except0__) {
/* 000727 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000727 */ 				var e = __except0__;
/* 000737 */ 				var recovery_token = null;
/* 000738 */ 				if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000739 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000739 */ 				}
/* 000741 */ 				if (__t__ (self.optional)) {
/* 000743 */ 					if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000744 */ 						(function () {
/* 000744 */ 							var __accu0__ = token_reader;
/* 000744 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000744 */ 						}) ();
/* 000744 */ 					}
/* 000745 */ 					return tuple ([null, null]);
/* 000745 */ 				}
/* 000747 */ 				var pos = null;
/* 000748 */ 				if (__t__ (recovery_token !== null)) {
/* 000749 */ 					var pos = recovery_token.pos;
/* 000749 */ 				}
/* 000755 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: pos, recovery_nodes: (function () {
/* 000755 */ 					var __accu0__ = latex_walker;
/* 000755 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000755 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000755 */ 				__except1__.__cause__ = null;
/* 000755 */ 				throw __except1__;
/* 000755 */ 			}
/* 000755 */ 			else {
/* 000755 */ 				throw __except0__;
/* 000755 */ 			}
/* 000755 */ 		}
/* 000769 */ 		var contents_parser_info = (function () {
/* 000769 */ 			var __accu0__ = self;
/* 000769 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000769 */ 		}) ();
/* 000778 */ 		(function () {
/* 000778 */ 			var __accu0__ = contents_parser_info;
/* 000778 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000778 */ 		}) ();
/* 000781 */ 		var contents_parser = (function () {
/* 000781 */ 			var __accu0__ = contents_parser_info;
/* 000781 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000781 */ 		}) ();
/* 000786 */ 		var __left0__ = (function () {
/* 000786 */ 			var __accu0__ = latex_walker;
/* 000790 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000790 */ 				var __accu1__ = contents_parser_info;
/* 000790 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000790 */ 			}) ()}));
/* 000790 */ 		}) ();
/* 000790 */ 		var nodelist = __left0__ [0];
/* 000790 */ 		var parsing_state_delta = __left0__ [1];
/* 000795 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000796 */ 			(function () {
/* 000796 */ 				var __accu0__ = logger;
/* 000796 */ 				return __call__ (__accu0__.debug, __accu0__, 'Discarding parsing state changes after delimited expression: %r', parsing_state_delta);
/* 000796 */ 			}) ();
/* 000798 */ 			var parsing_state_delta = null;
/* 000798 */ 		}
/* 000801 */ 		var __left0__ = (function () {
/* 000801 */ 			var __accu0__ = contents_parser_info;
/* 000801 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000801 */ 		}) ();
/* 000801 */ 		var groupnode = __left0__ [0];
/* 000801 */ 		var parsing_state_delta = __left0__ [1];
/* 000808 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000808 */ 	});}
/* 000808 */ });
/* 000818 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000818 */ 	__module__: __name__,
/* 000822 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000822 */ 		var kwargs = dict ();
/* 000822 */ 		if (arguments.length) {
/* 000822 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000822 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000822 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000822 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000822 */ 					switch (__attrib0__) {
/* 000822 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000822 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000822 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000822 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000822 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000822 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000822 */ 					}
/* 000822 */ 				}
/* 000822 */ 				delete kwargs.__kwargtrans__;
/* 000822 */ 			}
/* 000822 */ 		}
/* 000822 */ 		else {
/* 000822 */ 		}
/* 000848 */ 		if (__t__ (delimiters === null)) {
/* 000849 */ 			return parsing_state;
/* 000849 */ 		}
/* 000851 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000852 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000854 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000854 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000854 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000854 */ 				}) ());
/* 000854 */ 				__except0__.__cause__ = null;
/* 000854 */ 				throw __except0__;
/* 000854 */ 			}
/* 000857 */ 			return parsing_state;
/* 000857 */ 		}
/* 000859 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000864 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000864 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000864 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000865 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000867 */ 				return parsing_state;
/* 000867 */ 			}
/* 000867 */ 		}
/* 000870 */ 		return (function () {
/* 000870 */ 			var __accu0__ = parsing_state;
/* 000870 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000870 */ 		}) ();
/* 000870 */ 	});},
/* 000877 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000877 */ 		var kwargs = dict ();
/* 000877 */ 		if (arguments.length) {
/* 000877 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000877 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000877 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000877 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000877 */ 					switch (__attrib0__) {
/* 000877 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000877 */ 					}
/* 000877 */ 				}
/* 000877 */ 				delete kwargs.__kwargtrans__;
/* 000877 */ 			}
/* 000877 */ 		}
/* 000877 */ 		else {
/* 000877 */ 		}
/* 000883 */ 		if (__t__ (delimiters !== null)) {
/* 000884 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000885 */ 				return [delimiters];
/* 000885 */ 			}
/* 000886 */ 			else {
/* 000887 */ 				return [__getitem__ (delimiters, 0)];
/* 000887 */ 			}
/* 000887 */ 		}
/* 000889 */ 		return (function () {
/* 000889 */ 			var __accu0__ = [];
/* 000889 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000889 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000891 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000891 */ 				var od = __left0__ [0];
/* 000891 */ 				var cd = __left0__ [1];
/* 000891 */ 				(function () {
/* 000891 */ 					var __accu1__ = __accu0__;
/* 000891 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000891 */ 				}) ();
/* 000891 */ 			}
/* 000891 */ 			return __accu0__;
/* 000891 */ 		}) ();
/* 000891 */ 	});},
/* 000895 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000895 */ 		var kwargs = dict ();
/* 000895 */ 		if (arguments.length) {
/* 000895 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000895 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000895 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000895 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000895 */ 					switch (__attrib0__) {
/* 000895 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000895 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
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
/* 000898 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000899 */ 			return false;
/* 000899 */ 		}
/* 000901 */ 		if (__t__ (!__t__ (((function () {
/* 000901 */ 			var __accu0__ = cls;
/* 000901 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000901 */ 		}) ())))) {
/* 000904 */ 			return false;
/* 000904 */ 		}
/* 000906 */ 		return true;
/* 000906 */ 	});},
/* 000912 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000912 */ 		if (arguments.length) {
/* 000912 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000912 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000912 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000912 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000912 */ 					switch (__attrib0__) {
/* 000912 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000912 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000912 */ 					}
/* 000912 */ 				}
/* 000912 */ 			}
/* 000912 */ 		}
/* 000912 */ 		else {
/* 000912 */ 		}
/* 000913 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000914 */ 			(function () {
/* 000914 */ 				var __accu0__ = logger;
/* 000914 */ 				return __call__ (__accu0__.debug, __accu0__, 'LatexDelimitedGroupParser encountered the expected closing brace %r', token);
/* 000914 */ 			}) ();
/* 000918 */ 			return true;
/* 000918 */ 		}
/* 000919 */ 		return false;
/* 000919 */ 	});},
/* 000922 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000922 */ 		if (arguments.length) {
/* 000922 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000922 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000922 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000922 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000922 */ 					switch (__attrib0__) {
/* 000922 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000922 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000922 */ 					}
/* 000922 */ 				}
/* 000922 */ 			}
/* 000922 */ 		}
/* 000922 */ 		else {
/* 000922 */ 		}
/* 000930 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000930 */ 	});}
/* 000930 */ });
/* 000934 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000934 */ 	__module__: __name__,
/* 000953 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000953 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000953 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000953 */ 		};
/* 000953 */ 		var kwargs = dict ();
/* 000953 */ 		if (arguments.length) {
/* 000953 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000953 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000953 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000953 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000953 */ 					switch (__attrib0__) {
/* 000953 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000953 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000953 */ 					}
/* 000953 */ 				}
/* 000953 */ 				delete kwargs.__kwargtrans__;
/* 000953 */ 			}
/* 000953 */ 		}
/* 000953 */ 		else {
/* 000953 */ 		}
/* 000957 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000957 */ 	});}
/* 000957 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map