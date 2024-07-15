/* 000001 */ // Transcrypt'ed from Python, 2024-07-16 00:01:38
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000013 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaChained} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {ParsingStateDeltaChained, FLMArgumentSpec, ParsedArgumentsInfo, macrospec, LatexWalkerParseError, FLMParsingStateDeltaSetBlockLevel, latexnodes_parsers, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.flmspecinfo';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000027 */ export var FLMSpecInfo =  __class__ ('FLMSpecInfo', [macrospec.CallableSpec], {
/* 000027 */ 	__module__: __name__,
/* 000034 */ 	delayed_render: false,
/* 000043 */ 	is_block_level: false,
/* 000050 */ 	is_block_heading: false,
/* 000059 */ 	is_paragraph_break_marker: false,
/* 000066 */ 	allowed_in_standalone_mode: false,
/* 000083 */ 	body_contents_is_block_level: null,
/* 000094 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000094 */ 		var arguments_spec_list = null;
/* 000094 */ 		var kwargs = dict ();
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 				delete kwargs.__kwargtrans__;
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000100 */ 		__call__ (__call__ (__super__, null, FLMSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: spec_node_parser_type}, kwargs)));
/* 000100 */ 	});},
/* 000106 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000117 */ 		// pass;
/* 000117 */ 	});},
/* 000119 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000127 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000127 */ 		__except0__.__cause__ = null;
/* 000127 */ 		throw __except0__;
/* 000127 */ 	});},
/* 000129 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000129 */ 		if (arguments.length) {
/* 000129 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000129 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000129 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000129 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000129 */ 					switch (__attrib0__) {
/* 000129 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000129 */ 					}
/* 000129 */ 				}
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 		else {
/* 000129 */ 		}
/* 000134 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000134 */ 		__except0__.__cause__ = null;
/* 000134 */ 		throw __except0__;
/* 000134 */ 	});},
/* 000143 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000148 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000149 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000151 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000151 */ 				var __accu0__ = node;
/* 000151 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000151 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000151 */ 			__except0__.__cause__ = null;
/* 000151 */ 			throw __except0__;
/* 000151 */ 		}
/* 000155 */ 		node.flm_specinfo = self;
/* 000156 */ 		try {
/* 000157 */ 			(function () {
/* 000157 */ 				var __accu0__ = self;
/* 000157 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000157 */ 			}) ();
/* 000157 */ 		}
/* 000157 */ 		catch (__except0__) {
/* 000157 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000157 */ 				var e = __except0__;
/* 000160 */ 				(function () {
/* 000160 */ 					var __accu0__ = e;
/* 000160 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000160 */ 				}) ();
/* 000161 */ 				var __except1__ = e;
/* 000161 */ 				__except1__.__cause__ = null;
/* 000161 */ 				throw __except1__;
/* 000161 */ 			}
/* 000161 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000161 */ 				var e = __except0__;
/* 000164 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000164 */ 				__except1__.__cause__ = null;
/* 000164 */ 				throw __except1__;
/* 000164 */ 			}
/* 000164 */ 			else if (isinstance (__except0__, Exception)) {
/* 000164 */ 				var e = __except0__;
/* 000167 */ 				(function () {
/* 000167 */ 					var __accu0__ = logger;
/* 000167 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000167 */ 				}) ();
/* 000169 */ 				(function () {
/* 000169 */ 					var __accu0__ = logger;
/* 000170 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000170 */ 						var __accu1__ = node.latex_walker;
/* 000170 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000171 */ 					}) ()), (function () {
/* 000171 */ 						var __accu1__ = node;
/* 000171 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000171 */ 					}) ()));
/* 000171 */ 				}) ();
/* 000173 */ 				__except0__.__cause__ = null;
/* 000173 */ 				throw __except0__;
/* 000173 */ 			}
/* 000173 */ 			else {
/* 000173 */ 				throw __except0__;
/* 000173 */ 			}
/* 000173 */ 		}
/* 000175 */ 		node.flm_is_block_level = self.is_block_level;
/* 000176 */ 		node.flm_is_block_heading = self.is_block_heading;
/* 000177 */ 		node.flm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000182 */ 		return node;
/* 000182 */ 	});},
/* 000185 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000185 */ 		if (arguments.length) {
/* 000185 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000185 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000185 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000185 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000185 */ 					switch (__attrib0__) {
/* 000185 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000185 */ 					}
/* 000185 */ 				}
/* 000185 */ 			}
/* 000185 */ 		}
/* 000185 */ 		else {
/* 000185 */ 		}
/* 000191 */ 		var delta_base = __call__ (__call__ (__super__, null, FLMSpecInfo, 'make_body_parsing_state_delta'), null, self, token, nodeargd, arg_parsing_state_delta, latex_walker);
/* 000198 */ 		if (__t__ (self.body_contents_is_block_level === null)) {
/* 000199 */ 			return delta_base;
/* 000199 */ 		}
/* 000201 */ 		var delta_block_level = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.body_contents_is_block_level}));
/* 000205 */ 		return __call__ (ParsingStateDeltaChained, null, [delta_base, delta_block_level]);
/* 000205 */ 	});}
/* 000205 */ });
/* 000211 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo], {
/* 000211 */ 	__module__: __name__,
/* 000215 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000215 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000215 */ 			var arguments_spec_list = null;
/* 000215 */ 		};
/* 000215 */ 		var kwargs = dict ();
/* 000215 */ 		if (arguments.length) {
/* 000215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 					switch (__attrib0__) {
/* 000215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 				delete kwargs.__kwargtrans__;
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 		else {
/* 000215 */ 		}
/* 000216 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000216 */ 	});}
/* 000216 */ });
/* 000223 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo], {
/* 000223 */ 	__module__: __name__,
/* 000227 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000227 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000227 */ 			var arguments_spec_list = null;
/* 000227 */ 		};
/* 000227 */ 		var kwargs = dict ();
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 				delete kwargs.__kwargtrans__;
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000228 */ 	});}
/* 000228 */ });
/* 000235 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo], {
/* 000235 */ 	__module__: __name__,
/* 000239 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000239 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000239 */ 			var arguments_spec_list = null;
/* 000239 */ 		};
/* 000239 */ 		var kwargs = dict ();
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 				delete kwargs.__kwargtrans__;
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000240 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000240 */ 	});}
/* 000240 */ });
/* 000252 */ export var make_verb_argument = function (value) {
/* 000252 */ 	if (arguments.length) {
/* 000252 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 				switch (__attrib0__) {
/* 000252 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 	}
/* 000252 */ 	else {
/* 000252 */ 	}
/* 000253 */ 	var delim0 = null;
/* 000254 */ 	var __break0__ = false;
/* 000254 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000254 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000254 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000255 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000256 */ 			var delim0 = delim;
/* 000256 */ 			__break0__ = true;
/* 000256 */ 			break;
/* 000256 */ 		}
/* 000256 */ 	}
/* 000258 */ 	if (!__break0__) {
/* 000259 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000259 */ 		__except0__.__cause__ = null;
/* 000259 */ 		throw __except0__;
/* 000259 */ 	}
/* 000261 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000261 */ };
/* 000264 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000264 */ 	__module__: __name__,
/* 000269 */ 	allowed_in_standalone_mode: true,
/* 000271 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		var s = __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000273 */ 		if (__t__ (__eq__ (__call__ (len, null, self.value), 1))) {
/* 000274 */ 			var s = __call__ (__iadd__, null, s, ' (U+{})'.format (__call__ (ord, null, self.value)));
/* 000274 */ 		}
/* 000275 */ 		return s;
/* 000275 */ 	});},
/* 000277 */ 	get __init__ () {return __get__ (this, function (self, value) {
/* 000277 */ 		var kwargs = dict ();
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 				delete kwargs.__kwargtrans__;
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000278 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000279 */ 		self.value = value;
/* 000279 */ 	});},
/* 000281 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000282 */ 		return (function () {
/* 000282 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000282 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000282 */ 		}) ();
/* 000282 */ 	});}
/* 000282 */ });
/* 000285 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue], {
/* 000285 */ 	__module__: __name__,
/* 000289 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000289 */ 		var kwargs = dict ();
/* 000289 */ 		if (arguments.length) {
/* 000289 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000289 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000289 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000289 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000289 */ 					switch (__attrib0__) {
/* 000289 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000289 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 				delete kwargs.__kwargtrans__;
/* 000289 */ 			}
/* 000289 */ 		}
/* 000289 */ 		else {
/* 000289 */ 		}
/* 000290 */ 		__call__ (__call__ (__super__, null, ConstantValueMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000290 */ 	});},
/* 000292 */ 	_fields: tuple (['macroname', 'value'])
/* 000292 */ });
/* 000294 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue], {
/* 000294 */ 	__module__: __name__,
/* 000298 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000298 */ 		var kwargs = dict ();
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 				delete kwargs.__kwargtrans__;
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000299 */ 		__call__ (__call__ (__super__, null, ConstantValueSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000299 */ 	});},
/* 000302 */ 	_fields: tuple (['specials_chars', 'value'])
/* 000302 */ });
/* 000306 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000319 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000319 */ 	var __accu0__ = latexnodes_parsers;
/* 000319 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000319 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000336 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000336 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000336 */ 		var allow_unknown_macros = false;
/* 000336 */ 	};
/* 000336 */ 	if (arguments.length) {
/* 000336 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 				switch (__attrib0__) {
/* 000336 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 	}
/* 000336 */ 	else {
/* 000336 */ 	}
/* 000344 */ 	if (__t__ (!__t__ (((function () {
/* 000344 */ 		var __accu0__ = node_arg_label;
/* 000344 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000344 */ 	}) ())))) {
/* 000345 */ 		return null;
/* 000345 */ 	}
/* 000347 */ 	var the_labels = [];
/* 000348 */ 	var argnodes = (function () {
/* 000348 */ 		var __accu0__ = node_arg_label;
/* 000348 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000348 */ 	}) ();
/* 000349 */ 	var __iterable0__ = argnodes;
/* 000349 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000349 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000350 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000352 */ 			var the_label = (function () {
/* 000352 */ 				var __accu0__ = argnode.nodelist;
/* 000352 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000352 */ 			}) ();
/* 000353 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000354 */ 				var __left0__ = (function () {
/* 000354 */ 					var __accu0__ = the_label;
/* 000354 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000354 */ 				}) ();
/* 000354 */ 				var ref_type = __left0__ [0];
/* 000354 */ 				var ref_label = __left0__ [1];
/* 000354 */ 			}
/* 000355 */ 			else {
/* 000356 */ 				var __left0__ = tuple ([null, the_label]);
/* 000356 */ 				var ref_type = __left0__ [0];
/* 000356 */ 				var ref_label = __left0__ [1];
/* 000356 */ 			}
/* 000358 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000359 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000359 */ 				__except0__.__cause__ = null;
/* 000359 */ 				throw __except0__;
/* 000359 */ 			}
/* 000365 */ 			(function () {
/* 000365 */ 				var __accu0__ = the_labels;
/* 000365 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000365 */ 			}) ();
/* 000365 */ 			continue;
/* 000365 */ 		}
/* 000368 */ 		if (__t__ (allow_unknown_macros)) {
/* 000368 */ 			continue;
/* 000368 */ 		}
/* 000371 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000371 */ 		__except0__.__cause__ = null;
/* 000371 */ 		throw __except0__;
/* 000371 */ 	}
/* 000376 */ 	return the_labels;
/* 000376 */ };
/* 000382 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000382 */ 	__module__: __name__,
/* 000395 */ 	allowed_in_standalone_mode: true,
/* 000399 */ 	_flm_main_text_argument: 'text',
/* 000401 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000402 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000406 */ 		self.text_formats = text_formats;
/* 000406 */ 	});},
/* 000408 */ 	_fields: tuple (['macroname', 'text_formats']),
/* 000410 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000413 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000413 */ 			var __accu0__ = ' ';
/* 000413 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000413 */ 				var __accu1__ = [];
/* 000413 */ 				var __iterable0__ = self.text_formats;
/* 000413 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000413 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000413 */ 					(function () {
/* 000413 */ 						var __accu2__ = __accu1__;
/* 000413 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000413 */ 					}) ();
/* 000413 */ 				}
/* 000413 */ 				return py_iter (__accu1__);
/* 000413 */ 			}) ());
/* 000413 */ 		}) ());
/* 000413 */ 	});},
/* 000416 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000416 */ 		if (arguments.length) {
/* 000416 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000416 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000416 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000416 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000416 */ 					switch (__attrib0__) {
/* 000416 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000416 */ 					}
/* 000416 */ 				}
/* 000416 */ 			}
/* 000416 */ 		}
/* 000416 */ 		else {
/* 000416 */ 		}
/* 000418 */ 		var node_args = (function () {
/* 000418 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000418 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000418 */ 		}) ();
/* 000422 */ 		return (function () {
/* 000422 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000424 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000424 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000424 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000424 */ 			}) (), render_context);
/* 000424 */ 		}) ();
/* 000424 */ 	});}
/* 000424 */ });
/* 000429 */ export var SemanticBlockEnvironment =  __class__ ('SemanticBlockEnvironment', [FLMEnvironmentSpecBase], {
/* 000429 */ 	__module__: __name__,
/* 000435 */ 	allowed_in_standalone_mode: true,
/* 000437 */ 	is_block_level: true,
/* 000439 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000439 */ 		var annotations = null;
/* 000439 */ 		if (arguments.length) {
/* 000439 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000439 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000439 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000439 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000439 */ 					switch (__attrib0__) {
/* 000439 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000439 */ 					}
/* 000439 */ 				}
/* 000439 */ 			}
/* 000439 */ 		}
/* 000439 */ 		else {
/* 000439 */ 		}
/* 000440 */ 		__call__ (__call__ (__super__, null, SemanticBlockEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000443 */ 		self.role = role;
/* 000444 */ 		self.annotations = annotations;
/* 000444 */ 	});},
/* 000446 */ 	_fields: tuple (['environmentname', 'role', 'annotations']),
/* 000448 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000448 */ 		if (arguments.length) {
/* 000448 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000448 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000448 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000448 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000448 */ 					switch (__attrib0__) {
/* 000448 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000448 */ 					}
/* 000448 */ 				}
/* 000448 */ 			}
/* 000448 */ 		}
/* 000448 */ 		else {
/* 000448 */ 		}
/* 000449 */ 		var with_annotations_str = '';
/* 000450 */ 		if (__t__ (__t__ (self.annotations !== null) && __call__ (len, null, self.annotations))) {
/* 000453 */ 			var with_annotations_str = __add__ (__add__ (' and annotations [', (function () {
/* 000453 */ 				var __accu0__ = ',';
/* 000453 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000453 */ 					var __accu1__ = [];
/* 000453 */ 					var __iterable0__ = self.annotations;
/* 000453 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000453 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000453 */ 						(function () {
/* 000453 */ 							var __accu2__ = __accu1__;
/* 000453 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', a), '’'));
/* 000453 */ 						}) ();
/* 000453 */ 					}
/* 000453 */ 					return __accu1__;
/* 000453 */ 				}) ());
/* 000453 */ 			}) ()), ']');
/* 000453 */ 		}
/* 000455 */ 		return __add__ (__add__ (__add__ ('Formats its contents using a semantic block with role ‘', self.role), '’'), with_annotations_str);
/* 000455 */ 	});},
/* 000460 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000462 */ 		var content = (function () {
/* 000462 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000462 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, render_context);
/* 000462 */ 		}) ();
/* 000467 */ 		return (function () {
/* 000467 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000467 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, content, __kwargtrans__ ({role: self.role, render_context: render_context, annotations: self.annotations}));
/* 000467 */ 		}) ();
/* 000467 */ 	});}
/* 000467 */ });
/* 000477 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000477 */ 	__module__: __name__,
/* 000479 */ 	is_block_level: true,
/* 000481 */ 	is_paragraph_break_marker: true,
/* 000483 */ 	allowed_in_standalone_mode: true,
/* 000485 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000485 */ 		if (arguments.length) {
/* 000485 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000485 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000485 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000485 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000485 */ 					switch (__attrib0__) {
/* 000485 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 					}
/* 000485 */ 				}
/* 000485 */ 			}
/* 000485 */ 		}
/* 000485 */ 		else {
/* 000485 */ 		}
/* 000486 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000486 */ 		__except0__.__cause__ = null;
/* 000486 */ 		throw __except0__;
/* 000486 */ 	});},
/* 000488 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000489 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000489 */ 	});}
/* 000489 */ });
/* 000492 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak], {
/* 000492 */ 	__module__: __name__,
/* 000493 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000493 */ 		var kwargs = dict ();
/* 000493 */ 		if (arguments.length) {
/* 000493 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000493 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000493 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000493 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000493 */ 					switch (__attrib0__) {
/* 000493 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000493 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000493 */ 					}
/* 000493 */ 				}
/* 000493 */ 				delete kwargs.__kwargtrans__;
/* 000493 */ 			}
/* 000493 */ 		}
/* 000493 */ 		else {
/* 000493 */ 		}
/* 000494 */ 		__call__ (__call__ (__super__, null, ParagraphBreakSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000494 */ 	});},
/* 000497 */ 	_fields: tuple (['specials_chars'])
/* 000497 */ });
/* 000499 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak], {
/* 000499 */ 	__module__: __name__,
/* 000500 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000500 */ 		var kwargs = dict ();
/* 000500 */ 		if (arguments.length) {
/* 000500 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000500 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000500 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000500 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000500 */ 					switch (__attrib0__) {
/* 000500 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000500 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000500 */ 					}
/* 000500 */ 				}
/* 000500 */ 				delete kwargs.__kwargtrans__;
/* 000500 */ 			}
/* 000500 */ 		}
/* 000500 */ 		else {
/* 000500 */ 		}
/* 000501 */ 		__call__ (__call__ (__super__, null, ParagraphBreakMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000501 */ 	});},
/* 000503 */ 	_fields: tuple (['macroname'])
/* 000503 */ });
/* 000508 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000508 */ 	__module__: __name__,
/* 000510 */ 	allowed_in_standalone_mode: true,
/* 000512 */ 	get __init__ () {return __get__ (this, function (self, error_msg) {
/* 000512 */ 		if (typeof error_msg == 'undefined' || (error_msg != null && error_msg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000512 */ 			var error_msg = null;
/* 000512 */ 		};
/* 000512 */ 		var kwargs = dict ();
/* 000512 */ 		if (arguments.length) {
/* 000512 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000512 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000512 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000512 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000512 */ 					switch (__attrib0__) {
/* 000512 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000512 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000512 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000512 */ 					}
/* 000512 */ 				}
/* 000512 */ 				delete kwargs.__kwargtrans__;
/* 000512 */ 			}
/* 000512 */ 		}
/* 000512 */ 		else {
/* 000512 */ 		}
/* 000513 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000514 */ 		self.error_msg = error_msg;
/* 000514 */ 	});},
/* 000516 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		if (__t__ (self.error_msg)) {
/* 000518 */ 			var msg = self.error_msg;
/* 000518 */ 		}
/* 000519 */ 		else {
/* 000520 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000520 */ 				var __accu0__ = (function () {
/* 000520 */ 					var __accu1__ = node;
/* 000520 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000520 */ 				}) ();
/* 000520 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000520 */ 			}) ());
/* 000520 */ 		}
/* 000522 */ 		(function () {
/* 000522 */ 			var __accu0__ = logger;
/* 000522 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000522 */ 		}) ();
/* 000524 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000524 */ 		__except0__.__cause__ = null;
/* 000524 */ 		throw __except0__;
/* 000524 */ 	});}
/* 000524 */ });
/* 000527 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError], {
/* 000527 */ 	__module__: __name__,
/* 000528 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000528 */ 		var kwargs = dict ();
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 				delete kwargs.__kwargtrans__;
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000529 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000529 */ 	});},
/* 000531 */ 	_fields: tuple (['macroname', 'error_msg'])
/* 000531 */ });
/* 000533 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError], {
/* 000533 */ 	__module__: __name__,
/* 000534 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000534 */ 		var kwargs = dict ();
/* 000534 */ 		if (arguments.length) {
/* 000534 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000534 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000534 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000534 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000534 */ 					switch (__attrib0__) {
/* 000534 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000534 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000534 */ 					}
/* 000534 */ 				}
/* 000534 */ 				delete kwargs.__kwargtrans__;
/* 000534 */ 			}
/* 000534 */ 		}
/* 000534 */ 		else {
/* 000534 */ 		}
/* 000535 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 000535 */ 	});},
/* 000539 */ 	_fields: tuple (['environmentname', 'error_msg'])
/* 000539 */ });
/* 000541 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError], {
/* 000541 */ 	__module__: __name__,
/* 000542 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000542 */ 		var kwargs = dict ();
/* 000542 */ 		if (arguments.length) {
/* 000542 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000542 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000542 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000542 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000542 */ 					switch (__attrib0__) {
/* 000542 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000542 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000542 */ 					}
/* 000542 */ 				}
/* 000542 */ 				delete kwargs.__kwargtrans__;
/* 000542 */ 			}
/* 000542 */ 		}
/* 000542 */ 		else {
/* 000542 */ 		}
/* 000543 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000543 */ 	});},
/* 000547 */ 	_fields: tuple (['specials_chars', 'error_msg'])
/* 000547 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmspecinfo.map