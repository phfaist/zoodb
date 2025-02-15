/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 00:46:23
/* 000006 */ var logging = {};
/* 000006 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000024 */ import {Feature} from './flm.feature._base.js';
/* 000020 */ import {FLMArgumentSpec, FLMMacroSpecBase, FLMSpecInfo, FLMSpecialsSpecBase} from './flm.flmspecinfo.js';
/* 000018 */ import {ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000017 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000016 */ import {LatexEnvironmentNode, LatexGroupNode, LatexNodeList} from './pylatexenc.latexnodes.nodes.js';
/* 000015 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000009 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo, ParsingStateDelta, SingleParsedArgumentInfo} from './pylatexenc.latexnodes.js';
/* 000006 */ import * as __module_logging__ from './logging.js';
/* 000006 */ __nest__ (logging, '', __module_logging__);
/* 000006 */ export {ParsingStateDeltaExtendLatexContextDb, LatexGroupNode, LatexWalkerLocatedError, latexnodes_parsers, Feature, LatexParserBase, SingleParsedArgumentInfo, FLMMacroSpecBase, ParsedArgumentsInfo, FLMSpecInfo, ParsingStateDelta, FLMSpecialsSpecBase, LatexNodeList, LatexEnvironmentNode, FLMArgumentSpec};
/* 000001 */ var __name__ = 'flm.feature.substmacros';
/* 000007 */ export var logger = (function () {
/* 000007 */ 	var __accu0__ = logging;
/* 000007 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000007 */ }) ();
/* 000030 */ export var NothingParser =  __class__ ('NothingParser', [LatexParserBase], {
/* 000030 */ 	__module__: __name__,
/* 000031 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000031 */ 		var kwargs = dict ();
/* 000031 */ 		if (arguments.length) {
/* 000031 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000031 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000031 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000031 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000031 */ 					switch (__attrib0__) {
/* 000031 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000031 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000031 */ 					}
/* 000031 */ 				}
/* 000031 */ 				delete kwargs.__kwargtrans__;
/* 000031 */ 			}
/* 000031 */ 		}
/* 000031 */ 		else {
/* 000031 */ 		}
/* 000033 */ 		return tuple ([(function () {
/* 000033 */ 			var __accu0__ = latex_walker;
/* 000033 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000033 */ 		}) (), null]);
/* 000033 */ 	});}
/* 000033 */ });
/* 000037 */ export var SetArgumentNumberOffset = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (NothingParser, null), argname: '_SetArgumentNumberOffset'}));
/* 000056 */ export var _macroarg_placeholder_arguments_spec_list = [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'substitution_arg', flm_doc: 'When defining custom substitution handlers, you can use this argument internally to specify custom substitution strings'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'placeholder_ref', flm_doc: 'Argument number (e.g. #2 for second argument, counting from 1 like LaTeX) or argument name (e.g. #{label} for argument named "label")'}))];
/* 000068 */ export var SimpleMacroArgumentPlaceholder =  __class__ ('SimpleMacroArgumentPlaceholder', [FLMSpecialsSpecBase], {
/* 000068 */ 	__module__: __name__,
/* 000070 */ 	allowed_in_standalone_mode: true,
/* 000072 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000072 */ 		if (typeof specials_chars == 'undefined' || (specials_chars != null && specials_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000072 */ 			var specials_chars = '#';
/* 000072 */ 		};
/* 000072 */ 		var parse_arg_information_only = false;
/* 000072 */ 		if (arguments.length) {
/* 000072 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000072 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000072 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000072 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000072 */ 					switch (__attrib0__) {
/* 000072 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 						case 'parse_arg_information_only': var parse_arg_information_only = __allkwargs0__ [__attrib0__]; break;
/* 000072 */ 					}
/* 000072 */ 				}
/* 000072 */ 			}
/* 000072 */ 		}
/* 000072 */ 		else {
/* 000072 */ 		}
/* 000078 */ 		__call__ (__call__ (__super__, null, SimpleMacroArgumentPlaceholder, '__init__'), null, self, __kwargtrans__ ({specials_chars: specials_chars, arguments_spec_list: _macroarg_placeholder_arguments_spec_list}));
/* 000080 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000081 */ 		self.parse_arg_information_only = parse_arg_information_only;
/* 000081 */ 	});},
/* 000083 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000083 */ 		if (arguments.length) {
/* 000083 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000083 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000083 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000083 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000083 */ 					switch (__attrib0__) {
/* 000083 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000083 */ 					}
/* 000083 */ 				}
/* 000083 */ 			}
/* 000083 */ 		}
/* 000083 */ 		else {
/* 000083 */ 		}
/* 000085 */ 		var node_args = (function () {
/* 000085 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000085 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['substitution_arg', 'placeholder_ref']));
/* 000085 */ 		}) ();
/* 000089 */ 		var placeholder_ref = (function () {
/* 000089 */ 			var __accu0__ = (function () {
/* 000089 */ 				var __accu1__ = __getitem__ (node_args, 'placeholder_ref');
/* 000089 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000089 */ 			}) ();
/* 000089 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000089 */ 		}) ();
/* 000091 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000092 */ 		node.flmarg_substitution_arg_info = __getitem__ (node_args, 'substitution_arg');
/* 000094 */ 		if (__t__ (self.parse_arg_information_only)) {
/* 000096 */ 			return ;
/* 000096 */ 		}
/* 000098 */ 		var value = (function () {
/* 000098 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000098 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: node, substitution_arg_info: __getitem__ (node_args, 'substitution_arg')}));
/* 000098 */ 		}) ();
/* 000103 */ 		if (__t__ (__call__ (isinstance, null, value, str))) {
/* 000104 */ 			var nodelist = (function () {
/* 000104 */ 				var __accu0__ = self.macro_content_substitutor;
/* 000104 */ 				return __call__ (__accu0__.compile_flm_text, __accu0__, value, __kwargtrans__ ({add_what: 'placeholder ‘{}’ value'.format (placeholder_ref), is_block_level: node.parsing_state.is_block_level}));
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000108 */ 		else {
/* 000111 */ 			var nodelist = value;
/* 000111 */ 		}
/* 000113 */ 		// pass;
/* 000119 */ 		if (__t__ (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList)) && !__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000122 */ 			var nodelist = nodelist.nodelist;
/* 000122 */ 		}
/* 000124 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, nodelist, LatexNodeList))))) {
/* 000125 */ 			var nodelist = (function () {
/* 000125 */ 				var __accu0__ = node.latex_walker;
/* 000125 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000125 */ 			}) ();
/* 000125 */ 		}
/* 000130 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000131 */ 		node.flm_placeholder_content_nodelist = nodelist;
/* 000133 */ 		var nodelist_parsing_state = nodelist.parsing_state;
/* 000135 */ 		// pass;
/* 000139 */ 		var substitute_node = (function () {
/* 000139 */ 			var __accu0__ = node.latex_walker;
/* 000139 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 000139 */ 		}) ();
/* 000148 */ 		// pass;
/* 000151 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000151 */ 	});},
/* 000157 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		var __except0__ = __call__ (RuntimeError, null, "Shouldn't be called");
/* 000158 */ 		__except0__.__cause__ = null;
/* 000158 */ 		throw __except0__;
/* 000158 */ 	});}
/* 000158 */ });
/* 000164 */ export var _make_ifarg_argument_argspec = function (macro_content_substitutor) {
/* 000164 */ 	if (arguments.length) {
/* 000164 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 				switch (__attrib0__) {
/* 000164 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 	}
/* 000164 */ 	else {
/* 000164 */ 	}
/* 000177 */ 	return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: macro_content_substitutor, parse_arg_information_only: true}))]}), set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: false}))})), argname: 'arg_ref'}));
/* 000177 */ };
/* 000185 */ export var _ifargcmd_condition_wasprovided = function (argument_info) {
/* 000185 */ 	if (arguments.length) {
/* 000185 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 				switch (__attrib0__) {
/* 000185 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 	}
/* 000185 */ 	else {
/* 000185 */ 	}
/* 000186 */ 	return (function () {
/* 000186 */ 		var __accu0__ = argument_info;
/* 000186 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000186 */ 	}) ();
/* 000186 */ };
/* 000188 */ export var _ifargcmd_condition_wasnotprovided = function (argument_info) {
/* 000188 */ 	if (arguments.length) {
/* 000188 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 				switch (__attrib0__) {
/* 000188 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 	}
/* 000188 */ 	else {
/* 000188 */ 	}
/* 000189 */ 	return !__t__ (((function () {
/* 000189 */ 		var __accu0__ = argument_info;
/* 000189 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000189 */ 	}) ()));
/* 000189 */ };
/* 000191 */ export var _ifargcmd_condition_isempty = function (argument_info) {
/* 000191 */ 	if (arguments.length) {
/* 000191 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 				switch (__attrib0__) {
/* 000191 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 	}
/* 000191 */ 	else {
/* 000191 */ 	}
/* 000192 */ 	var arg_content_nodes = (function () {
/* 000192 */ 		var __accu0__ = (function () {
/* 000192 */ 			var __accu1__ = argument_info;
/* 000192 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000192 */ 		}) ();
/* 000192 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000192 */ 	}) ();
/* 000195 */ 	return __eq__ (__call__ (len, null, arg_content_nodes), 0);
/* 000195 */ };
/* 000197 */ export var _ifargcmd_condition_notempty = function (argument_info) {
/* 000197 */ 	if (arguments.length) {
/* 000197 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 				switch (__attrib0__) {
/* 000197 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 				}
/* 000197 */ 			}
/* 000197 */ 		}
/* 000197 */ 	}
/* 000197 */ 	else {
/* 000197 */ 	}
/* 000198 */ 	var arg_content_nodes = (function () {
/* 000198 */ 		var __accu0__ = (function () {
/* 000198 */ 			var __accu1__ = argument_info;
/* 000198 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000198 */ 		}) ();
/* 000198 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000198 */ 	}) ();
/* 000201 */ 	return __ne__ (__call__ (len, null, arg_content_nodes), 0);
/* 000201 */ };
/* 000204 */ export var _ifargcmd_types = dict ({'IfNoValueTF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true', 'value_false'])]), 'IfNoValueT': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true'])]), 'IfNoValueF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_false'])]), 'IfBooleanTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfBooleanT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfBooleanF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'IfValueTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfValueT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfValueF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'ifblank': tuple ([_ifargcmd_condition_isempty, tuple (['value_true', 'value_false'])]), 'notblank': tuple ([_ifargcmd_condition_notempty, tuple (['value_true', 'value_false'])])});
/* 000253 */ export var _make_ifarg_arguments_spec_list = function (macroname, macro_content_substitutor) {
/* 000253 */ 	if (arguments.length) {
/* 000253 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 				switch (__attrib0__) {
/* 000253 */ 					case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 	}
/* 000253 */ 	else {
/* 000253 */ 	}
/* 000255 */ 	if (__t__ (!__in__ (macroname, _ifargcmd_types))) {
/* 000256 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid/unknown macro name for ifarg-type macro: {}'.format (macroname));
/* 000256 */ 		__except0__.__cause__ = null;
/* 000256 */ 		throw __except0__;
/* 000256 */ 	}
/* 000259 */ 	var args = [__call__ (_make_ifarg_argument_argspec, null, macro_content_substitutor)];
/* 000261 */ 	var __iterable0__ = __getitem__ (__getitem__ (_ifargcmd_types, macroname), 1);
/* 000261 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000261 */ 		var argname = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 		(function () {
/* 000262 */ 			var __accu0__ = args;
/* 000263 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: argname})));
/* 000263 */ 		}) ();
/* 000263 */ 	}
/* 000268 */ 	return args;
/* 000268 */ };
/* 000271 */ export var _make_patched_callables = function (environment) {
/* 000271 */ 	if (arguments.length) {
/* 000271 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 				switch (__attrib0__) {
/* 000271 */ 					case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 	}
/* 000271 */ 	else {
/* 000271 */ 	}
/* 000272 */ 	var patched_callables = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000277 */ 	if (__t__ ((function () {
/* 000277 */ 		var __accu0__ = environment;
/* 000277 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'href');
/* 000277 */ 	}) ())) {
/* 000280 */ 		var href_feature = (function () {
/* 000280 */ 			var __accu0__ = environment;
/* 000280 */ 			return __call__ (__accu0__.feature, __accu0__, 'href');
/* 000280 */ 		}) ();
/* 000281 */ 		var HrefHyperlinkMacroClass = href_feature.HrefHyperlinkMacroClass;
/* 000291 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_Xhref', 'display_text'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_Xhref'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_Xemail'])}))]));
/* 000291 */ 	}
/* 000297 */ 	if (__t__ ((function () {
/* 000297 */ 		var __accu0__ = environment;
/* 000297 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000297 */ 	}) ())) {
/* 000298 */ 		var RefMacroCls = (function () {
/* 000298 */ 			var __accu0__ = environment;
/* 000298 */ 			return __call__ (__accu0__.feature, __accu0__, 'refs');
/* 000298 */ 		}) ().RefMacroCls;
/* 000304 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['Xref_label'])})), __call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]Xref_label', 'display_text'])}))]));
/* 000304 */ 	}
/* 000309 */ 	return patched_callables;
/* 000309 */ };
/* 000312 */ export var SimpleMacroContentIfArgCondition =  __class__ ('SimpleMacroContentIfArgCondition', [FLMMacroSpecBase], {
/* 000312 */ 	__module__: __name__,
/* 000314 */ 	allowed_in_standalone_mode: true,
/* 000316 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000321 */ 		var arguments_spec_list = __call__ (_make_ifarg_arguments_spec_list, null, macroname, macro_content_substitutor);
/* 000324 */ 		__call__ (__call__ (__super__, null, SimpleMacroContentIfArgCondition, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000326 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000326 */ 	});},
/* 000328 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000330 */ 		var node_args = (function () {
/* 000330 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000330 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['arg_ref', 'value_true', 'value_false']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000330 */ 		}) ();
/* 000335 */ 		var arg_ref_nodelist = (function () {
/* 000335 */ 			var __accu0__ = (function () {
/* 000335 */ 				var __accu1__ = __getitem__ (node_args, 'arg_ref');
/* 000335 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000335 */ 			}) ();
/* 000335 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000335 */ 		}) ();
/* 000340 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, arg_ref_nodelist), 1)) || !__t__ ((__call__ (hasattr, null, __getitem__ (arg_ref_nodelist, 0), 'flmarg_placeholder_ref'))))) {
/* 000343 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'First argument of \\{} must be a argument reference. Got = {}'.format (self.macroname, __call__ (repr, null, arg_ref_nodelist)), __kwargtrans__ ({pos: node.pos}));
/* 000343 */ 			__except0__.__cause__ = null;
/* 000343 */ 			throw __except0__;
/* 000343 */ 		}
/* 000347 */ 		var arg_ref_node = __getitem__ (arg_ref_nodelist, 0);
/* 000349 */ 		var placeholder_ref = arg_ref_node.flmarg_placeholder_ref;
/* 000351 */ 		if (__t__ ((function () {
/* 000351 */ 			var __accu0__ = arg_ref_node.flmarg_substitution_arg_info;
/* 000351 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000351 */ 		}) ())) {
/* 000355 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Cannot provide substitution placeholder optional arguments in argument of \\{}; got = {}.'.format (self.macroname, __call__ (repr, null, arg_ref_node.flmarg_substitution_arg_info)), __kwargtrans__ ({pos: node.pos}));
/* 000355 */ 			__except0__.__cause__ = null;
/* 000355 */ 			throw __except0__;
/* 000355 */ 		}
/* 000361 */ 		var argument_info = (function () {
/* 000361 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000361 */ 			return __call__ (__accu0__.get_parsed_argument_info, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: arg_ref_node}));
/* 000361 */ 		}) ();
/* 000366 */ 		var result_nodes = null;
/* 000368 */ 		var __left0__ = __getitem__ (_ifargcmd_types, self.macroname);
/* 000368 */ 		var condition_fn = __left0__ [0];
/* 000368 */ 		var _ = __left0__ [1];
/* 000370 */ 		if (__t__ (__call__ (condition_fn, null, argument_info))) {
/* 000371 */ 			if (__t__ (__in__ ('value_true', node_args))) {
/* 000372 */ 				var result_nodes = (function () {
/* 000372 */ 					var __accu0__ = __getitem__ (node_args, 'value_true');
/* 000372 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000372 */ 				}) ();
/* 000372 */ 			}
/* 000372 */ 		}
/* 000374 */ 		else if (__t__ (__in__ ('value_false', node_args))) {
/* 000375 */ 			var result_nodes = (function () {
/* 000375 */ 				var __accu0__ = __getitem__ (node_args, 'value_false');
/* 000375 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000375 */ 			}) ();
/* 000375 */ 		}
/* 000377 */ 		if (__t__ (result_nodes === null)) {
/* 000378 */ 			var result_nodes = (function () {
/* 000378 */ 				var __accu0__ = node.latex_walker;
/* 000378 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000378 */ 			}) ();
/* 000378 */ 		}
/* 000384 */ 		var substitute_node = (function () {
/* 000384 */ 			var __accu0__ = node.latex_walker;
/* 000384 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: node.parsing_state, delimiters: tuple (['', '']), nodelist: result_nodes, pos: result_nodes.pos, pos_end: result_nodes.pos_end}));
/* 000384 */ 		}) ();
/* 000393 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000393 */ 	});}
/* 000393 */ });
/* 000401 */ export var _get_arg_spec = function (argspec) {
/* 000401 */ 	if (arguments.length) {
/* 000401 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 				switch (__attrib0__) {
/* 000401 */ 					case 'argspec': var argspec = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 	}
/* 000401 */ 	else {
/* 000401 */ 	}
/* 000402 */ 	var parser_val = null;
/* 000403 */ 	try {
/* 000404 */ 		var parser_val = __getitem__ (argspec, 'parser');
/* 000404 */ 	}
/* 000404 */ 	catch (__except0__) {
/* 000404 */ 		if (isinstance (__except0__, tuple ([py_TypeError, KeyError]))) {
/* 000409 */ 			// pass;
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 			throw __except0__;
/* 000409 */ 		}
/* 000409 */ 	}
/* 000410 */ 	if (__t__ (parser_val !== null)) {
/* 000411 */ 		if (__t__ (__eq__ (argspec, 'SetArgumentNumberOffset'))) {
/* 000412 */ 			return SetArgumentNumberOffset;
/* 000412 */ 		}
/* 000413 */ 		if (__t__ (__call__ (isinstance, null, argspec, str))) {
/* 000414 */ 			return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: argspec, argname: null}));
/* 000414 */ 		}
/* 000415 */ 		var argspecargs = __call__ (dict, null, argspec);
/* 000416 */ 		if (__t__ (!__in__ ('argname', argspecargs))) {
/* 000417 */ 			__setitem__ (argspecargs, 'argname', null);
/* 000417 */ 		}
/* 000418 */ 		return __call__ (FLMArgumentSpec, null, __kwargtrans__ (argspecargs));
/* 000418 */ 	}
/* 000419 */ 	return argspec;
/* 000419 */ };
/* 000426 */ export var MacroContentSubstitutor =  __class__ ('MacroContentSubstitutor', [object], {
/* 000426 */ 	__module__: __name__,
/* 000427 */ 	get __init__ () {return __get__ (this, function (self, substitutor_manager, callable_node, parsed_arguments_infos, argument_number_offset, default_argument_values) {
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'substitutor_manager': var substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000434 */ 		if (__t__ (default_argument_values === null)) {
/* 000435 */ 			var default_argument_values = dict ({});
/* 000435 */ 		}
/* 000437 */ 		self.substitutor_manager = substitutor_manager;
/* 000438 */ 		self.callable_node = callable_node;
/* 000439 */ 		self.parsed_arguments_infos = parsed_arguments_infos;
/* 000440 */ 		self.default_argument_values = default_argument_values;
/* 000441 */ 		self.argument_number_offset = argument_number_offset;
/* 000443 */ 		self.num_arguments = 0;
/* 000444 */ 		self.argument_names = [];
/* 000445 */ 		var __iterable0__ = (function () {
/* 000445 */ 			var __accu0__ = self.parsed_arguments_infos;
/* 000445 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000445 */ 		}) ();
/* 000445 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000445 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000446 */ 			if (__t__ (__t__ (__call__ (isinstance, null, arg, int)) || (function () {
/* 000446 */ 				var __accu0__ = arg;
/* 000446 */ 				return __call__ (__accu0__.isdigit, __accu0__);
/* 000446 */ 			}) ())) {
/* 000447 */ 				if (__t__ (__ge__ (arg, self.num_arguments))) {
/* 000448 */ 					self.num_arguments = __add__ (__call__ (int, null, arg), 1);
/* 000448 */ 				}
/* 000448 */ 			}
/* 000449 */ 			else {
/* 000450 */ 				(function () {
/* 000450 */ 					var __accu0__ = self.argument_names;
/* 000450 */ 					return __call__ (__accu0__.append, __accu0__, arg);
/* 000450 */ 				}) ();
/* 000450 */ 			}
/* 000450 */ 		}
/* 000452 */ 		var ifmacros = (function () {
/* 000452 */ 			var __accu0__ = [];
/* 000457 */ 			var __iterable0__ = (function () {
/* 000457 */ 				var __accu1__ = _ifargcmd_types;
/* 000457 */ 				return __call__ (__accu1__.py_keys, __accu1__);
/* 000457 */ 			}) ();
/* 000457 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000457 */ 				var ifmacroname = __getitem__ (__iterable0__, __index0__);
/* 000457 */ 				(function () {
/* 000457 */ 					var __accu1__ = __accu0__;
/* 000453 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SimpleMacroContentIfArgCondition, null, __kwargtrans__ ({macroname: ifmacroname, macro_content_substitutor: self})));
/* 000453 */ 				}) ();
/* 000453 */ 			}
/* 000453 */ 			return __accu0__;
/* 000453 */ 		}) ();
/* 000463 */ 		self.macro_content_parsing_state_delta = __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: self}))], 'macros': ifmacros}), set_attributes: dict ({'is_block_level': null})}));
/* 000476 */ 		if (__t__ (self.callable_node.nodeargd !== null)) {
/* 000477 */ 			var arguments_spec_list = self.callable_node.nodeargd.arguments_spec_list;
/* 000478 */ 			if (__t__ (arguments_spec_list)) {
/* 000479 */ 				var __iterable0__ = __call__ (enumerate, null, arguments_spec_list);
/* 000479 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000479 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000479 */ 					var j = __left0__ [0];
/* 000479 */ 					var arg_spec = __left0__ [1];
/* 000480 */ 					if (__t__ (__eq__ (arg_spec.argname, '_SetArgumentNumberOffset'))) {
/* 000481 */ 						// pass;
/* 000486 */ 						self.argument_number_offset = __add__ (j, 1);
/* 000486 */ 						break;
/* 000486 */ 					}
/* 000486 */ 				}
/* 000486 */ 			}
/* 000486 */ 		}
/* 000486 */ 	});},
/* 000491 */ 	get initialize () {return __get__ (this, function (self) {
/* 000491 */ 		if (arguments.length) {
/* 000491 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000491 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000491 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000491 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000491 */ 					switch (__attrib0__) {
/* 000491 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000491 */ 					}
/* 000491 */ 				}
/* 000491 */ 			}
/* 000491 */ 		}
/* 000491 */ 		else {
/* 000491 */ 		}
/* 000495 */ 		// pass;
/* 000495 */ 	});},
/* 000499 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node, substitution_arg_info) {
/* 000499 */ 		if (arguments.length) {
/* 000499 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000499 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000499 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000499 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000499 */ 					switch (__attrib0__) {
/* 000499 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000499 */ 					}
/* 000499 */ 				}
/* 000499 */ 			}
/* 000499 */ 		}
/* 000499 */ 		else {
/* 000499 */ 		}
/* 000501 */ 		var value = (function () {
/* 000501 */ 			var __accu0__ = self.substitutor_manager;
/* 000501 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: self.callable_node, macro_content_substitutor: self}));
/* 000501 */ 		}) ();
/* 000508 */ 		if (__t__ (value !== null)) {
/* 000509 */ 			return value;
/* 000509 */ 		}
/* 000511 */ 		if (__t__ (__eq__ (placeholder_ref, 'body'))) {
/* 000513 */ 			return self.callable_node.nodelist;
/* 000513 */ 		}
/* 000515 */ 		var arg_value = (function () {
/* 000515 */ 			var __accu0__ = self;
/* 000515 */ 			return __call__ (__accu0__.get_argument_placeholder_value, __accu0__, placeholder_ref, placeholder_node);
/* 000515 */ 		}) ();
/* 000517 */ 		if (__t__ (arg_value !== null)) {
/* 000518 */ 			return arg_value;
/* 000518 */ 		}
/* 000520 */ 		var __except0__ = __call__ (ValueError, null, (function () {
/* 000520 */ 			var __accu0__ = 'Invalid callable argument placeholder reference: ‘{}’';
/* 000520 */ 			return __call__ (__accu0__.format, __accu0__, placeholder_ref);
/* 000520 */ 		}) ());
/* 000520 */ 		__except0__.__cause__ = null;
/* 000520 */ 		throw __except0__;
/* 000520 */ 	});},
/* 000526 */ 	get get_argument_key () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000526 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000526 */ 			var placeholder_node = null;
/* 000526 */ 		};
/* 000526 */ 		if (arguments.length) {
/* 000526 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000526 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000526 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000526 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000526 */ 					switch (__attrib0__) {
/* 000526 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 		else {
/* 000526 */ 		}
/* 000528 */ 		var argument_key = null;
/* 000529 */ 		if (__t__ (__t__ (placeholder_ref) && (function () {
/* 000529 */ 			var __accu0__ = placeholder_ref;
/* 000529 */ 			return __call__ (__accu0__.isdigit, __accu0__);
/* 000529 */ 		}) ())) {
/* 000531 */ 			var argument_key = __sub__ (__call__ (int, null, placeholder_ref), 1);
/* 000532 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000533 */ 				var argument_key = __call__ (__iadd__, null, argument_key, self.argument_number_offset);
/* 000533 */ 			}
/* 000535 */ 			if (__t__ (__t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, self.num_arguments))) {
/* 000536 */ 				var expected_what = null;
/* 000537 */ 				if (__t__ (__eq__ (self.num_arguments, 0))) {
/* 000538 */ 					var expected_what = 'The callable accepts no numbered arguments';
/* 000538 */ 				}
/* 000539 */ 				else {
/* 000540 */ 					var expected_what = 'Expected a number between 1 and {} (incl.)'.format (self.num_arguments);
/* 000540 */ 				}
/* 000542 */ 				var e = __call__ (LatexWalkerLocatedError, null, 'Invalid argument number: ‘{}’.  {}'.format (placeholder_ref, expected_what), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000546 */ 				(function () {
/* 000546 */ 					var __accu0__ = e;
/* 000546 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000546 */ 				}) ();
/* 000547 */ 				var __except0__ = e;
/* 000547 */ 				__except0__.__cause__ = null;
/* 000547 */ 				throw __except0__;
/* 000547 */ 			}
/* 000547 */ 		}
/* 000548 */ 		else {
/* 000549 */ 			var argument_key = placeholder_ref;
/* 000549 */ 		}
/* 000555 */ 		if (__t__ (!__in__ (argument_key, self.parsed_arguments_infos))) {
/* 000556 */ 			var lastnum = self.num_arguments;
/* 000557 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000558 */ 				var lastnum = __call__ (__isub__, null, lastnum, self.argument_number_offset);
/* 000558 */ 			}
/* 000559 */ 			var valid_arg_specs = 'numbers 1–{}'.format (__sub__ (self.num_arguments, self.argument_number_offset));
/* 000560 */ 			if (__t__ (__call__ (len, null, self.argument_names))) {
/* 000562 */ 				var valid_arg_specs = __add__ (__add__ ((function () {
/* 000562 */ 					var __accu0__ = ',';
/* 000562 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000562 */ 						var __accu1__ = [];
/* 000562 */ 						var __iterable0__ = self.argument_names;
/* 000562 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000562 */ 							var argname = __getitem__ (__iterable0__, __index0__);
/* 000562 */ 							(function () {
/* 000562 */ 								var __accu2__ = __accu1__;
/* 000562 */ 								return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (argname));
/* 000562 */ 							}) ();
/* 000562 */ 						}
/* 000562 */ 						return __accu1__;
/* 000562 */ 					}) ());
/* 000562 */ 				}) (), ' and '), valid_arg_specs);
/* 000562 */ 			}
/* 000565 */ 			var e = __call__ (LatexWalkerLocatedError, null, __add__ ('Invalid argument name or index: ‘{}’.  Valid argument '.format (placeholder_ref), 'specifiers are {}'.format (valid_arg_specs)), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000570 */ 			(function () {
/* 000570 */ 				var __accu0__ = e;
/* 000570 */ 				return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000570 */ 			}) ();
/* 000571 */ 			var __except0__ = e;
/* 000571 */ 			__except0__.__cause__ = null;
/* 000571 */ 			throw __except0__;
/* 000571 */ 		}
/* 000573 */ 		return argument_key;
/* 000573 */ 	});},
/* 000576 */ 	get get_parsed_argument_info () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000576 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000576 */ 			var placeholder_node = null;
/* 000576 */ 		};
/* 000576 */ 		if (arguments.length) {
/* 000576 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000576 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000576 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000576 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000576 */ 					switch (__attrib0__) {
/* 000576 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000576 */ 					}
/* 000576 */ 				}
/* 000576 */ 			}
/* 000576 */ 		}
/* 000576 */ 		else {
/* 000576 */ 		}
/* 000578 */ 		var argument_key = (function () {
/* 000578 */ 			var __accu0__ = self;
/* 000578 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000578 */ 		}) ();
/* 000580 */ 		return __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000580 */ 	});},
/* 000583 */ 	get get_argument_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000583 */ 		if (arguments.length) {
/* 000583 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000583 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000583 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000583 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000583 */ 					switch (__attrib0__) {
/* 000583 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000583 */ 					}
/* 000583 */ 				}
/* 000583 */ 			}
/* 000583 */ 		}
/* 000583 */ 		else {
/* 000583 */ 		}
/* 000585 */ 		var argument_key = (function () {
/* 000585 */ 			var __accu0__ = self;
/* 000585 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000585 */ 		}) ();
/* 000587 */ 		var nodelist = (function () {
/* 000587 */ 			var __accu0__ = __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000587 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000587 */ 		}) ();
/* 000589 */ 		var use_default = false;
/* 000590 */ 		if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000591 */ 			var nodelist = [];
/* 000592 */ 			var use_default = true;
/* 000592 */ 		}
/* 000594 */ 		if (__t__ (use_default)) {
/* 000595 */ 			var nodelist = (function () {
/* 000595 */ 				var __accu0__ = self;
/* 000595 */ 				return __call__ (__accu0__.get_default_argument_value_nodelist, __accu0__, argument_key, __kwargtrans__ ({placeholder_node: placeholder_node}));
/* 000595 */ 			}) ();
/* 000599 */ 			if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000600 */ 				var nodelist = [];
/* 000600 */ 			}
/* 000600 */ 		}
/* 000602 */ 		return nodelist;
/* 000602 */ 	});},
/* 000605 */ 	get get_default_argument_value_flm_text () {return __get__ (this, function (self, argument_key) {
/* 000605 */ 		if (arguments.length) {
/* 000605 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000605 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000605 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000605 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000605 */ 					switch (__attrib0__) {
/* 000605 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 					}
/* 000605 */ 				}
/* 000605 */ 			}
/* 000605 */ 		}
/* 000605 */ 		else {
/* 000605 */ 		}
/* 000607 */ 		var argument_ref_user = null;
/* 000609 */ 		var node = self.callable_node;
/* 000611 */ 		if (__t__ (__call__ (isinstance, null, argument_key, int))) {
/* 000613 */ 			var argument_ref_user = __add__ (argument_key, 1);
/* 000614 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000615 */ 				var argument_key = __call__ (__isub__, null, argument_key, self.argument_number_offset);
/* 000615 */ 			}
/* 000617 */ 			if (__t__ (__in__ (argument_ref_user, self.default_argument_values))) {
/* 000619 */ 				return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000619 */ 			}
/* 000624 */ 			if (__t__ (__t__ (node.nodeargd === null) || __t__ (node.nodeargd.arguments_spec_list === null) || __t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, __call__ (len, null, node.nodeargd.arguments_spec_list)))) {
/* 000626 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000626 */ 					var __accu0__ = 'Unexpected invalid argument_key={} for node={}';
/* 000627 */ 					return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000627 */ 				}) ());
/* 000627 */ 				__except0__.__cause__ = null;
/* 000627 */ 				throw __except0__;
/* 000627 */ 			}
/* 000631 */ 			var argname = __getitem__ (node.nodeargd.arguments_spec_list, argument_key).argname;
/* 000632 */ 			if (__t__ (__t__ (!__t__ ((argname))) || !__in__ (argname, self.default_argument_values))) {
/* 000634 */ 				return null;
/* 000634 */ 			}
/* 000637 */ 			var argument_ref_user = argname;
/* 000638 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000638 */ 		}
/* 000642 */ 		if (__t__ (__in__ (argument_key, self.default_argument_values))) {
/* 000644 */ 			var argument_ref_user = argument_key;
/* 000645 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000645 */ 		}
/* 000648 */ 		if (__t__ (__t__ (node.nodeargd === null) || node.nodeargd.arguments_spec_list === null)) {
/* 000649 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000649 */ 				var __accu0__ = 'Unexpected invalid node arguments for node={}';
/* 000650 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, node));
/* 000650 */ 			}) ());
/* 000650 */ 			__except0__.__cause__ = null;
/* 000650 */ 			throw __except0__;
/* 000650 */ 		}
/* 000651 */ 		var __break0__ = false;
/* 000651 */ 		var __iterable0__ = __call__ (enumerate, null, node.nodeargd.arguments_spec_list);
/* 000651 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000651 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000651 */ 			var arg_j = __left0__ [0];
/* 000651 */ 			var arg_spec = __left0__ [1];
/* 000652 */ 			if (__t__ (__eq__ (arg_spec.argname, argument_key))) {
/* 000652 */ 				__break0__ = true;
/* 000652 */ 				break;
/* 000652 */ 			}
/* 000652 */ 		}
/* 000654 */ 		if (!__break0__) {
/* 000655 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000655 */ 				var __accu0__ = 'Unexpected invalid argument argname={} for node={}';
/* 000656 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000656 */ 			}) ());
/* 000656 */ 			__except0__.__cause__ = null;
/* 000656 */ 			throw __except0__;
/* 000656 */ 		}
/* 000658 */ 		var argument_ref_user = __add__ (arg_j, 1);
/* 000659 */ 		if (__t__ (self.argument_number_offset !== null)) {
/* 000660 */ 			var argument_ref_user = __call__ (__isub__, null, argument_ref_user, self.argument_number_offset);
/* 000660 */ 		}
/* 000661 */ 		if (__t__ (!__in__ (argument_ref_user, self.default_argument_values))) {
/* 000663 */ 			return null;
/* 000663 */ 		}
/* 000666 */ 		return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000666 */ 	});},
/* 000668 */ 	get get_default_argument_value_nodelist () {return __get__ (this, function (self, argument_key, placeholder_node) {
/* 000668 */ 		if (arguments.length) {
/* 000668 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000668 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000668 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000668 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000668 */ 					switch (__attrib0__) {
/* 000668 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000668 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000668 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000668 */ 					}
/* 000668 */ 				}
/* 000668 */ 			}
/* 000668 */ 		}
/* 000668 */ 		else {
/* 000668 */ 		}
/* 000670 */ 		var is_block_level = placeholder_node.parsing_state.is_block_level;
/* 000672 */ 		var default_arg_flm_text = (function () {
/* 000672 */ 			var __accu0__ = self;
/* 000672 */ 			return __call__ (__accu0__.get_default_argument_value_flm_text, __accu0__, argument_key);
/* 000672 */ 		}) ();
/* 000674 */ 		if (__t__ (default_arg_flm_text === null)) {
/* 000675 */ 			return [];
/* 000675 */ 		}
/* 000677 */ 		return (function () {
/* 000677 */ 			var __accu0__ = self;
/* 000677 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, default_arg_flm_text, __kwargtrans__ ({add_what: 'default ‘{}’'.format (argument_key), is_block_level: is_block_level}));
/* 000677 */ 		}) ();
/* 000677 */ 	});},
/* 000686 */ 	get compile_flm_text () {return __get__ (this, function (self, flm_text, add_what, is_block_level, parsing_state_delta) {
/* 000686 */ 		if (typeof add_what == 'undefined' || (add_what != null && add_what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var add_what = null;
/* 000686 */ 		};
/* 000686 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var is_block_level = null;
/* 000686 */ 		};
/* 000686 */ 		if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000686 */ 			var parsing_state_delta = null;
/* 000686 */ 		};
/* 000686 */ 		if (arguments.length) {
/* 000686 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000686 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000686 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000686 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000686 */ 					switch (__attrib0__) {
/* 000686 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'add_what': var add_what = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000686 */ 					}
/* 000686 */ 				}
/* 000686 */ 			}
/* 000686 */ 		}
/* 000686 */ 		else {
/* 000686 */ 		}
/* 000689 */ 		var mc_parsing_state_delta = self.macro_content_parsing_state_delta;
/* 000690 */ 		var callable_node = self.callable_node;
/* 000691 */ 		var base_latex_walker = callable_node.latex_walker;
/* 000692 */ 		var flm_environment = base_latex_walker.flm_environment;
/* 000694 */ 		var what = '{}→{}'.format (base_latex_walker.what, (function () {
/* 000694 */ 			var __accu0__ = self.substitutor_manager.spec_object;
/* 000694 */ 			return __call__ (__accu0__.get_what, __accu0__);
/* 000694 */ 		}) ());
/* 000695 */ 		if (__t__ (add_what)) {
/* 000696 */ 			var what = __call__ (__iadd__, null, what, '[{}]'.format (add_what));
/* 000696 */ 		}
/* 000698 */ 		var patched_callables = __call__ (_make_patched_callables, null, flm_environment);
/* 000700 */ 		if (__t__ (__in__ ('macros', patched_callables))) {
/* 000701 */ 			if (__t__ (!__in__ ('macros', mc_parsing_state_delta.extend_latex_context))) {
/* 000702 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', []);
/* 000702 */ 			}
/* 000703 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'macros'), __getitem__ (patched_callables, 'macros')));
/* 000703 */ 		}
/* 000706 */ 		if (__t__ (__in__ ('environments', patched_callables))) {
/* 000707 */ 			if (__t__ (!__in__ ('environments', mc_parsing_state_delta.extend_latex_context))) {
/* 000708 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', []);
/* 000708 */ 			}
/* 000709 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'environments'), __getitem__ (patched_callables, 'environments')));
/* 000709 */ 		}
/* 000712 */ 		if (__t__ (__in__ ('specials', patched_callables))) {
/* 000713 */ 			if (__t__ (!__in__ ('specials', mc_parsing_state_delta.extend_latex_context))) {
/* 000714 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', []);
/* 000714 */ 			}
/* 000715 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'specials'), __getitem__ (patched_callables, 'specials')));
/* 000715 */ 		}
/* 000724 */ 		var content_latex_walker = (function () {
/* 000724 */ 			var __accu0__ = flm_environment;
/* 000724 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: base_latex_walker.parsing_mode, resource_info: base_latex_walker.resource_info, standalone_mode: base_latex_walker.standalone_mode, tolerant_parsing: base_latex_walker.tolerant_parsing, what: what, input_lineno_colno_offsets: null}));
/* 000724 */ 		}) ();
/* 000735 */ 		var content_parsing_state = (function () {
/* 000735 */ 			var __accu0__ = mc_parsing_state_delta;
/* 000735 */ 			return __call__ (__accu0__.get_updated_parsing_state, __accu0__, callable_node.parsing_state, content_latex_walker);
/* 000735 */ 		}) ();
/* 000739 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000740 */ 			var content_parsing_state = (function () {
/* 000740 */ 				var __accu0__ = parsing_state_delta;
/* 000740 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, content_parsing_state, content_latex_walker);
/* 000740 */ 			}) ();
/* 000740 */ 		}
/* 000745 */ 		var __left0__ = (function () {
/* 000745 */ 			var __accu0__ = content_latex_walker;
/* 000746 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000746 */ 				var __accu1__ = latexnodes_parsers;
/* 000746 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000746 */ 			}) (), __kwargtrans__ ({parsing_state: content_parsing_state}));
/* 000746 */ 		}) ();
/* 000746 */ 		var nodes = __left0__ [0];
/* 000746 */ 		var newpsdelta = __left0__ [1];
/* 000749 */ 		if (__t__ (newpsdelta !== null)) {
/* 000750 */ 			(function () {
/* 000750 */ 				var __accu0__ = logger;
/* 000750 */ 				return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing state delta from compiling substitution nodes {}'.format (what));
/* 000750 */ 			}) ();
/* 000750 */ 		}
/* 000754 */ 		return nodes;
/* 000754 */ 	});}
/* 000754 */ });
/* 000760 */ export var MacroContentSubstitutorManager =  __class__ ('MacroContentSubstitutorManager', [object], {
/* 000760 */ 	__module__: __name__,
/* 000762 */ 	MacroContentSubstitutorClass: MacroContentSubstitutor,
/* 000764 */ 	get __init__ () {return __get__ (this, function (self, spec_object, argument_number_offset, default_argument_values) {
/* 000764 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000764 */ 			var argument_number_offset = null;
/* 000764 */ 		};
/* 000764 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000764 */ 			var default_argument_values = null;
/* 000764 */ 		};
/* 000764 */ 		if (arguments.length) {
/* 000764 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000764 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000764 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000764 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000764 */ 					switch (__attrib0__) {
/* 000764 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'spec_object': var spec_object = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000764 */ 					}
/* 000764 */ 				}
/* 000764 */ 			}
/* 000764 */ 		}
/* 000764 */ 		else {
/* 000764 */ 		}
/* 000769 */ 		__call__ (__call__ (__super__, null, MacroContentSubstitutorManager, '__init__'), null, self);
/* 000770 */ 		self.spec_object = spec_object;
/* 000771 */ 		self.argument_number_offset = argument_number_offset;
/* 000772 */ 		self.default_argument_values = default_argument_values;
/* 000772 */ 	});},
/* 000774 */ 	get make_macro_content_substitutor () {return __get__ (this, function (self, callable_node) {
/* 000774 */ 		if (arguments.length) {
/* 000774 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000774 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000774 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000774 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000774 */ 					switch (__attrib0__) {
/* 000774 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000774 */ 					}
/* 000774 */ 				}
/* 000774 */ 			}
/* 000774 */ 		}
/* 000774 */ 		else {
/* 000774 */ 		}
/* 000777 */ 		var parsed_arguments_infos = (function () {
/* 000777 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: callable_node}));
/* 000777 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__);
/* 000777 */ 		}) ();
/* 000779 */ 		var parsed_arguments_infos = (function () {
/* 000779 */ 			var __accu0__ = self;
/* 000779 */ 			return __call__ (__accu0__.filter_parsed_arguments_infos, __accu0__, parsed_arguments_infos, callable_node);
/* 000779 */ 		}) ();
/* 000784 */ 		return (function () {
/* 000784 */ 			var __accu0__ = self;
/* 000784 */ 			return __call__ (__accu0__.MacroContentSubstitutorClass, __accu0__, __kwargtrans__ ({substitutor_manager: self, callable_node: callable_node, parsed_arguments_infos: parsed_arguments_infos, argument_number_offset: self.argument_number_offset, default_argument_values: self.default_argument_values}));
/* 000784 */ 		}) ();
/* 000784 */ 	});},
/* 000792 */ 	get filter_parsed_arguments_infos () {return __get__ (this, function (self, parsed_arguments_infos, callable_node) {
/* 000792 */ 		if (arguments.length) {
/* 000792 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000792 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000792 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000792 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000792 */ 					switch (__attrib0__) {
/* 000792 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000792 */ 					}
/* 000792 */ 				}
/* 000792 */ 			}
/* 000792 */ 		}
/* 000792 */ 		else {
/* 000792 */ 		}
/* 000793 */ 		return parsed_arguments_infos;
/* 000793 */ 	});},
/* 000795 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000795 */ 		if (arguments.length) {
/* 000795 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000795 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000795 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000795 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000795 */ 					switch (__attrib0__) {
/* 000795 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000795 */ 					}
/* 000795 */ 				}
/* 000795 */ 			}
/* 000795 */ 		}
/* 000795 */ 		else {
/* 000795 */ 		}
/* 000805 */ 		return (function () {
/* 000805 */ 			var __accu0__ = self.spec_object;
/* 000805 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, __kwargtrans__ ({placeholder_ref: placeholder_ref, placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: callable_node, macro_content_substitutor: macro_content_substitutor}));
/* 000805 */ 		}) ();
/* 000805 */ 	});}
/* 000805 */ });
/* 000819 */ export var SubstitutionCallableSpecInfo =  __class__ ('SubstitutionCallableSpecInfo', [FLMSpecInfo], {
/* 000819 */ 	__module__: __name__,
/* 000849 */ 	allowed_in_standalone_mode: true,
/* 000851 */ 	MacroContentSubstitutorManagerClass: MacroContentSubstitutorManager,
/* 000853 */ 	get __init__ () {return __get__ (this, function (self, spec_node_parser_type, arguments_spec_list, default_argument_values, argument_number_offset, content, is_block_level, macro_content_substitutor_manager, render_time_substitution) {
/* 000853 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var arguments_spec_list = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var default_argument_values = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var argument_number_offset = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof content == 'undefined' || (content != null && content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var content = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var is_block_level = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof macro_content_substitutor_manager == 'undefined' || (macro_content_substitutor_manager != null && macro_content_substitutor_manager.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var macro_content_substitutor_manager = null;
/* 000853 */ 		};
/* 000853 */ 		if (typeof render_time_substitution == 'undefined' || (render_time_substitution != null && render_time_substitution.hasOwnProperty ("__kwargtrans__"))) {;
/* 000853 */ 			var render_time_substitution = false;
/* 000853 */ 		};
/* 000853 */ 		var kwargs = dict ();
/* 000853 */ 		if (arguments.length) {
/* 000853 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000853 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000853 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000853 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000853 */ 					switch (__attrib0__) {
/* 000853 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'macro_content_substitutor_manager': var macro_content_substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						case 'render_time_substitution': var render_time_substitution = __allkwargs0__ [__attrib0__]; break;
/* 000853 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000853 */ 					}
/* 000853 */ 				}
/* 000853 */ 				delete kwargs.__kwargtrans__;
/* 000853 */ 			}
/* 000853 */ 		}
/* 000853 */ 		else {
/* 000853 */ 		}
/* 000866 */ 		if (__t__ (__t__ (arguments_spec_list !== null) && __call__ (len, null, arguments_spec_list))) {
/* 000867 */ 			var arguments_spec_list = (function () {
/* 000867 */ 				var __accu0__ = [];
/* 000867 */ 				var __iterable0__ = arguments_spec_list;
/* 000867 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000867 */ 					var arg = __getitem__ (__iterable0__, __index0__);
/* 000867 */ 					(function () {
/* 000867 */ 						var __accu1__ = __accu0__;
/* 000867 */ 						return __call__ (__accu1__.append, __accu1__, __call__ (_get_arg_spec, null, arg));
/* 000867 */ 					}) ();
/* 000867 */ 				}
/* 000867 */ 				return __accu0__;
/* 000867 */ 			}) ();
/* 000867 */ 		}
/* 000869 */ 		__call__ (__call__ (__super__, null, SubstitutionCallableSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({spec_node_parser_type: spec_node_parser_type, arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000875 */ 		if (__t__ (macro_content_substitutor_manager === null)) {
/* 000876 */ 			var macro_content_substitutor_manager = (function () {
/* 000876 */ 				var __accu0__ = self;
/* 000876 */ 				return __call__ (__accu0__.MacroContentSubstitutorManagerClass, __accu0__, __kwargtrans__ ({spec_object: self, default_argument_values: default_argument_values, argument_number_offset: argument_number_offset}));
/* 000876 */ 			}) ();
/* 000876 */ 		}
/* 000880 */ 		else {
/* 000882 */ 			if (__t__ (default_argument_values !== null)) {
/* 000883 */ 				(function () {
/* 000883 */ 					var __accu0__ = logger;
/* 000883 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `default_argument_values` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000883 */ 				}) ();
/* 000883 */ 			}
/* 000888 */ 			if (__t__ (argument_number_offset !== null)) {
/* 000889 */ 				(function () {
/* 000889 */ 					var __accu0__ = logger;
/* 000889 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `argument_number_offset` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000889 */ 				}) ();
/* 000889 */ 			}
/* 000889 */ 		}
/* 000895 */ 		self.macro_content_substitutor_manager = macro_content_substitutor_manager;
/* 000897 */ 		if (__t__ (content === null)) {
/* 000898 */ 			var content = '';
/* 000898 */ 		}
/* 000900 */ 		self.content_textmode = null;
/* 000901 */ 		self.content_mathmode = null;
/* 000902 */ 		if (__t__ (__call__ (isinstance, null, content, str))) {
/* 000903 */ 			self.content_textmode = content;
/* 000904 */ 			self.content_mathmode = content;
/* 000904 */ 		}
/* 000905 */ 		else {
/* 000906 */ 			if (__t__ (__in__ ('textmode', content))) {
/* 000907 */ 				self.content_textmode = __getitem__ (content, 'textmode');
/* 000907 */ 			}
/* 000908 */ 			if (__t__ (__in__ ('mathmode', content))) {
/* 000909 */ 				self.content_mathmode = __getitem__ (content, 'mathmode');
/* 000909 */ 			}
/* 000909 */ 		}
/* 000911 */ 		self.render_time_substitution = render_time_substitution;
/* 000913 */ 		// pass;
/* 000913 */ 	});},
/* 000921 */ 	get get_what () {return __get__ (this, function (self) {
/* 000921 */ 		if (arguments.length) {
/* 000921 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000921 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000921 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000921 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000921 */ 					switch (__attrib0__) {
/* 000921 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000921 */ 					}
/* 000921 */ 				}
/* 000921 */ 			}
/* 000921 */ 		}
/* 000921 */ 		else {
/* 000921 */ 		}
/* 000922 */ 		if (__t__ (__call__ (hasattr, null, self, 'macroname'))) {
/* 000923 */ 			return __add__ (__add__ ('“\\', __call__ (str, null, self.macroname)), '”');
/* 000923 */ 		}
/* 000924 */ 		else if (__t__ (__call__ (hasattr, null, self, 'environmentname'))) {
/* 000925 */ 			return __add__ (__add__ ('“\\begin{', __call__ (str, null, self.environmentname)), '}...\\end{..}”');
/* 000925 */ 		}
/* 000926 */ 		else if (__t__ (__call__ (hasattr, null, self, 'specials_chars'))) {
/* 000927 */ 			return __add__ (__add__ ('“', __call__ (str, null, self.specials_chars)), '”');
/* 000927 */ 		}
/* 000928 */ 		return '(?callable?)';
/* 000928 */ 	});},
/* 000931 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000931 */ 		if (arguments.length) {
/* 000931 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000931 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000931 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000931 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000931 */ 					switch (__attrib0__) {
/* 000931 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000931 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000931 */ 					}
/* 000931 */ 				}
/* 000931 */ 			}
/* 000931 */ 		}
/* 000931 */ 		else {
/* 000931 */ 		}
/* 000933 */ 		// pass;
/* 000937 */ 		if (__t__ (node.parsing_state.in_math_mode)) {
/* 000938 */ 			var macro_replacement_flm_text = self.content_mathmode;
/* 000938 */ 		}
/* 000939 */ 		else {
/* 000940 */ 			var macro_replacement_flm_text = self.content_textmode;
/* 000940 */ 		}
/* 000942 */ 		if (__t__ (macro_replacement_flm_text === null)) {
/* 000943 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('Custom macro ‘\\{}’ not allowed here (replacement is None in '.format (self.macroname), (__t__ (node.parsing_state.in_math_mode) ? 'math' : 'text')), ' mode).'), __kwargtrans__ ({pos: node.pos}));
/* 000943 */ 			__except0__.__cause__ = null;
/* 000943 */ 			throw __except0__;
/* 000943 */ 		}
/* 000950 */ 		node.flm_macro_replacement_flm_text = macro_replacement_flm_text;
/* 000952 */ 		var substitute_nodelist = (function () {
/* 000952 */ 			var __accu0__ = self;
/* 000952 */ 			return __call__ (__accu0__.compile_subst_nodes, __accu0__, node);
/* 000952 */ 		}) ();
/* 000954 */ 		node.flm_macro_replacement_flm_nodes = substitute_nodelist;
/* 000956 */ 		var substitute_nodelist_parsing_state = substitute_nodelist.parsing_state;
/* 000958 */ 		var substitute_node = (function () {
/* 000958 */ 			var __accu0__ = node.latex_walker;
/* 000958 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: substitute_nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: substitute_nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 000958 */ 		}) ();
/* 000967 */ 		node.flm_macro_replacement_flm_group_node = substitute_node;
/* 000969 */ 		if (__t__ (self.render_time_substitution)) {
/* 000970 */ 			// pass;
/* 000973 */ 			return ;
/* 000973 */ 		}
/* 000975 */ 		// pass;
/* 000978 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000978 */ 	});},
/* 000981 */ 	get compile_subst_nodes () {return __get__ (this, function (self, node) {
/* 000981 */ 		if (arguments.length) {
/* 000981 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000981 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000981 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000981 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000981 */ 					switch (__attrib0__) {
/* 000981 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000981 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000981 */ 					}
/* 000981 */ 				}
/* 000981 */ 			}
/* 000981 */ 		}
/* 000981 */ 		else {
/* 000981 */ 		}
/* 000989 */ 		var macro_replacement_flm_text = node.flm_macro_replacement_flm_text;
/* 000992 */ 		var macro_content_substitutor = (function () {
/* 000992 */ 			var __accu0__ = self.macro_content_substitutor_manager;
/* 000992 */ 			return __call__ (__accu0__.make_macro_content_substitutor, __accu0__, __kwargtrans__ ({callable_node: node}));
/* 000992 */ 		}) ();
/* 000996 */ 		(function () {
/* 000996 */ 			var __accu0__ = macro_content_substitutor;
/* 000996 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 000996 */ 		}) ();
/* 000998 */ 		var nodes = (function () {
/* 000998 */ 			var __accu0__ = macro_content_substitutor;
/* 000998 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, macro_replacement_flm_text);
/* 000998 */ 		}) ();
/* 001002 */ 		return nodes;
/* 001002 */ 	});},
/* 001005 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 001005 */ 		if (arguments.length) {
/* 001005 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001005 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001005 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001005 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001005 */ 					switch (__attrib0__) {
/* 001005 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 001005 */ 					}
/* 001005 */ 				}
/* 001005 */ 			}
/* 001005 */ 		}
/* 001005 */ 		else {
/* 001005 */ 		}
/* 001015 */ 		return null;
/* 001015 */ 	});},
/* 001018 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 001018 */ 		if (arguments.length) {
/* 001018 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001018 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001018 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001018 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001018 */ 					switch (__attrib0__) {
/* 001018 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001018 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001018 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 001018 */ 					}
/* 001018 */ 				}
/* 001018 */ 			}
/* 001018 */ 		}
/* 001018 */ 		else {
/* 001018 */ 		}
/* 001020 */ 		if (__t__ (!__t__ ((self.render_time_substitution)))) {
/* 001021 */ 			(function () {
/* 001021 */ 				var __accu0__ = logger;
/* 001021 */ 				return __call__ (__accu0__.error, __accu0__, 'Rendering substitution macro node that should have been substituted in node tree!');
/* 001021 */ 			}) ();
/* 001021 */ 		}
/* 001026 */ 		// pass;
/* 001030 */ 		return (function () {
/* 001030 */ 			var __accu0__ = render_context.fragment_renderer;
/* 001030 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.flm_macro_replacement_flm_nodes, render_context);
/* 001030 */ 		}) ();
/* 001030 */ 	});}
/* 001030 */ });
/* 001037 */ export var SubstitutionMacro =  __class__ ('SubstitutionMacro', [SubstitutionCallableSpecInfo], {
/* 001037 */ 	__module__: __name__,
/* 001038 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 001038 */ 		var kwargs = dict ();
/* 001038 */ 		if (arguments.length) {
/* 001038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001038 */ 					switch (__attrib0__) {
/* 001038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 001038 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001038 */ 					}
/* 001038 */ 				}
/* 001038 */ 				delete kwargs.__kwargtrans__;
/* 001038 */ 			}
/* 001038 */ 		}
/* 001038 */ 		else {
/* 001038 */ 		}
/* 001039 */ 		__call__ (__call__ (__super__, null, SubstitutionMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 001039 */ 	});}
/* 001039 */ });
/* 001046 */ export var SubstitutionEnvironment =  __class__ ('SubstitutionEnvironment', [SubstitutionCallableSpecInfo], {
/* 001046 */ 	__module__: __name__,
/* 001047 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 001047 */ 		var kwargs = dict ();
/* 001047 */ 		if (arguments.length) {
/* 001047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001047 */ 					switch (__attrib0__) {
/* 001047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001047 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 001047 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001047 */ 					}
/* 001047 */ 				}
/* 001047 */ 				delete kwargs.__kwargtrans__;
/* 001047 */ 			}
/* 001047 */ 		}
/* 001047 */ 		else {
/* 001047 */ 		}
/* 001048 */ 		__call__ (__call__ (__super__, null, SubstitutionEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 001048 */ 	});}
/* 001048 */ });
/* 001056 */ export var SubstitutionSpecials =  __class__ ('SubstitutionSpecials', [SubstitutionCallableSpecInfo], {
/* 001056 */ 	__module__: __name__,
/* 001057 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 001057 */ 		var kwargs = dict ();
/* 001057 */ 		if (arguments.length) {
/* 001057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001057 */ 					switch (__attrib0__) {
/* 001057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001057 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 001057 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001057 */ 					}
/* 001057 */ 				}
/* 001057 */ 				delete kwargs.__kwargtrans__;
/* 001057 */ 			}
/* 001057 */ 		}
/* 001057 */ 		else {
/* 001057 */ 		}
/* 001058 */ 		__call__ (__call__ (__super__, null, SubstitutionSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 001058 */ 	});}
/* 001058 */ });
/* 001069 */ export var FeatureSubstMacros =  __class__ ('FeatureSubstMacros', [Feature], {
/* 001069 */ 	__module__: __name__,
/* 001071 */ 	DocumentManager: null,
/* 001072 */ 	RenderManager: null,
/* 001074 */ 	feature_name: 'macros',
/* 001075 */ 	feature_title: 'Custom macros definitions',
/* 001078 */ 	get __init__ () {return __get__ (this, function (self, definitions) {
/* 001078 */ 		if (arguments.length) {
/* 001078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001078 */ 					switch (__attrib0__) {
/* 001078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001078 */ 						case 'definitions': var definitions = __allkwargs0__ [__attrib0__]; break;
/* 001078 */ 					}
/* 001078 */ 				}
/* 001078 */ 			}
/* 001078 */ 		}
/* 001078 */ 		else {
/* 001078 */ 		}
/* 001079 */ 		__call__ (__call__ (__super__, null, FeatureSubstMacros, '__init__'), null, self);
/* 001081 */ 		if (__t__ (definitions === null)) {
/* 001082 */ 			var definitions = dict ({});
/* 001082 */ 		}
/* 001083 */ 		if (__t__ (!__in__ ('macros', definitions))) {
/* 001084 */ 			__setitem__ (definitions, 'macros', dict ({}));
/* 001084 */ 		}
/* 001085 */ 		if (__t__ (!__in__ ('environments', definitions))) {
/* 001086 */ 			__setitem__ (definitions, 'environments', dict ({}));
/* 001086 */ 		}
/* 001087 */ 		if (__t__ (!__in__ ('specials', definitions))) {
/* 001088 */ 			__setitem__ (definitions, 'specials', dict ({}));
/* 001088 */ 		}
/* 001090 */ 		self.definitions = definitions;
/* 001090 */ 	});},
/* 001093 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 001093 */ 		if (arguments.length) {
/* 001093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001093 */ 					switch (__attrib0__) {
/* 001093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001093 */ 					}
/* 001093 */ 				}
/* 001093 */ 			}
/* 001093 */ 		}
/* 001093 */ 		else {
/* 001093 */ 		}
/* 001098 */ 		return dict ({'macros': (function () {
/* 001098 */ 			var __accu0__ = [];
/* 001101 */ 			var __iterable0__ = (function () {
/* 001101 */ 				var __accu1__ = __getitem__ (self.definitions, 'macros');
/* 001101 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001101 */ 			}) ();
/* 001101 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001101 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001101 */ 				var macroname = __left0__ [0];
/* 001101 */ 				var specdef = __left0__ [1];
/* 001101 */ 				(function () {
/* 001101 */ 					var __accu1__ = __accu0__;
/* 001100 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname}, specdef))));
/* 001100 */ 				}) ();
/* 001100 */ 			}
/* 001100 */ 			return __accu0__;
/* 001100 */ 		}) (), 'environments': (function () {
/* 001100 */ 			var __accu0__ = [];
/* 001105 */ 			var __iterable0__ = (function () {
/* 001105 */ 				var __accu1__ = __getitem__ (self.definitions, 'environments');
/* 001105 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001105 */ 			}) ();
/* 001105 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001105 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001105 */ 				var environmentname = __left0__ [0];
/* 001105 */ 				var specdef = __left0__ [1];
/* 001105 */ 				(function () {
/* 001105 */ 					var __accu1__ = __accu0__;
/* 001104 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname}, specdef))));
/* 001104 */ 				}) ();
/* 001104 */ 			}
/* 001104 */ 			return __accu0__;
/* 001104 */ 		}) (), 'specials': (function () {
/* 001104 */ 			var __accu0__ = [];
/* 001109 */ 			var __iterable0__ = (function () {
/* 001109 */ 				var __accu1__ = __getitem__ (self.definitions, 'specials');
/* 001109 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001109 */ 			}) ();
/* 001109 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001109 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001109 */ 				var specials_chars = __left0__ [0];
/* 001109 */ 				var specdef = __left0__ [1];
/* 001109 */ 				(function () {
/* 001109 */ 					var __accu1__ = __accu0__;
/* 001108 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionSpecials, null, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars}, specdef))));
/* 001108 */ 				}) ();
/* 001108 */ 			}
/* 001108 */ 			return __accu0__;
/* 001108 */ 		}) ()});
/* 001108 */ 	});}
/* 001108 */ });
/* 001114 */ export var FeatureClass = FeatureSubstMacros;
/* 000006 */ 
//# sourceMappingURL=flm.feature.substmacros.map