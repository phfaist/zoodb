/* 000001 */ // Transcrypt'ed from Python, 2026-02-12 21:38:43
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000025 */ import {Feature} from './flm.feature._base.js';
/* 000021 */ import {FLMArgumentSpec, FLMMacroSpecBase, FLMSpecInfo, FLMSpecialsSpecBase} from './flm.flmspecinfo.js';
/* 000019 */ import {ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000018 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000014 */ import {LatexGroupNode, LatexNodeList} from './pylatexenc.latexnodes.nodes.js';
/* 000013 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsedArgumentsInfo, ParsingStateDeltaExtendLatexContextDb, latexnodes_parsers, LatexWalkerLocatedError, LatexNodeList, LatexParserBase, FLMSpecialsSpecBase, FLMArgumentSpec, FLMSpecInfo, LatexGroupNode, FLMMacroSpecBase, Feature};
/* 000001 */ var __name__ = 'flm.feature.substmacros';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000031 */ export var NothingParser =  __class__ ('NothingParser', [LatexParserBase], {
/* 000031 */ 	__module__: __name__,
/* 000032 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000032 */ 		var kwargs = dict ();
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 				delete kwargs.__kwargtrans__;
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000034 */ 		return tuple ([(function () {
/* 000034 */ 			var __accu0__ = latex_walker;
/* 000034 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000034 */ 		}) (), null]);
/* 000034 */ 	});}
/* 000034 */ });
/* 000038 */ export var SetArgumentNumberOffset = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (NothingParser, null), argname: '_SetArgumentNumberOffset'}));
/* 000057 */ export var _macroarg_placeholder_arguments_spec_list = [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'substitution_arg', flm_doc: 'When defining custom substitution handlers, you can use this argument internally to specify custom substitution strings'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'placeholder_ref', flm_doc: 'Argument number (e.g. #2 for second argument, counting from 1 like LaTeX) or argument name (e.g. #{label} for argument named "label")'}))];
/* 000069 */ export var SimpleMacroArgumentPlaceholder =  __class__ ('SimpleMacroArgumentPlaceholder', [FLMSpecialsSpecBase], {
/* 000069 */ 	__module__: __name__,
/* 000071 */ 	allowed_in_standalone_mode: true,
/* 000073 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000073 */ 		if (typeof specials_chars == 'undefined' || (specials_chars != null && specials_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000073 */ 			var specials_chars = '#';
/* 000073 */ 		};
/* 000073 */ 		var parse_arg_information_only = false;
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'parse_arg_information_only': var parse_arg_information_only = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000079 */ 		__call__ (__call__ (__super__, null, SimpleMacroArgumentPlaceholder, '__init__'), null, self, __kwargtrans__ ({specials_chars: specials_chars, arguments_spec_list: _macroarg_placeholder_arguments_spec_list}));
/* 000081 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000082 */ 		self.parse_arg_information_only = parse_arg_information_only;
/* 000082 */ 	});},
/* 000084 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000086 */ 		var node_args = (function () {
/* 000086 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000086 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['substitution_arg', 'placeholder_ref']));
/* 000086 */ 		}) ();
/* 000090 */ 		var placeholder_ref = (function () {
/* 000090 */ 			var __accu0__ = (function () {
/* 000090 */ 				var __accu1__ = __getitem__ (node_args, 'placeholder_ref');
/* 000090 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000090 */ 			}) ();
/* 000090 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000090 */ 		}) ();
/* 000092 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000093 */ 		node.flmarg_substitution_arg_info = __getitem__ (node_args, 'substitution_arg');
/* 000095 */ 		if (__t__ (self.parse_arg_information_only)) {
/* 000097 */ 			return ;
/* 000097 */ 		}
/* 000099 */ 		var value = (function () {
/* 000099 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000099 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: node, substitution_arg_info: __getitem__ (node_args, 'substitution_arg')}));
/* 000099 */ 		}) ();
/* 000104 */ 		if (__t__ (__call__ (isinstance, null, value, str))) {
/* 000105 */ 			var nodelist = (function () {
/* 000105 */ 				var __accu0__ = self.macro_content_substitutor;
/* 000105 */ 				return __call__ (__accu0__.compile_flm_text, __accu0__, value, __kwargtrans__ ({add_what: 'placeholder ‘{}’ value'.format (placeholder_ref), is_block_level: node.parsing_state.is_block_level}));
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000109 */ 		else {
/* 000112 */ 			var nodelist = value;
/* 000112 */ 		}
/* 000114 */ 		// pass;
/* 000120 */ 		if (__t__ (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList)) && !__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000123 */ 			var nodelist = nodelist.nodelist;
/* 000123 */ 		}
/* 000125 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, nodelist, LatexNodeList))))) {
/* 000126 */ 			var nodelist = (function () {
/* 000126 */ 				var __accu0__ = node.latex_walker;
/* 000126 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000126 */ 			}) ();
/* 000126 */ 		}
/* 000131 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000132 */ 		node.flm_placeholder_content_nodelist = nodelist;
/* 000134 */ 		var nodelist_parsing_state = nodelist.parsing_state;
/* 000136 */ 		// pass;
/* 000140 */ 		var substitute_node = (function () {
/* 000140 */ 			var __accu0__ = node.latex_walker;
/* 000140 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 000140 */ 		}) ();
/* 000149 */ 		// pass;
/* 000152 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000152 */ 	});},
/* 000158 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000158 */ 		if (arguments.length) {
/* 000158 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000158 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000158 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000158 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000158 */ 					switch (__attrib0__) {
/* 000158 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000158 */ 					}
/* 000158 */ 				}
/* 000158 */ 			}
/* 000158 */ 		}
/* 000158 */ 		else {
/* 000158 */ 		}
/* 000159 */ 		var __except0__ = __call__ (RuntimeError, null, "Shouldn't be called");
/* 000159 */ 		__except0__.__cause__ = null;
/* 000159 */ 		throw __except0__;
/* 000159 */ 	});}
/* 000159 */ });
/* 000165 */ export var _make_ifarg_argument_argspec = function (macro_content_substitutor) {
/* 000165 */ 	if (arguments.length) {
/* 000165 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 				switch (__attrib0__) {
/* 000165 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 	}
/* 000165 */ 	else {
/* 000165 */ 	}
/* 000178 */ 	return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: macro_content_substitutor, parse_arg_information_only: true}))]}), set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: false}))})), argname: 'arg_ref'}));
/* 000178 */ };
/* 000186 */ export var _ifargcmd_condition_wasprovided = function (argument_info) {
/* 000186 */ 	if (arguments.length) {
/* 000186 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 				switch (__attrib0__) {
/* 000186 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 				}
/* 000186 */ 			}
/* 000186 */ 		}
/* 000186 */ 	}
/* 000186 */ 	else {
/* 000186 */ 	}
/* 000187 */ 	return (function () {
/* 000187 */ 		var __accu0__ = argument_info;
/* 000187 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000187 */ 	}) ();
/* 000187 */ };
/* 000189 */ export var _ifargcmd_condition_wasnotprovided = function (argument_info) {
/* 000189 */ 	if (arguments.length) {
/* 000189 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000189 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000189 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000189 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000189 */ 				switch (__attrib0__) {
/* 000189 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000189 */ 				}
/* 000189 */ 			}
/* 000189 */ 		}
/* 000189 */ 	}
/* 000189 */ 	else {
/* 000189 */ 	}
/* 000190 */ 	return !__t__ (((function () {
/* 000190 */ 		var __accu0__ = argument_info;
/* 000190 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000190 */ 	}) ()));
/* 000190 */ };
/* 000192 */ export var _ifargcmd_condition_isempty = function (argument_info) {
/* 000192 */ 	if (arguments.length) {
/* 000192 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 				switch (__attrib0__) {
/* 000192 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 	}
/* 000192 */ 	else {
/* 000192 */ 	}
/* 000193 */ 	var arg_content_nodes = (function () {
/* 000193 */ 		var __accu0__ = (function () {
/* 000193 */ 			var __accu1__ = argument_info;
/* 000193 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000193 */ 		}) ();
/* 000193 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000193 */ 	}) ();
/* 000196 */ 	return __eq__ (__call__ (len, null, arg_content_nodes), 0);
/* 000196 */ };
/* 000198 */ export var _ifargcmd_condition_notempty = function (argument_info) {
/* 000198 */ 	if (arguments.length) {
/* 000198 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 				switch (__attrib0__) {
/* 000198 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 	}
/* 000198 */ 	else {
/* 000198 */ 	}
/* 000199 */ 	var arg_content_nodes = (function () {
/* 000199 */ 		var __accu0__ = (function () {
/* 000199 */ 			var __accu1__ = argument_info;
/* 000199 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000199 */ 		}) ();
/* 000199 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000199 */ 	}) ();
/* 000202 */ 	return __ne__ (__call__ (len, null, arg_content_nodes), 0);
/* 000202 */ };
/* 000205 */ export var _ifargcmd_types = dict ({'IfNoValueTF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true', 'value_false'])]), 'IfNoValueT': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true'])]), 'IfNoValueF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_false'])]), 'IfBooleanTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfBooleanT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfBooleanF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'IfValueTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfValueT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfValueF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'ifblank': tuple ([_ifargcmd_condition_isempty, tuple (['value_true', 'value_false'])]), 'notblank': tuple ([_ifargcmd_condition_notempty, tuple (['value_true', 'value_false'])])});
/* 000254 */ export var _make_ifarg_arguments_spec_list = function (macroname, macro_content_substitutor) {
/* 000254 */ 	if (arguments.length) {
/* 000254 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 				switch (__attrib0__) {
/* 000254 */ 					case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 	}
/* 000254 */ 	else {
/* 000254 */ 	}
/* 000256 */ 	if (__t__ (!__in__ (macroname, _ifargcmd_types))) {
/* 000257 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid/unknown macro name for ifarg-type macro: {}'.format (macroname));
/* 000257 */ 		__except0__.__cause__ = null;
/* 000257 */ 		throw __except0__;
/* 000257 */ 	}
/* 000260 */ 	var args = [__call__ (_make_ifarg_argument_argspec, null, macro_content_substitutor)];
/* 000262 */ 	var __iterable0__ = __getitem__ (__getitem__ (_ifargcmd_types, macroname), 1);
/* 000262 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000262 */ 		var argname = __getitem__ (__iterable0__, __index0__);
/* 000263 */ 		(function () {
/* 000263 */ 			var __accu0__ = args;
/* 000264 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: argname})));
/* 000264 */ 		}) ();
/* 000264 */ 	}
/* 000269 */ 	return args;
/* 000269 */ };
/* 000272 */ export var _make_patched_callables = function (environment) {
/* 000272 */ 	if (arguments.length) {
/* 000272 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 				switch (__attrib0__) {
/* 000272 */ 					case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 	}
/* 000272 */ 	else {
/* 000272 */ 	}
/* 000273 */ 	var patched_callables = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000278 */ 	if (__t__ ((function () {
/* 000278 */ 		var __accu0__ = environment;
/* 000278 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'href');
/* 000278 */ 	}) ())) {
/* 000281 */ 		var href_feature = (function () {
/* 000281 */ 			var __accu0__ = environment;
/* 000281 */ 			return __call__ (__accu0__.feature, __accu0__, 'href');
/* 000281 */ 		}) ();
/* 000282 */ 		var HrefHyperlinkMacroClass = href_feature.HrefHyperlinkMacroClass;
/* 000292 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_Xhref', 'display_text'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_Xhref'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_Xemail'])}))]));
/* 000292 */ 	}
/* 000298 */ 	if (__t__ ((function () {
/* 000298 */ 		var __accu0__ = environment;
/* 000298 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000298 */ 	}) ())) {
/* 000299 */ 		var RefMacroCls = (function () {
/* 000299 */ 			var __accu0__ = environment;
/* 000299 */ 			return __call__ (__accu0__.feature, __accu0__, 'refs');
/* 000299 */ 		}) ().RefMacroCls;
/* 000305 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['Xref_label'])})), __call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]Xref_label', 'display_text'])}))]));
/* 000305 */ 	}
/* 000310 */ 	return patched_callables;
/* 000310 */ };
/* 000313 */ export var SimpleMacroContentIfArgCondition =  __class__ ('SimpleMacroContentIfArgCondition', [FLMMacroSpecBase], {
/* 000313 */ 	__module__: __name__,
/* 000315 */ 	allowed_in_standalone_mode: true,
/* 000317 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000322 */ 		var arguments_spec_list = __call__ (_make_ifarg_arguments_spec_list, null, macroname, macro_content_substitutor);
/* 000325 */ 		__call__ (__call__ (__super__, null, SimpleMacroContentIfArgCondition, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000327 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000327 */ 	});},
/* 000329 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000331 */ 		var node_args = (function () {
/* 000331 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000331 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['arg_ref', 'value_true', 'value_false']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000331 */ 		}) ();
/* 000336 */ 		var arg_ref_nodelist = (function () {
/* 000336 */ 			var __accu0__ = (function () {
/* 000336 */ 				var __accu1__ = __getitem__ (node_args, 'arg_ref');
/* 000336 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000336 */ 			}) ();
/* 000336 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000336 */ 		}) ();
/* 000341 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, arg_ref_nodelist), 1)) || !__t__ ((__call__ (hasattr, null, __getitem__ (arg_ref_nodelist, 0), 'flmarg_placeholder_ref'))))) {
/* 000344 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'First argument of \\{} must be a argument reference. Got = {}'.format (self.macroname, __call__ (repr, null, arg_ref_nodelist)), __kwargtrans__ ({pos: node.pos}));
/* 000344 */ 			__except0__.__cause__ = null;
/* 000344 */ 			throw __except0__;
/* 000344 */ 		}
/* 000348 */ 		var arg_ref_node = __getitem__ (arg_ref_nodelist, 0);
/* 000350 */ 		var placeholder_ref = arg_ref_node.flmarg_placeholder_ref;
/* 000352 */ 		if (__t__ ((function () {
/* 000352 */ 			var __accu0__ = arg_ref_node.flmarg_substitution_arg_info;
/* 000352 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000352 */ 		}) ())) {
/* 000356 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Cannot provide substitution placeholder optional arguments in argument of \\{}; got = {}.'.format (self.macroname, __call__ (repr, null, arg_ref_node.flmarg_substitution_arg_info)), __kwargtrans__ ({pos: node.pos}));
/* 000356 */ 			__except0__.__cause__ = null;
/* 000356 */ 			throw __except0__;
/* 000356 */ 		}
/* 000362 */ 		var argument_info = (function () {
/* 000362 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000362 */ 			return __call__ (__accu0__.get_parsed_argument_info, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: arg_ref_node}));
/* 000362 */ 		}) ();
/* 000367 */ 		var result_nodes = null;
/* 000369 */ 		var __left0__ = __getitem__ (_ifargcmd_types, self.macroname);
/* 000369 */ 		var condition_fn = __left0__ [0];
/* 000369 */ 		var _ = __left0__ [1];
/* 000371 */ 		if (__t__ (__call__ (condition_fn, null, argument_info))) {
/* 000372 */ 			if (__t__ (__in__ ('value_true', node_args))) {
/* 000373 */ 				var result_nodes = (function () {
/* 000373 */ 					var __accu0__ = __getitem__ (node_args, 'value_true');
/* 000373 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000373 */ 				}) ();
/* 000373 */ 			}
/* 000373 */ 		}
/* 000375 */ 		else if (__t__ (__in__ ('value_false', node_args))) {
/* 000376 */ 			var result_nodes = (function () {
/* 000376 */ 				var __accu0__ = __getitem__ (node_args, 'value_false');
/* 000376 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000376 */ 			}) ();
/* 000376 */ 		}
/* 000378 */ 		if (__t__ (result_nodes === null)) {
/* 000379 */ 			var result_nodes = (function () {
/* 000379 */ 				var __accu0__ = node.latex_walker;
/* 000379 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000379 */ 			}) ();
/* 000379 */ 		}
/* 000385 */ 		var substitute_node = (function () {
/* 000385 */ 			var __accu0__ = node.latex_walker;
/* 000385 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: node.parsing_state, delimiters: tuple (['', '']), nodelist: result_nodes, pos: result_nodes.pos, pos_end: result_nodes.pos_end}));
/* 000385 */ 		}) ();
/* 000394 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000394 */ 	});}
/* 000394 */ });
/* 000402 */ export var _get_arg_spec = function (argspec) {
/* 000402 */ 	if (arguments.length) {
/* 000402 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000402 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000402 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000402 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000402 */ 				switch (__attrib0__) {
/* 000402 */ 					case 'argspec': var argspec = __allkwargs0__ [__attrib0__]; break;
/* 000402 */ 				}
/* 000402 */ 			}
/* 000402 */ 		}
/* 000402 */ 	}
/* 000402 */ 	else {
/* 000402 */ 	}
/* 000403 */ 	var parser_val = null;
/* 000404 */ 	try {
/* 000405 */ 		var parser_val = __getitem__ (argspec, 'parser');
/* 000405 */ 	}
/* 000405 */ 	catch (__except0__) {
/* 000405 */ 		if (isinstance (__except0__, tuple ([py_TypeError, KeyError]))) {
/* 000410 */ 			// pass;
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 			throw __except0__;
/* 000410 */ 		}
/* 000410 */ 	}
/* 000411 */ 	if (__t__ (parser_val !== null)) {
/* 000412 */ 		if (__t__ (__eq__ (argspec, 'SetArgumentNumberOffset'))) {
/* 000413 */ 			return SetArgumentNumberOffset;
/* 000413 */ 		}
/* 000414 */ 		if (__t__ (__call__ (isinstance, null, argspec, str))) {
/* 000415 */ 			return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: argspec, argname: null}));
/* 000415 */ 		}
/* 000416 */ 		var argspecargs = __call__ (dict, null, argspec);
/* 000417 */ 		if (__t__ (!__in__ ('argname', argspecargs))) {
/* 000418 */ 			__setitem__ (argspecargs, 'argname', null);
/* 000418 */ 		}
/* 000419 */ 		return __call__ (FLMArgumentSpec, null, __kwargtrans__ (argspecargs));
/* 000419 */ 	}
/* 000420 */ 	return argspec;
/* 000420 */ };
/* 000427 */ export var MacroContentSubstitutor =  __class__ ('MacroContentSubstitutor', [object], {
/* 000427 */ 	__module__: __name__,
/* 000428 */ 	get __init__ () {return __get__ (this, function (self, substitutor_manager, callable_node, parsed_arguments_infos, argument_number_offset, default_argument_values) {
/* 000428 */ 		if (arguments.length) {
/* 000428 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000428 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000428 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000428 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000428 */ 					switch (__attrib0__) {
/* 000428 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'substitutor_manager': var substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000428 */ 					}
/* 000428 */ 				}
/* 000428 */ 			}
/* 000428 */ 		}
/* 000428 */ 		else {
/* 000428 */ 		}
/* 000435 */ 		if (__t__ (default_argument_values === null)) {
/* 000436 */ 			var default_argument_values = dict ({});
/* 000436 */ 		}
/* 000438 */ 		self.substitutor_manager = substitutor_manager;
/* 000439 */ 		self.callable_node = callable_node;
/* 000440 */ 		self.parsed_arguments_infos = parsed_arguments_infos;
/* 000441 */ 		self.default_argument_values = default_argument_values;
/* 000442 */ 		self.argument_number_offset = argument_number_offset;
/* 000444 */ 		self.num_arguments = 0;
/* 000445 */ 		self.argument_names = [];
/* 000446 */ 		var __iterable0__ = (function () {
/* 000446 */ 			var __accu0__ = self.parsed_arguments_infos;
/* 000446 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000446 */ 		}) ();
/* 000446 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000446 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000447 */ 			if (__t__ (__t__ (__call__ (isinstance, null, arg, int)) || (function () {
/* 000447 */ 				var __accu0__ = arg;
/* 000447 */ 				return __call__ (__accu0__.isdigit, __accu0__);
/* 000447 */ 			}) ())) {
/* 000448 */ 				if (__t__ (__ge__ (arg, self.num_arguments))) {
/* 000449 */ 					self.num_arguments = __add__ (__call__ (int, null, arg), 1);
/* 000449 */ 				}
/* 000449 */ 			}
/* 000450 */ 			else {
/* 000451 */ 				(function () {
/* 000451 */ 					var __accu0__ = self.argument_names;
/* 000451 */ 					return __call__ (__accu0__.append, __accu0__, arg);
/* 000451 */ 				}) ();
/* 000451 */ 			}
/* 000451 */ 		}
/* 000453 */ 		var ifmacros = (function () {
/* 000453 */ 			var __accu0__ = [];
/* 000458 */ 			var __iterable0__ = (function () {
/* 000458 */ 				var __accu1__ = _ifargcmd_types;
/* 000458 */ 				return __call__ (__accu1__.py_keys, __accu1__);
/* 000458 */ 			}) ();
/* 000458 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000458 */ 				var ifmacroname = __getitem__ (__iterable0__, __index0__);
/* 000458 */ 				(function () {
/* 000458 */ 					var __accu1__ = __accu0__;
/* 000454 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SimpleMacroContentIfArgCondition, null, __kwargtrans__ ({macroname: ifmacroname, macro_content_substitutor: self})));
/* 000454 */ 				}) ();
/* 000454 */ 			}
/* 000454 */ 			return __accu0__;
/* 000454 */ 		}) ();
/* 000464 */ 		self.macro_content_parsing_state_delta = __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: self}))], 'macros': ifmacros}), set_attributes: dict ({'is_block_level': null})}));
/* 000477 */ 		if (__t__ (self.callable_node.nodeargd !== null)) {
/* 000478 */ 			var arguments_spec_list = self.callable_node.nodeargd.arguments_spec_list;
/* 000479 */ 			if (__t__ (arguments_spec_list)) {
/* 000480 */ 				var __iterable0__ = __call__ (enumerate, null, arguments_spec_list);
/* 000480 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000480 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000480 */ 					var j = __left0__ [0];
/* 000480 */ 					var arg_spec = __left0__ [1];
/* 000481 */ 					if (__t__ (__eq__ (arg_spec.argname, '_SetArgumentNumberOffset'))) {
/* 000482 */ 						// pass;
/* 000487 */ 						self.argument_number_offset = __add__ (j, 1);
/* 000487 */ 						break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 	});},
/* 000492 */ 	get initialize () {return __get__ (this, function (self) {
/* 000492 */ 		if (arguments.length) {
/* 000492 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000492 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000492 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000492 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000492 */ 					switch (__attrib0__) {
/* 000492 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000492 */ 					}
/* 000492 */ 				}
/* 000492 */ 			}
/* 000492 */ 		}
/* 000492 */ 		else {
/* 000492 */ 		}
/* 000496 */ 		// pass;
/* 000496 */ 	});},
/* 000500 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node, substitution_arg_info) {
/* 000500 */ 		if (arguments.length) {
/* 000500 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 					switch (__attrib0__) {
/* 000500 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 			}
/* 000500 */ 		}
/* 000500 */ 		else {
/* 000500 */ 		}
/* 000502 */ 		var value = (function () {
/* 000502 */ 			var __accu0__ = self.substitutor_manager;
/* 000502 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: self.callable_node, macro_content_substitutor: self}));
/* 000502 */ 		}) ();
/* 000509 */ 		if (__t__ (value !== null)) {
/* 000510 */ 			return value;
/* 000510 */ 		}
/* 000512 */ 		if (__t__ (__eq__ (placeholder_ref, 'body'))) {
/* 000514 */ 			return self.callable_node.nodelist;
/* 000514 */ 		}
/* 000516 */ 		var arg_value = (function () {
/* 000516 */ 			var __accu0__ = self;
/* 000516 */ 			return __call__ (__accu0__.get_argument_placeholder_value, __accu0__, placeholder_ref, placeholder_node);
/* 000516 */ 		}) ();
/* 000518 */ 		if (__t__ (arg_value !== null)) {
/* 000519 */ 			return arg_value;
/* 000519 */ 		}
/* 000521 */ 		var __except0__ = __call__ (ValueError, null, (function () {
/* 000521 */ 			var __accu0__ = 'Invalid callable argument placeholder reference: ‘{}’';
/* 000521 */ 			return __call__ (__accu0__.format, __accu0__, placeholder_ref);
/* 000521 */ 		}) ());
/* 000521 */ 		__except0__.__cause__ = null;
/* 000521 */ 		throw __except0__;
/* 000521 */ 	});},
/* 000527 */ 	get get_argument_key () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000527 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000527 */ 			var placeholder_node = null;
/* 000527 */ 		};
/* 000527 */ 		if (arguments.length) {
/* 000527 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000527 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000527 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000527 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000527 */ 					switch (__attrib0__) {
/* 000527 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000527 */ 					}
/* 000527 */ 				}
/* 000527 */ 			}
/* 000527 */ 		}
/* 000527 */ 		else {
/* 000527 */ 		}
/* 000529 */ 		var argument_key = null;
/* 000530 */ 		if (__t__ (__t__ (placeholder_ref) && (function () {
/* 000530 */ 			var __accu0__ = placeholder_ref;
/* 000530 */ 			return __call__ (__accu0__.isdigit, __accu0__);
/* 000530 */ 		}) ())) {
/* 000532 */ 			var argument_key = __sub__ (__call__ (int, null, placeholder_ref), 1);
/* 000533 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000534 */ 				var argument_key = __call__ (__iadd__, null, argument_key, self.argument_number_offset);
/* 000534 */ 			}
/* 000536 */ 			if (__t__ (__t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, self.num_arguments))) {
/* 000537 */ 				var expected_what = null;
/* 000538 */ 				if (__t__ (__eq__ (self.num_arguments, 0))) {
/* 000539 */ 					var expected_what = 'The callable accepts no numbered arguments';
/* 000539 */ 				}
/* 000540 */ 				else {
/* 000541 */ 					var expected_what = 'Expected a number between 1 and {} (incl.)'.format (self.num_arguments);
/* 000541 */ 				}
/* 000543 */ 				var e = __call__ (LatexWalkerLocatedError, null, 'Invalid argument number: ‘{}’.  {}'.format (placeholder_ref, expected_what), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000547 */ 				(function () {
/* 000547 */ 					var __accu0__ = e;
/* 000547 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000547 */ 				}) ();
/* 000548 */ 				var __except0__ = e;
/* 000548 */ 				__except0__.__cause__ = null;
/* 000548 */ 				throw __except0__;
/* 000548 */ 			}
/* 000548 */ 		}
/* 000549 */ 		else {
/* 000550 */ 			var argument_key = placeholder_ref;
/* 000550 */ 		}
/* 000556 */ 		if (__t__ (!__in__ (argument_key, self.parsed_arguments_infos))) {
/* 000557 */ 			var lastnum = self.num_arguments;
/* 000558 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000559 */ 				var lastnum = __call__ (__isub__, null, lastnum, self.argument_number_offset);
/* 000559 */ 			}
/* 000560 */ 			var valid_arg_specs = 'numbers 1–{}'.format (__sub__ (self.num_arguments, self.argument_number_offset));
/* 000561 */ 			if (__t__ (__call__ (len, null, self.argument_names))) {
/* 000563 */ 				var valid_arg_specs = __add__ (__add__ ((function () {
/* 000563 */ 					var __accu0__ = ',';
/* 000563 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000563 */ 						var __accu1__ = [];
/* 000563 */ 						var __iterable0__ = self.argument_names;
/* 000563 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000563 */ 							var argname = __getitem__ (__iterable0__, __index0__);
/* 000563 */ 							(function () {
/* 000563 */ 								var __accu2__ = __accu1__;
/* 000563 */ 								return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (argname));
/* 000563 */ 							}) ();
/* 000563 */ 						}
/* 000563 */ 						return __accu1__;
/* 000563 */ 					}) ());
/* 000563 */ 				}) (), ' and '), valid_arg_specs);
/* 000563 */ 			}
/* 000566 */ 			var e = __call__ (LatexWalkerLocatedError, null, __add__ ('Invalid argument name or index: ‘{}’.  Valid argument '.format (placeholder_ref), 'specifiers are {}'.format (valid_arg_specs)), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000571 */ 			(function () {
/* 000571 */ 				var __accu0__ = e;
/* 000571 */ 				return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000571 */ 			}) ();
/* 000572 */ 			var __except0__ = e;
/* 000572 */ 			__except0__.__cause__ = null;
/* 000572 */ 			throw __except0__;
/* 000572 */ 		}
/* 000574 */ 		return argument_key;
/* 000574 */ 	});},
/* 000577 */ 	get get_parsed_argument_info () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000577 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000577 */ 			var placeholder_node = null;
/* 000577 */ 		};
/* 000577 */ 		if (arguments.length) {
/* 000577 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000577 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000577 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000577 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000577 */ 					switch (__attrib0__) {
/* 000577 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000577 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000577 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000577 */ 					}
/* 000577 */ 				}
/* 000577 */ 			}
/* 000577 */ 		}
/* 000577 */ 		else {
/* 000577 */ 		}
/* 000579 */ 		var argument_key = (function () {
/* 000579 */ 			var __accu0__ = self;
/* 000579 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000579 */ 		}) ();
/* 000581 */ 		return __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000581 */ 	});},
/* 000584 */ 	get get_argument_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000584 */ 		if (arguments.length) {
/* 000584 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000584 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000584 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000584 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000584 */ 					switch (__attrib0__) {
/* 000584 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000584 */ 					}
/* 000584 */ 				}
/* 000584 */ 			}
/* 000584 */ 		}
/* 000584 */ 		else {
/* 000584 */ 		}
/* 000586 */ 		var argument_key = (function () {
/* 000586 */ 			var __accu0__ = self;
/* 000586 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000586 */ 		}) ();
/* 000588 */ 		var nodelist = (function () {
/* 000588 */ 			var __accu0__ = __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000588 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000588 */ 		}) ();
/* 000590 */ 		var use_default = false;
/* 000591 */ 		if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000592 */ 			var nodelist = [];
/* 000593 */ 			var use_default = true;
/* 000593 */ 		}
/* 000595 */ 		if (__t__ (use_default)) {
/* 000596 */ 			var nodelist = (function () {
/* 000596 */ 				var __accu0__ = self;
/* 000596 */ 				return __call__ (__accu0__.get_default_argument_value_nodelist, __accu0__, argument_key, __kwargtrans__ ({placeholder_node: placeholder_node}));
/* 000596 */ 			}) ();
/* 000600 */ 			if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000601 */ 				var nodelist = [];
/* 000601 */ 			}
/* 000601 */ 		}
/* 000603 */ 		return nodelist;
/* 000603 */ 	});},
/* 000606 */ 	get get_default_argument_value_flm_text () {return __get__ (this, function (self, argument_key) {
/* 000606 */ 		if (arguments.length) {
/* 000606 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000606 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000606 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000606 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000606 */ 					switch (__attrib0__) {
/* 000606 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000606 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000606 */ 					}
/* 000606 */ 				}
/* 000606 */ 			}
/* 000606 */ 		}
/* 000606 */ 		else {
/* 000606 */ 		}
/* 000608 */ 		var argument_ref_user = null;
/* 000610 */ 		var node = self.callable_node;
/* 000612 */ 		if (__t__ (__call__ (isinstance, null, argument_key, int))) {
/* 000614 */ 			var argument_ref_user = __add__ (argument_key, 1);
/* 000615 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000616 */ 				var argument_key = __call__ (__isub__, null, argument_key, self.argument_number_offset);
/* 000616 */ 			}
/* 000618 */ 			if (__t__ (__in__ (argument_ref_user, self.default_argument_values))) {
/* 000620 */ 				return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000620 */ 			}
/* 000625 */ 			if (__t__ (__t__ (node.nodeargd === null) || __t__ (node.nodeargd.arguments_spec_list === null) || __t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, __call__ (len, null, node.nodeargd.arguments_spec_list)))) {
/* 000627 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000627 */ 					var __accu0__ = 'Unexpected invalid argument_key={} for node={}';
/* 000628 */ 					return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000628 */ 				}) ());
/* 000628 */ 				__except0__.__cause__ = null;
/* 000628 */ 				throw __except0__;
/* 000628 */ 			}
/* 000632 */ 			var argname = __getitem__ (node.nodeargd.arguments_spec_list, argument_key).argname;
/* 000633 */ 			if (__t__ (__t__ (!__t__ ((argname))) || !__in__ (argname, self.default_argument_values))) {
/* 000635 */ 				return null;
/* 000635 */ 			}
/* 000638 */ 			var argument_ref_user = argname;
/* 000639 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000639 */ 		}
/* 000643 */ 		if (__t__ (__in__ (argument_key, self.default_argument_values))) {
/* 000645 */ 			var argument_ref_user = argument_key;
/* 000646 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000646 */ 		}
/* 000649 */ 		if (__t__ (__t__ (node.nodeargd === null) || node.nodeargd.arguments_spec_list === null)) {
/* 000650 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000650 */ 				var __accu0__ = 'Unexpected invalid node arguments for node={}';
/* 000651 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, node));
/* 000651 */ 			}) ());
/* 000651 */ 			__except0__.__cause__ = null;
/* 000651 */ 			throw __except0__;
/* 000651 */ 		}
/* 000652 */ 		var __break0__ = false;
/* 000652 */ 		var __iterable0__ = __call__ (enumerate, null, node.nodeargd.arguments_spec_list);
/* 000652 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000652 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000652 */ 			var arg_j = __left0__ [0];
/* 000652 */ 			var arg_spec = __left0__ [1];
/* 000653 */ 			if (__t__ (__eq__ (arg_spec.argname, argument_key))) {
/* 000653 */ 				__break0__ = true;
/* 000653 */ 				break;
/* 000653 */ 			}
/* 000653 */ 		}
/* 000655 */ 		if (!__break0__) {
/* 000656 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000656 */ 				var __accu0__ = 'Unexpected invalid argument argname={} for node={}';
/* 000657 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000657 */ 			}) ());
/* 000657 */ 			__except0__.__cause__ = null;
/* 000657 */ 			throw __except0__;
/* 000657 */ 		}
/* 000659 */ 		var argument_ref_user = __add__ (arg_j, 1);
/* 000660 */ 		if (__t__ (self.argument_number_offset !== null)) {
/* 000661 */ 			var argument_ref_user = __call__ (__isub__, null, argument_ref_user, self.argument_number_offset);
/* 000661 */ 		}
/* 000662 */ 		if (__t__ (!__in__ (argument_ref_user, self.default_argument_values))) {
/* 000664 */ 			return null;
/* 000664 */ 		}
/* 000667 */ 		return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000667 */ 	});},
/* 000669 */ 	get get_default_argument_value_nodelist () {return __get__ (this, function (self, argument_key, placeholder_node) {
/* 000669 */ 		if (arguments.length) {
/* 000669 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000669 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000669 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000669 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000669 */ 					switch (__attrib0__) {
/* 000669 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000669 */ 					}
/* 000669 */ 				}
/* 000669 */ 			}
/* 000669 */ 		}
/* 000669 */ 		else {
/* 000669 */ 		}
/* 000671 */ 		var is_block_level = placeholder_node.parsing_state.is_block_level;
/* 000673 */ 		var default_arg_flm_text = (function () {
/* 000673 */ 			var __accu0__ = self;
/* 000673 */ 			return __call__ (__accu0__.get_default_argument_value_flm_text, __accu0__, argument_key);
/* 000673 */ 		}) ();
/* 000675 */ 		if (__t__ (default_arg_flm_text === null)) {
/* 000676 */ 			return [];
/* 000676 */ 		}
/* 000678 */ 		return (function () {
/* 000678 */ 			var __accu0__ = self;
/* 000678 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, default_arg_flm_text, __kwargtrans__ ({add_what: 'default ‘{}’'.format (argument_key), is_block_level: is_block_level}));
/* 000678 */ 		}) ();
/* 000678 */ 	});},
/* 000687 */ 	get compile_flm_text () {return __get__ (this, function (self, flm_text, add_what, is_block_level, parsing_state_delta) {
/* 000687 */ 		if (typeof add_what == 'undefined' || (add_what != null && add_what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var add_what = null;
/* 000687 */ 		};
/* 000687 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var is_block_level = null;
/* 000687 */ 		};
/* 000687 */ 		if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var parsing_state_delta = null;
/* 000687 */ 		};
/* 000687 */ 		if (arguments.length) {
/* 000687 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000687 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000687 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000687 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000687 */ 					switch (__attrib0__) {
/* 000687 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'add_what': var add_what = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 					}
/* 000687 */ 				}
/* 000687 */ 			}
/* 000687 */ 		}
/* 000687 */ 		else {
/* 000687 */ 		}
/* 000690 */ 		var mc_parsing_state_delta = self.macro_content_parsing_state_delta;
/* 000691 */ 		var callable_node = self.callable_node;
/* 000692 */ 		var base_latex_walker = callable_node.latex_walker;
/* 000693 */ 		var flm_environment = base_latex_walker.flm_environment;
/* 000695 */ 		var what = '{}→{}'.format (base_latex_walker.what, (function () {
/* 000695 */ 			var __accu0__ = self.substitutor_manager.spec_object;
/* 000695 */ 			return __call__ (__accu0__.get_what, __accu0__);
/* 000695 */ 		}) ());
/* 000696 */ 		if (__t__ (add_what)) {
/* 000697 */ 			var what = __call__ (__iadd__, null, what, '[{}]'.format (add_what));
/* 000697 */ 		}
/* 000699 */ 		var patched_callables = __call__ (_make_patched_callables, null, flm_environment);
/* 000701 */ 		if (__t__ (__in__ ('macros', patched_callables))) {
/* 000702 */ 			if (__t__ (!__in__ ('macros', mc_parsing_state_delta.extend_latex_context))) {
/* 000703 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', []);
/* 000703 */ 			}
/* 000704 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'macros'), __getitem__ (patched_callables, 'macros')));
/* 000704 */ 		}
/* 000707 */ 		if (__t__ (__in__ ('environments', patched_callables))) {
/* 000708 */ 			if (__t__ (!__in__ ('environments', mc_parsing_state_delta.extend_latex_context))) {
/* 000709 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', []);
/* 000709 */ 			}
/* 000710 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'environments'), __getitem__ (patched_callables, 'environments')));
/* 000710 */ 		}
/* 000713 */ 		if (__t__ (__in__ ('specials', patched_callables))) {
/* 000714 */ 			if (__t__ (!__in__ ('specials', mc_parsing_state_delta.extend_latex_context))) {
/* 000715 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', []);
/* 000715 */ 			}
/* 000716 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'specials'), __getitem__ (patched_callables, 'specials')));
/* 000716 */ 		}
/* 000725 */ 		var content_latex_walker = (function () {
/* 000725 */ 			var __accu0__ = flm_environment;
/* 000725 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: base_latex_walker.parsing_mode, resource_info: base_latex_walker.resource_info, standalone_mode: base_latex_walker.standalone_mode, tolerant_parsing: base_latex_walker.tolerant_parsing, what: what, input_lineno_colno_offsets: null}));
/* 000725 */ 		}) ();
/* 000736 */ 		var content_parsing_state = (function () {
/* 000736 */ 			var __accu0__ = mc_parsing_state_delta;
/* 000736 */ 			return __call__ (__accu0__.get_updated_parsing_state, __accu0__, callable_node.parsing_state, content_latex_walker);
/* 000736 */ 		}) ();
/* 000740 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000741 */ 			var content_parsing_state = (function () {
/* 000741 */ 				var __accu0__ = parsing_state_delta;
/* 000741 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, content_parsing_state, content_latex_walker);
/* 000741 */ 			}) ();
/* 000741 */ 		}
/* 000746 */ 		var __left0__ = (function () {
/* 000746 */ 			var __accu0__ = content_latex_walker;
/* 000747 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000747 */ 				var __accu1__ = latexnodes_parsers;
/* 000747 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000747 */ 			}) (), __kwargtrans__ ({parsing_state: content_parsing_state}));
/* 000747 */ 		}) ();
/* 000747 */ 		var nodes = __left0__ [0];
/* 000747 */ 		var newpsdelta = __left0__ [1];
/* 000750 */ 		if (__t__ (newpsdelta !== null)) {
/* 000751 */ 			(function () {
/* 000751 */ 				var __accu0__ = logger;
/* 000751 */ 				return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing state delta from compiling substitution nodes {}'.format (what));
/* 000751 */ 			}) ();
/* 000751 */ 		}
/* 000755 */ 		return nodes;
/* 000755 */ 	});}
/* 000755 */ });
/* 000761 */ export var MacroContentSubstitutorManager =  __class__ ('MacroContentSubstitutorManager', [object], {
/* 000761 */ 	__module__: __name__,
/* 000763 */ 	MacroContentSubstitutorClass: MacroContentSubstitutor,
/* 000765 */ 	get __init__ () {return __get__ (this, function (self, spec_object, argument_number_offset, default_argument_values) {
/* 000765 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000765 */ 			var argument_number_offset = null;
/* 000765 */ 		};
/* 000765 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000765 */ 			var default_argument_values = null;
/* 000765 */ 		};
/* 000765 */ 		if (arguments.length) {
/* 000765 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000765 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000765 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000765 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000765 */ 					switch (__attrib0__) {
/* 000765 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 						case 'spec_object': var spec_object = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000765 */ 					}
/* 000765 */ 				}
/* 000765 */ 			}
/* 000765 */ 		}
/* 000765 */ 		else {
/* 000765 */ 		}
/* 000770 */ 		__call__ (__call__ (__super__, null, MacroContentSubstitutorManager, '__init__'), null, self);
/* 000771 */ 		self.spec_object = spec_object;
/* 000772 */ 		self.argument_number_offset = argument_number_offset;
/* 000773 */ 		self.default_argument_values = default_argument_values;
/* 000773 */ 	});},
/* 000775 */ 	get make_macro_content_substitutor () {return __get__ (this, function (self, callable_node) {
/* 000775 */ 		if (arguments.length) {
/* 000775 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000775 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000775 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000775 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000775 */ 					switch (__attrib0__) {
/* 000775 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000775 */ 					}
/* 000775 */ 				}
/* 000775 */ 			}
/* 000775 */ 		}
/* 000775 */ 		else {
/* 000775 */ 		}
/* 000778 */ 		var parsed_arguments_infos = (function () {
/* 000778 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: callable_node}));
/* 000778 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__);
/* 000778 */ 		}) ();
/* 000780 */ 		var parsed_arguments_infos = (function () {
/* 000780 */ 			var __accu0__ = self;
/* 000780 */ 			return __call__ (__accu0__.filter_parsed_arguments_infos, __accu0__, parsed_arguments_infos, callable_node);
/* 000780 */ 		}) ();
/* 000785 */ 		return (function () {
/* 000785 */ 			var __accu0__ = self;
/* 000785 */ 			return __call__ (__accu0__.MacroContentSubstitutorClass, __accu0__, __kwargtrans__ ({substitutor_manager: self, callable_node: callable_node, parsed_arguments_infos: parsed_arguments_infos, argument_number_offset: self.argument_number_offset, default_argument_values: self.default_argument_values}));
/* 000785 */ 		}) ();
/* 000785 */ 	});},
/* 000793 */ 	get filter_parsed_arguments_infos () {return __get__ (this, function (self, parsed_arguments_infos, callable_node) {
/* 000793 */ 		if (arguments.length) {
/* 000793 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000793 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000793 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000793 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000793 */ 					switch (__attrib0__) {
/* 000793 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000793 */ 					}
/* 000793 */ 				}
/* 000793 */ 			}
/* 000793 */ 		}
/* 000793 */ 		else {
/* 000793 */ 		}
/* 000794 */ 		return parsed_arguments_infos;
/* 000794 */ 	});},
/* 000796 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000796 */ 		if (arguments.length) {
/* 000796 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000796 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000796 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000796 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000796 */ 					switch (__attrib0__) {
/* 000796 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000796 */ 					}
/* 000796 */ 				}
/* 000796 */ 			}
/* 000796 */ 		}
/* 000796 */ 		else {
/* 000796 */ 		}
/* 000806 */ 		return (function () {
/* 000806 */ 			var __accu0__ = self.spec_object;
/* 000806 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, __kwargtrans__ ({placeholder_ref: placeholder_ref, placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: callable_node, macro_content_substitutor: macro_content_substitutor}));
/* 000806 */ 		}) ();
/* 000806 */ 	});}
/* 000806 */ });
/* 000820 */ export var SubstitutionCallableSpecInfo =  __class__ ('SubstitutionCallableSpecInfo', [FLMSpecInfo], {
/* 000820 */ 	__module__: __name__,
/* 000850 */ 	allowed_in_standalone_mode: true,
/* 000852 */ 	MacroContentSubstitutorManagerClass: MacroContentSubstitutorManager,
/* 000854 */ 	get __init__ () {return __get__ (this, function (self, spec_node_parser_type, arguments_spec_list, default_argument_values, argument_number_offset, content, is_block_level, macro_content_substitutor_manager, render_time_substitution) {
/* 000854 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var arguments_spec_list = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var default_argument_values = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var argument_number_offset = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof content == 'undefined' || (content != null && content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var content = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var is_block_level = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof macro_content_substitutor_manager == 'undefined' || (macro_content_substitutor_manager != null && macro_content_substitutor_manager.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var macro_content_substitutor_manager = null;
/* 000854 */ 		};
/* 000854 */ 		if (typeof render_time_substitution == 'undefined' || (render_time_substitution != null && render_time_substitution.hasOwnProperty ("__kwargtrans__"))) {;
/* 000854 */ 			var render_time_substitution = false;
/* 000854 */ 		};
/* 000854 */ 		var kwargs = dict ();
/* 000854 */ 		if (arguments.length) {
/* 000854 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000854 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000854 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000854 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000854 */ 					switch (__attrib0__) {
/* 000854 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'macro_content_substitutor_manager': var macro_content_substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						case 'render_time_substitution': var render_time_substitution = __allkwargs0__ [__attrib0__]; break;
/* 000854 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000854 */ 					}
/* 000854 */ 				}
/* 000854 */ 				delete kwargs.__kwargtrans__;
/* 000854 */ 			}
/* 000854 */ 		}
/* 000854 */ 		else {
/* 000854 */ 		}
/* 000867 */ 		if (__t__ (__t__ (arguments_spec_list !== null) && __call__ (len, null, arguments_spec_list))) {
/* 000868 */ 			var arguments_spec_list = (function () {
/* 000868 */ 				var __accu0__ = [];
/* 000868 */ 				var __iterable0__ = arguments_spec_list;
/* 000868 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000868 */ 					var arg = __getitem__ (__iterable0__, __index0__);
/* 000868 */ 					(function () {
/* 000868 */ 						var __accu1__ = __accu0__;
/* 000868 */ 						return __call__ (__accu1__.append, __accu1__, __call__ (_get_arg_spec, null, arg));
/* 000868 */ 					}) ();
/* 000868 */ 				}
/* 000868 */ 				return __accu0__;
/* 000868 */ 			}) ();
/* 000868 */ 		}
/* 000870 */ 		__call__ (__call__ (__super__, null, SubstitutionCallableSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({spec_node_parser_type: spec_node_parser_type, arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000876 */ 		if (__t__ (macro_content_substitutor_manager === null)) {
/* 000877 */ 			var macro_content_substitutor_manager = (function () {
/* 000877 */ 				var __accu0__ = self;
/* 000877 */ 				return __call__ (__accu0__.MacroContentSubstitutorManagerClass, __accu0__, __kwargtrans__ ({spec_object: self, default_argument_values: default_argument_values, argument_number_offset: argument_number_offset}));
/* 000877 */ 			}) ();
/* 000877 */ 		}
/* 000881 */ 		else {
/* 000883 */ 			if (__t__ (default_argument_values !== null)) {
/* 000884 */ 				(function () {
/* 000884 */ 					var __accu0__ = logger;
/* 000884 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `default_argument_values` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000884 */ 				}) ();
/* 000884 */ 			}
/* 000889 */ 			if (__t__ (argument_number_offset !== null)) {
/* 000890 */ 				(function () {
/* 000890 */ 					var __accu0__ = logger;
/* 000890 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `argument_number_offset` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000890 */ 				}) ();
/* 000890 */ 			}
/* 000890 */ 		}
/* 000896 */ 		self.macro_content_substitutor_manager = macro_content_substitutor_manager;
/* 000898 */ 		if (__t__ (content === null)) {
/* 000899 */ 			var content = '';
/* 000899 */ 		}
/* 000901 */ 		self.content_textmode = null;
/* 000902 */ 		self.content_mathmode = null;
/* 000903 */ 		if (__t__ (__call__ (isinstance, null, content, str))) {
/* 000904 */ 			self.content_textmode = content;
/* 000905 */ 			self.content_mathmode = content;
/* 000905 */ 		}
/* 000906 */ 		else {
/* 000907 */ 			if (__t__ (__in__ ('textmode', content))) {
/* 000908 */ 				self.content_textmode = __getitem__ (content, 'textmode');
/* 000908 */ 			}
/* 000909 */ 			if (__t__ (__in__ ('mathmode', content))) {
/* 000910 */ 				self.content_mathmode = __getitem__ (content, 'mathmode');
/* 000910 */ 			}
/* 000910 */ 		}
/* 000912 */ 		self.render_time_substitution = render_time_substitution;
/* 000914 */ 		// pass;
/* 000914 */ 	});},
/* 000922 */ 	get get_what () {return __get__ (this, function (self) {
/* 000922 */ 		if (arguments.length) {
/* 000922 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000922 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000922 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000922 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000922 */ 					switch (__attrib0__) {
/* 000922 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000922 */ 					}
/* 000922 */ 				}
/* 000922 */ 			}
/* 000922 */ 		}
/* 000922 */ 		else {
/* 000922 */ 		}
/* 000923 */ 		if (__t__ (__call__ (hasattr, null, self, 'macroname'))) {
/* 000924 */ 			return __add__ (__add__ ('“\\', __call__ (str, null, self.macroname)), '”');
/* 000924 */ 		}
/* 000925 */ 		else if (__t__ (__call__ (hasattr, null, self, 'environmentname'))) {
/* 000926 */ 			return __add__ (__add__ ('“\\begin{', __call__ (str, null, self.environmentname)), '}...\\end{..}”');
/* 000926 */ 		}
/* 000927 */ 		else if (__t__ (__call__ (hasattr, null, self, 'specials_chars'))) {
/* 000928 */ 			return __add__ (__add__ ('“', __call__ (str, null, self.specials_chars)), '”');
/* 000928 */ 		}
/* 000929 */ 		return '(?callable?)';
/* 000929 */ 	});},
/* 000932 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000932 */ 		if (arguments.length) {
/* 000932 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000932 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000932 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000932 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000932 */ 					switch (__attrib0__) {
/* 000932 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000932 */ 					}
/* 000932 */ 				}
/* 000932 */ 			}
/* 000932 */ 		}
/* 000932 */ 		else {
/* 000932 */ 		}
/* 000934 */ 		// pass;
/* 000938 */ 		if (__t__ (node.parsing_state.in_math_mode)) {
/* 000939 */ 			var macro_replacement_flm_text = self.content_mathmode;
/* 000939 */ 		}
/* 000940 */ 		else {
/* 000941 */ 			var macro_replacement_flm_text = self.content_textmode;
/* 000941 */ 		}
/* 000943 */ 		if (__t__ (macro_replacement_flm_text === null)) {
/* 000944 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('Custom macro ‘\\{}’ not allowed here (replacement is None in '.format (self.macroname), (__t__ (node.parsing_state.in_math_mode) ? 'math' : 'text')), ' mode).'), __kwargtrans__ ({pos: node.pos}));
/* 000944 */ 			__except0__.__cause__ = null;
/* 000944 */ 			throw __except0__;
/* 000944 */ 		}
/* 000951 */ 		node.flm_macro_replacement_flm_text = macro_replacement_flm_text;
/* 000953 */ 		var substitute_nodelist = (function () {
/* 000953 */ 			var __accu0__ = self;
/* 000953 */ 			return __call__ (__accu0__.compile_subst_nodes, __accu0__, node);
/* 000953 */ 		}) ();
/* 000955 */ 		node.flm_macro_replacement_flm_nodes = substitute_nodelist;
/* 000957 */ 		var substitute_nodelist_parsing_state = substitute_nodelist.parsing_state;
/* 000959 */ 		var substitute_node = (function () {
/* 000959 */ 			var __accu0__ = node.latex_walker;
/* 000959 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: substitute_nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: substitute_nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 000959 */ 		}) ();
/* 000968 */ 		node.flm_macro_replacement_flm_group_node = substitute_node;
/* 000970 */ 		if (__t__ (self.render_time_substitution)) {
/* 000971 */ 			// pass;
/* 000974 */ 			return ;
/* 000974 */ 		}
/* 000976 */ 		// pass;
/* 000979 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000979 */ 	});},
/* 000982 */ 	get compile_subst_nodes () {return __get__ (this, function (self, node) {
/* 000982 */ 		if (arguments.length) {
/* 000982 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000982 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000982 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000982 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000982 */ 					switch (__attrib0__) {
/* 000982 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000982 */ 					}
/* 000982 */ 				}
/* 000982 */ 			}
/* 000982 */ 		}
/* 000982 */ 		else {
/* 000982 */ 		}
/* 000990 */ 		var macro_replacement_flm_text = node.flm_macro_replacement_flm_text;
/* 000993 */ 		var macro_content_substitutor = (function () {
/* 000993 */ 			var __accu0__ = self.macro_content_substitutor_manager;
/* 000993 */ 			return __call__ (__accu0__.make_macro_content_substitutor, __accu0__, __kwargtrans__ ({callable_node: node}));
/* 000993 */ 		}) ();
/* 000997 */ 		(function () {
/* 000997 */ 			var __accu0__ = macro_content_substitutor;
/* 000997 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000997 */ 		}) ();
/* 000999 */ 		var nodes = (function () {
/* 000999 */ 			var __accu0__ = macro_content_substitutor;
/* 000999 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, macro_replacement_flm_text);
/* 000999 */ 		}) ();
/* 001003 */ 		return nodes;
/* 001003 */ 	});},
/* 001006 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 001006 */ 		if (arguments.length) {
/* 001006 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001006 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001006 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001006 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001006 */ 					switch (__attrib0__) {
/* 001006 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 001006 */ 					}
/* 001006 */ 				}
/* 001006 */ 			}
/* 001006 */ 		}
/* 001006 */ 		else {
/* 001006 */ 		}
/* 001016 */ 		return null;
/* 001016 */ 	});},
/* 001019 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 001019 */ 		if (arguments.length) {
/* 001019 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001019 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001019 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001019 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001019 */ 					switch (__attrib0__) {
/* 001019 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 001019 */ 					}
/* 001019 */ 				}
/* 001019 */ 			}
/* 001019 */ 		}
/* 001019 */ 		else {
/* 001019 */ 		}
/* 001021 */ 		if (__t__ (!__t__ ((self.render_time_substitution)))) {
/* 001022 */ 			(function () {
/* 001022 */ 				var __accu0__ = logger;
/* 001022 */ 				return __call__ (__accu0__.error, __accu0__, 'Rendering substitution macro node that should have been substituted in node tree!');
/* 001022 */ 			}) ();
/* 001022 */ 		}
/* 001027 */ 		// pass;
/* 001031 */ 		return (function () {
/* 001031 */ 			var __accu0__ = render_context.fragment_renderer;
/* 001031 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.flm_macro_replacement_flm_nodes, render_context);
/* 001031 */ 		}) ();
/* 001031 */ 	});}
/* 001031 */ });
/* 001038 */ export var SubstitutionMacro =  __class__ ('SubstitutionMacro', [SubstitutionCallableSpecInfo], {
/* 001038 */ 	__module__: __name__,
/* 001039 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 001039 */ 		var kwargs = dict ();
/* 001039 */ 		if (arguments.length) {
/* 001039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001039 */ 					switch (__attrib0__) {
/* 001039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 001039 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001039 */ 					}
/* 001039 */ 				}
/* 001039 */ 				delete kwargs.__kwargtrans__;
/* 001039 */ 			}
/* 001039 */ 		}
/* 001039 */ 		else {
/* 001039 */ 		}
/* 001040 */ 		__call__ (__call__ (__super__, null, SubstitutionMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 001040 */ 	});}
/* 001040 */ });
/* 001047 */ export var SubstitutionEnvironment =  __class__ ('SubstitutionEnvironment', [SubstitutionCallableSpecInfo], {
/* 001047 */ 	__module__: __name__,
/* 001048 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 001048 */ 		var kwargs = dict ();
/* 001048 */ 		if (arguments.length) {
/* 001048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001048 */ 					switch (__attrib0__) {
/* 001048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001048 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 001048 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001048 */ 					}
/* 001048 */ 				}
/* 001048 */ 				delete kwargs.__kwargtrans__;
/* 001048 */ 			}
/* 001048 */ 		}
/* 001048 */ 		else {
/* 001048 */ 		}
/* 001049 */ 		__call__ (__call__ (__super__, null, SubstitutionEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 001049 */ 	});}
/* 001049 */ });
/* 001057 */ export var SubstitutionSpecials =  __class__ ('SubstitutionSpecials', [SubstitutionCallableSpecInfo], {
/* 001057 */ 	__module__: __name__,
/* 001058 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 001058 */ 		var kwargs = dict ();
/* 001058 */ 		if (arguments.length) {
/* 001058 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001058 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001058 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001058 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001058 */ 					switch (__attrib0__) {
/* 001058 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 001058 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001058 */ 					}
/* 001058 */ 				}
/* 001058 */ 				delete kwargs.__kwargtrans__;
/* 001058 */ 			}
/* 001058 */ 		}
/* 001058 */ 		else {
/* 001058 */ 		}
/* 001059 */ 		__call__ (__call__ (__super__, null, SubstitutionSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 001059 */ 	});}
/* 001059 */ });
/* 001070 */ export var FeatureSubstMacros =  __class__ ('FeatureSubstMacros', [Feature], {
/* 001070 */ 	__module__: __name__,
/* 001072 */ 	DocumentManager: null,
/* 001073 */ 	RenderManager: null,
/* 001075 */ 	feature_name: 'macros',
/* 001076 */ 	feature_title: 'Custom macros definitions',
/* 001079 */ 	get __init__ () {return __get__ (this, function (self, definitions) {
/* 001079 */ 		if (arguments.length) {
/* 001079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001079 */ 					switch (__attrib0__) {
/* 001079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001079 */ 						case 'definitions': var definitions = __allkwargs0__ [__attrib0__]; break;
/* 001079 */ 					}
/* 001079 */ 				}
/* 001079 */ 			}
/* 001079 */ 		}
/* 001079 */ 		else {
/* 001079 */ 		}
/* 001080 */ 		__call__ (__call__ (__super__, null, FeatureSubstMacros, '__init__'), null, self);
/* 001082 */ 		if (__t__ (definitions === null)) {
/* 001083 */ 			var definitions = dict ({});
/* 001083 */ 		}
/* 001084 */ 		if (__t__ (!__in__ ('macros', definitions))) {
/* 001085 */ 			__setitem__ (definitions, 'macros', dict ({}));
/* 001085 */ 		}
/* 001086 */ 		if (__t__ (!__in__ ('environments', definitions))) {
/* 001087 */ 			__setitem__ (definitions, 'environments', dict ({}));
/* 001087 */ 		}
/* 001088 */ 		if (__t__ (!__in__ ('specials', definitions))) {
/* 001089 */ 			__setitem__ (definitions, 'specials', dict ({}));
/* 001089 */ 		}
/* 001091 */ 		self.definitions = definitions;
/* 001091 */ 	});},
/* 001094 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 001094 */ 		if (arguments.length) {
/* 001094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001094 */ 					switch (__attrib0__) {
/* 001094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001094 */ 					}
/* 001094 */ 				}
/* 001094 */ 			}
/* 001094 */ 		}
/* 001094 */ 		else {
/* 001094 */ 		}
/* 001099 */ 		return dict ({'macros': (function () {
/* 001099 */ 			var __accu0__ = [];
/* 001102 */ 			var __iterable0__ = (function () {
/* 001102 */ 				var __accu1__ = __getitem__ (self.definitions, 'macros');
/* 001102 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001102 */ 			}) ();
/* 001102 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001102 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001102 */ 				var macroname = __left0__ [0];
/* 001102 */ 				var specdef = __left0__ [1];
/* 001102 */ 				(function () {
/* 001102 */ 					var __accu1__ = __accu0__;
/* 001101 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname}, specdef))));
/* 001101 */ 				}) ();
/* 001101 */ 			}
/* 001101 */ 			return __accu0__;
/* 001101 */ 		}) (), 'environments': (function () {
/* 001101 */ 			var __accu0__ = [];
/* 001106 */ 			var __iterable0__ = (function () {
/* 001106 */ 				var __accu1__ = __getitem__ (self.definitions, 'environments');
/* 001106 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001106 */ 			}) ();
/* 001106 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001106 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001106 */ 				var environmentname = __left0__ [0];
/* 001106 */ 				var specdef = __left0__ [1];
/* 001106 */ 				(function () {
/* 001106 */ 					var __accu1__ = __accu0__;
/* 001105 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname}, specdef))));
/* 001105 */ 				}) ();
/* 001105 */ 			}
/* 001105 */ 			return __accu0__;
/* 001105 */ 		}) (), 'specials': (function () {
/* 001105 */ 			var __accu0__ = [];
/* 001110 */ 			var __iterable0__ = (function () {
/* 001110 */ 				var __accu1__ = __getitem__ (self.definitions, 'specials');
/* 001110 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001110 */ 			}) ();
/* 001110 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001110 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001110 */ 				var specials_chars = __left0__ [0];
/* 001110 */ 				var specdef = __left0__ [1];
/* 001110 */ 				(function () {
/* 001110 */ 					var __accu1__ = __accu0__;
/* 001109 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionSpecials, null, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars}, specdef))));
/* 001109 */ 				}) ();
/* 001109 */ 			}
/* 001109 */ 			return __accu0__;
/* 001109 */ 		}) ()});
/* 001109 */ 	});}
/* 001109 */ });
/* 001115 */ export var FeatureClass = FeatureSubstMacros;
/* 000006 */ 
//# sourceMappingURL=flm.feature.substmacros.map