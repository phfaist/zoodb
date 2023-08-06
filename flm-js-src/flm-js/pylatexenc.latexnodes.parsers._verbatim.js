/* 000001 */ // Transcrypt'ed from Python, 2023-08-06 17:30:19
/* 000037 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000040 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000038 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000037 */ import {LatexWalkerEndOfStream, LatexWalkerError, LatexWalkerLocatedError, LatexWalkerLocatedErrorFormatter, LatexWalkerNodesParseError, LatexWalkerTokenParseError, _basestring, format_pos, logger, to_str} from './pylatexenc.latexnodes._exctypes.js';
/* 000037 */ export {LatexWalkerError, LatexGroupNode, LatexNode, LatexWalkerParseError, logger, _unicode_from_str, LatexNodesVisitor, LatexMacroNode, LatexNodeList, _basestring, LatexWalkerTokenParseError, LatexWalkerNodesParseError, __all__, _get_content_as_chars, LatexWalkerLocatedErrorFormatter, format_pos, LatexCharsNode, LatexParserBase, LatexSpecialsNode, LatexWalkerLocatedError, _update_posposend_from_nodelist, to_str, LatexEnvironmentNode, ParsedArguments, LatexMathNode, LatexCommentNode, LatexWalkerEndOfStream, latex_node_types};
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
/* 000143 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexCharsNode, __kwargtrans__ ({chars: verbatim_string, pos: pos_start, pos_end: pos_end, parsing_state: parsing_state}));
/* 000143 */ 		}) ();
/* 000151 */ 		if (__t__ (__t__ (!__t__ ((stop_condition_met))) && ended_with_eos)) {
/* 000152 */ 			return (function () {
/* 000152 */ 				var __accu0__ = self;
/* 000152 */ 				return __call__ (__accu0__.error_end_of_stream, __accu0__, __kwargtrans__ ({pos: pos_end, recovery_nodes: nodes, latex_walker: latex_walker, verbatim_info: verbatim_info}));
/* 000152 */ 			}) ();
/* 000152 */ 		}
/* 000157 */ 		return tuple ([nodes, null]);
/* 000157 */ 	});}
/* 000157 */ });
/* 000161 */ export var LatexDelimitedVerbatimParser =  __class__ ('LatexDelimitedVerbatimParser', [LatexVerbatimBaseParser], {
/* 000161 */ 	__module__: __name__,
/* 000169 */ 	get __init__ () {return __get__ (this, function (self, delimiters, auto_delimiters) {
/* 000169 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000169 */ 			var delimiters = null;
/* 000169 */ 		};
/* 000169 */ 		if (typeof auto_delimiters == 'undefined' || (auto_delimiters != null && auto_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000169 */ 			var auto_delimiters = null;
/* 000169 */ 		};
/* 000169 */ 		var kwargs = dict ();
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'auto_delimiters': var auto_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 				delete kwargs.__kwargtrans__;
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000173 */ 		__call__ (__call__ (__super__, null, LatexDelimitedVerbatimParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000175 */ 		self.delimiters = delimiters;
/* 000177 */ 		if (__t__ (auto_delimiters !== null)) {
/* 000178 */ 			self.auto_delimiters = __call__ (dict, null, auto_delimiters);
/* 000178 */ 		}
/* 000179 */ 		else {
/* 000180 */ 			self.auto_delimiters = dict ({'{': '}', '[': ']', '<': '>', '(': ')'});
/* 000180 */ 		}
/* 000187 */ 		self.depth_counter = 1;
/* 000190 */ 		self.parsed_delimiters = null;
/* 000190 */ 	});},
/* 000193 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000199 */ 		if (__t__ (char === null)) {
/* 000200 */ 			return false;
/* 000200 */ 		}
/* 000202 */ 		if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 1)))) {
/* 000204 */ 			self.depth_counter = __call__ (__isub__, null, self.depth_counter, 1);
/* 000205 */ 			if (__t__ (__le__ (self.depth_counter, 0))) {
/* 000207 */ 				return true;
/* 000207 */ 			}
/* 000207 */ 		}
/* 000208 */ 		else if (__t__ (__eq__ (char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000210 */ 			self.depth_counter = __call__ (__iadd__, null, self.depth_counter, 1);
/* 000210 */ 		}
/* 000212 */ 		return false;
/* 000212 */ 	});},
/* 000215 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000215 */ 		var kwargs = dict ();
/* 000215 */ 		if (arguments.length) {
/* 000215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 					switch (__attrib0__) {
/* 000215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 				delete kwargs.__kwargtrans__;
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 		else {
/* 000215 */ 		}
/* 000217 */ 		var verbatim_info = (function () {
/* 000217 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000217 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000217 */ 		}) ();
/* 000219 */ 		(function () {
/* 000219 */ 			var __accu0__ = token_reader;
/* 000219 */ 			return __call__ (__accu0__.skip_space_chars, __accu0__, parsing_state);
/* 000219 */ 		}) ();
/* 000221 */ 		verbatim_info.original_pos = (function () {
/* 000221 */ 			var __accu0__ = token_reader;
/* 000221 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000221 */ 		}) ();
/* 000223 */ 		if (__t__ (self.delimiters === null)) {
/* 000226 */ 			var open_delim_char = (function () {
/* 000226 */ 				var __accu0__ = token_reader;
/* 000226 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000226 */ 			}) ();
/* 000228 */ 			var close_delim_char = (function () {
/* 000228 */ 				var __accu0__ = self.auto_delimiters;
/* 000228 */ 				return __call__ (__accu0__.py_get, __accu0__, open_delim_char, open_delim_char);
/* 000228 */ 			}) ();
/* 000230 */ 			verbatim_info.parsed_delimiters = tuple ([open_delim_char, close_delim_char]);
/* 000230 */ 		}
/* 000231 */ 		else {
/* 000234 */ 			verbatim_info.parsed_delimiters = self.delimiters;
/* 000236 */ 			var first_char = (function () {
/* 000236 */ 				var __accu0__ = token_reader;
/* 000236 */ 				return __call__ (__accu0__.next_chars, __accu0__, 1, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000236 */ 			}) ();
/* 000237 */ 			if (__t__ (__ne__ (first_char, __getitem__ (verbatim_info.parsed_delimiters, 0)))) {
/* 000239 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: (function () {
/* 000239 */ 					var __accu0__ = 'Expected opening delimiter ‘{}’ for verbatim content';
/* 000239 */ 					return __call__ (__accu0__.format, __accu0__, __getitem__ (verbatim_info.parsed_delimiters, 0));
/* 000239 */ 				}) (), pos: pos, error_type_info: dict ({'what': 'verbatim_expected_opening_delimiter_not_found', 'expected_delimiters': verbatim_info.parsed_delimiters})}));
/* 000239 */ 				__except0__.__cause__ = null;
/* 000239 */ 				throw __except0__;
/* 000239 */ 			}
/* 000239 */ 		}
/* 000250 */ 		var __left0__ = (function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (__mergekwargtrans__ ({verbatim_info: verbatim_info}, kwargs)));
/* 000250 */ 		}) ();
/* 000250 */ 		var verbatim_node = __left0__ [0];
/* 000250 */ 		var _ = __left0__ [1];
/* 000253 */ 		var nodes = (function () {
/* 000253 */ 			var __accu0__ = latex_walker;
/* 000256 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({delimiters: verbatim_info.parsed_delimiters, nodelist: (function () {
/* 000256 */ 				var __accu1__ = latex_walker;
/* 000256 */ 				return __call__ (__accu1__.make_nodelist, __accu1__, [verbatim_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000261 */ 			}) (), pos: verbatim_info.original_pos, pos_end: __add__ (verbatim_node.pos_end, __call__ (len, null, __getitem__ (verbatim_info.parsed_delimiters, 1))), parsing_state: parsing_state}));
/* 000261 */ 		}) ();
/* 000265 */ 		return tuple ([nodes, null]);
/* 000265 */ 	});}
/* 000265 */ });
/* 000269 */ export var LatexVerbatimEnvironmentContentsParser =  __class__ ('LatexVerbatimEnvironmentContentsParser', [LatexVerbatimBaseParser], {
/* 000269 */ 	__module__: __name__,
/* 000275 */ 	get __init__ () {return __get__ (this, function (self, environment_name) {
/* 000275 */ 		if (typeof environment_name == 'undefined' || (environment_name != null && environment_name.hasOwnProperty ("__kwargtrans__"))) {;
/* 000275 */ 			var environment_name = 'verbatim';
/* 000275 */ 		};
/* 000275 */ 		var kwargs = dict ();
/* 000275 */ 		if (arguments.length) {
/* 000275 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000275 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000275 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000275 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000275 */ 					switch (__attrib0__) {
/* 000275 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						case 'environment_name': var environment_name = __allkwargs0__ [__attrib0__]; break;
/* 000275 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000275 */ 					}
/* 000275 */ 				}
/* 000275 */ 				delete kwargs.__kwargtrans__;
/* 000275 */ 			}
/* 000275 */ 		}
/* 000275 */ 		else {
/* 000275 */ 		}
/* 000276 */ 		__call__ (__call__ (__super__, null, LatexVerbatimEnvironmentContentsParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000277 */ 		self.environment_name = environment_name;
/* 000277 */ 	});},
/* 000279 */ 	get new_char_check_stop_condition () {return __get__ (this, function (self, char, verbatim_string, verbatim_info, parsing_state) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'char': var char = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000282 */ 		if (__t__ ((function () {
/* 000282 */ 			var __accu0__ = verbatim_string;
/* 000282 */ 			return __call__ (__accu0__.endswith, __accu0__, verbatim_info.end_environment_code);
/* 000282 */ 		}) ())) {
/* 000283 */ 			return dict ({'put_back_char': true});
/* 000283 */ 		}
/* 000284 */ 		return false;
/* 000284 */ 	});},
/* 000286 */ 	get finalize_verbatim_string () {return __get__ (this, function (self, verbatim_string, verbatim_info) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'verbatim_string': var verbatim_string = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'verbatim_info': var verbatim_info = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000288 */ 		var end_environment_code = verbatim_info.end_environment_code;
/* 000289 */ 		assert ((function () {
/* 000289 */ 			var __accu0__ = verbatim_string;
/* 000289 */ 			return __call__ (__accu0__.endswith, __accu0__, end_environment_code);
/* 000289 */ 		}) ());
/* 000291 */ 		var verbatim_string = __getslice__ (verbatim_string, 0, __neg__ (__call__ (len, null, end_environment_code)), 1);
/* 000293 */ 		var pos_start = verbatim_info.original_pos;
/* 000295 */ 		if (__t__ ((function () {
/* 000295 */ 			var __accu0__ = verbatim_string;
/* 000295 */ 			return __call__ (__accu0__.startswith, __accu0__, '\n');
/* 000295 */ 		}) ())) {
/* 000298 */ 			var verbatim_string = __getslice__ (verbatim_string, 1, null, 1);
/* 000299 */ 			var pos_start = __call__ (__iadd__, null, pos_start, 1);
/* 000299 */ 		}
/* 000301 */ 		verbatim_info.pos_start = pos_start;
/* 000302 */ 		verbatim_info.pos_end = __add__ (pos_start, __call__ (len, null, verbatim_string));
/* 000303 */ 		return verbatim_string;
/* 000303 */ 	});},
/* 000305 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000305 */ 		var kwargs = dict ();
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 				delete kwargs.__kwargtrans__;
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000307 */ 		var verbatim_info = (function () {
/* 000307 */ 			var __accu0__ = LatexVerbatimBaseParser;
/* 000307 */ 			return __call__ (__accu0__.VerbatimInfo, __accu0__);
/* 000307 */ 		}) ();
/* 000308 */ 		verbatim_info.original_pos = (function () {
/* 000308 */ 			var __accu0__ = token_reader;
/* 000308 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000308 */ 		}) ();
/* 000310 */ 		verbatim_info.end_environment_code = __add__ (__add__ (__add__ (parsing_state.macro_escape_char, 'end{'), self.environment_name), '}');
/* 000315 */ 		var __left0__ = (function () {
/* 000315 */ 			var __accu0__ = self;
/* 000315 */ 			return __call__ (__accu0__.read_verbatim_content, __accu0__, latex_walker, token_reader, parsing_state, verbatim_info, __kwargtrans__ (kwargs));
/* 000315 */ 		}) ();
/* 000315 */ 		var verbatim_chars_node = __left0__ [0];
/* 000315 */ 		var _ = __left0__ [1];
/* 000318 */ 		var nodes = (function () {
/* 000318 */ 			var __accu0__ = latex_walker;
/* 000318 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [verbatim_chars_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000318 */ 		}) ();
/* 000326 */ 		return tuple ([nodes, null]);
/* 000326 */ 	});}
/* 000326 */ });
/* 000037 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._verbatim.map