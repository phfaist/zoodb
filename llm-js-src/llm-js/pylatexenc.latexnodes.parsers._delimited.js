/* 000001 */ // Transcrypt'ed from Python, 2022-10-02 16:34:48
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000046 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000045 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000041 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000040 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, __all__, _unicode_from_str, format_pos} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerTokenParseError, LatexWalkerParseError, LatexWalkerNodesParseError, LatexParserBase, LatexGeneralNodesParser, get_updated_parsing_state_from_delta, __all__, format_pos, LatexWalkerError, nodes, LatexWalkerParseErrorFormatter, LatexWalkerEndOfStream, _unicode_from_str};
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
/* 000354 */ 			var __except0__ = __call__ (LatexDelimitedExpressionParserOpeningDelimiterNotFound, null, __kwargtrans__ ({msg: __mod__ ('Expected an opening LaTeX delimiter (%s), got %s/‘%s’%s', tuple ([acceptable_delimiters_msg, first_token.tok, first_token.arg, (__t__ (first_token.pre_space) ? ' with leading whitespace' : '')])), first_tokens: [first_token]}));
/* 000354 */ 			__except0__.__cause__ = null;
/* 000354 */ 			throw __except0__;
/* 000354 */ 		}
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
/* 000456 */ 		// pass;
/* 000456 */ 	});},
/* 000463 */ 	get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000463 */ 		if (arguments.length) {
/* 000463 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000463 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000463 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000463 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000463 */ 					switch (__attrib0__) {
/* 000463 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000463 */ 					}
/* 000463 */ 				}
/* 000463 */ 			}
/* 000463 */ 		}
/* 000463 */ 		else {
/* 000463 */ 		}
/* 000477 */ 		if (__t__ (self.child_parsing_state_delta !== null)) {
/* 000478 */ 			// pass;
/* 000482 */ 			return __call__ (get_updated_parsing_state_from_delta, null, self.group_parsing_state, self.child_parsing_state_delta, self.latex_walker);
/* 000482 */ 		}
/* 000488 */ 		// pass;
/* 000491 */ 		return parsing_state;
/* 000491 */ 	});},
/* 000494 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000494 */ 		if (arguments.length) {
/* 000494 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000494 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000494 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000494 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000494 */ 					switch (__attrib0__) {
/* 000494 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000494 */ 					}
/* 000494 */ 				}
/* 000494 */ 			}
/* 000494 */ 		}
/* 000494 */ 		else {
/* 000494 */ 		}
/* 000504 */ 		return opening_delimiter;
/* 000504 */ 	});},
/* 000507 */ 	get get_parsed_delimiters () {return __get__ (this, function (self) {
/* 000507 */ 		if (arguments.length) {
/* 000507 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000507 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000507 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000507 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000507 */ 					switch (__attrib0__) {
/* 000507 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000507 */ 					}
/* 000507 */ 				}
/* 000507 */ 			}
/* 000507 */ 		}
/* 000507 */ 		else {
/* 000507 */ 		}
/* 000542 */ 		var first_token = self.first_token;
/* 000543 */ 		var delimiters = self.delimiters;
/* 000545 */ 		if (__t__ (delimiters === null)) {
/* 000546 */ 			var delimiters = first_token.arg;
/* 000546 */ 		}
/* 000548 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000549 */ 			var opening_delimiter = delimiters;
/* 000550 */ 			var closing_delimiter = (function () {
/* 000550 */ 				var __accu0__ = self;
/* 000550 */ 				return __call__ (__accu0__.get_matching_delimiter, __accu0__, opening_delimiter);
/* 000550 */ 			}) ();
/* 000551 */ 			return tuple ([opening_delimiter, closing_delimiter]);
/* 000551 */ 		}
/* 000553 */ 		return delimiters;
/* 000553 */ 	});},
/* 000555 */ 	get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000555 */ 		if (arguments.length) {
/* 000555 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000555 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000555 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000555 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000555 */ 					switch (__attrib0__) {
/* 000555 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000555 */ 					}
/* 000555 */ 				}
/* 000555 */ 			}
/* 000555 */ 		}
/* 000555 */ 		else {
/* 000555 */ 		}
/* 000570 */ 		if (__t__ (__getitem__ (self.parsed_delimiters, 1))) {
/* 000571 */ 			var expected_matching = (function () {
/* 000571 */ 				var __accu0__ = 'matching ‘{}’';
/* 000571 */ 				return __call__ (__accu0__.format, __accu0__, __getitem__ (self.parsed_delimiters, 1));
/* 000571 */ 			}) ();
/* 000571 */ 		}
/* 000572 */ 		else {
/* 000573 */ 			var expected_matching = 'matching closing delimiter';
/* 000573 */ 		}
/* 000580 */ 		return __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({make_child_parsing_state: self.make_child_parsing_state, stop_token_condition: self.stop_token_condition, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000580 */ 			var __accu0__ = 'Expected {} after ‘{}’';
/* 000580 */ 			return __call__ (__accu0__.format, __accu0__, expected_matching, __getitem__ (self.parsed_delimiters, 0));
/* 000580 */ 		}) ()}));
/* 000580 */ 	});},
/* 000583 */ 	get get_open_context_description () {return __get__ (this, function (self) {
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000590 */ 		return tuple ([(function () {
/* 000590 */ 			var __accu0__ = 'Delimited expression ‘{}…{}’';
/* 000590 */ 			return __call__ (__accu0__.format, __accu0__, ...self.parsed_delimiters);
/* 000590 */ 		}) (), self.first_token]);
/* 000590 */ 	});},
/* 000595 */ 	get make_group_node_and_parsing_state_delta () {return __get__ (this, function (self, latex_walker, token_reader, nodelist, parsing_state_delta) {
/* 000595 */ 		if (arguments.length) {
/* 000595 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000595 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000595 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000595 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000595 */ 					switch (__attrib0__) {
/* 000595 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 					}
/* 000595 */ 				}
/* 000595 */ 			}
/* 000595 */ 		}
/* 000595 */ 		else {
/* 000595 */ 		}
/* 000608 */ 		var pos_end = (function () {
/* 000608 */ 			var __accu0__ = token_reader;
/* 000608 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000608 */ 		}) ();
/* 000610 */ 		var group_node = (function () {
/* 000610 */ 			var __accu0__ = latex_walker;
/* 000610 */ 			return __call__ (__accu0__.make_node, __accu0__, nodes.LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.group_parsing_state, delimiters: self.parsed_delimiters, pos: self.first_token.pos, pos_end: pos_end}));
/* 000610 */ 		}) ();
/* 000619 */ 		return tuple ([group_node, parsing_state_delta]);
/* 000619 */ 	});}
/* 000619 */ });
/* 000629 */ export var LatexDelimitedExpressionParser =  __class__ ('LatexDelimitedExpressionParser', [LatexParserBase], {
/* 000629 */ 	__module__: __name__,
/* 000670 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class, optional, allow_pre_space, discard_parsing_state_delta) {
/* 000670 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000670 */ 			var optional = false;
/* 000670 */ 		};
/* 000670 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000670 */ 			var allow_pre_space = false;
/* 000670 */ 		};
/* 000670 */ 		if (typeof discard_parsing_state_delta == 'undefined' || (discard_parsing_state_delta != null && discard_parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000670 */ 			var discard_parsing_state_delta = true;
/* 000670 */ 		};
/* 000670 */ 		var kwargs = dict ();
/* 000670 */ 		if (arguments.length) {
/* 000670 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000670 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000670 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000670 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000670 */ 					switch (__attrib0__) {
/* 000670 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						case 'discard_parsing_state_delta': var discard_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000670 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000670 */ 					}
/* 000670 */ 				}
/* 000670 */ 				delete kwargs.__kwargtrans__;
/* 000670 */ 			}
/* 000670 */ 		}
/* 000670 */ 		else {
/* 000670 */ 		}
/* 000677 */ 		__call__ (__call__ (__super__, null, LatexDelimitedExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000678 */ 		self.delimiters = delimiters;
/* 000679 */ 		self.optional = optional;
/* 000680 */ 		self.allow_pre_space = allow_pre_space;
/* 000689 */ 		self.discard_parsing_state_delta = discard_parsing_state_delta;
/* 000691 */ 		self.delimited_expression_parser_info_class = delimited_expression_parser_info_class;
/* 000691 */ 	});},
/* 000694 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000694 */ 		if (arguments.length) {
/* 000694 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000694 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000694 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000694 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000694 */ 					switch (__attrib0__) {
/* 000694 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000694 */ 					}
/* 000694 */ 				}
/* 000694 */ 			}
/* 000694 */ 		}
/* 000694 */ 		else {
/* 000694 */ 		}
/* 000695 */ 		return self.optional;
/* 000695 */ 	});},
/* 000698 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000698 */ 		var kwargs = dict ();
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 				delete kwargs.__kwargtrans__;
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000701 */ 		var group_parsing_state = (function () {
/* 000701 */ 			var __accu0__ = self.delimited_expression_parser_info_class;
/* 000701 */ 			return __call__ (__accu0__.get_group_parsing_state, __accu0__, __kwargtrans__ ({parsing_state: parsing_state, delimiters: self.delimiters, delimited_expression_parser: self, latex_walker: latex_walker}));
/* 000701 */ 		}) ();
/* 000708 */ 		var opening_delimiter_tokens = null;
/* 000710 */ 		try {
/* 000712 */ 			var opening_delimiter_tokens = (function () {
/* 000712 */ 				var __accu0__ = self.delimited_expression_parser_info_class;
/* 000712 */ 				return __call__ (__accu0__.parse_initial, __accu0__, __kwargtrans__ ({delimiters: self.delimiters, allow_pre_space: self.allow_pre_space, latex_walker: latex_walker, token_reader: token_reader, group_parsing_state: group_parsing_state, delimited_expression_parser: self}));
/* 000712 */ 			}) ();
/* 000712 */ 		}
/* 000712 */ 		catch (__except0__) {
/* 000712 */ 			if (isinstance (__except0__, LatexDelimitedExpressionParserOpeningDelimiterNotFound)) {
/* 000712 */ 				var e = __except0__;
/* 000722 */ 				var recovery_token = null;
/* 000723 */ 				if (__t__ (e.first_tokens)) {
/* 000724 */ 					var recovery_token = __getitem__ (e.first_tokens, 0);
/* 000724 */ 				}
/* 000726 */ 				if (__t__ (self.optional)) {
/* 000728 */ 					if (__t__ (e.first_tokens)) {
/* 000729 */ 						(function () {
/* 000729 */ 							var __accu0__ = token_reader;
/* 000729 */ 							return __call__ (__accu0__.move_to_token, __accu0__, recovery_token);
/* 000729 */ 						}) ();
/* 000729 */ 					}
/* 000730 */ 					return tuple ([null, null]);
/* 000730 */ 				}
/* 000735 */ 				var __except1__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: e.msg, recovery_nodes: (function () {
/* 000735 */ 					var __accu0__ = latex_walker;
/* 000735 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: group_parsing_state, pos: recovery_token.pos, pos_end: recovery_token.pos}));
/* 000735 */ 				}) (), recovery_at_token: recovery_token, error_type_info: dict ({'what': 'nodes_delimited_expected_opening_delimiter_not_found', 'first_tokens': e.first_tokens})}));
/* 000735 */ 				__except1__.__cause__ = null;
/* 000735 */ 				throw __except1__;
/* 000735 */ 			}
/* 000735 */ 			else {
/* 000735 */ 				throw __except0__;
/* 000735 */ 			}
/* 000735 */ 		}
/* 000749 */ 		var contents_parser_info = (function () {
/* 000749 */ 			var __accu0__ = self;
/* 000749 */ 			return __call__ (__accu0__.delimited_expression_parser_info_class, __accu0__, self, __kwargtrans__ ({opening_delimiter_tokens: opening_delimiter_tokens, group_parsing_state: group_parsing_state, parsing_state: parsing_state, delimiters: self.delimiters, latex_walker: latex_walker}));
/* 000749 */ 		}) ();
/* 000758 */ 		(function () {
/* 000758 */ 			var __accu0__ = contents_parser_info;
/* 000758 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000758 */ 		}) ();
/* 000761 */ 		var contents_parser = (function () {
/* 000761 */ 			var __accu0__ = contents_parser_info;
/* 000761 */ 			return __call__ (__accu0__.make_content_parser, __accu0__, latex_walker, token_reader);
/* 000761 */ 		}) ();
/* 000766 */ 		var __left0__ = (function () {
/* 000766 */ 			var __accu0__ = latex_walker;
/* 000770 */ 			return __call__ (__accu0__.parse_content, __accu0__, contents_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: contents_parser_info.contents_parsing_state, open_context: (function () {
/* 000770 */ 				var __accu1__ = contents_parser_info;
/* 000770 */ 				return __call__ (__accu1__.get_open_context_description, __accu1__);
/* 000770 */ 			}) ()}));
/* 000770 */ 		}) ();
/* 000770 */ 		var nodelist = __left0__ [0];
/* 000770 */ 		var parsing_state_delta = __left0__ [1];
/* 000775 */ 		if (__t__ (__t__ (self.discard_parsing_state_delta) && parsing_state_delta !== null)) {
/* 000776 */ 			// pass;
/* 000780 */ 			var parsing_state_delta = null;
/* 000780 */ 		}
/* 000783 */ 		var __left0__ = (function () {
/* 000783 */ 			var __accu0__ = contents_parser_info;
/* 000783 */ 			return __call__ (__accu0__.make_group_node_and_parsing_state_delta, __accu0__, __kwargtrans__ ({latex_walker: latex_walker, token_reader: token_reader, nodelist: nodelist, parsing_state_delta: parsing_state_delta}));
/* 000783 */ 		}) ();
/* 000783 */ 		var groupnode = __left0__ [0];
/* 000783 */ 		var parsing_state_delta = __left0__ [1];
/* 000790 */ 		return tuple ([groupnode, parsing_state_delta]);
/* 000790 */ 	});}
/* 000790 */ });
/* 000800 */ export var LatexDelimitedGroupParserInfo =  __class__ ('LatexDelimitedGroupParserInfo', [LatexDelimitedExpressionParserInfo], {
/* 000800 */ 	__module__: __name__,
/* 000804 */ 	get get_group_parsing_state () {return __getcm__ (this, function (cls, parsing_state, delimiters, delimited_expression_parser, latex_walker) {
/* 000804 */ 		var kwargs = dict ();
/* 000804 */ 		if (arguments.length) {
/* 000804 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000804 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000804 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000804 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000804 */ 					switch (__attrib0__) {
/* 000804 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000804 */ 					}
/* 000804 */ 				}
/* 000804 */ 				delete kwargs.__kwargtrans__;
/* 000804 */ 			}
/* 000804 */ 		}
/* 000804 */ 		else {
/* 000804 */ 		}
/* 000830 */ 		if (__t__ (delimiters === null)) {
/* 000831 */ 			return parsing_state;
/* 000831 */ 		}
/* 000833 */ 		if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000834 */ 			if (__t__ (!__in__ (delimiters, parsing_state._latex_group_delimchars_by_open))) {
/* 000836 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000836 */ 					var __accu0__ = 'Delimiter ‘{}’ not a valid latex group delimiter ({!r})';
/* 000836 */ 					return __call__ (__accu0__.format, __accu0__, delimiters, parsing_state.latex_group_delimiters);
/* 000836 */ 				}) ());
/* 000836 */ 				__except0__.__cause__ = null;
/* 000836 */ 				throw __except0__;
/* 000836 */ 			}
/* 000839 */ 			return parsing_state;
/* 000839 */ 		}
/* 000841 */ 		var delimiters_t = __call__ (tuple, null, delimiters);
/* 000846 */ 		var __iterable0__ = parsing_state.latex_group_delimiters;
/* 000846 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000846 */ 			var odcd = __getitem__ (__iterable0__, __index0__);
/* 000847 */ 			if (__t__ (__eq__ (delimiters_t, odcd))) {
/* 000849 */ 				return parsing_state;
/* 000849 */ 			}
/* 000849 */ 		}
/* 000852 */ 		return (function () {
/* 000852 */ 			var __accu0__ = parsing_state;
/* 000852 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({latex_group_delimiters: __add__ (parsing_state.latex_group_delimiters, [delimiters_t])}));
/* 000852 */ 		}) ();
/* 000852 */ 	});},
/* 000859 */ 	get get_acceptable_open_delimiter_list () {return __getcm__ (this, function (cls, delimiters, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000859 */ 		var kwargs = dict ();
/* 000859 */ 		if (arguments.length) {
/* 000859 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000859 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000859 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000859 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000859 */ 					switch (__attrib0__) {
/* 000859 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'group_parsing_state': var group_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'delimited_expression_parser': var delimited_expression_parser = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000859 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000859 */ 					}
/* 000859 */ 				}
/* 000859 */ 				delete kwargs.__kwargtrans__;
/* 000859 */ 			}
/* 000859 */ 		}
/* 000859 */ 		else {
/* 000859 */ 		}
/* 000865 */ 		if (__t__ (delimiters !== null)) {
/* 000866 */ 			if (__t__ (__call__ (isinstance, null, delimiters, _basestring))) {
/* 000867 */ 				return [delimiters];
/* 000867 */ 			}
/* 000868 */ 			else {
/* 000869 */ 				return [__getitem__ (delimiters, 0)];
/* 000869 */ 			}
/* 000869 */ 		}
/* 000871 */ 		return (function () {
/* 000871 */ 			var __accu0__ = [];
/* 000871 */ 			var __iterable0__ = group_parsing_state.latex_group_delimiters;
/* 000871 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000873 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000873 */ 				var od = __left0__ [0];
/* 000873 */ 				var cd = __left0__ [1];
/* 000873 */ 				(function () {
/* 000873 */ 					var __accu1__ = __accu0__;
/* 000873 */ 					return __call__ (__accu1__.append, __accu1__, od);
/* 000873 */ 				}) ();
/* 000873 */ 			}
/* 000873 */ 			return __accu0__;
/* 000873 */ 		}) ();
/* 000873 */ 	});},
/* 000877 */ 	get is_opening_delimiter () {return __getcm__ (this, function (cls, delimiters, first_token, group_parsing_state, delimited_expression_parser, latex_walker) {
/* 000877 */ 		var kwargs = dict ();
/* 000877 */ 		if (arguments.length) {
/* 000877 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000877 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000877 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000877 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000877 */ 					switch (__attrib0__) {
/* 000877 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000877 */ 						case 'first_token': var first_token = __allkwargs0__ [__attrib0__]; break;
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
/* 000880 */ 		if (__t__ (__ne__ (first_token.tok, 'brace_open'))) {
/* 000881 */ 			return false;
/* 000881 */ 		}
/* 000883 */ 		if (__t__ (!__t__ (((function () {
/* 000883 */ 			var __accu0__ = cls;
/* 000883 */ 			return __call__ (__accu0__.check_opening_delimiter, __accu0__, __kwargtrans__ ({delimiters: delimiters, parsed_opening_delimiter: first_token.arg, latex_walker: latex_walker}));
/* 000883 */ 		}) ())))) {
/* 000886 */ 			return false;
/* 000886 */ 		}
/* 000888 */ 		return true;
/* 000888 */ 	});},
/* 000894 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000894 */ 		if (arguments.length) {
/* 000894 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000894 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000894 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000894 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000894 */ 					switch (__attrib0__) {
/* 000894 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000894 */ 					}
/* 000894 */ 				}
/* 000894 */ 			}
/* 000894 */ 		}
/* 000894 */ 		else {
/* 000894 */ 		}
/* 000895 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000896 */ 			// pass;
/* 000902 */ 			return true;
/* 000902 */ 		}
/* 000903 */ 		return false;
/* 000903 */ 	});},
/* 000906 */ 	get get_matching_delimiter () {return __get__ (this, function (self, opening_delimiter) {
/* 000906 */ 		if (arguments.length) {
/* 000906 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000906 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000906 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000906 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000906 */ 					switch (__attrib0__) {
/* 000906 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 						case 'opening_delimiter': var opening_delimiter = __allkwargs0__ [__attrib0__]; break;
/* 000906 */ 					}
/* 000906 */ 				}
/* 000906 */ 			}
/* 000906 */ 		}
/* 000906 */ 		else {
/* 000906 */ 		}
/* 000914 */ 		return __getitem__ (self.group_parsing_state._latex_group_delimchars_by_open, opening_delimiter);
/* 000914 */ 	});}
/* 000914 */ });
/* 000918 */ export var LatexDelimitedGroupParser =  __class__ ('LatexDelimitedGroupParser', [LatexDelimitedExpressionParser], {
/* 000918 */ 	__module__: __name__,
/* 000937 */ 	get __init__ () {return __get__ (this, function (self, delimiters, delimited_expression_parser_info_class) {
/* 000937 */ 		if (typeof delimited_expression_parser_info_class == 'undefined' || (delimited_expression_parser_info_class != null && delimited_expression_parser_info_class.hasOwnProperty ("__kwargtrans__"))) {;
/* 000937 */ 			var delimited_expression_parser_info_class = LatexDelimitedGroupParserInfo;
/* 000937 */ 		};
/* 000937 */ 		var kwargs = dict ();
/* 000937 */ 		if (arguments.length) {
/* 000937 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000937 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000937 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000937 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000937 */ 					switch (__attrib0__) {
/* 000937 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000937 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000937 */ 						case 'delimited_expression_parser_info_class': var delimited_expression_parser_info_class = __allkwargs0__ [__attrib0__]; break;
/* 000937 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000937 */ 					}
/* 000937 */ 				}
/* 000937 */ 				delete kwargs.__kwargtrans__;
/* 000937 */ 			}
/* 000937 */ 		}
/* 000937 */ 		else {
/* 000937 */ 		}
/* 000941 */ 		__call__ (__call__ (__super__, null, LatexDelimitedGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: delimited_expression_parser_info_class}, kwargs)));
/* 000941 */ 	});}
/* 000941 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._delimited.map