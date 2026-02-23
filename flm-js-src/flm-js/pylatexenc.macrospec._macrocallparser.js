/* 000001 */ // Transcrypt'ed from Python, 2026-02-23 19:58:47
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes.js';
/* 000041 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000040 */ import {LatexEnvironmentNode, LatexMacroNode, LatexSpecialsNode} from './pylatexenc.latexnodes.nodes.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {LatexEnvironmentNode, LatexSpecialsNode, get_updated_parsing_state_from_delta, LatexMacroNode, LatexParserBase};
/* 000001 */ var __name__ = 'pylatexenc.macrospec._macrocallparser';
/* 000038 */ export var logger = (function () {
/* 000038 */ 	var __accu0__ = logging;
/* 000038 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000038 */ }) ();
/* 000046 */ export var _LatexCallableParserBase =  __class__ ('_LatexCallableParserBase', [LatexParserBase], {
/* 000046 */ 	__module__: __name__,
/* 000047 */ 	get __init__ () {return __get__ (this, function (self, token_call, spec_object, what, node_class, node_extra_kwargs, parse_body) {
/* 000047 */ 		if (typeof parse_body == 'undefined' || (parse_body != null && parse_body.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var parse_body = false;
/* 000047 */ 		};
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'spec_object': var spec_object = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'what': var what = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'node_class': var node_class = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'node_extra_kwargs': var node_extra_kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'parse_body': var parse_body = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000055 */ 		__call__ (__call__ (__super__, null, _LatexCallableParserBase, '__init__'), null, self);
/* 000057 */ 		// pass;
/* 000062 */ 		self.token_call = token_call;
/* 000063 */ 		self.spec_object = spec_object;
/* 000064 */ 		self.what = what;
/* 000065 */ 		self.node_class = node_class;
/* 000066 */ 		self.node_extra_kwargs = node_extra_kwargs;
/* 000068 */ 		self.arguments_parser = self.spec_object.arguments_parser;
/* 000070 */ 		self.parse_body = parse_body;
/* 000072 */ 		self.make_arguments_parsing_state_delta = self.spec_object.make_arguments_parsing_state_delta;
/* 000074 */ 		self.make_body_parsing_state_delta = self.spec_object.make_body_parsing_state_delta;
/* 000076 */ 		self.make_after_parsing_state_delta = self.spec_object.make_after_parsing_state_delta;
/* 000076 */ 	});},
/* 000080 */ 	get parse_call_arguments () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000080 */ 		var kwargs = dict ();
/* 000080 */ 		if (arguments.length) {
/* 000080 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000080 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000080 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000080 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000080 */ 					switch (__attrib0__) {
/* 000080 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000080 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000080 */ 					}
/* 000080 */ 				}
/* 000080 */ 				delete kwargs.__kwargtrans__;
/* 000080 */ 			}
/* 000080 */ 		}
/* 000080 */ 		else {
/* 000080 */ 		}
/* 000084 */ 		var arguments_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, (function () {
/* 000084 */ 			var __accu0__ = self;
/* 000084 */ 			return __call__ (__accu0__.make_arguments_parsing_state_delta, __accu0__, __kwargtrans__ ({token: self.token_call, latex_walker: latex_walker}));
/* 000084 */ 		}) (), latex_walker);
/* 000091 */ 		var __left0__ = (function () {
/* 000091 */ 			var __accu0__ = latex_walker;
/* 000091 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.arguments_parser, token_reader, arguments_parsing_state, __kwargtrans__ (kwargs));
/* 000091 */ 		}) ();
/* 000091 */ 		var nodeargd = __left0__ [0];
/* 000091 */ 		var parsing_state_delta = __left0__ [1];
/* 000101 */ 		return tuple ([nodeargd, parsing_state_delta]);
/* 000101 */ 	});},
/* 000103 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000105 */ 		var __except0__ = __call__ (RuntimeError, null, 'No default implementation of make_body_parser_and_parsing_state() in base class');
/* 000105 */ 		__except0__.__cause__ = null;
/* 000105 */ 		throw __except0__;
/* 000105 */ 	});},
/* 000108 */ 	get parse_call_body () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, latex_walker, token_reader, parsing_state) {
/* 000108 */ 		var kwargs = dict ();
/* 000108 */ 		if (arguments.length) {
/* 000108 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000108 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000108 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000108 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000108 */ 					switch (__attrib0__) {
/* 000108 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000108 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000108 */ 					}
/* 000108 */ 				}
/* 000108 */ 				delete kwargs.__kwargtrans__;
/* 000108 */ 			}
/* 000108 */ 		}
/* 000108 */ 		else {
/* 000108 */ 		}
/* 000112 */ 		var __left0__ = (function () {
/* 000112 */ 			var __accu0__ = self;
/* 000112 */ 			return __call__ (__accu0__.make_body_parser_and_parsing_state, __accu0__, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker);
/* 000112 */ 		}) ();
/* 000112 */ 		var body_parser = __left0__ [0];
/* 000112 */ 		var body_parsing_state = __left0__ [1];
/* 000115 */ 		var __left0__ = (function () {
/* 000115 */ 			var __accu0__ = latex_walker;
/* 000115 */ 			return __call__ (__accu0__.parse_content, __accu0__, body_parser, token_reader, body_parsing_state, __kwargtrans__ (kwargs));
/* 000115 */ 		}) ();
/* 000115 */ 		var nodelist = __left0__ [0];
/* 000115 */ 		var parsing_state_delta = __left0__ [1];
/* 000125 */ 		return tuple ([nodelist, parsing_state_delta]);
/* 000125 */ 	});},
/* 000128 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000128 */ 		var kwargs = dict ();
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 				delete kwargs.__kwargtrans__;
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000130 */ 		var pos_start = self.token_call.pos;
/* 000133 */ 		if (__t__ (self.arguments_parser !== null)) {
/* 000134 */ 			var __left0__ = (function () {
/* 000134 */ 				var __accu0__ = self;
/* 000134 */ 				return __call__ (__accu0__.parse_call_arguments, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000134 */ 			}) ();
/* 000134 */ 			var nodeargd = __left0__ [0];
/* 000134 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000134 */ 		}
/* 000135 */ 		else {
/* 000138 */ 			var __left0__ = tuple ([null, null]);
/* 000138 */ 			var nodeargd = __left0__ [0];
/* 000138 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000138 */ 		}
/* 000140 */ 		// pass;
/* 000147 */ 		if (__t__ (self.parse_body)) {
/* 000148 */ 			var __left0__ = (function () {
/* 000148 */ 				var __accu0__ = self;
/* 000148 */ 				return __call__ (__accu0__.parse_call_body, __accu0__, nodeargd, arg_parsing_state_delta, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000148 */ 			}) ();
/* 000148 */ 			var body_nodelist = __left0__ [0];
/* 000148 */ 			var body_parsing_state_delta = __left0__ [1];
/* 000148 */ 		}
/* 000149 */ 		else {
/* 000154 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000155 */ 				(function () {
/* 000155 */ 					var __accu0__ = logger;
/* 000155 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing state delta (%r) ignored after arguments to %s!', arg_parsing_state_delta, self.what);
/* 000155 */ 				}) ();
/* 000155 */ 			}
/* 000161 */ 			var body_nodelist = null;
/* 000162 */ 			var body_parsing_state_delta = null;
/* 000162 */ 		}
/* 000164 */ 		if (__t__ (body_parsing_state_delta !== null)) {
/* 000165 */ 			(function () {
/* 000165 */ 				var __accu0__ = logger;
/* 000165 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing state delta (%r) ignored after body!', body_parsing_state_delta);
/* 000165 */ 			}) ();
/* 000165 */ 		}
/* 000171 */ 		var pos_end = (function () {
/* 000171 */ 			var __accu0__ = token_reader;
/* 000171 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000171 */ 		}) ();
/* 000173 */ 		var node_kwargs = __call__ (dict, null, self.node_extra_kwargs);
/* 000174 */ 		if (__t__ (self.parse_body)) {
/* 000175 */ 			__setitem__ (node_kwargs, 'nodelist', body_nodelist);
/* 000175 */ 		}
/* 000177 */ 		var node = (function () {
/* 000177 */ 			var __accu0__ = latex_walker;
/* 000177 */ 			return __call__ (__accu0__.make_node, __accu0__, self.node_class, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state, spec: self.spec_object, nodeargd: nodeargd, pos: pos_start, pos_end: pos_end}, node_kwargs)));
/* 000177 */ 		}) ();
/* 000191 */ 		var node = (function () {
/* 000191 */ 			var __accu0__ = self.spec_object;
/* 000191 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000191 */ 		}) ();
/* 000193 */ 		var parsing_state_delta = (function () {
/* 000193 */ 			var __accu0__ = self;
/* 000193 */ 			return __call__ (__accu0__.make_after_parsing_state_delta, __accu0__, __kwargtrans__ ({parsed_node: node, latex_walker: latex_walker}));
/* 000193 */ 		}) ();
/* 000198 */ 		// pass;
/* 000203 */ 		return tuple ([node, parsing_state_delta]);
/* 000203 */ 	});}
/* 000203 */ });
/* 000208 */ export var LatexMacroCallParser =  __class__ ('LatexMacroCallParser', [_LatexCallableParserBase], {
/* 000208 */ 	__module__: __name__,
/* 000210 */ 	get __init__ () {return __get__ (this, function (self, token_call, macrospec) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		var macroname = token_call.arg;
/* 000212 */ 		var macro_post_space = token_call.post_space;
/* 000216 */ 		__call__ (__call__ (__super__, null, LatexMacroCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: macrospec, what: (function () {
/* 000216 */ 			var __accu0__ = 'macro call (\\{})';
/* 000216 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000218 */ 		}) (), node_class: LatexMacroNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({macroname: macroname, macro_post_space: macro_post_space}))}));
/* 000221 */ 		self.macroname = macroname;
/* 000222 */ 		self.macro_post_space = macro_post_space;
/* 000222 */ 	});}
/* 000222 */ });
/* 000225 */ export var LatexEnvironmentCallParser =  __class__ ('LatexEnvironmentCallParser', [_LatexCallableParserBase], {
/* 000225 */ 	__module__: __name__,
/* 000227 */ 	get __init__ () {return __get__ (this, function (self, token_call, environmentspec) {
/* 000227 */ 		if (arguments.length) {
/* 000227 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000227 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000227 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000227 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000227 */ 					switch (__attrib0__) {
/* 000227 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000227 */ 					}
/* 000227 */ 				}
/* 000227 */ 			}
/* 000227 */ 		}
/* 000227 */ 		else {
/* 000227 */ 		}
/* 000228 */ 		var environmentname = token_call.arg;
/* 000232 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: environmentspec, what: (function () {
/* 000232 */ 			var __accu0__ = 'environment {}{}{}';
/* 000232 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000235 */ 		}) (), parse_body: true, node_class: LatexEnvironmentNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({environmentname: environmentname}))}));
/* 000237 */ 		self.environmentname = environmentname;
/* 000237 */ 	});},
/* 000239 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker) {
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000241 */ 		if (__t__ (arg_parsing_state_delta !== null)) {
/* 000242 */ 			(function () {
/* 000242 */ 				var __accu0__ = logger;
/* 000242 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after arguments to %s!', arg_parsing_state_delta, self.what);
/* 000242 */ 			}) ();
/* 000242 */ 		}
/* 000248 */ 		var parser = (function () {
/* 000248 */ 			var __accu0__ = self.spec_object;
/* 000248 */ 			return __call__ (__accu0__.make_body_parser, __accu0__, self.token_call, nodeargd, arg_parsing_state_delta);
/* 000248 */ 		}) ();
/* 000253 */ 		var body_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, (function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.make_body_parsing_state_delta, __accu0__, __kwargtrans__ ({token: self.token_call, nodeargd: nodeargd, arg_parsing_state_delta: arg_parsing_state_delta, latex_walker: latex_walker}));
/* 000253 */ 		}) (), latex_walker);
/* 000262 */ 		return tuple ([parser, body_parsing_state]);
/* 000262 */ 	});},
/* 000265 */ 	get _handle_stop_condition_token () {return __get__ (this, function (self, t, latex_walker, token_reader, parsing_state) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000266 */ 		(function () {
/* 000266 */ 			var __accu0__ = token_reader;
/* 000266 */ 			return __call__ (__accu0__.move_past_token, __accu0__, t);
/* 000266 */ 		}) ();
/* 000266 */ 	});},
/* 000268 */ 	get _parse_body_token_stop_condition () {return __get__ (this, function (self, t) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000269 */ 		if (__t__ (__t__ (__eq__ (t.tok, 'end_environment')) && __eq__ (t.arg, self.environmentname))) {
/* 000270 */ 			return true;
/* 000270 */ 		}
/* 000271 */ 		return false;
/* 000271 */ 	});}
/* 000271 */ });
/* 000275 */ export var LatexSpecialsCallParser =  __class__ ('LatexSpecialsCallParser', [_LatexCallableParserBase], {
/* 000275 */ 	__module__: __name__,
/* 000277 */ 	get __init__ () {return __get__ (this, function (self, token_call, specialsspec) {
/* 000277 */ 		if (arguments.length) {
/* 000277 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000277 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000277 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000277 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000277 */ 					switch (__attrib0__) {
/* 000277 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000277 */ 					}
/* 000277 */ 				}
/* 000277 */ 			}
/* 000277 */ 		}
/* 000277 */ 		else {
/* 000277 */ 		}
/* 000278 */ 		var specials_chars = specialsspec.specials_chars;
/* 000282 */ 		__call__ (__call__ (__super__, null, LatexSpecialsCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: specialsspec, what: (function () {
/* 000282 */ 			var __accu0__ = 'specials ‘{}’';
/* 000282 */ 			return __call__ (__accu0__.format, __accu0__, specials_chars);
/* 000284 */ 		}) (), node_class: LatexSpecialsNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({specials_chars: specials_chars}))}));
/* 000286 */ 		self.specials_chars = specials_chars;
/* 000286 */ 	});}
/* 000286 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._macrocallparser.map