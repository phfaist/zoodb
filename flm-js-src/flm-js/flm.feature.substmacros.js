/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:26
/* 000014 */ var logging = {};
/* 000014 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000035 */ import {Feature} from './flm.feature._base.js';
/* 000033 */ import {Any, Mapping, Sequence, TypeArgumentsSpecList} from './flm._typing_helpers.js';
/* 000029 */ import {FLMArgumentSpec, FLMMacroSpecBase, FLMSpecInfo, FLMSpecialsSpecBase} from './flm.flmspecinfo.js';
/* 000027 */ import {ParsingStateDeltaExtendLatexContextDb} from './pylatexenc.macrospec.js';
/* 000026 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000022 */ import {LatexGroupNode, LatexNodeList} from './pylatexenc.latexnodes.nodes.js';
/* 000021 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000017 */ import {LatexWalkerLocatedError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000014 */ import * as __module_logging__ from './logging.js';
/* 000014 */ __nest__ (logging, '', __module_logging__);
/* 000014 */ export {LatexGroupNode, FLMMacroSpecBase, ParsedArgumentsInfo, Feature, FLMSpecInfo, latexnodes_parsers, TypeArgumentsSpecList, FLMSpecialsSpecBase, Sequence, LatexParserBase, Mapping, FLMArgumentSpec, Any, LatexNodeList, LatexWalkerLocatedError, ParsingStateDeltaExtendLatexContextDb};
/* 000001 */ var __name__ = 'flm.feature.substmacros';
/* 000015 */ export var logger = (function () {
/* 000015 */ 	var __accu0__ = logging;
/* 000015 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000015 */ }) ();
/* 000041 */ export var NothingParser =  __class__ ('NothingParser', [LatexParserBase], {
/* 000041 */ 	__module__: __name__,
/* 000048 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000048 */ 		var kwargs = dict ();
/* 000048 */ 		if (arguments.length) {
/* 000048 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000048 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000048 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000048 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000048 */ 					switch (__attrib0__) {
/* 000048 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000048 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000048 */ 					}
/* 000048 */ 				}
/* 000048 */ 				delete kwargs.__kwargtrans__;
/* 000048 */ 			}
/* 000048 */ 		}
/* 000048 */ 		else {
/* 000048 */ 		}
/* 000050 */ 		return tuple ([(function () {
/* 000050 */ 			var __accu0__ = latex_walker;
/* 000050 */ 			return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: parsing_state}));
/* 000050 */ 		}) (), null]);
/* 000050 */ 	});}
/* 000050 */ });
/* 000054 */ export var SetArgumentNumberOffset = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: __call__ (NothingParser, null), argname: '_SetArgumentNumberOffset'}));
/* 000077 */ export var _macroarg_placeholder_arguments_spec_list = [__call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '[', argname: 'substitution_arg', flm_doc: 'When defining custom substitution handlers, you can use this argument internally to specify custom substitution strings'})), __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'placeholder_ref', flm_doc: 'Argument number (e.g. #2 for second argument, counting from 1 like LaTeX) or argument name (e.g. #{label} for argument named "label")'}))];
/* 000089 */ export var SimpleMacroArgumentPlaceholder =  __class__ ('SimpleMacroArgumentPlaceholder', [FLMSpecialsSpecBase], {
/* 000089 */ 	__module__: __name__,
/* 000096 */ 	allowed_in_standalone_mode: true,
/* 000098 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000098 */ 		if (typeof specials_chars == 'undefined' || (specials_chars != null && specials_chars.hasOwnProperty ("__kwargtrans__"))) {;
/* 000098 */ 			var specials_chars = '#';
/* 000098 */ 		};
/* 000098 */ 		var parse_arg_information_only = false;
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'parse_arg_information_only': var parse_arg_information_only = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000104 */ 		__call__ (__call__ (__super__, null, SimpleMacroArgumentPlaceholder, '__init__'), null, self, __kwargtrans__ ({specials_chars: specials_chars, arguments_spec_list: _macroarg_placeholder_arguments_spec_list}));
/* 000106 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000107 */ 		self.parse_arg_information_only = parse_arg_information_only;
/* 000107 */ 	});},
/* 000109 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000111 */ 		var node_args = (function () {
/* 000111 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000111 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['substitution_arg', 'placeholder_ref']));
/* 000111 */ 		}) ();
/* 000115 */ 		var placeholder_ref = (function () {
/* 000115 */ 			var __accu0__ = (function () {
/* 000115 */ 				var __accu1__ = __getitem__ (node_args, 'placeholder_ref');
/* 000115 */ 				return __call__ (__accu1__.get_content_as_chars, __accu1__);
/* 000115 */ 			}) ();
/* 000115 */ 			return __call__ (__accu0__.strip, __accu0__);
/* 000115 */ 		}) ();
/* 000117 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000118 */ 		node.flmarg_substitution_arg_info = __getitem__ (node_args, 'substitution_arg');
/* 000120 */ 		if (__t__ (self.parse_arg_information_only)) {
/* 000122 */ 			return ;
/* 000122 */ 		}
/* 000124 */ 		var value = (function () {
/* 000124 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000124 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: node, substitution_arg_info: __getitem__ (node_args, 'substitution_arg')}));
/* 000124 */ 		}) ();
/* 000129 */ 		if (__t__ (__call__ (isinstance, null, value, str))) {
/* 000130 */ 			var nodelist = (function () {
/* 000130 */ 				var __accu0__ = self.macro_content_substitutor;
/* 000130 */ 				return __call__ (__accu0__.compile_flm_text, __accu0__, value, __kwargtrans__ ({add_what: 'placeholder ‘{}’ value'.format (placeholder_ref), is_block_level: node.parsing_state.is_block_level}));
/* 000130 */ 			}) ();
/* 000130 */ 		}
/* 000134 */ 		else {
/* 000137 */ 			var nodelist = value;
/* 000137 */ 		}
/* 000139 */ 		// pass;
/* 000145 */ 		if (__t__ (__t__ (__call__ (isinstance, null, nodelist, LatexNodeList)) && !__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000148 */ 			var nodelist = nodelist.nodelist;
/* 000148 */ 		}
/* 000150 */ 		if (__t__ (!__t__ ((__call__ (isinstance, null, nodelist, LatexNodeList))))) {
/* 000151 */ 			var nodelist = (function () {
/* 000151 */ 				var __accu0__ = node.latex_walker;
/* 000151 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, nodelist, __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000151 */ 			}) ();
/* 000151 */ 		}
/* 000156 */ 		node.flmarg_placeholder_ref = placeholder_ref;
/* 000157 */ 		node.flm_placeholder_content_nodelist = nodelist;
/* 000159 */ 		var nodelist_parsing_state = nodelist.parsing_state;
/* 000161 */ 		// pass;
/* 000165 */ 		var substitute_node = (function () {
/* 000165 */ 			var __accu0__ = node.latex_walker;
/* 000165 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 000165 */ 		}) ();
/* 000174 */ 		// pass;
/* 000177 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000177 */ 	});},
/* 000183 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000183 */ 		if (arguments.length) {
/* 000183 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000183 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000183 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000183 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000183 */ 					switch (__attrib0__) {
/* 000183 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000183 */ 					}
/* 000183 */ 				}
/* 000183 */ 			}
/* 000183 */ 		}
/* 000183 */ 		else {
/* 000183 */ 		}
/* 000184 */ 		var __except0__ = __call__ (RuntimeError, null, "Shouldn't be called");
/* 000184 */ 		__except0__.__cause__ = null;
/* 000184 */ 		throw __except0__;
/* 000184 */ 	});}
/* 000184 */ });
/* 000190 */ export var _make_ifarg_argument_argspec = function (macro_content_substitutor) {
/* 000190 */ 	if (arguments.length) {
/* 000190 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 				switch (__attrib0__) {
/* 000190 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 				}
/* 000190 */ 			}
/* 000190 */ 		}
/* 000190 */ 	}
/* 000190 */ 	else {
/* 000190 */ 	}
/* 000203 */ 	return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', parsing_state_delta: __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: macro_content_substitutor, parse_arg_information_only: true}))]}), set_attributes: __call__ (dict, null, __kwargtrans__ ({is_block_level: false}))})), argname: 'arg_ref'}));
/* 000203 */ };
/* 000211 */ export var _ifargcmd_condition_wasprovided = function (argument_info) {
/* 000211 */ 	if (arguments.length) {
/* 000211 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000211 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000211 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000211 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000211 */ 				switch (__attrib0__) {
/* 000211 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000211 */ 				}
/* 000211 */ 			}
/* 000211 */ 		}
/* 000211 */ 	}
/* 000211 */ 	else {
/* 000211 */ 	}
/* 000212 */ 	return (function () {
/* 000212 */ 		var __accu0__ = argument_info;
/* 000212 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000212 */ 	}) ();
/* 000212 */ };
/* 000214 */ export var _ifargcmd_condition_wasnotprovided = function (argument_info) {
/* 000214 */ 	if (arguments.length) {
/* 000214 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 				switch (__attrib0__) {
/* 000214 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 	}
/* 000214 */ 	else {
/* 000214 */ 	}
/* 000215 */ 	return !__t__ (((function () {
/* 000215 */ 		var __accu0__ = argument_info;
/* 000215 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000215 */ 	}) ()));
/* 000215 */ };
/* 000217 */ export var _ifargcmd_condition_isempty = function (argument_info) {
/* 000217 */ 	if (arguments.length) {
/* 000217 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 				switch (__attrib0__) {
/* 000217 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 	}
/* 000217 */ 	else {
/* 000217 */ 	}
/* 000218 */ 	var arg_content_nodes = (function () {
/* 000218 */ 		var __accu0__ = (function () {
/* 000218 */ 			var __accu1__ = argument_info;
/* 000218 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000218 */ 		}) ();
/* 000218 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000218 */ 	}) ();
/* 000221 */ 	return __eq__ (__call__ (len, null, arg_content_nodes), 0);
/* 000221 */ };
/* 000223 */ export var _ifargcmd_condition_notempty = function (argument_info) {
/* 000223 */ 	if (arguments.length) {
/* 000223 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 				switch (__attrib0__) {
/* 000223 */ 					case 'argument_info': var argument_info = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 	}
/* 000223 */ 	else {
/* 000223 */ 	}
/* 000224 */ 	var arg_content_nodes = (function () {
/* 000224 */ 		var __accu0__ = (function () {
/* 000224 */ 			var __accu1__ = argument_info;
/* 000224 */ 			return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000224 */ 		}) ();
/* 000224 */ 		return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true}));
/* 000224 */ 	}) ();
/* 000227 */ 	return __ne__ (__call__ (len, null, arg_content_nodes), 0);
/* 000227 */ };
/* 000230 */ export var _ifargcmd_types = dict ({'IfNoValueTF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true', 'value_false'])]), 'IfNoValueT': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_true'])]), 'IfNoValueF': tuple ([_ifargcmd_condition_wasnotprovided, tuple (['value_false'])]), 'IfBooleanTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfBooleanT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfBooleanF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'IfValueTF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true', 'value_false'])]), 'IfValueT': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_true'])]), 'IfValueF': tuple ([_ifargcmd_condition_wasprovided, tuple (['value_false'])]), 'ifblank': tuple ([_ifargcmd_condition_isempty, tuple (['value_true', 'value_false'])]), 'notblank': tuple ([_ifargcmd_condition_notempty, tuple (['value_true', 'value_false'])])});
/* 000279 */ export var _make_ifarg_arguments_spec_list = function (macroname, macro_content_substitutor) {
/* 000279 */ 	if (arguments.length) {
/* 000279 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 				switch (__attrib0__) {
/* 000279 */ 					case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 	}
/* 000279 */ 	else {
/* 000279 */ 	}
/* 000281 */ 	if (__t__ (!__in__ (macroname, _ifargcmd_types))) {
/* 000282 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid/unknown macro name for ifarg-type macro: {}'.format (macroname));
/* 000282 */ 		__except0__.__cause__ = null;
/* 000282 */ 		throw __except0__;
/* 000282 */ 	}
/* 000285 */ 	var args = [__call__ (_make_ifarg_argument_argspec, null, macro_content_substitutor)];
/* 000287 */ 	var __iterable0__ = __getitem__ (__getitem__ (_ifargcmd_types, macroname), 1);
/* 000287 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000287 */ 		var argname = __getitem__ (__iterable0__, __index0__);
/* 000288 */ 		(function () {
/* 000288 */ 			var __accu0__ = args;
/* 000289 */ 			return __call__ (__accu0__.append, __accu0__, __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: argname})));
/* 000289 */ 		}) ();
/* 000289 */ 	}
/* 000294 */ 	return args;
/* 000294 */ };
/* 000297 */ export var _make_patched_callables = function (environment) {
/* 000297 */ 	if (arguments.length) {
/* 000297 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 				switch (__attrib0__) {
/* 000297 */ 					case 'environment': var environment = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 	}
/* 000297 */ 	else {
/* 000297 */ 	}
/* 000298 */ 	var patched_callables = dict ({'macros': [], 'environments': [], 'specials': []});
/* 000303 */ 	if (__t__ ((function () {
/* 000303 */ 		var __accu0__ = environment;
/* 000303 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'href');
/* 000303 */ 	}) ())) {
/* 000306 */ 		var href_feature = (function () {
/* 000306 */ 			var __accu0__ = environment;
/* 000306 */ 			return __call__ (__accu0__.feature, __accu0__, 'href');
/* 000306 */ 		}) ();
/* 000307 */ 		var HrefHyperlinkMacroClass = href_feature.HrefHyperlinkMacroClass;
/* 000317 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'href', command_arguments: tuple (['target_Xhref', 'display_text'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'url', command_arguments: tuple (['target_Xhref'])})), __call__ (HrefHyperlinkMacroClass, null, __kwargtrans__ ({macroname: 'email', command_arguments: tuple (['target_Xemail'])}))]));
/* 000317 */ 	}
/* 000323 */ 	if (__t__ ((function () {
/* 000323 */ 		var __accu0__ = environment;
/* 000323 */ 		return __call__ (__accu0__.supports_feature, __accu0__, 'refs');
/* 000323 */ 	}) ())) {
/* 000324 */ 		var RefMacroCls = (function () {
/* 000324 */ 			var __accu0__ = environment;
/* 000324 */ 			return __call__ (__accu0__.feature, __accu0__, 'refs');
/* 000324 */ 		}) ().RefMacroCls;
/* 000330 */ 		__setitem__ (patched_callables, 'macros', __call__ (__iadd__, null, __getitem__ (patched_callables, 'macros'), [__call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'ref', command_arguments: tuple (['Xref_label'])})), __call__ (RefMacroCls, null, __kwargtrans__ ({macroname: 'hyperref', command_arguments: tuple (['[]Xref_label', 'display_text'])}))]));
/* 000330 */ 	}
/* 000335 */ 	return patched_callables;
/* 000335 */ };
/* 000338 */ export var SimpleMacroContentIfArgCondition =  __class__ ('SimpleMacroContentIfArgCondition', [FLMMacroSpecBase], {
/* 000338 */ 	__module__: __name__,
/* 000340 */ 	allowed_in_standalone_mode: true,
/* 000342 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000347 */ 		var arguments_spec_list = __call__ (_make_ifarg_arguments_spec_list, null, macroname, macro_content_substitutor);
/* 000350 */ 		__call__ (__call__ (__super__, null, SimpleMacroContentIfArgCondition, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: arguments_spec_list}));
/* 000352 */ 		self.macro_content_substitutor = macro_content_substitutor;
/* 000352 */ 	});},
/* 000354 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000356 */ 		var node_args = (function () {
/* 000356 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000356 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['arg_ref', 'value_true', 'value_false']), __kwargtrans__ ({skip_nonexistent_arguments: true}));
/* 000356 */ 		}) ();
/* 000361 */ 		var arg_ref_nodelist = (function () {
/* 000361 */ 			var __accu0__ = (function () {
/* 000361 */ 				var __accu1__ = __getitem__ (node_args, 'arg_ref');
/* 000361 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000361 */ 			}) ();
/* 000361 */ 			return __call__ (__accu0__.filter, __accu0__, __kwargtrans__ ({skip_none: true, skip_comments: true, skip_whitespace_char_nodes: true}));
/* 000361 */ 		}) ();
/* 000366 */ 		if (__t__ (__t__ (__ne__ (__call__ (len, null, arg_ref_nodelist), 1)) || !__t__ ((__call__ (hasattr, null, __getitem__ (arg_ref_nodelist, 0), 'flmarg_placeholder_ref'))))) {
/* 000369 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'First argument of \\{} must be a argument reference. Got = {}'.format (self.macroname, __call__ (repr, null, arg_ref_nodelist)), __kwargtrans__ ({pos: node.pos}));
/* 000369 */ 			__except0__.__cause__ = null;
/* 000369 */ 			throw __except0__;
/* 000369 */ 		}
/* 000373 */ 		var arg_ref_node = __getitem__ (arg_ref_nodelist, 0);
/* 000375 */ 		var placeholder_ref = arg_ref_node.flmarg_placeholder_ref;
/* 000377 */ 		if (__t__ ((function () {
/* 000377 */ 			var __accu0__ = arg_ref_node.flmarg_substitution_arg_info;
/* 000377 */ 			return __call__ (__accu0__.was_provided, __accu0__);
/* 000377 */ 		}) ())) {
/* 000381 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'Cannot provide substitution placeholder optional arguments in argument of \\{}; got = {}.'.format (self.macroname, __call__ (repr, null, arg_ref_node.flmarg_substitution_arg_info)), __kwargtrans__ ({pos: node.pos}));
/* 000381 */ 			__except0__.__cause__ = null;
/* 000381 */ 			throw __except0__;
/* 000381 */ 		}
/* 000387 */ 		var argument_info = (function () {
/* 000387 */ 			var __accu0__ = self.macro_content_substitutor;
/* 000387 */ 			return __call__ (__accu0__.get_parsed_argument_info, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: arg_ref_node}));
/* 000387 */ 		}) ();
/* 000392 */ 		var result_nodes = null;
/* 000394 */ 		var __left0__ = __getitem__ (_ifargcmd_types, self.macroname);
/* 000394 */ 		var condition_fn = __left0__ [0];
/* 000394 */ 		var _ = __left0__ [1];
/* 000396 */ 		if (__t__ (__call__ (condition_fn, null, argument_info))) {
/* 000397 */ 			if (__t__ (__in__ ('value_true', node_args))) {
/* 000398 */ 				var result_nodes = (function () {
/* 000398 */ 					var __accu0__ = __getitem__ (node_args, 'value_true');
/* 000398 */ 					return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000398 */ 				}) ();
/* 000398 */ 			}
/* 000398 */ 		}
/* 000400 */ 		else if (__t__ (__in__ ('value_false', node_args))) {
/* 000401 */ 			var result_nodes = (function () {
/* 000401 */ 				var __accu0__ = __getitem__ (node_args, 'value_false');
/* 000401 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000401 */ 			}) ();
/* 000401 */ 		}
/* 000403 */ 		if (__t__ (result_nodes === null)) {
/* 000404 */ 			var result_nodes = (function () {
/* 000404 */ 				var __accu0__ = node.latex_walker;
/* 000404 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [], __kwargtrans__ ({parsing_state: node.parsing_state, pos: node.pos}));
/* 000404 */ 			}) ();
/* 000404 */ 		}
/* 000410 */ 		var substitute_node = (function () {
/* 000410 */ 			var __accu0__ = node.latex_walker;
/* 000410 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: node.parsing_state, delimiters: tuple (['', '']), nodelist: result_nodes, pos: result_nodes.pos, pos_end: result_nodes.pos_end}));
/* 000410 */ 		}) ();
/* 000419 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 000419 */ 	});}
/* 000419 */ });
/* 000427 */ export var _get_arg_spec = function (argspec) {
/* 000427 */ 	if (arguments.length) {
/* 000427 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 				switch (__attrib0__) {
/* 000427 */ 					case 'argspec': var argspec = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 	}
/* 000427 */ 	else {
/* 000427 */ 	}
/* 000435 */ 	if (__t__ (__call__ (isinstance, null, argspec, str))) {
/* 000436 */ 		if (__t__ (__eq__ (argspec, 'SetArgumentNumberOffset'))) {
/* 000437 */ 			return SetArgumentNumberOffset;
/* 000437 */ 		}
/* 000438 */ 		return __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: argspec, argname: null}));
/* 000438 */ 	}
/* 000439 */ 	var parser_val = null;
/* 000440 */ 	try {
/* 000441 */ 		var parser_val = __getitem__ (argspec, 'parser');
/* 000441 */ 	}
/* 000441 */ 	catch (__except0__) {
/* 000441 */ 		if (isinstance (__except0__, tuple ([py_TypeError, KeyError]))) {
/* 000446 */ 			// pass;
/* 000446 */ 		}
/* 000446 */ 		else {
/* 000446 */ 			throw __except0__;
/* 000446 */ 		}
/* 000446 */ 	}
/* 000447 */ 	if (__t__ (parser_val !== null)) {
/* 000449 */ 		var argspecargs = __call__ (dict, null, argspec);
/* 000450 */ 		if (__t__ (!__in__ ('argname', argspecargs))) {
/* 000451 */ 			__setitem__ (argspecargs, 'argname', null);
/* 000451 */ 		}
/* 000452 */ 		return __call__ (FLMArgumentSpec, null, __kwargtrans__ (argspecargs));
/* 000452 */ 	}
/* 000454 */ 	if (__t__ (!__t__ ((__call__ (hasattr, null, argspec, 'parser'))))) {
/* 000457 */ 		var __except0__ = __call__ (ValueError, null, 'Expected LatexArgumentSpec instance at this point in _get_arg_spec: {}'.format (__call__ (repr, null, argspec)));
/* 000457 */ 		__except0__.__cause__ = null;
/* 000457 */ 		throw __except0__;
/* 000457 */ 	}
/* 000459 */ 	return argspec;
/* 000459 */ };
/* 000466 */ export var MacroContentSubstitutor =  __class__ ('MacroContentSubstitutor', [object], {
/* 000466 */ 	__module__: __name__,
/* 000467 */ 	get __init__ () {return __get__ (this, function (self, substitutor_manager, callable_node, parsed_arguments_infos, argument_number_offset, default_argument_values) {
/* 000467 */ 		if (arguments.length) {
/* 000467 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000467 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000467 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000467 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000467 */ 					switch (__attrib0__) {
/* 000467 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'substitutor_manager': var substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 					}
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 		}
/* 000467 */ 		else {
/* 000467 */ 		}
/* 000474 */ 		if (__t__ (default_argument_values === null)) {
/* 000475 */ 			var default_argument_values = dict ({});
/* 000475 */ 		}
/* 000477 */ 		self.substitutor_manager = substitutor_manager;
/* 000478 */ 		self.callable_node = callable_node;
/* 000479 */ 		self.parsed_arguments_infos = parsed_arguments_infos;
/* 000480 */ 		self.default_argument_values = default_argument_values;
/* 000481 */ 		self.argument_number_offset = argument_number_offset;
/* 000483 */ 		self.num_arguments = 0;
/* 000484 */ 		self.argument_names = [];
/* 000485 */ 		var __iterable0__ = (function () {
/* 000485 */ 			var __accu0__ = self.parsed_arguments_infos;
/* 000485 */ 			return __call__ (__accu0__.py_keys, __accu0__);
/* 000485 */ 		}) ();
/* 000485 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000485 */ 			var arg = __getitem__ (__iterable0__, __index0__);
/* 000486 */ 			if (__t__ (__t__ (__call__ (isinstance, null, arg, int)) || (function () {
/* 000486 */ 				var __accu0__ = arg;
/* 000486 */ 				return __call__ (__accu0__.isdigit, __accu0__);
/* 000486 */ 			}) ())) {
/* 000487 */ 				if (__t__ (__ge__ (arg, self.num_arguments))) {
/* 000488 */ 					self.num_arguments = __add__ (__call__ (int, null, arg), 1);
/* 000488 */ 				}
/* 000488 */ 			}
/* 000489 */ 			else {
/* 000490 */ 				(function () {
/* 000490 */ 					var __accu0__ = self.argument_names;
/* 000490 */ 					return __call__ (__accu0__.append, __accu0__, arg);
/* 000490 */ 				}) ();
/* 000490 */ 			}
/* 000490 */ 		}
/* 000492 */ 		var ifmacros = (function () {
/* 000492 */ 			var __accu0__ = [];
/* 000497 */ 			var __iterable0__ = (function () {
/* 000497 */ 				var __accu1__ = _ifargcmd_types;
/* 000497 */ 				return __call__ (__accu1__.py_keys, __accu1__);
/* 000497 */ 			}) ();
/* 000497 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000497 */ 				var ifmacroname = __getitem__ (__iterable0__, __index0__);
/* 000497 */ 				(function () {
/* 000497 */ 					var __accu1__ = __accu0__;
/* 000493 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SimpleMacroContentIfArgCondition, null, __kwargtrans__ ({macroname: ifmacroname, macro_content_substitutor: self})));
/* 000493 */ 				}) ();
/* 000493 */ 			}
/* 000493 */ 			return __accu0__;
/* 000493 */ 		}) ();
/* 000503 */ 		self.macro_content_parsing_state_delta = __call__ (ParsingStateDeltaExtendLatexContextDb, null, __kwargtrans__ ({extend_latex_context: dict ({'specials': [__call__ (SimpleMacroArgumentPlaceholder, null, '#', __kwargtrans__ ({macro_content_substitutor: self}))], 'macros': ifmacros}), set_attributes: dict ({'is_block_level': null})}));
/* 000516 */ 		if (__t__ (self.callable_node.nodeargd !== null)) {
/* 000517 */ 			var arguments_spec_list = self.callable_node.nodeargd.arguments_spec_list;
/* 000518 */ 			if (__t__ (arguments_spec_list)) {
/* 000519 */ 				var __iterable0__ = __call__ (enumerate, null, arguments_spec_list);
/* 000519 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000519 */ 					var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000519 */ 					var j = __left0__ [0];
/* 000519 */ 					var arg_spec = __left0__ [1];
/* 000520 */ 					if (__t__ (__eq__ (arg_spec.argname, '_SetArgumentNumberOffset'))) {
/* 000521 */ 						// pass;
/* 000526 */ 						self.argument_number_offset = __add__ (j, 1);
/* 000526 */ 						break;
/* 000526 */ 					}
/* 000526 */ 				}
/* 000526 */ 			}
/* 000526 */ 		}
/* 000526 */ 	});},
/* 000531 */ 	get initialize () {return __get__ (this, function (self) {
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000535 */ 		// pass;
/* 000535 */ 	});},
/* 000539 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node, substitution_arg_info) {
/* 000539 */ 		if (arguments.length) {
/* 000539 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000539 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000539 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000539 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000539 */ 					switch (__attrib0__) {
/* 000539 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 					}
/* 000539 */ 				}
/* 000539 */ 			}
/* 000539 */ 		}
/* 000539 */ 		else {
/* 000539 */ 		}
/* 000541 */ 		var value = (function () {
/* 000541 */ 			var __accu0__ = self.substitutor_manager;
/* 000541 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, placeholder_ref, __kwargtrans__ ({placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: self.callable_node, macro_content_substitutor: self}));
/* 000541 */ 		}) ();
/* 000548 */ 		if (__t__ (value !== null)) {
/* 000549 */ 			return value;
/* 000549 */ 		}
/* 000551 */ 		if (__t__ (__eq__ (placeholder_ref, 'body'))) {
/* 000553 */ 			return self.callable_node.nodelist;
/* 000553 */ 		}
/* 000555 */ 		var arg_value = (function () {
/* 000555 */ 			var __accu0__ = self;
/* 000555 */ 			return __call__ (__accu0__.get_argument_placeholder_value, __accu0__, placeholder_ref, placeholder_node);
/* 000555 */ 		}) ();
/* 000557 */ 		if (__t__ (arg_value !== null)) {
/* 000558 */ 			return arg_value;
/* 000558 */ 		}
/* 000560 */ 		var __except0__ = __call__ (ValueError, null, (function () {
/* 000560 */ 			var __accu0__ = 'Invalid callable argument placeholder reference: ‘{}’';
/* 000560 */ 			return __call__ (__accu0__.format, __accu0__, placeholder_ref);
/* 000560 */ 		}) ());
/* 000560 */ 		__except0__.__cause__ = null;
/* 000560 */ 		throw __except0__;
/* 000560 */ 	});},
/* 000566 */ 	get get_argument_key () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000566 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000566 */ 			var placeholder_node = null;
/* 000566 */ 		};
/* 000566 */ 		if (arguments.length) {
/* 000566 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000566 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000566 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000566 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000566 */ 					switch (__attrib0__) {
/* 000566 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000566 */ 					}
/* 000566 */ 				}
/* 000566 */ 			}
/* 000566 */ 		}
/* 000566 */ 		else {
/* 000566 */ 		}
/* 000568 */ 		var argument_key = null;
/* 000569 */ 		if (__t__ (__t__ (placeholder_ref) && (function () {
/* 000569 */ 			var __accu0__ = placeholder_ref;
/* 000569 */ 			return __call__ (__accu0__.isdigit, __accu0__);
/* 000569 */ 		}) ())) {
/* 000571 */ 			var argument_key = __sub__ (__call__ (int, null, placeholder_ref), 1);
/* 000572 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000573 */ 				var argument_key = __call__ (__iadd__, null, argument_key, self.argument_number_offset);
/* 000573 */ 			}
/* 000575 */ 			if (__t__ (__t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, self.num_arguments))) {
/* 000576 */ 				var expected_what = null;
/* 000577 */ 				if (__t__ (__eq__ (self.num_arguments, 0))) {
/* 000578 */ 					var expected_what = 'The callable accepts no numbered arguments';
/* 000578 */ 				}
/* 000579 */ 				else {
/* 000580 */ 					var expected_what = 'Expected a number between 1 and {} (incl.)'.format (self.num_arguments);
/* 000580 */ 				}
/* 000582 */ 				var e = __call__ (LatexWalkerLocatedError, null, 'Invalid argument number: ‘{}’.  {}'.format (placeholder_ref, expected_what), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000586 */ 				(function () {
/* 000586 */ 					var __accu0__ = e;
/* 000586 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000586 */ 				}) ();
/* 000587 */ 				var __except0__ = e;
/* 000587 */ 				__except0__.__cause__ = null;
/* 000587 */ 				throw __except0__;
/* 000587 */ 			}
/* 000587 */ 		}
/* 000588 */ 		else {
/* 000589 */ 			var argument_key = placeholder_ref;
/* 000589 */ 		}
/* 000595 */ 		if (__t__ (!__in__ (argument_key, self.parsed_arguments_infos))) {
/* 000596 */ 			var lastnum = self.num_arguments;
/* 000597 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000598 */ 				var lastnum = __call__ (__isub__, null, lastnum, self.argument_number_offset);
/* 000598 */ 			}
/* 000599 */ 			var valid_arg_specs = 'numbers 1–{}'.format (__sub__ (self.num_arguments, self.argument_number_offset));
/* 000600 */ 			if (__t__ (__call__ (len, null, self.argument_names))) {
/* 000602 */ 				var valid_arg_specs = __add__ (__add__ ((function () {
/* 000602 */ 					var __accu0__ = ',';
/* 000602 */ 					return __call__ (__accu0__.join, __accu0__, (function () {
/* 000602 */ 						var __accu1__ = [];
/* 000602 */ 						var __iterable0__ = self.argument_names;
/* 000602 */ 						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000602 */ 							var argname = __getitem__ (__iterable0__, __index0__);
/* 000602 */ 							(function () {
/* 000602 */ 								var __accu2__ = __accu1__;
/* 000602 */ 								return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (argname));
/* 000602 */ 							}) ();
/* 000602 */ 						}
/* 000602 */ 						return __accu1__;
/* 000602 */ 					}) ());
/* 000602 */ 				}) (), ' and '), valid_arg_specs);
/* 000602 */ 			}
/* 000605 */ 			var e = __call__ (LatexWalkerLocatedError, null, __add__ ('Invalid argument name or index: ‘{}’.  Valid argument '.format (placeholder_ref), 'specifiers are {}'.format (valid_arg_specs)), __kwargtrans__ ({pos: (__t__ (placeholder_node !== null) ? placeholder_node.pos : null)}));
/* 000610 */ 			(function () {
/* 000610 */ 				var __accu0__ = e;
/* 000610 */ 				return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, __kwargtrans__ ({node: self.callable_node}));
/* 000610 */ 			}) ();
/* 000611 */ 			var __except0__ = e;
/* 000611 */ 			__except0__.__cause__ = null;
/* 000611 */ 			throw __except0__;
/* 000611 */ 		}
/* 000613 */ 		return argument_key;
/* 000613 */ 	});},
/* 000616 */ 	get get_parsed_argument_info () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000616 */ 		if (typeof placeholder_node == 'undefined' || (placeholder_node != null && placeholder_node.hasOwnProperty ("__kwargtrans__"))) {;
/* 000616 */ 			var placeholder_node = null;
/* 000616 */ 		};
/* 000616 */ 		if (arguments.length) {
/* 000616 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000616 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000616 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000616 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000616 */ 					switch (__attrib0__) {
/* 000616 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000616 */ 					}
/* 000616 */ 				}
/* 000616 */ 			}
/* 000616 */ 		}
/* 000616 */ 		else {
/* 000616 */ 		}
/* 000618 */ 		var argument_key = (function () {
/* 000618 */ 			var __accu0__ = self;
/* 000618 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000618 */ 		}) ();
/* 000620 */ 		return __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000620 */ 	});},
/* 000623 */ 	get get_argument_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000623 */ 		if (arguments.length) {
/* 000623 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 					switch (__attrib0__) {
/* 000623 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		else {
/* 000623 */ 		}
/* 000625 */ 		var argument_key = (function () {
/* 000625 */ 			var __accu0__ = self;
/* 000625 */ 			return __call__ (__accu0__.get_argument_key, __accu0__, placeholder_ref, placeholder_node);
/* 000625 */ 		}) ();
/* 000627 */ 		var nodelist = (function () {
/* 000627 */ 			var __accu0__ = __getitem__ (self.parsed_arguments_infos, argument_key);
/* 000627 */ 			return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000627 */ 		}) ();
/* 000629 */ 		var use_default = false;
/* 000630 */ 		if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000631 */ 			var nodelist = [];
/* 000632 */ 			var use_default = true;
/* 000632 */ 		}
/* 000634 */ 		if (__t__ (use_default)) {
/* 000635 */ 			var nodelist = (function () {
/* 000635 */ 				var __accu0__ = self;
/* 000635 */ 				return __call__ (__accu0__.get_default_argument_value_nodelist, __accu0__, argument_key, __kwargtrans__ ({placeholder_node: placeholder_node}));
/* 000635 */ 			}) ();
/* 000639 */ 			if (__t__ (__t__ (nodelist === null) || __t__ (__eq__ (__call__ (len, null, nodelist), 1)) && __getitem__ (nodelist, 0) === null)) {
/* 000640 */ 				var nodelist = [];
/* 000640 */ 			}
/* 000640 */ 		}
/* 000642 */ 		return nodelist;
/* 000642 */ 	});},
/* 000645 */ 	get get_default_argument_value_flm_text () {return __get__ (this, function (self, argument_key) {
/* 000645 */ 		if (arguments.length) {
/* 000645 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000645 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000645 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000645 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000645 */ 					switch (__attrib0__) {
/* 000645 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000645 */ 					}
/* 000645 */ 				}
/* 000645 */ 			}
/* 000645 */ 		}
/* 000645 */ 		else {
/* 000645 */ 		}
/* 000647 */ 		var argument_ref_user = null;
/* 000649 */ 		var node = self.callable_node;
/* 000651 */ 		if (__t__ (__call__ (isinstance, null, argument_key, int))) {
/* 000653 */ 			var argument_ref_user = __add__ (argument_key, 1);
/* 000654 */ 			if (__t__ (self.argument_number_offset !== null)) {
/* 000655 */ 				var argument_key = __call__ (__isub__, null, argument_key, self.argument_number_offset);
/* 000655 */ 			}
/* 000657 */ 			if (__t__ (__in__ (argument_ref_user, self.default_argument_values))) {
/* 000659 */ 				return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000659 */ 			}
/* 000664 */ 			if (__t__ (__t__ (node.nodeargd === null) || __t__ (node.nodeargd.arguments_spec_list === null) || __t__ (__lt__ (argument_key, 0)) || __ge__ (argument_key, __call__ (len, null, node.nodeargd.arguments_spec_list)))) {
/* 000666 */ 				var __except0__ = __call__ (ValueError, null, (function () {
/* 000666 */ 					var __accu0__ = 'Unexpected invalid argument_key={} for node={}';
/* 000667 */ 					return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000667 */ 				}) ());
/* 000667 */ 				__except0__.__cause__ = null;
/* 000667 */ 				throw __except0__;
/* 000667 */ 			}
/* 000671 */ 			var argname = __getitem__ (node.nodeargd.arguments_spec_list, argument_key).argname;
/* 000672 */ 			if (__t__ (__t__ (!__t__ ((argname))) || !__in__ (argname, self.default_argument_values))) {
/* 000674 */ 				return null;
/* 000674 */ 			}
/* 000677 */ 			var argument_ref_user = argname;
/* 000678 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000678 */ 		}
/* 000682 */ 		if (__t__ (__in__ (argument_key, self.default_argument_values))) {
/* 000684 */ 			var argument_ref_user = argument_key;
/* 000685 */ 			return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000685 */ 		}
/* 000688 */ 		if (__t__ (__t__ (node.nodeargd === null) || node.nodeargd.arguments_spec_list === null)) {
/* 000689 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000689 */ 				var __accu0__ = 'Unexpected invalid node arguments for node={}';
/* 000690 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, node));
/* 000690 */ 			}) ());
/* 000690 */ 			__except0__.__cause__ = null;
/* 000690 */ 			throw __except0__;
/* 000690 */ 		}
/* 000691 */ 		var __break0__ = false;
/* 000691 */ 		var __iterable0__ = __call__ (enumerate, null, node.nodeargd.arguments_spec_list);
/* 000691 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000691 */ 			var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000691 */ 			var arg_j = __left0__ [0];
/* 000691 */ 			var arg_spec = __left0__ [1];
/* 000692 */ 			if (__t__ (__eq__ (arg_spec.argname, argument_key))) {
/* 000692 */ 				__break0__ = true;
/* 000692 */ 				break;
/* 000692 */ 			}
/* 000692 */ 		}
/* 000694 */ 		if (!__break0__) {
/* 000695 */ 			var __except0__ = __call__ (ValueError, null, (function () {
/* 000695 */ 				var __accu0__ = 'Unexpected invalid argument argname={} for node={}';
/* 000696 */ 				return __call__ (__accu0__.format, __accu0__, __call__ (repr, null, argument_key), __call__ (repr, null, node));
/* 000696 */ 			}) ());
/* 000696 */ 			__except0__.__cause__ = null;
/* 000696 */ 			throw __except0__;
/* 000696 */ 		}
/* 000698 */ 		var argument_ref_user = __add__ (arg_j, 1);
/* 000699 */ 		if (__t__ (self.argument_number_offset !== null)) {
/* 000700 */ 			var argument_ref_user = __call__ (__isub__, null, argument_ref_user, self.argument_number_offset);
/* 000700 */ 		}
/* 000701 */ 		if (__t__ (!__in__ (argument_ref_user, self.default_argument_values))) {
/* 000703 */ 			return null;
/* 000703 */ 		}
/* 000706 */ 		return __getitem__ (self.default_argument_values, argument_ref_user);
/* 000706 */ 	});},
/* 000708 */ 	get get_default_argument_value_nodelist () {return __get__ (this, function (self, argument_key, placeholder_node) {
/* 000708 */ 		if (arguments.length) {
/* 000708 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000708 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000708 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000708 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000708 */ 					switch (__attrib0__) {
/* 000708 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 						case 'argument_key': var argument_key = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000708 */ 					}
/* 000708 */ 				}
/* 000708 */ 			}
/* 000708 */ 		}
/* 000708 */ 		else {
/* 000708 */ 		}
/* 000710 */ 		var is_block_level = placeholder_node.parsing_state.is_block_level;
/* 000712 */ 		var default_arg_flm_text = (function () {
/* 000712 */ 			var __accu0__ = self;
/* 000712 */ 			return __call__ (__accu0__.get_default_argument_value_flm_text, __accu0__, argument_key);
/* 000712 */ 		}) ();
/* 000714 */ 		if (__t__ (default_arg_flm_text === null)) {
/* 000715 */ 			return [];
/* 000715 */ 		}
/* 000717 */ 		return (function () {
/* 000717 */ 			var __accu0__ = self;
/* 000717 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, default_arg_flm_text, __kwargtrans__ ({add_what: 'default ‘{}’'.format (argument_key), is_block_level: is_block_level}));
/* 000717 */ 		}) ();
/* 000717 */ 	});},
/* 000726 */ 	get compile_flm_text () {return __get__ (this, function (self, flm_text, add_what, is_block_level, parsing_state_delta) {
/* 000726 */ 		if (typeof add_what == 'undefined' || (add_what != null && add_what.hasOwnProperty ("__kwargtrans__"))) {;
/* 000726 */ 			var add_what = null;
/* 000726 */ 		};
/* 000726 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000726 */ 			var is_block_level = null;
/* 000726 */ 		};
/* 000726 */ 		if (typeof parsing_state_delta == 'undefined' || (parsing_state_delta != null && parsing_state_delta.hasOwnProperty ("__kwargtrans__"))) {;
/* 000726 */ 			var parsing_state_delta = null;
/* 000726 */ 		};
/* 000726 */ 		if (arguments.length) {
/* 000726 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000726 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000726 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000726 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000726 */ 					switch (__attrib0__) {
/* 000726 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'flm_text': var flm_text = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'add_what': var add_what = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 						case 'parsing_state_delta': var parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000726 */ 					}
/* 000726 */ 				}
/* 000726 */ 			}
/* 000726 */ 		}
/* 000726 */ 		else {
/* 000726 */ 		}
/* 000729 */ 		var mc_parsing_state_delta = self.macro_content_parsing_state_delta;
/* 000730 */ 		var callable_node = self.callable_node;
/* 000731 */ 		var base_latex_walker = callable_node.latex_walker;
/* 000732 */ 		var flm_environment = base_latex_walker.flm_environment;
/* 000734 */ 		var what = '{}→{}'.format (base_latex_walker.what, (function () {
/* 000734 */ 			var __accu0__ = self.substitutor_manager.spec_object;
/* 000734 */ 			return __call__ (__accu0__.get_what, __accu0__);
/* 000734 */ 		}) ());
/* 000735 */ 		if (__t__ (add_what)) {
/* 000736 */ 			var what = __call__ (__iadd__, null, what, '[{}]'.format (add_what));
/* 000736 */ 		}
/* 000738 */ 		var patched_callables = __call__ (_make_patched_callables, null, flm_environment);
/* 000740 */ 		if (__t__ (__in__ ('macros', patched_callables))) {
/* 000741 */ 			if (__t__ (!__in__ ('macros', mc_parsing_state_delta.extend_latex_context))) {
/* 000742 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', []);
/* 000742 */ 			}
/* 000743 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'macros', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'macros'), __getitem__ (patched_callables, 'macros')));
/* 000743 */ 		}
/* 000746 */ 		if (__t__ (__in__ ('environments', patched_callables))) {
/* 000747 */ 			if (__t__ (!__in__ ('environments', mc_parsing_state_delta.extend_latex_context))) {
/* 000748 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', []);
/* 000748 */ 			}
/* 000749 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'environments', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'environments'), __getitem__ (patched_callables, 'environments')));
/* 000749 */ 		}
/* 000752 */ 		if (__t__ (__in__ ('specials', patched_callables))) {
/* 000753 */ 			if (__t__ (!__in__ ('specials', mc_parsing_state_delta.extend_latex_context))) {
/* 000754 */ 				__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', []);
/* 000754 */ 			}
/* 000755 */ 			__setitem__ (mc_parsing_state_delta.extend_latex_context, 'specials', __call__ (__iadd__, null, __getitem__ (mc_parsing_state_delta.extend_latex_context, 'specials'), __getitem__ (patched_callables, 'specials')));
/* 000755 */ 		}
/* 000764 */ 		var content_latex_walker = (function () {
/* 000764 */ 			var __accu0__ = flm_environment;
/* 000764 */ 			return __call__ (__accu0__.make_latex_walker, __accu0__, flm_text, __kwargtrans__ ({is_block_level: is_block_level, parsing_mode: base_latex_walker.parsing_mode, resource_info: base_latex_walker.resource_info, standalone_mode: base_latex_walker.standalone_mode, tolerant_parsing: base_latex_walker.tolerant_parsing, what: what, input_lineno_colno_offsets: null}));
/* 000764 */ 		}) ();
/* 000775 */ 		var content_parsing_state = (function () {
/* 000775 */ 			var __accu0__ = mc_parsing_state_delta;
/* 000775 */ 			return __call__ (__accu0__.get_updated_parsing_state, __accu0__, callable_node.parsing_state, content_latex_walker);
/* 000775 */ 		}) ();
/* 000779 */ 		if (__t__ (parsing_state_delta !== null)) {
/* 000780 */ 			var content_parsing_state = (function () {
/* 000780 */ 				var __accu0__ = parsing_state_delta;
/* 000780 */ 				return __call__ (__accu0__.get_updated_parsing_state, __accu0__, content_parsing_state, content_latex_walker);
/* 000780 */ 			}) ();
/* 000780 */ 		}
/* 000785 */ 		var __left0__ = (function () {
/* 000785 */ 			var __accu0__ = content_latex_walker;
/* 000786 */ 			return __call__ (__accu0__.parse_content, __accu0__, (function () {
/* 000786 */ 				var __accu1__ = latexnodes_parsers;
/* 000786 */ 				return __call__ (__accu1__.LatexGeneralNodesParser, __accu1__);
/* 000786 */ 			}) (), __kwargtrans__ ({parsing_state: content_parsing_state}));
/* 000786 */ 		}) ();
/* 000786 */ 		var nodes = __left0__ [0];
/* 000786 */ 		var newpsdelta = __left0__ [1];
/* 000789 */ 		if (__t__ (newpsdelta !== null)) {
/* 000790 */ 			(function () {
/* 000790 */ 				var __accu0__ = logger;
/* 000790 */ 				return __call__ (__accu0__.warning, __accu0__, 'Ignoring parsing state delta from compiling substitution nodes {}'.format (what));
/* 000790 */ 			}) ();
/* 000790 */ 		}
/* 000794 */ 		return nodes;
/* 000794 */ 	});}
/* 000794 */ });
/* 000800 */ export var MacroContentSubstitutorManager =  __class__ ('MacroContentSubstitutorManager', [object], {
/* 000800 */ 	__module__: __name__,
/* 000802 */ 	MacroContentSubstitutorClass: MacroContentSubstitutor,
/* 000804 */ 	get __init__ () {return __get__ (this, function (self, spec_object, argument_number_offset, default_argument_values) {
/* 000804 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000804 */ 			var argument_number_offset = null;
/* 000804 */ 		};
/* 000804 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000804 */ 			var default_argument_values = null;
/* 000804 */ 		};
/* 000804 */ 		if (arguments.length) {
/* 000804 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000804 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000804 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000804 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000804 */ 					switch (__attrib0__) {
/* 000804 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'spec_object': var spec_object = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000804 */ 					}
/* 000804 */ 				}
/* 000804 */ 			}
/* 000804 */ 		}
/* 000804 */ 		else {
/* 000804 */ 		}
/* 000809 */ 		__call__ (__call__ (__super__, null, MacroContentSubstitutorManager, '__init__'), null, self);
/* 000810 */ 		self.spec_object = spec_object;
/* 000811 */ 		self.argument_number_offset = argument_number_offset;
/* 000812 */ 		self.default_argument_values = default_argument_values;
/* 000812 */ 	});},
/* 000814 */ 	get make_macro_content_substitutor () {return __get__ (this, function (self, callable_node) {
/* 000814 */ 		if (arguments.length) {
/* 000814 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000814 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000814 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000814 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000814 */ 					switch (__attrib0__) {
/* 000814 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000814 */ 					}
/* 000814 */ 				}
/* 000814 */ 			}
/* 000814 */ 		}
/* 000814 */ 		else {
/* 000814 */ 		}
/* 000817 */ 		var parsed_arguments_infos = (function () {
/* 000817 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: callable_node}));
/* 000817 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__);
/* 000817 */ 		}) ();
/* 000819 */ 		var parsed_arguments_infos = (function () {
/* 000819 */ 			var __accu0__ = self;
/* 000819 */ 			return __call__ (__accu0__.filter_parsed_arguments_infos, __accu0__, parsed_arguments_infos, callable_node);
/* 000819 */ 		}) ();
/* 000824 */ 		return (function () {
/* 000824 */ 			var __accu0__ = self;
/* 000824 */ 			return __call__ (__accu0__.MacroContentSubstitutorClass, __accu0__, __kwargtrans__ ({substitutor_manager: self, callable_node: callable_node, parsed_arguments_infos: parsed_arguments_infos, argument_number_offset: self.argument_number_offset, default_argument_values: self.default_argument_values}));
/* 000824 */ 		}) ();
/* 000824 */ 	});},
/* 000832 */ 	get filter_parsed_arguments_infos () {return __get__ (this, function (self, parsed_arguments_infos, callable_node) {
/* 000832 */ 		if (arguments.length) {
/* 000832 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000832 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000832 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000832 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000832 */ 					switch (__attrib0__) {
/* 000832 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'parsed_arguments_infos': var parsed_arguments_infos = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000832 */ 					}
/* 000832 */ 				}
/* 000832 */ 			}
/* 000832 */ 		}
/* 000832 */ 		else {
/* 000832 */ 		}
/* 000833 */ 		return parsed_arguments_infos;
/* 000833 */ 	});},
/* 000835 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 000835 */ 		if (arguments.length) {
/* 000835 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000835 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000835 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000835 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000835 */ 					switch (__attrib0__) {
/* 000835 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 000835 */ 					}
/* 000835 */ 				}
/* 000835 */ 			}
/* 000835 */ 		}
/* 000835 */ 		else {
/* 000835 */ 		}
/* 000845 */ 		return (function () {
/* 000845 */ 			var __accu0__ = self.spec_object;
/* 000845 */ 			return __call__ (__accu0__.get_placeholder_value, __accu0__, __kwargtrans__ ({placeholder_ref: placeholder_ref, placeholder_node: placeholder_node, substitution_arg_info: substitution_arg_info, callable_node: callable_node, macro_content_substitutor: macro_content_substitutor}));
/* 000845 */ 		}) ();
/* 000845 */ 	});}
/* 000845 */ });
/* 000859 */ export var SubstitutionCallableSpecInfo =  __class__ ('SubstitutionCallableSpecInfo', [FLMSpecInfo], {
/* 000859 */ 	__module__: __name__,
/* 000894 */ 	allowed_in_standalone_mode: true,
/* 000896 */ 	MacroContentSubstitutorManagerClass: MacroContentSubstitutorManager,
/* 000898 */ 	get __init__ () {return __get__ (this, function (self, spec_node_parser_type, arguments_spec_list, default_argument_values, argument_number_offset, content, is_block_level, macro_content_substitutor_manager, render_time_substitution) {
/* 000898 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var arguments_spec_list = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof default_argument_values == 'undefined' || (default_argument_values != null && default_argument_values.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var default_argument_values = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof argument_number_offset == 'undefined' || (argument_number_offset != null && argument_number_offset.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var argument_number_offset = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof content == 'undefined' || (content != null && content.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var content = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var is_block_level = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof macro_content_substitutor_manager == 'undefined' || (macro_content_substitutor_manager != null && macro_content_substitutor_manager.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var macro_content_substitutor_manager = null;
/* 000898 */ 		};
/* 000898 */ 		if (typeof render_time_substitution == 'undefined' || (render_time_substitution != null && render_time_substitution.hasOwnProperty ("__kwargtrans__"))) {;
/* 000898 */ 			var render_time_substitution = false;
/* 000898 */ 		};
/* 000898 */ 		var kwargs = dict ();
/* 000898 */ 		if (arguments.length) {
/* 000898 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000898 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000898 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000898 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000898 */ 					switch (__attrib0__) {
/* 000898 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'default_argument_values': var default_argument_values = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'argument_number_offset': var argument_number_offset = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'macro_content_substitutor_manager': var macro_content_substitutor_manager = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						case 'render_time_substitution': var render_time_substitution = __allkwargs0__ [__attrib0__]; break;
/* 000898 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000898 */ 					}
/* 000898 */ 				}
/* 000898 */ 				delete kwargs.__kwargtrans__;
/* 000898 */ 			}
/* 000898 */ 		}
/* 000898 */ 		else {
/* 000898 */ 		}
/* 000911 */ 		if (__t__ (__t__ (arguments_spec_list !== null) && __call__ (len, null, arguments_spec_list))) {
/* 000913 */ 			var arguments_spec_list = (function () {
/* 000913 */ 				var __accu0__ = [];
/* 000913 */ 				var __iterable0__ = arguments_spec_list;
/* 000913 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000913 */ 					var arg = __getitem__ (__iterable0__, __index0__);
/* 000913 */ 					(function () {
/* 000913 */ 						var __accu1__ = __accu0__;
/* 000913 */ 						return __call__ (__accu1__.append, __accu1__, __call__ (_get_arg_spec, null, arg));
/* 000913 */ 					}) ();
/* 000913 */ 				}
/* 000913 */ 				return __accu0__;
/* 000913 */ 			}) ();
/* 000913 */ 		}
/* 000915 */ 		__call__ (__call__ (__super__, null, SubstitutionCallableSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({spec_node_parser_type: spec_node_parser_type, arguments_spec_list: arguments_spec_list}, kwargs)));
/* 000921 */ 		if (__t__ (macro_content_substitutor_manager === null)) {
/* 000922 */ 			var macro_content_substitutor_manager = (function () {
/* 000922 */ 				var __accu0__ = self;
/* 000922 */ 				return __call__ (__accu0__.MacroContentSubstitutorManagerClass, __accu0__, __kwargtrans__ ({spec_object: self, default_argument_values: default_argument_values, argument_number_offset: argument_number_offset}));
/* 000922 */ 			}) ();
/* 000922 */ 		}
/* 000926 */ 		else {
/* 000928 */ 			if (__t__ (default_argument_values !== null)) {
/* 000929 */ 				(function () {
/* 000929 */ 					var __accu0__ = logger;
/* 000929 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `default_argument_values` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000929 */ 				}) ();
/* 000929 */ 			}
/* 000934 */ 			if (__t__ (argument_number_offset !== null)) {
/* 000935 */ 				(function () {
/* 000935 */ 					var __accu0__ = logger;
/* 000935 */ 					return __call__ (__accu0__.warning, __accu0__, 'Ignoring `argument_number_offset` in SubstitutionCallableSpecInfo constructor because you already provided a macro_content_substitutor_manager instance.');
/* 000935 */ 				}) ();
/* 000935 */ 			}
/* 000935 */ 		}
/* 000941 */ 		self.macro_content_substitutor_manager = macro_content_substitutor_manager;
/* 000943 */ 		if (__t__ (content === null)) {
/* 000944 */ 			var content = '';
/* 000944 */ 		}
/* 000946 */ 		self.content_textmode = null;
/* 000947 */ 		self.content_mathmode = null;
/* 000948 */ 		if (__t__ (__call__ (isinstance, null, content, str))) {
/* 000949 */ 			self.content_textmode = content;
/* 000950 */ 			self.content_mathmode = content;
/* 000950 */ 		}
/* 000951 */ 		else {
/* 000952 */ 			if (__t__ (__in__ ('textmode', content))) {
/* 000953 */ 				self.content_textmode = __getitem__ (content, 'textmode');
/* 000953 */ 			}
/* 000954 */ 			if (__t__ (__in__ ('mathmode', content))) {
/* 000955 */ 				self.content_mathmode = __getitem__ (content, 'mathmode');
/* 000955 */ 			}
/* 000955 */ 		}
/* 000957 */ 		self.render_time_substitution = render_time_substitution;
/* 000959 */ 		// pass;
/* 000959 */ 	});},
/* 000967 */ 	get get_what () {return __get__ (this, function (self) {
/* 000967 */ 		if (arguments.length) {
/* 000967 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000967 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000967 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000967 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000967 */ 					switch (__attrib0__) {
/* 000967 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000967 */ 					}
/* 000967 */ 				}
/* 000967 */ 			}
/* 000967 */ 		}
/* 000967 */ 		else {
/* 000967 */ 		}
/* 000968 */ 		if (__t__ (__call__ (hasattr, null, self, 'macroname'))) {
/* 000969 */ 			return __add__ (__add__ ('“\\', __call__ (str, null, self.macroname)), '”');
/* 000969 */ 		}
/* 000970 */ 		else if (__t__ (__call__ (hasattr, null, self, 'environmentname'))) {
/* 000971 */ 			return __add__ (__add__ ('“\\begin{', __call__ (str, null, self.environmentname)), '}...\\end{..}”');
/* 000971 */ 		}
/* 000972 */ 		else if (__t__ (__call__ (hasattr, null, self, 'specials_chars'))) {
/* 000973 */ 			return __add__ (__add__ ('“', __call__ (str, null, self.specials_chars)), '”');
/* 000973 */ 		}
/* 000974 */ 		return '(?callable?)';
/* 000974 */ 	});},
/* 000977 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000977 */ 		if (arguments.length) {
/* 000977 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000977 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000977 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000977 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000977 */ 					switch (__attrib0__) {
/* 000977 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000977 */ 					}
/* 000977 */ 				}
/* 000977 */ 			}
/* 000977 */ 		}
/* 000977 */ 		else {
/* 000977 */ 		}
/* 000979 */ 		// pass;
/* 000983 */ 		if (__t__ (node.parsing_state.in_math_mode)) {
/* 000984 */ 			var macro_replacement_flm_text = self.content_mathmode;
/* 000984 */ 		}
/* 000985 */ 		else {
/* 000986 */ 			var macro_replacement_flm_text = self.content_textmode;
/* 000986 */ 		}
/* 000988 */ 		if (__t__ (macro_replacement_flm_text === null)) {
/* 000989 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, __add__ (__add__ ('Custom macro ‘\\{}’ not allowed here (replacement is None in '.format (self.macroname), (__t__ (node.parsing_state.in_math_mode) ? 'math' : 'text')), ' mode).'), __kwargtrans__ ({pos: node.pos}));
/* 000989 */ 			__except0__.__cause__ = null;
/* 000989 */ 			throw __except0__;
/* 000989 */ 		}
/* 000996 */ 		node.flm_macro_replacement_flm_text = macro_replacement_flm_text;
/* 000998 */ 		var substitute_nodelist = (function () {
/* 000998 */ 			var __accu0__ = self;
/* 000998 */ 			return __call__ (__accu0__.compile_subst_nodes, __accu0__, node);
/* 000998 */ 		}) ();
/* 001000 */ 		node.flm_macro_replacement_flm_nodes = substitute_nodelist;
/* 001002 */ 		var substitute_nodelist_parsing_state = substitute_nodelist.parsing_state;
/* 001004 */ 		var substitute_node = (function () {
/* 001004 */ 			var __accu0__ = node.latex_walker;
/* 001004 */ 			return __call__ (__accu0__.make_node, __accu0__, LatexGroupNode, __kwargtrans__ ({parsing_state: substitute_nodelist_parsing_state, delimiters: tuple (['', '']), nodelist: substitute_nodelist, pos: node.pos, pos_end: node.pos_end}));
/* 001004 */ 		}) ();
/* 001013 */ 		node.flm_macro_replacement_flm_group_node = substitute_node;
/* 001015 */ 		if (__t__ (self.render_time_substitution)) {
/* 001016 */ 			// pass;
/* 001019 */ 			return ;
/* 001019 */ 		}
/* 001021 */ 		// pass;
/* 001024 */ 		node.flm_SUBSTITUTE_NODE = substitute_node;
/* 001024 */ 	});},
/* 001027 */ 	get compile_subst_nodes () {return __get__ (this, function (self, node) {
/* 001027 */ 		if (arguments.length) {
/* 001027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001027 */ 					switch (__attrib0__) {
/* 001027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001027 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001027 */ 					}
/* 001027 */ 				}
/* 001027 */ 			}
/* 001027 */ 		}
/* 001027 */ 		else {
/* 001027 */ 		}
/* 001035 */ 		var macro_replacement_flm_text = node.flm_macro_replacement_flm_text;
/* 001038 */ 		var macro_content_substitutor = (function () {
/* 001038 */ 			var __accu0__ = self.macro_content_substitutor_manager;
/* 001038 */ 			return __call__ (__accu0__.make_macro_content_substitutor, __accu0__, __kwargtrans__ ({callable_node: node}));
/* 001038 */ 		}) ();
/* 001042 */ 		(function () {
/* 001042 */ 			var __accu0__ = macro_content_substitutor;
/* 001042 */ 			return __call__ (__accu0__.initialize, __accu0__);
/* 001042 */ 		}) ();
/* 001044 */ 		var nodes = (function () {
/* 001044 */ 			var __accu0__ = macro_content_substitutor;
/* 001044 */ 			return __call__ (__accu0__.compile_flm_text, __accu0__, macro_replacement_flm_text);
/* 001044 */ 		}) ();
/* 001048 */ 		return nodes;
/* 001048 */ 	});},
/* 001051 */ 	get get_placeholder_value () {return __get__ (this, function (self, placeholder_ref, placeholder_node) {
/* 001051 */ 		if (arguments.length) {
/* 001051 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001051 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001051 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001051 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001051 */ 					switch (__attrib0__) {
/* 001051 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'placeholder_ref': var placeholder_ref = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'placeholder_node': var placeholder_node = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'substitution_arg_info': var substitution_arg_info = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'callable_node': var callable_node = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 						case 'macro_content_substitutor': var macro_content_substitutor = __allkwargs0__ [__attrib0__]; break;
/* 001051 */ 					}
/* 001051 */ 				}
/* 001051 */ 			}
/* 001051 */ 		}
/* 001051 */ 		else {
/* 001051 */ 		}
/* 001061 */ 		return null;
/* 001061 */ 	});},
/* 001064 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 001064 */ 		if (arguments.length) {
/* 001064 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001064 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001064 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001064 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001064 */ 					switch (__attrib0__) {
/* 001064 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 001064 */ 					}
/* 001064 */ 				}
/* 001064 */ 			}
/* 001064 */ 		}
/* 001064 */ 		else {
/* 001064 */ 		}
/* 001066 */ 		if (__t__ (!__t__ ((self.render_time_substitution)))) {
/* 001067 */ 			(function () {
/* 001067 */ 				var __accu0__ = logger;
/* 001067 */ 				return __call__ (__accu0__.error, __accu0__, 'Rendering substitution macro node that should have been substituted in node tree!');
/* 001067 */ 			}) ();
/* 001067 */ 		}
/* 001072 */ 		// pass;
/* 001076 */ 		return (function () {
/* 001076 */ 			var __accu0__ = render_context.fragment_renderer;
/* 001076 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.flm_macro_replacement_flm_nodes, render_context);
/* 001076 */ 		}) ();
/* 001076 */ 	});}
/* 001076 */ });
/* 001083 */ export var SubstitutionMacro =  __class__ ('SubstitutionMacro', [SubstitutionCallableSpecInfo], {
/* 001083 */ 	__module__: __name__,
/* 001084 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 001084 */ 		var kwargs = dict ();
/* 001084 */ 		if (arguments.length) {
/* 001084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001084 */ 					switch (__attrib0__) {
/* 001084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001084 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 001084 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001084 */ 					}
/* 001084 */ 				}
/* 001084 */ 				delete kwargs.__kwargtrans__;
/* 001084 */ 			}
/* 001084 */ 		}
/* 001084 */ 		else {
/* 001084 */ 		}
/* 001085 */ 		__call__ (__call__ (__super__, null, SubstitutionMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 001085 */ 	});}
/* 001085 */ });
/* 001092 */ export var SubstitutionEnvironment =  __class__ ('SubstitutionEnvironment', [SubstitutionCallableSpecInfo], {
/* 001092 */ 	__module__: __name__,
/* 001093 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 001093 */ 		var kwargs = dict ();
/* 001093 */ 		if (arguments.length) {
/* 001093 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001093 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001093 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001093 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001093 */ 					switch (__attrib0__) {
/* 001093 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001093 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 001093 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001093 */ 					}
/* 001093 */ 				}
/* 001093 */ 				delete kwargs.__kwargtrans__;
/* 001093 */ 			}
/* 001093 */ 		}
/* 001093 */ 		else {
/* 001093 */ 		}
/* 001094 */ 		__call__ (__call__ (__super__, null, SubstitutionEnvironment, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 001094 */ 	});}
/* 001094 */ });
/* 001102 */ export var SubstitutionSpecials =  __class__ ('SubstitutionSpecials', [SubstitutionCallableSpecInfo], {
/* 001102 */ 	__module__: __name__,
/* 001103 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 001103 */ 		var kwargs = dict ();
/* 001103 */ 		if (arguments.length) {
/* 001103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001103 */ 					switch (__attrib0__) {
/* 001103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001103 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 001103 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 001103 */ 					}
/* 001103 */ 				}
/* 001103 */ 				delete kwargs.__kwargtrans__;
/* 001103 */ 			}
/* 001103 */ 		}
/* 001103 */ 		else {
/* 001103 */ 		}
/* 001104 */ 		__call__ (__call__ (__super__, null, SubstitutionSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 001104 */ 	});}
/* 001104 */ });
/* 001136 */ export var FeatureSubstMacros =  __class__ ('FeatureSubstMacros', [Feature], {
/* 001136 */ 	__module__: __name__,
/* 001143 */ 	DocumentManager: null,
/* 001144 */ 	RenderManager: null,
/* 001146 */ 	feature_name: 'macros',
/* 001147 */ 	feature_title: 'Custom macros definitions',
/* 001150 */ 	get __init__ () {return __get__ (this, function (self, definitions) {
/* 001150 */ 		if (arguments.length) {
/* 001150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001150 */ 					switch (__attrib0__) {
/* 001150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001150 */ 						case 'definitions': var definitions = __allkwargs0__ [__attrib0__]; break;
/* 001150 */ 					}
/* 001150 */ 				}
/* 001150 */ 			}
/* 001150 */ 		}
/* 001150 */ 		else {
/* 001150 */ 		}
/* 001158 */ 		__call__ (__call__ (__super__, null, FeatureSubstMacros, '__init__'), null, self);
/* 001160 */ 		if (__t__ (definitions === null)) {
/* 001161 */ 			var definitions = dict ({});
/* 001161 */ 		}
/* 001162 */ 		if (__t__ (!__in__ ('macros', definitions))) {
/* 001163 */ 			__setitem__ (definitions, 'macros', dict ({}));
/* 001163 */ 		}
/* 001164 */ 		if (__t__ (!__in__ ('environments', definitions))) {
/* 001165 */ 			__setitem__ (definitions, 'environments', dict ({}));
/* 001165 */ 		}
/* 001166 */ 		if (__t__ (!__in__ ('specials', definitions))) {
/* 001167 */ 			__setitem__ (definitions, 'specials', dict ({}));
/* 001167 */ 		}
/* 001169 */ 		self.definitions = definitions;
/* 001169 */ 	});},
/* 001172 */ 	get add_latex_context_definitions () {return __get__ (this, function (self) {
/* 001172 */ 		if (arguments.length) {
/* 001172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 001172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 001172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 001172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 001172 */ 					switch (__attrib0__) {
/* 001172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 001172 */ 					}
/* 001172 */ 				}
/* 001172 */ 			}
/* 001172 */ 		}
/* 001172 */ 		else {
/* 001172 */ 		}
/* 001177 */ 		return dict ({'macros': (function () {
/* 001177 */ 			var __accu0__ = [];
/* 001180 */ 			var __iterable0__ = (function () {
/* 001180 */ 				var __accu1__ = __getitem__ (self.definitions, 'macros');
/* 001180 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001180 */ 			}) ();
/* 001180 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001180 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001180 */ 				var macroname = __left0__ [0];
/* 001180 */ 				var specdef = __left0__ [1];
/* 001180 */ 				(function () {
/* 001180 */ 					var __accu1__ = __accu0__;
/* 001179 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionMacro, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname}, specdef))));
/* 001179 */ 				}) ();
/* 001179 */ 			}
/* 001179 */ 			return __accu0__;
/* 001179 */ 		}) (), 'environments': (function () {
/* 001179 */ 			var __accu0__ = [];
/* 001184 */ 			var __iterable0__ = (function () {
/* 001184 */ 				var __accu1__ = __getitem__ (self.definitions, 'environments');
/* 001184 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001184 */ 			}) ();
/* 001184 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001184 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001184 */ 				var environmentname = __left0__ [0];
/* 001184 */ 				var specdef = __left0__ [1];
/* 001184 */ 				(function () {
/* 001184 */ 					var __accu1__ = __accu0__;
/* 001183 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionEnvironment, null, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname}, specdef))));
/* 001183 */ 				}) ();
/* 001183 */ 			}
/* 001183 */ 			return __accu0__;
/* 001183 */ 		}) (), 'specials': (function () {
/* 001183 */ 			var __accu0__ = [];
/* 001188 */ 			var __iterable0__ = (function () {
/* 001188 */ 				var __accu1__ = __getitem__ (self.definitions, 'specials');
/* 001188 */ 				return __call__ (__accu1__.py_items, __accu1__);
/* 001188 */ 			}) ();
/* 001188 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 001188 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 001188 */ 				var specials_chars = __left0__ [0];
/* 001188 */ 				var specdef = __left0__ [1];
/* 001188 */ 				(function () {
/* 001188 */ 					var __accu1__ = __accu0__;
/* 001187 */ 					return __call__ (__accu1__.append, __accu1__, __call__ (SubstitutionSpecials, null, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars}, specdef))));
/* 001187 */ 				}) ();
/* 001187 */ 			}
/* 001187 */ 			return __accu0__;
/* 001187 */ 		}) ()});
/* 001187 */ 	});}
/* 001187 */ });
/* 001193 */ export var FeatureClass = FeatureSubstMacros;
/* 000014 */ 
//# sourceMappingURL=flm.feature.substmacros.map