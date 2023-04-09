/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:27
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000014 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000013 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {latexnodes_parsers, LLMArgumentSpec, macrospec, latexnodes_nodes, LatexWalkerParseError, ParsedArgumentsInfo};
/* 000001 */ var __name__ = 'llm.llmspecinfo';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000024 */ export var LLMSpecInfo =  __class__ ('LLMSpecInfo', [object], {
/* 000024 */ 	__module__: __name__,
/* 000031 */ 	delayed_render: false,
/* 000040 */ 	is_block_level: false,
/* 000047 */ 	is_block_heading: false,
/* 000056 */ 	is_paragraph_break_marker: false,
/* 000063 */ 	allowed_in_standalone_mode: false,
/* 000081 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000081 */ 		if (arguments.length) {
/* 000081 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000081 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000081 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000081 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000081 */ 					switch (__attrib0__) {
/* 000081 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000081 */ 					}
/* 000081 */ 				}
/* 000081 */ 			}
/* 000081 */ 		}
/* 000081 */ 		else {
/* 000081 */ 		}
/* 000088 */ 		// pass;
/* 000088 */ 	});},
/* 000090 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000090 */ 		if (arguments.length) {
/* 000090 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000090 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000090 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000090 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000090 */ 					switch (__attrib0__) {
/* 000090 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000090 */ 					}
/* 000090 */ 				}
/* 000090 */ 			}
/* 000090 */ 		}
/* 000090 */ 		else {
/* 000090 */ 		}
/* 000098 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000098 */ 		__except0__.__cause__ = null;
/* 000098 */ 		throw __except0__;
/* 000098 */ 	});},
/* 000100 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000100 */ 		if (arguments.length) {
/* 000100 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000100 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000100 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000100 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000100 */ 					switch (__attrib0__) {
/* 000100 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000100 */ 					}
/* 000100 */ 				}
/* 000100 */ 			}
/* 000100 */ 		}
/* 000100 */ 		else {
/* 000100 */ 		}
/* 000105 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000105 */ 		__except0__.__cause__ = null;
/* 000105 */ 		throw __except0__;
/* 000105 */ 	});},
/* 000114 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000119 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000120 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000122 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000122 */ 				var __accu0__ = node;
/* 000122 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000122 */ 			}) ()));
/* 000122 */ 			__except0__.__cause__ = null;
/* 000122 */ 			throw __except0__;
/* 000122 */ 		}
/* 000125 */ 		node.llm_specinfo = self;
/* 000126 */ 		try {
/* 000127 */ 			(function () {
/* 000127 */ 				var __accu0__ = self;
/* 000127 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000127 */ 			}) ();
/* 000127 */ 		}
/* 000127 */ 		catch (__except0__) {
/* 000127 */ 			if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000127 */ 				var e = __except0__;
/* 000130 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000131 */ 					e.pos = node.pos;
/* 000131 */ 				}
/* 000132 */ 				var __except1__ = e;
/* 000132 */ 				__except1__.__cause__ = null;
/* 000132 */ 				throw __except1__;
/* 000132 */ 			}
/* 000132 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000132 */ 				var e = __except0__;
/* 000135 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000135 */ 				__except1__.__cause__ = null;
/* 000135 */ 				throw __except1__;
/* 000135 */ 			}
/* 000135 */ 			else if (isinstance (__except0__, Exception)) {
/* 000135 */ 				var e = __except0__;
/* 000138 */ 				(function () {
/* 000138 */ 					var __accu0__ = logger;
/* 000138 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000138 */ 				}) ();
/* 000140 */ 				(function () {
/* 000140 */ 					var __accu0__ = logger;
/* 000141 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000141 */ 						var __accu1__ = node.latex_walker;
/* 000141 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000142 */ 					}) ()), (function () {
/* 000142 */ 						var __accu1__ = node;
/* 000142 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000142 */ 					}) ()));
/* 000142 */ 				}) ();
/* 000144 */ 				__except0__.__cause__ = null;
/* 000144 */ 				throw __except0__;
/* 000144 */ 			}
/* 000144 */ 			else {
/* 000144 */ 				throw __except0__;
/* 000144 */ 			}
/* 000144 */ 		}
/* 000146 */ 		node.llm_is_block_level = self.is_block_level;
/* 000147 */ 		node.llm_is_block_heading = self.is_block_heading;
/* 000148 */ 		node.llm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000153 */ 		return node;
/* 000153 */ 	});}
/* 000153 */ });
/* 000165 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000165 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000165 */ 		var kwargs_to_first_constructor = null;
/* 000165 */ 	};
/* 000165 */ 	if (arguments.length) {
/* 000165 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 				switch (__attrib0__) {
/* 000165 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 	}
/* 000165 */ 	else {
/* 000165 */ 	}
/* 000167 */ 	var kwargs1 = dict ({});
/* 000168 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000169 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000170 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000170 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000170 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000171 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000172 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000172 */ 					var __accu0__ = kwargs2;
/* 000172 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000172 */ 				}) ());
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 	}
/* 000173 */ 	(function () {
/* 000173 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000173 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000173 */ 	}) ();
/* 000174 */ 	(function () {
/* 000174 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000174 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000174 */ 	}) ();
/* 000174 */ };
/* 000181 */ export var LLMMacroSpecBase =  __class__ ('LLMMacroSpecBase', [LLMSpecInfo, macrospec.MacroSpec], {
/* 000181 */ 	__module__: __name__,
/* 000182 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000182 */ 		var kwargs = dict ();
/* 000182 */ 		if (arguments.length) {
/* 000182 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 					switch (__attrib0__) {
/* 000182 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000182 */ 					}
/* 000182 */ 				}
/* 000182 */ 				delete kwargs.__kwargtrans__;
/* 000182 */ 			}
/* 000182 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000182 */ 		}
/* 000182 */ 		else {
/* 000182 */ 			var args = tuple ();
/* 000182 */ 		}
/* 000183 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecBase, self, args, kwargs);
/* 000183 */ 	});}
/* 000183 */ });
/* 000185 */ export var LLMEnvironmentSpecBase =  __class__ ('LLMEnvironmentSpecBase', [LLMSpecInfo, macrospec.EnvironmentSpec], {
/* 000185 */ 	__module__: __name__,
/* 000186 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000186 */ 		var kwargs = dict ();
/* 000186 */ 		if (arguments.length) {
/* 000186 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000186 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000186 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000186 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000186 */ 					switch (__attrib0__) {
/* 000186 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000186 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000186 */ 					}
/* 000186 */ 				}
/* 000186 */ 				delete kwargs.__kwargtrans__;
/* 000186 */ 			}
/* 000186 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000186 */ 		}
/* 000186 */ 		else {
/* 000186 */ 			var args = tuple ();
/* 000186 */ 		}
/* 000187 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecBase, self, args, kwargs);
/* 000187 */ 	});}
/* 000187 */ });
/* 000189 */ export var LLMSpecialsSpecBase =  __class__ ('LLMSpecialsSpecBase', [LLMSpecInfo, macrospec.SpecialsSpec], {
/* 000189 */ 	__module__: __name__,
/* 000190 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000190 */ 		var kwargs = dict ();
/* 000190 */ 		if (arguments.length) {
/* 000190 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000190 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000190 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000190 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000190 */ 					switch (__attrib0__) {
/* 000190 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000190 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000190 */ 					}
/* 000190 */ 				}
/* 000190 */ 				delete kwargs.__kwargtrans__;
/* 000190 */ 			}
/* 000190 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000190 */ 		}
/* 000190 */ 		else {
/* 000190 */ 			var args = tuple ();
/* 000190 */ 		}
/* 000191 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecBase, self, args, kwargs);
/* 000191 */ 	});}
/* 000191 */ });
/* 000198 */ export var make_verb_argument = function (value) {
/* 000198 */ 	if (arguments.length) {
/* 000198 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 				switch (__attrib0__) {
/* 000198 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 	}
/* 000198 */ 	else {
/* 000198 */ 	}
/* 000199 */ 	var delim0 = null;
/* 000200 */ 	var __break0__ = false;
/* 000200 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000200 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000200 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000201 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000202 */ 			var delim0 = delim;
/* 000202 */ 			__break0__ = true;
/* 000202 */ 			break;
/* 000202 */ 		}
/* 000202 */ 	}
/* 000204 */ 	if (!__break0__) {
/* 000205 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000205 */ 		__except0__.__cause__ = null;
/* 000205 */ 		throw __except0__;
/* 000205 */ 	}
/* 000207 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000207 */ };
/* 000210 */ export var LLMSpecInfoConstantValue =  __class__ ('LLMSpecInfoConstantValue', [LLMSpecInfo], {
/* 000210 */ 	__module__: __name__,
/* 000212 */ 	allowed_in_standalone_mode: true,
/* 000214 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 			}
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 		}
/* 000215 */ 		return __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000215 */ 	});},
/* 000217 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000217 */ 		var kwargs = dict ();
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 				delete kwargs.__kwargtrans__;
/* 000217 */ 			}
/* 000217 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 			var args = tuple ();
/* 000217 */ 		}
/* 000218 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoConstantValue, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000219 */ 		self.value = value;
/* 000219 */ 	});},
/* 000221 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000221 */ 		if (arguments.length) {
/* 000221 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000221 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000221 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000221 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000221 */ 					switch (__attrib0__) {
/* 000221 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000221 */ 					}
/* 000221 */ 				}
/* 000221 */ 			}
/* 000221 */ 		}
/* 000221 */ 		else {
/* 000221 */ 		}
/* 000222 */ 		return (function () {
/* 000222 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000222 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000222 */ 		}) ();
/* 000222 */ 	});}
/* 000222 */ });
/* 000225 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [LLMSpecInfoConstantValue, macrospec.MacroSpec], {
/* 000225 */ 	__module__: __name__,
/* 000226 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000226 */ 		var kwargs = dict ();
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 				delete kwargs.__kwargtrans__;
/* 000226 */ 			}
/* 000226 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 			var args = tuple ();
/* 000226 */ 		}
/* 000227 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueMacro, self, args, kwargs, tuple (['value']));
/* 000227 */ 	});}
/* 000227 */ });
/* 000229 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [LLMSpecInfoConstantValue, macrospec.SpecialsSpec], {
/* 000229 */ 	__module__: __name__,
/* 000230 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000230 */ 		var kwargs = dict ();
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 				delete kwargs.__kwargtrans__;
/* 000230 */ 			}
/* 000230 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 			var args = tuple ();
/* 000230 */ 		}
/* 000231 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueSpecials, self, args, kwargs, tuple (['value']));
/* 000231 */ 	});}
/* 000231 */ });
/* 000234 */ export var text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', llm_doc: 'The text or LLM content to process'}));
/* 000241 */ export var label_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000241 */ 	var __accu0__ = latexnodes_parsers;
/* 000241 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000241 */ }) (), argname: 'label', llm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000250 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes, allow_unknown_macros) {
/* 000250 */ 	if (typeof allow_unknown_macros == 'undefined' || (allow_unknown_macros != null && allow_unknown_macros.hasOwnProperty ("__kwargtrans__"))) {;
/* 000250 */ 		var allow_unknown_macros = false;
/* 000250 */ 	};
/* 000250 */ 	if (arguments.length) {
/* 000250 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 				switch (__attrib0__) {
/* 000250 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					case 'allow_unknown_macros': var allow_unknown_macros = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 	}
/* 000250 */ 	else {
/* 000250 */ 	}
/* 000252 */ 	if (__t__ (!__t__ (((function () {
/* 000252 */ 		var __accu0__ = node_arg_label;
/* 000252 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000252 */ 	}) ())))) {
/* 000253 */ 		return null;
/* 000253 */ 	}
/* 000255 */ 	var the_labels = [];
/* 000256 */ 	var argnodes = (function () {
/* 000256 */ 		var __accu0__ = node_arg_label;
/* 000256 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000256 */ 	}) ();
/* 000257 */ 	var __iterable0__ = argnodes;
/* 000257 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000257 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000258 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000260 */ 			var the_label = (function () {
/* 000260 */ 				var __accu0__ = argnode.nodelist;
/* 000260 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000260 */ 			}) ();
/* 000261 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000262 */ 				var __left0__ = (function () {
/* 000262 */ 					var __accu0__ = the_label;
/* 000262 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000262 */ 				}) ();
/* 000262 */ 				var ref_type = __left0__ [0];
/* 000262 */ 				var ref_label = __left0__ [1];
/* 000262 */ 			}
/* 000263 */ 			else {
/* 000264 */ 				var __left0__ = tuple ([null, the_label]);
/* 000264 */ 				var ref_type = __left0__ [0];
/* 000264 */ 				var ref_label = __left0__ [1];
/* 000264 */ 			}
/* 000266 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000267 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000267 */ 				__except0__.__cause__ = null;
/* 000267 */ 				throw __except0__;
/* 000267 */ 			}
/* 000273 */ 			(function () {
/* 000273 */ 				var __accu0__ = the_labels;
/* 000273 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000273 */ 			}) ();
/* 000273 */ 			continue;
/* 000273 */ 		}
/* 000276 */ 		if (__t__ (allow_unknown_macros)) {
/* 000276 */ 			continue;
/* 000276 */ 		}
/* 000279 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000279 */ 		__except0__.__cause__ = null;
/* 000279 */ 		throw __except0__;
/* 000279 */ 	}
/* 000284 */ 	return the_labels;
/* 000284 */ };
/* 000290 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [LLMMacroSpecBase], {
/* 000290 */ 	__module__: __name__,
/* 000303 */ 	allowed_in_standalone_mode: true,
/* 000307 */ 	_llm_main_text_argument: 'text',
/* 000309 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000310 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000314 */ 		self.text_formats = text_formats;
/* 000314 */ 	});},
/* 000316 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000319 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000319 */ 			var __accu0__ = ' ';
/* 000319 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000319 */ 				var __accu1__ = [];
/* 000319 */ 				var __iterable0__ = self.text_formats;
/* 000319 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000319 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000319 */ 					(function () {
/* 000319 */ 						var __accu2__ = __accu1__;
/* 000319 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000319 */ 					}) ();
/* 000319 */ 				}
/* 000319 */ 				return py_iter (__accu1__);
/* 000319 */ 			}) ());
/* 000319 */ 		}) ());
/* 000319 */ 	});},
/* 000322 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000324 */ 		var node_args = (function () {
/* 000324 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000324 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000324 */ 		}) ();
/* 000328 */ 		return (function () {
/* 000328 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000330 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000330 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000330 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000330 */ 			}) (), render_context);
/* 000330 */ 		}) ();
/* 000330 */ 	});}
/* 000330 */ });
/* 000335 */ export var LLMSpecInfoParagraphBreak =  __class__ ('LLMSpecInfoParagraphBreak', [LLMSpecInfo], {
/* 000335 */ 	__module__: __name__,
/* 000337 */ 	is_block_level: true,
/* 000339 */ 	is_paragraph_break_marker: true,
/* 000341 */ 	allowed_in_standalone_mode: true,
/* 000343 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 		}
/* 000344 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000344 */ 		__except0__.__cause__ = null;
/* 000344 */ 		throw __except0__;
/* 000344 */ 	});},
/* 000346 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000347 */ 	});}
/* 000347 */ });
/* 000349 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [LLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000349 */ 	__module__: __name__,
/* 000350 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000350 */ 		var kwargs = dict ();
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 				delete kwargs.__kwargtrans__;
/* 000350 */ 			}
/* 000350 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 			var args = tuple ();
/* 000350 */ 		}
/* 000351 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000351 */ 	});}
/* 000351 */ });
/* 000353 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [LLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000353 */ 	__module__: __name__,
/* 000354 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000354 */ 		var kwargs = dict ();
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 				delete kwargs.__kwargtrans__;
/* 000354 */ 			}
/* 000354 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 			var args = tuple ();
/* 000354 */ 		}
/* 000355 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000355 */ 	});}
/* 000355 */ });
/* 000360 */ export var LLMSpecInfoError =  __class__ ('LLMSpecInfoError', [LLMSpecInfo], {
/* 000360 */ 	__module__: __name__,
/* 000362 */ 	allowed_in_standalone_mode: true,
/* 000364 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000364 */ 		var error_msg = null;
/* 000364 */ 		var kwargs = dict ();
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 				delete kwargs.__kwargtrans__;
/* 000364 */ 			}
/* 000364 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 			var args = tuple ();
/* 000364 */ 		}
/* 000365 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000366 */ 		self.error_msg = error_msg;
/* 000366 */ 	});},
/* 000368 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000369 */ 		if (__t__ (self.error_msg)) {
/* 000370 */ 			var msg = self.error_msg;
/* 000370 */ 		}
/* 000371 */ 		else {
/* 000372 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000372 */ 				var __accu0__ = (function () {
/* 000372 */ 					var __accu1__ = node;
/* 000372 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000372 */ 				}) ();
/* 000372 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000372 */ 			}) ());
/* 000372 */ 		}
/* 000374 */ 		(function () {
/* 000374 */ 			var __accu0__ = logger;
/* 000374 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000374 */ 		}) ();
/* 000376 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000376 */ 		__except0__.__cause__ = null;
/* 000376 */ 		throw __except0__;
/* 000376 */ 	});}
/* 000376 */ });
/* 000379 */ export var LLMMacroSpecError =  __class__ ('LLMMacroSpecError', [LLMSpecInfoError, macrospec.MacroSpec], {
/* 000379 */ 	__module__: __name__,
/* 000380 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000380 */ 		var kwargs = dict ();
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 				delete kwargs.__kwargtrans__;
/* 000380 */ 			}
/* 000380 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 			var args = tuple ();
/* 000380 */ 		}
/* 000381 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecError, self, args, kwargs);
/* 000381 */ 	});}
/* 000381 */ });
/* 000383 */ export var LLMEnvironmentSpecError =  __class__ ('LLMEnvironmentSpecError', [LLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000383 */ 	__module__: __name__,
/* 000384 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000384 */ 		var kwargs = dict ();
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 				delete kwargs.__kwargtrans__;
/* 000384 */ 			}
/* 000384 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 			var args = tuple ();
/* 000384 */ 		}
/* 000385 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecError, self, args, kwargs);
/* 000385 */ 	});}
/* 000385 */ });
/* 000387 */ export var LLMSpecialsSpecError =  __class__ ('LLMSpecialsSpecError', [LLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000387 */ 	__module__: __name__,
/* 000388 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000388 */ 		var kwargs = dict ();
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 				delete kwargs.__kwargtrans__;
/* 000388 */ 			}
/* 000388 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 			var args = tuple ();
/* 000388 */ 		}
/* 000389 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecError, self, args, kwargs);
/* 000389 */ 	});}
/* 000389 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmspecinfo.map