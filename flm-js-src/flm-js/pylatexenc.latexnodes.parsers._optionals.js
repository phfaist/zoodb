/* 000001 */ // Transcrypt'ed from Python, 2025-02-21 21:50:03
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000050 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes._parsingstatedelta.js';
/* 000045 */ import {LatexCharsNode, LatexGroupNode, LatexNodeList} from './pylatexenc.latexnodes.nodes.js';
/* 000044 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000041 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000040 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNodeList, LatexCharsNode, LatexGroupNode, get_updated_parsing_state_from_delta, LatexDelimitedGroupParser, LatexExpressionParser, LatexParserBase};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._optionals';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000058 */ export var LatexOptionalSquareBracketsParser =  __class__ ('LatexOptionalSquareBracketsParser', [LatexDelimitedGroupParser], {
/* 000058 */ 	__module__: __name__,
/* 000062 */ 	get __init__ () {return __get__ (this, function (self, delimiters, optional) {
/* 000062 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000062 */ 			var delimiters = tuple (['[', ']']);
/* 000062 */ 		};
/* 000062 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000062 */ 			var optional = true;
/* 000062 */ 		};
/* 000062 */ 		var kwargs = dict ();
/* 000062 */ 		if (arguments.length) {
/* 000062 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000062 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000062 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000062 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000062 */ 					switch (__attrib0__) {
/* 000062 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000062 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000062 */ 					}
/* 000062 */ 				}
/* 000062 */ 				delete kwargs.__kwargtrans__;
/* 000062 */ 			}
/* 000062 */ 		}
/* 000062 */ 		else {
/* 000062 */ 		}
/* 000063 */ 		__call__ (__call__ (__super__, null, LatexOptionalSquareBracketsParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, optional: optional}, kwargs)));
/* 000063 */ 	});}
/* 000063 */ });
/* 000074 */ export var LatexOptionalCharsMarkerParser =  __class__ ('LatexOptionalCharsMarkerParser', [LatexParserBase], {
/* 000074 */ 	__module__: __name__,
/* 000090 */ 	get __init__ () {return __get__ (this, function (self, chars_list, following_arg_parser, include_chars_node_before_following_arg, return_none_instead_of_empty, allow_pre_space, return_full_node_list, collect_chars_with_following_arg_as_delimited_group, max_num_args) {
/* 000090 */ 		if (typeof following_arg_parser == 'undefined' || (following_arg_parser != null && following_arg_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var following_arg_parser = null;
/* 000090 */ 		};
/* 000090 */ 		if (typeof include_chars_node_before_following_arg == 'undefined' || (include_chars_node_before_following_arg != null && include_chars_node_before_following_arg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var include_chars_node_before_following_arg = true;
/* 000090 */ 		};
/* 000090 */ 		if (typeof return_none_instead_of_empty == 'undefined' || (return_none_instead_of_empty != null && return_none_instead_of_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var return_none_instead_of_empty = true;
/* 000090 */ 		};
/* 000090 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var allow_pre_space = true;
/* 000090 */ 		};
/* 000090 */ 		if (typeof return_full_node_list == 'undefined' || (return_full_node_list != null && return_full_node_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var return_full_node_list = true;
/* 000090 */ 		};
/* 000090 */ 		if (typeof collect_chars_with_following_arg_as_delimited_group == 'undefined' || (collect_chars_with_following_arg_as_delimited_group != null && collect_chars_with_following_arg_as_delimited_group.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var collect_chars_with_following_arg_as_delimited_group = false;
/* 000090 */ 		};
/* 000090 */ 		if (typeof max_num_args == 'undefined' || (max_num_args != null && max_num_args.hasOwnProperty ("__kwargtrans__"))) {;
/* 000090 */ 			var max_num_args = null;
/* 000090 */ 		};
/* 000090 */ 		var kwargs = dict ();
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'chars_list': var chars_list = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'following_arg_parser': var following_arg_parser = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'include_chars_node_before_following_arg': var include_chars_node_before_following_arg = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'return_none_instead_of_empty': var return_none_instead_of_empty = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'return_full_node_list': var return_full_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'collect_chars_with_following_arg_as_delimited_group': var collect_chars_with_following_arg_as_delimited_group = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'max_num_args': var max_num_args = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 				delete kwargs.__kwargtrans__;
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000100 */ 		__call__ (__call__ (__super__, null, LatexOptionalCharsMarkerParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000102 */ 		if (__t__ (__call__ (isinstance, null, chars_list, str))) {
/* 000105 */ 			var chars_list = (function () {
/* 000105 */ 				var __accu0__ = [];
/* 000105 */ 				var __iterable0__ = chars_list;
/* 000105 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000105 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000105 */ 					(function () {
/* 000105 */ 						var __accu1__ = __accu0__;
/* 000105 */ 						return __call__ (__accu1__.append, __accu1__, c);
/* 000105 */ 					}) ();
/* 000105 */ 				}
/* 000105 */ 				return __accu0__;
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000107 */ 		self.chars_list = (function () {
/* 000107 */ 			var __accu0__ = [];
/* 000107 */ 			var __iterable0__ = chars_list;
/* 000107 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000107 */ 				var chars = __getitem__ (__iterable0__, __index0__);
/* 000107 */ 				(function () {
/* 000107 */ 					var __accu1__ = __accu0__;
/* 000107 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000107 */ 						var __accu2__ = ' ';
/* 000107 */ 						return __call__ (__accu2__.join, __accu2__, (function () {
/* 000107 */ 							var __accu3__ = (function () {
/* 000107 */ 								var __accu4__ = chars;
/* 000107 */ 								return __call__ (__accu4__.strip, __accu4__);
/* 000107 */ 							}) ();
/* 000107 */ 							return __call__ (__accu3__.py_split, __accu3__);
/* 000107 */ 						}) ());
/* 000107 */ 					}) ());
/* 000107 */ 				}) ();
/* 000107 */ 			}
/* 000107 */ 			return __accu0__;
/* 000107 */ 		}) ();
/* 000108 */ 		self.following_arg_parser = following_arg_parser;
/* 000109 */ 		self.include_chars_node_before_following_arg = include_chars_node_before_following_arg;
/* 000111 */ 		self.return_none_instead_of_empty = return_none_instead_of_empty;
/* 000112 */ 		self.allow_pre_space = allow_pre_space;
/* 000113 */ 		self.return_full_node_list = return_full_node_list;
/* 000114 */ 		self.collect_chars_with_following_arg_as_delimited_group = collect_chars_with_following_arg_as_delimited_group;
/* 000116 */ 		self.max_num_args = max_num_args;
/* 000118 */ 		if (__t__ (!__t__ ((self.chars_list)))) {
/* 000119 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000119 */ 				var __accu0__ = 'Invalid chars={!r}, needs to be non-empty string (after stripping whitespce)';
/* 000119 */ 				return __call__ (__accu0__.format, __accu0__, chars);
/* 000119 */ 			}) ());
/* 000119 */ 			__except0__.__cause__ = null;
/* 000119 */ 			throw __except0__;
/* 000119 */ 		}
/* 000123 */ 		if (__t__ (__t__ (!__t__ ((self.return_full_node_list))) && !__t__ ((__t__ (__eq__ (__call__ (len, null, self.chars_list), 1)) || __le__ (self.max_num_args, 1))))) {
/* 000125 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot set return_full_node_list=False if we can have multiple given chars marker options (len(chars_list) > 1 and max_num_args != 1)');
/* 000125 */ 			__except0__.__cause__ = null;
/* 000125 */ 			throw __except0__;
/* 000125 */ 		}
/* 000129 */ 		if (__t__ (__t__ (!__t__ ((self.return_full_node_list))) && self.collect_chars_with_following_arg_as_delimited_group)) {
/* 000131 */ 			var __except0__ = __call__ (ValueError, null, 'If collect_chars_with_following_arg_as_delimited_group=True, then we must have return_full_node_list=True');
/* 000131 */ 			__except0__.__cause__ = null;
/* 000131 */ 			throw __except0__;
/* 000131 */ 		}
/* 000131 */ 	});},
/* 000135 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		return true;
/* 000136 */ 	});},
/* 000138 */ 	get get_following_arg_parser () {return __get__ (this, function (self, chars) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		return self.following_arg_parser;
/* 000139 */ 	});},
/* 000141 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000141 */ 		var kwargs = dict ();
/* 000141 */ 		if (arguments.length) {
/* 000141 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000141 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000141 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000141 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000141 */ 					switch (__attrib0__) {
/* 000141 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000141 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000141 */ 					}
/* 000141 */ 				}
/* 000141 */ 				delete kwargs.__kwargtrans__;
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 		else {
/* 000141 */ 		}
/* 000143 */ 		var num_args = 0;
/* 000145 */ 		var full_nodelist = [];
/* 000146 */ 		var empty_pos = null;
/* 000148 */ 		var remaining_chars_list = self.chars_list;
/* 000150 */ 		while (__t__ (__t__ (self.max_num_args === null) || __lt__ (num_args, self.max_num_args))) {
/* 000153 */ 			var __left0__ = (function () {
/* 000153 */ 				var __accu0__ = self;
/* 000153 */ 				return __call__ (__accu0__._parse_single, __accu0__, remaining_chars_list, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000153 */ 			}) ();
/* 000153 */ 			var arg_nodes = __left0__ [0];
/* 000153 */ 			var parsing_state_delta = __left0__ [1];
/* 000153 */ 			var matched_chars = __left0__ [2];
/* 000153 */ 			var arg_pos = __left0__ [3];
/* 000156 */ 			if (__t__ (empty_pos === null)) {
/* 000157 */ 				var empty_pos = arg_pos;
/* 000157 */ 			}
/* 000159 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000160 */ 				(function () {
/* 000160 */ 					var __accu0__ = logger;
/* 000160 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing state delta ignored after parsing optional chars marker: %r', parsing_state_delta);
/* 000160 */ 				}) ();
/* 000160 */ 			}
/* 000163 */ 			if (__t__ (matched_chars === null)) {
/* 000163 */ 				break;
/* 000163 */ 			}
/* 000166 */ 			var num_args = __call__ (__iadd__, null, num_args, 1);
/* 000167 */ 			var full_nodelist = __call__ (__iadd__, null, full_nodelist, arg_nodes);
/* 000168 */ 			var remaining_chars_list = (function () {
/* 000168 */ 				var __accu0__ = [];
/* 000168 */ 				var __iterable0__ = remaining_chars_list;
/* 000168 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000168 */ 					var chars = __getitem__ (__iterable0__, __index0__);
/* 000168 */ 					if (__t__ (__ne__ (chars, matched_chars))) {
/* 000169 */ 						(function () {
/* 000169 */ 							var __accu1__ = __accu0__;
/* 000169 */ 							return __call__ (__accu1__.append, __accu1__, chars);
/* 000169 */ 						}) ();
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 				return __accu0__;
/* 000169 */ 			}) ();
/* 000169 */ 		}
/* 000171 */ 		if (__t__ (__eq__ (num_args, 0))) {
/* 000172 */ 			if (__t__ (self.return_none_instead_of_empty)) {
/* 000173 */ 				return tuple ([null, null]);
/* 000173 */ 			}
/* 000174 */ 			var emptynl = (function () {
/* 000174 */ 				var __accu0__ = latex_walker;
/* 000174 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({pos: empty_pos, pos_end: empty_pos, parsing_state: parsing_state}));
/* 000174 */ 			}) ();
/* 000180 */ 			return tuple ([emptynl, null]);
/* 000180 */ 		}
/* 000182 */ 		if (__t__ (!__t__ ((self.return_full_node_list)))) {
/* 000183 */ 			if (__t__ (__ne__ (__call__ (len, null, full_nodelist), 1))) {
/* 000184 */ 				(function () {
/* 000184 */ 					var __accu0__ = logger;
/* 000184 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal error, node list here should have length == 1');
/* 000184 */ 				}) ();
/* 000184 */ 			}
/* 000185 */ 			var final_node_obj = __getitem__ (full_nodelist, 0);
/* 000185 */ 		}
/* 000186 */ 		else {
/* 000187 */ 			var final_node_obj = (function () {
/* 000187 */ 				var __accu0__ = latex_walker;
/* 000187 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, full_nodelist, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000187 */ 			}) ();
/* 000187 */ 		}
/* 000192 */ 		return tuple ([final_node_obj, null]);
/* 000192 */ 	});},
/* 000197 */ 	get _parse_single () {return __get__ (this, function (self, remaining_chars_list, latex_walker, token_reader, parsing_state) {
/* 000197 */ 		var kwargs = dict ();
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'remaining_chars_list': var remaining_chars_list = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 				delete kwargs.__kwargtrans__;
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 		}
/* 000200 */ 		var orig_pos_tok = (function () {
/* 000200 */ 			var __accu0__ = token_reader;
/* 000200 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000200 */ 		}) ();
/* 000201 */ 		var pos_end = null;
/* 000202 */ 		var read_s = '';
/* 000203 */ 		var match_found = false;
/* 000204 */ 		var matched_chars = null;
/* 000205 */ 		var first_token = null;
/* 000206 */ 		try {
/* 000207 */ 			while (__t__ (true)) {
/* 000208 */ 				var tok = (function () {
/* 000208 */ 					var __accu0__ = token_reader;
/* 000208 */ 					return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000208 */ 				}) ();
/* 000209 */ 				if (__t__ (first_token === null)) {
/* 000210 */ 					var first_token = tok;
/* 000211 */ 					if (__t__ (__t__ (__call__ (len, null, first_token.pre_space)) && !__t__ ((self.allow_pre_space)))) {
/* 000213 */ 						return tuple ([null, null, null, first_token.pos]);
/* 000213 */ 					}
/* 000213 */ 				}
/* 000216 */ 				if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000218 */ 					tok.tok = 'char';
/* 000219 */ 					tok.arg = tok.arg.specials_chars;
/* 000219 */ 				}
/* 000220 */ 				if (__t__ (__ne__ (tok.tok, 'char'))) {
/* 000220 */ 					break;
/* 000220 */ 				}
/* 000222 */ 				if (__t__ (__t__ (read_s) && __call__ (len, null, tok.pre_space))) {
/* 000223 */ 					var read_s = __call__ (__iadd__, null, read_s, ' ');
/* 000223 */ 				}
/* 000224 */ 				var read_s = __call__ (__iadd__, null, read_s, tok.arg);
/* 000225 */ 				if (__t__ (__in__ (read_s, self.chars_list))) {
/* 000226 */ 					var match_found = true;
/* 000227 */ 					var matched_chars = read_s;
/* 000228 */ 					var pos_end = tok.pos_end;
/* 000228 */ 					break;
/* 000228 */ 				}
/* 000230 */ 				if (__t__ (__eq__ (__call__ (len, null, (function () {
/* 000230 */ 					var __accu0__ = [];
/* 000230 */ 					var __iterable0__ = self.chars_list;
/* 000230 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000230 */ 						var chars = __getitem__ (__iterable0__, __index0__);
/* 000231 */ 						if (__t__ ((function () {
/* 000231 */ 							var __accu1__ = chars;
/* 000231 */ 							return __call__ (__accu1__.startswith, __accu1__, read_s);
/* 000231 */ 						}) ())) {
/* 000231 */ 							(function () {
/* 000231 */ 								var __accu1__ = __accu0__;
/* 000231 */ 								return __call__ (__accu1__.append, __accu1__, chars);
/* 000231 */ 							}) ();
/* 000231 */ 						}
/* 000231 */ 					}
/* 000231 */ 					return __accu0__;
/* 000231 */ 				}) ()), 0))) {
/* 000231 */ 					break;
/* 000231 */ 				}
/* 000231 */ 			}
/* 000231 */ 		}
/* 000231 */ 		finally {
/* 000236 */ 			if (__t__ (!__t__ ((match_found)))) {
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu0__ = token_reader;
/* 000237 */ 					return __call__ (__accu0__.move_to_token, __accu0__, orig_pos_tok);
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000237 */ 		}
/* 000239 */ 		if (__t__ (!__t__ ((match_found)))) {
/* 000241 */ 			// pass;
/* 000244 */ 			return tuple ([null, null, null, orig_pos_tok.pos]);
/* 000244 */ 		}
/* 000246 */ 		// pass;
/* 000250 */ 		var arg_pos = orig_pos_tok.pos;
/* 000252 */ 		var following_arg_parser = (function () {
/* 000252 */ 			var __accu0__ = self;
/* 000252 */ 			return __call__ (__accu0__.get_following_arg_parser, __accu0__, read_s);
/* 000252 */ 		}) ();
/* 000254 */ 		var parsing_state_delta = null;
/* 000255 */ 		var following_nodes = null;
/* 000257 */ 		if (__t__ (following_arg_parser !== null)) {
/* 000258 */ 			var __left0__ = (function () {
/* 000258 */ 				var __accu0__ = latex_walker;
/* 000258 */ 				return __call__ (__accu0__.parse_content, __accu0__, following_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000258 */ 			}) ();
/* 000258 */ 			var following_nodes = __left0__ [0];
/* 000258 */ 			var parsing_state_delta = __left0__ [1];
/* 000258 */ 		}
/* 000264 */ 		if (__t__ (self.collect_chars_with_following_arg_as_delimited_group)) {
/* 000265 */ 			if (__t__ (__call__ (isinstance, null, following_nodes, LatexNodeList))) {
/* 000266 */ 				var final_nl = following_nodes;
/* 000266 */ 			}
/* 000267 */ 			else {
/* 000268 */ 				var final_nl = (function () {
/* 000268 */ 					var __accu0__ = latex_walker;
/* 000268 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [following_nodes], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000268 */ 				}) ();
/* 000268 */ 			}
/* 000272 */ 			var final_nl_pos_end = final_nl.pos_end;
/* 000273 */ 			if (__t__ (final_nl_pos_end === null)) {
/* 000274 */ 				var final_nl_pos_end = arg_pos;
/* 000274 */ 			}
/* 000276 */ 			var nodes = [(function () {
/* 000276 */ 				var __accu0__ = latex_walker;
/* 000276 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([matched_chars, '']), nodelist: final_nl, pos: arg_pos, pos_end: final_nl_pos_end}));
/* 000276 */ 			}) ()];
/* 000285 */ 			return tuple ([nodes, parsing_state_delta, matched_chars, arg_pos]);
/* 000285 */ 		}
/* 000287 */ 		var chars_node = null;
/* 000288 */ 		if (__t__ (__t__ (__t__ (!__t__ ((self.return_full_node_list))) && following_arg_parser === null) || self.include_chars_node_before_following_arg)) {
/* 000290 */ 			var chars_node = (function () {
/* 000290 */ 				var __accu0__ = latex_walker;
/* 000290 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: matched_chars, pos: arg_pos, pos_end: pos_end}));
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000298 */ 		if (__t__ (!__t__ ((self.return_full_node_list)))) {
/* 000299 */ 			if (__t__ (following_arg_parser !== null)) {
/* 000300 */ 				return tuple ([[following_nodes], parsing_state_delta, matched_chars, arg_pos]);
/* 000300 */ 			}
/* 000301 */ 			else {
/* 000301 */ 				assert (chars_node !== null);
/* 000303 */ 				return tuple ([[chars_node], parsing_state_delta, matched_chars, arg_pos]);
/* 000303 */ 			}
/* 000303 */ 		}
/* 000305 */ 		var nodes = [];
/* 000306 */ 		if (__t__ (self.include_chars_node_before_following_arg)) {
/* 000306 */ 			assert (chars_node !== null);
/* 000308 */ 			(function () {
/* 000308 */ 				var __accu0__ = nodes;
/* 000308 */ 				return __call__ (__accu0__.append, __accu0__, chars_node);
/* 000308 */ 			}) ();
/* 000308 */ 		}
/* 000310 */ 		if (__t__ (following_arg_parser !== null)) {
/* 000311 */ 			if (__t__ (__call__ (isinstance, null, following_nodes, LatexNodeList))) {
/* 000312 */ 				var following_nodes_as_list = following_nodes;
/* 000312 */ 			}
/* 000313 */ 			else {
/* 000314 */ 				var following_nodes_as_list = [following_nodes];
/* 000314 */ 			}
/* 000316 */ 			var nodes = __call__ (__iadd__, null, nodes, following_nodes_as_list);
/* 000316 */ 		}
/* 000318 */ 		return tuple ([nodes, parsing_state_delta, matched_chars, arg_pos]);
/* 000318 */ 	});}
/* 000318 */ });
/* 000325 */ export var LatexOptionalEmbellishmentArgsParser =  __class__ ('LatexOptionalEmbellishmentArgsParser', [LatexOptionalCharsMarkerParser], {
/* 000325 */ 	__module__: __name__,
/* 000331 */ 	get __init__ () {return __get__ (this, function (self, embellishment_chars, allow_pre_space) {
/* 000331 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var allow_pre_space = true;
/* 000331 */ 		};
/* 000331 */ 		var kwargs = dict ();
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'embellishment_chars': var embellishment_chars = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 				delete kwargs.__kwargtrans__;
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000334 */ 		__call__ (__call__ (__super__, null, LatexOptionalEmbellishmentArgsParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({chars_list: embellishment_chars, following_arg_parser: __call__ (LatexExpressionParser, null, __kwargtrans__ ({allow_pre_space: allow_pre_space, return_full_node_list: true})), allow_pre_space: allow_pre_space, collect_chars_with_following_arg_as_delimited_group: true, return_full_node_list: true}, kwargs)));
/* 000343 */ 		self.embellishment_chars = embellishment_chars;
/* 000343 */ 	});}
/* 000343 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._optionals.map