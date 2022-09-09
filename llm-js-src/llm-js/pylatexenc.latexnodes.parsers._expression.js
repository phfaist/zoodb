/* 000001 */ // Transcrypt'ed from Python, 2022-09-09 15:10:08
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000049 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexWalkerParseError, LatexMathNode, LatexDelimitedGroupParser, LatexNodesVisitor, LatexCommentNode, _unicode_from_str, LatexParserBase, LatexMacroNode, LatexWalkerNodesParseError, LatexGroupNode, LatexWalkerEndOfStream, LatexNode, LatexSpecialsNode, _get_content_as_chars, ParsedArguments, LatexCharsNode, _update_posposend_from_nodelist, __all__, LatexWalkerTokenParseError, LatexNodeList, LatexEnvironmentNode};
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
/* 000123 */ 			// pass;
/* 000127 */ 			return tuple ([thenodelist, null]);
/* 000127 */ 		}
/* 000127 */ 	});},
/* 000130 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000130 */ 		var kwargs = dict ();
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 				delete kwargs.__kwargtrans__;
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000133 */ 		try {
/* 000134 */ 			var tok = (function () {
/* 000134 */ 				var __accu0__ = token_reader;
/* 000134 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000134 */ 			}) ();
/* 000134 */ 		}
/* 000134 */ 		catch (__except0__) {
/* 000134 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000134 */ 				var e = __except0__;
/* 000136 */ 				var exc = (function () {
/* 000136 */ 					var __accu0__ = latex_walker;
/* 000136 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000136 */ 				}) ();
/* 000137 */ 				if (__t__ (exc !== null)) {
/* 000138 */ 					var __except1__ = exc;
/* 000138 */ 					__except1__.__cause__ = null;
/* 000138 */ 					throw __except1__;
/* 000138 */ 				}
/* 000145 */ 				var tok = exc.recovery_token_placeholder;
/* 000146 */ 				(function () {
/* 000146 */ 					var __accu0__ = token_reader;
/* 000146 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000146 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000146 */ 				var e = __except0__;
/* 000148 */ 				var exc = (function () {
/* 000148 */ 					var __accu0__ = latex_walker;
/* 000151 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000151 */ 						var __accu1__ = token_reader;
/* 000151 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000151 */ 					}) (), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'end_of_stream'})})));
/* 000151 */ 				}) ();
/* 000158 */ 				if (__t__ (exc !== null)) {
/* 000159 */ 					var __except1__ = exc;
/* 000159 */ 					__except1__.__cause__ = null;
/* 000159 */ 					throw __except1__;
/* 000159 */ 				}
/* 000160 */ 				return [];
/* 000160 */ 			}
/* 000160 */ 			else {
/* 000160 */ 				throw __except0__;
/* 000160 */ 			}
/* 000160 */ 		}
/* 000162 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000164 */ 			var macroname = tok.arg;
/* 000166 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000169 */ 				var exc = (function () {
/* 000169 */ 					var __accu0__ = latex_walker;
/* 000171 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000171 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000171 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000171 */ 					}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'beginend', 'beginend': macroname})})));
/* 000171 */ 				}) ();
/* 000180 */ 				if (__t__ (exc !== null)) {
/* 000181 */ 					var __except0__ = exc;
/* 000181 */ 					__except0__.__cause__ = null;
/* 000181 */ 					throw __except0__;
/* 000181 */ 				}
/* 000185 */ 				return [(function () {
/* 000185 */ 					var __accu0__ = latex_walker;
/* 000185 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000185 */ 				}) ()];
/* 000185 */ 			}
/* 000197 */ 			var mspec = (function () {
/* 000197 */ 				var __accu0__ = parsing_state.latex_context;
/* 000197 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000197 */ 			}) ();
/* 000199 */ 			var parsed_arguments = (function () {
/* 000199 */ 				var __accu0__ = self;
/* 000201 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000201 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000201 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000201 */ 				}) ());
/* 000201 */ 			}) ();
/* 000205 */ 			return [(function () {
/* 000205 */ 				var __accu0__ = latex_walker;
/* 000205 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: parsed_arguments, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000205 */ 			}) ()];
/* 000205 */ 		}
/* 000217 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000219 */ 			var specialsspec = tok.arg;
/* 000221 */ 			var parsed_arguments = (function () {
/* 000221 */ 				var __accu0__ = self;
/* 000223 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000223 */ 					var __accu1__ = 'specials ‘{}’';
/* 000223 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000223 */ 				}) ());
/* 000223 */ 			}) ();
/* 000227 */ 			return [(function () {
/* 000227 */ 				var __accu0__ = latex_walker;
/* 000227 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: parsed_arguments, pos: tok.pos, pos_end: tok.pos_end}));
/* 000227 */ 			}) ()];
/* 000227 */ 		}
/* 000238 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000240 */ 			if (__t__ (self.include_skipped_comments)) {
/* 000242 */ 				var cnodes = [(function () {
/* 000242 */ 					var __accu0__ = latex_walker;
/* 000242 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000242 */ 				}) ()];
/* 000242 */ 			}
/* 000248 */ 			else {
/* 000250 */ 				var cnodes = [];
/* 000250 */ 			}
/* 000252 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentNodes, null, cnodes, tok.pos);
/* 000252 */ 			__except0__.__cause__ = null;
/* 000252 */ 			throw __except0__;
/* 000252 */ 		}
/* 000255 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000259 */ 			(function () {
/* 000259 */ 				var __accu0__ = token_reader;
/* 000259 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000259 */ 			}) ();
/* 000261 */ 			var __left0__ = (function () {
/* 000261 */ 				var __accu0__ = latex_walker;
/* 000262 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000262 */ 			}) ();
/* 000262 */ 			var groupnode = __left0__ [0];
/* 000262 */ 			var parsing_state_delta = __left0__ [1];
/* 000269 */ 			// pass;
/* 000273 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000274 */ 				(function () {
/* 000274 */ 					var __accu0__ = logger;
/* 000274 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing_state_delta after parsing an expression group!');
/* 000274 */ 				}) ();
/* 000274 */ 			}
/* 000276 */ 			return [groupnode];
/* 000276 */ 		}
/* 000278 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = token_reader;
/* 000282 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000282 */ 			}) ();
/* 000285 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000285 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000285 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000287 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000287 */ 				var __accu0__ = latex_walker;
/* 000287 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000287 */ 			}) (), recovery_at_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'closing_latex_group', 'delimiter': tok.arg})}));
/* 000302 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000303 */ 			var __except0__ = exc;
/* 000303 */ 			__except0__.__cause__ = null;
/* 000303 */ 			throw __except0__;
/* 000303 */ 		}
/* 000305 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000307 */ 			return [(function () {
/* 000307 */ 				var __accu0__ = latex_walker;
/* 000307 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000307 */ 			}) ()];
/* 000307 */ 		}
/* 000313 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000321 */ 			if (__t__ ((function () {
/* 000321 */ 				var __accu0__ = tok.arg;
/* 000321 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000321 */ 			}) ())) {
/* 000322 */ 				var recovery_nodes = (function () {
/* 000322 */ 					var __accu0__ = latex_walker;
/* 000322 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000322 */ 				}) ();
/* 000322 */ 			}
/* 000328 */ 			else {
/* 000329 */ 				var recovery_nodes = (function () {
/* 000329 */ 					var __accu0__ = latex_walker;
/* 000329 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000329 */ 				}) ();
/* 000329 */ 			}
/* 000336 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000336 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000336 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000336 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'math_mode_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000336 */ 			__except0__.__cause__ = null;
/* 000336 */ 			throw __except0__;
/* 000336 */ 		}
/* 000350 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000350 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000350 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000350 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000350 */ 		__except0__.__cause__ = null;
/* 000350 */ 		throw __except0__;
/* 000350 */ 	});},
/* 000355 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000357 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000359 */ 			var arg_contents_empty_ok = (function () {
/* 000359 */ 				var __accu0__ = (function () {
/* 000359 */ 					var __accu1__ = spec;
/* 000359 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000359 */ 				}) ();
/* 000359 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000359 */ 			}) ();
/* 000360 */ 			// pass;
/* 000365 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000366 */ 				var exc = (function () {
/* 000366 */ 					var __accu0__ = latex_walker;
/* 000368 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000368 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000368 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000368 */ 					}) (), __kwargtrans__ ({pos: got_token.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'callable_with_mandatory_arguments', 'callable_token': got_token})})));
/* 000368 */ 				}) ();
/* 000379 */ 				if (__t__ (exc !== null)) {
/* 000380 */ 					var __except0__ = exc;
/* 000380 */ 					__except0__.__cause__ = null;
/* 000380 */ 					throw __except0__;
/* 000380 */ 				}
/* 000382 */ 				return null;
/* 000382 */ 			}
/* 000382 */ 		}
/* 000384 */ 		return __call__ (ParsedArguments, null);
/* 000384 */ 	});}
/* 000384 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map