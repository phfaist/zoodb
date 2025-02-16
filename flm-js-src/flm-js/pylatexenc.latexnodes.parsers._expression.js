/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 22:05:56
/* 000037 */ var logging = {};
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000051 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000050 */ import {ParsedArguments} from './pylatexenc.latexnodes._parsedargs.js';
/* 000049 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000047 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {LatexWalkerEndOfStream, LatexWalkerNodesParseError, LatexWalkerTokenParseError} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ import * as __module_logging__ from './logging.js';
/* 000037 */ __nest__ (logging, '', __module_logging__);
/* 000037 */ export {LatexSpecialsNode, _unicode_from_str, ParsedArguments, LatexCommentNode, _display_str_delimiters, LatexWalkerNodesParseError, LatexMacroNode, LatexCharsNode, LatexWalkerParseError, latex_node_types, LatexNodeList, LatexMathNode, LatexWalkerEndOfStream, _update_posposend_from_nodelist, LatexNode, _display_abbrev_str, LatexWalkerTokenParseError, LatexEnvironmentNode, _get_content_as_chars, _UseList, LatexDelimitedGroupParser, LatexNodesVisitor, __all__, LatexParserBase, LatexGroupNode};
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
/* 000134 */ 			// pass;
/* 000138 */ 			if (__t__ (self.return_full_node_list)) {
/* 000139 */ 				var result = thenodelist;
/* 000139 */ 			}
/* 000140 */ 			else if (__t__ (__call__ (len, null, thenodelist))) {
/* 000141 */ 				var result = __getitem__ (thenodelist, __neg__ (1));
/* 000141 */ 			}
/* 000142 */ 			else {
/* 000144 */ 				var result = (function () {
/* 000144 */ 					var __accu0__ = latex_walker;
/* 000144 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, nodelist: thenodelist, delimiters: tuple (['', '']), pos: thenodelist.pos, pos_end: thenodelist.pos_end}));
/* 000144 */ 				}) ();
/* 000144 */ 			}
/* 000153 */ 			return tuple ([result, null]);
/* 000153 */ 		}
/* 000153 */ 	});},
/* 000156 */ 	get _parse_single_token () {return __get__ (this, function (self, latex_walker, token_reader, expr_parsing_state, parsing_state) {
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'expr_parsing_state': var expr_parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000159 */ 		try {
/* 000160 */ 			var tok = (function () {
/* 000160 */ 				var __accu0__ = token_reader;
/* 000160 */ 				return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: expr_parsing_state}));
/* 000160 */ 			}) ();
/* 000160 */ 		}
/* 000160 */ 		catch (__except0__) {
/* 000160 */ 			if (isinstance (__except0__, LatexWalkerTokenParseError)) {
/* 000160 */ 				var e = __except0__;
/* 000162 */ 				var exc = (function () {
/* 000162 */ 					var __accu0__ = latex_walker;
/* 000162 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, e);
/* 000162 */ 				}) ();
/* 000163 */ 				if (__t__ (exc !== null)) {
/* 000164 */ 					var __except1__ = exc;
/* 000164 */ 					__except1__.__cause__ = null;
/* 000164 */ 					throw __except1__;
/* 000164 */ 				}
/* 000171 */ 				var tok = exc.recovery_token_placeholder;
/* 000172 */ 				(function () {
/* 000172 */ 					var __accu0__ = token_reader;
/* 000172 */ 					return __call__ (__accu0__.move_to_pos_chars, __accu0__, exc.recovery_token_at_pos);
/* 000172 */ 				}) ();
/* 000172 */ 			}
/* 000172 */ 			else if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000172 */ 				var e = __except0__;
/* 000174 */ 				var exc = (function () {
/* 000174 */ 					var __accu0__ = latex_walker;
/* 000177 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'End of input encountered but we expected an expression', __kwargtrans__ ({pos: (function () {
/* 000177 */ 						var __accu1__ = token_reader;
/* 000177 */ 						return __call__ (__accu1__.cur_pos, __accu1__);
/* 000177 */ 					}) (), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'end_of_stream'})})));
/* 000177 */ 				}) ();
/* 000184 */ 				if (__t__ (exc !== null)) {
/* 000185 */ 					var __except1__ = exc;
/* 000185 */ 					__except1__.__cause__ = null;
/* 000185 */ 					throw __except1__;
/* 000185 */ 				}
/* 000186 */ 				return [];
/* 000186 */ 			}
/* 000186 */ 			else {
/* 000186 */ 				throw __except0__;
/* 000186 */ 			}
/* 000186 */ 		}
/* 000188 */ 		if (__t__ (__eq__ (tok.tok, 'macro'))) {
/* 000190 */ 			var macroname = tok.arg;
/* 000192 */ 			if (__t__ (__t__ (self.single_token_requiring_arg_is_error) && __in__ (macroname, tuple (['begin', 'end'])))) {
/* 000195 */ 				var exc = (function () {
/* 000195 */ 					var __accu0__ = latex_walker;
/* 000197 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000197 */ 						var __accu1__ = 'Expected expression, got \\{}';
/* 000197 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000197 */ 					}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'beginend', 'beginend': macroname})})));
/* 000197 */ 				}) ();
/* 000206 */ 				if (__t__ (exc !== null)) {
/* 000207 */ 					var __except0__ = exc;
/* 000207 */ 					__except0__.__cause__ = null;
/* 000207 */ 					throw __except0__;
/* 000207 */ 				}
/* 000211 */ 				return [(function () {
/* 000211 */ 					var __accu0__ = latex_walker;
/* 000211 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: macroname, spec: null, nodeargd: null, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000211 */ 				}) ()];
/* 000211 */ 			}
/* 000223 */ 			var mspec = (function () {
/* 000223 */ 				var __accu0__ = parsing_state.latex_context;
/* 000223 */ 				return __call__ (__accu0__.get_macro_spec, __accu0__, macroname);
/* 000223 */ 			}) ();
/* 000225 */ 			var parsed_arguments = (function () {
/* 000225 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, mspec, tok, (function () {
/* 000227 */ 					var __accu1__ = 'a single macro ‘\\{}’';
/* 000227 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000227 */ 				}) ());
/* 000227 */ 			}) ();
/* 000231 */ 			return [(function () {
/* 000231 */ 				var __accu0__ = latex_walker;
/* 000231 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, spec: mspec, nodeargd: parsed_arguments, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000231 */ 			}) ()];
/* 000231 */ 		}
/* 000243 */ 		if (__t__ (__eq__ (tok.tok, 'specials'))) {
/* 000245 */ 			var specialsspec = tok.arg;
/* 000247 */ 			var parsed_arguments = (function () {
/* 000247 */ 				var __accu0__ = self;
/* 000249 */ 				return __call__ (__accu0__._check_if_requires_args, __accu0__, latex_walker, specialsspec, tok, (function () {
/* 000249 */ 					var __accu1__ = 'specials ‘{}’';
/* 000249 */ 					return __call__ (__accu1__.format, __accu1__, specialsspec.specials_chars);
/* 000249 */ 				}) ());
/* 000249 */ 			}) ();
/* 000253 */ 			return [(function () {
/* 000253 */ 				var __accu0__ = latex_walker;
/* 000253 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexSpecialsNode, __kwargtrans__ ({parsing_state: parsing_state, specials_chars: specialsspec.specials_chars, spec: specialsspec, nodeargd: parsed_arguments, pos: tok.pos, pos_end: tok.pos_end}));
/* 000253 */ 			}) ()];
/* 000253 */ 		}
/* 000264 */ 		if (__t__ (__call__ (len, null, tok.pre_space))) {
/* 000265 */ 			if (__t__ (self.allow_pre_space)) {
/* 000268 */ 				(function () {
/* 000268 */ 					var __accu0__ = token_reader;
/* 000268 */ 					return __call__ (__accu0__.move_to_token, __accu0__, tok, __kwargtrans__ ({rewind_pre_space: false}));
/* 000268 */ 				}) ();
/* 000270 */ 				var wspos = __sub__ (tok.pos, __call__ (len, null, tok.pre_space));
/* 000274 */ 				var cnodes = [(function () {
/* 000274 */ 					var __accu0__ = latex_walker;
/* 000274 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.pre_space, pos: wspos, pos_end: tok.pos}));
/* 000274 */ 				}) ()];
/* 000280 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, wspos);
/* 000280 */ 				__except0__.__cause__ = null;
/* 000280 */ 				throw __except0__;
/* 000280 */ 			}
/* 000283 */ 			var exc = (function () {
/* 000283 */ 				var __accu0__ = latex_walker;
/* 000286 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, 'Expected expression w/o leading whitespace but found whitespace', __kwargtrans__ ({pos: __sub__ (tok.pos, __call__ (len, null, tok.pre_space)), error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'whitespace', 'whitespace': tok.pre_space})})));
/* 000286 */ 			}) ();
/* 000294 */ 			if (__t__ (exc !== null)) {
/* 000295 */ 				var __except0__ = exc;
/* 000295 */ 				__except0__.__cause__ = null;
/* 000295 */ 				throw __except0__;
/* 000295 */ 			}
/* 000298 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000298 */ 			__except0__.__cause__ = null;
/* 000298 */ 			throw __except0__;
/* 000298 */ 		}
/* 000301 */ 		if (__t__ (__eq__ (tok.tok, 'comment'))) {
/* 000302 */ 			if (__t__ (self.allow_pre_comments)) {
/* 000306 */ 				var cnodes = [(function () {
/* 000306 */ 					var __accu0__ = latex_walker;
/* 000306 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCommentNode, __kwargtrans__ ({parsing_state: parsing_state, comment: tok.arg, comment_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000306 */ 				}) ()];
/* 000313 */ 				var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, cnodes, tok.pos);
/* 000313 */ 				__except0__.__cause__ = null;
/* 000313 */ 				throw __except0__;
/* 000313 */ 			}
/* 000316 */ 			var exc = (function () {
/* 000316 */ 				var __accu0__ = latex_walker;
/* 000318 */ 				return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000318 */ 					var __accu1__ = 'Expected expression w/o leading comments but found comment ‘%{}’';
/* 000318 */ 					return __call__ (__accu1__.format, __accu1__, tok.arg);
/* 000318 */ 				}) (), __kwargtrans__ ({pos: tok.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'comment', 'comment': tok.arg})})));
/* 000318 */ 			}) ();
/* 000328 */ 			if (__t__ (exc !== null)) {
/* 000329 */ 				var __except0__ = exc;
/* 000329 */ 				__except0__.__cause__ = null;
/* 000329 */ 				throw __except0__;
/* 000329 */ 			}
/* 000332 */ 			var __except0__ = __call__ (_TryAgainWithSkippedCommentOrWhitespaceNodes, null, [], tok.pos);
/* 000332 */ 			__except0__.__cause__ = null;
/* 000332 */ 			throw __except0__;
/* 000332 */ 		}
/* 000335 */ 		if (__t__ (__eq__ (tok.tok, 'brace_open'))) {
/* 000339 */ 			(function () {
/* 000339 */ 				var __accu0__ = token_reader;
/* 000339 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000339 */ 			}) ();
/* 000341 */ 			var __left0__ = (function () {
/* 000341 */ 				var __accu0__ = latex_walker;
/* 000342 */ 				return __call__ (__accu0__.parse_content, __accu0__, __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tok.arg})), __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000342 */ 			}) ();
/* 000342 */ 			var groupnode = __left0__ [0];
/* 000342 */ 			var parsing_state_delta = __left0__ [1];
/* 000349 */ 			// pass;
/* 000353 */ 			if (__t__ (parsing_state_delta !== null)) {
/* 000354 */ 				(function () {
/* 000354 */ 					var __accu0__ = logger;
/* 000354 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing_state_delta after parsing an expression group!');
/* 000354 */ 				}) ();
/* 000354 */ 			}
/* 000358 */ 			return [groupnode];
/* 000358 */ 		}
/* 000360 */ 		if (__t__ (__eq__ (tok.tok, 'brace_close'))) {
/* 000364 */ 			(function () {
/* 000364 */ 				var __accu0__ = token_reader;
/* 000364 */ 				return __call__ (__accu0__.move_to_token, __accu0__, tok);
/* 000364 */ 			}) ();
/* 000367 */ 			var exc = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: (function () {
/* 000367 */ 				var __accu0__ = 'Expected LaTeX expression, got closing brace ‘{}’';
/* 000367 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000369 */ 			}) (), pos: tok.pos, recovery_nodes: (function () {
/* 000369 */ 				var __accu0__ = latex_walker;
/* 000369 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: '', pos: tok.pos, pos_end: tok.pos}));
/* 000369 */ 			}) (), recovery_at_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'closing_latex_group', 'delimiter': tok.arg})}));
/* 000384 */ 			exc._error_was_unexpected_closing_brace_in_expression = true;
/* 000385 */ 			var __except0__ = exc;
/* 000385 */ 			__except0__.__cause__ = null;
/* 000385 */ 			throw __except0__;
/* 000385 */ 		}
/* 000387 */ 		if (__t__ (__eq__ (tok.tok, 'char'))) {
/* 000389 */ 			return [(function () {
/* 000389 */ 				var __accu0__ = latex_walker;
/* 000389 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000389 */ 			}) ()];
/* 000389 */ 		}
/* 000395 */ 		if (__t__ (__in__ (tok.tok, tuple (['mathmode_inline', 'mathmode_display'])))) {
/* 000403 */ 			if (__t__ ((function () {
/* 000403 */ 				var __accu0__ = tok.arg;
/* 000403 */ 				return __call__ (__accu0__.startswith, __accu0__, '\\');
/* 000403 */ 			}) ())) {
/* 000404 */ 				var recovery_nodes = (function () {
/* 000404 */ 					var __accu0__ = latex_walker;
/* 000404 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexMacroNode, __kwargtrans__ ({parsing_state: parsing_state, macroname: tok.arg, macro_post_space: tok.post_space, pos: tok.pos, pos_end: tok.pos_end}));
/* 000404 */ 				}) ();
/* 000404 */ 			}
/* 000410 */ 			else {
/* 000411 */ 				var recovery_nodes = (function () {
/* 000411 */ 					var __accu0__ = latex_walker;
/* 000411 */ 					return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: tok.arg, pos: tok.pos, pos_end: tok.pos_end}));
/* 000411 */ 				}) ();
/* 000411 */ 			}
/* 000418 */ 			var __except0__ = __call__ (LatexWalkerNodesParseError, null, (function () {
/* 000418 */ 				var __accu0__ = 'Unexpected math mode delimiter ‘{}’, was expecting a LaTeX expression';
/* 000418 */ 				return __call__ (__accu0__.format, __accu0__, tok.arg);
/* 000418 */ 			}) (), __kwargtrans__ ({pos: tok.pos, recovery_nodes: recovery_nodes, recovery_past_token: tok, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'math_mode_delimiter', 'mathmode_type': tok.tok, 'delimiter': tok.arg})}));
/* 000418 */ 			__except0__.__cause__ = null;
/* 000418 */ 			throw __except0__;
/* 000418 */ 		}
/* 000432 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, (function () {
/* 000432 */ 			var __accu0__ = 'Unknown token type: ‘{}’';
/* 000432 */ 			return __call__ (__accu0__.format, __accu0__, tok.tok);
/* 000432 */ 		}) (), __kwargtrans__ ({pos: tok.pos}));
/* 000432 */ 		__except0__.__cause__ = null;
/* 000432 */ 		throw __except0__;
/* 000432 */ 	});},
/* 000437 */ 	get _check_if_requires_args () {return __get__ (this, function (self, latex_walker, spec, got_token, what_we_got) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'spec': var spec = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'got_token': var got_token = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'what_we_got': var what_we_got = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000439 */ 		if (__t__ (self.single_token_requiring_arg_is_error)) {
/* 000441 */ 			var arg_contents_empty_ok = (function () {
/* 000441 */ 				var __accu0__ = (function () {
/* 000441 */ 					var __accu1__ = spec;
/* 000441 */ 					return __call__ (__accu1__.get_node_parser, __accu1__, got_token);
/* 000441 */ 				}) ();
/* 000441 */ 				return __call__ (__accu0__.contents_can_be_empty, __accu0__);
/* 000441 */ 			}) ();
/* 000442 */ 			// pass;
/* 000447 */ 			if (__t__ (!__t__ ((arg_contents_empty_ok)))) {
/* 000448 */ 				var exc = (function () {
/* 000448 */ 					var __accu0__ = latex_walker;
/* 000450 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, __call__ (LatexWalkerParseError, null, (function () {
/* 000450 */ 						var __accu1__ = 'Expected a LaTeX expression but got {} which expects arguments; did you mean to provide an expression in {{curly braces}} ?';
/* 000450 */ 						return __call__ (__accu1__.format, __accu1__, what_we_got);
/* 000450 */ 					}) (), __kwargtrans__ ({pos: got_token.pos, error_type_info: dict ({'what': 'expression_required_got_unexpected', 'unexpected': 'callable_with_mandatory_arguments', 'callable_token': got_token})})));
/* 000450 */ 				}) ();
/* 000461 */ 				if (__t__ (exc !== null)) {
/* 000462 */ 					var __except0__ = exc;
/* 000462 */ 					__except0__.__cause__ = null;
/* 000462 */ 					throw __except0__;
/* 000462 */ 				}
/* 000464 */ 				return null;
/* 000464 */ 			}
/* 000464 */ 		}
/* 000466 */ 		return __call__ (ParsedArguments, null);
/* 000466 */ 	});}
/* 000466 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._expression.map