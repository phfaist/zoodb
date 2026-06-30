/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:23
/* 000029 */ var logging = {};
/* 000029 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000043 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000041 */ import {Any, Callable, Sequence, TypeRenderContext} from './flm._typing_helpers.js';
/* 000036 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaChained} from './pylatexenc.latexnodes.js';
/* 000035 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000034 */ import {LatexNode} from './pylatexenc.latexnodes.nodes.js';
/* 000033 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000029 */ import * as __module_logging__ from './logging.js';
/* 000029 */ __nest__ (logging, '', __module_logging__);
/* 000029 */ export {ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel, Callable, latexnodes_parsers, macrospec, Sequence, LatexWalkerParseError, LatexNode, FLMArgumentSpec, Any, TypeRenderContext, ParsingStateDeltaChained, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.flmspecinfo';
/* 000030 */ export var logger = (function () {
/* 000030 */ 	var __accu0__ = logging;
/* 000030 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000030 */ }) ();
/* 000052 */ export var FLMSpecInfo =  __class__ ('FLMSpecInfo', [macrospec.CallableSpec], {
/* 000052 */ 	__module__: __name__,
/* 000059 */ 	delayed_render: false,
/* 000072 */ 	is_block_level: false,
/* 000085 */ 	is_block_heading: false,
/* 000097 */ 	is_paragraph_break_marker: false,
/* 000105 */ 	allowed_in_standalone_mode: false,
/* 000122 */ 	body_contents_is_block_level: null,
/* 000133 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000133 */ 		var arguments_spec_list = null;
/* 000133 */ 		var kwargs = dict ();
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'spec_node_parser_type': var spec_node_parser_type = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 				delete kwargs.__kwargtrans__;
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000148 */ 		__call__ (__call__ (__super__, null, FLMSpecInfo, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: spec_node_parser_type}, kwargs)));
/* 000148 */ 	});},
/* 000154 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000165 */ 		// pass;
/* 000165 */ 	});},
/* 000167 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 			}
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 		}
/* 000185 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000185 */ 		__except0__.__cause__ = null;
/* 000185 */ 		throw __except0__;
/* 000185 */ 	});},
/* 000187 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000187 */ 		if (arguments.length) {
/* 000187 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000187 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000187 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000187 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000187 */ 					switch (__attrib0__) {
/* 000187 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000187 */ 					}
/* 000187 */ 				}
/* 000187 */ 			}
/* 000187 */ 		}
/* 000187 */ 		else {
/* 000187 */ 		}
/* 000204 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000204 */ 		__except0__.__cause__ = null;
/* 000204 */ 		throw __except0__;
/* 000204 */ 	});},
/* 000213 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000218 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000219 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000221 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000221 */ 				var __accu0__ = node;
/* 000221 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000221 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000221 */ 			__except0__.__cause__ = null;
/* 000221 */ 			throw __except0__;
/* 000221 */ 		}
/* 000225 */ 		node.flm_specinfo = self;
/* 000226 */ 		try {
/* 000227 */ 			(function () {
/* 000227 */ 				var __accu0__ = self;
/* 000227 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000227 */ 			}) ();
/* 000227 */ 		}
/* 000227 */ 		catch (__except0__) {
/* 000227 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000227 */ 				var e = __except0__;
/* 000230 */ 				(function () {
/* 000230 */ 					var __accu0__ = e;
/* 000230 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000230 */ 				}) ();
/* 000231 */ 				var __except1__ = e;
/* 000231 */ 				__except1__.__cause__ = null;
/* 000231 */ 				throw __except1__;
/* 000231 */ 			}
/* 000231 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000231 */ 				var e = __except0__;
/* 000234 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000234 */ 				__except1__.__cause__ = null;
/* 000234 */ 				throw __except1__;
/* 000234 */ 			}
/* 000234 */ 			else if (isinstance (__except0__, Exception)) {
/* 000234 */ 				var e = __except0__;
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu0__ = logger;
/* 000237 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000237 */ 				}) ();
/* 000239 */ 				(function () {
/* 000239 */ 					var __accu0__ = logger;
/* 000240 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000240 */ 						var __accu1__ = node.latex_walker;
/* 000240 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000241 */ 					}) ()), (function () {
/* 000241 */ 						var __accu1__ = node;
/* 000241 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000241 */ 					}) ()));
/* 000241 */ 				}) ();
/* 000243 */ 				__except0__.__cause__ = null;
/* 000243 */ 				throw __except0__;
/* 000243 */ 			}
/* 000243 */ 			else {
/* 000243 */ 				throw __except0__;
/* 000243 */ 			}
/* 000243 */ 		}
/* 000248 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_block_level')))) && self.is_block_level !== null)) {
/* 000249 */ 			node.flm_is_block_level = self.is_block_level;
/* 000249 */ 		}
/* 000250 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_block_heading'))))) {
/* 000251 */ 			node.flm_is_block_heading = self.is_block_heading;
/* 000251 */ 		}
/* 000252 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_is_paragraph_break_marker'))))) {
/* 000253 */ 			node.flm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000253 */ 		}
/* 000255 */ 		// pass;
/* 000269 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_SUBSTITUTE_NODE')) && node.flm_SUBSTITUTE_NODE !== null)) {
/* 000270 */ 			var substitute_node = node.flm_SUBSTITUTE_NODE;
/* 000271 */ 			substitute_node.flm_SUBSTITUTE_FOR_NODE = node;
/* 000272 */ 			// pass;
/* 000276 */ 			return substitute_node;
/* 000276 */ 		}
/* 000278 */ 		return node;
/* 000278 */ 	});},
/* 000281 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000305 */ 		var delta_base = __call__ (__call__ (__super__, null, FLMSpecInfo, 'make_body_parsing_state_delta'), null, self, token, nodeargd, arg_parsing_state_delta, latex_walker);
/* 000312 */ 		if (__t__ (self.body_contents_is_block_level === null)) {
/* 000313 */ 			return delta_base;
/* 000313 */ 		}
/* 000315 */ 		var delta_block_level = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.body_contents_is_block_level}));
/* 000319 */ 		return __call__ (ParsingStateDeltaChained, null, [delta_base, delta_block_level]);
/* 000319 */ 	});}
/* 000319 */ });
/* 000325 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo], {
/* 000325 */ 	__module__: __name__,
/* 000336 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000336 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000336 */ 			var arguments_spec_list = null;
/* 000336 */ 		};
/* 000336 */ 		var kwargs = dict ();
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 				delete kwargs.__kwargtrans__;
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000337 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000337 */ 	});}
/* 000337 */ });
/* 000344 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo], {
/* 000344 */ 	__module__: __name__,
/* 000354 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000354 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000354 */ 			var arguments_spec_list = null;
/* 000354 */ 		};
/* 000354 */ 		var kwargs = dict ();
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 				delete kwargs.__kwargtrans__;
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000355 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000355 */ 	});}
/* 000355 */ });
/* 000362 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo], {
/* 000362 */ 	__module__: __name__,
/* 000373 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000373 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var arguments_spec_list = null;
/* 000373 */ 		};
/* 000373 */ 		var kwargs = dict ();
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 				delete kwargs.__kwargtrans__;
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000374 */ 	});}
/* 000374 */ });
/* 000386 */ export var make_verb_argument = function (value) {
/* 000386 */ 	if (arguments.length) {
/* 000386 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 				switch (__attrib0__) {
/* 000386 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 	}
/* 000386 */ 	else {
/* 000386 */ 	}
/* 000387 */ 	var delim0 = null;
/* 000388 */ 	var __break0__ = false;
/* 000388 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000388 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000388 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000389 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000390 */ 			var delim0 = delim;
/* 000390 */ 			__break0__ = true;
/* 000390 */ 			break;
/* 000390 */ 		}
/* 000390 */ 	}
/* 000392 */ 	if (!__break0__) {
/* 000393 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000393 */ 		__except0__.__cause__ = null;
/* 000393 */ 		throw __except0__;
/* 000393 */ 	}
/* 000395 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000395 */ };
/* 000398 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000398 */ 	__module__: __name__,
/* 000403 */ 	allowed_in_standalone_mode: true,
/* 000405 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000406 */ 		var s = __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000407 */ 		if (__t__ (__eq__ (__call__ (len, null, self.value), 1))) {
/* 000408 */ 			var s = __call__ (__iadd__, null, s, ' (U+{})'.format (__call__ (ord, null, self.value)));
/* 000408 */ 		}
/* 000409 */ 		return s;
/* 000409 */ 	});},
/* 000411 */ 	get __init__ () {return __get__ (this, function (self, value) {
/* 000411 */ 		var kwargs = dict ();
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 				delete kwargs.__kwargtrans__;
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000412 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000413 */ 		self.value = value;
/* 000413 */ 	});},
/* 000415 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000415 */ 		if (arguments.length) {
/* 000415 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000415 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000415 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000415 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000415 */ 					switch (__attrib0__) {
/* 000415 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000415 */ 					}
/* 000415 */ 				}
/* 000415 */ 			}
/* 000415 */ 		}
/* 000415 */ 		else {
/* 000415 */ 		}
/* 000416 */ 		return (function () {
/* 000416 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000416 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000416 */ 		}) ();
/* 000416 */ 	});}
/* 000416 */ });
/* 000419 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue], {
/* 000419 */ 	__module__: __name__,
/* 000423 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000423 */ 		var kwargs = dict ();
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 				delete kwargs.__kwargtrans__;
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000424 */ 		__call__ (__call__ (__super__, null, ConstantValueMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000424 */ 	});},
/* 000426 */ 	_fields: tuple (['macroname', 'value'])
/* 000426 */ });
/* 000428 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue], {
/* 000428 */ 	__module__: __name__,
/* 000432 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000432 */ 		var kwargs = dict ();
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 				delete kwargs.__kwargtrans__;
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000433 */ 		__call__ (__call__ (__super__, null, ConstantValueSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000433 */ 	});},
/* 000436 */ 	_fields: tuple (['specials_chars', 'value'])
/* 000436 */ });
/* 000440 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000453 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000453 */ 	var __accu0__ = latexnodes_parsers;
/* 000453 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000453 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000470 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000470 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000470 */ 		var allow_unknown_macros = false;
/* 000470 */ 	};
/* 000470 */ 	if (arguments.length) {
/* 000470 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 				switch (__attrib0__) {
/* 000470 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 		}
/* 000470 */ 	}
/* 000470 */ 	else {
/* 000470 */ 	}
/* 000490 */ 	if (__t__ (!__t__ (((function () {
/* 000490 */ 		var __accu0__ = node_arg_label;
/* 000490 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000490 */ 	}) ())))) {
/* 000491 */ 		return null;
/* 000491 */ 	}
/* 000493 */ 	var the_labels = [];
/* 000494 */ 	var argnodes = (function () {
/* 000494 */ 		var __accu0__ = node_arg_label;
/* 000494 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000494 */ 	}) ();
/* 000495 */ 	var __iterable0__ = argnodes;
/* 000495 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000495 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000496 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000498 */ 			var the_label = (function () {
/* 000498 */ 				var __accu0__ = argnode.nodelist;
/* 000498 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000498 */ 			}) ();
/* 000499 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000500 */ 				var __left0__ = (function () {
/* 000500 */ 					var __accu0__ = the_label;
/* 000500 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000500 */ 				}) ();
/* 000500 */ 				var ref_type = __left0__ [0];
/* 000500 */ 				var ref_label = __left0__ [1];
/* 000500 */ 			}
/* 000501 */ 			else {
/* 000502 */ 				var __left0__ = tuple ([null, the_label]);
/* 000502 */ 				var ref_type = __left0__ [0];
/* 000502 */ 				var ref_label = __left0__ [1];
/* 000502 */ 			}
/* 000504 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000505 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Argument label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000505 */ 				__except0__.__cause__ = null;
/* 000505 */ 				throw __except0__;
/* 000505 */ 			}
/* 000511 */ 			(function () {
/* 000511 */ 				var __accu0__ = the_labels;
/* 000511 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000511 */ 			}) ();
/* 000511 */ 			continue;
/* 000511 */ 		}
/* 000514 */ 		if (__t__ (allow_unknown_macros)) {
/* 000514 */ 			continue;
/* 000514 */ 		}
/* 000517 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000517 */ 		__except0__.__cause__ = null;
/* 000517 */ 		throw __except0__;
/* 000517 */ 	}
/* 000522 */ 	return the_labels;
/* 000522 */ };
/* 000528 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000528 */ 	__module__: __name__,
/* 000541 */ 	allowed_in_standalone_mode: true,
/* 000546 */ 	_flm_main_text_argument: 'text',
/* 000548 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000548 */ 		if (arguments.length) {
/* 000548 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000548 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000548 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000548 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000548 */ 					switch (__attrib0__) {
/* 000548 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 					}
/* 000548 */ 				}
/* 000548 */ 			}
/* 000548 */ 		}
/* 000548 */ 		else {
/* 000548 */ 		}
/* 000549 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000553 */ 		self.text_formats = text_formats;
/* 000553 */ 	});},
/* 000555 */ 	_fields: tuple (['macroname', 'text_formats']),
/* 000557 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000557 */ 		if (arguments.length) {
/* 000557 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000557 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000557 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000557 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000557 */ 					switch (__attrib0__) {
/* 000557 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000557 */ 					}
/* 000557 */ 				}
/* 000557 */ 			}
/* 000557 */ 		}
/* 000557 */ 		else {
/* 000557 */ 		}
/* 000560 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000560 */ 			var __accu0__ = ' ';
/* 000560 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000560 */ 				var __accu1__ = [];
/* 000560 */ 				var __iterable0__ = self.text_formats;
/* 000560 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000560 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000560 */ 					(function () {
/* 000560 */ 						var __accu2__ = __accu1__;
/* 000560 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000560 */ 					}) ();
/* 000560 */ 				}
/* 000560 */ 				return py_iter (__accu1__);
/* 000560 */ 			}) ());
/* 000560 */ 		}) ());
/* 000560 */ 	});},
/* 000563 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000563 */ 		if (arguments.length) {
/* 000563 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000563 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000563 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000563 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000563 */ 					switch (__attrib0__) {
/* 000563 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000563 */ 					}
/* 000563 */ 				}
/* 000563 */ 			}
/* 000563 */ 		}
/* 000563 */ 		else {
/* 000563 */ 		}
/* 000577 */ 		var node_args = (function () {
/* 000577 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000577 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000577 */ 		}) ();
/* 000581 */ 		return (function () {
/* 000581 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000583 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000583 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000583 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000583 */ 			}) (), render_context);
/* 000583 */ 		}) ();
/* 000583 */ 	});}
/* 000583 */ });
/* 000588 */ export var SemanticBlockEnvironment =  __class__ ('SemanticBlockEnvironment', [FLMEnvironmentSpecBase], {
/* 000588 */ 	__module__: __name__,
/* 000594 */ 	allowed_in_standalone_mode: true,
/* 000596 */ 	is_block_level: true,
/* 000598 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000598 */ 		var annotations = null;
/* 000598 */ 		if (arguments.length) {
/* 000598 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000598 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000598 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000598 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000598 */ 					switch (__attrib0__) {
/* 000598 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000598 */ 					}
/* 000598 */ 				}
/* 000598 */ 			}
/* 000598 */ 		}
/* 000598 */ 		else {
/* 000598 */ 		}
/* 000600 */ 		__call__ (__call__ (__super__, null, SemanticBlockEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000603 */ 		self.role = role;
/* 000604 */ 		self.annotations = annotations;
/* 000604 */ 	});},
/* 000606 */ 	_fields: tuple (['environmentname', 'role', 'annotations']),
/* 000608 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000608 */ 		if (arguments.length) {
/* 000608 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000608 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000608 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000608 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000608 */ 					switch (__attrib0__) {
/* 000608 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000608 */ 					}
/* 000608 */ 				}
/* 000608 */ 			}
/* 000608 */ 		}
/* 000608 */ 		else {
/* 000608 */ 		}
/* 000609 */ 		var with_annotations_str = '';
/* 000610 */ 		if (__t__ (__t__ (self.annotations !== null) && __call__ (len, null, self.annotations))) {
/* 000613 */ 			var with_annotations_str = __add__ (__add__ (' and annotations [', (function () {
/* 000613 */ 				var __accu0__ = ',';
/* 000613 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000613 */ 					var __accu1__ = [];
/* 000613 */ 					var __iterable0__ = self.annotations;
/* 000613 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000613 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000613 */ 						(function () {
/* 000613 */ 							var __accu2__ = __accu1__;
/* 000613 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', a), '’'));
/* 000613 */ 						}) ();
/* 000613 */ 					}
/* 000613 */ 					return __accu1__;
/* 000613 */ 				}) ());
/* 000613 */ 			}) ()), ']');
/* 000613 */ 		}
/* 000615 */ 		return __add__ (__add__ (__add__ ('Formats its contents using a semantic block with role ‘', self.role), '’'), with_annotations_str);
/* 000615 */ 	});},
/* 000620 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000620 */ 		if (arguments.length) {
/* 000620 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000620 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000620 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000620 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000620 */ 					switch (__attrib0__) {
/* 000620 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000620 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000620 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000620 */ 					}
/* 000620 */ 				}
/* 000620 */ 			}
/* 000620 */ 		}
/* 000620 */ 		else {
/* 000620 */ 		}
/* 000634 */ 		var content = (function () {
/* 000634 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000634 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, render_context);
/* 000634 */ 		}) ();
/* 000639 */ 		return (function () {
/* 000639 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000639 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, content, __kwargtrans__ ({role: self.role, render_context: render_context, annotations: self.annotations}));
/* 000639 */ 		}) ();
/* 000639 */ 	});}
/* 000639 */ });
/* 000649 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000649 */ 	__module__: __name__,
/* 000657 */ 	is_block_level: true,
/* 000659 */ 	is_paragraph_break_marker: true,
/* 000661 */ 	allowed_in_standalone_mode: true,
/* 000663 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000663 */ 		if (arguments.length) {
/* 000663 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000663 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000663 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000663 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000663 */ 					switch (__attrib0__) {
/* 000663 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000663 */ 					}
/* 000663 */ 				}
/* 000663 */ 			}
/* 000663 */ 		}
/* 000663 */ 		else {
/* 000663 */ 		}
/* 000664 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000664 */ 		__except0__.__cause__ = null;
/* 000664 */ 		throw __except0__;
/* 000664 */ 	});},
/* 000666 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000666 */ 		if (arguments.length) {
/* 000666 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000666 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000666 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000666 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000666 */ 					switch (__attrib0__) {
/* 000666 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000666 */ 					}
/* 000666 */ 				}
/* 000666 */ 			}
/* 000666 */ 		}
/* 000666 */ 		else {
/* 000666 */ 		}
/* 000667 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000667 */ 	});}
/* 000667 */ });
/* 000670 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak], {
/* 000670 */ 	__module__: __name__,
/* 000671 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000671 */ 		var kwargs = dict ();
/* 000671 */ 		if (arguments.length) {
/* 000671 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000671 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000671 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000671 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000671 */ 					switch (__attrib0__) {
/* 000671 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000671 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000671 */ 					}
/* 000671 */ 				}
/* 000671 */ 				delete kwargs.__kwargtrans__;
/* 000671 */ 			}
/* 000671 */ 		}
/* 000671 */ 		else {
/* 000671 */ 		}
/* 000672 */ 		__call__ (__call__ (__super__, null, ParagraphBreakSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000672 */ 	});},
/* 000675 */ 	_fields: tuple (['specials_chars'])
/* 000675 */ });
/* 000677 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak], {
/* 000677 */ 	__module__: __name__,
/* 000678 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000678 */ 		var kwargs = dict ();
/* 000678 */ 		if (arguments.length) {
/* 000678 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000678 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000678 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000678 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000678 */ 					switch (__attrib0__) {
/* 000678 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000678 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000678 */ 					}
/* 000678 */ 				}
/* 000678 */ 				delete kwargs.__kwargtrans__;
/* 000678 */ 			}
/* 000678 */ 		}
/* 000678 */ 		else {
/* 000678 */ 		}
/* 000679 */ 		__call__ (__call__ (__super__, null, ParagraphBreakMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000679 */ 	});},
/* 000681 */ 	_fields: tuple (['macroname'])
/* 000681 */ });
/* 000686 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000686 */ 	__module__: __name__,
/* 000696 */ 	allowed_in_standalone_mode: true,
/* 000698 */ 	get __init__ () {return __get__ (this, function (self, error_msg) {
/* 000698 */ 		if (typeof error_msg == 'undefined' || (error_msg != null && error_msg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000698 */ 			var error_msg = null;
/* 000698 */ 		};
/* 000698 */ 		var kwargs = dict ();
/* 000698 */ 		if (arguments.length) {
/* 000698 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000698 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000698 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000698 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000698 */ 					switch (__attrib0__) {
/* 000698 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000698 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000698 */ 					}
/* 000698 */ 				}
/* 000698 */ 				delete kwargs.__kwargtrans__;
/* 000698 */ 			}
/* 000698 */ 		}
/* 000698 */ 		else {
/* 000698 */ 		}
/* 000699 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000700 */ 		self.error_msg = error_msg;
/* 000700 */ 	});},
/* 000702 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000702 */ 		if (arguments.length) {
/* 000702 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000702 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000702 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000702 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000702 */ 					switch (__attrib0__) {
/* 000702 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000702 */ 					}
/* 000702 */ 				}
/* 000702 */ 			}
/* 000702 */ 		}
/* 000702 */ 		else {
/* 000702 */ 		}
/* 000703 */ 		if (__t__ (self.error_msg)) {
/* 000704 */ 			var msg = self.error_msg;
/* 000704 */ 		}
/* 000705 */ 		else {
/* 000706 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000706 */ 				var __accu0__ = (function () {
/* 000706 */ 					var __accu1__ = node;
/* 000706 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000706 */ 				}) ();
/* 000706 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000706 */ 			}) ());
/* 000706 */ 		}
/* 000708 */ 		(function () {
/* 000708 */ 			var __accu0__ = logger;
/* 000708 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000708 */ 		}) ();
/* 000710 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000710 */ 		__except0__.__cause__ = null;
/* 000710 */ 		throw __except0__;
/* 000710 */ 	});}
/* 000710 */ });
/* 000713 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError], {
/* 000713 */ 	__module__: __name__,
/* 000714 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000714 */ 		var kwargs = dict ();
/* 000714 */ 		if (arguments.length) {
/* 000714 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000714 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000714 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000714 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000714 */ 					switch (__attrib0__) {
/* 000714 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000714 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000714 */ 					}
/* 000714 */ 				}
/* 000714 */ 				delete kwargs.__kwargtrans__;
/* 000714 */ 			}
/* 000714 */ 		}
/* 000714 */ 		else {
/* 000714 */ 		}
/* 000715 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000715 */ 	});},
/* 000717 */ 	_fields: tuple (['macroname', 'error_msg'])
/* 000717 */ });
/* 000719 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError], {
/* 000719 */ 	__module__: __name__,
/* 000720 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000720 */ 		var kwargs = dict ();
/* 000720 */ 		if (arguments.length) {
/* 000720 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000720 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000720 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000720 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000720 */ 					switch (__attrib0__) {
/* 000720 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000720 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000720 */ 					}
/* 000720 */ 				}
/* 000720 */ 				delete kwargs.__kwargtrans__;
/* 000720 */ 			}
/* 000720 */ 		}
/* 000720 */ 		else {
/* 000720 */ 		}
/* 000721 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 000721 */ 	});},
/* 000725 */ 	_fields: tuple (['environmentname', 'error_msg'])
/* 000725 */ });
/* 000727 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError], {
/* 000727 */ 	__module__: __name__,
/* 000728 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000728 */ 		var kwargs = dict ();
/* 000728 */ 		if (arguments.length) {
/* 000728 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000728 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000728 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000728 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000728 */ 					switch (__attrib0__) {
/* 000728 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000728 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000728 */ 					}
/* 000728 */ 				}
/* 000728 */ 				delete kwargs.__kwargtrans__;
/* 000728 */ 			}
/* 000728 */ 		}
/* 000728 */ 		else {
/* 000728 */ 		}
/* 000729 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000729 */ 	});},
/* 000733 */ 	_fields: tuple (['specials_chars', 'error_msg'])
/* 000733 */ });
/* 000029 */ 
//# sourceMappingURL=flm.flmspecinfo.map