/* 000001 */ // Transcrypt'ed from Python, 2023-08-09 17:29:34
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000013 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaChained} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {ParsingStateDeltaChained, macrospec, latexnodes_parsers, LatexWalkerLocatedError, FLMArgumentSpec, LatexWalkerParseError, ParsedArgumentsInfo, FLMParsingStateDeltaSetBlockLevel};
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
/* 000113 */ 		// pass;
/* 000113 */ 	});},
/* 000115 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000115 */ 		if (arguments.length) {
/* 000115 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000115 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000115 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000115 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000115 */ 					switch (__attrib0__) {
/* 000115 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000115 */ 					}
/* 000115 */ 				}
/* 000115 */ 			}
/* 000115 */ 		}
/* 000115 */ 		else {
/* 000115 */ 		}
/* 000123 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000123 */ 		__except0__.__cause__ = null;
/* 000123 */ 		throw __except0__;
/* 000123 */ 	});},
/* 000125 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000130 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000130 */ 		__except0__.__cause__ = null;
/* 000130 */ 		throw __except0__;
/* 000130 */ 	});},
/* 000139 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000144 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000145 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000147 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000147 */ 				var __accu0__ = node;
/* 000147 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000147 */ 			}) ()), __kwargtrans__ ({pos: node.pos}));
/* 000147 */ 			__except0__.__cause__ = null;
/* 000147 */ 			throw __except0__;
/* 000147 */ 		}
/* 000151 */ 		node.flm_specinfo = self;
/* 000152 */ 		try {
/* 000153 */ 			(function () {
/* 000153 */ 				var __accu0__ = self;
/* 000153 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000153 */ 			}) ();
/* 000153 */ 		}
/* 000153 */ 		catch (__except0__) {
/* 000153 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000153 */ 				var e = __except0__;
/* 000156 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000157 */ 					e.pos = node.pos;
/* 000157 */ 				}
/* 000158 */ 				var __except1__ = e;
/* 000158 */ 				__except1__.__cause__ = null;
/* 000158 */ 				throw __except1__;
/* 000158 */ 			}
/* 000158 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000158 */ 				var e = __except0__;
/* 000161 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000161 */ 				__except1__.__cause__ = null;
/* 000161 */ 				throw __except1__;
/* 000161 */ 			}
/* 000161 */ 			else if (isinstance (__except0__, Exception)) {
/* 000161 */ 				var e = __except0__;
/* 000164 */ 				(function () {
/* 000164 */ 					var __accu0__ = logger;
/* 000164 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000164 */ 				}) ();
/* 000166 */ 				(function () {
/* 000166 */ 					var __accu0__ = logger;
/* 000167 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000167 */ 						var __accu1__ = node.latex_walker;
/* 000167 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000168 */ 					}) ()), (function () {
/* 000168 */ 						var __accu1__ = node;
/* 000168 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000168 */ 					}) ()));
/* 000168 */ 				}) ();
/* 000170 */ 				__except0__.__cause__ = null;
/* 000170 */ 				throw __except0__;
/* 000170 */ 			}
/* 000170 */ 			else {
/* 000170 */ 				throw __except0__;
/* 000170 */ 			}
/* 000170 */ 		}
/* 000172 */ 		node.flm_is_block_level = self.is_block_level;
/* 000173 */ 		node.flm_is_block_heading = self.is_block_heading;
/* 000174 */ 		node.flm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000179 */ 		return node;
/* 000179 */ 	});},
/* 000182 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 		}
/* 000188 */ 		var delta_base = __call__ (__call__ (__super__, null, FLMSpecInfo, 'make_body_parsing_state_delta'), null, self, token, nodeargd, arg_parsing_state_delta, latex_walker);
/* 000195 */ 		if (__t__ (self.body_contents_is_block_level === null)) {
/* 000196 */ 			return delta_base;
/* 000196 */ 		}
/* 000198 */ 		var delta_block_level = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.body_contents_is_block_level}));
/* 000202 */ 		return __call__ (ParsingStateDeltaChained, null, [delta_base, delta_block_level]);
/* 000202 */ 	});}
/* 000202 */ });
/* 000208 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo], {
/* 000208 */ 	__module__: __name__,
/* 000212 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000212 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000212 */ 			var arguments_spec_list = null;
/* 000212 */ 		};
/* 000212 */ 		var kwargs = dict ();
/* 000212 */ 		if (arguments.length) {
/* 000212 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000212 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000212 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000212 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000212 */ 					switch (__attrib0__) {
/* 000212 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000212 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000212 */ 					}
/* 000212 */ 				}
/* 000212 */ 				delete kwargs.__kwargtrans__;
/* 000212 */ 			}
/* 000212 */ 		}
/* 000212 */ 		else {
/* 000212 */ 		}
/* 000213 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000213 */ 	});}
/* 000213 */ });
/* 000220 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo], {
/* 000220 */ 	__module__: __name__,
/* 000224 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000224 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000224 */ 			var arguments_spec_list = null;
/* 000224 */ 		};
/* 000224 */ 		var kwargs = dict ();
/* 000224 */ 		if (arguments.length) {
/* 000224 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000224 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000224 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000224 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000224 */ 					switch (__attrib0__) {
/* 000224 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000224 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000224 */ 					}
/* 000224 */ 				}
/* 000224 */ 				delete kwargs.__kwargtrans__;
/* 000224 */ 			}
/* 000224 */ 		}
/* 000224 */ 		else {
/* 000224 */ 		}
/* 000225 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000225 */ 	});}
/* 000225 */ });
/* 000232 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo], {
/* 000232 */ 	__module__: __name__,
/* 000236 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000236 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000236 */ 			var arguments_spec_list = null;
/* 000236 */ 		};
/* 000236 */ 		var kwargs = dict ();
/* 000236 */ 		if (arguments.length) {
/* 000236 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000236 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000236 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000236 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000236 */ 					switch (__attrib0__) {
/* 000236 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000236 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000236 */ 					}
/* 000236 */ 				}
/* 000236 */ 				delete kwargs.__kwargtrans__;
/* 000236 */ 			}
/* 000236 */ 		}
/* 000236 */ 		else {
/* 000236 */ 		}
/* 000237 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000237 */ 	});}
/* 000237 */ });
/* 000249 */ export var make_verb_argument = function (value) {
/* 000249 */ 	if (arguments.length) {
/* 000249 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000249 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000249 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000249 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000249 */ 				switch (__attrib0__) {
/* 000249 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000249 */ 				}
/* 000249 */ 			}
/* 000249 */ 		}
/* 000249 */ 	}
/* 000249 */ 	else {
/* 000249 */ 	}
/* 000250 */ 	var delim0 = null;
/* 000251 */ 	var __break0__ = false;
/* 000251 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000251 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000251 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000252 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000253 */ 			var delim0 = delim;
/* 000253 */ 			__break0__ = true;
/* 000253 */ 			break;
/* 000253 */ 		}
/* 000253 */ 	}
/* 000255 */ 	if (!__break0__) {
/* 000256 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000256 */ 		__except0__.__cause__ = null;
/* 000256 */ 		throw __except0__;
/* 000256 */ 	}
/* 000258 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000258 */ };
/* 000261 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000261 */ 	__module__: __name__,
/* 000266 */ 	allowed_in_standalone_mode: true,
/* 000268 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000269 */ 		var s = __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000270 */ 		if (__t__ (__eq__ (__call__ (len, null, self.value), 1))) {
/* 000271 */ 			var s = __call__ (__iadd__, null, s, ' (U+{})'.format (__call__ (ord, null, self.value)));
/* 000271 */ 		}
/* 000272 */ 		return s;
/* 000272 */ 	});},
/* 000274 */ 	get __init__ () {return __get__ (this, function (self, value) {
/* 000274 */ 		var kwargs = dict ();
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 				delete kwargs.__kwargtrans__;
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000275 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000276 */ 		self.value = value;
/* 000276 */ 	});},
/* 000278 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000279 */ 		return (function () {
/* 000279 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000279 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000279 */ 		}) ();
/* 000279 */ 	});}
/* 000279 */ });
/* 000282 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue], {
/* 000282 */ 	__module__: __name__,
/* 000286 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000286 */ 		var kwargs = dict ();
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 				delete kwargs.__kwargtrans__;
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000287 */ 		__call__ (__call__ (__super__, null, ConstantValueMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000287 */ 	});},
/* 000289 */ 	_fields: tuple (['macroname', 'value'])
/* 000289 */ });
/* 000291 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue], {
/* 000291 */ 	__module__: __name__,
/* 000295 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000295 */ 		var kwargs = dict ();
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 				delete kwargs.__kwargtrans__;
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000296 */ 		__call__ (__call__ (__super__, null, ConstantValueSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000296 */ 	});},
/* 000299 */ 	_fields: tuple (['specials_chars', 'value'])
/* 000299 */ });
/* 000303 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000316 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000316 */ 	var __accu0__ = latexnodes_parsers;
/* 000316 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000316 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000333 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000333 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000333 */ 		var allow_unknown_macros = false;
/* 000333 */ 	};
/* 000333 */ 	if (arguments.length) {
/* 000333 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 				switch (__attrib0__) {
/* 000333 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 	}
/* 000333 */ 	else {
/* 000333 */ 	}
/* 000341 */ 	if (__t__ (!__t__ (((function () {
/* 000341 */ 		var __accu0__ = node_arg_label;
/* 000341 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000341 */ 	}) ())))) {
/* 000342 */ 		return null;
/* 000342 */ 	}
/* 000344 */ 	var the_labels = [];
/* 000345 */ 	var argnodes = (function () {
/* 000345 */ 		var __accu0__ = node_arg_label;
/* 000345 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000345 */ 	}) ();
/* 000346 */ 	var __iterable0__ = argnodes;
/* 000346 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000346 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000347 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000349 */ 			var the_label = (function () {
/* 000349 */ 				var __accu0__ = argnode.nodelist;
/* 000349 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000349 */ 			}) ();
/* 000350 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000351 */ 				var __left0__ = (function () {
/* 000351 */ 					var __accu0__ = the_label;
/* 000351 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000351 */ 				}) ();
/* 000351 */ 				var ref_type = __left0__ [0];
/* 000351 */ 				var ref_label = __left0__ [1];
/* 000351 */ 			}
/* 000352 */ 			else {
/* 000353 */ 				var __left0__ = tuple ([null, the_label]);
/* 000353 */ 				var ref_type = __left0__ [0];
/* 000353 */ 				var ref_label = __left0__ [1];
/* 000353 */ 			}
/* 000355 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000356 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000356 */ 				__except0__.__cause__ = null;
/* 000356 */ 				throw __except0__;
/* 000356 */ 			}
/* 000362 */ 			(function () {
/* 000362 */ 				var __accu0__ = the_labels;
/* 000362 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000362 */ 			}) ();
/* 000362 */ 			continue;
/* 000362 */ 		}
/* 000365 */ 		if (__t__ (allow_unknown_macros)) {
/* 000365 */ 			continue;
/* 000365 */ 		}
/* 000368 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000368 */ 		__except0__.__cause__ = null;
/* 000368 */ 		throw __except0__;
/* 000368 */ 	}
/* 000373 */ 	return the_labels;
/* 000373 */ };
/* 000379 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000379 */ 	__module__: __name__,
/* 000392 */ 	allowed_in_standalone_mode: true,
/* 000396 */ 	_flm_main_text_argument: 'text',
/* 000398 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000403 */ 		self.text_formats = text_formats;
/* 000403 */ 	});},
/* 000405 */ 	_fields: tuple (['macroname', 'text_formats']),
/* 000407 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000410 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000410 */ 			var __accu0__ = ' ';
/* 000410 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000410 */ 				var __accu1__ = [];
/* 000410 */ 				var __iterable0__ = self.text_formats;
/* 000410 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000410 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000410 */ 					(function () {
/* 000410 */ 						var __accu2__ = __accu1__;
/* 000410 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000410 */ 					}) ();
/* 000410 */ 				}
/* 000410 */ 				return py_iter (__accu1__);
/* 000410 */ 			}) ());
/* 000410 */ 		}) ());
/* 000410 */ 	});},
/* 000413 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000413 */ 		if (arguments.length) {
/* 000413 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000413 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000413 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000413 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000413 */ 					switch (__attrib0__) {
/* 000413 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000413 */ 					}
/* 000413 */ 				}
/* 000413 */ 			}
/* 000413 */ 		}
/* 000413 */ 		else {
/* 000413 */ 		}
/* 000415 */ 		var node_args = (function () {
/* 000415 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000415 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000415 */ 		}) ();
/* 000419 */ 		return (function () {
/* 000419 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000421 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000421 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000421 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000421 */ 			}) (), render_context);
/* 000421 */ 		}) ();
/* 000421 */ 	});}
/* 000421 */ });
/* 000426 */ export var SemanticBlockEnvironment =  __class__ ('SemanticBlockEnvironment', [FLMEnvironmentSpecBase], {
/* 000426 */ 	__module__: __name__,
/* 000432 */ 	allowed_in_standalone_mode: true,
/* 000434 */ 	is_block_level: true,
/* 000436 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000436 */ 		var annotations = null;
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000437 */ 		__call__ (__call__ (__super__, null, SemanticBlockEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000440 */ 		self.role = role;
/* 000441 */ 		self.annotations = annotations;
/* 000441 */ 	});},
/* 000443 */ 	_fields: tuple (['environmentname', 'role', 'annotations']),
/* 000445 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000445 */ 		if (arguments.length) {
/* 000445 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000445 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000445 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000445 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000445 */ 					switch (__attrib0__) {
/* 000445 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000445 */ 					}
/* 000445 */ 				}
/* 000445 */ 			}
/* 000445 */ 		}
/* 000445 */ 		else {
/* 000445 */ 		}
/* 000446 */ 		var with_annotations_str = '';
/* 000447 */ 		if (__t__ (__t__ (self.annotations !== null) && __call__ (len, null, self.annotations))) {
/* 000450 */ 			var with_annotations_str = __add__ (__add__ (' and annotations [', (function () {
/* 000450 */ 				var __accu0__ = ',';
/* 000450 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000450 */ 					var __accu1__ = [];
/* 000450 */ 					var __iterable0__ = self.annotations;
/* 000450 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000450 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000450 */ 						(function () {
/* 000450 */ 							var __accu2__ = __accu1__;
/* 000450 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', a), '’'));
/* 000450 */ 						}) ();
/* 000450 */ 					}
/* 000450 */ 					return __accu1__;
/* 000450 */ 				}) ());
/* 000450 */ 			}) ()), ']');
/* 000450 */ 		}
/* 000452 */ 		return __add__ (__add__ (__add__ ('Formats its contents using a semantic block with role ‘', self.role), '’'), with_annotations_str);
/* 000452 */ 	});},
/* 000457 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000459 */ 		var content = (function () {
/* 000459 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000459 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, render_context);
/* 000459 */ 		}) ();
/* 000464 */ 		return (function () {
/* 000464 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000464 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, content, __kwargtrans__ ({role: self.role, render_context: render_context, annotations: self.annotations}));
/* 000464 */ 		}) ();
/* 000464 */ 	});}
/* 000464 */ });
/* 000474 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000474 */ 	__module__: __name__,
/* 000476 */ 	is_block_level: true,
/* 000478 */ 	is_paragraph_break_marker: true,
/* 000480 */ 	allowed_in_standalone_mode: true,
/* 000482 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000482 */ 		if (arguments.length) {
/* 000482 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000482 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000482 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000482 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000482 */ 					switch (__attrib0__) {
/* 000482 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000482 */ 					}
/* 000482 */ 				}
/* 000482 */ 			}
/* 000482 */ 		}
/* 000482 */ 		else {
/* 000482 */ 		}
/* 000483 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000483 */ 		__except0__.__cause__ = null;
/* 000483 */ 		throw __except0__;
/* 000483 */ 	});},
/* 000485 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000485 */ 		if (arguments.length) {
/* 000485 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000485 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000485 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000485 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000485 */ 					switch (__attrib0__) {
/* 000485 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000485 */ 					}
/* 000485 */ 				}
/* 000485 */ 			}
/* 000485 */ 		}
/* 000485 */ 		else {
/* 000485 */ 		}
/* 000486 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000486 */ 	});}
/* 000486 */ });
/* 000489 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak], {
/* 000489 */ 	__module__: __name__,
/* 000490 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000490 */ 		var kwargs = dict ();
/* 000490 */ 		if (arguments.length) {
/* 000490 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000490 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000490 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000490 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000490 */ 					switch (__attrib0__) {
/* 000490 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000490 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000490 */ 					}
/* 000490 */ 				}
/* 000490 */ 				delete kwargs.__kwargtrans__;
/* 000490 */ 			}
/* 000490 */ 		}
/* 000490 */ 		else {
/* 000490 */ 		}
/* 000491 */ 		__call__ (__call__ (__super__, null, ParagraphBreakSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000491 */ 	});},
/* 000494 */ 	_fields: tuple (['specials_chars'])
/* 000494 */ });
/* 000496 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak], {
/* 000496 */ 	__module__: __name__,
/* 000497 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000497 */ 		var kwargs = dict ();
/* 000497 */ 		if (arguments.length) {
/* 000497 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000497 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000497 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000497 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000497 */ 					switch (__attrib0__) {
/* 000497 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000497 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000497 */ 					}
/* 000497 */ 				}
/* 000497 */ 				delete kwargs.__kwargtrans__;
/* 000497 */ 			}
/* 000497 */ 		}
/* 000497 */ 		else {
/* 000497 */ 		}
/* 000498 */ 		__call__ (__call__ (__super__, null, ParagraphBreakMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000498 */ 	});},
/* 000500 */ 	_fields: tuple (['macroname'])
/* 000500 */ });
/* 000505 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000505 */ 	__module__: __name__,
/* 000507 */ 	allowed_in_standalone_mode: true,
/* 000509 */ 	get __init__ () {return __get__ (this, function (self, error_msg) {
/* 000509 */ 		if (typeof error_msg == 'undefined' || (error_msg != null && error_msg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000509 */ 			var error_msg = null;
/* 000509 */ 		};
/* 000509 */ 		var kwargs = dict ();
/* 000509 */ 		if (arguments.length) {
/* 000509 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000509 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000509 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000509 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000509 */ 					switch (__attrib0__) {
/* 000509 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000509 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000509 */ 					}
/* 000509 */ 				}
/* 000509 */ 				delete kwargs.__kwargtrans__;
/* 000509 */ 			}
/* 000509 */ 		}
/* 000509 */ 		else {
/* 000509 */ 		}
/* 000510 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000511 */ 		self.error_msg = error_msg;
/* 000511 */ 	});},
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
/* 000514 */ 		if (__t__ (self.error_msg)) {
/* 000515 */ 			var msg = self.error_msg;
/* 000515 */ 		}
/* 000516 */ 		else {
/* 000517 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000517 */ 				var __accu0__ = (function () {
/* 000517 */ 					var __accu1__ = node;
/* 000517 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000517 */ 				}) ();
/* 000517 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000517 */ 			}) ());
/* 000517 */ 		}
/* 000519 */ 		(function () {
/* 000519 */ 			var __accu0__ = logger;
/* 000519 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000519 */ 		}) ();
/* 000521 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000521 */ 		__except0__.__cause__ = null;
/* 000521 */ 		throw __except0__;
/* 000521 */ 	});}
/* 000521 */ });
/* 000524 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError], {
/* 000524 */ 	__module__: __name__,
/* 000525 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000525 */ 		var kwargs = dict ();
/* 000525 */ 		if (arguments.length) {
/* 000525 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000525 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000525 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000525 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000525 */ 					switch (__attrib0__) {
/* 000525 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000525 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000525 */ 					}
/* 000525 */ 				}
/* 000525 */ 				delete kwargs.__kwargtrans__;
/* 000525 */ 			}
/* 000525 */ 		}
/* 000525 */ 		else {
/* 000525 */ 		}
/* 000526 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000526 */ 	});},
/* 000528 */ 	_fields: tuple (['macroname', 'error_msg'])
/* 000528 */ });
/* 000530 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError], {
/* 000530 */ 	__module__: __name__,
/* 000531 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000531 */ 		var kwargs = dict ();
/* 000531 */ 		if (arguments.length) {
/* 000531 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000531 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000531 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000531 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000531 */ 					switch (__attrib0__) {
/* 000531 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000531 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000531 */ 					}
/* 000531 */ 				}
/* 000531 */ 				delete kwargs.__kwargtrans__;
/* 000531 */ 			}
/* 000531 */ 		}
/* 000531 */ 		else {
/* 000531 */ 		}
/* 000532 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 000532 */ 	});},
/* 000536 */ 	_fields: tuple (['environmentname', 'error_msg'])
/* 000536 */ });
/* 000538 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError], {
/* 000538 */ 	__module__: __name__,
/* 000539 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000539 */ 		var kwargs = dict ();
/* 000539 */ 		if (arguments.length) {
/* 000539 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000539 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000539 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000539 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000539 */ 					switch (__attrib0__) {
/* 000539 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000539 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000539 */ 					}
/* 000539 */ 				}
/* 000539 */ 				delete kwargs.__kwargtrans__;
/* 000539 */ 			}
/* 000539 */ 		}
/* 000539 */ 		else {
/* 000539 */ 		}
/* 000540 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000540 */ 	});},
/* 000544 */ 	_fields: tuple (['specials_chars', 'error_msg'])
/* 000544 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmspecinfo.map