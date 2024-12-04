/* 000001 */ // Transcrypt'ed from Python, 2024-12-04 22:08:16
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
/* 000006 */ export {LatexNodeList, LatexWalkerLocatedError, LatexEnvironmentNode, ParsingStateDeltaExtendLatexContextDb, Feature, FLMSpecInfo, LatexGroupNode, FLMArgumentSpec, FLMSpecialsSpecBase, LatexParserBase, FLMMacroSpecBase, SingleParsedArgumentInfo, latexnodes_parsers, ParsingStateDelta, ParsedArgumentsInfo};
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
/* 000608 */ 		var default_arg_flm_text = null;
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
/* 000657 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argname), __call__ (repr, null, node));
/* 000657 */ 			}) ());
/* 000657 */ 			__except0__.__cause__ = null;
/* 000657 */ 			throw __except0__;
/* 000657 */ 		}
/* 000659 */ 		var argument_ref_user = __add__ (arg_j, 1);
/* 000660 */ 		if (__t__ (self.argument_number_offset !== null)) {
/* 000661 */ 			var argument_key = __call__ (__isub__, null, argument_key, self.argument_number_offset);
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
/* 000987 */ 		var base_latex_walker = node.latex_walker;
/* 000988 */ 		var flm_environment = node.latex_walker.flm_environment;
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