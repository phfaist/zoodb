/* 000001 */ // Transcrypt'ed from Python, 2022-12-30 19:10:09
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000042 */ import {LatexCharsNode} from './pylatexenc.latexnodes.nodes.js';
/* 000039 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000038 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ export {LatexDelimitedGroupParser, LatexCharsNode, LatexParserBase};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._optionals';
/* 000053 */ export var LatexOptionalSquareBracketsParser =  __class__ ('LatexOptionalSquareBracketsParser', [LatexDelimitedGroupParser], {
/* 000053 */ 	__module__: __name__,
/* 000057 */ 	get __init__ () {return __get__ (this, function (self, delimiters, optional) {
/* 000057 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 			var delimiters = tuple (['[', ']']);
/* 000057 */ 		};
/* 000057 */ 		if (typeof optional == 'undefined' || (optional != null && optional.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 			var optional = true;
/* 000057 */ 		};
/* 000057 */ 		var kwargs = dict ();
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'optional': var optional = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 				delete kwargs.__kwargtrans__;
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000058 */ 		__call__ (__call__ (__super__, null, LatexOptionalSquareBracketsParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, optional: optional}, kwargs)));
/* 000058 */ 	});}
/* 000058 */ });
/* 000069 */ export var LatexOptionalCharsMarkerParser =  __class__ ('LatexOptionalCharsMarkerParser', [LatexParserBase], {
/* 000069 */ 	__module__: __name__,
/* 000071 */ 	get __init__ () {return __get__ (this, function (self, chars, following_arg_parser, include_chars_node_before_following_arg, return_none_instead_of_empty, allow_pre_space) {
/* 000071 */ 		if (typeof following_arg_parser == 'undefined' || (following_arg_parser != null && following_arg_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var following_arg_parser = null;
/* 000071 */ 		};
/* 000071 */ 		if (typeof include_chars_node_before_following_arg == 'undefined' || (include_chars_node_before_following_arg != null && include_chars_node_before_following_arg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var include_chars_node_before_following_arg = true;
/* 000071 */ 		};
/* 000071 */ 		if (typeof return_none_instead_of_empty == 'undefined' || (return_none_instead_of_empty != null && return_none_instead_of_empty.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var return_none_instead_of_empty = true;
/* 000071 */ 		};
/* 000071 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var allow_pre_space = true;
/* 000071 */ 		};
/* 000071 */ 		var kwargs = dict ();
/* 000071 */ 		if (arguments.length) {
/* 000071 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000071 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000071 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000071 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000071 */ 					switch (__attrib0__) {
/* 000071 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'following_arg_parser': var following_arg_parser = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'include_chars_node_before_following_arg': var include_chars_node_before_following_arg = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'return_none_instead_of_empty': var return_none_instead_of_empty = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 				delete kwargs.__kwargtrans__;
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000078 */ 		__call__ (__call__ (__super__, null, LatexOptionalCharsMarkerParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000080 */ 		self.chars = (function () {
/* 000080 */ 			var __accu0__ = ' ';
/* 000080 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000080 */ 				var __accu1__ = (function () {
/* 000080 */ 					var __accu2__ = chars;
/* 000080 */ 					return __call__ (__accu2__.strip, __accu2__);
/* 000080 */ 				}) ();
/* 000080 */ 				return __call__ (__accu1__.py_split, __accu1__);
/* 000080 */ 			}) ());
/* 000080 */ 		}) ();
/* 000081 */ 		self.following_arg_parser = following_arg_parser;
/* 000082 */ 		self.include_chars_node_before_following_arg = include_chars_node_before_following_arg;
/* 000084 */ 		self.return_none_instead_of_empty = return_none_instead_of_empty;
/* 000085 */ 		self.allow_pre_space = allow_pre_space;
/* 000087 */ 		if (__t__ (!__t__ ((self.chars)))) {
/* 000088 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000088 */ 				var __accu0__ = 'Invalid chars={!r}, needs to be non-empty string (after stripping whitespce)';
/* 000088 */ 				return __call__ (__accu0__.format, __accu0__, chars);
/* 000088 */ 			}) ());
/* 000088 */ 			__except0__.__cause__ = null;
/* 000088 */ 			throw __except0__;
/* 000088 */ 		}
/* 000088 */ 	});},
/* 000092 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000092 */ 		if (arguments.length) {
/* 000092 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000092 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000092 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000092 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000092 */ 					switch (__attrib0__) {
/* 000092 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000092 */ 					}
/* 000092 */ 				}
/* 000092 */ 			}
/* 000092 */ 		}
/* 000092 */ 		else {
/* 000092 */ 		}
/* 000093 */ 		return true;
/* 000093 */ 	});},
/* 000096 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000096 */ 		var kwargs = dict ();
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 				delete kwargs.__kwargtrans__;
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000098 */ 		var orig_pos_tok = (function () {
/* 000098 */ 			var __accu0__ = token_reader;
/* 000098 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000098 */ 		}) ();
/* 000099 */ 		var pos_end = null;
/* 000100 */ 		var read_s = '';
/* 000101 */ 		var match_found = false;
/* 000102 */ 		var first_token = null;
/* 000103 */ 		try {
/* 000104 */ 			while (__t__ (true)) {
/* 000105 */ 				var tok = (function () {
/* 000105 */ 					var __accu0__ = token_reader;
/* 000105 */ 					return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000105 */ 				}) ();
/* 000106 */ 				if (__t__ (first_token === null)) {
/* 000107 */ 					var first_token = tok;
/* 000108 */ 					if (__t__ (__t__ (first_token.pre_space) && !__t__ ((self.allow_pre_space)))) {
/* 000110 */ 						return tuple ([null, null]);
/* 000110 */ 					}
/* 000110 */ 				}
/* 000111 */ 				if (__t__ (__ne__ (tok.tok, 'char'))) {
/* 000111 */ 					break;
/* 000111 */ 				}
/* 000113 */ 				if (__t__ (__t__ (read_s) && tok.pre_space)) {
/* 000114 */ 					var read_s = __call__ (__iadd__, null, read_s, ' ');
/* 000114 */ 				}
/* 000115 */ 				var read_s = __call__ (__iadd__, null, read_s, tok.arg);
/* 000116 */ 				if (__t__ (__eq__ (read_s, self.chars))) {
/* 000117 */ 					var match_found = true;
/* 000118 */ 					var pos_end = tok.pos_end;
/* 000118 */ 					break;
/* 000118 */ 				}
/* 000120 */ 				if (__t__ (!__t__ (((function () {
/* 000120 */ 					var __accu0__ = self.chars;
/* 000120 */ 					return __call__ (__accu0__.startswith, __accu0__, read_s);
/* 000120 */ 				}) ())))) {
/* 000120 */ 					break;
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		finally {
/* 000125 */ 			if (__t__ (!__t__ ((match_found)))) {
/* 000126 */ 				(function () {
/* 000126 */ 					var __accu0__ = token_reader;
/* 000126 */ 					return __call__ (__accu0__.move_to_token, __accu0__, orig_pos_tok);
/* 000126 */ 				}) ();
/* 000126 */ 			}
/* 000126 */ 		}
/* 000128 */ 		if (__t__ (!__t__ ((match_found)))) {
/* 000130 */ 			if (__t__ (self.return_none_instead_of_empty)) {
/* 000131 */ 				return tuple ([null, null]);
/* 000131 */ 			}
/* 000132 */ 			var emptynl = (function () {
/* 000132 */ 				var __accu0__ = latex_walker;
/* 000132 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({pos: orig_pos_token.pos, pos_end: orig_pos_token.pos, parsing_state: parsing_state}));
/* 000132 */ 			}) ();
/* 000138 */ 			return tuple ([emptynl, null]);
/* 000138 */ 		}
/* 000140 */ 		var nodes = [];
/* 000141 */ 		if (__t__ (self.include_chars_node_before_following_arg)) {
/* 000143 */ 			var nodes = __call__ (__iadd__, null, nodes, [(function () {
/* 000143 */ 				var __accu0__ = latex_walker;
/* 000143 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: self.chars, pos: orig_pos_tok.pos, pos_end: pos_end}));
/* 000143 */ 			}) ()]);
/* 000143 */ 		}
/* 000152 */ 		var parsing_state_delta = null;
/* 000154 */ 		if (__t__ (self.following_arg_parser !== null)) {
/* 000155 */ 			var __left0__ = (function () {
/* 000155 */ 				var __accu0__ = latex_walker;
/* 000155 */ 				return __call__ (__accu0__.parse_content, __accu0__, self.following_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000155 */ 			}) ();
/* 000155 */ 			var following_nodes = __left0__ [0];
/* 000155 */ 			var parsing_state_delta = __left0__ [1];
/* 000161 */ 			var nodes = __call__ (__iadd__, null, nodes, following_nodes);
/* 000161 */ 		}
/* 000163 */ 		var nodes = (function () {
/* 000163 */ 			var __accu0__ = latex_walker;
/* 000163 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000163 */ 		}) ();
/* 000168 */ 		return tuple ([nodes, parsing_state_delta]);
/* 000168 */ 	});}
/* 000168 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._optionals.map