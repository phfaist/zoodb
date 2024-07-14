/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:42
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000049 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexNode, LatexWalkerTokenParseError, LatexGroupNode, latex_node_types, LatexNodeList, LatexWalkerNodesParseError, LatexCommentNode, LatexDelimitedGroupParser, _display_str_delimiters, LatexSpecialsNode, LatexCharsNode, _unicode_from_str, LatexWalkerParseError, ParsedArguments, _get_content_as_chars, LatexNodesVisitor, _display_abbrev_str, _update_posposend_from_nodelist, LatexMacroNode, __all__, LatexWalkerEndOfStream, LatexParserBase, LatexEnvironmentNode, LatexMathNode};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._expression';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000059 */ export var _TryAgainWithSkippedCommentOrWhitespaceNodes =  __class__ ('_TryAgainWithSkippedCommentOrWhitespaceNodes', [Exception], {
/* 000059 */ 	__module__: __name__,
/* 000060 */ 	get __init__ () {return __get__ (this, function (self, skipped_nodes, pos) {
/* 000060 */ 		if (arguments.length) {
/* 000060 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000060 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000060 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000060 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000060 */ 					switch (__attrib0__) {
/* 000060 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'skipped_nodes': var skipped_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000060 */ 					}
/* 000060 */ 				}
/* 000060 */ 			}
/* 000060 */ 		}
/* 000060 */ 		else {
/* 000060 */ 		}
/* 000061 */ 		__call__ (__call__ (__super__, null, _TryAgainWithSkippedCommentOrWhitespaceNodes, '__init__'), null, self, '<internal>');
/* 000062 */ 		self.skipped_nodes = skipped_nodes;
/* 000063 */ 		self.pos = pos;
/* 000063 */ 	});}
/* 000063 */ });
/* 000067 */ export var LatexExpressionParser =  __class__ ('LatexExpressionParser', [LatexParserBase], {
/* 000067 */ 	__module__: __name__,
/* 000082 */ 	get __init__ () {return __get__ (this, function (self, allow_pre_space, allow_pre_comments, return_full_node_list, single_token_requiring_arg_is_error) {
/* 000082 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var allow_pre_space = true;
/* 000082 */ 		};
/* 000082 */ 		if (typeof allow_pre_comments == 'undefined' || (allow_pre_comments != null && allow_pre_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var allow_pre_comments = true;
/* 000082 */ 		};
/* 000082 */ 		if (typeof return_full_node_list == 'undefined' || (return_full_node_list != null && return_full_node_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var return_full_node_list = true;
/* 000082 */ 		};
/* 000082 */ 		if (typeof single_token_requiring_arg_is_error == 'undefined' || (single_token_requiring_arg_is_error != null && single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000082 */ 			var single_token_requiring_arg_is_error = true;
/* 000082 */ 		};
/* 000082 */ 		var kwargs = dict ();
/* 000082 */ 		if (arguments.length) {
/* 000082 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000082 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000082 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000082 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000082 */ 					switch (__attrib0__) {
/* 000082 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'allow_pre_comments': var allow_pre_comments = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'return_full_node_list': var return_full_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						case 'single_token_requiring_arg_is_error': var single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000082 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000082 */ 					}
/* 000082 */ 				}
/* 000082 */ 				delete kwargs.__kwargtrans__;
/* 000082 */ 			}
/* 000082 */ 		}
/* 000082 */ 		else {
/* 000082 */ 		}
/* 000089 */ 		__call__ (__call__ (__super__, null, LatexExpressionParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000090 */ 		self.allow_pre_space = allow_pre_space;
/* 000091 */ 		self.allow_pre_comments = allow_pre_comments;
/* 000092 */ 		self.return_full_node_list = return_full_node_list;
/* 000093 */ 		self.single_token_requiring_arg_is_error = single_token_requiring_arg_is_error;
/* 000093 */ 	});},
/* 000096 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000097 */ 		return false;
/* 000097 */ 	});},
/* 000100 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000100 */ 		var kwargs = dict ();
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 				delete kwargs.__kwargtrans__;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000102 */ 		var expr_parsing_state = (function () {
/* 000102 */ 			var __accu0__ = parsing_state;
/* 000102 */ 			return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_environments: false}));
/* 000102 */ 		}) ();
/* 000104 */ 		var exprnodes = [];
/* 000105 */ 		while (__t__ (true)) {
/* 000106 */ 			try {
/* 000108 */ 				var moreexprnodes = (function () {
/* 000108 */ 					var __accu0__ = self;
/* 000108 */ 					return __call__ (__accu0__._parse_single_token, __accu0__, latex_walker, token_reader, expr_parsing_state, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state}, kwargs)));
/* 000108 */ 				}) ();
/* 000108 */ 			}
/* 000108 */ 			catch (__except0__) {
/* 000108 */ 				if (isinstance (__except0__, _TryAgainWithSkippedCommentOrWhitespaceNodes)) {
/* 000108 */ 					var e = __except0__;
/* 000114 */ 					var exprnodes = __call__ (__iadd__, null, exprnodes, e.skipped_nodes);
/* 000114 */ 					continue;
/* 000114 */ 				}
/* 000114 */ 				else {
/* 000114 */ 					throw __except0__;
/* 000114 */ 				}
/* 000114 */ 			}
/* 000117 */ 			var exprnodes = __call__ (__iadd__, null, exprnodes, moreexprnodes);
/* 000119 */ 			if (__t__ (!__t__ ((__call__ (len, null, exprnodes))))) {
/* 000121 */ 				var thenodelist = (function () {
/* 000121 */ 					var __accu0__ = latex_walker;
/* 000123 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({pos: (function () {
/* 000123 */ 						var __accu1__ = token_reader;
/* 000123 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000124 */ 					}) (), pos_end: (function () {
/* 000124 */ 						var __accu1__ = token_reader;
/* 000124 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000124 */ 					}) (), parsing_state: parsing_state}));
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000126 */ 			else {
/* 000129 */ 				var thenodelist = (function () {
/* 000129 */ 					var __accu0__ = latex_walker;
/* 000129 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, exprnodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000129 */ 				}) ();
/* 000129 */ 			}
/* 000149 */ 			// pass;
/* 000153 */ 			if (__t__ (self.return_full_node_list)) {
/* 000154 */ 				var result = thenodelist;
/* 000154 */ 			}
/* 000155 */ 			else {
/* 000156 */ 				var result = __getitem__ (thenodelist, __neg__ (1));
/* 000156 */ 			}
/* 000158 */ 			return tuple ([result, null]);
/* 000158 */ 		}
/* 000158 */ 	});},
/* 000161 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000161 */ 		var kwargs = dict ();
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 				delete kwargs.__kwargtrans__;
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000164 */ 		try {
/* 000165 */ 			var tok = (function () {
/* 000165 */ 				var __accu0__ = token_reader;
/* 000165 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000165 */ 		catch (__except0__) {
/* 000165 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000165 */ 				var e = __except0__;
/* 000167 */ 				var exc = (function () {
/* 000167 */ 					var __accu0__ = latex_walker;
/* 000167 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000167 */ 				}) ();
/* 000168 */ 				if (__t__ (exc !== null)) {
/* 000169 */ 					var __except1__ = exc;
/* 000169 */ 					__except1__.__cause__ = null;
/* 000169 */ 					throw __except1__;
/* 000169 */ 				}
/* 000176 */ 				var tok = exc.recovery_token_placeholder;
/* 000177 */ 				(function () {
/* 000177 */ 					var __accu0__ = token_reader;
/* 000177 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000177 */ 				}) ();
/* 000177 */ 			}
/* 000177 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000177 */ 				var e = __except0__;
/* 000179 */ 				var exc = (function () {
/* 000179 */ 					var __accu0__ = latex_walker;
/* 000182 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000182 */ 						var __accu1__ = token_reader;
/* 000182 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000182 */ 					}) (), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'end_of_stream'})})));
/* 000182 */ 				}) ();
/* 000189 */ 				if (__t__ (exc !== null)) {
/* 000190 */ 					var __except1__ = exc;
/* 000190 */ 					__except1__.__cause__ = null;
/* 000190 */ 					throw __except1__;
/* 000190 */ 				}
/* 000191 */ 				return [];
/* 000191 */ 			}
/* 000191 */ 			else {
/* 000191 */ 				throw __except0__;
/* 000191 */ 			}
/* 000191 */ 		}
/* 000193 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000195 */ 			var macroname = tok.arg;
/* 000197 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000200 */ 				var exc = (function () {
/* 000200 */ 					var __accu0__ = latex_walker;
/* 000202 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000202 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000202 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000202 */ 					}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'beginend', 'beginend': macroname})})));
/* 000202 */ 				}) ();
/* 000211 */ 				if (__t__ (exc !== null)) {
/* 000212 */ 					var __except0__ = exc;
/* 000212 */ 					__except0__.__cause__ = null;
/* 000212 */ 					throw __except0__;
/* 000212 */ 				}
/* 000216 */ 				return [(function () {
/* 000216 */ 					var __accu0__ = latex_walker;
/* 000216 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000216 */ 				}) ()];
/* 000216 */ 			}
/* 000228 */ 			var mspec = (function () {
/* 000228 */ 				var __accu0__ = parsing_state.latex_context;
/* 000228 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000228 */ 			}) ();
/* 000230 */ 			var parsed_arguments = (function () {
/* 000230 */ 				var __accu0__ = self;
/* 000232 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000232 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000232 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000232 */ 				}) ());
/* 000232 */ 			}) ();
/* 000236 */ 			return [(function () {
/* 000236 */ 				var __accu0__ = latex_walker;
/* 000236 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: parsed_arguments, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000236 */ 			}) ()];
/* 000236 */ 		}
/* 000248 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000250 */ 			var specialsspec = tok.arg;
/* 000252 */ 			var parsed_arguments = (function () {
/* 000252 */ 				var __accu0__ = self;
/* 000254 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000254 */ 					var __accu1__ = 'specials ‘{}’';
/* 000254 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000254 */ 				}) ());
/* 000254 */ 			}) ();
/* 000258 */ 			return [(function () {
/* 000258 */ 				var __accu0__ = latex_walker;
/* 000258 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: parsed_arguments, pos: tok.pos, pos_end: tok.pos_end}));
/* 000258 */ 			}) ()];
/* 000258 */ 		}
/* 000269 */ 		if (__t__ (__call__ (len, null, tok.pre_space))) {
/* 000270 */ 			if (__t__ (self.allow_pre_space)) {
/* 000273 */ 				(function () {
/* 000273 */ 					var __accu0__ = token_reader;
/* 000273 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000273 */ 				}) ();
/* 000275 */ 				var wspos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000279 */ 				var cnodes = [(function () {
/* 000279 */ 					var __accu0__ = latex_walker;
/* 000279 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.pre_space, pos: wspos, pos_end: tok.pos}));
/* 000279 */ 				}) ()];
/* 000285 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, wspos);
/* 000285 */ 				__except0__.__cause__ = null;
/* 000285 */ 				throw __except0__;
/* 000285 */ 			}
/* 000288 */ 			var exc = (function () {
/* 000288 */ 				var __accu0__ = latex_walker;
/* 000291 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'Expected expression w/o leading whitespace but found whitespace', __kwargtrans__ ({pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'whitespace', 'whitespace': tok.pre_space})})));
/* 000291 */ 			}) ();
/* 000299 */ 			if (__t__ (exc !== null)) {
/* 000300 */ 				var __except0__ = exc;
/* 000300 */ 				__except0__.__cause__ = null;
/* 000300 */ 				throw __except0__;
/* 000300 */ 			}
/* 000303 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000303 */ 			__except0__.__cause__ = null;
/* 000303 */ 			throw __except0__;
/* 000303 */ 		}
/* 000306 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000307 */ 			if (__t__ (self.allow_pre_comments)) {
/* 000311 */ 				var cnodes = [(function () {
/* 000311 */ 					var __accu0__ = latex_walker;
/* 000311 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000311 */ 				}) ()];
/* 000318 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, tok.pos);
/* 000318 */ 				__except0__.__cause__ = null;
/* 000318 */ 				throw __except0__;
/* 000318 */ 			}
/* 000321 */ 			var exc = (function () {
/* 000321 */ 				var __accu0__ = latex_walker;
/* 000323 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000323 */ 					var __accu1__ = 'Expected expression w/o leading comments but found comment ‘%{}’';
/* 000323 */ 					return __call__ (__accu1__.format, __accu1__, tok.arg);
/* 000323 */ 				}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'comment', 'comment': tok.arg})})));
/* 000323 */ 			}) ();
/* 000333 */ 			if (__t__ (exc !== null)) {
/* 000334 */ 				var __except0__ = exc;
/* 000334 */ 				__except0__.__cause__ = null;
/* 000334 */ 				throw __except0__;
/* 000334 */ 			}
/* 000337 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000337 */ 			__except0__.__cause__ = null;
/* 000337 */ 			throw __except0__;
/* 000337 */ 		}
/* 000340 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000344 */ 			(function () {
/* 000344 */ 				var __accu0__ = token_reader;
/* 000344 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000344 */ 			}) ();
/* 000346 */ 			var __left0__ = (function () {
/* 000346 */ 				var __accu0__ = latex_walker;
/* 000347 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000347 */ 			}) ();
/* 000347 */ 			var groupnode = __left0__ [0];
/* 000347 */ 			var parsing_state_delta = __left0__ [1];
/* 000354 */ 			// pass;
/* 000358 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000359 */ 				(function () {
/* 000359 */ 					var __accu0__ = logger;
/* 000359 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing_state_delta after parsing an expression group!');
/* 000359 */ 				}) ();
/* 000359 */ 			}
/* 000363 */ 			return [groupnode];
/* 000363 */ 		}
/* 000365 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000369 */ 			(function () {
/* 000369 */ 				var __accu0__ = token_reader;
/* 000369 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000369 */ 			}) ();
/* 000372 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000372 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000372 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000374 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000374 */ 				var __accu0__ = latex_walker;
/* 000374 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000374 */ 			}) (), recovery_at_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'closing_latex_group', 'delimiter': tok.arg})}));
/* 000389 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000390 */ 			var __except0__ = exc;
/* 000390 */ 			__except0__.__cause__ = null;
/* 000390 */ 			throw __except0__;
/* 000390 */ 		}
/* 000392 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000394 */ 			return [(function () {
/* 000394 */ 				var __accu0__ = latex_walker;
/* 000394 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000394 */ 			}) ()];
/* 000394 */ 		}
/* 000400 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000408 */ 			if (__t__ ((function () {
/* 000408 */ 				var __accu0__ = tok.arg;
/* 000408 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000408 */ 			}) ())) {
/* 000409 */ 				var recovery_nodes = (function () {
/* 000409 */ 					var __accu0__ = latex_walker;
/* 000409 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000409 */ 				}) ();
/* 000409 */ 			}
/* 000415 */ 			else {
/* 000416 */ 				var recovery_nodes = (function () {
/* 000416 */ 					var __accu0__ = latex_walker;
/* 000416 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000416 */ 				}) ();
/* 000416 */ 			}
/* 000423 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000423 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000423 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000423 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'math_mode_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000423 */ 			__except0__.__cause__ = null;
/* 000423 */ 			throw __except0__;
/* 000423 */ 		}
/* 000437 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000437 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000437 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000437 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000437 */ 		__except0__.__cause__ = null;
/* 000437 */ 		throw __except0__;
/* 000437 */ 	});},
/* 000442 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000442 */ 		if (arguments.length) {
/* 000442 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000442 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000442 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000442 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000442 */ 					switch (__attrib0__) {
/* 000442 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000442 */ 					}
/* 000442 */ 				}
/* 000442 */ 			}
/* 000442 */ 		}
/* 000442 */ 		else {
/* 000442 */ 		}
/* 000444 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000446 */ 			var arg_contents_empty_ok = (function () {
/* 000446 */ 				var __accu0__ = (function () {
/* 000446 */ 					var __accu1__ = spec;
/* 000446 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000446 */ 				}) ();
/* 000446 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000446 */ 			}) ();
/* 000447 */ 			// pass;
/* 000452 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000453 */ 				var exc = (function () {
/* 000453 */ 					var __accu0__ = latex_walker;
/* 000455 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000455 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000455 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000455 */ 					}) (), __kwargtrans__ ({pos: got_token.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'callable_with_mandatory_arguments', 'callable_token': got_token})})));
/* 000455 */ 				}) ();
/* 000466 */ 				if (__t__ (exc !== null)) {
/* 000467 */ 					var __except0__ = exc;
/* 000467 */ 					__except0__.__cause__ = null;
/* 000467 */ 					throw __except0__;
/* 000467 */ 				}
/* 000469 */ 				return null;
/* 000469 */ 			}
/* 000469 */ 		}
/* 000471 */ 		return __call__ (ParsedArguments, null);
/* 000471 */ 	});}
/* 000471 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map