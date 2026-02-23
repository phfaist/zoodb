/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:47
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000013 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaChained} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {FLMArgumentSpec, ParsingStateDeltaChained, ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel, LatexWalkerLocatedError, latexnodes_parsers, LatexWalkerParseError, macrospec};
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
/* 000067 */ 	allowed_in_standalone_mode: false,
/* 000084 */ 	body_contents_is_block_level: null,
/* 000095 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000095 */ 		var arguments_spec_list = null;
/* 000095 */ 		var kwargs = dict ();
/* 000095 */ 		if (arguments.length) {
/* 000095 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000095 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000095 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000095 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000095 */ 					switch (__attrib0__) {
/* 000095 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000095 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000095 */ 					}
/* 000095 */ 				}
/* 000095 */ 				delete kwargs.__kwargtrans__;
/* 000095 */ 			}
/* 000095 */ 		}
/* 000095 */ 		else {
/* 000095 */ 		}
/* 000101 */ 		__call__ (__call__ (__super__, null, FLMSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: spec_node_parser_type}, kwargs)));
/* 000101 */ 	});},
/* 000107 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000118 */ 		// pass;
/* 000118 */ 	});},
/* 000120 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000128 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000128 */ 		__except0__.__cause__ = null;
/* 000128 */ 		throw __except0__;
/* 000128 */ 	});},
/* 000130 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000130 */ 		if (arguments.length) {
/* 000130 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000130 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000130 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000130 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000130 */ 					switch (__attrib0__) {
/* 000130 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000130 */ 					}
/* 000130 */ 				}
/* 000130 */ 			}
/* 000130 */ 		}
/* 000130 */ 		else {
/* 000130 */ 		}
/* 000135 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000135 */ 		__except0__.__cause__ = null;
/* 000135 */ 		throw __except0__;
/* 000135 */ 	});},
/* 000144 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000149 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000150 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000152 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000152 */ 				var __accu0__ = node;
/* 000152 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000152 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000152 */ 			__except0__.__cause__ = null;
/* 000152 */ 			throw __except0__;
/* 000152 */ 		}
/* 000156 */ 		node.flm_specinfo = self;
/* 000157 */ 		try {
/* 000158 */ 			(function () {
/* 000158 */ 				var __accu0__ = self;
/* 000158 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000158 */ 			}) ();
/* 000158 */ 		}
/* 000158 */ 		catch (__except0__) {
/* 000158 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000158 */ 				var e = __except0__;
/* 000161 */ 				(function () {
/* 000161 */ 					var __accu0__ = e;
/* 000161 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000161 */ 				}) ();
/* 000162 */ 				var __except1__ = e;
/* 000162 */ 				__except1__.__cause__ = null;
/* 000162 */ 				throw __except1__;
/* 000162 */ 			}
/* 000162 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000162 */ 				var e = __except0__;
/* 000165 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000165 */ 				__except1__.__cause__ = null;
/* 000165 */ 				throw __except1__;
/* 000165 */ 			}
/* 000165 */ 			else if (isinstance (__except0__, Exception)) {
/* 000165 */ 				var e = __except0__;
/* 000168 */ 				(function () {
/* 000168 */ 					var __accu0__ = logger;
/* 000168 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000168 */ 				}) ();
/* 000170 */ 				(function () {
/* 000170 */ 					var __accu0__ = logger;
/* 000171 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000171 */ 						var __accu1__ = node.latex_walker;
/* 000171 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000172 */ 					}) ()), (function () {
/* 000172 */ 						var __accu1__ = node;
/* 000172 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000172 */ 					}) ()));
/* 000172 */ 				}) ();
/* 000174 */ 				__except0__.__cause__ = null;
/* 000174 */ 				throw __except0__;
/* 000174 */ 			}
/* 000174 */ 			else {
/* 000174 */ 				throw __except0__;
/* 000174 */ 			}
/* 000174 */ 		}
/* 000179 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_block_level')))) && self.is_block_level !== null)) {
/* 000180 */ 			node.flm_is_block_level = self.is_block_level;
/* 000180 */ 		}
/* 000181 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_block_heading'))))) {
/* 000182 */ 			node.flm_is_block_heading = self.is_block_heading;
/* 000182 */ 		}
/* 000183 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker'))))) {
/* 000184 */ 			node.flm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000184 */ 		}
/* 000186 */ 		// pass;
/* 000200 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_SUBSTITUTE_NODE')) && node.flm_SUBSTITUTE_NODE !== null)) {
/* 000201 */ 			var substitute_node = node.flm_SUBSTITUTE_NODE;
/* 000202 */ 			substitute_node.flm_SUBSTITUTE_FOR_NODE = node;
/* 000203 */ 			// pass;
/* 000207 */ 			return substitute_node;
/* 000207 */ 		}
/* 000209 */ 		return node;
/* 000209 */ 	});},
/* 000212 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000218 */ 		var delta_base = __call__ (__call__ (__super__, null, FLMSpecInfo, 'make_body_parsing_state_delta'), null, self, token, nodeargd, arg_parsing_state_delta, latex_walker);
/* 000225 */ 		if (__t__ (self.body_contents_is_block_level === null)) {
/* 000226 */ 			return delta_base;
/* 000226 */ 		}
/* 000228 */ 		var delta_block_level = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.body_contents_is_block_level}));
/* 000232 */ 		return __call__ (ParsingStateDeltaChained, null, [delta_base, delta_block_level]);
/* 000232 */ 	});}
/* 000232 */ });
/* 000238 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo], {
/* 000238 */ 	__module__: __name__,
/* 000242 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000242 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000242 */ 			var arguments_spec_list = null;
/* 000242 */ 		};
/* 000242 */ 		var kwargs = dict ();
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 				delete kwargs.__kwargtrans__;
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000243 */ 	});}
/* 000243 */ });
/* 000250 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo], {
/* 000250 */ 	__module__: __name__,
/* 000254 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000254 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000254 */ 			var arguments_spec_list = null;
/* 000254 */ 		};
/* 000254 */ 		var kwargs = dict ();
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 				delete kwargs.__kwargtrans__;
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000255 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000255 */ 	});}
/* 000255 */ });
/* 000262 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo], {
/* 000262 */ 	__module__: __name__,
/* 000266 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000266 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000266 */ 			var arguments_spec_list = null;
/* 000266 */ 		};
/* 000266 */ 		var kwargs = dict ();
/* 000266 */ 		if (arguments.length) {
/* 000266 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000266 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000266 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000266 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000266 */ 					switch (__attrib0__) {
/* 000266 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000266 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000266 */ 					}
/* 000266 */ 				}
/* 000266 */ 				delete kwargs.__kwargtrans__;
/* 000266 */ 			}
/* 000266 */ 		}
/* 000266 */ 		else {
/* 000266 */ 		}
/* 000267 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000267 */ 	});}
/* 000267 */ });
/* 000279 */ export var make_verb_argument = function (value) {
/* 000279 */ 	if (arguments.length) {
/* 000279 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 				switch (__attrib0__) {
/* 000279 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 	}
/* 000279 */ 	else {
/* 000279 */ 	}
/* 000280 */ 	var delim0 = null;
/* 000281 */ 	var __break0__ = false;
/* 000281 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000281 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000281 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000282 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000283 */ 			var delim0 = delim;
/* 000283 */ 			__break0__ = true;
/* 000283 */ 			break;
/* 000283 */ 		}
/* 000283 */ 	}
/* 000285 */ 	if (!__break0__) {
/* 000286 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000286 */ 		__except0__.__cause__ = null;
/* 000286 */ 		throw __except0__;
/* 000286 */ 	}
/* 000288 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000288 */ };
/* 000291 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000291 */ 	__module__: __name__,
/* 000296 */ 	allowed_in_standalone_mode: true,
/* 000298 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000299 */ 		var s = __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000300 */ 		if (__t__ (__eq__ (__call__ (len, null, self.value), 1))) {
/* 000301 */ 			var s = __call__ (__iadd__, null, s, ' (U+{})'.format (__call__ (ord, null, self.value)));
/* 000301 */ 		}
/* 000302 */ 		return s;
/* 000302 */ 	});},
/* 000304 */ 	get __init__ () {return __get__ (this, function (self, value) {
/* 000304 */ 		var kwargs = dict ();
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 				delete kwargs.__kwargtrans__;
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000306 */ 		self.value = value;
/* 000306 */ 	});},
/* 000308 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000309 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000309 */ 		}) ();
/* 000309 */ 	});}
/* 000309 */ });
/* 000312 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue], {
/* 000312 */ 	__module__: __name__,
/* 000316 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000316 */ 		var kwargs = dict ();
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 				delete kwargs.__kwargtrans__;
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		__call__ (__call__ (__super__, null, ConstantValueMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000317 */ 	});},
/* 000319 */ 	_fields: tuple (['macroname', 'value'])
/* 000319 */ });
/* 000321 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue], {
/* 000321 */ 	__module__: __name__,
/* 000325 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000325 */ 		var kwargs = dict ();
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 				delete kwargs.__kwargtrans__;
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		__call__ (__call__ (__super__, null, ConstantValueSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000326 */ 	});},
/* 000329 */ 	_fields: tuple (['specials_chars', 'value'])
/* 000329 */ });
/* 000333 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000346 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000346 */ 	var __accu0__ = latexnodes_parsers;
/* 000346 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000346 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000363 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000363 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000363 */ 		var allow_unknown_macros = false;
/* 000363 */ 	};
/* 000363 */ 	if (arguments.length) {
/* 000363 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 				switch (__attrib0__) {
/* 000363 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 	}
/* 000363 */ 	else {
/* 000363 */ 	}
/* 000371 */ 	if (__t__ (!__t__ (((function () {
/* 000371 */ 		var __accu0__ = node_arg_label;
/* 000371 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000371 */ 	}) ())))) {
/* 000372 */ 		return null;
/* 000372 */ 	}
/* 000374 */ 	var the_labels = [];
/* 000375 */ 	var argnodes = (function () {
/* 000375 */ 		var __accu0__ = node_arg_label;
/* 000375 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000375 */ 	}) ();
/* 000376 */ 	var __iterable0__ = argnodes;
/* 000376 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000379 */ 			var the_label = (function () {
/* 000379 */ 				var __accu0__ = argnode.nodelist;
/* 000379 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000379 */ 			}) ();
/* 000380 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000381 */ 				var __left0__ = (function () {
/* 000381 */ 					var __accu0__ = the_label;
/* 000381 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000381 */ 				}) ();
/* 000381 */ 				var ref_type = __left0__ [0];
/* 000381 */ 				var ref_label = __left0__ [1];
/* 000381 */ 			}
/* 000382 */ 			else {
/* 000383 */ 				var __left0__ = tuple ([null, the_label]);
/* 000383 */ 				var ref_type = __left0__ [0];
/* 000383 */ 				var ref_label = __left0__ [1];
/* 000383 */ 			}
/* 000385 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000386 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Argument label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000386 */ 				__except0__.__cause__ = null;
/* 000386 */ 				throw __except0__;
/* 000386 */ 			}
/* 000392 */ 			(function () {
/* 000392 */ 				var __accu0__ = the_labels;
/* 000392 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000392 */ 			}) ();
/* 000392 */ 			continue;
/* 000392 */ 		}
/* 000395 */ 		if (__t__ (allow_unknown_macros)) {
/* 000395 */ 			continue;
/* 000395 */ 		}
/* 000398 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000398 */ 		__except0__.__cause__ = null;
/* 000398 */ 		throw __except0__;
/* 000398 */ 	}
/* 000403 */ 	return the_labels;
/* 000403 */ };
/* 000409 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000409 */ 	__module__: __name__,
/* 000422 */ 	allowed_in_standalone_mode: true,
/* 000427 */ 	_flm_main_text_argument: 'text',
/* 000429 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000429 */ 		if (arguments.length) {
/* 000429 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000429 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000429 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000429 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000429 */ 					switch (__attrib0__) {
/* 000429 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000429 */ 					}
/* 000429 */ 				}
/* 000429 */ 			}
/* 000429 */ 		}
/* 000429 */ 		else {
/* 000429 */ 		}
/* 000430 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000434 */ 		self.text_formats = text_formats;
/* 000434 */ 	});},
/* 000436 */ 	_fields: tuple (['macroname', 'text_formats']),
/* 000438 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000438 */ 		if (arguments.length) {
/* 000438 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000438 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000438 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000438 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000438 */ 					switch (__attrib0__) {
/* 000438 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000438 */ 					}
/* 000438 */ 				}
/* 000438 */ 			}
/* 000438 */ 		}
/* 000438 */ 		else {
/* 000438 */ 		}
/* 000441 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000441 */ 			var __accu0__ = ' ';
/* 000441 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000441 */ 				var __accu1__ = [];
/* 000441 */ 				var __iterable0__ = self.text_formats;
/* 000441 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000441 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000441 */ 					(function () {
/* 000441 */ 						var __accu2__ = __accu1__;
/* 000441 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000441 */ 					}) ();
/* 000441 */ 				}
/* 000441 */ 				return py_iter (__accu1__);
/* 000441 */ 			}) ());
/* 000441 */ 		}) ());
/* 000441 */ 	});},
/* 000444 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000444 */ 		if (arguments.length) {
/* 000444 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000444 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000444 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000444 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000444 */ 					switch (__attrib0__) {
/* 000444 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000444 */ 					}
/* 000444 */ 				}
/* 000444 */ 			}
/* 000444 */ 		}
/* 000444 */ 		else {
/* 000444 */ 		}
/* 000446 */ 		var node_args = (function () {
/* 000446 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000446 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000446 */ 		}) ();
/* 000450 */ 		return (function () {
/* 000450 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000452 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000452 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000452 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000452 */ 			}) (), render_context);
/* 000452 */ 		}) ();
/* 000452 */ 	});}
/* 000452 */ });
/* 000457 */ export var SemanticBlockEnvironment =  __class__ ('SemanticBlockEnvironment', [FLMEnvironmentSpecBase], {
/* 000457 */ 	__module__: __name__,
/* 000463 */ 	allowed_in_standalone_mode: true,
/* 000465 */ 	is_block_level: true,
/* 000467 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000467 */ 		var annotations = null;
/* 000467 */ 		if (arguments.length) {
/* 000467 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000467 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000467 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000467 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000467 */ 					switch (__attrib0__) {
/* 000467 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 					}
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 		}
/* 000467 */ 		else {
/* 000467 */ 		}
/* 000468 */ 		__call__ (__call__ (__super__, null, SemanticBlockEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000471 */ 		self.role = role;
/* 000472 */ 		self.annotations = annotations;
/* 000472 */ 	});},
/* 000474 */ 	_fields: tuple (['environmentname', 'role', 'annotations']),
/* 000476 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000476 */ 		if (arguments.length) {
/* 000476 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000476 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000476 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000476 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000476 */ 					switch (__attrib0__) {
/* 000476 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000476 */ 					}
/* 000476 */ 				}
/* 000476 */ 			}
/* 000476 */ 		}
/* 000476 */ 		else {
/* 000476 */ 		}
/* 000477 */ 		var with_annotations_str = '';
/* 000478 */ 		if (__t__ (__t__ (self.annotations !== null) && __call__ (len, null, self.annotations))) {
/* 000481 */ 			var with_annotations_str = __add__ (__add__ (' and annotations [', (function () {
/* 000481 */ 				var __accu0__ = ',';
/* 000481 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000481 */ 					var __accu1__ = [];
/* 000481 */ 					var __iterable0__ = self.annotations;
/* 000481 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000481 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000481 */ 						(function () {
/* 000481 */ 							var __accu2__ = __accu1__;
/* 000481 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', a), '’'));
/* 000481 */ 						}) ();
/* 000481 */ 					}
/* 000481 */ 					return __accu1__;
/* 000481 */ 				}) ());
/* 000481 */ 			}) ()), ']');
/* 000481 */ 		}
/* 000483 */ 		return __add__ (__add__ (__add__ ('Formats its contents using a semantic block with role ‘', self.role), '’'), with_annotations_str);
/* 000483 */ 	});},
/* 000488 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000488 */ 		if (arguments.length) {
/* 000488 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000488 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000488 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000488 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000488 */ 					switch (__attrib0__) {
/* 000488 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000488 */ 					}
/* 000488 */ 				}
/* 000488 */ 			}
/* 000488 */ 		}
/* 000488 */ 		else {
/* 000488 */ 		}
/* 000490 */ 		var content = (function () {
/* 000490 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000490 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, render_context);
/* 000490 */ 		}) ();
/* 000495 */ 		return (function () {
/* 000495 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000495 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, content, __kwargtrans__ ({role: self.role, render_context: render_context, annotations: self.annotations}));
/* 000495 */ 		}) ();
/* 000495 */ 	});}
/* 000495 */ });
/* 000505 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000505 */ 	__module__: __name__,
/* 000507 */ 	is_block_level: true,
/* 000509 */ 	is_paragraph_break_marker: true,
/* 000511 */ 	allowed_in_standalone_mode: true,
/* 000513 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000514 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000514 */ 		__except0__.__cause__ = null;
/* 000514 */ 		throw __except0__;
/* 000514 */ 	});},
/* 000516 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000516 */ 		if (arguments.length) {
/* 000516 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000516 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000516 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000516 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000516 */ 					switch (__attrib0__) {
/* 000516 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000516 */ 					}
/* 000516 */ 				}
/* 000516 */ 			}
/* 000516 */ 		}
/* 000516 */ 		else {
/* 000516 */ 		}
/* 000517 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000517 */ 	});}
/* 000517 */ });
/* 000520 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak], {
/* 000520 */ 	__module__: __name__,
/* 000521 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000521 */ 		var kwargs = dict ();
/* 000521 */ 		if (arguments.length) {
/* 000521 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000521 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000521 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000521 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000521 */ 					switch (__attrib0__) {
/* 000521 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000521 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000521 */ 					}
/* 000521 */ 				}
/* 000521 */ 				delete kwargs.__kwargtrans__;
/* 000521 */ 			}
/* 000521 */ 		}
/* 000521 */ 		else {
/* 000521 */ 		}
/* 000522 */ 		__call__ (__call__ (__super__, null, ParagraphBreakSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000522 */ 	});},
/* 000525 */ 	_fields: tuple (['specials_chars'])
/* 000525 */ });
/* 000527 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak], {
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
/* 000529 */ 		__call__ (__call__ (__super__, null, ParagraphBreakMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000529 */ 	});},
/* 000531 */ 	_fields: tuple (['macroname'])
/* 000531 */ });
/* 000536 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000536 */ 	__module__: __name__,
/* 000538 */ 	allowed_in_standalone_mode: true,
/* 000540 */ 	get __init__ () {return __get__ (this, function (self, error_msg) {
/* 000540 */ 		if (typeof error_msg == 'undefined' || (error_msg != null && error_msg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000540 */ 			var error_msg = null;
/* 000540 */ 		};
/* 000540 */ 		var kwargs = dict ();
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 				delete kwargs.__kwargtrans__;
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000541 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000542 */ 		self.error_msg = error_msg;
/* 000542 */ 	});},
/* 000544 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000544 */ 		if (arguments.length) {
/* 000544 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000544 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000544 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000544 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000544 */ 					switch (__attrib0__) {
/* 000544 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000544 */ 					}
/* 000544 */ 				}
/* 000544 */ 			}
/* 000544 */ 		}
/* 000544 */ 		else {
/* 000544 */ 		}
/* 000545 */ 		if (__t__ (self.error_msg)) {
/* 000546 */ 			var msg = self.error_msg;
/* 000546 */ 		}
/* 000547 */ 		else {
/* 000548 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000548 */ 				var __accu0__ = (function () {
/* 000548 */ 					var __accu1__ = node;
/* 000548 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000548 */ 				}) ();
/* 000548 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000548 */ 			}) ());
/* 000548 */ 		}
/* 000550 */ 		(function () {
/* 000550 */ 			var __accu0__ = logger;
/* 000550 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000550 */ 		}) ();
/* 000552 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000552 */ 		__except0__.__cause__ = null;
/* 000552 */ 		throw __except0__;
/* 000552 */ 	});}
/* 000552 */ });
/* 000555 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError], {
/* 000555 */ 	__module__: __name__,
/* 000556 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000556 */ 		var kwargs = dict ();
/* 000556 */ 		if (arguments.length) {
/* 000556 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000556 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000556 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000556 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000556 */ 					switch (__attrib0__) {
/* 000556 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000556 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000556 */ 					}
/* 000556 */ 				}
/* 000556 */ 				delete kwargs.__kwargtrans__;
/* 000556 */ 			}
/* 000556 */ 		}
/* 000556 */ 		else {
/* 000556 */ 		}
/* 000557 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000557 */ 	});},
/* 000559 */ 	_fields: tuple (['macroname', 'error_msg'])
/* 000559 */ });
/* 000561 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError], {
/* 000561 */ 	__module__: __name__,
/* 000562 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000562 */ 		var kwargs = dict ();
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 				delete kwargs.__kwargtrans__;
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000563 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 000563 */ 	});},
/* 000567 */ 	_fields: tuple (['environmentname', 'error_msg'])
/* 000567 */ });
/* 000569 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError], {
/* 000569 */ 	__module__: __name__,
/* 000570 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000570 */ 		var kwargs = dict ();
/* 000570 */ 		if (arguments.length) {
/* 000570 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000570 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000570 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000570 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000570 */ 					switch (__attrib0__) {
/* 000570 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000570 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000570 */ 					}
/* 000570 */ 				}
/* 000570 */ 				delete kwargs.__kwargtrans__;
/* 000570 */ 			}
/* 000570 */ 		}
/* 000570 */ 		else {
/* 000570 */ 		}
/* 000571 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000571 */ 	});},
/* 000575 */ 	_fields: tuple (['specials_chars', 'error_msg'])
/* 000575 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmspecinfo.map