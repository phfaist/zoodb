/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:06:31
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
/* 000038 */ export {LatexMacroNode, LatexNodesVisitor, LatexCommentNode, _get_content_as_chars, LatexNode, LatexDelimitedVerbatimParser, LatexWalkerParseError, LatexDelimitedExpressionParserInfo, LatexParserBase, LatexEnvironmentNode, _unicode_from_str, LatexMathNode, __all__, _update_posposend_from_nodelist, LatexSpecialsNode, latex_node_types, LatexCharsNode, ParsedArguments, LatexGroupNode, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo, LatexOptionalCharsMarkerParser, LatexExpressionParser, LatexNodeList, LatexGeneralNodesParser};
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
/* 000078 */ 	if (__t__ (!__t__ ((kwargs)))) {
/* 000079 */ 		var k = arg_spec;
/* 000079 */ 	}
/* 000080 */ 	else {
/* 000081 */ 		var d = dict ({'arg_spec': arg_spec});
/* 000082 */ 		(function () {
/* 000082 */ 			var __accu0__ = d;
/* 000082 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000082 */ 		}) ();
/* 000083 */ 		var k = __call__ (tuple, null, __call__ (list, null, (function () {
/* 000083 */ 			var __accu0__ = d;
/* 000083 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000083 */ 		}) ()));
/* 000083 */ 	}
/* 000085 */ 	if (__t__ (!__in__ (k, _std_arg_parser_instances))) {
/* 000086 */ 		var instance = __call__ (LatexStandardArgumentParser, null, arg_spec, __kwargtrans__ (kwargs));
/* 000087 */ 		__setitem__ (_std_arg_parser_instances, k, instance);
/* 000088 */ 		return instance;
/* 000088 */ 	}
/* 000090 */ 	return __getitem__ (_std_arg_parser_instances, k);
/* 000090 */ };
/* 000098 */ export var LatexStandardArgumentParser =  __class__ ('LatexStandardArgumentParser', [LatexParserBase], {
/* 000098 */ 	__module__: __name__,
/* 000110 */ 	get __init__ () {return __get__ (this, function (self, arg_spec, include_skipped_comments, expression_single_token_requiring_arg_is_error, allow_pre_space) {
/* 000110 */ 		if (typeof arg_spec == 'undefined' || (arg_spec != null && arg_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var arg_spec = '{';
/* 000110 */ 		};
/* 000110 */ 		if (typeof include_skipped_comments == 'undefined' || (include_skipped_comments != null && include_skipped_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var include_skipped_comments = true;
/* 000110 */ 		};
/* 000110 */ 		if (typeof expression_single_token_requiring_arg_is_error == 'undefined' || (expression_single_token_requiring_arg_is_error != null && expression_single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var expression_single_token_requiring_arg_is_error = true;
/* 000110 */ 		};
/* 000110 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000110 */ 			var allow_pre_space = true;
/* 000110 */ 		};
/* 000110 */ 		var kwargs = dict ();
/* 000110 */ 		if (arguments.length) {
/* 000110 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000110 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000110 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000110 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000110 */ 					switch (__attrib0__) {
/* 000110 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'include_skipped_comments': var include_skipped_comments = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'expression_single_token_requiring_arg_is_error': var expression_single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000110 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000110 */ 					}
/* 000110 */ 				}
/* 000110 */ 				delete kwargs.__kwargtrans__;
/* 000110 */ 			}
/* 000110 */ 		}
/* 000110 */ 		else {
/* 000110 */ 		}
/* 000119 */ 		__call__ (__call__ (__super__, null, LatexStandardArgumentParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000121 */ 		self.arg_spec = arg_spec;
/* 000123 */ 		self.include_skipped_comments = include_skipped_comments;
/* 000124 */ 		self.expression_single_token_requiring_arg_is_error = expression_single_token_requiring_arg_is_error;
/* 000127 */ 		self.allow_pre_space = allow_pre_space;
/* 000131 */ 		self._arg_parser = null;
/* 000131 */ 	});},
/* 000145 */ 	get get_arg_parser_instance () {return __get__ (this, function (self, arg_spec) {
/* 000145 */ 		if (arguments.length) {
/* 000145 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000145 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000145 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000145 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000145 */ 					switch (__attrib0__) {
/* 000145 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000145 */ 					}
/* 000145 */ 				}
/* 000145 */ 			}
/* 000145 */ 		}
/* 000145 */ 		else {
/* 000145 */ 		}
/* 000147 */ 		if (__t__ (__in__ (arg_spec, tuple (['m', '{'])))) {
/* 000149 */ 			return __call__ (LatexExpressionParser, null, __kwargtrans__ ({include_skipped_comments: self.include_skipped_comments, single_token_requiring_arg_is_error: self.expression_single_token_requiring_arg_is_error}));
/* 000149 */ 		}
/* 000155 */ 		else if (__t__ (__in__ (arg_spec, tuple (['o', '['])))) {
/* 000157 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000157 */ 		}
/* 000163 */ 		else if (__t__ (__in__ (arg_spec, tuple (['s', '*'])))) {
/* 000165 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: '*', allow_pre_space: self.allow_pre_space}));
/* 000165 */ 		}
/* 000170 */ 		else if (__t__ ((function () {
/* 000170 */ 			var __accu0__ = arg_spec;
/* 000170 */ 			return __call__ (__accu0__.startswith, __accu0__, 't');
/* 000170 */ 		}) ())) {
/* 000172 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 2))) {
/* 000173 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional char argument should be of the form ‘t<char>’');
/* 000173 */ 				__except0__.__cause__ = null;
/* 000173 */ 				throw __except0__;
/* 000173 */ 			}
/* 000175 */ 			var the_char = __getitem__ (arg_spec, 1);
/* 000177 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars: the_char, allow_pre_space: self.allow_pre_space}));
/* 000177 */ 		}
/* 000182 */ 		else if (__t__ ((function () {
/* 000182 */ 			var __accu0__ = arg_spec;
/* 000182 */ 			return __call__ (__accu0__.startswith, __accu0__, 'r');
/* 000182 */ 		}) ())) {
/* 000184 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000185 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a required delimited argument should be of the form ‘r<char1><char2>’');
/* 000185 */ 				__except0__.__cause__ = null;
/* 000185 */ 				throw __except0__;
/* 000185 */ 			}
/* 000187 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000188 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000190 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: false, allow_pre_space: self.allow_pre_space}));
/* 000190 */ 		}
/* 000196 */ 		else if (__t__ ((function () {
/* 000196 */ 			var __accu0__ = arg_spec;
/* 000196 */ 			return __call__ (__accu0__.startswith, __accu0__, 'd');
/* 000196 */ 		}) ())) {
/* 000198 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000199 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional delimited argument should be of the form ‘d<char1><char2>’');
/* 000199 */ 				__except0__.__cause__ = null;
/* 000199 */ 				throw __except0__;
/* 000199 */ 			}
/* 000201 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000202 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000204 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000204 */ 		}
/* 000210 */ 		else if (__t__ ((function () {
/* 000210 */ 			var __accu0__ = arg_spec;
/* 000210 */ 			return __call__ (__accu0__.startswith, __accu0__, 'v');
/* 000210 */ 		}) ())) {
/* 000213 */ 			if (__t__ (__eq__ (__call__ (len, null, arg_spec), 1))) {
/* 000214 */ 				var delimiter_chars = null;
/* 000214 */ 			}
/* 000215 */ 			else if (__t__ (__eq__ (__call__ (len, null, arg_spec), 3))) {
/* 000216 */ 				var delimiter_chars = tuple ([__getitem__ (arg_spec, 1), __getitem__ (arg_spec, 2)]);
/* 000216 */ 			}
/* 000217 */ 			else {
/* 000218 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a verbatim argument should be either ‘v’ or ‘v<char1><char2>’');
/* 000218 */ 				__except0__.__cause__ = null;
/* 000218 */ 				throw __except0__;
/* 000218 */ 			}
/* 000220 */ 			return __call__ (LatexDelimitedVerbatimParser, null, __kwargtrans__ ({delimiter_chars: delimiter_chars}));
/* 000220 */ 		}
/* 000222 */ 		else {
/* 000226 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000226 */ 				var __accu0__ = 'Unknown argument specification: {!r}';
/* 000226 */ 				return __call__ (__accu0__.format, __accu0__, arg_spec);
/* 000226 */ 			}) ());
/* 000226 */ 			__except0__.__cause__ = null;
/* 000226 */ 			throw __except0__;
/* 000226 */ 		}
/* 000226 */ 	});},
/* 000229 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000229 */ 		var kwargs = dict ();
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 				delete kwargs.__kwargtrans__;
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000233 */ 		if (__t__ (self._arg_parser === null)) {
/* 000234 */ 			self._arg_parser = (function () {
/* 000234 */ 				var __accu0__ = self;
/* 000234 */ 				return __call__ (__accu0__.get_arg_parser_instance, __accu0__, self.arg_spec);
/* 000234 */ 			}) ();
/* 000234 */ 		}
/* 000244 */ 		var arg_parser = self._arg_parser;
/* 000246 */ 		var __left0__ = (function () {
/* 000246 */ 			var __accu0__ = latex_walker;
/* 000246 */ 			return __call__ (__accu0__.parse_content, __accu0__, arg_parser, __kwargtrans__ (__mergekwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}, kwargs)));
/* 000246 */ 		}) ();
/* 000246 */ 		var nodes = __left0__ [0];
/* 000246 */ 		var parsing_state_delta = __left0__ [1];
/* 000253 */ 		return tuple ([nodes, parsing_state_delta]);
/* 000253 */ 	});}
/* 000253 */ });
/* 000263 */ export var LatexCharsGroupParser =  __class__ ('LatexCharsGroupParser', [LatexDelimitedGroupParser], {
/* 000263 */ 	__module__: __name__,
/* 000273 */ 	get __init__ () {return __get__ (this, function (self, delimiters, enable_comments, enable_groups) {
/* 000273 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var delimiters = tuple (['{', '}']);
/* 000273 */ 		};
/* 000273 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var enable_comments = true;
/* 000273 */ 		};
/* 000273 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000273 */ 			var enable_groups = true;
/* 000273 */ 		};
/* 000273 */ 		var kwargs = dict ();
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 				delete kwargs.__kwargtrans__;
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000275 */ 		__call__ (__call__ (__super__, null, LatexCharsGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsGroupParser.CharsContentsParserInfo}, kwargs)));
/* 000281 */ 		self.enable_comments = enable_comments;
/* 000282 */ 		self.enable_groups = enable_groups;
/* 000285 */ 	});},
/* 000285 */ 	CharsContentsParserInfo: __class__ ('CharsContentsParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000285 */ 		__module__: __name__,
/* 000286 */ 		get initialize () {return __get__ (this, function (self) {
/* 000286 */ 			if (arguments.length) {
/* 000286 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 						switch (__attrib0__) {
/* 000286 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						}
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 			else {
/* 000286 */ 			}
/* 000287 */ 			self.contents_parsing_state = (function () {
/* 000287 */ 				var __accu0__ = self.group_parsing_state;
/* 000287 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000287 */ 			}) ();
/* 000296 */ 			self.current_parsing_state = self.contents_parsing_state;
/* 000298 */ 			self.parsed_delimiters = (function () {
/* 000298 */ 				var __accu0__ = self;
/* 000298 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000298 */ 			}) ();
/* 000300 */ 			(function () {
/* 000300 */ 				var __accu0__ = logger;
/* 000300 */ 				return __call__ (__accu0__.debug, __accu0__, 'Initialized CharsContentsParserInfo; %r', self.__dict__);
/* 000300 */ 			}) ();
/* 000300 */ 		});},
/* 000302 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000302 */ 			if (arguments.length) {
/* 000302 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 						switch (__attrib0__) {
/* 000302 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						}
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 			else {
/* 000302 */ 			}
/* 000303 */ 			return self.parsing_state;
/* 000303 */ 		});},
/* 000305 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000305 */ 			if (arguments.length) {
/* 000305 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 						switch (__attrib0__) {
/* 000305 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						}
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 			else {
/* 000305 */ 			}
/* 000306 */ 			(function () {
/* 000306 */ 				var __accu0__ = logger;
/* 000306 */ 				return __call__ (__accu0__.debug, __accu0__, 'stop_token_condition: %r', token);
/* 000306 */ 			}) ();
/* 000307 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000308 */ 				return true;
/* 000308 */ 			}
/* 000310 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000311 */ 				return true;
/* 000311 */ 			}
/* 000312 */ 			return null;
/* 000312 */ 		});}
/* 000312 */ 	})
/* 000312 */ });
/* 000320 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000320 */ 	__module__: __name__,
/* 000323 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000323 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var comma_char = ',';
/* 000323 */ 		};
/* 000323 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var delimiters = tuple (['{', '}']);
/* 000323 */ 		};
/* 000323 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var enable_comments = true;
/* 000323 */ 		};
/* 000323 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var enable_groups = true;
/* 000323 */ 		};
/* 000323 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var keep_empty_parts = false;
/* 000323 */ 		};
/* 000323 */ 		var kwargs = dict ();
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 				delete kwargs.__kwargtrans__;
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000326 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000333 */ 		self.comma_char = comma_char;
/* 000334 */ 		self.enable_comments = enable_comments;
/* 000335 */ 		self.enable_groups = enable_groups;
/* 000336 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000338 */ 	});},
/* 000338 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000338 */ 		__module__: __name__,
/* 000339 */ 		get initialize () {return __get__ (this, function (self) {
/* 000339 */ 			if (arguments.length) {
/* 000339 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 						switch (__attrib0__) {
/* 000339 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						}
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 			else {
/* 000339 */ 			}
/* 000340 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000342 */ 			self.contents_parsing_state = (function () {
/* 000342 */ 				var __accu0__ = self.group_parsing_state;
/* 000342 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000342 */ 			}) ();
/* 000350 */ 			self.parsed_delimiters = (function () {
/* 000350 */ 				var __accu0__ = self;
/* 000350 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000350 */ 			}) ();
/* 000352 */ 			(function () {
/* 000352 */ 				var __accu0__ = logger;
/* 000352 */ 				return __call__ (__accu0__.debug, __accu0__, 'Initialized CommaSepContentsParserInfo; %r', self.__dict__);
/* 000352 */ 			}) ();
/* 000352 */ 		});},
/* 000354 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000354 */ 			if (arguments.length) {
/* 000354 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 						switch (__attrib0__) {
/* 000354 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						}
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 			else {
/* 000354 */ 			}
/* 000355 */ 			return self.parsing_state;
/* 000355 */ 		});},
/* 000357 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000357 */ 			if (arguments.length) {
/* 000357 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 						switch (__attrib0__) {
/* 000357 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						}
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 			else {
/* 000357 */ 			}
/* 000358 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000358 */ 		});}
/* 000358 */ 	})
/* 000358 */ });
/* 000361 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000361 */ 	__module__: __name__,
/* 000362 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000362 */ 		var kwargs = dict ();
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 				delete kwargs.__kwargtrans__;
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000363 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000364 */ 		self.contents_parser_info = contents_parser_info;
/* 000371 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000371 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000371 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000371 */ 		}) ()}));
/* 000381 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000382 */ 		self.comma_sep_arg_list = [];
/* 000383 */ 		self.parsing_state_delta = null;
/* 000384 */ 		self.parse_more = true;
/* 000385 */ 		self.pos_start = null;
/* 000386 */ 		self.is_very_first_element = true;
/* 000387 */ 		self.last_element_pos_start = null;
/* 000388 */ 		self.last_delimiter_token = null;
/* 000389 */ 		self.last_element_pos_end = null;
/* 000389 */ 	});},
/* 000391 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000391 */ 		if (arguments.length) {
/* 000391 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 					switch (__attrib0__) {
/* 000391 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 		}
/* 000391 */ 		else {
/* 000391 */ 		}
/* 000392 */ 		(function () {
/* 000392 */ 			var __accu0__ = logger;
/* 000392 */ 			return __call__ (__accu0__.debug, __accu0__, 'stop_token_condition: %r', token);
/* 000392 */ 		}) ();
/* 000393 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000395 */ 			return true;
/* 000395 */ 		}
/* 000396 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000397 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000398 */ 				return true;
/* 000398 */ 			}
/* 000399 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000400 */ 				return true;
/* 000400 */ 			}
/* 000401 */ 			return false;
/* 000401 */ 		}
/* 000402 */ 		return false;
/* 000402 */ 	});},
/* 000404 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000406 */ 		(function () {
/* 000406 */ 			var __accu0__ = token_reader;
/* 000406 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000406 */ 		}) ();
/* 000407 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000409 */ 			self.last_delimiter_token = null;
/* 000410 */ 			self.last_element_pos_end = token.pos;
/* 000411 */ 			self.parse_more = false;
/* 000411 */ 		}
/* 000412 */ 		else {
/* 000413 */ 			self.last_delimiter_token = token;
/* 000414 */ 			self.last_element_pos_end = token.pos_end;
/* 000415 */ 			self.parse_more = true;
/* 000415 */ 		}
/* 000415 */ 	});},
/* 000418 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000418 */ 		if (arguments.length) {
/* 000418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000418 */ 					switch (__attrib0__) {
/* 000418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 					}
/* 000418 */ 				}
/* 000418 */ 			}
/* 000418 */ 		}
/* 000418 */ 		else {
/* 000418 */ 		}
/* 000420 */ 		(function () {
/* 000420 */ 			var __accu0__ = logger;
/* 000420 */ 			return __call__ (__accu0__.debug, __accu0__, 'parse_content! token pos is %r', (function () {
/* 000420 */ 				var __accu1__ = token_reader;
/* 000420 */ 				return __call__ (__accu1__.cur_pos, __accu1__);
/* 000420 */ 			}) ());
/* 000420 */ 		}) ();
/* 000422 */ 		self.pos_start = (function () {
/* 000422 */ 			var __accu0__ = token_reader;
/* 000422 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000422 */ 		}) ();
/* 000424 */ 		self.parse_more = true;
/* 000425 */ 		while (__t__ (self.parse_more)) {
/* 000427 */ 			(function () {
/* 000427 */ 				var __accu0__ = self;
/* 000427 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000427 */ 			}) ();
/* 000429 */ 			if (__t__ (__t__ (self.parse_more) && self.parsing_state_delta !== null)) {
/* 000432 */ 				self.current_parsing_state = (function () {
/* 000432 */ 					var __accu0__ = self.parsing_state_delta;
/* 000432 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state, latex_walker);
/* 000432 */ 				}) ();
/* 000432 */ 			}
/* 000432 */ 		}
/* 000437 */ 		var final_node_list = (function () {
/* 000437 */ 			var __accu0__ = latex_walker;
/* 000437 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end, parsing_state: parsing_state}));
/* 000437 */ 		}) ();
/* 000444 */ 		return tuple ([final_node_list, self.parsing_state_delta]);
/* 000444 */ 	});},
/* 000447 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000447 */ 		if (arguments.length) {
/* 000447 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000447 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000447 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000447 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000447 */ 					switch (__attrib0__) {
/* 000447 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000447 */ 					}
/* 000447 */ 				}
/* 000447 */ 			}
/* 000447 */ 		}
/* 000447 */ 		else {
/* 000447 */ 		}
/* 000449 */ 		(function () {
/* 000449 */ 			var __accu0__ = logger;
/* 000449 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg()');
/* 000449 */ 		}) ();
/* 000451 */ 		self.last_element_pos_start = (function () {
/* 000451 */ 			var __accu0__ = token_reader;
/* 000451 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000451 */ 		}) ();
/* 000453 */ 		self.last_element_pos_end = null;
/* 000454 */ 		self.last_delimiter_token = null;
/* 000456 */ 		var __left0__ = (function () {
/* 000456 */ 			var __accu0__ = latex_walker;
/* 000461 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000461 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000462 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000462 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000462 */ 		}) ();
/* 000462 */ 		var nodelist = __left0__ [0];
/* 000462 */ 		var parsing_state_delta = __left0__ [1];
/* 000469 */ 		(function () {
/* 000469 */ 			var __accu0__ = logger;
/* 000469 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(): nodelist = %r', nodelist);
/* 000469 */ 		}) ();
/* 000472 */ 		var pos_end = self.last_element_pos_end;
/* 000473 */ 		if (__t__ (pos_end === null)) {
/* 000474 */ 			(function () {
/* 000474 */ 				var __accu0__ = logger;
/* 000474 */ 				return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(): STOP CONDITION DID NOT FIRE');
/* 000474 */ 			}) ();
/* 000475 */ 			var pos_end = (function () {
/* 000475 */ 				var __accu0__ = token_reader;
/* 000475 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000475 */ 			}) ();
/* 000476 */ 			self.parse_more = false;
/* 000476 */ 		}
/* 000478 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000479 */ 			var this_close_delim = '';
/* 000479 */ 		}
/* 000480 */ 		else {
/* 000481 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000481 */ 		}
/* 000483 */ 		var this_group_node = (function () {
/* 000483 */ 			var __accu0__ = latex_walker;
/* 000483 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000483 */ 		}) ();
/* 000492 */ 		var add_group_node = true;
/* 000493 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000494 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000500 */ 				var add_group_node = false;
/* 000500 */ 			}
/* 000501 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000502 */ 				var add_group_node = true;
/* 000502 */ 			}
/* 000503 */ 			else {
/* 000504 */ 				var add_group_node = false;
/* 000504 */ 			}
/* 000504 */ 		}
/* 000506 */ 		if (__t__ (add_group_node)) {
/* 000507 */ 			(function () {
/* 000507 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000507 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000507 */ 			}) ();
/* 000507 */ 		}
/* 000509 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000511 */ 		self.is_very_first_element = false;
/* 000513 */ 		(function () {
/* 000513 */ 			var __accu0__ = logger;
/* 000513 */ 			return __call__ (__accu0__.debug, __accu0__, '_parse_one_commasep_arg(), list is now %r', self.comma_sep_arg_list);
/* 000513 */ 		}) ();
/* 000513 */ 	});}
/* 000513 */ });
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
/* 000567 */ 				(function () {
/* 000567 */ 					var __accu0__ = logger;
/* 000567 */ 					return __call__ (__accu0__.debug, __accu0__, 'Finished parsing tack-on macro arguments');
/* 000567 */ 				}) ();
/* 000567 */ 				break;
/* 000567 */ 			}
/* 000570 */ 			var macroname = tok.arg;
/* 000571 */ 			var tolerant_parsing_skip_add_this_node = false;
/* 000575 */ 			(function () {
/* 000575 */ 				var __accu0__ = token_reader;
/* 000575 */ 				return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000575 */ 			}) ();
/* 000577 */ 			if (__t__ (__t__ (__in__ (macroname, seen_macronames)) && !__t__ ((__in__ (macroname, self.allow_multiple))))) {
/* 000579 */ 				var message = (function () {
/* 000579 */ 					var __accu0__ = 'You cannot specify information field macro \\{} multiple times';
/* 000579 */ 					return __call__ (__accu0__.format, __accu0__, macroname);
/* 000579 */ 				}) ();
/* 000582 */ 				var exc = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: message, pos: tok.pos, error_type_info: dict ({'what': 'nodes_stdarg_illegal_multiple_information_field_macro', 'macroname': macroname})}));
/* 000590 */ 				var exc = (function () {
/* 000590 */ 					var __accu0__ = latex_walker;
/* 000590 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, exc);
/* 000590 */ 				}) ();
/* 000591 */ 				if (__t__ (exc !== null)) {
/* 000592 */ 					var __except0__ = exc;
/* 000592 */ 					__except0__.__cause__ = null;
/* 000592 */ 					throw __except0__;
/* 000592 */ 				}
/* 000593 */ 				(function () {
/* 000593 */ 					var __accu0__ = logger;
/* 000593 */ 					return __call__ (__accu0__.warning, __accu0__, '%s; ignoring the additional information field macros', message);
/* 000593 */ 				}) ();
/* 000594 */ 				var tolerant_parsing_skip_add_this_node = true;
/* 000594 */ 			}
/* 000596 */ 			var macro_arg_parser = (function () {
/* 000596 */ 				var __accu0__ = self;
/* 000596 */ 				return __call__ (__accu0__.get_macro_arg_parser, __accu0__, macroname);
/* 000596 */ 			}) ();
/* 000598 */ 			var __left0__ = (function () {
/* 000598 */ 				var __accu0__ = latex_walker;
/* 000603 */ 				return __call__ (__accu0__.parse_content, __accu0__, macro_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, open_context: tuple ([(function () {
/* 000603 */ 					var __accu1__ = 'Argument of information field macro \\{}';
/* 000603 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000603 */ 				}) (), tok])}));
/* 000603 */ 			}) ();
/* 000603 */ 			var arg_content_node = __left0__ [0];
/* 000603 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000608 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000609 */ 				(function () {
/* 000609 */ 					var __accu0__ = logger;
/* 000610 */ 					return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000610 */ 						var __accu1__ = 'Parsing state delta is ignored when parsing tack-on information field macro \\{}: {}';
/* 000610 */ 						return __call__ (__accu1__.format, __accu1__, macroname, arg_parsing_state_delta);
/* 000610 */ 					}) ());
/* 000610 */ 				}) ();
/* 000610 */ 			}
/* 000615 */ 			if (__t__ (tolerant_parsing_skip_add_this_node)) {
/* 000615 */ 				continue;
/* 000615 */ 			}
/* 000618 */ 			var arg_node = (function () {
/* 000618 */ 				var __accu0__ = latex_walker;
/* 000622 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([__add__ ('\\', macroname), '']), nodelist: (function () {
/* 000622 */ 					var __accu1__ = latex_walker;
/* 000622 */ 					return __call__ (__accu1__.make_nodelist, __accu1__, [arg_content_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000622 */ 				}) (), pos: tok.pos, pos_end: arg_content_node.pos_end}));
/* 000622 */ 			}) ();
/* 000630 */ 			(function () {
/* 000630 */ 				var __accu0__ = arg_nodes;
/* 000630 */ 				return __call__ (__accu0__.append, __accu0__, arg_node);
/* 000630 */ 			}) ();
/* 000630 */ 		}
/* 000632 */ 		var arg_nodelist = (function () {
/* 000632 */ 			var __accu0__ = latex_walker;
/* 000632 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, arg_nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000632 */ 		}) ();
/* 000637 */ 		return tuple ([arg_nodelist, null]);
/* 000637 */ 	});}
/* 000637 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map