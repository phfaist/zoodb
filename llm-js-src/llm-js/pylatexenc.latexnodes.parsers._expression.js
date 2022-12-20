/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:17:37
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000049 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNode, LatexParserBase, _update_posposend_from_nodelist, LatexWalkerEndOfStream, LatexMacroNode, LatexSpecialsNode, LatexEnvironmentNode, LatexCommentNode, LatexWalkerParseError, ParsedArguments, LatexDelimitedGroupParser, LatexCharsNode, _get_content_as_chars, LatexGroupNode, latex_node_types, __all__, LatexNodeList, LatexNodesVisitor, _unicode_from_str, LatexMathNode, LatexWalkerNodesParseError, LatexWalkerTokenParseError};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._expression';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000059 */ export var _TryAgainWithSkippedCommentNodes =  __class__ ('_TryAgainWithSkippedCommentNodes', [Exception], {
/* 000059 */ 	__module__: __name__,
/* 000060 */ 	get __init__ () {return __get__ (this, function (self, skipped_comment_nodes, pos) {
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'skipped_comment_nodes': var skipped_comment_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, _TryAgainWithSkippedCommentNodes, '__init__'), null, self, '<internal>');
/* 000062 */ 		self.skipped_comment_nodes = skipped_comment_nodes;
/* 000063 */ 		self.pos = pos;
/* 000063 */ 	});}
/* 000063 */ });
/* 000067 */ export var LatexExpressionParser =  __class__ ('LatexExpressionParser', [LatexParserBase], {
/* 000067 */ 	__module__: __name__,
/* 000068 */ 	get __init__ () {return __get__ (this, function (self, include_skipped_comments, single_token_requiring_arg_is_error) {
/* 000068 */ 		if (typeof include_skipped_comments == 'undefined' || (include_skipped_comments != null && include_skipped_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var include_skipped_comments = true;
/* 000068 */ 		};
/* 000068 */ 		if (typeof single_token_requiring_arg_is_error == 'undefined' || (single_token_requiring_arg_is_error != null && single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000068 */ 			var single_token_requiring_arg_is_error = true;
/* 000068 */ 		};
/* 000068 */ 		var kwargs = dict ();
/* 000068 */ 		if (arguments.length) {
/* 000068 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000068 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000068 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000068 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000068 */ 					switch (__attrib0__) {
/* 000068 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'include_skipped_comments': var include_skipped_comments = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						case 'single_token_requiring_arg_is_error': var single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000068 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000068 */ 					}
/* 000068 */ 				}
/* 000068 */ 				delete kwargs.__kwargtrans__;
/* 000068 */ 			}
/* 000068 */ 		}
/* 000068 */ 		else {
/* 000068 */ 		}
/* 000073 */ 		__call__ (__call__ (__super__, null, LatexExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000074 */ 		self.include_skipped_comments = include_skipped_comments;
/* 000075 */ 		self.single_token_requiring_arg_is_error = single_token_requiring_arg_is_error;
/* 000075 */ 	});},
/* 000078 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000079 */ 		return false;
/* 000079 */ 	});},
/* 000082 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000082 */ 		var kwargs = dict ();
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 				delete kwargs.__kwargtrans__;
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000084 */ 		var expr_parsing_state = (function () {
/* 000084 */ 			var __accu0__ = parsing_state;
/* 000084 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_environments: false}));
/* 000084 */ 		}) ();
/* 000086 */ 		var exprnodes = [];
/* 000087 */ 		while (__t__ (true)) {
/* 000088 */ 			try {
/* 000090 */ 				var moreexprnodes = (function () {
/* 000090 */ 					var __accu0__ = self;
/* 000090 */ 					return __call__ (__accu0__._parse_single_token, __accu0__, latex_walker, token_reader, expr_parsing_state, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state}, kwargs)));
/* 000090 */ 				}) ();
/* 000090 */ 			}
/* 000090 */ 			catch (__except0__) {
/* 000090 */ 				if (isinstance (__except0__, _TryAgainWithSkippedCommentNodes)) {
/* 000090 */ 					var e = __except0__;
/* 000096 */ 					var exprnodes = __call__ (__iadd__, null, exprnodes, e.skipped_comment_nodes);
/* 000096 */ 					continue;
/* 000096 */ 				}
/* 000096 */ 				else {
/* 000096 */ 					throw __except0__;
/* 000096 */ 				}
/* 000096 */ 			}
/* 000099 */ 			var exprnodes = __call__ (__iadd__, null, exprnodes, moreexprnodes);
/* 000101 */ 			if (__t__ (!__t__ ((exprnodes)))) {
/* 000103 */ 				var thenodelist = (function () {
/* 000103 */ 					var __accu0__ = latex_walker;
/* 000105 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({pos: (function () {
/* 000105 */ 						var __accu1__ = token_reader;
/* 000105 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000106 */ 					}) (), pos_end: (function () {
/* 000106 */ 						var __accu1__ = token_reader;
/* 000106 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000106 */ 					}) ()}));
/* 000106 */ 				}) ();
/* 000106 */ 			}
/* 000108 */ 			else if (__t__ (__eq__ (__call__ (len, null, exprnodes), 1))) {
/* 000109 */ 				var thenodelist = __getitem__ (exprnodes, 0);
/* 000109 */ 			}
/* 000110 */ 			else {
/* 000112 */ 				var expr_nodelist = (function () {
/* 000112 */ 					var __accu0__ = latex_walker;
/* 000112 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, exprnodes);
/* 000112 */ 				}) ();
/* 000114 */ 				var thenodelist = (function () {
/* 000114 */ 					var __accu0__ = latex_walker;
/* 000114 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, nodelist: expr_nodelist, delimiters: tuple (['', '']), pos: expr_nodelist.pos, pos_end: expr_nodelist.pos_end}));
/* 000114 */ 				}) ();
/* 000114 */ 			}
/* 000123 */ 			(function () {
/* 000123 */ 				var __accu0__ = logger;
/* 000123 */ 				return __call__ (__accu0__.debug, __accu0__, 'thenodelist = %r', thenodelist);
/* 000123 */ 			}) ();
/* 000125 */ 			return tuple ([thenodelist, null]);
/* 000125 */ 		}
/* 000125 */ 	});},
/* 000128 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000128 */ 		var kwargs = dict ();
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 				delete kwargs.__kwargtrans__;
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000131 */ 		try {
/* 000132 */ 			var tok = (function () {
/* 000132 */ 				var __accu0__ = token_reader;
/* 000132 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000132 */ 			}) ();
/* 000132 */ 		}
/* 000132 */ 		catch (__except0__) {
/* 000132 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000132 */ 				var e = __except0__;
/* 000134 */ 				var exc = (function () {
/* 000134 */ 					var __accu0__ = latex_walker;
/* 000134 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000134 */ 				}) ();
/* 000135 */ 				if (__t__ (exc !== null)) {
/* 000136 */ 					var __except1__ = exc;
/* 000136 */ 					__except1__.__cause__ = null;
/* 000136 */ 					throw __except1__;
/* 000136 */ 				}
/* 000143 */ 				var tok = exc.recovery_token_placeholder;
/* 000144 */ 				(function () {
/* 000144 */ 					var __accu0__ = token_reader;
/* 000144 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000144 */ 				}) ();
/* 000144 */ 			}
/* 000144 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000144 */ 				var e = __except0__;
/* 000146 */ 				var exc = (function () {
/* 000146 */ 					var __accu0__ = latex_walker;
/* 000149 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000149 */ 						var __accu1__ = token_reader;
/* 000149 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000149 */ 					}) (), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'end_of_stream'})})));
/* 000149 */ 				}) ();
/* 000156 */ 				if (__t__ (exc !== null)) {
/* 000157 */ 					var __except1__ = exc;
/* 000157 */ 					__except1__.__cause__ = null;
/* 000157 */ 					throw __except1__;
/* 000157 */ 				}
/* 000158 */ 				return [];
/* 000158 */ 			}
/* 000158 */ 			else {
/* 000158 */ 				throw __except0__;
/* 000158 */ 			}
/* 000158 */ 		}
/* 000160 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000162 */ 			var macroname = tok.arg;
/* 000164 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000167 */ 				var exc = (function () {
/* 000167 */ 					var __accu0__ = latex_walker;
/* 000169 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000169 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000169 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000169 */ 					}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'beginend', 'beginend': macroname})})));
/* 000169 */ 				}) ();
/* 000178 */ 				if (__t__ (exc !== null)) {
/* 000179 */ 					var __except0__ = exc;
/* 000179 */ 					__except0__.__cause__ = null;
/* 000179 */ 					throw __except0__;
/* 000179 */ 				}
/* 000183 */ 				return [(function () {
/* 000183 */ 					var __accu0__ = latex_walker;
/* 000183 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000183 */ 				}) ()];
/* 000183 */ 			}
/* 000195 */ 			var mspec = (function () {
/* 000195 */ 				var __accu0__ = parsing_state.latex_context;
/* 000195 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000195 */ 			}) ();
/* 000197 */ 			var parsed_arguments = (function () {
/* 000197 */ 				var __accu0__ = self;
/* 000199 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000199 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000199 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000199 */ 				}) ());
/* 000199 */ 			}) ();
/* 000203 */ 			return [(function () {
/* 000203 */ 				var __accu0__ = latex_walker;
/* 000203 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: parsed_arguments, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000203 */ 			}) ()];
/* 000203 */ 		}
/* 000215 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000217 */ 			var specialsspec = tok.arg;
/* 000219 */ 			var parsed_arguments = (function () {
/* 000219 */ 				var __accu0__ = self;
/* 000221 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000221 */ 					var __accu1__ = 'specials ‘{}’';
/* 000221 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000221 */ 				}) ());
/* 000221 */ 			}) ();
/* 000225 */ 			return [(function () {
/* 000225 */ 				var __accu0__ = latex_walker;
/* 000225 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: parsed_arguments, pos: tok.pos, pos_end: tok.pos_end}));
/* 000225 */ 			}) ()];
/* 000225 */ 		}
/* 000236 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000238 */ 			if (__t__ (self.include_skipped_comments)) {
/* 000240 */ 				var cnodes = [(function () {
/* 000240 */ 					var __accu0__ = latex_walker;
/* 000240 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000240 */ 				}) ()];
/* 000240 */ 			}
/* 000246 */ 			else {
/* 000248 */ 				var cnodes = [];
/* 000248 */ 			}
/* 000250 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentNodes, null, cnodes, tok.pos);
/* 000250 */ 			__except0__.__cause__ = null;
/* 000250 */ 			throw __except0__;
/* 000250 */ 		}
/* 000253 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = token_reader;
/* 000257 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000257 */ 			}) ();
/* 000259 */ 			var __left0__ = (function () {
/* 000259 */ 				var __accu0__ = latex_walker;
/* 000260 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000260 */ 			}) ();
/* 000260 */ 			var groupnode = __left0__ [0];
/* 000260 */ 			var parsing_state_delta = __left0__ [1];
/* 000267 */ 			(function () {
/* 000267 */ 				var __accu0__ = logger;
/* 000267 */ 				return __call__ (__accu0__.debug, __accu0__, 'Got groupnode = %r', groupnode);
/* 000267 */ 			}) ();
/* 000269 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000270 */ 				(function () {
/* 000270 */ 					var __accu0__ = logger;
/* 000270 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing_state_delta after parsing an expression group!');
/* 000270 */ 				}) ();
/* 000270 */ 			}
/* 000272 */ 			return [groupnode];
/* 000272 */ 		}
/* 000274 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000278 */ 			(function () {
/* 000278 */ 				var __accu0__ = token_reader;
/* 000278 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000278 */ 			}) ();
/* 000281 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000281 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000281 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000283 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000283 */ 				var __accu0__ = latex_walker;
/* 000283 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000283 */ 			}) (), recovery_at_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'closing_latex_group', 'delimiter': tok.arg})}));
/* 000298 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000299 */ 			var __except0__ = exc;
/* 000299 */ 			__except0__.__cause__ = null;
/* 000299 */ 			throw __except0__;
/* 000299 */ 		}
/* 000301 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000303 */ 			return [(function () {
/* 000303 */ 				var __accu0__ = latex_walker;
/* 000303 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000303 */ 			}) ()];
/* 000303 */ 		}
/* 000309 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000317 */ 			if (__t__ ((function () {
/* 000317 */ 				var __accu0__ = tok.arg;
/* 000317 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000317 */ 			}) ())) {
/* 000318 */ 				var recovery_nodes = (function () {
/* 000318 */ 					var __accu0__ = latex_walker;
/* 000318 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000318 */ 				}) ();
/* 000318 */ 			}
/* 000324 */ 			else {
/* 000325 */ 				var recovery_nodes = (function () {
/* 000325 */ 					var __accu0__ = latex_walker;
/* 000325 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000325 */ 				}) ();
/* 000325 */ 			}
/* 000332 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000332 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000332 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000332 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'math_mode_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000332 */ 			__except0__.__cause__ = null;
/* 000332 */ 			throw __except0__;
/* 000332 */ 		}
/* 000346 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000346 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000346 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000346 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000346 */ 		__except0__.__cause__ = null;
/* 000346 */ 		throw __except0__;
/* 000346 */ 	});},
/* 000351 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000353 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000355 */ 			var arg_contents_empty_ok = (function () {
/* 000355 */ 				var __accu0__ = (function () {
/* 000355 */ 					var __accu1__ = spec;
/* 000355 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000355 */ 				}) ();
/* 000355 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000355 */ 			}) ();
/* 000356 */ 			(function () {
/* 000356 */ 				var __accu0__ = logger;
/* 000356 */ 				return __call__ (__accu0__.debug, __accu0__, 'Checking if %s/‘%s’ requires an arg: %r', got_token.tok, got_token.arg, arg_contents_empty_ok);
/* 000356 */ 			}) ();
/* 000359 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000360 */ 				var exc = (function () {
/* 000360 */ 					var __accu0__ = latex_walker;
/* 000362 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000362 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000362 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000362 */ 					}) (), __kwargtrans__ ({pos: got_token.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'callable_with_mandatory_arguments', 'callable_token': got_token})})));
/* 000362 */ 				}) ();
/* 000373 */ 				if (__t__ (exc !== null)) {
/* 000374 */ 					var __except0__ = exc;
/* 000374 */ 					__except0__.__cause__ = null;
/* 000374 */ 					throw __except0__;
/* 000374 */ 				}
/* 000376 */ 				return null;
/* 000376 */ 			}
/* 000376 */ 		}
/* 000378 */ 		return __call__ (ParsedArguments, null);
/* 000378 */ 	});}
/* 000378 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map