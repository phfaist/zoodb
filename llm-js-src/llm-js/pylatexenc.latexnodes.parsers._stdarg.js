/* 000001 */ // Transcrypt'ed from Python, 2022-08-23 17:26:47
/* 000038 */ var logging = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000053 */ import {LatexDelimitedVerbatimParser} from './pylatexenc.latexnodes.parsers._verbatim.js';
/* 000052 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000051 */ import {LatexOptionalCharsMarkerParser} from './pylatexenc.latexnodes.parsers._optionals.js';
/* 000046 */ import {LatexDelimitedExpressionParserInfo, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000042 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, __all__, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000038 */ export {LatexExpressionParser, LatexDelimitedGroupParserInfo, _get_content_as_chars, LatexDelimitedExpressionParserInfo, LatexNodeList, _update_posposend_from_nodelist, LatexNodesVisitor, LatexParserBase, LatexNode, LatexSpecialsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, __all__, _unicode_from_str, LatexOptionalCharsMarkerParser, LatexMathNode, LatexWalkerParseError, LatexDelimitedVerbatimParser, ParsedArguments, LatexCharsNode, LatexMacroNode, LatexGeneralNodesParser, LatexDelimitedGroupParser};
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
/* 000300 */ 			// pass;
/* 000300 */ 		});},
/* 000304 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000304 */ 			if (arguments.length) {
/* 000304 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 						switch (__attrib0__) {
/* 000304 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						}
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 			else {
/* 000304 */ 			}
/* 000305 */ 			return self.parsing_state;
/* 000305 */ 		});},
/* 000307 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000307 */ 			if (arguments.length) {
/* 000307 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 						switch (__attrib0__) {
/* 000307 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						}
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 			}
/* 000307 */ 			else {
/* 000307 */ 			}
/* 000308 */ 			// pass;
/* 000311 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000312 */ 				return true;
/* 000312 */ 			}
/* 000314 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000315 */ 				return true;
/* 000315 */ 			}
/* 000316 */ 			return null;
/* 000316 */ 		});}
/* 000316 */ 	})
/* 000316 */ });
/* 000324 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000324 */ 	__module__: __name__,
/* 000327 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000327 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var comma_char = ',';
/* 000327 */ 		};
/* 000327 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var delimiters = tuple (['{', '}']);
/* 000327 */ 		};
/* 000327 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var enable_comments = true;
/* 000327 */ 		};
/* 000327 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var enable_groups = true;
/* 000327 */ 		};
/* 000327 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000327 */ 			var keep_empty_parts = false;
/* 000327 */ 		};
/* 000327 */ 		var kwargs = dict ();
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 				delete kwargs.__kwargtrans__;
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000330 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000337 */ 		self.comma_char = comma_char;
/* 000338 */ 		self.enable_comments = enable_comments;
/* 000339 */ 		self.enable_groups = enable_groups;
/* 000340 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000342 */ 	});},
/* 000342 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000342 */ 		__module__: __name__,
/* 000343 */ 		get initialize () {return __get__ (this, function (self) {
/* 000343 */ 			if (arguments.length) {
/* 000343 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 						switch (__attrib0__) {
/* 000343 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						}
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 			else {
/* 000343 */ 			}
/* 000344 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000346 */ 			self.contents_parsing_state = (function () {
/* 000346 */ 				var __accu0__ = self.group_parsing_state;
/* 000346 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000346 */ 			}) ();
/* 000354 */ 			self.parsed_delimiters = (function () {
/* 000354 */ 				var __accu0__ = self;
/* 000354 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000354 */ 			}) ();
/* 000356 */ 			// pass;
/* 000356 */ 		});},
/* 000360 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class) {
/* 000360 */ 			if (arguments.length) {
/* 000360 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 						switch (__attrib0__) {
/* 000360 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						}
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 			else {
/* 000360 */ 			}
/* 000361 */ 			return self.parsing_state;
/* 000361 */ 		});},
/* 000363 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000363 */ 			if (arguments.length) {
/* 000363 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 						switch (__attrib0__) {
/* 000363 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						}
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 			else {
/* 000363 */ 			}
/* 000364 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000364 */ 		});}
/* 000364 */ 	})
/* 000364 */ });
/* 000367 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000367 */ 	__module__: __name__,
/* 000368 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000368 */ 		var kwargs = dict ();
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 				delete kwargs.__kwargtrans__;
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000369 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000370 */ 		self.contents_parser_info = contents_parser_info;
/* 000377 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000377 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000377 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000377 */ 		}) ()}));
/* 000387 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000388 */ 		self.comma_sep_arg_list = [];
/* 000389 */ 		self.parsing_state_delta = null;
/* 000390 */ 		self.parse_more = true;
/* 000391 */ 		self.pos_start = null;
/* 000392 */ 		self.is_very_first_element = true;
/* 000393 */ 		self.last_element_pos_start = null;
/* 000394 */ 		self.last_delimiter_token = null;
/* 000395 */ 		self.last_element_pos_end = null;
/* 000395 */ 	});},
/* 000397 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000398 */ 		// pass;
/* 000401 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000403 */ 			return true;
/* 000403 */ 		}
/* 000404 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000405 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000406 */ 				return true;
/* 000406 */ 			}
/* 000407 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000408 */ 				return true;
/* 000408 */ 			}
/* 000409 */ 			return false;
/* 000409 */ 		}
/* 000410 */ 		return false;
/* 000410 */ 	});},
/* 000412 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000412 */ 		if (arguments.length) {
/* 000412 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000412 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000412 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000412 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000412 */ 					switch (__attrib0__) {
/* 000412 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000412 */ 					}
/* 000412 */ 				}
/* 000412 */ 			}
/* 000412 */ 		}
/* 000412 */ 		else {
/* 000412 */ 		}
/* 000414 */ 		(function () {
/* 000414 */ 			var __accu0__ = token_reader;
/* 000414 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000414 */ 		}) ();
/* 000415 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000417 */ 			self.last_delimiter_token = null;
/* 000418 */ 			self.last_element_pos_end = token.pos;
/* 000419 */ 			self.parse_more = false;
/* 000419 */ 		}
/* 000420 */ 		else {
/* 000421 */ 			self.last_delimiter_token = token;
/* 000422 */ 			self.last_element_pos_end = token.pos_end;
/* 000423 */ 			self.parse_more = true;
/* 000423 */ 		}
/* 000423 */ 	});},
/* 000426 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000426 */ 		if (arguments.length) {
/* 000426 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000426 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000426 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000426 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000426 */ 					switch (__attrib0__) {
/* 000426 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000426 */ 					}
/* 000426 */ 				}
/* 000426 */ 			}
/* 000426 */ 		}
/* 000426 */ 		else {
/* 000426 */ 		}
/* 000428 */ 		// pass;
/* 000432 */ 		self.pos_start = (function () {
/* 000432 */ 			var __accu0__ = token_reader;
/* 000432 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000432 */ 		}) ();
/* 000434 */ 		self.parse_more = true;
/* 000435 */ 		while (__t__ (self.parse_more)) {
/* 000437 */ 			(function () {
/* 000437 */ 				var __accu0__ = self;
/* 000437 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000437 */ 			}) ();
/* 000439 */ 			if (__t__ (__t__ (self.parse_more) && self.parsing_state_delta !== null)) {
/* 000442 */ 				self.current_parsing_state = (function () {
/* 000442 */ 					var __accu0__ = self.parsing_state_delta;
/* 000442 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state, latex_walker);
/* 000442 */ 				}) ();
/* 000442 */ 			}
/* 000442 */ 		}
/* 000447 */ 		var final_node_list = (function () {
/* 000447 */ 			var __accu0__ = latex_walker;
/* 000447 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end, parsing_state: parsing_state}));
/* 000447 */ 		}) ();
/* 000454 */ 		return tuple ([final_node_list, self.parsing_state_delta]);
/* 000454 */ 	});},
/* 000457 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000459 */ 		// pass;
/* 000463 */ 		self.last_element_pos_start = (function () {
/* 000463 */ 			var __accu0__ = token_reader;
/* 000463 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000463 */ 		}) ();
/* 000465 */ 		self.last_element_pos_end = null;
/* 000466 */ 		self.last_delimiter_token = null;
/* 000468 */ 		var __left0__ = (function () {
/* 000468 */ 			var __accu0__ = latex_walker;
/* 000473 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000473 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000474 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000474 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000474 */ 		}) ();
/* 000474 */ 		var nodelist = __left0__ [0];
/* 000474 */ 		var parsing_state_delta = __left0__ [1];
/* 000481 */ 		// pass;
/* 000486 */ 		var pos_end = self.last_element_pos_end;
/* 000487 */ 		if (__t__ (pos_end === null)) {
/* 000488 */ 			// pass;
/* 000491 */ 			var pos_end = (function () {
/* 000491 */ 				var __accu0__ = token_reader;
/* 000491 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000491 */ 			}) ();
/* 000492 */ 			self.parse_more = false;
/* 000492 */ 		}
/* 000494 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000495 */ 			var this_close_delim = '';
/* 000495 */ 		}
/* 000496 */ 		else {
/* 000497 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000497 */ 		}
/* 000499 */ 		var this_group_node = (function () {
/* 000499 */ 			var __accu0__ = latex_walker;
/* 000499 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000499 */ 		}) ();
/* 000508 */ 		var add_group_node = true;
/* 000509 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000510 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000516 */ 				var add_group_node = false;
/* 000516 */ 			}
/* 000517 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000518 */ 				var add_group_node = true;
/* 000518 */ 			}
/* 000519 */ 			else {
/* 000520 */ 				var add_group_node = false;
/* 000520 */ 			}
/* 000520 */ 		}
/* 000522 */ 		if (__t__ (add_group_node)) {
/* 000523 */ 			(function () {
/* 000523 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000523 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000523 */ 			}) ();
/* 000523 */ 		}
/* 000525 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000527 */ 		self.is_very_first_element = false;
/* 000529 */ 		// pass;
/* 000529 */ 	});}
/* 000529 */ });
/* 000540 */ export var LatexTackOnInformationFieldMacrosParser =  __class__ ('LatexTackOnInformationFieldMacrosParser', [LatexParserBase], {
/* 000540 */ 	__module__: __name__,
/* 000552 */ 	get __init__ () {return __get__ (this, function (self, macronames, allow_multiple) {
/* 000552 */ 		if (typeof allow_multiple == 'undefined' || (allow_multiple != null && allow_multiple.hasOwnProperty ("__kwargtrans__"))) {;
/* 000552 */ 			var allow_multiple = false;
/* 000552 */ 		};
/* 000552 */ 		var kwargs = dict ();
/* 000552 */ 		if (arguments.length) {
/* 000552 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000552 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000552 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000552 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000552 */ 					switch (__attrib0__) {
/* 000552 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'macronames': var macronames = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						case 'allow_multiple': var allow_multiple = __allkwargs0__ [__attrib0__]; break;
/* 000552 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000552 */ 					}
/* 000552 */ 				}
/* 000552 */ 				delete kwargs.__kwargtrans__;
/* 000552 */ 			}
/* 000552 */ 		}
/* 000552 */ 		else {
/* 000552 */ 		}
/* 000553 */ 		__call__ (__call__ (__super__, null, LatexTackOnInformationFieldMacrosParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000555 */ 		self.macronames = __call__ (set, null, macronames);
/* 000556 */ 		if (__t__ (allow_multiple === false)) {
/* 000557 */ 			self.allow_multiple = __call__ (set, null);
/* 000557 */ 		}
/* 000558 */ 		else if (__t__ (allow_multiple === true)) {
/* 000559 */ 			self.allow_multiple = self.macronames;
/* 000559 */ 		}
/* 000560 */ 		else {
/* 000561 */ 			self.allow_multiple = __call__ (set, null, allow_multiple);
/* 000561 */ 		}
/* 000563 */ 		self.expression_parser = __call__ (LatexExpressionParser, null);
/* 000563 */ 	});},
/* 000565 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000565 */ 		if (arguments.length) {
/* 000565 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000565 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000565 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000565 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000565 */ 					switch (__attrib0__) {
/* 000565 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000565 */ 					}
/* 000565 */ 				}
/* 000565 */ 			}
/* 000565 */ 		}
/* 000565 */ 		else {
/* 000565 */ 		}
/* 000566 */ 		return true;
/* 000566 */ 	});},
/* 000568 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000568 */ 		if (arguments.length) {
/* 000568 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000568 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000568 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000568 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000568 */ 					switch (__attrib0__) {
/* 000568 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000568 */ 					}
/* 000568 */ 				}
/* 000568 */ 			}
/* 000568 */ 		}
/* 000568 */ 		else {
/* 000568 */ 		}
/* 000573 */ 		return self.expression_parser;
/* 000573 */ 	});},
/* 000575 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000575 */ 		if (arguments.length) {
/* 000575 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000575 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000575 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000575 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000575 */ 					switch (__attrib0__) {
/* 000575 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000575 */ 					}
/* 000575 */ 				}
/* 000575 */ 			}
/* 000575 */ 		}
/* 000575 */ 		else {
/* 000575 */ 		}
/* 000577 */ 		var arg_nodes = [];
/* 000579 */ 		var seen_macronames = __call__ (set, null);
/* 000581 */ 		while (__t__ (true)) {
/* 000582 */ 			var tok = (function () {
/* 000582 */ 				var __accu0__ = token_reader;
/* 000582 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, parsing_state);
/* 000582 */ 			}) ();
/* 000584 */ 			if (__t__ (__t__ (tok === null) || __t__ (__ne__ (tok.tok, 'macro')) || !__in__ (tok.arg, self.macronames))) {
/* 000585 */ 				// pass;
/* 000585 */ 				break;
/* 000585 */ 			}
/* 000590 */ 			var macroname = tok.arg;
/* 000591 */ 			var tolerant_parsing_skip_add_this_node = false;
/* 000595 */ 			(function () {
/* 000595 */ 				var __accu0__ = token_reader;
/* 000595 */ 				return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000595 */ 			}) ();
/* 000597 */ 			if (__t__ (__t__ (__in__ (macroname, seen_macronames)) && !__t__ ((__in__ (macroname, self.allow_multiple))))) {
/* 000599 */ 				var message = (function () {
/* 000599 */ 					var __accu0__ = 'You cannot specify information field macro \\{} multiple times';
/* 000599 */ 					return __call__ (__accu0__.format, __accu0__, macroname);
/* 000599 */ 				}) ();
/* 000602 */ 				var exc = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: message, pos: tok.pos, error_type_info: dict ({'what': 'nodes_stdarg_illegal_multiple_information_field_macro', 'macroname': macroname})}));
/* 000610 */ 				var exc = (function () {
/* 000610 */ 					var __accu0__ = latex_walker;
/* 000610 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, exc);
/* 000610 */ 				}) ();
/* 000611 */ 				if (__t__ (exc !== null)) {
/* 000612 */ 					var __except0__ = exc;
/* 000612 */ 					__except0__.__cause__ = null;
/* 000612 */ 					throw __except0__;
/* 000612 */ 				}
/* 000613 */ 				(function () {
/* 000613 */ 					var __accu0__ = logger;
/* 000613 */ 					return __call__ (__accu0__.warning, __accu0__, '%s; ignoring the additional information field macros', message);
/* 000613 */ 				}) ();
/* 000614 */ 				var tolerant_parsing_skip_add_this_node = true;
/* 000614 */ 			}
/* 000616 */ 			var macro_arg_parser = (function () {
/* 000616 */ 				var __accu0__ = self;
/* 000616 */ 				return __call__ (__accu0__.get_macro_arg_parser, __accu0__, macroname);
/* 000616 */ 			}) ();
/* 000618 */ 			var __left0__ = (function () {
/* 000618 */ 				var __accu0__ = latex_walker;
/* 000623 */ 				return __call__ (__accu0__.parse_content, __accu0__, macro_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, open_context: tuple ([(function () {
/* 000623 */ 					var __accu1__ = 'Argument of information field macro \\{}';
/* 000623 */ 					return __call__ (__accu1__.format, __accu1__, macroname);
/* 000623 */ 				}) (), tok])}));
/* 000623 */ 			}) ();
/* 000623 */ 			var arg_content_node = __left0__ [0];
/* 000623 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000628 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000629 */ 				(function () {
/* 000629 */ 					var __accu0__ = logger;
/* 000630 */ 					return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000630 */ 						var __accu1__ = 'Parsing state delta is ignored when parsing tack-on information field macro \\{}: {}';
/* 000630 */ 						return __call__ (__accu1__.format, __accu1__, macroname, arg_parsing_state_delta);
/* 000630 */ 					}) ());
/* 000630 */ 				}) ();
/* 000630 */ 			}
/* 000635 */ 			if (__t__ (tolerant_parsing_skip_add_this_node)) {
/* 000635 */ 				continue;
/* 000635 */ 			}
/* 000638 */ 			var arg_node = (function () {
/* 000638 */ 				var __accu0__ = latex_walker;
/* 000642 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([__add__ ('\\', macroname), '']), nodelist: (function () {
/* 000642 */ 					var __accu1__ = latex_walker;
/* 000642 */ 					return __call__ (__accu1__.make_nodelist, __accu1__, [arg_content_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000642 */ 				}) (), pos: tok.pos, pos_end: arg_content_node.pos_end}));
/* 000642 */ 			}) ();
/* 000650 */ 			(function () {
/* 000650 */ 				var __accu0__ = arg_nodes;
/* 000650 */ 				return __call__ (__accu0__.append, __accu0__, arg_node);
/* 000650 */ 			}) ();
/* 000650 */ 		}
/* 000652 */ 		var arg_nodelist = (function () {
/* 000652 */ 			var __accu0__ = latex_walker;
/* 000652 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, arg_nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000652 */ 		}) ();
/* 000657 */ 		return tuple ([arg_nodelist, null]);
/* 000657 */ 	});}
/* 000657 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map