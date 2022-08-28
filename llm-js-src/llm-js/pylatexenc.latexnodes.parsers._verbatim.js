/* 000001 */ // Transcrypt'ed from Python, 2022-08-23 17:26:46
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000037 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerNodesParseError, LatexWalkerParseErrorFormatter, LatexWalkerTokenParseError, _basestring, format_pos, logger} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {_get_content_as_chars, LatexNodeList, _update_posposend_from_nodelist, LatexNodesVisitor, LatexParserBase, LatexWalkerError, LatexNode, LatexSpecialsNode, _basestring, LatexWalkerEndOfStream, logger, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, __all__, _unicode_from_str, LatexMathNode, LatexWalkerParseErrorFormatter, format_pos, LatexWalkerNodesParseError, LatexWalkerParseError, LatexWalkerTokenParseError, ParsedArguments, LatexCharsNode, LatexMacroNode};
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
/* 000116 */ 		try {
/* 000117 */ 			while (__t__ (!__t__ ((stop_condition_met)))) {
/* 000118 */ 				var char = (function () {
/* 000118 */ 					var __accu0__ = token_reader;
/* 000118 */ 					return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000118 */ 				}) ();
/* 000121 */ 				var stopinfo = (function () {
/* 000121 */ 					var __accu0__ = self;
/* 000121 */ 					return __call__ (__accu0__.new_char_check_stop_condition, __accu0__, char, verbatim_string, verbatim_info, parsing_state);
/* 000121 */ 				}) ();
/* 000123 */ 				if (__t__ (stopinfo)) {
/* 000125 */ 					var stop_condition_met = true;
/* 000126 */ 					if (__t__ (__t__ (stopinfo !== true) && __getitem__ (stopinfo, 'put_back_char'))) {
/* 000127 */ 						(function () {
/* 000127 */ 							var __accu0__ = token_reader;
/* 000127 */ 							return __call__ (__accu0__.move_to_pos_chars, __accu0__, __sub__ ((function () {
/* 000127 */ 								var __accu1__ = token_reader;
/* 000127 */ 								return __call__ (__accu1__.cur_pos, __accu1__);
/* 000127 */ 							}) (), 1));
/* 000127 */ 						}) ();
/* 000127 */ 					}
/* 000127 */ 				}
/* 000128 */ 				else {
/* 000129 */ 					var verbatim_string = __call__ (__iadd__, null, verbatim_string, char);
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		catch (__except0__) {
/* 000129 */ 			if (isinstance (__except0__, LatexWalkerEndOfStream)) {
/* 000132 */ 				var ended_with_eos = true;
/* 000132 */ 			}
/* 000132 */ 			else {
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000132 */ 		}
/* 000135 */ 		var verbatim_string = (function () {
/* 000135 */ 			var __accu0__ = self;
/* 000135 */ 			return __call__ (__accu0__.finalize_verbatim_string, __accu0__, verbatim_string, verbatim_info);
/* 000135 */ 		}) ();
/* 000137 */ 		var pos_start = verbatim_info.pos_start;
/* 000138 */ 		var pos_end = verbatim_info.pos_end;
/* 000140 */ 		var nodes = (function () {
/* 000140 */ 			var __accu0__ = latex_walker;
/* 000140 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({chars: verbatim_string, pos: pos_start, pos_end: pos_end, parsing_state: parsing_state}));
/* 000140 */ 		}) ();
/* 000148 */ 		if (__t__ (ended_with_eos)) {
/* 000149 */ 			return (function () {
/* 000149 */ 				var __accu0__ = self;
/* 000149 */ 				return __call__ (__accu0__.error_end_of_stream, __accu0__, __kwargtrans__ ({pos: pos_end, recovery_nodes: nodes, latex_walker: latex_walker, verbatim_info: verbatim_info}));
/* 000149 */ 			}) ();
/* 000149 */ 		}
/* 000154 */ 		return tuple ([nodes, null]);
/* 000154 */ 	});}
/* 000154 */ });
/* 000158 */ export var LatexDelimitedVerbatimParser =  __class__ ('LatexDelimitedVerbatimParser', [LatexVerbatimBaseParser], {
/* 000158 */ 	__module__: __name__,
/* 000159 */ 	get __init__ () {return __get__ (this, function (self, delimiters, auto_delimiters) {
/* 000159 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var delimiters = null;
/* 000159 */ 		};
/* 000159 */ 		if (typeof auto_delimiters == 'undefined' || (auto_delimiters != null && auto_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000159 */ 			var auto_delimiters = null;
/* 000159 */ 		};
/* 000159 */ 		var kwargs = dict ();
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'auto_delimiters': var auto_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 				delete kwargs.__kwargtrans__;
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000163 */ 		__call__ (__call__ (__super__, null, LatexDelimitedVerbatimParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000165 */ 		self.delimiters = delimiters;
/* 000167 */ 		if (__t__ (auto_delimiters !== null)) {
/* 000168 */ 			self.auto_delimiters = __call__ (dict, null, auto_delimiters);
/* 000168 */ 		}
/* 000169 */ 		else {
/* 000170 */ 			self.auto_delimiters = dict ({'{': '}', '[': ']', '<': '>', '(': ')'});
/* 000170 */ 		}
/* 000177 */ 		self.depth_counter = 1;
/* 000180 */ 		self.parsed_delimiters = null;
/* 000180 */ 	});},
/* 000183 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000189 */ 		if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 1)))) {
/* 000191 */ 			self.depth_counter = __call__ (__isub__, null, self.depth_counter, 1);
/* 000192 */ 			if (__t__ (__le__ (self.depth_counter, 0))) {
/* 000194 */ 				return true;
/* 000194 */ 			}
/* 000194 */ 		}
/* 000195 */ 		else if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000197 */ 			self.depth_counter = __call__ (__iadd__, null, self.depth_counter, 1);
/* 000197 */ 		}
/* 000199 */ 		return false;
/* 000199 */ 	});},
/* 000202 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000202 */ 		var kwargs = dict ();
/* 000202 */ 		if (arguments.length) {
/* 000202 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000202 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000202 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000202 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000202 */ 					switch (__attrib0__) {
/* 000202 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000202 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000202 */ 					}
/* 000202 */ 				}
/* 000202 */ 				delete kwargs.__kwargtrans__;
/* 000202 */ 			}
/* 000202 */ 		}
/* 000202 */ 		else {
/* 000202 */ 		}
/* 000204 */ 		var verbatim_info = (function () {
/* 000204 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000204 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000204 */ 		}) ();
/* 000206 */ 		(function () {
/* 000206 */ 			var __accu0__ = token_reader;
/* 000206 */ 			return __call__ (__accu0__.skip_space_chars, __accu0__, parsing_state);
/* 000206 */ 		}) ();
/* 000208 */ 		verbatim_info.original_pos = (function () {
/* 000208 */ 			var __accu0__ = token_reader;
/* 000208 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000208 */ 		}) ();
/* 000210 */ 		if (__t__ (self.delimiters === null)) {
/* 000213 */ 			var open_delim_char = (function () {
/* 000213 */ 				var __accu0__ = token_reader;
/* 000213 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000213 */ 			}) ();
/* 000215 */ 			var close_delim_char = (function () {
/* 000215 */ 				var __accu0__ = self.auto_delimiters;
/* 000215 */ 				return __call__ (__accu0__.py_get, __accu0__, open_delim_char, open_delim_char);
/* 000215 */ 			}) ();
/* 000217 */ 			verbatim_info.parsed_delimiters = tuple ([open_delim_char, close_delim_char]);
/* 000217 */ 		}
/* 000218 */ 		else {
/* 000221 */ 			verbatim_info.parsed_delimiters = self.delimiters;
/* 000223 */ 			var first_char = (function () {
/* 000223 */ 				var __accu0__ = token_reader;
/* 000223 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000223 */ 			}) ();
/* 000224 */ 			if (__t__ (__ne__ (first_char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000226 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000226 */ 					var __accu0__ = 'Expected opening delimiter ‘{}’ for verbatim content';
/* 000226 */ 					return __call__ (__accu0__.format, __accu0__, __getitem__ (verbatim_info.parsed_delimiters, 0));
/* 000226 */ 				}) (), pos: pos, error_type_info: dict ({'what': 'verbatim_expected_opening_delimiter_not_found', 'expected_delimiters': verbatim_info.parsed_delimiters})}));
/* 000226 */ 				__except0__.__cause__ = null;
/* 000226 */ 				throw __except0__;
/* 000226 */ 			}
/* 000226 */ 		}
/* 000237 */ 		var __left0__ = (function () {
/* 000237 */ 			var __accu0__ = self;
/* 000237 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000237 */ 		}) ();
/* 000237 */ 		var verbatim_node = __left0__ [0];
/* 000237 */ 		var _ = __left0__ [1];
/* 000240 */ 		var nodes = (function () {
/* 000240 */ 			var __accu0__ = latex_walker;
/* 000243 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({delimiters: verbatim_info.parsed_delimiters, nodelist: (function () {
/* 000243 */ 				var __accu1__ = latex_walker;
/* 000243 */ 				return __call__ (__accu1__.make_nodelist, __accu1__, [verbatim_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000248 */ 			}) (), pos: verbatim_info.original_pos, pos_end: __add__ (verbatim_node.pos_end, __call__ (len, null, __getitem__ (verbatim_info.parsed_delimiters, 1))), parsing_state: parsing_state}));
/* 000248 */ 		}) ();
/* 000252 */ 		return tuple ([nodes, null]);
/* 000252 */ 	});}
/* 000252 */ });
/* 000256 */ export var LatexVerbatimEnvironmentContentsParser =  __class__ ('LatexVerbatimEnvironmentContentsParser', [LatexVerbatimBaseParser], {
/* 000256 */ 	__module__: __name__,
/* 000257 */ 	get __init__ () {return __get__ (this, function (self, environment_name) {
/* 000257 */ 		if (typeof environment_name == 'undefined' || (environment_name != null && environment_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000257 */ 			var environment_name = 'verbatim';
/* 000257 */ 		};
/* 000257 */ 		var kwargs = dict ();
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'environment_name': var environment_name = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 				delete kwargs.__kwargtrans__;
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		__call__ (__call__ (__super__, null, LatexVerbatimEnvironmentContentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000259 */ 		self.environment_name = environment_name;
/* 000259 */ 	});},
/* 000261 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000264 */ 		if (__t__ ((function () {
/* 000264 */ 			var __accu0__ = verbatim_string;
/* 000264 */ 			return __call__ (__accu0__.endswith, __accu0__, verbatim_info.end_environment_code);
/* 000264 */ 		}) ())) {
/* 000265 */ 			return dict ({'put_back_char': true});
/* 000265 */ 		}
/* 000266 */ 		return false;
/* 000266 */ 	});},
/* 000268 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000270 */ 		var end_environment_code = verbatim_info.end_environment_code;
/* 000271 */ 		assert ((function () {
/* 000271 */ 			var __accu0__ = verbatim_string;
/* 000271 */ 			return __call__ (__accu0__.endswith, __accu0__, end_environment_code);
/* 000271 */ 		}) ());
/* 000273 */ 		var verbatim_string = __getslice__ (verbatim_string, 0, __neg__ (__call__ (len, null, end_environment_code)), 1);
/* 000275 */ 		var pos_start = verbatim_info.original_pos;
/* 000277 */ 		if (__t__ ((function () {
/* 000277 */ 			var __accu0__ = verbatim_string;
/* 000277 */ 			return __call__ (__accu0__.startswith, __accu0__, '\n');
/* 000277 */ 		}) ())) {
/* 000280 */ 			var verbatim_string = __getslice__ (verbatim_string, 1, null, 1);
/* 000281 */ 			var pos_start = __call__ (__iadd__, null, pos_start, 1);
/* 000281 */ 		}
/* 000283 */ 		verbatim_info.pos_start = pos_start;
/* 000284 */ 		verbatim_info.pos_end = __add__ (pos_start, __call__ (len, null, verbatim_string));
/* 000285 */ 		return verbatim_string;
/* 000285 */ 	});},
/* 000287 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000287 */ 		var kwargs = dict ();
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 				delete kwargs.__kwargtrans__;
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000289 */ 		var verbatim_info = (function () {
/* 000289 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000289 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000289 */ 		}) ();
/* 000290 */ 		verbatim_info.original_pos = (function () {
/* 000290 */ 			var __accu0__ = token_reader;
/* 000290 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000290 */ 		}) ();
/* 000292 */ 		verbatim_info.end_environment_code = __add__ (__add__ (__add__ (parsing_state.macro_escape_char, 'end{'), self.environment_name), '}');
/* 000297 */ 		var __left0__ = (function () {
/* 000297 */ 			var __accu0__ = self;
/* 000297 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, verbatim_info, __kwargtrans__ (kwargs));
/* 000297 */ 		}) ();
/* 000297 */ 		var verbatim_chars_node = __left0__ [0];
/* 000297 */ 		var _ = __left0__ [1];
/* 000300 */ 		var nodes = (function () {
/* 000300 */ 			var __accu0__ = latex_walker;
/* 000300 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [verbatim_chars_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000300 */ 		}) ();
/* 000308 */ 		return tuple ([nodes, null]);
/* 000308 */ 	});}
/* 000308 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._verbatim.map