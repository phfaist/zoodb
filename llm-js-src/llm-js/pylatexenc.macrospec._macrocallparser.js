/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:06:32
/* 000036 */ var logging = {};
/* 000036 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000043 */ import {get_updated_parsing_state_from_delta} from './pylatexenc.latexnodes.js';
/* 000041 */ import {LatexParserBase} from './pylatexenc.latexnodes.parsers.js';
/* 000040 */ import {LatexEnvironmentNode, LatexMacroNode, LatexSpecialsNode} from './pylatexenc.latexnodes.nodes.js';
/* 000036 */ import * as __module_logging__ from './logging.js';
/* 000036 */ __nest__ (logging, '', __module_logging__);
/* 000036 */ export {LatexMacroNode, LatexSpecialsNode, get_updated_parsing_state_from_delta, LatexEnvironmentNode, LatexParserBase};
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
/* 000057 */ 		(function () {
/* 000057 */ 			var __accu0__ = logger;
/* 000057 */ 			return __call__ (__accu0__.debug, __accu0__, '_LatexCallableParserBase, token_call=%r, spec_object=%r (%s)', token_call, spec_object, what);
/* 000057 */ 		}) ();
/* 000060 */ 		self.token_call = token_call;
/* 000061 */ 		self.spec_object = spec_object;
/* 000062 */ 		self.what = what;
/* 000063 */ 		self.node_class = node_class;
/* 000064 */ 		self.node_extra_kwargs = node_extra_kwargs;
/* 000066 */ 		self.arguments_parser = self.spec_object.arguments_parser;
/* 000068 */ 		self.parse_body = parse_body;
/* 000070 */ 		self.make_arguments_parsing_state_delta = self.spec_object.make_arguments_parsing_state_delta;
/* 000072 */ 		self.make_body_parsing_state_delta = self.spec_object.make_body_parsing_state_delta;
/* 000074 */ 		self.make_after_parsing_state_delta = self.spec_object.make_after_parsing_state_delta;
/* 000074 */ 	});},
/* 000078 */ 	get parse_call_arguments () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000078 */ 		var kwargs = dict ();
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 				delete kwargs.__kwargtrans__;
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000082 */ 		var arguments_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, (function () {
/* 000082 */ 			var __accu0__ = self;
/* 000082 */ 			return __call__ (__accu0__.make_arguments_parsing_state_delta, __accu0__, __kwargtrans__ ({token: self.token_call, latex_walker: latex_walker}));
/* 000082 */ 		}) (), latex_walker);
/* 000089 */ 		var __left0__ = (function () {
/* 000089 */ 			var __accu0__ = latex_walker;
/* 000089 */ 			return __call__ (__accu0__.parse_content, __accu0__, self.arguments_parser, token_reader, arguments_parsing_state, __kwargtrans__ (kwargs));
/* 000089 */ 		}) ();
/* 000089 */ 		var nodeargd = __left0__ [0];
/* 000089 */ 		var parsing_state_delta = __left0__ [1];
/* 000099 */ 		return tuple ([nodeargd, parsing_state_delta]);
/* 000099 */ 	});},
/* 000101 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker) {
/* 000101 */ 		if (arguments.length) {
/* 000101 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000101 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000101 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000101 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000101 */ 					switch (__attrib0__) {
/* 000101 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000101 */ 					}
/* 000101 */ 				}
/* 000101 */ 			}
/* 000101 */ 		}
/* 000101 */ 		else {
/* 000101 */ 		}
/* 000103 */ 		var __except0__ = __call__ (RuntimeError, null, 'No default implementation of make_body_parser_and_parsing_state() in base class');
/* 000103 */ 		__except0__.__cause__ = null;
/* 000103 */ 		throw __except0__;
/* 000103 */ 	});},
/* 000106 */ 	get parse_call_body () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, latex_walker, token_reader, parsing_state) {
/* 000106 */ 		var kwargs = dict ();
/* 000106 */ 		if (arguments.length) {
/* 000106 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000106 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000106 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000106 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000106 */ 					switch (__attrib0__) {
/* 000106 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000106 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000106 */ 					}
/* 000106 */ 				}
/* 000106 */ 				delete kwargs.__kwargtrans__;
/* 000106 */ 			}
/* 000106 */ 		}
/* 000106 */ 		else {
/* 000106 */ 		}
/* 000110 */ 		var __left0__ = (function () {
/* 000110 */ 			var __accu0__ = self;
/* 000110 */ 			return __call__ (__accu0__.make_body_parser_and_parsing_state, __accu0__, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker);
/* 000110 */ 		}) ();
/* 000110 */ 		var body_parser = __left0__ [0];
/* 000110 */ 		var body_parsing_state = __left0__ [1];
/* 000113 */ 		var __left0__ = (function () {
/* 000113 */ 			var __accu0__ = latex_walker;
/* 000113 */ 			return __call__ (__accu0__.parse_content, __accu0__, body_parser, token_reader, body_parsing_state, __kwargtrans__ (kwargs));
/* 000113 */ 		}) ();
/* 000113 */ 		var nodelist = __left0__ [0];
/* 000113 */ 		var parsing_state_delta = __left0__ [1];
/* 000123 */ 		return tuple ([nodelist, parsing_state_delta]);
/* 000123 */ 	});},
/* 000126 */ 	get parse () {return __get__ (this, function (self, latex_walker, token_reader, parsing_state) {
/* 000126 */ 		var kwargs = dict ();
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 				delete kwargs.__kwargtrans__;
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000128 */ 		var pos_start = self.token_call.pos;
/* 000131 */ 		if (__t__ (self.arguments_parser !== null)) {
/* 000132 */ 			var __left0__ = (function () {
/* 000132 */ 				var __accu0__ = self;
/* 000132 */ 				return __call__ (__accu0__.parse_call_arguments, __accu0__, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000132 */ 			}) ();
/* 000132 */ 			var nodeargd = __left0__ [0];
/* 000132 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000132 */ 		}
/* 000133 */ 		else {
/* 000136 */ 			var __left0__ = tuple ([null, null]);
/* 000136 */ 			var nodeargd = __left0__ [0];
/* 000136 */ 			var arg_parsing_state_delta = __left0__ [1];
/* 000136 */ 		}
/* 000138 */ 		(function () {
/* 000138 */ 			var __accu0__ = logger;
/* 000138 */ 			return __call__ (__accu0__.debug, __accu0__, 'Parsed macro/env/specials arguments; nodeargd=%r, arg_parsing_state_delta=%r', nodeargd, arg_parsing_state_delta);
/* 000138 */ 		}) ();
/* 000143 */ 		if (__t__ (self.parse_body)) {
/* 000144 */ 			var __left0__ = (function () {
/* 000144 */ 				var __accu0__ = self;
/* 000144 */ 				return __call__ (__accu0__.parse_call_body, __accu0__, nodeargd, arg_parsing_state_delta, latex_walker, token_reader, parsing_state, __kwargtrans__ (kwargs));
/* 000144 */ 			}) ();
/* 000144 */ 			var body_nodelist = __left0__ [0];
/* 000144 */ 			var body_parsing_state_delta = __left0__ [1];
/* 000144 */ 		}
/* 000145 */ 		else {
/* 000150 */ 			if (__t__ (arg_parsing_state_delta !== null)) {
/* 000151 */ 				(function () {
/* 000151 */ 					var __accu0__ = logger;
/* 000151 */ 					return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after arguments to %s!', arg_parsing_state_delta, self.what);
/* 000151 */ 				}) ();
/* 000151 */ 			}
/* 000157 */ 			var body_nodelist = null;
/* 000158 */ 			var body_parsing_state_delta = null;
/* 000158 */ 		}
/* 000160 */ 		if (__t__ (body_parsing_state_delta !== null)) {
/* 000161 */ 			(function () {
/* 000161 */ 				var __accu0__ = logger;
/* 000161 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after body!', body_parsing_state_delta);
/* 000161 */ 			}) ();
/* 000161 */ 		}
/* 000167 */ 		var pos_end = (function () {
/* 000167 */ 			var __accu0__ = token_reader;
/* 000167 */ 			return __call__ (__accu0__.cur_pos, __accu0__);
/* 000167 */ 		}) ();
/* 000169 */ 		var node_kwargs = __call__ (dict, null, self.node_extra_kwargs);
/* 000170 */ 		if (__t__ (self.parse_body)) {
/* 000171 */ 			__setitem__ (node_kwargs, 'nodelist', body_nodelist);
/* 000171 */ 		}
/* 000173 */ 		var node = (function () {
/* 000173 */ 			var __accu0__ = latex_walker;
/* 000173 */ 			return __call__ (__accu0__.make_node, __accu0__, self.node_class, __kwargtrans__ (__mergekwargtrans__ ({parsing_state: parsing_state, spec: self.spec_object, nodeargd: nodeargd, pos: pos_start, pos_end: pos_end}, node_kwargs)));
/* 000173 */ 		}) ();
/* 000187 */ 		var node = (function () {
/* 000187 */ 			var __accu0__ = self.spec_object;
/* 000187 */ 			return __call__ (__accu0__.finalize_node, __accu0__, node);
/* 000187 */ 		}) ();
/* 000189 */ 		var parsing_state_delta = (function () {
/* 000189 */ 			var __accu0__ = self;
/* 000189 */ 			return __call__ (__accu0__.make_after_parsing_state_delta, __accu0__, __kwargtrans__ ({parsed_node: node, latex_walker: latex_walker}));
/* 000189 */ 		}) ();
/* 000194 */ 		(function () {
/* 000194 */ 			var __accu0__ = logger;
/* 000194 */ 			return __call__ (__accu0__.debug, __accu0__, 'Parsed macro/env/specials call - node %r - parsing_state_delta %r', node, parsing_state_delta);
/* 000194 */ 		}) ();
/* 000197 */ 		return tuple ([node, parsing_state_delta]);
/* 000197 */ 	});}
/* 000197 */ });
/* 000202 */ export var LatexMacroCallParser =  __class__ ('LatexMacroCallParser', [_LatexCallableParserBase], {
/* 000202 */ 	__module__: __name__,
/* 000204 */ 	get __init__ () {return __get__ (this, function (self, token_call, macrospec) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'macrospec': var macrospec = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000205 */ 		var macroname = token_call.arg;
/* 000206 */ 		var macro_post_space = token_call.post_space;
/* 000210 */ 		__call__ (__call__ (__super__, null, LatexMacroCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: macrospec, what: (function () {
/* 000210 */ 			var __accu0__ = 'macro call (\\{})';
/* 000210 */ 			return __call__ (__accu0__.format, __accu0__, macroname);
/* 000212 */ 		}) (), node_class: LatexMacroNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({macroname: macroname, macro_post_space: macro_post_space}))}));
/* 000215 */ 		self.macroname = macroname;
/* 000216 */ 		self.macro_post_space = macro_post_space;
/* 000216 */ 	});}
/* 000216 */ });
/* 000219 */ export var LatexEnvironmentCallParser =  __class__ ('LatexEnvironmentCallParser', [_LatexCallableParserBase], {
/* 000219 */ 	__module__: __name__,
/* 000221 */ 	get __init__ () {return __get__ (this, function (self, token_call, environmentspec) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'environmentspec': var environmentspec = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		var environmentname = token_call.arg;
/* 000226 */ 		__call__ (__call__ (__super__, null, LatexEnvironmentCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: environmentspec, what: (function () {
/* 000226 */ 			var __accu0__ = 'environment {}{}{}';
/* 000226 */ 			return __call__ (__accu0__.format, __accu0__, '{', environmentname, '}');
/* 000229 */ 		}) (), parse_body: true, node_class: LatexEnvironmentNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({environmentname: environmentname}))}));
/* 000231 */ 		self.environmentname = environmentname;
/* 000231 */ 	});},
/* 000233 */ 	get make_body_parser_and_parsing_state () {return __get__ (this, function (self, nodeargd, arg_parsing_state_delta, parsing_state, latex_walker) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000235 */ 		if (__t__ (arg_parsing_state_delta !== null)) {
/* 000236 */ 			(function () {
/* 000236 */ 				var __accu0__ = logger;
/* 000236 */ 				return __call__ (__accu0__.warning, __accu0__, 'Parsing carry-over information (%r) ignored after arguments to %s!', arg_parsing_state_delta, self.what);
/* 000236 */ 			}) ();
/* 000236 */ 		}
/* 000242 */ 		var parser = (function () {
/* 000242 */ 			var __accu0__ = self.spec_object;
/* 000242 */ 			return __call__ (__accu0__.make_body_parser, __accu0__, self.token_call, nodeargd, arg_parsing_state_delta);
/* 000242 */ 		}) ();
/* 000247 */ 		var body_parsing_state = __call__ (get_updated_parsing_state_from_delta, null, parsing_state, (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.make_body_parsing_state_delta, __accu0__, __kwargtrans__ ({token: self.token_call, nodeargd: nodeargd, arg_parsing_state_delta: arg_parsing_state_delta, latex_walker: latex_walker}));
/* 000247 */ 		}) (), latex_walker);
/* 000256 */ 		return tuple ([parser, body_parsing_state]);
/* 000256 */ 	});},
/* 000259 */ 	get _handle_stop_condition_token () {return __get__ (this, function (self, t, latex_walker, token_reader, parsing_state) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'latex_walker': var latex_walker = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'token_reader': var token_reader = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'parsing_state': var parsing_state = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		(function () {
/* 000260 */ 			var __accu0__ = token_reader;
/* 000260 */ 			return __call__ (__accu0__.move_past_token, __accu0__, t);
/* 000260 */ 		}) ();
/* 000260 */ 	});},
/* 000262 */ 	get _parse_body_token_stop_condition () {return __get__ (this, function (self, t) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 't': var t = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		if (__t__ (__t__ (__eq__ (t.tok, 'end_environment')) && __eq__ (t.arg, self.environmentname))) {
/* 000264 */ 			return true;
/* 000264 */ 		}
/* 000265 */ 		return false;
/* 000265 */ 	});}
/* 000265 */ });
/* 000269 */ export var LatexSpecialsCallParser =  __class__ ('LatexSpecialsCallParser', [_LatexCallableParserBase], {
/* 000269 */ 	__module__: __name__,
/* 000271 */ 	get __init__ () {return __get__ (this, function (self, token_call, specialsspec) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'token_call': var token_call = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'specialsspec': var specialsspec = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000272 */ 		var specials_chars = specialsspec.specials_chars;
/* 000276 */ 		__call__ (__call__ (__super__, null, LatexSpecialsCallParser, '__init__'), null, self, __kwargtrans__ ({token_call: token_call, spec_object: specialsspec, what: (function () {
/* 000276 */ 			var __accu0__ = 'specials ‘{}’';
/* 000276 */ 			return __call__ (__accu0__.format, __accu0__, specials_chars);
/* 000278 */ 		}) (), node_class: LatexSpecialsNode, node_extra_kwargs: __call__ (dict, null, __kwargtrans__ ({specials_chars: specials_chars}))}));
/* 000280 */ 		self.specials_chars = specials_chars;
/* 000280 */ 	});}
/* 000280 */ });
/* 000036 */ 
//# sourceMappingURL=pylatexenc.macrospec._macrocallparser.map