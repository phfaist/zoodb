/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:36:38
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerParseError, LatexGeneralNodesParser, __all__, to_str, _unicode_from_str, LatexWalkerEndOfStream, LatexWalkerParseErrorFormatter, LatexWalkerNodesParseError, LatexWalkerError, LatexParserBase, LatexWalkerTokenParseError, format_pos, get_updated_parsing_state_from_delta, nodes};
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
/* 000664 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000664 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var optional = false;
/* 000664 */ 		};
/* 000664 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var allow_pre_space = false;
/* 000664 */ 		};
/* 000664 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000664 */ 			var discard_parsing_state_delta = true;
/* 000664 */ 		};
/* 000664 */ 		var kwargs = dict ();
/* 000664 */ 		if (arguments.length) {
/* 000664 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000664 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000664 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000664 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000664 */ 					switch (__attrib0__) {
/* 000664 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000664 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000664 */ 					}
/* 000664 */ 				}
/* 000664 */ 				delete kwargs.__kwargtrans__;
/* 000664 */ 			}
/* 000664 */ 		}
/* 000664 */ 		else {
/* 000664 */ 		}
/* 000671 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000672 */ 		self.delimiters = delimiters;
/* 000673 */ 		self.optional = optional;
/* 000674 */ 		self.allow_pre_space = allow_pre_space;
/* 000683 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000685 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000685 */ 	});},
/* 000688 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000688 */ 		if (arguments.length) {
/* 000688 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000688 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000688 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000688 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000688 */ 					switch (__attrib0__) {
/* 000688 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000688 */ 					}
/* 000688 */ 				}
/* 000688 */ 			}
/* 000688 */ 		}
/* 000688 */ 		else {
/* 000688 */ 		}
/* 000689 */ 		return self.optional;
/* 000689 */ 	});},
/* 000692 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000692 */ 		var kwargs = dict ();
/* 000692 */ 		if (arguments.length) {
/* 000692 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000692 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000692 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000692 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000692 */ 					switch (__attrib0__) {
/* 000692 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000692 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000692 */ 					}
/* 000692 */ 				}
/* 000692 */ 				delete kwargs.__kwargtrans__;
/* 000692 */ 			}
/* 000692 */ 		}
/* 000692 */ 		else {
/* 000692 */ 		}
/* 000695 */ 		var group_parsing_state = (function () {
/* 000695 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000695 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000695 */ 		}) ();
/* 000702 */ 		var opening_delimiter_tokens = null;
/* 000704 */ 		try {
/* 000706 */ 			var opening_delimiter_tokens = (function () {
/* 000706 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000706 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000706 */ 			}) ();
/* 000706 */ 		}
/* 000706 */ 		catch (__except0__) {
/* 000706 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000706 */ 				var e = __except0__;
/* 000716 */ 				var recovery_token = null;
/* 000717 */ 				if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000718 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000718 */ 				}
/* 000720 */ 				if (__t__ (self.optional)) {
/* 000722 */ 					if (__t__ (__t__ (e.first_tokens !== null) && __call__ (len, null, e.first_tokens))) {
/* 000723 */ 						(function () {
/* 000723 */ 							var __accu0__ = token_reader;
/* 000723 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000723 */ 						}) ();
/* 000723 */ 					}
/* 000724 */ 					return tuple ([null, null]);
/* 000724 */ 				}
/* 000726 */ 				var pos = null;
/* 000727 */ 				if (__t__ (recovery_token !== null)) {
/* 000728 */ 					var pos = recovery_token;
/* 000728 */ 				}
/* 000734 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, pos: pos, recovery_nodes: (function () {
/* 000734 */ 					var __accu0__ = latex_walker;
/* 000734 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000734 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000734 */ 				__except1__.__cause__ = null;
/* 000734 */ 				throw __except1__;
/* 000734 */ 			}
/* 000734 */ 			else {
/* 000734 */ 				throw __except0__;
/* 000734 */ 			}
/* 000734 */ 		}
/* 000748 */ 		var contents_parser_info = (function () {
/* 000748 */ 			var __accu0__ = self;
/* 000748 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000748 */ 		}) ();
/* 000757 */ 		(function () {
/* 000757 */ 			var __accu0__ = contents_parser_info;
/* 000757 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000757 */ 		}) ();
/* 000760 */ 		var contents_parser = (function () {
/* 000760 */ 			var __accu0__ = contents_parser_info;
/* 000760 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000760 */ 		}) ();
/* 000765 */ 		var __left0__ = (function () {
/* 000765 */ 			var __accu0__ = latex_walker;
/* 000769 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000769 */ 				var __accu1__ = contents_parser_info;
/* 000769 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000769 */ 			}) ()}));
/* 000769 */ 		}) ();
/* 000769 */ 		var nodelist = __left0__ [0];
/* 000769 */ 		var parsing_state_delta = __left0__ [1];
/* 000774 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000775 */ 			(function () {
/* 000775 */ 				var __accu0__ = logger;
/* 000775 */ 				return __call__ (__accu0__.debug, __accu0__, 'Discarding parsing state changes after delimited expression: %r', parsing_state_delta);
/* 000775 */ 			}) ();
/* 000777 */ 			var parsing_state_delta = null;
/* 000777 */ 		}
/* 000780 */ 		var __left0__ = (function () {
/* 000780 */ 			var __accu0__ = contents_parser_info;
/* 000780 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000780 */ 		}) ();
/* 000780 */ 		var groupnode = __left0__ [0];
/* 000780 */ 		var parsing_state_delta = __left0__ [1];
/* 000787 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000787 */ 	});}
/* 000787 */ });
/* 000797 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000797 */ 	__module__: __name__,
/* 000801 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000801 */ 		var kwargs = dict ();
/* 000801 */ 		if (arguments.length) {
/* 000801 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000801 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000801 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000801 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000801 */ 					switch (__attrib0__) {
/* 000801 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000801 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000801 */ 					}
/* 000801 */ 				}
/* 000801 */ 				delete kwargs.__kwargtrans__;
/* 000801 */ 			}
/* 000801 */ 		}
/* 000801 */ 		else {
/* 000801 */ 		}
/* 000827 */ 		if (__t__ (delimiters === null)) {
/* 000828 */ 			return parsing_state;
/* 000828 */ 		}
/* 000830 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000831 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000833 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000833 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000833 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000833 */ 				}) ());
/* 000833 */ 				__except0__.__cause__ = null;
/* 000833 */ 				throw __except0__;
/* 000833 */ 			}
/* 000836 */ 			return parsing_state;
/* 000836 */ 		}
/* 000838 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000843 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000843 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000843 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000844 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000846 */ 				return parsing_state;
/* 000846 */ 			}
/* 000846 */ 		}
/* 000849 */ 		return (function () {
/* 000849 */ 			var __accu0__ = parsing_state;
/* 000849 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000849 */ 		}) ();
/* 000849 */ 	});},
/* 000856 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000856 */ 		var kwargs = dict ();
/* 000856 */ 		if (arguments.length) {
/* 000856 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000856 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000856 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000856 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000856 */ 					switch (__attrib0__) {
/* 000856 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000856 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000856 */ 					}
/* 000856 */ 				}
/* 000856 */ 				delete kwargs.__kwargtrans__;
/* 000856 */ 			}
/* 000856 */ 		}
/* 000856 */ 		else {
/* 000856 */ 		}
/* 000862 */ 		if (__t__ (delimiters !== null)) {
/* 000863 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000864 */ 				return [delimiters];
/* 000864 */ 			}
/* 000865 */ 			else {
/* 000866 */ 				return [__getitem__ (delimiters, 0)];
/* 000866 */ 			}
/* 000866 */ 		}
/* 000868 */ 		return (function () {
/* 000868 */ 			var __accu0__ = [];
/* 000868 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000868 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000870 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000870 */ 				var od = __left0__ [0];
/* 000870 */ 				var cd = __left0__ [1];
/* 000870 */ 				(function () {
/* 000870 */ 					var __accu1__ = __accu0__;
/* 000870 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000870 */ 				}) ();
/* 000870 */ 			}
/* 000870 */ 			return __accu0__;
/* 000870 */ 		}) ();
/* 000870 */ 	});},
/* 000874 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000874 */ 		var kwargs = dict ();
/* 000874 */ 		if (arguments.length) {
/* 000874 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000874 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000874 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000874 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000874 */ 					switch (__attrib0__) {
/* 000874 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000874 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000874 */ 					}
/* 000874 */ 				}
/* 000874 */ 				delete kwargs.__kwargtrans__;
/* 000874 */ 			}
/* 000874 */ 		}
/* 000874 */ 		else {
/* 000874 */ 		}
/* 000877 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000878 */ 			return false;
/* 000878 */ 		}
/* 000880 */ 		if (__t__ (!__t__ (((function () {
/* 000880 */ 			var __accu0__ = cls;
/* 000880 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000880 */ 		}) ())))) {
/* 000883 */ 			return false;
/* 000883 */ 		}
/* 000885 */ 		return true;
/* 000885 */ 	});},
/* 000891 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000891 */ 		if (arguments.length) {
/* 000891 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000891 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000891 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000891 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000891 */ 					switch (__attrib0__) {
/* 000891 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000891 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000891 */ 					}
/* 000891 */ 				}
/* 000891 */ 			}
/* 000891 */ 		}
/* 000891 */ 		else {
/* 000891 */ 		}
/* 000892 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000893 */ 			(function () {
/* 000893 */ 				var __accu0__ = logger;
/* 000893 */ 				return __call__ (__accu0__.debug, __accu0__, 'LatexDelimitedGroupParser encountered the expected closing brace %r', token);
/* 000893 */ 			}) ();
/* 000897 */ 			return true;
/* 000897 */ 		}
/* 000898 */ 		return false;
/* 000898 */ 	});},
/* 000901 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000901 */ 		if (arguments.length) {
/* 000901 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000901 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000901 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000901 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000901 */ 					switch (__attrib0__) {
/* 000901 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000901 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000901 */ 					}
/* 000901 */ 				}
/* 000901 */ 			}
/* 000901 */ 		}
/* 000901 */ 		else {
/* 000901 */ 		}
/* 000909 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000909 */ 	});}
/* 000909 */ });
/* 000913 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000913 */ 	__module__: __name__,
/* 000932 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000932 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000932 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000932 */ 		};
/* 000932 */ 		var kwargs = dict ();
/* 000932 */ 		if (arguments.length) {
/* 000932 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000932 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000932 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000932 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000932 */ 					switch (__attrib0__) {
/* 000932 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000932 */ 					}
/* 000932 */ 				}
/* 000932 */ 				delete kwargs.__kwargtrans__;
/* 000932 */ 			}
/* 000932 */ 		}
/* 000932 */ 		else {
/* 000932 */ 		}
/* 000936 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000936 */ 	});}
/* 000936 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map