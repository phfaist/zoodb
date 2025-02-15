/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 00:46:20
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types, logger} from './pylatexenc.latexnodes.nodes.js';
/* 000037 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, format_pos, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {LatexCommentNode, LatexMacroNode, __all__, LatexWalkerNodesParseError, LatexWalkerError, _basestring, LatexNode, LatexWalkerParseError, ParsedArguments, _display_str_delimiters, logger, LatexWalkerLocatedErrorFormatter, LatexNodesVisitor, LatexEnvironmentNode, _get_content_as_chars, to_str, _unicode_from_str, LatexWalkerEndOfStream, LatexSpecialsNode, LatexNodeList, _display_abbrev_str, latex_node_types, _update_posposend_from_nodelist, LatexGroupNode, LatexWalkerLocatedError, LatexWalkerTokenParseError, LatexParserBase, LatexMathNode, format_pos, _UseList, LatexCharsNode};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._verbatim';
/* 000043 */ export var LatexVerbatimBaseParser =  __class__ ('LatexVerbatimBaseParser', [LatexParserBase], {
/* 000043 */ 	__module__: __name__,
/* 000049 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000049 */ 		var kwargs = dict ();
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 				delete kwargs.__kwargtrans__;
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		__call__ (__call__ (__super__, null, LatexVerbatimBaseParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000052 */ 	});},
/* 000052 */ 	VerbatimInfo: __class__ ('VerbatimInfo', [object], {
/* 000052 */ 		__module__: __name__,
/* 000053 */ 		get __init__ () {return __get__ (this, function (self) {
/* 000053 */ 			if (arguments.length) {
/* 000053 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 						switch (__attrib0__) {
/* 000053 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						}
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 			else {
/* 000053 */ 			}
/* 000054 */ 			__call__ (__call__ (__super__, null, LatexVerbatimBaseParser.VerbatimInfo, '__init__'), null, self);
/* 000055 */ 			self.parsed_delimiters = tuple ([null, null]);
/* 000055 */ 		});}
/* 000055 */ 	}),
/* 000057 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000063 */ 		if (__t__ (verbatim_string)) {
/* 000064 */ 			return true;
/* 000064 */ 		}
/* 000065 */ 		return false;
/* 000065 */ 	});},
/* 000067 */ 	get error_end_of_stream () {return __get__ (this, function (self, pos, recovery_nodes, latex_walker, verbatim_info) {
/* 000067 */ 		if (arguments.length) {
/* 000067 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000067 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000067 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000067 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000067 */ 					switch (__attrib0__) {
/* 000067 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'recovery_nodes': var recovery_nodes = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000067 */ 					}
/* 000067 */ 				}
/* 000067 */ 			}
/* 000067 */ 		}
/* 000067 */ 		else {
/* 000067 */ 		}
/* 000068 */ 		var __except0__ = __call__ (LatexWalkerNodesParseError, null, __kwargtrans__ ({msg: 'End of stream reached while reading verbatim content', pos: pos, recovery_nodes: recovery_nodes, error_type_info: dict ({'what': 'verbatim_unexpected_end_of_stream', 'verbatim_delimiters': verbatim_info.parsed_delimiters})}));
/* 000068 */ 		__except0__.__cause__ = null;
/* 000068 */ 		throw __except0__;
/* 000068 */ 	});},
/* 000079 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000086 */ 		verbatim_info.pos_start = verbatim_info.content_pos_start;
/* 000087 */ 		verbatim_info.pos_end = __add__ (verbatim_info.content_pos_start, __call__ (len, null, verbatim_string));
/* 000088 */ 		return verbatim_string;
/* 000088 */ 	});},
/* 000091 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000091 */ 		var kwargs = dict ();
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 				delete kwargs.__kwargtrans__;
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000093 */ 		var verbatim_info = (function () {
/* 000093 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000093 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000093 */ 		}) ();
/* 000094 */ 		verbatim_info.original_pos = (function () {
/* 000094 */ 			var __accu0__ = token_reader;
/* 000094 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000094 */ 		}) ();
/* 000096 */ 		return (function () {
/* 000096 */ 			var __accu0__ = self;
/* 000096 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000096 */ 		}) ();
/* 000096 */ 	});},
/* 000100 */ 	get read_verbatim_content () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state, verbatim_info) {
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
/* 000100 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 				delete kwargs.__kwargtrans__;
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000109 */ 		var verbatim_string = '';
/* 000110 */ 		var stop_condition_met = false;
/* 000112 */ 		var ended_with_eos = false;
/* 000114 */ 		verbatim_info.content_pos_start = (function () {
/* 000114 */ 			var __accu0__ = token_reader;
/* 000114 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000114 */ 		}) ();
/* 000116 */ 		while (__t__ (!__t__ ((stop_condition_met)))) {
/* 000117 */ 			try {
/* 000118 */ 				var char = (function () {
/* 000118 */ 					var __accu0__ = token_reader;
/* 000118 */ 					return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000118 */ 				}) ();
/* 000118 */ 			}
/* 000118 */ 			catch (__except0__) {
/* 000118 */ 				if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000120 */ 					var char = null;
/* 000121 */ 					var ended_with_eos = true;
/* 000121 */ 				}
/* 000121 */ 				else {
/* 000121 */ 					throw __except0__;
/* 000121 */ 				}
/* 000121 */ 			}
/* 000124 */ 			var stopinfo = (function () {
/* 000124 */ 				var __accu0__ = self;
/* 000124 */ 				return __call__ (__accu0__.new_char_check_stop_condition, __accu0__, char, verbatim_string, verbatim_info, parsing_state);
/* 000124 */ 			}) ();
/* 000126 */ 			if (__t__ (stopinfo)) {
/* 000128 */ 				var stop_condition_met = true;
/* 000129 */ 				if (__t__ (__t__ (stopinfo !== true) && __t__ (char !== null) && __getitem__ (stopinfo, 'put_back_char'))) {
/* 000130 */ 					(function () {
/* 000130 */ 						var __accu0__ = token_reader;
/* 000130 */ 						return __call__ (__accu0__.move_to_pos_chars, __accu0__, __sub__ ((function () {
/* 000130 */ 							var __accu1__ = token_reader;
/* 000130 */ 							return __call__ (__accu1__.cur_pos, __accu1__);
/* 000130 */ 						}) (), 1));
/* 000130 */ 					}) ();
/* 000130 */ 				}
/* 000130 */ 			}
/* 000131 */ 			else {
/* 000132 */ 				if (__t__ (char === null)) {
/* 000132 */ 					break;
/* 000132 */ 				}
/* 000134 */ 				var verbatim_string = __call__ (__iadd__, null, verbatim_string, char);
/* 000134 */ 			}
/* 000134 */ 		}
/* 000138 */ 		var verbatim_string = (function () {
/* 000138 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__.finalize_verbatim_string, __accu0__, verbatim_string, verbatim_info);
/* 000138 */ 		}) ();
/* 000140 */ 		var pos_start = verbatim_info.pos_start;
/* 000141 */ 		var pos_end = verbatim_info.pos_end;
/* 000143 */ 		var nodes = (function () {
/* 000143 */ 			var __accu0__ = latex_walker;
/* 000148 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({chars: verbatim_string, pos: pos_start, pos_end: pos_end, parsing_state: (function () {
/* 000148 */ 				var __accu1__ = parsing_state;
/* 000148 */ 				return __call__ (__accu1__.sub_context, __accu1__, __kwargtrans__ ({enable_double_newline_paragraphs: false, enable_macros: false, enable_environments: false, enable_specials: false, enable_comments: false, enable_groups: false, enable_math: false}));
/* 000148 */ 			}) ()}));
/* 000148 */ 		}) ();
/* 000161 */ 		if (__t__ (__t__ (!__t__ ((stop_condition_met))) && ended_with_eos)) {
/* 000162 */ 			return (function () {
/* 000162 */ 				var __accu0__ = self;
/* 000162 */ 				return __call__ (__accu0__.error_end_of_stream, __accu0__, __kwargtrans__ ({pos: pos_end, recovery_nodes: nodes, latex_walker: latex_walker, verbatim_info: verbatim_info}));
/* 000162 */ 			}) ();
/* 000162 */ 		}
/* 000167 */ 		return tuple ([nodes, null]);
/* 000167 */ 	});}
/* 000167 */ });
/* 000171 */ export var LatexDelimitedVerbatimParser =  __class__ ('LatexDelimitedVerbatimParser', [LatexVerbatimBaseParser], {
/* 000171 */ 	__module__: __name__,
/* 000179 */ 	get __init__ () {return __get__ (this, function (self, delimiters, auto_delimiters) {
/* 000179 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000179 */ 			var delimiters = null;
/* 000179 */ 		};
/* 000179 */ 		if (typeof auto_delimiters == 'undefined' || (auto_delimiters != null && auto_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000179 */ 			var auto_delimiters = null;
/* 000179 */ 		};
/* 000179 */ 		var kwargs = dict ();
/* 000179 */ 		if (arguments.length) {
/* 000179 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000179 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000179 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000179 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000179 */ 					switch (__attrib0__) {
/* 000179 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						case 'auto_delimiters': var auto_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000179 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000179 */ 					}
/* 000179 */ 				}
/* 000179 */ 				delete kwargs.__kwargtrans__;
/* 000179 */ 			}
/* 000179 */ 		}
/* 000179 */ 		else {
/* 000179 */ 		}
/* 000183 */ 		__call__ (__call__ (__super__, null, LatexDelimitedVerbatimParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000185 */ 		self.delimiters = delimiters;
/* 000187 */ 		if (__t__ (auto_delimiters !== null)) {
/* 000188 */ 			self.auto_delimiters = __call__ (dict, null, auto_delimiters);
/* 000188 */ 		}
/* 000189 */ 		else {
/* 000190 */ 			self.auto_delimiters = dict ({'{': '}', '[': ']', '<': '>', '(': ')'});
/* 000190 */ 		}
/* 000197 */ 		self.depth_counter = 1;
/* 000200 */ 		self.parsed_delimiters = null;
/* 000200 */ 	});},
/* 000203 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000209 */ 		if (__t__ (char === null)) {
/* 000210 */ 			return false;
/* 000210 */ 		}
/* 000212 */ 		if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 1)))) {
/* 000214 */ 			self.depth_counter = __call__ (__isub__, null, self.depth_counter, 1);
/* 000215 */ 			if (__t__ (__le__ (self.depth_counter, 0))) {
/* 000217 */ 				return true;
/* 000217 */ 			}
/* 000217 */ 		}
/* 000218 */ 		else if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000220 */ 			self.depth_counter = __call__ (__iadd__, null, self.depth_counter, 1);
/* 000220 */ 		}
/* 000222 */ 		return false;
/* 000222 */ 	});},
/* 000225 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000225 */ 		var kwargs = dict ();
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 				delete kwargs.__kwargtrans__;
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000227 */ 		var verbatim_info = (function () {
/* 000227 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000227 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000227 */ 		}) ();
/* 000229 */ 		(function () {
/* 000229 */ 			var __accu0__ = token_reader;
/* 000229 */ 			return __call__ (__accu0__.skip_space_chars, __accu0__, parsing_state);
/* 000229 */ 		}) ();
/* 000231 */ 		verbatim_info.original_pos = (function () {
/* 000231 */ 			var __accu0__ = token_reader;
/* 000231 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000231 */ 		}) ();
/* 000233 */ 		if (__t__ (self.delimiters === null)) {
/* 000236 */ 			var open_delim_char = (function () {
/* 000236 */ 				var __accu0__ = token_reader;
/* 000236 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000236 */ 			}) ();
/* 000238 */ 			var close_delim_char = (function () {
/* 000238 */ 				var __accu0__ = self.auto_delimiters;
/* 000238 */ 				return __call__ (__accu0__.py_get, __accu0__, open_delim_char, open_delim_char);
/* 000238 */ 			}) ();
/* 000240 */ 			verbatim_info.parsed_delimiters = tuple ([open_delim_char, close_delim_char]);
/* 000240 */ 		}
/* 000241 */ 		else {
/* 000244 */ 			verbatim_info.parsed_delimiters = self.delimiters;
/* 000246 */ 			var first_char = (function () {
/* 000246 */ 				var __accu0__ = token_reader;
/* 000246 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000246 */ 			}) ();
/* 000247 */ 			if (__t__ (__ne__ (first_char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000249 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000249 */ 					var __accu0__ = 'Expected opening delimiter ‘{}’ for verbatim content';
/* 000249 */ 					return __call__ (__accu0__.format, __accu0__, __getitem__ (verbatim_info.parsed_delimiters, 0));
/* 000249 */ 				}) (), pos: pos, error_type_info: dict ({'what': 'verbatim_expected_opening_delimiter_not_found', 'expected_delimiters': verbatim_info.parsed_delimiters})}));
/* 000249 */ 				__except0__.__cause__ = null;
/* 000249 */ 				throw __except0__;
/* 000249 */ 			}
/* 000249 */ 		}
/* 000260 */ 		var __left0__ = (function () {
/* 000260 */ 			var __accu0__ = self;
/* 000260 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000260 */ 		}) ();
/* 000260 */ 		var verbatim_node = __left0__ [0];
/* 000260 */ 		var _ = __left0__ [1];
/* 000263 */ 		var nodes = (function () {
/* 000263 */ 			var __accu0__ = latex_walker;
/* 000266 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({delimiters: verbatim_info.parsed_delimiters, nodelist: (function () {
/* 000266 */ 				var __accu1__ = latex_walker;
/* 000266 */ 				return __call__ (__accu1__.make_nodelist, __accu1__, [verbatim_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000271 */ 			}) (), pos: verbatim_info.original_pos, pos_end: __add__ (verbatim_node.pos_end, __call__ (len, null, __getitem__ (verbatim_info.parsed_delimiters, 1))), parsing_state: parsing_state}));
/* 000271 */ 		}) ();
/* 000275 */ 		return tuple ([nodes, null]);
/* 000275 */ 	});}
/* 000275 */ });
/* 000279 */ export var LatexVerbatimEnvironmentContentsParser =  __class__ ('LatexVerbatimEnvironmentContentsParser', [LatexVerbatimBaseParser], {
/* 000279 */ 	__module__: __name__,
/* 000285 */ 	get __init__ () {return __get__ (this, function (self, environment_name) {
/* 000285 */ 		if (typeof environment_name == 'undefined' || (environment_name != null && environment_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000285 */ 			var environment_name = 'verbatim';
/* 000285 */ 		};
/* 000285 */ 		var kwargs = dict ();
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'environment_name': var environment_name = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 				delete kwargs.__kwargtrans__;
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000286 */ 		__call__ (__call__ (__super__, null, LatexVerbatimEnvironmentContentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000287 */ 		self.environment_name = environment_name;
/* 000287 */ 	});},
/* 000289 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000292 */ 		if (__t__ ((function () {
/* 000292 */ 			var __accu0__ = verbatim_string;
/* 000292 */ 			return __call__ (__accu0__.endswith, __accu0__, verbatim_info.end_environment_code);
/* 000292 */ 		}) ())) {
/* 000293 */ 			return dict ({'put_back_char': true});
/* 000293 */ 		}
/* 000294 */ 		return false;
/* 000294 */ 	});},
/* 000296 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000296 */ 		if (arguments.length) {
/* 000296 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000296 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000296 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000296 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000296 */ 					switch (__attrib0__) {
/* 000296 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000296 */ 					}
/* 000296 */ 				}
/* 000296 */ 			}
/* 000296 */ 		}
/* 000296 */ 		else {
/* 000296 */ 		}
/* 000298 */ 		var end_environment_code = verbatim_info.end_environment_code;
/* 000299 */ 		assert ((function () {
/* 000299 */ 			var __accu0__ = verbatim_string;
/* 000299 */ 			return __call__ (__accu0__.endswith, __accu0__, end_environment_code);
/* 000299 */ 		}) ());
/* 000301 */ 		var verbatim_string = __getslice__ (verbatim_string, 0, __neg__ (__call__ (len, null, end_environment_code)), 1);
/* 000303 */ 		var pos_start = verbatim_info.original_pos;
/* 000305 */ 		if (__t__ ((function () {
/* 000305 */ 			var __accu0__ = verbatim_string;
/* 000305 */ 			return __call__ (__accu0__.startswith, __accu0__, '\n');
/* 000305 */ 		}) ())) {
/* 000308 */ 			var verbatim_string = __getslice__ (verbatim_string, 1, null, 1);
/* 000309 */ 			var pos_start = __call__ (__iadd__, null, pos_start, 1);
/* 000309 */ 		}
/* 000311 */ 		verbatim_info.pos_start = pos_start;
/* 000312 */ 		verbatim_info.pos_end = __add__ (pos_start, __call__ (len, null, verbatim_string));
/* 000313 */ 		return verbatim_string;
/* 000313 */ 	});},
/* 000315 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000315 */ 		var kwargs = dict ();
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 				delete kwargs.__kwargtrans__;
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000317 */ 		var verbatim_info = (function () {
/* 000317 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000317 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000317 */ 		}) ();
/* 000318 */ 		verbatim_info.original_pos = (function () {
/* 000318 */ 			var __accu0__ = token_reader;
/* 000318 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000318 */ 		}) ();
/* 000320 */ 		verbatim_info.end_environment_code = __add__ (__add__ (__add__ (parsing_state.macro_escape_char, 'end{'), self.environment_name), '}');
/* 000325 */ 		var __left0__ = (function () {
/* 000325 */ 			var __accu0__ = self;
/* 000325 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, verbatim_info, __kwargtrans__ (kwargs));
/* 000325 */ 		}) ();
/* 000325 */ 		var verbatim_chars_node = __left0__ [0];
/* 000325 */ 		var _ = __left0__ [1];
/* 000328 */ 		var nodes = (function () {
/* 000328 */ 			var __accu0__ = latex_walker;
/* 000328 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [verbatim_chars_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000328 */ 		}) ();
/* 000336 */ 		return tuple ([nodes, null]);
/* 000336 */ 	});}
/* 000336 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._verbatim.map