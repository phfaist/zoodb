/* 000001 */ // Transcrypt'ed from Python, 2023-05-11 01:03:01
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000049 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {ParsedArguments, LatexEnvironmentNode, LatexWalkerTokenParseError, LatexCharsNode, LatexWalkerNodesParseError, __all__, LatexMacroNode, LatexMathNode, LatexParserBase, LatexGroupNode, _unicode_from_str, _get_content_as_chars, LatexCommentNode, LatexWalkerParseError, LatexNode, LatexSpecialsNode, LatexNodesVisitor, LatexNodeList, LatexWalkerEndOfStream, _update_posposend_from_nodelist, latex_node_types, LatexDelimitedGroupParser};
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
/* 000149 */ 			(function () {
/* 000149 */ 				var __accu0__ = logger;
/* 000149 */ 				return __call__ (__accu0__.debug, __accu0__, 'thenodelist = %r', thenodelist);
/* 000149 */ 			}) ();
/* 000151 */ 			if (__t__ (self.return_full_node_list)) {
/* 000152 */ 				var result = thenodelist;
/* 000152 */ 			}
/* 000153 */ 			else {
/* 000154 */ 				var result = __getitem__ (thenodelist, __neg__ (1));
/* 000154 */ 			}
/* 000156 */ 			return tuple ([result, null]);
/* 000156 */ 		}
/* 000156 */ 	});},
/* 000159 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000159 */ 		var kwargs = dict ();
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 				delete kwargs.__kwargtrans__;
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000162 */ 		try {
/* 000163 */ 			var tok = (function () {
/* 000163 */ 				var __accu0__ = token_reader;
/* 000163 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000163 */ 			}) ();
/* 000163 */ 		}
/* 000163 */ 		catch (__except0__) {
/* 000163 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000163 */ 				var e = __except0__;
/* 000165 */ 				var exc = (function () {
/* 000165 */ 					var __accu0__ = latex_walker;
/* 000165 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000165 */ 				}) ();
/* 000166 */ 				if (__t__ (exc !== null)) {
/* 000167 */ 					var __except1__ = exc;
/* 000167 */ 					__except1__.__cause__ = null;
/* 000167 */ 					throw __except1__;
/* 000167 */ 				}
/* 000174 */ 				var tok = exc.recovery_token_placeholder;
/* 000175 */ 				(function () {
/* 000175 */ 					var __accu0__ = token_reader;
/* 000175 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000175 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000175 */ 				var e = __except0__;
/* 000177 */ 				var exc = (function () {
/* 000177 */ 					var __accu0__ = latex_walker;
/* 000180 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000180 */ 						var __accu1__ = token_reader;
/* 000180 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000180 */ 					}) (), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'end_of_stream'})})));
/* 000180 */ 				}) ();
/* 000187 */ 				if (__t__ (exc !== null)) {
/* 000188 */ 					var __except1__ = exc;
/* 000188 */ 					__except1__.__cause__ = null;
/* 000188 */ 					throw __except1__;
/* 000188 */ 				}
/* 000189 */ 				return [];
/* 000189 */ 			}
/* 000189 */ 			else {
/* 000189 */ 				throw __except0__;
/* 000189 */ 			}
/* 000189 */ 		}
/* 000191 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000193 */ 			var macroname = tok.arg;
/* 000195 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000198 */ 				var exc = (function () {
/* 000198 */ 					var __accu0__ = latex_walker;
/* 000200 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000200 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000200 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000200 */ 					}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'beginend', 'beginend': macroname})})));
/* 000200 */ 				}) ();
/* 000209 */ 				if (__t__ (exc !== null)) {
/* 000210 */ 					var __except0__ = exc;
/* 000210 */ 					__except0__.__cause__ = null;
/* 000210 */ 					throw __except0__;
/* 000210 */ 				}
/* 000214 */ 				return [(function () {
/* 000214 */ 					var __accu0__ = latex_walker;
/* 000214 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000214 */ 				}) ()];
/* 000214 */ 			}
/* 000226 */ 			var mspec = (function () {
/* 000226 */ 				var __accu0__ = parsing_state.latex_context;
/* 000226 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000226 */ 			}) ();
/* 000228 */ 			var parsed_arguments = (function () {
/* 000228 */ 				var __accu0__ = self;
/* 000230 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000230 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000230 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000230 */ 				}) ());
/* 000230 */ 			}) ();
/* 000234 */ 			return [(function () {
/* 000234 */ 				var __accu0__ = latex_walker;
/* 000234 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: parsed_arguments, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000234 */ 			}) ()];
/* 000234 */ 		}
/* 000246 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000248 */ 			var specialsspec = tok.arg;
/* 000250 */ 			var parsed_arguments = (function () {
/* 000250 */ 				var __accu0__ = self;
/* 000252 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000252 */ 					var __accu1__ = 'specials ‘{}’';
/* 000252 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000252 */ 				}) ());
/* 000252 */ 			}) ();
/* 000256 */ 			return [(function () {
/* 000256 */ 				var __accu0__ = latex_walker;
/* 000256 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: parsed_arguments, pos: tok.pos, pos_end: tok.pos_end}));
/* 000256 */ 			}) ()];
/* 000256 */ 		}
/* 000267 */ 		if (__t__ (__call__ (len, null, tok.pre_space))) {
/* 000268 */ 			if (__t__ (self.allow_pre_space)) {
/* 000271 */ 				(function () {
/* 000271 */ 					var __accu0__ = token_reader;
/* 000271 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000271 */ 				}) ();
/* 000273 */ 				var wspos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000277 */ 				var cnodes = [(function () {
/* 000277 */ 					var __accu0__ = latex_walker;
/* 000277 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.pre_space, pos: wspos, pos_end: tok.pos}));
/* 000277 */ 				}) ()];
/* 000283 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, wspos);
/* 000283 */ 				__except0__.__cause__ = null;
/* 000283 */ 				throw __except0__;
/* 000283 */ 			}
/* 000286 */ 			var exc = (function () {
/* 000286 */ 				var __accu0__ = latex_walker;
/* 000289 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'Expected expression w/o leading whitespace but found whitespace', __kwargtrans__ ({pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'whitespace', 'whitespace': tok.pre_space})})));
/* 000289 */ 			}) ();
/* 000297 */ 			if (__t__ (exc !== null)) {
/* 000298 */ 				var __except0__ = exc;
/* 000298 */ 				__except0__.__cause__ = null;
/* 000298 */ 				throw __except0__;
/* 000298 */ 			}
/* 000301 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000301 */ 			__except0__.__cause__ = null;
/* 000301 */ 			throw __except0__;
/* 000301 */ 		}
/* 000304 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000305 */ 			if (__t__ (self.allow_pre_comments)) {
/* 000309 */ 				var cnodes = [(function () {
/* 000309 */ 					var __accu0__ = latex_walker;
/* 000309 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000309 */ 				}) ()];
/* 000316 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, tok.pos);
/* 000316 */ 				__except0__.__cause__ = null;
/* 000316 */ 				throw __except0__;
/* 000316 */ 			}
/* 000319 */ 			var exc = (function () {
/* 000319 */ 				var __accu0__ = latex_walker;
/* 000321 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000321 */ 					var __accu1__ = 'Expected expression w/o leading comments but found comment ‘%{}’';
/* 000321 */ 					return __call__ (__accu1__.format, __accu1__, tok.arg);
/* 000321 */ 				}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'comment', 'comment': tok.arg})})));
/* 000321 */ 			}) ();
/* 000331 */ 			if (__t__ (exc !== null)) {
/* 000332 */ 				var __except0__ = exc;
/* 000332 */ 				__except0__.__cause__ = null;
/* 000332 */ 				throw __except0__;
/* 000332 */ 			}
/* 000335 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000335 */ 			__except0__.__cause__ = null;
/* 000335 */ 			throw __except0__;
/* 000335 */ 		}
/* 000338 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000342 */ 			(function () {
/* 000342 */ 				var __accu0__ = token_reader;
/* 000342 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000342 */ 			}) ();
/* 000344 */ 			var __left0__ = (function () {
/* 000344 */ 				var __accu0__ = latex_walker;
/* 000345 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000345 */ 			}) ();
/* 000345 */ 			var groupnode = __left0__ [0];
/* 000345 */ 			var parsing_state_delta = __left0__ [1];
/* 000352 */ 			(function () {
/* 000352 */ 				var __accu0__ = logger;
/* 000352 */ 				return __call__ (__accu0__.debug, __accu0__, 'Got groupnode = %r', groupnode);
/* 000352 */ 			}) ();
/* 000354 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000355 */ 				(function () {
/* 000355 */ 					var __accu0__ = logger;
/* 000355 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing_state_delta after parsing an expression group!');
/* 000355 */ 				}) ();
/* 000355 */ 			}
/* 000359 */ 			return [groupnode];
/* 000359 */ 		}
/* 000361 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000365 */ 			(function () {
/* 000365 */ 				var __accu0__ = token_reader;
/* 000365 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000365 */ 			}) ();
/* 000368 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000368 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000368 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000370 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000370 */ 				var __accu0__ = latex_walker;
/* 000370 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000370 */ 			}) (), recovery_at_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'closing_latex_group', 'delimiter': tok.arg})}));
/* 000385 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000386 */ 			var __except0__ = exc;
/* 000386 */ 			__except0__.__cause__ = null;
/* 000386 */ 			throw __except0__;
/* 000386 */ 		}
/* 000388 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000390 */ 			return [(function () {
/* 000390 */ 				var __accu0__ = latex_walker;
/* 000390 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000390 */ 			}) ()];
/* 000390 */ 		}
/* 000396 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000404 */ 			if (__t__ ((function () {
/* 000404 */ 				var __accu0__ = tok.arg;
/* 000404 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000404 */ 			}) ())) {
/* 000405 */ 				var recovery_nodes = (function () {
/* 000405 */ 					var __accu0__ = latex_walker;
/* 000405 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000405 */ 				}) ();
/* 000405 */ 			}
/* 000411 */ 			else {
/* 000412 */ 				var recovery_nodes = (function () {
/* 000412 */ 					var __accu0__ = latex_walker;
/* 000412 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000412 */ 				}) ();
/* 000412 */ 			}
/* 000419 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000419 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000419 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000419 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'math_mode_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000419 */ 			__except0__.__cause__ = null;
/* 000419 */ 			throw __except0__;
/* 000419 */ 		}
/* 000433 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000433 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000433 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000433 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000433 */ 		__except0__.__cause__ = null;
/* 000433 */ 		throw __except0__;
/* 000433 */ 	});},
/* 000438 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000440 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000442 */ 			var arg_contents_empty_ok = (function () {
/* 000442 */ 				var __accu0__ = (function () {
/* 000442 */ 					var __accu1__ = spec;
/* 000442 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000442 */ 				}) ();
/* 000442 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000442 */ 			}) ();
/* 000443 */ 			(function () {
/* 000443 */ 				var __accu0__ = logger;
/* 000443 */ 				return __call__ (__accu0__.debug, __accu0__, 'Checking if %s/‘%s’ requires an arg: %r', got_token.tok, got_token.arg, arg_contents_empty_ok);
/* 000443 */ 			}) ();
/* 000446 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000447 */ 				var exc = (function () {
/* 000447 */ 					var __accu0__ = latex_walker;
/* 000449 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000449 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000449 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000449 */ 					}) (), __kwargtrans__ ({pos: got_token.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'callable_with_mandatory_arguments', 'callable_token': got_token})})));
/* 000449 */ 				}) ();
/* 000460 */ 				if (__t__ (exc !== null)) {
/* 000461 */ 					var __except0__ = exc;
/* 000461 */ 					__except0__.__cause__ = null;
/* 000461 */ 					throw __except0__;
/* 000461 */ 				}
/* 000463 */ 				return null;
/* 000463 */ 			}
/* 000463 */ 		}
/* 000465 */ 		return __call__ (ParsedArguments, null);
/* 000465 */ 	});}
/* 000465 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map