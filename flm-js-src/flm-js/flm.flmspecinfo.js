/* 000001 */ // Transcrypt'ed from Python, 2025-02-16 15:49:16
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000018 */ import {FLMArgumentSpec, FLMParsingStateDeltaSetBlockLevel} from './flm.flmenvironment.js';
/* 000013 */ import {LatexWalkerLocatedError, LatexWalkerParseError, ParsedArgumentsInfo, ParsingStateDeltaChained} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LatexWalkerParseError, LatexWalkerLocatedError, ParsingStateDeltaChained, latexnodes_parsers, FLMParsingStateDeltaSetBlockLevel, macrospec, FLMArgumentSpec, ParsedArgumentsInfo};
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
/* 000179 */ 		// pass;
/* 000193 */ 		if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_SUBSTITUTE_NODE')) && node.flm_SUBSTITUTE_NODE !== null)) {
/* 000194 */ 			var substitute_node = node.flm_SUBSTITUTE_NODE;
/* 000195 */ 			substitute_node.flm_SUBSTITUTE_FOR_NODE = node;
/* 000196 */ 			// pass;
/* 000200 */ 			return substitute_node;
/* 000200 */ 		}
/* 000202 */ 		return node;
/* 000202 */ 	});},
/* 000205 */ 	get make_body_parsing_state_delta () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta, latex_walker) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000211 */ 		var delta_base = __call__ (__call__ (__super__, null, FLMSpecInfo, 'make_body_parsing_state_delta'), null, self, token, nodeargd, arg_parsing_state_delta, latex_walker);
/* 000218 */ 		if (__t__ (self.body_contents_is_block_level === null)) {
/* 000219 */ 			return delta_base;
/* 000219 */ 		}
/* 000221 */ 		var delta_block_level = __call__ (FLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: self.body_contents_is_block_level}));
/* 000225 */ 		return __call__ (ParsingStateDeltaChained, null, [delta_base, delta_block_level]);
/* 000225 */ 	});}
/* 000225 */ });
/* 000231 */ export var FLMMacroSpecBase =  __class__ ('FLMMacroSpecBase', [FLMSpecInfo], {
/* 000231 */ 	__module__: __name__,
/* 000235 */ 	get __init__ () {return __get__ (this, function (self, macroname, arguments_spec_list) {
/* 000235 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000235 */ 			var arguments_spec_list = null;
/* 000235 */ 		};
/* 000235 */ 		var kwargs = dict ();
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 				delete kwargs.__kwargtrans__;
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexMacroCallParser, macroname: macroname}, kwargs)));
/* 000236 */ 	});}
/* 000236 */ });
/* 000243 */ export var FLMEnvironmentSpecBase =  __class__ ('FLMEnvironmentSpecBase', [FLMSpecInfo], {
/* 000243 */ 	__module__: __name__,
/* 000247 */ 	get __init__ () {return __get__ (this, function (self, environmentname, arguments_spec_list) {
/* 000247 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000247 */ 			var arguments_spec_list = null;
/* 000247 */ 		};
/* 000247 */ 		var kwargs = dict ();
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 				delete kwargs.__kwargtrans__;
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000248 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexEnvironmentCallParser, environmentname: environmentname}, kwargs)));
/* 000248 */ 	});}
/* 000248 */ });
/* 000255 */ export var FLMSpecialsSpecBase =  __class__ ('FLMSpecialsSpecBase', [FLMSpecInfo], {
/* 000255 */ 	__module__: __name__,
/* 000259 */ 	get __init__ () {return __get__ (this, function (self, specials_chars, arguments_spec_list) {
/* 000259 */ 		if (typeof arguments_spec_list == 'undefined' || (arguments_spec_list != null && arguments_spec_list.hasOwnProperty ("__kwargtrans__"))) {;
/* 000259 */ 			var arguments_spec_list = null;
/* 000259 */ 		};
/* 000259 */ 		var kwargs = dict ();
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'arguments_spec_list': var arguments_spec_list = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 				delete kwargs.__kwargtrans__;
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecBase, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({arguments_spec_list: arguments_spec_list, spec_node_parser_type: macrospec.LatexSpecialsCallParser, specials_chars: specials_chars}, kwargs)));
/* 000260 */ 	});}
/* 000260 */ });
/* 000272 */ export var make_verb_argument = function (value) {
/* 000272 */ 	if (arguments.length) {
/* 000272 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 				switch (__attrib0__) {
/* 000272 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 	}
/* 000272 */ 	else {
/* 000272 */ 	}
/* 000273 */ 	var delim0 = null;
/* 000274 */ 	var __break0__ = false;
/* 000274 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000274 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000274 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000275 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000276 */ 			var delim0 = delim;
/* 000276 */ 			__break0__ = true;
/* 000276 */ 			break;
/* 000276 */ 		}
/* 000276 */ 	}
/* 000278 */ 	if (!__break0__) {
/* 000279 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000279 */ 		__except0__.__cause__ = null;
/* 000279 */ 		throw __except0__;
/* 000279 */ 	}
/* 000281 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000281 */ };
/* 000284 */ export var FLMSpecInfoConstantValue =  __class__ ('FLMSpecInfoConstantValue', [FLMSpecInfo], {
/* 000284 */ 	__module__: __name__,
/* 000289 */ 	allowed_in_standalone_mode: true,
/* 000291 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000291 */ 		if (arguments.length) {
/* 000291 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000291 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000291 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000291 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000291 */ 					switch (__attrib0__) {
/* 000291 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000291 */ 					}
/* 000291 */ 				}
/* 000291 */ 			}
/* 000291 */ 		}
/* 000291 */ 		else {
/* 000291 */ 		}
/* 000292 */ 		var s = __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000293 */ 		if (__t__ (__eq__ (__call__ (len, null, self.value), 1))) {
/* 000294 */ 			var s = __call__ (__iadd__, null, s, ' (U+{})'.format (__call__ (ord, null, self.value)));
/* 000294 */ 		}
/* 000295 */ 		return s;
/* 000295 */ 	});},
/* 000297 */ 	get __init__ () {return __get__ (this, function (self, value) {
/* 000297 */ 		var kwargs = dict ();
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 				delete kwargs.__kwargtrans__;
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000298 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoConstantValue, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000299 */ 		self.value = value;
/* 000299 */ 	});},
/* 000301 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000302 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000302 */ 		}) ();
/* 000302 */ 	});}
/* 000302 */ });
/* 000305 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [FLMSpecInfoConstantValue], {
/* 000305 */ 	__module__: __name__,
/* 000309 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000309 */ 		var kwargs = dict ();
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 				delete kwargs.__kwargtrans__;
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000310 */ 		__call__ (__call__ (__super__, null, ConstantValueMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000310 */ 	});},
/* 000312 */ 	_fields: tuple (['macroname', 'value'])
/* 000312 */ });
/* 000314 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [FLMSpecInfoConstantValue], {
/* 000314 */ 	__module__: __name__,
/* 000318 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000318 */ 		var kwargs = dict ();
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 				delete kwargs.__kwargtrans__;
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000319 */ 		__call__ (__call__ (__super__, null, ConstantValueSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000319 */ 	});},
/* 000322 */ 	_fields: tuple (['specials_chars', 'value'])
/* 000322 */ });
/* 000326 */ export var text_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', flm_doc: 'The text or FLM content to process'}));
/* 000339 */ export var label_arg = __call__ (FLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000339 */ 	var __accu0__ = latexnodes_parsers;
/* 000339 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000339 */ }) (), argname: 'label', flm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000356 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000356 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000356 */ 		var allow_unknown_macros = false;
/* 000356 */ 	};
/* 000356 */ 	if (arguments.length) {
/* 000356 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 				switch (__attrib0__) {
/* 000356 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 	}
/* 000356 */ 	else {
/* 000356 */ 	}
/* 000364 */ 	if (__t__ (!__t__ (((function () {
/* 000364 */ 		var __accu0__ = node_arg_label;
/* 000364 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000364 */ 	}) ())))) {
/* 000365 */ 		return null;
/* 000365 */ 	}
/* 000367 */ 	var the_labels = [];
/* 000368 */ 	var argnodes = (function () {
/* 000368 */ 		var __accu0__ = node_arg_label;
/* 000368 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000368 */ 	}) ();
/* 000369 */ 	var __iterable0__ = argnodes;
/* 000369 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000369 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000372 */ 			var the_label = (function () {
/* 000372 */ 				var __accu0__ = argnode.nodelist;
/* 000372 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000372 */ 			}) ();
/* 000373 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000374 */ 				var __left0__ = (function () {
/* 000374 */ 					var __accu0__ = the_label;
/* 000374 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000374 */ 				}) ();
/* 000374 */ 				var ref_type = __left0__ [0];
/* 000374 */ 				var ref_label = __left0__ [1];
/* 000374 */ 			}
/* 000375 */ 			else {
/* 000376 */ 				var __left0__ = tuple ([null, the_label]);
/* 000376 */ 				var ref_type = __left0__ [0];
/* 000376 */ 				var ref_label = __left0__ [1];
/* 000376 */ 			}
/* 000378 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000379 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Argument label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000379 */ 				__except0__.__cause__ = null;
/* 000379 */ 				throw __except0__;
/* 000379 */ 			}
/* 000385 */ 			(function () {
/* 000385 */ 				var __accu0__ = the_labels;
/* 000385 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000385 */ 			}) ();
/* 000385 */ 			continue;
/* 000385 */ 		}
/* 000388 */ 		if (__t__ (allow_unknown_macros)) {
/* 000388 */ 			continue;
/* 000388 */ 		}
/* 000391 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000391 */ 		__except0__.__cause__ = null;
/* 000391 */ 		throw __except0__;
/* 000391 */ 	}
/* 000396 */ 	return the_labels;
/* 000396 */ };
/* 000402 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [FLMMacroSpecBase], {
/* 000402 */ 	__module__: __name__,
/* 000415 */ 	allowed_in_standalone_mode: true,
/* 000419 */ 	_flm_main_text_argument: 'text',
/* 000421 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000426 */ 		self.text_formats = text_formats;
/* 000426 */ 	});},
/* 000428 */ 	_fields: tuple (['macroname', 'text_formats']),
/* 000430 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000430 */ 		if (arguments.length) {
/* 000430 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000430 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000430 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000430 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000430 */ 					switch (__attrib0__) {
/* 000430 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000430 */ 					}
/* 000430 */ 				}
/* 000430 */ 			}
/* 000430 */ 		}
/* 000430 */ 		else {
/* 000430 */ 		}
/* 000433 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000433 */ 			var __accu0__ = ' ';
/* 000433 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000433 */ 				var __accu1__ = [];
/* 000433 */ 				var __iterable0__ = self.text_formats;
/* 000433 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000433 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000433 */ 					(function () {
/* 000433 */ 						var __accu2__ = __accu1__;
/* 000433 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000433 */ 					}) ();
/* 000433 */ 				}
/* 000433 */ 				return py_iter (__accu1__);
/* 000433 */ 			}) ());
/* 000433 */ 		}) ());
/* 000433 */ 	});},
/* 000436 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000436 */ 		if (arguments.length) {
/* 000436 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000436 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000436 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000436 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000436 */ 					switch (__attrib0__) {
/* 000436 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000436 */ 					}
/* 000436 */ 				}
/* 000436 */ 			}
/* 000436 */ 		}
/* 000436 */ 		else {
/* 000436 */ 		}
/* 000438 */ 		var node_args = (function () {
/* 000438 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000438 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000438 */ 		}) ();
/* 000442 */ 		return (function () {
/* 000442 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000444 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000444 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000444 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000444 */ 			}) (), render_context);
/* 000444 */ 		}) ();
/* 000444 */ 	});}
/* 000444 */ });
/* 000449 */ export var SemanticBlockEnvironment =  __class__ ('SemanticBlockEnvironment', [FLMEnvironmentSpecBase], {
/* 000449 */ 	__module__: __name__,
/* 000455 */ 	allowed_in_standalone_mode: true,
/* 000457 */ 	is_block_level: true,
/* 000459 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000459 */ 		var annotations = null;
/* 000459 */ 		if (arguments.length) {
/* 000459 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000459 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000459 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000459 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000459 */ 					switch (__attrib0__) {
/* 000459 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000459 */ 					}
/* 000459 */ 				}
/* 000459 */ 			}
/* 000459 */ 		}
/* 000459 */ 		else {
/* 000459 */ 		}
/* 000460 */ 		__call__ (__call__ (__super__, null, SemanticBlockEnvironment, '__init__'), null, self, __kwargtrans__ ({environmentname: environmentname}));
/* 000463 */ 		self.role = role;
/* 000464 */ 		self.annotations = annotations;
/* 000464 */ 	});},
/* 000466 */ 	_fields: tuple (['environmentname', 'role', 'annotations']),
/* 000468 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000469 */ 		var with_annotations_str = '';
/* 000470 */ 		if (__t__ (__t__ (self.annotations !== null) && __call__ (len, null, self.annotations))) {
/* 000473 */ 			var with_annotations_str = __add__ (__add__ (' and annotations [', (function () {
/* 000473 */ 				var __accu0__ = ',';
/* 000473 */ 				return __call__ (__accu0__.join, __accu0__, (function () {
/* 000473 */ 					var __accu1__ = [];
/* 000473 */ 					var __iterable0__ = self.annotations;
/* 000473 */ 					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000473 */ 						var a = __getitem__ (__iterable0__, __index0__);
/* 000473 */ 						(function () {
/* 000473 */ 							var __accu2__ = __accu1__;
/* 000473 */ 							return __call__ (__accu2__.append, __accu2__, __add__ (__add__ ('‘', a), '’'));
/* 000473 */ 						}) ();
/* 000473 */ 					}
/* 000473 */ 					return __accu1__;
/* 000473 */ 				}) ());
/* 000473 */ 			}) ()), ']');
/* 000473 */ 		}
/* 000475 */ 		return __add__ (__add__ (__add__ ('Formats its contents using a semantic block with role ‘', self.role), '’'), with_annotations_str);
/* 000475 */ 	});},
/* 000480 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000480 */ 		if (arguments.length) {
/* 000480 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000480 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000480 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000480 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000480 */ 					switch (__attrib0__) {
/* 000480 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000480 */ 					}
/* 000480 */ 				}
/* 000480 */ 			}
/* 000480 */ 		}
/* 000480 */ 		else {
/* 000480 */ 		}
/* 000482 */ 		var content = (function () {
/* 000482 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000482 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, render_context);
/* 000482 */ 		}) ();
/* 000487 */ 		return (function () {
/* 000487 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000487 */ 			return __call__ (__accu0__.render_semantic_block, __accu0__, content, __kwargtrans__ ({role: self.role, render_context: render_context, annotations: self.annotations}));
/* 000487 */ 		}) ();
/* 000487 */ 	});}
/* 000487 */ });
/* 000497 */ export var FLMSpecInfoParagraphBreak =  __class__ ('FLMSpecInfoParagraphBreak', [FLMSpecInfo], {
/* 000497 */ 	__module__: __name__,
/* 000499 */ 	is_block_level: true,
/* 000501 */ 	is_paragraph_break_marker: true,
/* 000503 */ 	allowed_in_standalone_mode: true,
/* 000505 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000505 */ 		if (arguments.length) {
/* 000505 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000505 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000505 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000505 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000505 */ 					switch (__attrib0__) {
/* 000505 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000505 */ 					}
/* 000505 */ 				}
/* 000505 */ 			}
/* 000505 */ 		}
/* 000505 */ 		else {
/* 000505 */ 		}
/* 000506 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000506 */ 		__except0__.__cause__ = null;
/* 000506 */ 		throw __except0__;
/* 000506 */ 	});},
/* 000508 */ 	get get_flm_doc () {return __get__ (this, function (self) {
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000509 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000509 */ 	});}
/* 000509 */ });
/* 000512 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [FLMSpecInfoParagraphBreak], {
/* 000512 */ 	__module__: __name__,
/* 000513 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000513 */ 		var kwargs = dict ();
/* 000513 */ 		if (arguments.length) {
/* 000513 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000513 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000513 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000513 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000513 */ 					switch (__attrib0__) {
/* 000513 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000513 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000513 */ 					}
/* 000513 */ 				}
/* 000513 */ 				delete kwargs.__kwargtrans__;
/* 000513 */ 			}
/* 000513 */ 		}
/* 000513 */ 		else {
/* 000513 */ 		}
/* 000514 */ 		__call__ (__call__ (__super__, null, ParagraphBreakSpecials, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000514 */ 	});},
/* 000517 */ 	_fields: tuple (['specials_chars'])
/* 000517 */ });
/* 000519 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [FLMSpecInfoParagraphBreak], {
/* 000519 */ 	__module__: __name__,
/* 000520 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000520 */ 		var kwargs = dict ();
/* 000520 */ 		if (arguments.length) {
/* 000520 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000520 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000520 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000520 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000520 */ 					switch (__attrib0__) {
/* 000520 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000520 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000520 */ 					}
/* 000520 */ 				}
/* 000520 */ 				delete kwargs.__kwargtrans__;
/* 000520 */ 			}
/* 000520 */ 		}
/* 000520 */ 		else {
/* 000520 */ 		}
/* 000521 */ 		__call__ (__call__ (__super__, null, ParagraphBreakMacro, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000521 */ 	});},
/* 000523 */ 	_fields: tuple (['macroname'])
/* 000523 */ });
/* 000528 */ export var FLMSpecInfoError =  __class__ ('FLMSpecInfoError', [FLMSpecInfo], {
/* 000528 */ 	__module__: __name__,
/* 000530 */ 	allowed_in_standalone_mode: true,
/* 000532 */ 	get __init__ () {return __get__ (this, function (self, error_msg) {
/* 000532 */ 		if (typeof error_msg == 'undefined' || (error_msg != null && error_msg.hasOwnProperty ("__kwargtrans__"))) {;
/* 000532 */ 			var error_msg = null;
/* 000532 */ 		};
/* 000532 */ 		var kwargs = dict ();
/* 000532 */ 		if (arguments.length) {
/* 000532 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000532 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000532 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000532 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000532 */ 					switch (__attrib0__) {
/* 000532 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000532 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000532 */ 					}
/* 000532 */ 				}
/* 000532 */ 				delete kwargs.__kwargtrans__;
/* 000532 */ 			}
/* 000532 */ 		}
/* 000532 */ 		else {
/* 000532 */ 		}
/* 000533 */ 		__call__ (__call__ (__super__, null, FLMSpecInfoError, '__init__'), null, self, __kwargtrans__ (kwargs));
/* 000534 */ 		self.error_msg = error_msg;
/* 000534 */ 	});},
/* 000536 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000536 */ 		if (arguments.length) {
/* 000536 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000536 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000536 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000536 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000536 */ 					switch (__attrib0__) {
/* 000536 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000536 */ 					}
/* 000536 */ 				}
/* 000536 */ 			}
/* 000536 */ 		}
/* 000536 */ 		else {
/* 000536 */ 		}
/* 000537 */ 		if (__t__ (self.error_msg)) {
/* 000538 */ 			var msg = self.error_msg;
/* 000538 */ 		}
/* 000539 */ 		else {
/* 000540 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000540 */ 				var __accu0__ = (function () {
/* 000540 */ 					var __accu1__ = node;
/* 000540 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000540 */ 				}) ();
/* 000540 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000540 */ 			}) ());
/* 000540 */ 		}
/* 000542 */ 		(function () {
/* 000542 */ 			var __accu0__ = logger;
/* 000542 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000542 */ 		}) ();
/* 000544 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000544 */ 		__except0__.__cause__ = null;
/* 000544 */ 		throw __except0__;
/* 000544 */ 	});}
/* 000544 */ });
/* 000547 */ export var FLMMacroSpecError =  __class__ ('FLMMacroSpecError', [FLMSpecInfoError], {
/* 000547 */ 	__module__: __name__,
/* 000548 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000548 */ 		var kwargs = dict ();
/* 000548 */ 		if (arguments.length) {
/* 000548 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000548 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000548 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000548 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000548 */ 					switch (__attrib0__) {
/* 000548 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000548 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000548 */ 					}
/* 000548 */ 				}
/* 000548 */ 				delete kwargs.__kwargtrans__;
/* 000548 */ 			}
/* 000548 */ 		}
/* 000548 */ 		else {
/* 000548 */ 		}
/* 000549 */ 		__call__ (__call__ (__super__, null, FLMMacroSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, spec_node_parser_type: 'macro'}, kwargs)));
/* 000549 */ 	});},
/* 000551 */ 	_fields: tuple (['macroname', 'error_msg'])
/* 000551 */ });
/* 000553 */ export var FLMEnvironmentSpecError =  __class__ ('FLMEnvironmentSpecError', [FLMSpecInfoError], {
/* 000553 */ 	__module__: __name__,
/* 000554 */ 	get __init__ () {return __get__ (this, function (self, environmentname) {
/* 000554 */ 		var kwargs = dict ();
/* 000554 */ 		if (arguments.length) {
/* 000554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000554 */ 					switch (__attrib0__) {
/* 000554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000554 */ 					}
/* 000554 */ 				}
/* 000554 */ 				delete kwargs.__kwargtrans__;
/* 000554 */ 			}
/* 000554 */ 		}
/* 000554 */ 		else {
/* 000554 */ 		}
/* 000555 */ 		__call__ (__call__ (__super__, null, FLMEnvironmentSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({environmentname: environmentname, spec_node_parser_type: 'environment'}, kwargs)));
/* 000555 */ 	});},
/* 000559 */ 	_fields: tuple (['environmentname', 'error_msg'])
/* 000559 */ });
/* 000561 */ export var FLMSpecialsSpecError =  __class__ ('FLMSpecialsSpecError', [FLMSpecInfoError], {
/* 000561 */ 	__module__: __name__,
/* 000562 */ 	get __init__ () {return __get__ (this, function (self, specials_chars) {
/* 000562 */ 		var kwargs = dict ();
/* 000562 */ 		if (arguments.length) {
/* 000562 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000562 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000562 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000562 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000562 */ 					switch (__attrib0__) {
/* 000562 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						case 'specials_chars': var specials_chars = __allkwargs0__ [__attrib0__]; break;
/* 000562 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000562 */ 					}
/* 000562 */ 				}
/* 000562 */ 				delete kwargs.__kwargtrans__;
/* 000562 */ 			}
/* 000562 */ 		}
/* 000562 */ 		else {
/* 000562 */ 		}
/* 000563 */ 		__call__ (__call__ (__super__, null, FLMSpecialsSpecError, '__init__'), null, self, __kwargtrans__ (__mergekwargtrans__ ({specials_chars: specials_chars, spec_node_parser_type: 'specials'}, kwargs)));
/* 000563 */ 	});},
/* 000567 */ 	_fields: tuple (['specials_chars', 'error_msg'])
/* 000567 */ });
/* 000007 */ 
//# sourceMappingURL=flm.flmspecinfo.map