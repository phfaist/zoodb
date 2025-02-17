/* 000001 */ // Transcrypt'ed from Python, 2025-02-17 13:55:26
/* 000038 */ var logging = {};
/* 000038 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000056 */ import {LatexDelimitedVerbatimParser} from './pylatexenc.latexnodes.parsers._verbatim.js';
/* 000055 */ import {LatexExpressionParser} from './pylatexenc.latexnodes.parsers._expression.js';
/* 000052 */ import {LatexOptionalCharsMarkerParser, LatexOptionalEmbellishmentArgsParser} from './pylatexenc.latexnodes.parsers._optionals.js';
/* 000046 */ import {LatexDelimitedExpressionParserInfo, LatexDelimitedGroupParser, LatexDelimitedGroupParserInfo, LatexDelimitedMultiDelimGroupParser} from './pylatexenc.latexnodes.parsers._delimited.js';
/* 000045 */ import {LatexGeneralNodesParser} from './pylatexenc.latexnodes.parsers._generalnodes.js';
/* 000044 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers._base.js';
/* 000042 */ import {LatexCharsNode, LatexCommentNode, LatexEnvironmentNode, LatexGroupNode, LatexMacroNode, LatexMathNode, LatexNode, LatexNodeList, LatexNodesVisitor, LatexSpecialsNode, LatexWalkerParseError, ParsedArguments, _UseList, __all__, _display_abbrev_str, _display_str_delimiters, _get_content_as_chars, _unicode_from_str, _update_posposend_from_nodelist, latex_node_types} from './pylatexenc.latexnodes.nodes.js';
/* 000041 */ import {} from './pylatexenc.latexnodes._exctypes.js';
/* 000038 */ import * as __module_logging__ from './logging.js';
/* 000038 */ __nest__ (logging, '', __module_logging__);
/* 000038 */ export {LatexOptionalCharsMarkerParser, LatexSpecialsNode, LatexCharsNode, LatexMathNode, _unicode_from_str, LatexParserBase, LatexGeneralNodesParser, LatexDelimitedGroupParser, _display_str_delimiters, LatexDelimitedExpressionParserInfo, LatexDelimitedVerbatimParser, LatexNodeList, _update_posposend_from_nodelist, _get_content_as_chars, LatexMacroNode, _display_abbrev_str, LatexNodesVisitor, LatexEnvironmentNode, LatexCommentNode, LatexWalkerParseError, LatexNode, LatexGroupNode, LatexExpressionParser, latex_node_types, ParsedArguments, LatexOptionalEmbellishmentArgsParser, __all__, LatexDelimitedMultiDelimGroupParser, LatexDelimitedGroupParserInfo, _UseList};
/* 000001 */ var __name__ = 'pylatexenc.latexnodes.parsers._stdarg';
/* 000039 */ export var logger = (function () {
/* 000039 */ 	var __accu0__ = logging;
/* 000039 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000039 */ }) ();
/* 000061 */ export var _basestring = str;
/* 000077 */ export var _std_arg_parser_instances = dict ({});
/* 000079 */ export var get_standard_argument_parser = function (arg_spec) {
/* 000079 */ 	var kwargs = dict ();
/* 000079 */ 	if (arguments.length) {
/* 000079 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 				switch (__attrib0__) {
/* 000079 */ 					case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 			delete kwargs.__kwargtrans__;
/* 000079 */ 		}
/* 000079 */ 	}
/* 000079 */ 	else {
/* 000079 */ 	}
/* 000086 */ 	if (__t__ (!__t__ ((__call__ (len, null, kwargs))))) {
/* 000087 */ 		var k = arg_spec;
/* 000087 */ 	}
/* 000088 */ 	else {
/* 000089 */ 		var d = dict ({'arg_spec': arg_spec});
/* 000090 */ 		(function () {
/* 000090 */ 			var __accu0__ = d;
/* 000090 */ 			return __call__ (__accu0__.py_update, __accu0__, kwargs);
/* 000090 */ 		}) ();
/* 000091 */ 		var k = __call__ (tuple, null, __call__ (list, null, __call__ (sorted, null, (function () {
/* 000091 */ 			var __accu0__ = d;
/* 000091 */ 			return __call__ (__accu0__.py_items, __accu0__);
/* 000091 */ 		}) (), __kwargtrans__ ({key: (function __lambda__ (v) {
/* 000091 */ 			if (arguments.length) {
/* 000091 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 						switch (__attrib0__) {
/* 000091 */ 							case 'v': var v = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						}
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 			else {
/* 000091 */ 			}
/* 000091 */ 			return __getitem__ (v, 0);
/* 000091 */ 		})}))));
/* 000091 */ 	}
/* 000093 */ 	if (__t__ (!__in__ (k, _std_arg_parser_instances))) {
/* 000094 */ 		var instance = __call__ (LatexStandardArgumentParser, null, arg_spec, __kwargtrans__ (kwargs));
/* 000095 */ 		__setitem__ (_std_arg_parser_instances, k, instance);
/* 000096 */ 		return instance;
/* 000096 */ 	}
/* 000098 */ 	return __getitem__ (_std_arg_parser_instances, k);
/* 000098 */ };
/* 000106 */ export var LatexStandardArgumentParser =  __class__ ('LatexStandardArgumentParser', [LatexParserBase], {
/* 000106 */ 	__module__: __name__,
/* 000116 */ 	get __init__ () {return __get__ (this, function (self, arg_spec, return_full_node_list, expression_single_token_requiring_arg_is_error, allow_pre_space) {
/* 000116 */ 		if (typeof arg_spec == 'undefined' || (arg_spec != null && arg_spec.hasOwnProperty ("__kwargtrans__"))) {;
/* 000116 */ 			var arg_spec = '{';
/* 000116 */ 		};
/* 000116 */ 		if (typeof return_full_node_list == 'undefined' || (return_full_node_list != null && return_full_node_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000116 */ 			var return_full_node_list = false;
/* 000116 */ 		};
/* 000116 */ 		if (typeof expression_single_token_requiring_arg_is_error == 'undefined' || (expression_single_token_requiring_arg_is_error != null && expression_single_token_requiring_arg_is_error.hasOwnProperty ("__kwargtrans__"))) {;
/* 000116 */ 			var expression_single_token_requiring_arg_is_error = true;
/* 000116 */ 		};
/* 000116 */ 		if (typeof allow_pre_space == 'undefined' || (allow_pre_space != null && allow_pre_space.hasOwnProperty ("__kwargtrans__"))) {;
/* 000116 */ 			var allow_pre_space = true;
/* 000116 */ 		};
/* 000116 */ 		var kwargs = dict ();
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'return_full_node_list': var return_full_node_list = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'expression_single_token_requiring_arg_is_error': var expression_single_token_requiring_arg_is_error = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'allow_pre_space': var allow_pre_space = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 				delete kwargs.__kwargtrans__;
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000123 */ 		__call__ (__call__ (__super__, null, LatexStandardArgumentParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000125 */ 		self.arg_spec = arg_spec;
/* 000127 */ 		self.return_full_node_list = return_full_node_list;
/* 000128 */ 		self.expression_single_token_requiring_arg_is_error = expression_single_token_requiring_arg_is_error;
/* 000131 */ 		self.allow_pre_space = allow_pre_space;
/* 000133 */ 		self._arg_parser = null;
/* 000133 */ 	});},
/* 000137 */ 	get get_arg_parser_instance () {return __get__ (this, function (self, arg_spec) {
/* 000137 */ 		if (arguments.length) {
/* 000137 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000137 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000137 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000137 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000137 */ 					switch (__attrib0__) {
/* 000137 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 						case 'arg_spec': var arg_spec = __allkwargs0__ [__attrib0__]; break;
/* 000137 */ 					}
/* 000137 */ 				}
/* 000137 */ 			}
/* 000137 */ 		}
/* 000137 */ 		else {
/* 000137 */ 		}
/* 000139 */ 		if (__t__ (__in__ (arg_spec, tuple (['m', '{'])))) {
/* 000141 */ 			return __call__ (LatexExpressionParser, null, __kwargtrans__ ({return_full_node_list: self.return_full_node_list, single_token_requiring_arg_is_error: self.expression_single_token_requiring_arg_is_error, allow_pre_space: self.allow_pre_space, allow_pre_comments: self.allow_pre_space}));
/* 000141 */ 		}
/* 000149 */ 		else if (__t__ (__in__ (arg_spec, tuple (['o', '['])))) {
/* 000151 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple (['[', ']']), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000151 */ 		}
/* 000157 */ 		else if (__t__ (__in__ (arg_spec, tuple (['s', '*'])))) {
/* 000159 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars_list: ['*'], allow_pre_space: self.allow_pre_space, return_full_node_list: self.return_full_node_list}));
/* 000159 */ 		}
/* 000165 */ 		else if (__t__ ((function () {
/* 000165 */ 			var __accu0__ = arg_spec;
/* 000165 */ 			return __call__ (__accu0__.startswith, __accu0__, 'e');
/* 000165 */ 		}) ())) {
/* 000167 */ 			var arg_spec_arg = (function () {
/* 000167 */ 				var __accu0__ = __getslice__ (arg_spec, 1, null, 1);
/* 000167 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000167 */ 			}) ();
/* 000170 */ 			if (__t__ (__t__ (__le__ (__call__ (len, null, arg_spec_arg), 2)) || __t__ (__ne__ (__getitem__ (arg_spec_arg, 0), '{')) || __ne__ (__getitem__ (arg_spec_arg, __sub__ (__call__ (len, null, arg_spec_arg), 1)), '}'))) {
/* 000172 */ 				var __except0__ = __call__ (ValueError, null, __add__ ('Expected embellishment chars with syntax ‘e{<chars>}’ in ', (function () {
/* 000172 */ 					var __accu0__ = 'arg_spec; got ‘{}’';
/* 000172 */ 					return __call__ (__accu0__.format, __accu0__, arg_spec);
/* 000172 */ 				}) ()));
/* 000172 */ 				__except0__.__cause__ = null;
/* 000172 */ 				throw __except0__;
/* 000172 */ 			}
/* 000174 */ 			var embellishment_chars = __getslice__ (arg_spec_arg, 1, __sub__ (__call__ (len, null, arg_spec), 1), 1);
/* 000176 */ 			return __call__ (LatexOptionalEmbellishmentArgsParser, null, __kwargtrans__ ({embellishment_chars: embellishment_chars, allow_pre_space: self.allow_pre_space}));
/* 000176 */ 		}
/* 000181 */ 		else if (__t__ ((function () {
/* 000181 */ 			var __accu0__ = arg_spec;
/* 000181 */ 			return __call__ (__accu0__.startswith, __accu0__, 't');
/* 000181 */ 		}) ())) {
/* 000183 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 2))) {
/* 000184 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional char argument should be of the form ‘t<char>’');
/* 000184 */ 				__except0__.__cause__ = null;
/* 000184 */ 				throw __except0__;
/* 000184 */ 			}
/* 000186 */ 			var the_char = __getitem__ (arg_spec, 1);
/* 000188 */ 			return __call__ (LatexOptionalCharsMarkerParser, null, __kwargtrans__ ({chars_list: [the_char], allow_pre_space: self.allow_pre_space}));
/* 000188 */ 		}
/* 000193 */ 		else if (__t__ ((function () {
/* 000193 */ 			var __accu0__ = arg_spec;
/* 000193 */ 			return __call__ (__accu0__.startswith, __accu0__, 'r');
/* 000193 */ 		}) ())) {
/* 000195 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000196 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a required delimited argument should be of the form ‘r<char1><char2>’');
/* 000196 */ 				__except0__.__cause__ = null;
/* 000196 */ 				throw __except0__;
/* 000196 */ 			}
/* 000198 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000199 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000201 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: false, allow_pre_space: self.allow_pre_space}));
/* 000201 */ 		}
/* 000207 */ 		else if (__t__ ((function () {
/* 000207 */ 			var __accu0__ = arg_spec;
/* 000207 */ 			return __call__ (__accu0__.startswith, __accu0__, 'd');
/* 000207 */ 		}) ())) {
/* 000209 */ 			if (__t__ (__ne__ (__call__ (len, null, arg_spec), 3))) {
/* 000210 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for an optional delimited argument should be of the form ‘d<char1><char2>’');
/* 000210 */ 				__except0__.__cause__ = null;
/* 000210 */ 				throw __except0__;
/* 000210 */ 			}
/* 000212 */ 			var open_char = __getitem__ (arg_spec, 1);
/* 000213 */ 			var close_char = __getitem__ (arg_spec, 2);
/* 000215 */ 			return __call__ (LatexDelimitedGroupParser, null, __kwargtrans__ ({delimiters: tuple ([open_char, close_char]), optional: true, allow_pre_space: self.allow_pre_space}));
/* 000215 */ 		}
/* 000221 */ 		else if (__t__ ((function () {
/* 000221 */ 			var __accu0__ = arg_spec;
/* 000221 */ 			return __call__ (__accu0__.startswith, __accu0__, 'v');
/* 000221 */ 		}) ())) {
/* 000224 */ 			if (__t__ (__eq__ (__call__ (len, null, arg_spec), 1))) {
/* 000225 */ 				var delimiter_chars = null;
/* 000225 */ 			}
/* 000226 */ 			else if (__t__ (__eq__ (__call__ (len, null, arg_spec), 3))) {
/* 000227 */ 				var delimiter_chars = tuple ([__getitem__ (arg_spec, 1), __getitem__ (arg_spec, 2)]);
/* 000227 */ 			}
/* 000228 */ 			else {
/* 000229 */ 				var __except0__ = __call__ (ValueError, null, 'arg_spec for a verbatim argument should be either ‘v’ or ‘v<char1><char2>’');
/* 000229 */ 				__except0__.__cause__ = null;
/* 000229 */ 				throw __except0__;
/* 000229 */ 			}
/* 000231 */ 			return __call__ (LatexDelimitedVerbatimParser, null, __kwargtrans__ ({delimiters: delimiter_chars}));
/* 000231 */ 		}
/* 000236 */ 		else if (__t__ (__eq__ (arg_spec, 'AnyDelimited'))) {
/* 000238 */ 			return __call__ (LatexDelimitedMultiDelimGroupParser, null, __kwargtrans__ ({optional: false, allow_pre_space: self.allow_pre_space}));
/* 000238 */ 		}
/* 000243 */ 		else if (__t__ (__eq__ (arg_spec, 'AnyDelimitedOptional'))) {
/* 000245 */ 			return __call__ (LatexDelimitedMultiDelimGroupParser, null, __kwargtrans__ ({optional: true, allow_pre_space: self.allow_pre_space}));
/* 000245 */ 		}
/* 000248 */ 		else {
/* 000252 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000252 */ 				var __accu0__ = 'Unknown argument specification: {!r}';
/* 000252 */ 				return __call__ (__accu0__.format, __accu0__, arg_spec);
/* 000252 */ 			}) ());
/* 000252 */ 			__except0__.__cause__ = null;
/* 000252 */ 			throw __except0__;
/* 000252 */ 		}
/* 000252 */ 	});},
/* 000255 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000255 */ 		var kwargs = dict ();
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 				delete kwargs.__kwargtrans__;
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000257 */ 		if (__t__ (self._arg_parser === null)) {
/* 000258 */ 			self._arg_parser = (function () {
/* 000258 */ 				var __accu0__ = self;
/* 000258 */ 				return __call__ (__accu0__.get_arg_parser_instance, __accu0__, self.arg_spec);
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000260 */ 		var arg_parser = self._arg_parser;
/* 000262 */ 		var __left0__ = (function () {
/* 000262 */ 			var __accu0__ = latex_walker;
/* 000262 */ 			return __call__ (__accu0__.parse_content, __accu0__, arg_parser, __kwargtrans__ (__mergekwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state}, kwargs)));
/* 000262 */ 		}) ();
/* 000262 */ 		var nodes = __left0__ [0];
/* 000262 */ 		var parsing_state_delta = __left0__ [1];
/* 000269 */ 		return tuple ([nodes, parsing_state_delta]);
/* 000269 */ 	});}
/* 000269 */ });
/* 000281 */ export var LatexCharsGroupParser =  __class__ ('LatexCharsGroupParser', [LatexDelimitedGroupParser], {
/* 000281 */ 	__module__: __name__,
/* 000291 */ 	get __init__ () {return __get__ (this, function (self, delimiters, enable_comments, enable_groups) {
/* 000291 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var delimiters = tuple (['{', '}']);
/* 000291 */ 		};
/* 000291 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var enable_comments = true;
/* 000291 */ 		};
/* 000291 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000291 */ 			var enable_groups = true;
/* 000291 */ 		};
/* 000291 */ 		var kwargs = dict ();
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 				delete kwargs.__kwargtrans__;
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000293 */ 		__call__ (__call__ (__super__, null, LatexCharsGroupParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsGroupParser.CharsContentsParserInfo}, kwargs)));
/* 000299 */ 		self.enable_comments = enable_comments;
/* 000300 */ 		self.enable_groups = enable_groups;
/* 000303 */ 	});},
/* 000303 */ 	CharsContentsParserInfo: __class__ ('CharsContentsParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000303 */ 		__module__: __name__,
/* 000304 */ 		get initialize () {return __get__ (this, function (self) {
/* 000304 */ 			if (arguments.length) {
/* 000304 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 						switch (__attrib0__) {
/* 000304 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						}
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 			else {
/* 000304 */ 			}
/* 000305 */ 			self.contents_parsing_state = (function () {
/* 000305 */ 				var __accu0__ = self.group_parsing_state;
/* 000305 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000305 */ 			}) ();
/* 000314 */ 			self.current_parsing_state = self.contents_parsing_state;
/* 000316 */ 			self.parsed_delimiters = (function () {
/* 000316 */ 				var __accu0__ = self;
/* 000316 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000316 */ 			}) ();
/* 000318 */ 			// pass;
/* 000318 */ 		});},
/* 000322 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class, token) {
/* 000322 */ 			if (arguments.length) {
/* 000322 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 						switch (__attrib0__) {
/* 000322 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						}
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 			else {
/* 000322 */ 			}
/* 000323 */ 			return self.parsing_state;
/* 000323 */ 		});},
/* 000325 */ 		get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000325 */ 			if (arguments.length) {
/* 000325 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 						switch (__attrib0__) {
/* 000325 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						}
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 			else {
/* 000325 */ 			}
/* 000326 */ 			// pass;
/* 000329 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000330 */ 				return true;
/* 000330 */ 			}
/* 000332 */ 			if (__t__ (__t__ (__eq__ (token.tok, 'char')) && __eq__ (token.arg, __getitem__ (self.parsed_delimiters, 1)))) {
/* 000333 */ 				return true;
/* 000333 */ 			}
/* 000334 */ 			return null;
/* 000334 */ 		});}
/* 000334 */ 	})
/* 000334 */ });
/* 000342 */ export var LatexCharsCommaSeparatedListParser =  __class__ ('LatexCharsCommaSeparatedListParser', [LatexDelimitedGroupParser], {
/* 000342 */ 	__module__: __name__,
/* 000355 */ 	get __init__ () {return __get__ (this, function (self, comma_char, delimiters, enable_comments, enable_groups, keep_empty_parts) {
/* 000355 */ 		if (typeof comma_char == 'undefined' || (comma_char != null && comma_char.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var comma_char = ',';
/* 000355 */ 		};
/* 000355 */ 		if (typeof delimiters == 'undefined' || (delimiters != null && delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var delimiters = tuple (['{', '}']);
/* 000355 */ 		};
/* 000355 */ 		if (typeof enable_comments == 'undefined' || (enable_comments != null && enable_comments.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var enable_comments = true;
/* 000355 */ 		};
/* 000355 */ 		if (typeof enable_groups == 'undefined' || (enable_groups != null && enable_groups.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var enable_groups = true;
/* 000355 */ 		};
/* 000355 */ 		if (typeof keep_empty_parts == 'undefined' || (keep_empty_parts != null && keep_empty_parts.hasOwnProperty ("__kwargtrans__"))) {;
/* 000355 */ 			var keep_empty_parts = false;
/* 000355 */ 		};
/* 000355 */ 		var kwargs = dict ();
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'comma_char': var comma_char = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'enable_comments': var enable_comments = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'enable_groups': var enable_groups = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'keep_empty_parts': var keep_empty_parts = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 				delete kwargs.__kwargtrans__;
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000358 */ 		__call__ (__call__ (__super__, null, LatexCharsCommaSeparatedListParser, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({delimiters: delimiters, delimited_expression_parser_info_class: LatexCharsCommaSeparatedListParser.CommaSepParserInfo}, kwargs)));
/* 000365 */ 		self.comma_char = comma_char;
/* 000366 */ 		self.enable_comments = enable_comments;
/* 000367 */ 		self.enable_groups = enable_groups;
/* 000368 */ 		self.keep_empty_parts = keep_empty_parts;
/* 000370 */ 	});},
/* 000370 */ 	CommaSepParserInfo: __class__ ('CommaSepParserInfo', [LatexDelimitedGroupParserInfo], {
/* 000370 */ 		__module__: __name__,
/* 000371 */ 		get initialize () {return __get__ (this, function (self) {
/* 000371 */ 			if (arguments.length) {
/* 000371 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 						switch (__attrib0__) {
/* 000371 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						}
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 			else {
/* 000371 */ 			}
/* 000372 */ 			self.comma_char = self.delimited_expression_parser.comma_char;
/* 000374 */ 			self.contents_parsing_state = (function () {
/* 000374 */ 				var __accu0__ = self.group_parsing_state;
/* 000374 */ 				return __call__ (__accu0__.sub_context, __accu0__, __kwargtrans__ ({enable_macros: false, enable_environments: false, enable_comments: self.delimited_expression_parser.enable_comments, enable_groups: self.delimited_expression_parser.enable_groups, enable_specials: false, enable_math: false}));
/* 000374 */ 			}) ();
/* 000382 */ 			self.parsed_delimiters = (function () {
/* 000382 */ 				var __accu0__ = self;
/* 000382 */ 				return __call__ (__accu0__.get_parsed_delimiters, __accu0__);
/* 000382 */ 			}) ();
/* 000384 */ 			// pass;
/* 000384 */ 		});},
/* 000388 */ 		get make_child_parsing_state () {return __get__ (this, function (self, parsing_state, node_class, token) {
/* 000388 */ 			if (arguments.length) {
/* 000388 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 						switch (__attrib0__) {
/* 000388 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 							case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 							case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 							case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						}
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 			else {
/* 000388 */ 			}
/* 000389 */ 			return self.parsing_state;
/* 000389 */ 		});},
/* 000391 */ 		get make_content_parser () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000391 */ 			if (arguments.length) {
/* 000391 */ 				var __ilastarg0__ = arguments.length - 1;
/* 000391 */ 				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000391 */ 					var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000391 */ 					for (var __attrib0__ in __allkwargs0__) {
/* 000391 */ 						switch (__attrib0__) {
/* 000391 */ 							case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 							case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 							case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000391 */ 						}
/* 000391 */ 					}
/* 000391 */ 				}
/* 000391 */ 			}
/* 000391 */ 			else {
/* 000391 */ 			}
/* 000392 */ 			return __call__ (_CommaSepContentCustomParser, null, self);
/* 000392 */ 		});}
/* 000392 */ 	})
/* 000392 */ });
/* 000395 */ export var _CommaSepContentCustomParser =  __class__ ('_CommaSepContentCustomParser', [LatexParserBase], {
/* 000395 */ 	__module__: __name__,
/* 000396 */ 	get __init__ () {return __get__ (this, function (self, contents_parser_info) {
/* 000396 */ 		var kwargs = dict ();
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'contents_parser_info': var contents_parser_info = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 				delete kwargs.__kwargtrans__;
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000397 */ 		__call__ (__call__ (__super__, null, _CommaSepContentCustomParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000398 */ 		self.contents_parser_info = contents_parser_info;
/* 000405 */ 		self.main_content_parser = __call__ (LatexGeneralNodesParser, null, __kwargtrans__ ({stop_token_condition: self.stop_token_condition, make_child_parsing_state: contents_parser_info.make_child_parsing_state, require_stop_condition_met: true, handle_stop_condition_token: self.handle_stop_condition_token, stop_condition_message: (function () {
/* 000405 */ 			var __accu0__ = 'Expected matching ‘{}’ of ‘{}’-separated group initiated by ‘{}’';
/* 000405 */ 			return __call__ (__accu0__.format, __accu0__, __getitem__ (contents_parser_info.parsed_delimiters, 1), self.contents_parser_info.comma_char, __getitem__ (contents_parser_info.parsed_delimiters, 0));
/* 000405 */ 		}) ()}));
/* 000415 */ 		self.current_parsing_state = self.contents_parser_info.contents_parsing_state;
/* 000416 */ 		self.comma_sep_arg_list = [];
/* 000417 */ 		self.parsing_state_delta = null;
/* 000418 */ 		self.parse_more = true;
/* 000419 */ 		self.pos_start = null;
/* 000420 */ 		self.is_very_first_element = true;
/* 000421 */ 		self.last_element_pos_start = null;
/* 000422 */ 		self.last_delimiter_token = null;
/* 000423 */ 		self.last_element_pos_end = null;
/* 000423 */ 	});},
/* 000425 */ 	get stop_token_condition () {return __get__ (this, function (self, token) {
/* 000425 */ 		if (arguments.length) {
/* 000425 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000425 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000425 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000425 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000425 */ 					switch (__attrib0__) {
/* 000425 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000425 */ 					}
/* 000425 */ 				}
/* 000425 */ 			}
/* 000425 */ 		}
/* 000425 */ 		else {
/* 000425 */ 		}
/* 000426 */ 		// pass;
/* 000429 */ 		if (__t__ (__t__ (__eq__ (token.tok, 'brace_close')) && __eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000431 */ 			return true;
/* 000431 */ 		}
/* 000432 */ 		if (__t__ (__eq__ (token.tok, 'char'))) {
/* 000433 */ 			if (__t__ (__eq__ (token.arg, __getitem__ (self.contents_parser_info.parsed_delimiters, 1)))) {
/* 000434 */ 				return true;
/* 000434 */ 			}
/* 000435 */ 			else if (__t__ (__eq__ (token.arg, self.contents_parser_info.comma_char))) {
/* 000436 */ 				return true;
/* 000436 */ 			}
/* 000437 */ 			return false;
/* 000437 */ 		}
/* 000438 */ 		return false;
/* 000438 */ 	});},
/* 000440 */ 	get handle_stop_condition_token () {return __get__ (this, function (self, token, latex_walker, token_reader, parsing_state) {
/* 000440 */ 		if (arguments.length) {
/* 000440 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000440 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000440 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000440 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000440 */ 					switch (__attrib0__) {
/* 000440 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000440 */ 					}
/* 000440 */ 				}
/* 000440 */ 			}
/* 000440 */ 		}
/* 000440 */ 		else {
/* 000440 */ 		}
/* 000442 */ 		(function () {
/* 000442 */ 			var __accu0__ = token_reader;
/* 000442 */ 			return __call__ (__accu0__.move_past_token, __accu0__, token);
/* 000442 */ 		}) ();
/* 000443 */ 		if (__t__ (__eq__ (token.tok, 'brace_close'))) {
/* 000445 */ 			self.last_delimiter_token = null;
/* 000446 */ 			self.last_element_pos_end = token.pos;
/* 000447 */ 			self.parse_more = false;
/* 000447 */ 		}
/* 000448 */ 		else {
/* 000449 */ 			self.last_delimiter_token = token;
/* 000450 */ 			self.last_element_pos_end = token.pos_end;
/* 000451 */ 			self.parse_more = true;
/* 000451 */ 		}
/* 000451 */ 	});},
/* 000454 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000454 */ 		if (arguments.length) {
/* 000454 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000454 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000454 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000454 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000454 */ 					switch (__attrib0__) {
/* 000454 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000454 */ 					}
/* 000454 */ 				}
/* 000454 */ 			}
/* 000454 */ 		}
/* 000454 */ 		else {
/* 000454 */ 		}
/* 000456 */ 		// pass;
/* 000460 */ 		self.pos_start = (function () {
/* 000460 */ 			var __accu0__ = token_reader;
/* 000460 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000460 */ 		}) ();
/* 000462 */ 		self.parse_more = true;
/* 000463 */ 		while (__t__ (self.parse_more)) {
/* 000465 */ 			(function () {
/* 000465 */ 				var __accu0__ = self;
/* 000465 */ 				return __call__ (__accu0__._parse_one_commasep_arg, __accu0__, latex_walker, token_reader);
/* 000465 */ 			}) ();
/* 000467 */ 			if (__t__ (__t__ (self.parse_more) && self.parsing_state_delta !== null)) {
/* 000470 */ 				self.current_parsing_state = (function () {
/* 000470 */ 					var __accu0__ = self.parsing_state_delta;
/* 000470 */ 					return __call__ (__accu0__.get_updated_parsing_state, __accu0__, self.current_parsing_state, latex_walker);
/* 000470 */ 				}) ();
/* 000470 */ 			}
/* 000470 */ 		}
/* 000475 */ 		var final_node_list = (function () {
/* 000475 */ 			var __accu0__ = latex_walker;
/* 000475 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, self.comma_sep_arg_list, __kwargtrans__ ({pos: self.pos_start, pos_end: self.last_element_pos_end, parsing_state: parsing_state}));
/* 000475 */ 		}) ();
/* 000482 */ 		return tuple ([final_node_list, self.parsing_state_delta]);
/* 000482 */ 	});},
/* 000485 */ 	get _parse_one_commasep_arg () {return __get__ (this, function (self, latex_walker, token_reader) {
/* 000485 */ 		if (arguments.length) {
/* 000485 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000485 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000485 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000485 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000485 */ 					switch (__attrib0__) {
/* 000485 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 					}
/* 000485 */ 				}
/* 000485 */ 			}
/* 000485 */ 		}
/* 000485 */ 		else {
/* 000485 */ 		}
/* 000487 */ 		// pass;
/* 000491 */ 		self.last_element_pos_start = (function () {
/* 000491 */ 			var __accu0__ = token_reader;
/* 000491 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000491 */ 		}) ();
/* 000493 */ 		self.last_element_pos_end = null;
/* 000494 */ 		self.last_delimiter_token = null;
/* 000496 */ 		var __left0__ = (function () {
/* 000496 */ 			var __accu0__ = latex_walker;
/* 000501 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.main_content_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: self.current_parsing_state, open_context: tuple ([(function () {
/* 000501 */ 				var __accu1__ = 'Element {} of list separated by ‘{}’';
/* 000502 */ 				return __call__ (__accu1__.format, __accu1__, __call__ (len, null, self.comma_sep_arg_list), self.contents_parser_info.comma_char);
/* 000502 */ 			}) (), self.contents_parser_info.first_token])}));
/* 000502 */ 		}) ();
/* 000502 */ 		var nodelist = __left0__ [0];
/* 000502 */ 		var parsing_state_delta = __left0__ [1];
/* 000509 */ 		// pass;
/* 000514 */ 		var pos_end = self.last_element_pos_end;
/* 000515 */ 		if (__t__ (pos_end === null)) {
/* 000516 */ 			// pass;
/* 000519 */ 			var pos_end = (function () {
/* 000519 */ 				var __accu0__ = token_reader;
/* 000519 */ 				return __call__ (__accu0__.final_pos, __accu0__);
/* 000519 */ 			}) ();
/* 000520 */ 			self.parse_more = false;
/* 000520 */ 		}
/* 000522 */ 		if (__t__ (self.last_delimiter_token === null)) {
/* 000523 */ 			var this_close_delim = '';
/* 000523 */ 		}
/* 000524 */ 		else {
/* 000525 */ 			var this_close_delim = self.last_delimiter_token.arg;
/* 000525 */ 		}
/* 000527 */ 		var this_group_node = (function () {
/* 000527 */ 			var __accu0__ = latex_walker;
/* 000527 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({nodelist: nodelist, parsing_state: self.current_parsing_state, delimiters: tuple (['', this_close_delim]), pos: self.last_element_pos_start, pos_end: pos_end}));
/* 000527 */ 		}) ();
/* 000536 */ 		var add_group_node = true;
/* 000537 */ 		if (__t__ (!__t__ ((__call__ (len, null, nodelist))))) {
/* 000538 */ 			if (__t__ (__t__ (self.is_very_first_element) && self.last_delimiter_token === null)) {
/* 000544 */ 				var add_group_node = false;
/* 000544 */ 			}
/* 000545 */ 			else if (__t__ (self.keep_empty_parts)) {
/* 000546 */ 				var add_group_node = true;
/* 000546 */ 			}
/* 000547 */ 			else {
/* 000548 */ 				var add_group_node = false;
/* 000548 */ 			}
/* 000548 */ 		}
/* 000550 */ 		if (__t__ (add_group_node)) {
/* 000551 */ 			(function () {
/* 000551 */ 				var __accu0__ = self.comma_sep_arg_list;
/* 000551 */ 				return __call__ (__accu0__.append, __accu0__, this_group_node);
/* 000551 */ 			}) ();
/* 000551 */ 		}
/* 000553 */ 		self.parsing_state_delta = parsing_state_delta;
/* 000555 */ 		self.is_very_first_element = false;
/* 000557 */ 		// pass;
/* 000557 */ 	});}
/* 000557 */ });
/* 000568 */ export var LatexTackOnInformationFieldMacrosParser =  __class__ ('LatexTackOnInformationFieldMacrosParser', [LatexParserBase], {
/* 000568 */ 	__module__: __name__,
/* 000595 */ 	get __init__ () {return __get__ (this, function (self, macronames, allow_multiple, macro_arg_parsers, default_macro_arg_parser) {
/* 000595 */ 		if (typeof allow_multiple == 'undefined' || (allow_multiple != null && allow_multiple.hasOwnProperty ("__kwargtrans__"))) {;
/* 000595 */ 			var allow_multiple = false;
/* 000595 */ 		};
/* 000595 */ 		if (typeof macro_arg_parsers == 'undefined' || (macro_arg_parsers != null && macro_arg_parsers.hasOwnProperty ("__kwargtrans__"))) {;
/* 000595 */ 			var macro_arg_parsers = null;
/* 000595 */ 		};
/* 000595 */ 		if (typeof default_macro_arg_parser == 'undefined' || (default_macro_arg_parser != null && default_macro_arg_parser.hasOwnProperty ("__kwargtrans__"))) {;
/* 000595 */ 			var default_macro_arg_parser = true;
/* 000595 */ 		};
/* 000595 */ 		var kwargs = dict ();
/* 000595 */ 		if (arguments.length) {
/* 000595 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000595 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000595 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000595 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000595 */ 					switch (__attrib0__) {
/* 000595 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'macronames': var macronames = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'allow_multiple': var allow_multiple = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'macro_arg_parsers': var macro_arg_parsers = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						case 'default_macro_arg_parser': var default_macro_arg_parser = __allkwargs0__ [__attrib0__]; break;
/* 000595 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000595 */ 					}
/* 000595 */ 				}
/* 000595 */ 				delete kwargs.__kwargtrans__;
/* 000595 */ 			}
/* 000595 */ 		}
/* 000595 */ 		else {
/* 000595 */ 		}
/* 000598 */ 		__call__ (__call__ (__super__, null, LatexTackOnInformationFieldMacrosParser, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000600 */ 		self.macronames = __call__ (set, null, macronames);
/* 000601 */ 		if (__t__ (allow_multiple === false)) {
/* 000602 */ 			self.allow_multiple = __call__ (set, null);
/* 000602 */ 		}
/* 000603 */ 		else if (__t__ (allow_multiple === true)) {
/* 000604 */ 			self.allow_multiple = self.macronames;
/* 000604 */ 		}
/* 000605 */ 		else {
/* 000606 */ 			self.allow_multiple = __call__ (set, null, allow_multiple);
/* 000606 */ 		}
/* 000608 */ 		if (__t__ (default_macro_arg_parser === true)) {
/* 000609 */ 			self.default_macro_arg_parser = __call__ (LatexExpressionParser, null);
/* 000609 */ 		}
/* 000610 */ 		else {
/* 000612 */ 			self.default_macro_arg_parser = default_macro_arg_parser;
/* 000612 */ 		}
/* 000614 */ 		self.macro_arg_parsers = macro_arg_parsers;
/* 000614 */ 	});},
/* 000616 */ 	get contents_can_be_empty () {return __get__ (this, function (self) {
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000617 */ 		return true;
/* 000617 */ 	});},
/* 000619 */ 	get get_macro_arg_parser () {return __get__ (this, function (self, macroname) {
/* 000619 */ 		if (arguments.length) {
/* 000619 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000619 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000619 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000619 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000619 */ 					switch (__attrib0__) {
/* 000619 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000619 */ 					}
/* 000619 */ 				}
/* 000619 */ 			}
/* 000619 */ 		}
/* 000619 */ 		else {
/* 000619 */ 		}
/* 000627 */ 		if (__t__ (self.macro_arg_parsers === null)) {
/* 000630 */ 			return self.default_macro_arg_parser;
/* 000630 */ 		}
/* 000631 */ 		if (__t__ (!__in__ (macroname, self.macro_arg_parsers))) {
/* 000632 */ 			return self.default_macro_arg_parser;
/* 000632 */ 		}
/* 000633 */ 		var parser = __getitem__ (self.macro_arg_parsers, macroname);
/* 000634 */ 		if (__t__ (parser === true)) {
/* 000635 */ 			return self.default_macro_arg_parser;
/* 000635 */ 		}
/* 000636 */ 		return parser;
/* 000636 */ 	});},
/* 000639 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000639 */ 		if (arguments.length) {
/* 000639 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000639 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000639 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000639 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000639 */ 					switch (__attrib0__) {
/* 000639 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000639 */ 					}
/* 000639 */ 				}
/* 000639 */ 			}
/* 000639 */ 		}
/* 000639 */ 		else {
/* 000639 */ 		}
/* 000641 */ 		var arg_nodes = [];
/* 000643 */ 		var seen_macronames = __call__ (set, null);
/* 000645 */ 		while (__t__ (true)) {
/* 000646 */ 			var tok = (function () {
/* 000646 */ 				var __accu0__ = token_reader;
/* 000646 */ 				return __call__ (__accu0__.peek_token_or_none, __accu0__, parsing_state);
/* 000646 */ 			}) ();
/* 000648 */ 			if (__t__ (__t__ (tok === null) || __t__ (__ne__ (tok.tok, 'macro')) || !__in__ (tok.arg, self.macronames))) {
/* 000649 */ 				// pass;
/* 000649 */ 				break;
/* 000649 */ 			}
/* 000654 */ 			var macroname = tok.arg;
/* 000655 */ 			var tolerant_parsing_skip_add_this_node = false;
/* 000659 */ 			(function () {
/* 000659 */ 				var __accu0__ = token_reader;
/* 000659 */ 				return __call__ (__accu0__.move_past_token, __accu0__, tok);
/* 000659 */ 			}) ();
/* 000661 */ 			if (__t__ (__t__ (__in__ (macroname, seen_macronames)) && !__t__ ((__in__ (macroname, self.allow_multiple))))) {
/* 000663 */ 				var message = (function () {
/* 000663 */ 					var __accu0__ = 'You cannot specify information field macro \\{} multiple times';
/* 000663 */ 					return __call__ (__accu0__.format, __accu0__, macroname);
/* 000663 */ 				}) ();
/* 000666 */ 				var exc = __call__ (LatexWalkerParseError, null, __kwargtrans__ ({msg: message, pos: tok.pos, error_type_info: dict ({'what': 'nodes_stdarg_illegal_multiple_information_field_macro', 'macroname': macroname})}));
/* 000674 */ 				var exc = (function () {
/* 000674 */ 					var __accu0__ = latex_walker;
/* 000674 */ 					return __call__ (__accu0__.check_tolerant_parsing_ignore_error, __accu0__, exc);
/* 000674 */ 				}) ();
/* 000675 */ 				if (__t__ (exc !== null)) {
/* 000676 */ 					var __except0__ = exc;
/* 000676 */ 					__except0__.__cause__ = null;
/* 000676 */ 					throw __except0__;
/* 000676 */ 				}
/* 000677 */ 				(function () {
/* 000677 */ 					var __accu0__ = logger;
/* 000677 */ 					return __call__ (__accu0__.warning, __accu0__, '%s; ignoring the additional information field macros', message);
/* 000677 */ 				}) ();
/* 000678 */ 				var tolerant_parsing_skip_add_this_node = true;
/* 000678 */ 			}
/* 000680 */ 			var macro_arg_parser = (function () {
/* 000680 */ 				var __accu0__ = self;
/* 000680 */ 				return __call__ (__accu0__.get_macro_arg_parser, __accu0__, macroname);
/* 000680 */ 			}) ();
/* 000682 */ 			if (__t__ (macro_arg_parser === null)) {
/* 000684 */ 				var arg_content_node = null;
/* 000685 */ 				var arg_parsing_state_delta = null;
/* 000685 */ 			}
/* 000686 */ 			else {
/* 000689 */ 				var __left0__ = (function () {
/* 000689 */ 					var __accu0__ = latex_walker;
/* 000694 */ 					return __call__ (__accu0__.parse_content, __accu0__, macro_arg_parser, __kwargtrans__ ({token_reader: token_reader, parsing_state: parsing_state, open_context: tuple ([(function () {
/* 000694 */ 						var __accu1__ = 'Argument of information field macro \\{}';
/* 000694 */ 						return __call__ (__accu1__.format, __accu1__, macroname);
/* 000694 */ 					}) (), tok])}));
/* 000694 */ 				}) ();
/* 000694 */ 				var arg_content_node = __left0__ [0];
/* 000694 */ 				var arg_parsing_state_delta = __left0__ [1];
/* 000699 */ 				if (__t__ (arg_parsing_state_delta !== null)) {
/* 000700 */ 					(function () {
/* 000700 */ 						var __accu0__ = logger;
/* 000701 */ 						return __call__ (__accu0__.warning, __accu0__, (function () {
/* 000701 */ 							var __accu1__ = 'Parsing state delta is ignored when parsing tack-on information field macro \\{}: {}';
/* 000701 */ 							return __call__ (__accu1__.format, __accu1__, macroname, arg_parsing_state_delta);
/* 000701 */ 						}) ());
/* 000701 */ 					}) ();
/* 000701 */ 				}
/* 000701 */ 			}
/* 000706 */ 			if (__t__ (tolerant_parsing_skip_add_this_node)) {
/* 000706 */ 				continue;
/* 000706 */ 			}
/* 000709 */ 			if (__t__ (__call__ (isinstance, null, arg_content_node, LatexNodeList))) {
/* 000710 */ 				var arg_content_nodelist = arg_content_node;
/* 000710 */ 			}
/* 000711 */ 			else {
/* 000712 */ 				var arg_content_nodelist = (function () {
/* 000712 */ 					var __accu0__ = latex_walker;
/* 000712 */ 					return __call__ (__accu0__.make_nodelist, __accu0__, [arg_content_node], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000712 */ 				}) ();
/* 000712 */ 			}
/* 000717 */ 			var arg_node = (function () {
/* 000717 */ 				var __accu0__ = latex_walker;
/* 000717 */ 				return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: parsing_state, delimiters: tuple ([__add__ ('\\', macroname), '']), nodelist: arg_content_nodelist, pos: tok.pos, pos_end: (__t__ (arg_content_node !== null) ? arg_content_node.pos_end : tok.pos_end)}));
/* 000717 */ 			}) ();
/* 000730 */ 			(function () {
/* 000730 */ 				var __accu0__ = arg_nodes;
/* 000730 */ 				return __call__ (__accu0__.append, __accu0__, arg_node);
/* 000730 */ 			}) ();
/* 000730 */ 		}
/* 000732 */ 		var arg_nodelist = (function () {
/* 000732 */ 			var __accu0__ = latex_walker;
/* 000732 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, arg_nodes, __kwargtrans__ ({parsing_state: parsing_state}));
/* 000732 */ 		}) ();
/* 000737 */ 		return tuple ([arg_nodelist, null]);
/* 000737 */ 	});}
/* 000737 */ });
/* 000038 */ 
//# sourceMappingURL=pylatexenc.latexnodes.parsers._stdarg.map