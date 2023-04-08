/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 01:44:41
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000015 */ import {LLMArgumentSpec} from './llm.llmenvironment.js';
/* 000013 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000012 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LLMArgumentSpec, ParsedArgumentsInfo, LatexWalkerParseError, latexnodes_parsers, macrospec};
/* 000001 */ var __name__ = 'llm.llmspecinfo';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000023 */ export var LLMSpecInfo =  __class__ ('LLMSpecInfo', [object], {
/* 000023 */ 	__module__: __name__,
/* 000030 */ 	delayed_render: false,
/* 000039 */ 	is_block_level: false,
/* 000046 */ 	is_block_heading: false,
/* 000055 */ 	is_paragraph_break_marker: false,
/* 000062 */ 	allowed_in_standalone_mode: false,
/* 000069 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000069 */ 		if (arguments.length) {
/* 000069 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000069 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000069 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000069 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000069 */ 					switch (__attrib0__) {
/* 000069 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000069 */ 					}
/* 000069 */ 				}
/* 000069 */ 			}
/* 000069 */ 		}
/* 000069 */ 		else {
/* 000069 */ 		}
/* 000076 */ 		// pass;
/* 000076 */ 	});},
/* 000078 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000078 */ 		if (arguments.length) {
/* 000078 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000078 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000078 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000078 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000078 */ 					switch (__attrib0__) {
/* 000078 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000078 */ 					}
/* 000078 */ 				}
/* 000078 */ 			}
/* 000078 */ 		}
/* 000078 */ 		else {
/* 000078 */ 		}
/* 000086 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000086 */ 		__except0__.__cause__ = null;
/* 000086 */ 		throw __except0__;
/* 000086 */ 	});},
/* 000088 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000088 */ 		if (arguments.length) {
/* 000088 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000088 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000088 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000088 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000088 */ 					switch (__attrib0__) {
/* 000088 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000088 */ 					}
/* 000088 */ 				}
/* 000088 */ 			}
/* 000088 */ 		}
/* 000088 */ 		else {
/* 000088 */ 		}
/* 000093 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000093 */ 		__except0__.__cause__ = null;
/* 000093 */ 		throw __except0__;
/* 000093 */ 	});},
/* 000102 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000102 */ 		if (arguments.length) {
/* 000102 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000102 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000102 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000102 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000102 */ 					switch (__attrib0__) {
/* 000102 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000102 */ 					}
/* 000102 */ 				}
/* 000102 */ 			}
/* 000102 */ 		}
/* 000102 */ 		else {
/* 000102 */ 		}
/* 000107 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000108 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000110 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000110 */ 				var __accu0__ = node;
/* 000110 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000110 */ 			}) ()));
/* 000110 */ 			__except0__.__cause__ = null;
/* 000110 */ 			throw __except0__;
/* 000110 */ 		}
/* 000113 */ 		node.llm_specinfo = self;
/* 000114 */ 		try {
/* 000115 */ 			(function () {
/* 000115 */ 				var __accu0__ = self;
/* 000115 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000115 */ 			}) ();
/* 000115 */ 		}
/* 000115 */ 		catch (__except0__) {
/* 000115 */ 			if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000115 */ 				var e = __except0__;
/* 000118 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000119 */ 					e.pos = node.pos;
/* 000119 */ 				}
/* 000120 */ 				var __except1__ = e;
/* 000120 */ 				__except1__.__cause__ = null;
/* 000120 */ 				throw __except1__;
/* 000120 */ 			}
/* 000120 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000120 */ 				var e = __except0__;
/* 000123 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000123 */ 				__except1__.__cause__ = null;
/* 000123 */ 				throw __except1__;
/* 000123 */ 			}
/* 000123 */ 			else if (isinstance (__except0__, Exception)) {
/* 000123 */ 				var e = __except0__;
/* 000126 */ 				(function () {
/* 000126 */ 					var __accu0__ = logger;
/* 000126 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000126 */ 				}) ();
/* 000128 */ 				(function () {
/* 000128 */ 					var __accu0__ = logger;
/* 000129 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000129 */ 						var __accu1__ = node.latex_walker;
/* 000129 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000130 */ 					}) ()), (function () {
/* 000130 */ 						var __accu1__ = node;
/* 000130 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000130 */ 					}) ()));
/* 000130 */ 				}) ();
/* 000132 */ 				__except0__.__cause__ = null;
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000132 */ 			else {
/* 000132 */ 				throw __except0__;
/* 000132 */ 			}
/* 000132 */ 		}
/* 000134 */ 		node.llm_is_block_level = self.is_block_level;
/* 000135 */ 		node.llm_is_block_heading = self.is_block_heading;
/* 000136 */ 		node.llm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000137 */ 		return node;
/* 000137 */ 	});}
/* 000137 */ });
/* 000149 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000149 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000149 */ 		var kwargs_to_first_constructor = null;
/* 000149 */ 	};
/* 000149 */ 	if (arguments.length) {
/* 000149 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 				switch (__attrib0__) {
/* 000149 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 	}
/* 000149 */ 	else {
/* 000149 */ 	}
/* 000151 */ 	var kwargs1 = dict ({});
/* 000152 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000153 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000154 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000154 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000154 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000155 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000156 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000156 */ 					var __accu0__ = kwargs2;
/* 000156 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000156 */ 				}) ());
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 	}
/* 000157 */ 	(function () {
/* 000157 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000157 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000157 */ 	}) ();
/* 000158 */ 	(function () {
/* 000158 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000158 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000158 */ 	}) ();
/* 000158 */ };
/* 000165 */ export var LLMMacroSpecBase =  __class__ ('LLMMacroSpecBase', [LLMSpecInfo, macrospec.MacroSpec], {
/* 000165 */ 	__module__: __name__,
/* 000166 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000166 */ 		var kwargs = dict ();
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 				delete kwargs.__kwargtrans__;
/* 000166 */ 			}
/* 000166 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 			var args = tuple ();
/* 000166 */ 		}
/* 000167 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecBase, self, args, kwargs);
/* 000167 */ 	});}
/* 000167 */ });
/* 000169 */ export var LLMEnvironmentSpecBase =  __class__ ('LLMEnvironmentSpecBase', [LLMSpecInfo, macrospec.EnvironmentSpec], {
/* 000169 */ 	__module__: __name__,
/* 000170 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000170 */ 		var kwargs = dict ();
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 				delete kwargs.__kwargtrans__;
/* 000170 */ 			}
/* 000170 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 			var args = tuple ();
/* 000170 */ 		}
/* 000171 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecBase, self, args, kwargs);
/* 000171 */ 	});}
/* 000171 */ });
/* 000173 */ export var LLMSpecialsSpecBase =  __class__ ('LLMSpecialsSpecBase', [LLMSpecInfo, macrospec.SpecialsSpec], {
/* 000173 */ 	__module__: __name__,
/* 000174 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000174 */ 		var kwargs = dict ();
/* 000174 */ 		if (arguments.length) {
/* 000174 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000174 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000174 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000174 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000174 */ 					switch (__attrib0__) {
/* 000174 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000174 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000174 */ 					}
/* 000174 */ 				}
/* 000174 */ 				delete kwargs.__kwargtrans__;
/* 000174 */ 			}
/* 000174 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000174 */ 		}
/* 000174 */ 		else {
/* 000174 */ 			var args = tuple ();
/* 000174 */ 		}
/* 000175 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecBase, self, args, kwargs);
/* 000175 */ 	});}
/* 000175 */ });
/* 000182 */ export var make_verb_argument = function (value) {
/* 000182 */ 	if (arguments.length) {
/* 000182 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000182 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000182 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000182 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000182 */ 				switch (__attrib0__) {
/* 000182 */ 					case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000182 */ 				}
/* 000182 */ 			}
/* 000182 */ 		}
/* 000182 */ 	}
/* 000182 */ 	else {
/* 000182 */ 	}
/* 000183 */ 	var delim0 = null;
/* 000184 */ 	var __break0__ = false;
/* 000184 */ 	var __iterable0__ = tuple (['+', '|', '=', '.', '-', '!', '~', ',', ';', ':']);
/* 000184 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000184 */ 		var delim = __getitem__ (__iterable0__, __index0__);
/* 000185 */ 		if (__t__ (!__in__ (delim, value))) {
/* 000186 */ 			var delim0 = delim;
/* 000186 */ 			__break0__ = true;
/* 000186 */ 			break;
/* 000186 */ 		}
/* 000186 */ 	}
/* 000188 */ 	if (!__break0__) {
/* 000189 */ 		var __except0__ = __call__ (ValueError, null, "Couldn't form literal verbatim command for value %r", value);
/* 000189 */ 		__except0__.__cause__ = null;
/* 000189 */ 		throw __except0__;
/* 000189 */ 	}
/* 000191 */ 	return __add__ (__add__ (delim0, value), delim0);
/* 000191 */ };
/* 000194 */ export var LLMSpecInfoConstantValue =  __class__ ('LLMSpecInfoConstantValue', [LLMSpecInfo], {
/* 000194 */ 	__module__: __name__,
/* 000196 */ 	allowed_in_standalone_mode: true,
/* 000198 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000198 */ 		if (arguments.length) {
/* 000198 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000198 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000198 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000198 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000198 */ 					switch (__attrib0__) {
/* 000198 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000198 */ 					}
/* 000198 */ 				}
/* 000198 */ 			}
/* 000198 */ 		}
/* 000198 */ 		else {
/* 000198 */ 		}
/* 000199 */ 		return __add__ ('The literal character(s) \\verbcode', __call__ (make_verb_argument, null, self.value));
/* 000199 */ 	});},
/* 000201 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000201 */ 		var kwargs = dict ();
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000201 */ 					}
/* 000201 */ 				}
/* 000201 */ 				delete kwargs.__kwargtrans__;
/* 000201 */ 			}
/* 000201 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000201 */ 		}
/* 000201 */ 		else {
/* 000201 */ 			var args = tuple ();
/* 000201 */ 		}
/* 000202 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoConstantValue, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000203 */ 		self.value = value;
/* 000203 */ 	});},
/* 000205 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000205 */ 		if (arguments.length) {
/* 000205 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000205 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000205 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000205 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000205 */ 					switch (__attrib0__) {
/* 000205 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000205 */ 					}
/* 000205 */ 				}
/* 000205 */ 			}
/* 000205 */ 		}
/* 000205 */ 		else {
/* 000205 */ 		}
/* 000206 */ 		return (function () {
/* 000206 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000206 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value, render_context);
/* 000206 */ 		}) ();
/* 000206 */ 	});}
/* 000206 */ });
/* 000209 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [LLMSpecInfoConstantValue, macrospec.MacroSpec], {
/* 000209 */ 	__module__: __name__,
/* 000210 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000210 */ 		var kwargs = dict ();
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 				delete kwargs.__kwargtrans__;
/* 000210 */ 			}
/* 000210 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 			var args = tuple ();
/* 000210 */ 		}
/* 000211 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueMacro, self, args, kwargs, tuple (['value']));
/* 000211 */ 	});}
/* 000211 */ });
/* 000213 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [LLMSpecInfoConstantValue, macrospec.SpecialsSpec], {
/* 000213 */ 	__module__: __name__,
/* 000214 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000214 */ 		var kwargs = dict ();
/* 000214 */ 		if (arguments.length) {
/* 000214 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000214 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000214 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000214 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000214 */ 					switch (__attrib0__) {
/* 000214 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000214 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000214 */ 					}
/* 000214 */ 				}
/* 000214 */ 				delete kwargs.__kwargtrans__;
/* 000214 */ 			}
/* 000214 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000214 */ 		}
/* 000214 */ 		else {
/* 000214 */ 			var args = tuple ();
/* 000214 */ 		}
/* 000215 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueSpecials, self, args, kwargs, tuple (['value']));
/* 000215 */ 	});}
/* 000215 */ });
/* 000218 */ export var text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text', llm_doc: 'The text or LLM content to process'}));
/* 000225 */ export var label_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000225 */ 	var __accu0__ = latexnodes_parsers;
/* 000225 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000225 */ }) (), argname: 'label', llm_doc: 'A following \\verbcode+\\label{…}+ macro attaches a label to this macro call'}));
/* 000234 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes) {
/* 000234 */ 	if (arguments.length) {
/* 000234 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 				switch (__attrib0__) {
/* 000234 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 	}
/* 000234 */ 	else {
/* 000234 */ 	}
/* 000236 */ 	if (__t__ (!__t__ (((function () {
/* 000236 */ 		var __accu0__ = node_arg_label;
/* 000236 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000236 */ 	}) ())))) {
/* 000237 */ 		return null;
/* 000237 */ 	}
/* 000239 */ 	var the_labels = [];
/* 000240 */ 	var argnodes = (function () {
/* 000240 */ 		var __accu0__ = node_arg_label;
/* 000240 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000240 */ 	}) ();
/* 000241 */ 	var __iterable0__ = argnodes;
/* 000241 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000241 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000242 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000244 */ 			var the_label = (function () {
/* 000244 */ 				var __accu0__ = argnode.nodelist;
/* 000244 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000244 */ 			}) ();
/* 000245 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000246 */ 				var __left0__ = (function () {
/* 000246 */ 					var __accu0__ = the_label;
/* 000246 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000246 */ 				}) ();
/* 000246 */ 				var ref_type = __left0__ [0];
/* 000246 */ 				var ref_label = __left0__ [1];
/* 000246 */ 			}
/* 000247 */ 			else {
/* 000248 */ 				var __left0__ = tuple ([null, the_label]);
/* 000248 */ 				var ref_type = __left0__ [0];
/* 000248 */ 				var ref_label = __left0__ [1];
/* 000248 */ 			}
/* 000250 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000251 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000251 */ 				__except0__.__cause__ = null;
/* 000251 */ 				throw __except0__;
/* 000251 */ 			}
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = the_labels;
/* 000257 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000257 */ 			}) ();
/* 000257 */ 			continue;
/* 000257 */ 		}
/* 000260 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000260 */ 		__except0__.__cause__ = null;
/* 000260 */ 		throw __except0__;
/* 000260 */ 	}
/* 000265 */ 	return the_labels;
/* 000265 */ };
/* 000271 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [LLMMacroSpecBase], {
/* 000271 */ 	__module__: __name__,
/* 000284 */ 	allowed_in_standalone_mode: true,
/* 000288 */ 	_llm_main_text_argument: 'text',
/* 000290 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000291 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000295 */ 		self.text_formats = text_formats;
/* 000295 */ 	});},
/* 000297 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000297 */ 		if (arguments.length) {
/* 000297 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000297 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000297 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000297 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000297 */ 					switch (__attrib0__) {
/* 000297 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000297 */ 					}
/* 000297 */ 				}
/* 000297 */ 			}
/* 000297 */ 		}
/* 000297 */ 		else {
/* 000297 */ 		}
/* 000300 */ 		return __add__ ('Formats its argument using the text format(s) ', (function () {
/* 000300 */ 			var __accu0__ = ' ';
/* 000300 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000300 */ 				var __accu1__ = [];
/* 000300 */ 				var __iterable0__ = self.text_formats;
/* 000300 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000300 */ 					var text_format = __getitem__ (__iterable0__, __index0__);
/* 000300 */ 					(function () {
/* 000300 */ 						var __accu2__ = __accu1__;
/* 000300 */ 						return __call__ (__accu2__.append, __accu2__, '‘{}’'.format (text_format));
/* 000300 */ 					}) ();
/* 000300 */ 				}
/* 000300 */ 				return py_iter (__accu1__);
/* 000300 */ 			}) ());
/* 000300 */ 		}) ());
/* 000300 */ 	});},
/* 000303 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000305 */ 		var node_args = (function () {
/* 000305 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000305 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000305 */ 		}) ();
/* 000309 */ 		return (function () {
/* 000309 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000311 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000311 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000311 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000311 */ 			}) (), render_context);
/* 000311 */ 		}) ();
/* 000311 */ 	});}
/* 000311 */ });
/* 000316 */ export var LLMSpecInfoParagraphBreak =  __class__ ('LLMSpecInfoParagraphBreak', [LLMSpecInfo], {
/* 000316 */ 	__module__: __name__,
/* 000318 */ 	is_block_level: true,
/* 000320 */ 	is_paragraph_break_marker: true,
/* 000322 */ 	allowed_in_standalone_mode: true,
/* 000324 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000325 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000325 */ 		__except0__.__cause__ = null;
/* 000325 */ 		throw __except0__;
/* 000325 */ 	});},
/* 000327 */ 	get get_llm_doc () {return __get__ (this, function (self) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000328 */ 		return 'Produce a paragraph break to begin a new paragraph';
/* 000328 */ 	});}
/* 000328 */ });
/* 000330 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [LLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000330 */ 	__module__: __name__,
/* 000331 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000331 */ 		var kwargs = dict ();
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 				delete kwargs.__kwargtrans__;
/* 000331 */ 			}
/* 000331 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 			var args = tuple ();
/* 000331 */ 		}
/* 000332 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000332 */ 	});}
/* 000332 */ });
/* 000334 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [LLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000334 */ 	__module__: __name__,
/* 000335 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000335 */ 		var kwargs = dict ();
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 				delete kwargs.__kwargtrans__;
/* 000335 */ 			}
/* 000335 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 			var args = tuple ();
/* 000335 */ 		}
/* 000336 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000336 */ 	});}
/* 000336 */ });
/* 000341 */ export var LLMSpecInfoError =  __class__ ('LLMSpecInfoError', [LLMSpecInfo], {
/* 000341 */ 	__module__: __name__,
/* 000343 */ 	allowed_in_standalone_mode: true,
/* 000345 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000345 */ 		var error_msg = null;
/* 000345 */ 		var kwargs = dict ();
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 				delete kwargs.__kwargtrans__;
/* 000345 */ 			}
/* 000345 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 			var args = tuple ();
/* 000345 */ 		}
/* 000346 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000347 */ 		self.error_msg = error_msg;
/* 000347 */ 	});},
/* 000349 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000350 */ 		if (__t__ (self.error_msg)) {
/* 000351 */ 			var msg = self.error_msg;
/* 000351 */ 		}
/* 000352 */ 		else {
/* 000353 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000353 */ 				var __accu0__ = (function () {
/* 000353 */ 					var __accu1__ = node;
/* 000353 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000353 */ 				}) ();
/* 000353 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000353 */ 			}) ());
/* 000353 */ 		}
/* 000355 */ 		(function () {
/* 000355 */ 			var __accu0__ = logger;
/* 000355 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000355 */ 		}) ();
/* 000357 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000357 */ 		__except0__.__cause__ = null;
/* 000357 */ 		throw __except0__;
/* 000357 */ 	});}
/* 000357 */ });
/* 000360 */ export var LLMMacroSpecError =  __class__ ('LLMMacroSpecError', [LLMSpecInfoError, macrospec.MacroSpec], {
/* 000360 */ 	__module__: __name__,
/* 000361 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000361 */ 		var kwargs = dict ();
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 				delete kwargs.__kwargtrans__;
/* 000361 */ 			}
/* 000361 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 			var args = tuple ();
/* 000361 */ 		}
/* 000362 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecError, self, args, kwargs);
/* 000362 */ 	});}
/* 000362 */ });
/* 000364 */ export var LLMEnvironmentSpecError =  __class__ ('LLMEnvironmentSpecError', [LLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000364 */ 	__module__: __name__,
/* 000365 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000365 */ 		var kwargs = dict ();
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 				delete kwargs.__kwargtrans__;
/* 000365 */ 			}
/* 000365 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 			var args = tuple ();
/* 000365 */ 		}
/* 000366 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecError, self, args, kwargs);
/* 000366 */ 	});}
/* 000366 */ });
/* 000368 */ export var LLMSpecialsSpecError =  __class__ ('LLMSpecialsSpecError', [LLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000368 */ 	__module__: __name__,
/* 000369 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000369 */ 		var kwargs = dict ();
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 				delete kwargs.__kwargtrans__;
/* 000369 */ 			}
/* 000369 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 			var args = tuple ();
/* 000369 */ 		}
/* 000370 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecError, self, args, kwargs);
/* 000370 */ 	});}
/* 000370 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmspecinfo.map