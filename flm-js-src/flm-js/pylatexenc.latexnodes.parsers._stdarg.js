/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 20:52:34
/* 000038 */ var logging = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import {LatexDelimitedVerbatimParser} from './pylatexenc.latexnodes.parsers._verbatim.js';
/* 000052 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000051 */ import {LatexOptionalCharsMarkerParser} from './pylatexenc.latexnodes.parsers._optionals.js';
/* 000046 */ import {LatexDelimitedExpressionParserInfo, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000042 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000038 */ export {LatexDelimitedGroupParser, LatexNodeList, LatexExpressionParser, LatexMathNode, LatexMacroNode, ParsedArguments, LatexGeneralNodesParser, _display_str_delimiters, _update_posposend_from_nodelist, LatexNodesVisitor, _get_content_as_chars, LatexWalkerParseError, LatexCharsNode, _unicode_from_str, LatexCommentNode, latex_node_types, LatexOptionalCharsMarkerParser, LatexDelimitedVerbatimParser, LatexDelimitedExpressionParserInfo, LatexNode, __all__, LatexEnvironmentNode, LatexGroupNode, LatexSpecialsNode, LatexParserBase, _display_abbrev_str, LatexDelimitedGroupParserInfo};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._stdarg';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000058 */ export var _basestring = str;
/* 000074 */ export var _std_arg_parser_instances = dict ({});
/* 000076 */ export var get_standard_argument_parser = function (arg_spec) {
/* 000076 */ 	var kwargs = dict ();
/* 000076 */ 	if (arguments.length) {
/* 000076 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000076 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000076 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000076 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000076 */ 				switch (__attrib0__) {
/* 000076 */ 					case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000076 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000076 */ 				}
/* 000076 */ 			}
/* 000076 */ 			delete kwargs.__kwargtrans__;
/* 000076 */ 		}
/* 000076 */ 	}
/* 000076 */ 	else {
/* 000076 */ 	}
/* 000083 */ 	if (__t__ (!__t__ ((__call__ (len, null, kwargs))))) {
/* 000084 */ 		var k = arg_spec;
/* 000084 */ 	}
/* 000085 */ 	else {
/* 000086 */ 		var d = dict ({'arg_spec': arg_spec});
/* 000087 */ 		(function () {
/* 000087 */ 			var __accu0__ = d;
/* 000087 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000087 */ 		}) ();
/* 000088 */ 		var k = __call__ (tuple, null, __call__ (list, null, __call__ (sorted, null, (function () {
/* 000088 */ 			var __accu0__ = d;
/* 000088 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000088 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (v) {
/* 000088 */ 			if (arguments.length) {
/* 000088 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 						switch (__attrib0__) {
/* 000088 */ 							case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						}
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 			else {
/* 000088 */ 			}
/* 000088 */ 			return __getitem__ (v, 0);
/* 000088 */ 		})}))));
/* 000088 */ 	}
/* 000090 */ 	if (__t__ (!__in__ (k, _std_arg_parser_instances))) {
/* 000091 */ 		var instance = __call__ (LatexStandardArgumentParser, null, arg_spec, __kwargtrans__ (kwargs));
/* 000092 */ 		__setitem__ (_std_arg_parser_instances, k, instance);
/* 000093 */ 		return instance;
/* 000093 */ 	}
/* 000095 */ 	return __getitem__ (_std_arg_parser_instances, k);
/* 000095 */ };
/* 000103 */ export var LatexStandardArgumentParser =  __class__ ('LatexStandardArgumentParser', [LatexParserBase], {
/* 000103 */ 	__module__: __name__,
/* 000113 */ 	get __init__ () {return __get__ (this, function (self, arg_spec, return_full_node_list, expression_single_token_requiring_arg_is_error, allow_pre_space) {
/* 000113 */ 		if (typeof arg_spec == 'undefined' || (arg_spec != null && arg_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 			var arg_spec = '{';
/* 000113 */ 		};
/* 000113 */ 		if (typeof return_full_node_list == 'undefined' || (return_full_node_list != null && return_full_node_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 			var return_full_node_list = false;
/* 000113 */ 		};
/* 000113 */ 		if (typeof expression_single_token_requiring_arg_is_error == 'undefined' || (expression_single_token_requiring_arg_is_error != null && expression_single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 			var expression_single_token_requiring_arg_is_error = true;
/* 000113 */ 		};
/* 000113 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000113 */ 			var allow_pre_space = true;
/* 000113 */ 		};
/* 000113 */ 		var kwargs = dict ();
/* 000113 */ 		if (arguments.length) {
/* 000113 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000113 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000113 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000113 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000113 */ 					switch (__attrib0__) {
/* 000113 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'return_full_node_list': var return_full_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'expression_single_token_requiring_arg_is_error': var expression_single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000113 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000113 */ 					}
/* 000113 */ 				}
/* 000113 */ 				delete kwargs.__kwargtrans__;
/* 000113 */ 			}
/* 000113 */ 		}
/* 000113 */ 		else {
/* 000113 */ 		}
/* 000120 */ 		__call__ (__call__ (__super__, null, LatexStandardArgumentParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000122 */ 		self.arg_spec = arg_spec;
/* 000124 */ 		self.return_full_node_list = return_full_node_list;
/* 000125 */ 		self.expression_single_token_requiring_arg_is_error = expression_single_token_requiring_arg_is_error;
/* 000128 */ 		self.allow_pre_space = allow_pre_space;
/* 000130 */ 		self._arg_parser = null;
/* 000130 */ 	});},
/* 000134 */ 	get get_arg_parser_instance () {return __get__ (this, function (self, arg_spec) {
/* 000134 */ 		if (arguments.length) {
/* 000134 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000134 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000134 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000134 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000134 */ 					switch (__attrib0__) {
/* 000134 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000134 */ 					}
/* 000134 */ 				}
/* 000134 */ 			}
/* 000134 */ 		}
/* 000134 */ 		else {
/* 000134 */ 		}
/* 000136 */ 		if (__t__ (__in__ (arg_spec, tuple (['m', '{'])))) {
/* 000138 */ 			return __call__ (LatexExpressionParser, null, __kwargtrans__ ({return_full_node_list: self.return_full_node_list, single_token_requiring_arg_is_error: self.expression_single_token_requiring_arg_is_error, allow_pre_space: self.allow_pre_space, allow_pre_comments: self.allow_pre_space}));
/* 000138 */ 		}
/* 000146 */ 		else if (__t__ (__in__ (arg_spec, tuple (['o', '['])))) {
/* 000148 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000148 */ 		}
/* 000154 */ 		else if (__t__ (__in__ (arg_spec, tuple (['s', '*'])))) {
/* 000156 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: '*', allow_pre_space: self.allow_pre_space, return_full_node_list: self.return_full_node_list}));
/* 000156 */ 		}
/* 000162 */ 		else if (__t__ ((function () {
/* 000162 */ 			var __accu0__ = arg_spec;
/* 000162 */ 			return __call__ (__accu0__.startswith, __accu0__, 't');
/* 000162 */ 		}) ())) {
/* 000164 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 2))) {
/* 000165 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional char argument should be of the form ‘t<char>’');
/* 000165 */ 				__except0__.__cause__ = null;
/* 000165 */ 				throw __except0__;
/* 000165 */ 			}
/* 000167 */ 			var the_char = __getitem__ (arg_spec, 1);
/* 000169 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: the_char, allow_pre_space: self.allow_pre_space}));
/* 000169 */ 		}
/* 000174 */ 		else if (__t__ ((function () {
/* 000174 */ 			var __accu0__ = arg_spec;
/* 000174 */ 			return __call__ (__accu0__.startswith, __accu0__, 'r');
/* 000174 */ 		}) ())) {
/* 000176 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000177 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a required delimited argument should be of the form ‘r<char1><char2>’');
/* 000177 */ 				__except0__.__cause__ = null;
/* 000177 */ 				throw __except0__;
/* 000177 */ 			}
/* 000179 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000180 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000182 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: false, allow_pre_space: self.allow_pre_space}));
/* 000182 */ 		}
/* 000188 */ 		else if (__t__ ((function () {
/* 000188 */ 			var __accu0__ = arg_spec;
/* 000188 */ 			return __call__ (__accu0__.startswith, __accu0__, 'd');
/* 000188 */ 		}) ())) {
/* 000190 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000191 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional delimited argument should be of the form ‘d<char1><char2>’');
/* 000191 */ 				__except0__.__cause__ = null;
/* 000191 */ 				throw __except0__;
/* 000191 */ 			}
/* 000193 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000194 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000196 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000196 */ 		}
/* 000202 */ 		else if (__t__ ((function () {
/* 000202 */ 			var __accu0__ = arg_spec;
/* 000202 */ 			return __call__ (__accu0__.startswith, __accu0__, 'v');
/* 000202 */ 		}) ())) {
/* 000205 */ 			if (__t__ (__eq__ (__call__ (len, null, arg_spec), 1))) {
/* 000206 */ 				var delimiter_chars = null;
/* 000206 */ 			}
/* 000207 */ 			else if (__t__ (__eq__ (__call__ (len, null, arg_spec), 3))) {
/* 000208 */ 				var delimiter_chars = tuple ([__getitem__ (arg_spec, 1), __getitem__ (arg_spec, 2)]);
/* 000208 */ 			}
/* 000209 */ 			else {
/* 000210 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a verbatim argument should be either ‘v’ or ‘v<char1><char2>’');
/* 000210 */ 				__except0__.__cause__ = null;
/* 000210 */ 				throw __except0__;
/* 000210 */ 			}
/* 000212 */ 			return __call__ (LatexDelimitedVerbatimParser, null, __kwargtrans__ ({delimiter_chars: delimiter_chars}));
/* 000212 */ 		}
/* 000214 */ 		else {
/* 000218 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000218 */ 				var __accu0__ = 'Unknown argument specification: {!r}';
/* 000218 */ 				return __call__ (__accu0__.format, __accu0__, arg_spec);
/* 000218 */ 			}) ());
/* 000218 */ 			__except0__.__cause__ = null;
/* 000218 */ 			throw __except0__;
/* 000218 */ 		}
/* 000218 */ 	});},
/* 000221 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000221 */ 		var kwargs = dict ();
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 				delete kwargs.__kwargtrans__;
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000223 */ 		if (__t__ (self._arg_parser === null)) {
/* 000224 */ 			self._arg_parser = (function () {
/* 000224 */ 				var __accu0__ = self;
/* 000224 */ 				return __call__ (__accu0__.get_arg_parser_instance, __accu0__, self.arg_spec);
/* 000224 */ 			}) ();
/* 000224 */ 		}
/* 000226 */ 		var arg_parser = self._arg_parser;
/* 000228 */ 		var __left0__ = (function () {
/* 000228 */ 			var __accu0__ = latex_walker;
/* 000228 */ 			return __call__ (__accu0__.parse_content, __accu0__, arg_parser, __kwargtrans__ (__mergekwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}, kwargs)));
/* 000228 */ 		}) ();
/* 000228 */ 		var nodes = __left0__ [0];
/* 000228 */ 		var parsing_state_delta = __left0__ [1];
/* 000235 */ 		return tuple ([nodes, parsing_state_delta]);
/* 000235 */ 	});}
/* 000235 */ });
/* 000245 */ export var LatexCharsGroupParser =  __class__ ('LatexCharsGroupParser', [LatexDelimitedGroupParser], {
/* 000245 */ 	__module__: __name__,
/* 000255 */ 	get __init__ () {return __get__ (this, function (self, delimiters, enable_comments, enable_groups) {
/* 000255 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var delimiters = tuple (['{', '}']);
/* 000255 */ 		};
/* 000255 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var enable_comments = true;
/* 000255 */ 		};
/* 000255 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000255 */ 			var enable_groups = true;
/* 000255 */ 		};
/* 000255 */ 		var kwargs = dict ();
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 				delete kwargs.__kwargtrans__;
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000257 */ 		__call__ (__call__ (__super__, null, LatexCharsGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsGroupParser.CharsContentsParserInfo}, kwargs)));
/* 000263 */ 		self.enable_comments = enable_comments;
/* 000264 */ 		self.enable_groups = enable_groups;
/* 000267 */ 	});},
/* 000267 */ 	CharsContentsParserInfo: __class__ ('CharsContentsParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000267 */ 		__module__: __name__,
/* 000268 */ 		get initialize () {return __get__ (this, function (self) {
/* 000268 */ 			if (arguments.length) {
/* 000268 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 						switch (__attrib0__) {
/* 000268 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						}
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 			else {
/* 000268 */ 			}
/* 000269 */ 			self.contents_parsing_state = (function () {
/* 000269 */ 				var __accu0__ = self.group_parsing_state;
/* 000269 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000269 */ 			}) ();
/* 000278 */ 			self.current_parsing_state = self.contents_parsing_state;
/* 000280 */ 			self.parsed_delimiters = (function () {
/* 000280 */ 				var __accu0__ = self;
/* 000280 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000280 */ 			}) ();
/* 000282 */ 			// pass;
/* 000282 */ 		});},
/* 000286 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000286 */ 			if (arguments.length) {
/* 000286 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 						switch (__attrib0__) {
/* 000286 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						}
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 			else {
/* 000286 */ 			}
/* 000287 */ 			return self.parsing_state;
/* 000287 */ 		});},
/* 000289 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000289 */ 			if (arguments.length) {
/* 000289 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 						switch (__attrib0__) {
/* 000289 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						}
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 			}
/* 000289 */ 			else {
/* 000289 */ 			}
/* 000290 */ 			// pass;
/* 000293 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000294 */ 				return true;
/* 000294 */ 			}
/* 000296 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000297 */ 				return true;
/* 000297 */ 			}
/* 000298 */ 			return null;
/* 000298 */ 		});}
/* 000298 */ 	})
/* 000298 */ });
/* 000306 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000306 */ 	__module__: __name__,
/* 000309 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000309 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var comma_char = ',';
/* 000309 */ 		};
/* 000309 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var delimiters = tuple (['{', '}']);
/* 000309 */ 		};
/* 000309 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var enable_comments = true;
/* 000309 */ 		};
/* 000309 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var enable_groups = true;
/* 000309 */ 		};
/* 000309 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000309 */ 			var keep_empty_parts = false;
/* 000309 */ 		};
/* 000309 */ 		var kwargs = dict ();
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 				delete kwargs.__kwargtrans__;
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000312 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000319 */ 		self.comma_char = comma_char;
/* 000320 */ 		self.enable_comments = enable_comments;
/* 000321 */ 		self.enable_groups = enable_groups;
/* 000322 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000324 */ 	});},
/* 000324 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000324 */ 		__module__: __name__,
/* 000325 */ 		get initialize () {return __get__ (this, function (self) {
/* 000325 */ 			if (arguments.length) {
/* 000325 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 						switch (__attrib0__) {
/* 000325 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						}
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 			else {
/* 000325 */ 			}
/* 000326 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000328 */ 			self.contents_parsing_state = (function () {
/* 000328 */ 				var __accu0__ = self.group_parsing_state;
/* 000328 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000328 */ 			}) ();
/* 000336 */ 			self.parsed_delimiters = (function () {
/* 000336 */ 				var __accu0__ = self;
/* 000336 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000336 */ 			}) ();
/* 000338 */ 			// pass;
/* 000338 */ 		});},
/* 000342 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000342 */ 			if (arguments.length) {
/* 000342 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 						switch (__attrib0__) {
/* 000342 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						}
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 			else {
/* 000342 */ 			}
/* 000343 */ 			return self.parsing_state;
/* 000343 */ 		});},
/* 000345 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000345 */ 			if (arguments.length) {
/* 000345 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 						switch (__attrib0__) {
/* 000345 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						}
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 			else {
/* 000345 */ 			}
/* 000346 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000346 */ 		});}
/* 000346 */ 	})
/* 000346 */ });
/* 000349 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000349 */ 	__module__: __name__,
/* 000350 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000350 */ 		var kwargs = dict ();
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 				delete kwargs.__kwargtrans__;
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000352 */ 		self.contents_parser_info = contents_parser_info;
/* 000359 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000359 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000359 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000359 */ 		}) ()}));
/* 000369 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000370 */ 		self.comma_sep_arg_list = [];
/* 000371 */ 		self.parsing_state_delta = null;
/* 000372 */ 		self.parse_more = true;
/* 000373 */ 		self.pos_start = null;
/* 000374 */ 		self.is_very_first_element = true;
/* 000375 */ 		self.last_element_pos_start = null;
/* 000376 */ 		self.last_delimiter_token = null;
/* 000377 */ 		self.last_element_pos_end = null;
/* 000377 */ 	});},
/* 000379 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000380 */ 		// pass;
/* 000383 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000385 */ 			return true;
/* 000385 */ 		}
/* 000386 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000387 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000388 */ 				return true;
/* 000388 */ 			}
/* 000389 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000390 */ 				return true;
/* 000390 */ 			}
/* 000391 */ 			return false;
/* 000391 */ 		}
/* 000392 */ 		return false;
/* 000392 */ 	});},
/* 000394 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000396 */ 		(function () {
/* 000396 */ 			var __accu0__ = token_reader;
/* 000396 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000396 */ 		}) ();
/* 000397 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000399 */ 			self.last_delimiter_token = null;
/* 000400 */ 			self.last_element_pos_end = token.pos;
/* 000401 */ 			self.parse_more = false;
/* 000401 */ 		}
/* 000402 */ 		else {
/* 000403 */ 			self.last_delimiter_token = token;
/* 000404 */ 			self.last_element_pos_end = token.pos_end;
/* 000405 */ 			self.parse_more = true;
/* 000405 */ 		}
/* 000405 */ 	});},
/* 000408 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000408 */ 		if (arguments.length) {
/* 000408 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000408 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000408 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000408 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000408 */ 					switch (__attrib0__) {
/* 000408 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000408 */ 					}
/* 000408 */ 				}
/* 000408 */ 			}
/* 000408 */ 		}
/* 000408 */ 		else {
/* 000408 */ 		}
/* 000410 */ 		// pass;
/* 000414 */ 		self.pos_start = (function () {
/* 000414 */ 			var __accu0__ = token_reader;
/* 000414 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000414 */ 		}) ();
/* 000416 */ 		self.parse_more = true;
/* 000417 */ 		while (__t__ (self.parse_more)) {
/* 000419 */ 			(function () {
/* 000419 */ 				var __accu0__ = self;
/* 000419 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000419 */ 			}) ();
/* 000421 */ 			if (__t__ (__t__ (self.parse_more) && self.parsing_state_delta !== null)) {
/* 000424 */ 				self.current_parsing_state = (function () {
/* 000424 */ 					var __accu0__ = self.parsing_state_delta;
/* 000424 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state, latex_walker);
/* 000424 */ 				}) ();
/* 000424 */ 			}
/* 000424 */ 		}
/* 000429 */ 		var final_node_list = (function () {
/* 000429 */ 			var __accu0__ = latex_walker;
/* 000429 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end, parsing_state: parsing_state}));
/* 000429 */ 		}) ();
/* 000436 */ 		return tuple ([final_node_list, self.parsing_state_delta]);
/* 000436 */ 	});},
/* 000439 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000441 */ 		// pass;
/* 000445 */ 		self.last_element_pos_start = (function () {
/* 000445 */ 			var __accu0__ = token_reader;
/* 000445 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000445 */ 		}) ();
/* 000447 */ 		self.last_element_pos_end = null;
/* 000448 */ 		self.last_delimiter_token = null;
/* 000450 */ 		var __left0__ = (function () {
/* 000450 */ 			var __accu0__ = latex_walker;
/* 000455 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000455 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000456 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000456 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000456 */ 		}) ();
/* 000456 */ 		var nodelist = __left0__ [0];
/* 000456 */ 		var parsing_state_delta = __left0__ [1];
/* 000463 */ 		// pass;
/* 000468 */ 		var pos_end = self.last_element_pos_end;
/* 000469 */ 		if (__t__ (pos_end === null)) {
/* 000470 */ 			// pass;
/* 000473 */ 			var pos_end = (function () {
/* 000473 */ 				var __accu0__ = token_reader;
/* 000473 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000473 */ 			}) ();
/* 000474 */ 			self.parse_more = false;
/* 000474 */ 		}
/* 000476 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000477 */ 			var this_close_delim = '';
/* 000477 */ 		}
/* 000478 */ 		else {
/* 000479 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000479 */ 		}
/* 000481 */ 		var this_group_node = (function () {
/* 000481 */ 			var __accu0__ = latex_walker;
/* 000481 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000481 */ 		}) ();
/* 000490 */ 		var add_group_node = true;
/* 000491 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000492 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000498 */ 				var add_group_node = false;
/* 000498 */ 			}
/* 000499 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000500 */ 				var add_group_node = true;
/* 000500 */ 			}
/* 000501 */ 			else {
/* 000502 */ 				var add_group_node = false;
/* 000502 */ 			}
/* 000502 */ 		}
/* 000504 */ 		if (__t__ (add_group_node)) {
/* 000505 */ 			(function () {
/* 000505 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000505 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000505 */ 			}) ();
/* 000505 */ 		}
/* 000507 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000509 */ 		self.is_very_first_element = false;
/* 000511 */ 		// pass;
/* 000511 */ 	});}
/* 000511 */ });
/* 000522 */ export var LatexTackOnInformationFieldMacrosParser =  __class__ ('LatexTackOnInformationFieldMacrosParser', [LatexParserBase], {
/* 000522 */ 	__module__: __name__,
/* 000534 */ 	get __init__ () {return __get__ (this, function (self, macronames, allow_multiple) {
/* 000534 */ 		if (typeof allow_multiple == 'undefined' || (allow_multiple != null && allow_multiple.hasOwnProperty ("__kwargtrans__"))) {;
/* 000534 */ 			var allow_multiple = false;
/* 000534 */ 		};
/* 000534 */ 		var kwargs = dict ();
/* 000534 */ 		if (arguments.length) {
/* 000534 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000534 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000534 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000534 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000534 */ 					switch (__attrib0__) {
/* 000534 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'macronames': var macronames = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'allow_multiple': var allow_multiple = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000534 */ 					}
/* 000534 */ 				}
/* 000534 */ 				delete kwargs.__kwargtrans__;
/* 000534 */ 			}
/* 000534 */ 		}
/* 000534 */ 		else {
/* 000534 */ 		}
/* 000535 */ 		__call__ (__call__ (__super__, null, LatexTackOnInformationFieldMacrosParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000537 */ 		self.macronames = __call__ (set, null, macronames);
/* 000538 */ 		if (__t__ (allow_multiple === false)) {
/* 000539 */ 			self.allow_multiple = __call__ (set, null);
/* 000539 */ 		}
/* 000540 */ 		else if (__t__ (allow_multiple === true)) {
/* 000541 */ 			self.allow_multiple = self.macronames;
/* 000541 */ 		}
/* 000542 */ 		else {
/* 000543 */ 			self.allow_multiple = __call__ (set, null, allow_multiple);
/* 000543 */ 		}
/* 000545 */ 		self.expression_parser = __call__ (LatexExpressionParser, null);
/* 000545 */ 	});},
/* 000547 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000547 */ 		if (arguments.length) {
/* 000547 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000547 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000547 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000547 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000547 */ 					switch (__attrib0__) {
/* 000547 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000547 */ 					}
/* 000547 */ 				}
/* 000547 */ 			}
/* 000547 */ 		}
/* 000547 */ 		else {
/* 000547 */ 		}
/* 000548 */ 		return true;
/* 000548 */ 	});},
/* 000550 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000550 */ 		if (arguments.length) {
/* 000550 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000550 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000550 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000550 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000550 */ 					switch (__attrib0__) {
/* 000550 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000550 */ 					}
/* 000550 */ 				}
/* 000550 */ 			}
/* 000550 */ 		}
/* 000550 */ 		else {
/* 000550 */ 		}
/* 000555 */ 		return self.expression_parser;
/* 000555 */ 	});},
/* 000557 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000557 */ 		if (arguments.length) {
/* 000557 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000557 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000557 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000557 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000557 */ 					switch (__attrib0__) {
/* 000557 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 					}
/* 000557 */ 				}
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 		else {
/* 000557 */ 		}
/* 000559 */ 		var arg_nodes = [];
/* 000561 */ 		var seen_macronames = __call__ (set, null);
/* 000563 */ 		while (__t__ (true)) {
/* 000564 */ 			var tok = (function () {
/* 000564 */ 				var __accu0__ = token_reader;
/* 000564 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, parsing_state);
/* 000564 */ 			}) ();
/* 000566 */ 			if (__t__ (__t__ (tok === null) || __t__ (__ne__ (tok.tok, 'macro')) || !__in__ (tok.arg, self.macronames))) {
/* 000567 */ 				// pass;
/* 000567 */ 				break;
/* 000567 */ 			}
/* 000572 */ 			var macroname = tok.arg;
/* 000573 */ 			var tolerant_parsing_skip_add_this_node = false;
/* 000577 */ 			(function () {
/* 000577 */ 				var __accu0__ = token_reader;
/* 000577 */ 				return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000577 */ 			}) ();
/* 000579 */ 			if (__t__ (__t__ (__in__ (macroname, seen_macronames)) && !__t__ ((__in__ (macroname, self.allow_multiple))))) {
/* 000581 */ 				var message = (function () {
/* 000581 */ 					var __accu0__ = 'You cannot specify information field macro \\{} multiple times';
/* 000581 */ 					return __call__ (__accu0__.format, __accu0__, macroname);
/* 000581 */ 				}) ();
/* 000584 */ 				var exc = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: message, pos: tok.pos, error_type_info: dict ({'what': 'nodes_stdarg_illegal_multiple_information_field_macro', 'macroname': macroname})}));
/* 000592 */ 				var exc = (function () {
/* 000592 */ 					var __accu0__ = latex_walker;
/* 000592 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, exc);
/* 000592 */ 				}) ();
/* 000593 */ 				if (__t__ (exc !== null)) {
/* 000594 */ 					var __except0__ = exc;
/* 000594 */ 					__except0__.__cause__ = null;
/* 000594 */ 					throw __except0__;
/* 000594 */ 				}
/* 000595 */ 				(function () {
/* 000595 */ 					var __accu0__ = logger;
/* 000595 */ 					return __call__ (__accu0__.warning, __accu0__, '%s; ignoring the additional information field macros', message);
/* 000595 */ 				}) ();
/* 000596 */ 				var tolerant_parsing_skip_add_this_node = true;
/* 000596 */ 			}
/* 000598 */ 			var macro_arg_parser = (function () {
/* 000598 */ 				var __accu0__ = self;
/* 000598 */ 				return __call__ (__accu0__.get_macro_arg_parser, __accu0__, macroname);
/* 000598 */ 			}) ();
/* 000600 */ 			var __left0__ = (function () {
/* 000600 */ 				var __accu0__ = latex_walker;
/* 000605 */ 				return __call__ (__accu0__.parse_content, __accu0__, macro_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, open_context: tuple ([(function () {
/* 000605 */ 					var __accu1__ = 'Argument of information field macro \\{}';
/* 000605 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000605 */ 				}) (), tok])}));
/* 000605 */ 			}) ();
/* 000605 */ 			var arg_content_node = __left0__ [0];
/* 000605 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000610 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000611 */ 				(function () {
/* 000611 */ 					var __accu0__ = logger;
/* 000612 */ 					return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000612 */ 						var __accu1__ = 'Parsing state delta is ignored when parsing tack-on information field macro \\{}: {}';
/* 000612 */ 						return __call__ (__accu1__.format, __accu1__, macroname, arg_parsing_state_delta);
/* 000612 */ 					}) ());
/* 000612 */ 				}) ();
/* 000612 */ 			}
/* 000617 */ 			if (__t__ (tolerant_parsing_skip_add_this_node)) {
/* 000617 */ 				continue;
/* 000617 */ 			}
/* 000620 */ 			if (__t__ (__call__ (isinstance, null, arg_content_node, LatexNodeList))) {
/* 000621 */ 				var arg_content_nodelist = arg_content_node;
/* 000621 */ 			}
/* 000622 */ 			else {
/* 000623 */ 				var arg_content_nodelist = (function () {
/* 000623 */ 					var __accu0__ = latex_walker;
/* 000623 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [arg_content_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000623 */ 				}) ();
/* 000623 */ 			}
/* 000628 */ 			var arg_node = (function () {
/* 000628 */ 				var __accu0__ = latex_walker;
/* 000628 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([__add__ ('\\', macroname), '']), nodelist: arg_content_nodelist, pos: tok.pos, pos_end: arg_content_node.pos_end}));
/* 000628 */ 			}) ();
/* 000637 */ 			(function () {
/* 000637 */ 				var __accu0__ = arg_nodes;
/* 000637 */ 				return __call__ (__accu0__.append, __accu0__, arg_node);
/* 000637 */ 			}) ();
/* 000637 */ 		}
/* 000639 */ 		var arg_nodelist = (function () {
/* 000639 */ 			var __accu0__ = latex_walker;
/* 000639 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, arg_nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000639 */ 		}) ();
/* 000644 */ 		return tuple ([arg_nodelist, null]);
/* 000644 */ 	});}
/* 000644 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map