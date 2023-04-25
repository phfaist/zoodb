/* 000001 */ // Transcrypt'ed from Python, 2023-04-25 09:47:56
/* 000038 */ var logging = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import {LatexDelimitedVerbatimParser} from './pylatexenc.latexnodes.parsers._verbatim.js';
/* 000052 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000051 */ import {LatexOptionalCharsMarkerParser} from './pylatexenc.latexnodes.parsers._optionals.js';
/* 000046 */ import {LatexDelimitedExpressionParserInfo, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000042 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000038 */ export {LatexMacroNode, LatexMathNode, latex_node_types, LatexCharsNode, _update_posposend_from_nodelist, LatexDelimitedGroupParserInfo, LatexGroupNode, LatexNodesVisitor, LatexDelimitedGroupParser, LatexDelimitedVerbatimParser, LatexWalkerParseError, LatexParserBase, LatexExpressionParser, ParsedArguments, LatexDelimitedExpressionParserInfo, LatexNodeList, LatexNode, LatexOptionalCharsMarkerParser, LatexSpecialsNode, _unicode_from_str, LatexGeneralNodesParser, _get_content_as_chars, LatexEnvironmentNode, __all__, LatexCommentNode};
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
/* 000282 */ 			(function () {
/* 000282 */ 				var __accu0__ = logger;
/* 000282 */ 				return __call__ (__accu0__.debug, __accu0__, 'Initialized CharsContentsParserInfo; %r', self.__dict__);
/* 000282 */ 			}) ();
/* 000282 */ 		});},
/* 000284 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000284 */ 			if (arguments.length) {
/* 000284 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000284 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000284 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000284 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000284 */ 						switch (__attrib0__) {
/* 000284 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000284 */ 						}
/* 000284 */ 					}
/* 000284 */ 				}
/* 000284 */ 			}
/* 000284 */ 			else {
/* 000284 */ 			}
/* 000285 */ 			return self.parsing_state;
/* 000285 */ 		});},
/* 000287 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000287 */ 			if (arguments.length) {
/* 000287 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 						switch (__attrib0__) {
/* 000287 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						}
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 			else {
/* 000287 */ 			}
/* 000288 */ 			(function () {
/* 000288 */ 				var __accu0__ = logger;
/* 000288 */ 				return __call__ (__accu0__.debug, __accu0__, 'stop_token_condition: %r', token);
/* 000288 */ 			}) ();
/* 000289 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000290 */ 				return true;
/* 000290 */ 			}
/* 000292 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000293 */ 				return true;
/* 000293 */ 			}
/* 000294 */ 			return null;
/* 000294 */ 		});}
/* 000294 */ 	})
/* 000294 */ });
/* 000302 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000302 */ 	__module__: __name__,
/* 000305 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000305 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000305 */ 			var comma_char = ',';
/* 000305 */ 		};
/* 000305 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000305 */ 			var delimiters = tuple (['{', '}']);
/* 000305 */ 		};
/* 000305 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000305 */ 			var enable_comments = true;
/* 000305 */ 		};
/* 000305 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000305 */ 			var enable_groups = true;
/* 000305 */ 		};
/* 000305 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000305 */ 			var keep_empty_parts = false;
/* 000305 */ 		};
/* 000305 */ 		var kwargs = dict ();
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 				delete kwargs.__kwargtrans__;
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000308 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000315 */ 		self.comma_char = comma_char;
/* 000316 */ 		self.enable_comments = enable_comments;
/* 000317 */ 		self.enable_groups = enable_groups;
/* 000318 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000320 */ 	});},
/* 000320 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000320 */ 		__module__: __name__,
/* 000321 */ 		get initialize () {return __get__ (this, function (self) {
/* 000321 */ 			if (arguments.length) {
/* 000321 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 						switch (__attrib0__) {
/* 000321 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						}
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 			else {
/* 000321 */ 			}
/* 000322 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000324 */ 			self.contents_parsing_state = (function () {
/* 000324 */ 				var __accu0__ = self.group_parsing_state;
/* 000324 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000324 */ 			}) ();
/* 000332 */ 			self.parsed_delimiters = (function () {
/* 000332 */ 				var __accu0__ = self;
/* 000332 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000332 */ 			}) ();
/* 000334 */ 			(function () {
/* 000334 */ 				var __accu0__ = logger;
/* 000334 */ 				return __call__ (__accu0__.debug, __accu0__, 'Initialized CommaSepContentsParserInfo; %r', self.__dict__);
/* 000334 */ 			}) ();
/* 000334 */ 		});},
/* 000336 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000336 */ 			if (arguments.length) {
/* 000336 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 						switch (__attrib0__) {
/* 000336 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						}
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 			else {
/* 000336 */ 			}
/* 000337 */ 			return self.parsing_state;
/* 000337 */ 		});},
/* 000339 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000339 */ 			if (arguments.length) {
/* 000339 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 						switch (__attrib0__) {
/* 000339 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						}
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 			else {
/* 000339 */ 			}
/* 000340 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000340 */ 		});}
/* 000340 */ 	})
/* 000340 */ });
/* 000343 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000343 */ 	__module__: __name__,
/* 000344 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000344 */ 		var kwargs = dict ();
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 				delete kwargs.__kwargtrans__;
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000346 */ 		self.contents_parser_info = contents_parser_info;
/* 000353 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000353 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000353 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000353 */ 		}) ()}));
/* 000363 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000364 */ 		self.comma_sep_arg_list = [];
/* 000365 */ 		self.parsing_state_delta = null;
/* 000366 */ 		self.parse_more = true;
/* 000367 */ 		self.pos_start = null;
/* 000368 */ 		self.is_very_first_element = true;
/* 000369 */ 		self.last_element_pos_start = null;
/* 000370 */ 		self.last_delimiter_token = null;
/* 000371 */ 		self.last_element_pos_end = null;
/* 000371 */ 	});},
/* 000373 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		(function () {
/* 000374 */ 			var __accu0__ = logger;
/* 000374 */ 			return __call__ (__accu0__.debug, __accu0__, 'stop_token_condition: %r', token);
/* 000374 */ 		}) ();
/* 000375 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000377 */ 			return true;
/* 000377 */ 		}
/* 000378 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000379 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000380 */ 				return true;
/* 000380 */ 			}
/* 000381 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000382 */ 				return true;
/* 000382 */ 			}
/* 000383 */ 			return false;
/* 000383 */ 		}
/* 000384 */ 		return false;
/* 000384 */ 	});},
/* 000386 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000388 */ 		(function () {
/* 000388 */ 			var __accu0__ = token_reader;
/* 000388 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000388 */ 		}) ();
/* 000389 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000391 */ 			self.last_delimiter_token = null;
/* 000392 */ 			self.last_element_pos_end = token.pos;
/* 000393 */ 			self.parse_more = false;
/* 000393 */ 		}
/* 000394 */ 		else {
/* 000395 */ 			self.last_delimiter_token = token;
/* 000396 */ 			self.last_element_pos_end = token.pos_end;
/* 000397 */ 			self.parse_more = true;
/* 000397 */ 		}
/* 000397 */ 	});},
/* 000400 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000402 */ 		(function () {
/* 000402 */ 			var __accu0__ = logger;
/* 000402 */ 			return __call__ (__accu0__.debug, __accu0__, 'parse_content! token pos is %r', (function () {
/* 000402 */ 				var __accu1__ = token_reader;
/* 000402 */ 				return __call__ (__accu1__.cur_pos, __accu1__);
/* 000402 */ 			}) ());
/* 000402 */ 		}) ();
/* 000404 */ 		self.pos_start = (function () {
/* 000404 */ 			var __accu0__ = token_reader;
/* 000404 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000404 */ 		}) ();
/* 000406 */ 		self.parse_more = true;
/* 000407 */ 		while (__t__ (self.parse_more)) {
/* 000409 */ 			(function () {
/* 000409 */ 				var __accu0__ = self;
/* 000409 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000409 */ 			}) ();
/* 000411 */ 			if (__t__ (__t__ (self.parse_more) && self.parsing_state_delta !== null)) {
/* 000414 */ 				self.current_parsing_state = (function () {
/* 000414 */ 					var __accu0__ = self.parsing_state_delta;
/* 000414 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state, latex_walker);
/* 000414 */ 				}) ();
/* 000414 */ 			}
/* 000414 */ 		}
/* 000419 */ 		var final_node_list = (function () {
/* 000419 */ 			var __accu0__ = latex_walker;
/* 000419 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end, parsing_state: parsing_state}));
/* 000419 */ 		}) ();
/* 000426 */ 		return tuple ([final_node_list, self.parsing_state_delta]);
/* 000426 */ 	});},
/* 000429 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000431 */ 		(function () {
/* 000431 */ 			var __accu0__ = logger;
/* 000431 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg()');
/* 000431 */ 		}) ();
/* 000433 */ 		self.last_element_pos_start = (function () {
/* 000433 */ 			var __accu0__ = token_reader;
/* 000433 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000433 */ 		}) ();
/* 000435 */ 		self.last_element_pos_end = null;
/* 000436 */ 		self.last_delimiter_token = null;
/* 000438 */ 		var __left0__ = (function () {
/* 000438 */ 			var __accu0__ = latex_walker;
/* 000443 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000443 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000444 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000444 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000444 */ 		}) ();
/* 000444 */ 		var nodelist = __left0__ [0];
/* 000444 */ 		var parsing_state_delta = __left0__ [1];
/* 000451 */ 		(function () {
/* 000451 */ 			var __accu0__ = logger;
/* 000451 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(): nodelist = %r', nodelist);
/* 000451 */ 		}) ();
/* 000454 */ 		var pos_end = self.last_element_pos_end;
/* 000455 */ 		if (__t__ (pos_end === null)) {
/* 000456 */ 			(function () {
/* 000456 */ 				var __accu0__ = logger;
/* 000456 */ 				return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(): STOP CONDITION DID NOT FIRE');
/* 000456 */ 			}) ();
/* 000457 */ 			var pos_end = (function () {
/* 000457 */ 				var __accu0__ = token_reader;
/* 000457 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000457 */ 			}) ();
/* 000458 */ 			self.parse_more = false;
/* 000458 */ 		}
/* 000460 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000461 */ 			var this_close_delim = '';
/* 000461 */ 		}
/* 000462 */ 		else {
/* 000463 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000463 */ 		}
/* 000465 */ 		var this_group_node = (function () {
/* 000465 */ 			var __accu0__ = latex_walker;
/* 000465 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000465 */ 		}) ();
/* 000474 */ 		var add_group_node = true;
/* 000475 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000476 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000482 */ 				var add_group_node = false;
/* 000482 */ 			}
/* 000483 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000484 */ 				var add_group_node = true;
/* 000484 */ 			}
/* 000485 */ 			else {
/* 000486 */ 				var add_group_node = false;
/* 000486 */ 			}
/* 000486 */ 		}
/* 000488 */ 		if (__t__ (add_group_node)) {
/* 000489 */ 			(function () {
/* 000489 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000489 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000489 */ 			}) ();
/* 000489 */ 		}
/* 000491 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000493 */ 		self.is_very_first_element = false;
/* 000495 */ 		(function () {
/* 000495 */ 			var __accu0__ = logger;
/* 000495 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(), list is now %r', self.comma_sep_arg_list);
/* 000495 */ 		}) ();
/* 000495 */ 	});}
/* 000495 */ });
/* 000504 */ export var LatexTackOnInformationFieldMacrosParser =  __class__ ('LatexTackOnInformationFieldMacrosParser', [LatexParserBase], {
/* 000504 */ 	__module__: __name__,
/* 000516 */ 	get __init__ () {return __get__ (this, function (self, macronames, allow_multiple) {
/* 000516 */ 		if (typeof allow_multiple == 'undefined' || (allow_multiple != null && allow_multiple.hasOwnProperty ("__kwargtrans__"))) {;
/* 000516 */ 			var allow_multiple = false;
/* 000516 */ 		};
/* 000516 */ 		var kwargs = dict ();
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'macronames': var macronames = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'allow_multiple': var allow_multiple = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 				delete kwargs.__kwargtrans__;
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		__call__ (__call__ (__super__, null, LatexTackOnInformationFieldMacrosParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000519 */ 		self.macronames = __call__ (set, null, macronames);
/* 000520 */ 		if (__t__ (allow_multiple === false)) {
/* 000521 */ 			self.allow_multiple = __call__ (set, null);
/* 000521 */ 		}
/* 000522 */ 		else if (__t__ (allow_multiple === true)) {
/* 000523 */ 			self.allow_multiple = self.macronames;
/* 000523 */ 		}
/* 000524 */ 		else {
/* 000525 */ 			self.allow_multiple = __call__ (set, null, allow_multiple);
/* 000525 */ 		}
/* 000527 */ 		self.expression_parser = __call__ (LatexExpressionParser, null);
/* 000527 */ 	});},
/* 000529 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000529 */ 		if (arguments.length) {
/* 000529 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000529 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000529 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000529 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000529 */ 					switch (__attrib0__) {
/* 000529 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000529 */ 					}
/* 000529 */ 				}
/* 000529 */ 			}
/* 000529 */ 		}
/* 000529 */ 		else {
/* 000529 */ 		}
/* 000530 */ 		return true;
/* 000530 */ 	});},
/* 000532 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000537 */ 		return self.expression_parser;
/* 000537 */ 	});},
/* 000539 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000539 */ 		if (arguments.length) {
/* 000539 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000539 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000539 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000539 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000539 */ 					switch (__attrib0__) {
/* 000539 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 					}
/* 000539 */ 				}
/* 000539 */ 			}
/* 000539 */ 		}
/* 000539 */ 		else {
/* 000539 */ 		}
/* 000541 */ 		var arg_nodes = [];
/* 000543 */ 		var seen_macronames = __call__ (set, null);
/* 000545 */ 		while (__t__ (true)) {
/* 000546 */ 			var tok = (function () {
/* 000546 */ 				var __accu0__ = token_reader;
/* 000546 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, parsing_state);
/* 000546 */ 			}) ();
/* 000548 */ 			if (__t__ (__t__ (tok === null) || __t__ (__ne__ (tok.tok, 'macro')) || !__in__ (tok.arg, self.macronames))) {
/* 000549 */ 				(function () {
/* 000549 */ 					var __accu0__ = logger;
/* 000549 */ 					return __call__ (__accu0__.debug, __accu0__, 'Finished parsing tack-on macro arguments');
/* 000549 */ 				}) ();
/* 000549 */ 				break;
/* 000549 */ 			}
/* 000552 */ 			var macroname = tok.arg;
/* 000553 */ 			var tolerant_parsing_skip_add_this_node = false;
/* 000557 */ 			(function () {
/* 000557 */ 				var __accu0__ = token_reader;
/* 000557 */ 				return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000557 */ 			}) ();
/* 000559 */ 			if (__t__ (__t__ (__in__ (macroname, seen_macronames)) && !__t__ ((__in__ (macroname, self.allow_multiple))))) {
/* 000561 */ 				var message = (function () {
/* 000561 */ 					var __accu0__ = 'You cannot specify information field macro \\{} multiple times';
/* 000561 */ 					return __call__ (__accu0__.format, __accu0__, macroname);
/* 000561 */ 				}) ();
/* 000564 */ 				var exc = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: message, pos: tok.pos, error_type_info: dict ({'what': 'nodes_stdarg_illegal_multiple_information_field_macro', 'macroname': macroname})}));
/* 000572 */ 				var exc = (function () {
/* 000572 */ 					var __accu0__ = latex_walker;
/* 000572 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, exc);
/* 000572 */ 				}) ();
/* 000573 */ 				if (__t__ (exc !== null)) {
/* 000574 */ 					var __except0__ = exc;
/* 000574 */ 					__except0__.__cause__ = null;
/* 000574 */ 					throw __except0__;
/* 000574 */ 				}
/* 000575 */ 				(function () {
/* 000575 */ 					var __accu0__ = logger;
/* 000575 */ 					return __call__ (__accu0__.warning, __accu0__, '%s; ignoring the additional information field macros', message);
/* 000575 */ 				}) ();
/* 000576 */ 				var tolerant_parsing_skip_add_this_node = true;
/* 000576 */ 			}
/* 000578 */ 			var macro_arg_parser = (function () {
/* 000578 */ 				var __accu0__ = self;
/* 000578 */ 				return __call__ (__accu0__.get_macro_arg_parser, __accu0__, macroname);
/* 000578 */ 			}) ();
/* 000580 */ 			var __left0__ = (function () {
/* 000580 */ 				var __accu0__ = latex_walker;
/* 000585 */ 				return __call__ (__accu0__.parse_content, __accu0__, macro_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, open_context: tuple ([(function () {
/* 000585 */ 					var __accu1__ = 'Argument of information field macro \\{}';
/* 000585 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000585 */ 				}) (), tok])}));
/* 000585 */ 			}) ();
/* 000585 */ 			var arg_content_node = __left0__ [0];
/* 000585 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000590 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000591 */ 				(function () {
/* 000591 */ 					var __accu0__ = logger;
/* 000592 */ 					return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000592 */ 						var __accu1__ = 'Parsing state delta is ignored when parsing tack-on information field macro \\{}: {}';
/* 000592 */ 						return __call__ (__accu1__.format, __accu1__, macroname, arg_parsing_state_delta);
/* 000592 */ 					}) ());
/* 000592 */ 				}) ();
/* 000592 */ 			}
/* 000597 */ 			if (__t__ (tolerant_parsing_skip_add_this_node)) {
/* 000597 */ 				continue;
/* 000597 */ 			}
/* 000600 */ 			if (__t__ (__call__ (isinstance, null, arg_content_node, LatexNodeList))) {
/* 000601 */ 				var arg_content_nodelist = arg_content_node;
/* 000601 */ 			}
/* 000602 */ 			else {
/* 000603 */ 				var arg_content_nodelist = (function () {
/* 000603 */ 					var __accu0__ = latex_walker;
/* 000603 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [arg_content_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000603 */ 				}) ();
/* 000603 */ 			}
/* 000608 */ 			var arg_node = (function () {
/* 000608 */ 				var __accu0__ = latex_walker;
/* 000608 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([__add__ ('\\', macroname), '']), nodelist: arg_content_nodelist, pos: tok.pos, pos_end: arg_content_node.pos_end}));
/* 000608 */ 			}) ();
/* 000617 */ 			(function () {
/* 000617 */ 				var __accu0__ = arg_nodes;
/* 000617 */ 				return __call__ (__accu0__.append, __accu0__, arg_node);
/* 000617 */ 			}) ();
/* 000617 */ 		}
/* 000619 */ 		var arg_nodelist = (function () {
/* 000619 */ 			var __accu0__ = latex_walker;
/* 000619 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, arg_nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000619 */ 		}) ();
/* 000624 */ 		return tuple ([arg_nodelist, null]);
/* 000624 */ 	});}
/* 000624 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map