/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:27
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000042 */ import {LatexCharsNode} from './pylatexenc.latexnodes.nodes.js';
/* 000039 */ import {LatexDelimitedGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000038 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ export {LatexCharsNode, LatexParserBase, LatexDelimitedGroupParser};
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
/* 000071 */ 	get __init__ () {return __get__ (this, function (self, chars, following_arg_parser, include_chars_node_before_following_arg, return_none_instead_of_empty, allow_pre_space, return_full_node_list) {
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
/* 000071 */ 		if (typeof return_full_node_list == 'undefined' || (return_full_node_list != null && return_full_node_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000071 */ 			var return_full_node_list = true;
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
/* 000071 */ 						case 'return_full_node_list': var return_full_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000071 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000071 */ 					}
/* 000071 */ 				}
/* 000071 */ 				delete kwargs.__kwargtrans__;
/* 000071 */ 			}
/* 000071 */ 		}
/* 000071 */ 		else {
/* 000071 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, LatexOptionalCharsMarkerParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000081 */ 		self.chars = (function () {
/* 000081 */ 			var __accu0__ = ' ';
/* 000081 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000081 */ 				var __accu1__ = (function () {
/* 000081 */ 					var __accu2__ = chars;
/* 000081 */ 					return __call__ (__accu2__.strip, __accu2__);
/* 000081 */ 				}) ();
/* 000081 */ 				return __call__ (__accu1__.py_split, __accu1__);
/* 000081 */ 			}) ());
/* 000081 */ 		}) ();
/* 000082 */ 		self.following_arg_parser = following_arg_parser;
/* 000083 */ 		self.include_chars_node_before_following_arg = include_chars_node_before_following_arg;
/* 000085 */ 		self.return_none_instead_of_empty = return_none_instead_of_empty;
/* 000086 */ 		self.allow_pre_space = allow_pre_space;
/* 000087 */ 		self.return_full_node_list = return_full_node_list;
/* 000089 */ 		if (__t__ (!__t__ ((self.chars)))) {
/* 000090 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000090 */ 				var __accu0__ = 'Invalid chars={!r}, needs to be non-empty string (after stripping whitespce)';
/* 000090 */ 				return __call__ (__accu0__.format, __accu0__, chars);
/* 000090 */ 			}) ());
/* 000090 */ 			__except0__.__cause__ = null;
/* 000090 */ 			throw __except0__;
/* 000090 */ 		}
/* 000090 */ 	});},
/* 000094 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000095 */ 		return true;
/* 000095 */ 	});},
/* 000097 */ 	get get_following_arg_parser () {return __get__ (this, function (self, chars) {
/* 000097 */ 		if (arguments.length) {
/* 000097 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000097 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000097 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000097 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000097 */ 					switch (__attrib0__) {
/* 000097 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 						case 'chars': var chars = __allkwargs0__ [__attrib0__]; break;
/* 000097 */ 					}
/* 000097 */ 				}
/* 000097 */ 			}
/* 000097 */ 		}
/* 000097 */ 		else {
/* 000097 */ 		}
/* 000098 */ 		return self.following_arg_parser;
/* 000098 */ 	});},
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
/* 000102 */ 		var _return_none = function (pos) {
/* 000102 */ 			if (arguments.length) {
/* 000102 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 						switch (__attrib0__) {
/* 000102 */ 							case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						}
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 			else {
/* 000102 */ 			}
/* 000103 */ 			if (__t__ (self.return_none_instead_of_empty)) {
/* 000104 */ 				return tuple ([null, null]);
/* 000104 */ 			}
/* 000105 */ 			var emptynl = (function () {
/* 000105 */ 				var __accu0__ = latex_walker;
/* 000105 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({pos: pos, pos_end: pos, parsing_state: parsing_state}));
/* 000105 */ 			}) ();
/* 000111 */ 			return tuple ([emptynl, null]);
/* 000111 */ 		};
/* 000113 */ 		var orig_pos_tok = (function () {
/* 000113 */ 			var __accu0__ = token_reader;
/* 000113 */ 			return __call__ (__accu0__.peek_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000113 */ 		}) ();
/* 000114 */ 		var pos_end = null;
/* 000115 */ 		var read_s = '';
/* 000116 */ 		var match_found = false;
/* 000117 */ 		var first_token = null;
/* 000118 */ 		try {
/* 000119 */ 			while (__t__ (true)) {
/* 000120 */ 				var tok = (function () {
/* 000120 */ 					var __accu0__ = token_reader;
/* 000120 */ 					return __call__ (__accu0__.next_token, __accu0__, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000120 */ 				}) ();
/* 000121 */ 				if (__t__ (first_token === null)) {
/* 000122 */ 					var first_token = tok;
/* 000123 */ 					if (__t__ (__t__ (__call__ (len, null, first_token.pre_space)) && !__t__ ((self.allow_pre_space)))) {
/* 000125 */ 						return __call__ (_return_none, null, first_token.pos);
/* 000125 */ 					}
/* 000125 */ 				}
/* 000126 */ 				if (__t__ (__ne__ (tok.tok, 'char'))) {
/* 000126 */ 					break;
/* 000126 */ 				}
/* 000128 */ 				if (__t__ (__t__ (read_s) && __call__ (len, null, tok.pre_space))) {
/* 000129 */ 					var read_s = __call__ (__iadd__, null, read_s, ' ');
/* 000129 */ 				}
/* 000130 */ 				var read_s = __call__ (__iadd__, null, read_s, tok.arg);
/* 000131 */ 				if (__t__ (__eq__ (read_s, self.chars))) {
/* 000132 */ 					var match_found = true;
/* 000133 */ 					var pos_end = tok.pos_end;
/* 000133 */ 					break;
/* 000133 */ 				}
/* 000135 */ 				if (__t__ (!__t__ (((function () {
/* 000135 */ 					var __accu0__ = self.chars;
/* 000135 */ 					return __call__ (__accu0__.startswith, __accu0__, read_s);
/* 000135 */ 				}) ())))) {
/* 000135 */ 					break;
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		finally {
/* 000140 */ 			if (__t__ (!__t__ ((match_found)))) {
/* 000141 */ 				(function () {
/* 000141 */ 					var __accu0__ = token_reader;
/* 000141 */ 					return __call__ (__accu0__.move_to_token, __accu0__, orig_pos_tok);
/* 000141 */ 				}) ();
/* 000141 */ 			}
/* 000141 */ 		}
/* 000143 */ 		if (__t__ (!__t__ ((match_found)))) {
/* 000145 */ 			return __call__ (_return_none, null, orig_pos_tok.pos);
/* 000145 */ 		}
/* 000147 */ 		var following_arg_parser = (function () {
/* 000147 */ 			var __accu0__ = self;
/* 000147 */ 			return __call__ (__accu0__.get_following_arg_parser, __accu0__, read_s);
/* 000147 */ 		}) ();
/* 000149 */ 		var nodes = [];
/* 000150 */ 		if (__t__ (__t__ (self.include_chars_node_before_following_arg) || __t__ (following_arg_parser === null) && !__t__ ((self.return_full_node_list)))) {
/* 000153 */ 			var nodes = __call__ (__iadd__, null, nodes, [(function () {
/* 000153 */ 				var __accu0__ = latex_walker;
/* 000153 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({parsing_state: parsing_state, chars: self.chars, pos: orig_pos_tok.pos, pos_end: pos_end}));
/* 000153 */ 			}) ()]);
/* 000153 */ 		}
/* 000162 */ 		var parsing_state_delta = null;
/* 000164 */ 		if (__t__ (following_arg_parser !== null)) {
/* 000165 */ 			var __left0__ = (function () {
/* 000165 */ 				var __accu0__ = latex_walker;
/* 000165 */ 				return __call__ (__accu0__.parse_content, __accu0__, following_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}));
/* 000165 */ 			}) ();
/* 000165 */ 			var following_nodes = __left0__ [0];
/* 000165 */ 			var parsing_state_delta = __left0__ [1];
/* 000171 */ 			if (__t__ (!__t__ ((self.return_full_node_list)))) {
/* 000172 */ 				return tuple ([following_nodes, parsing_state_delta]);
/* 000172 */ 			}
/* 000174 */ 			var nodes = __call__ (__iadd__, null, nodes, following_nodes);
/* 000174 */ 		}
/* 000177 */ 		else if (__t__ (!__t__ ((self.return_full_node_list)))) {
/* 000178 */ 			return tuple ([__getitem__ (nodes, __neg__ (1)), parsing_state_delta]);
/* 000178 */ 		}
/* 000180 */ 		var nodes = (function () {
/* 000180 */ 			var __accu0__ = latex_walker;
/* 000180 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000180 */ 		}) ();
/* 000185 */ 		return tuple ([nodes, parsing_state_delta]);
/* 000185 */ 	});}
/* 000185 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._optionals.map