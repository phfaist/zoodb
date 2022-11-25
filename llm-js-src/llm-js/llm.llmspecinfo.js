/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:23
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {LLMArgumentSpec, LLMParsingStateDeltaSetBlockLevel} from './llm.llmenvironment.js';
/* 000014 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000013 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LatexWalkerParseError, latexnodes_nodes, LLMArgumentSpec, latexnodes_parsers, LLMParsingStateDeltaSetBlockLevel, ParsedArgumentsInfo, macrospec};
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
/* 000070 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000070 */ 		if (arguments.length) {
/* 000070 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000070 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000070 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000070 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000070 */ 					switch (__attrib0__) {
/* 000070 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000070 */ 					}
/* 000070 */ 				}
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 		else {
/* 000070 */ 		}
/* 000077 */ 		// pass;
/* 000077 */ 	});},
/* 000079 */ 	get prepare_delayed_render () {return __get__ (this, function (self, node, render_context) {
/* 000079 */ 		if (arguments.length) {
/* 000079 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000079 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000079 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000079 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000079 */ 					switch (__attrib0__) {
/* 000079 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000079 */ 					}
/* 000079 */ 				}
/* 000079 */ 			}
/* 000079 */ 		}
/* 000079 */ 		else {
/* 000079 */ 		}
/* 000087 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000087 */ 		__except0__.__cause__ = null;
/* 000087 */ 		throw __except0__;
/* 000087 */ 	});},
/* 000089 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000089 */ 		if (arguments.length) {
/* 000089 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000089 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000089 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000089 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000089 */ 					switch (__attrib0__) {
/* 000089 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000089 */ 					}
/* 000089 */ 				}
/* 000089 */ 			}
/* 000089 */ 		}
/* 000089 */ 		else {
/* 000089 */ 		}
/* 000094 */ 		var __except0__ = __call__ (RuntimeError, null, 'Element ‘{}’ cannot be placed here, render() not reimplemented.'.format (node));
/* 000094 */ 		__except0__.__cause__ = null;
/* 000094 */ 		throw __except0__;
/* 000094 */ 	});},
/* 000103 */ 	get finalize_node () {return __get__ (this, function (self, node) {
/* 000103 */ 		if (arguments.length) {
/* 000103 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000103 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000103 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000103 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000103 */ 					switch (__attrib0__) {
/* 000103 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000103 */ 					}
/* 000103 */ 				}
/* 000103 */ 			}
/* 000103 */ 		}
/* 000103 */ 		else {
/* 000103 */ 		}
/* 000108 */ 		var fragment_is_standalone_mode = node.latex_walker.standalone_mode;
/* 000109 */ 		if (__t__ (__t__ (fragment_is_standalone_mode) && !__t__ ((self.allowed_in_standalone_mode)))) {
/* 000111 */ 			var __except0__ = __call__ (LatexWalkerParseError, null, '‘{}’ is not allowed here (standalone mode).'.format ((function () {
/* 000111 */ 				var __accu0__ = node;
/* 000111 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000111 */ 			}) ()));
/* 000111 */ 			__except0__.__cause__ = null;
/* 000111 */ 			throw __except0__;
/* 000111 */ 		}
/* 000114 */ 		node.llm_specinfo = self;
/* 000115 */ 		try {
/* 000116 */ 			(function () {
/* 000116 */ 				var __accu0__ = self;
/* 000116 */ 				return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000116 */ 			}) ();
/* 000116 */ 		}
/* 000116 */ 		catch (__except0__) {
/* 000116 */ 			if (isinstance (__except0__, LatexWalkerParseError)) {
/* 000116 */ 				var e = __except0__;
/* 000119 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000120 */ 					e.pos = node.pos;
/* 000120 */ 				}
/* 000121 */ 				var __except1__ = e;
/* 000121 */ 				__except1__.__cause__ = null;
/* 000121 */ 				throw __except1__;
/* 000121 */ 			}
/* 000121 */ 			else if (isinstance (__except0__, ValueError)) {
/* 000121 */ 				var e = __except0__;
/* 000124 */ 				var __except1__ = __call__ (LatexWalkerParseError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000124 */ 				__except1__.__cause__ = null;
/* 000124 */ 				throw __except1__;
/* 000124 */ 			}
/* 000124 */ 			else if (isinstance (__except0__, Exception)) {
/* 000124 */ 				var e = __except0__;
/* 000127 */ 				(function () {
/* 000127 */ 					var __accu0__ = logger;
/* 000127 */ 					return __call__ (__accu0__.error, __accu0__, 'Internal Parse Error! {}'.format (e), __kwargtrans__ ({exc_info: true}));
/* 000127 */ 				}) ();
/* 000129 */ 				(function () {
/* 000129 */ 					var __accu0__ = logger;
/* 000130 */ 					return __call__ (__accu0__.error, __accu0__, 'Happened @{},  node: ‘{}’'.format (__call__ (repr, null, (function () {
/* 000130 */ 						var __accu1__ = node.latex_walker;
/* 000130 */ 						return __call__ (__accu1__.pos_to_lineno_colno, __accu1__, node.pos);
/* 000131 */ 					}) ()), (function () {
/* 000131 */ 						var __accu1__ = node;
/* 000131 */ 						return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000131 */ 					}) ()));
/* 000131 */ 				}) ();
/* 000133 */ 				__except0__.__cause__ = null;
/* 000133 */ 				throw __except0__;
/* 000133 */ 			}
/* 000133 */ 			else {
/* 000133 */ 				throw __except0__;
/* 000133 */ 			}
/* 000133 */ 		}
/* 000135 */ 		node.llm_is_block_level = self.is_block_level;
/* 000136 */ 		node.llm_is_block_heading = self.is_block_heading;
/* 000137 */ 		node.llm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000138 */ 		return node;
/* 000138 */ 	});}
/* 000138 */ });
/* 000150 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000150 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000150 */ 		var kwargs_to_first_constructor = null;
/* 000150 */ 	};
/* 000150 */ 	if (arguments.length) {
/* 000150 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 				switch (__attrib0__) {
/* 000150 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 	}
/* 000150 */ 	else {
/* 000150 */ 	}
/* 000152 */ 	var kwargs1 = dict ({});
/* 000153 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000154 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000155 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000155 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000155 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000156 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000157 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000157 */ 					var __accu0__ = kwargs2;
/* 000157 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000157 */ 				}) ());
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 	}
/* 000158 */ 	(function () {
/* 000158 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000158 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000158 */ 	}) ();
/* 000159 */ 	(function () {
/* 000159 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000159 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000159 */ 	}) ();
/* 000159 */ };
/* 000166 */ export var LLMMacroSpecBase =  __class__ ('LLMMacroSpecBase', [LLMSpecInfo, macrospec.MacroSpec], {
/* 000166 */ 	__module__: __name__,
/* 000167 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000167 */ 		var kwargs = dict ();
/* 000167 */ 		if (arguments.length) {
/* 000167 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000167 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000167 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000167 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000167 */ 					switch (__attrib0__) {
/* 000167 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000167 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000167 */ 					}
/* 000167 */ 				}
/* 000167 */ 				delete kwargs.__kwargtrans__;
/* 000167 */ 			}
/* 000167 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000167 */ 		}
/* 000167 */ 		else {
/* 000167 */ 			var args = tuple ();
/* 000167 */ 		}
/* 000168 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecBase, self, args, kwargs);
/* 000168 */ 	});}
/* 000168 */ });
/* 000170 */ export var LLMEnvironmentSpecBase =  __class__ ('LLMEnvironmentSpecBase', [LLMSpecInfo, macrospec.EnvironmentSpec], {
/* 000170 */ 	__module__: __name__,
/* 000171 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000171 */ 		var kwargs = dict ();
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 				delete kwargs.__kwargtrans__;
/* 000171 */ 			}
/* 000171 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 			var args = tuple ();
/* 000171 */ 		}
/* 000172 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecBase, self, args, kwargs);
/* 000172 */ 	});}
/* 000172 */ });
/* 000174 */ export var LLMSpecialsSpecBase =  __class__ ('LLMSpecialsSpecBase', [LLMSpecInfo, macrospec.SpecialsSpec], {
/* 000174 */ 	__module__: __name__,
/* 000175 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000175 */ 		var kwargs = dict ();
/* 000175 */ 		if (arguments.length) {
/* 000175 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000175 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000175 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000175 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000175 */ 					switch (__attrib0__) {
/* 000175 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000175 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000175 */ 					}
/* 000175 */ 				}
/* 000175 */ 				delete kwargs.__kwargtrans__;
/* 000175 */ 			}
/* 000175 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000175 */ 		}
/* 000175 */ 		else {
/* 000175 */ 			var args = tuple ();
/* 000175 */ 		}
/* 000176 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecBase, self, args, kwargs);
/* 000176 */ 	});}
/* 000176 */ });
/* 000184 */ export var LLMSpecInfoConstantValue =  __class__ ('LLMSpecInfoConstantValue', [LLMSpecInfo], {
/* 000184 */ 	__module__: __name__,
/* 000186 */ 	allowed_in_standalone_mode: true,
/* 000188 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000188 */ 		var kwargs = dict ();
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 				delete kwargs.__kwargtrans__;
/* 000188 */ 			}
/* 000188 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 			var args = tuple ();
/* 000188 */ 		}
/* 000189 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoConstantValue, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000190 */ 		self.value = value;
/* 000190 */ 	});},
/* 000192 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000193 */ 		return (function () {
/* 000193 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000193 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value);
/* 000193 */ 		}) ();
/* 000193 */ 	});}
/* 000193 */ });
/* 000196 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [LLMSpecInfoConstantValue, macrospec.MacroSpec], {
/* 000196 */ 	__module__: __name__,
/* 000197 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000197 */ 		var kwargs = dict ();
/* 000197 */ 		if (arguments.length) {
/* 000197 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000197 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000197 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000197 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000197 */ 					switch (__attrib0__) {
/* 000197 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000197 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000197 */ 					}
/* 000197 */ 				}
/* 000197 */ 				delete kwargs.__kwargtrans__;
/* 000197 */ 			}
/* 000197 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000197 */ 		}
/* 000197 */ 		else {
/* 000197 */ 			var args = tuple ();
/* 000197 */ 		}
/* 000198 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueMacro, self, args, kwargs, tuple (['value']));
/* 000198 */ 	});}
/* 000198 */ });
/* 000200 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [LLMSpecInfoConstantValue, macrospec.SpecialsSpec], {
/* 000200 */ 	__module__: __name__,
/* 000201 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000201 */ 		var kwargs = dict ();
/* 000201 */ 		if (arguments.length) {
/* 000201 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 					switch (__attrib0__) {
/* 000201 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
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
/* 000202 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueSpecials, self, args, kwargs, tuple (['value']));
/* 000202 */ 	});}
/* 000202 */ });
/* 000205 */ export var _parsing_state_delta_inline_mode = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: false}));
/* 000207 */ export var text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text'}));
/* 000213 */ export var label_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000213 */ 	var __accu0__ = latexnodes_parsers;
/* 000213 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000213 */ }) (), argname: 'label'}));
/* 000220 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes) {
/* 000220 */ 	if (arguments.length) {
/* 000220 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000220 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000220 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000220 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000220 */ 				switch (__attrib0__) {
/* 000220 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000220 */ 				}
/* 000220 */ 			}
/* 000220 */ 		}
/* 000220 */ 	}
/* 000220 */ 	else {
/* 000220 */ 	}
/* 000222 */ 	if (__t__ (!__t__ (((function () {
/* 000222 */ 		var __accu0__ = node_arg_label;
/* 000222 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000222 */ 	}) ())))) {
/* 000223 */ 		return null;
/* 000223 */ 	}
/* 000225 */ 	var the_labels = [];
/* 000226 */ 	var argnodes = (function () {
/* 000226 */ 		var __accu0__ = node_arg_label;
/* 000226 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000226 */ 	}) ();
/* 000227 */ 	var __iterable0__ = argnodes;
/* 000227 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000227 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000228 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000230 */ 			var the_label = (function () {
/* 000230 */ 				var __accu0__ = argnode.nodelist;
/* 000230 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000230 */ 			}) ();
/* 000231 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000232 */ 				var __left0__ = (function () {
/* 000232 */ 					var __accu0__ = the_label;
/* 000232 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000232 */ 				}) ();
/* 000232 */ 				var ref_type = __left0__ [0];
/* 000232 */ 				var ref_label = __left0__ [1];
/* 000232 */ 			}
/* 000233 */ 			else {
/* 000234 */ 				var __left0__ = tuple ([null, the_label]);
/* 000234 */ 				var ref_type = __left0__ [0];
/* 000234 */ 				var ref_label = __left0__ [1];
/* 000234 */ 			}
/* 000236 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000237 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000237 */ 				__except0__.__cause__ = null;
/* 000237 */ 				throw __except0__;
/* 000237 */ 			}
/* 000243 */ 			(function () {
/* 000243 */ 				var __accu0__ = the_labels;
/* 000243 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000243 */ 			}) ();
/* 000243 */ 			continue;
/* 000243 */ 		}
/* 000246 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000246 */ 		__except0__.__cause__ = null;
/* 000246 */ 		throw __except0__;
/* 000246 */ 	}
/* 000251 */ 	return the_labels;
/* 000251 */ };
/* 000257 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [LLMMacroSpecBase], {
/* 000257 */ 	__module__: __name__,
/* 000270 */ 	allowed_in_standalone_mode: true,
/* 000274 */ 	_llm_main_text_argument: 'text',
/* 000276 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000277 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000281 */ 		self.text_formats = text_formats;
/* 000281 */ 	});},
/* 000283 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000283 */ 		if (arguments.length) {
/* 000283 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000283 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000283 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000283 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000283 */ 					switch (__attrib0__) {
/* 000283 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000283 */ 					}
/* 000283 */ 				}
/* 000283 */ 			}
/* 000283 */ 		}
/* 000283 */ 		else {
/* 000283 */ 		}
/* 000285 */ 		var node_args = (function () {
/* 000285 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000285 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000285 */ 		}) ();
/* 000289 */ 		return (function () {
/* 000289 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000291 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000291 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000291 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000291 */ 			}) (), render_context);
/* 000291 */ 		}) ();
/* 000291 */ 	});}
/* 000291 */ });
/* 000296 */ export var LLMSpecInfoParagraphBreak =  __class__ ('LLMSpecInfoParagraphBreak', [LLMSpecInfo], {
/* 000296 */ 	__module__: __name__,
/* 000298 */ 	is_block_level: true,
/* 000300 */ 	is_paragraph_break_marker: true,
/* 000302 */ 	allowed_in_standalone_mode: true,
/* 000304 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000305 */ 		__except0__.__cause__ = null;
/* 000305 */ 		throw __except0__;
/* 000305 */ 	});}
/* 000305 */ });
/* 000308 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [LLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000308 */ 	__module__: __name__,
/* 000309 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000309 */ 		var kwargs = dict ();
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 				delete kwargs.__kwargtrans__;
/* 000309 */ 			}
/* 000309 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 			var args = tuple ();
/* 000309 */ 		}
/* 000310 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000310 */ 	});}
/* 000310 */ });
/* 000312 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [LLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000312 */ 	__module__: __name__,
/* 000313 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000313 */ 		var kwargs = dict ();
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 				delete kwargs.__kwargtrans__;
/* 000313 */ 			}
/* 000313 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 			var args = tuple ();
/* 000313 */ 		}
/* 000314 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000314 */ 	});}
/* 000314 */ });
/* 000319 */ export var LLMSpecInfoError =  __class__ ('LLMSpecInfoError', [LLMSpecInfo], {
/* 000319 */ 	__module__: __name__,
/* 000321 */ 	allowed_in_standalone_mode: true,
/* 000323 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000323 */ 		var error_msg = null;
/* 000323 */ 		var kwargs = dict ();
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 				delete kwargs.__kwargtrans__;
/* 000323 */ 			}
/* 000323 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 			var args = tuple ();
/* 000323 */ 		}
/* 000324 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000325 */ 		self.error_msg = error_msg;
/* 000325 */ 	});},
/* 000327 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000328 */ 		if (__t__ (self.error_msg)) {
/* 000329 */ 			var msg = self.error_msg;
/* 000329 */ 		}
/* 000330 */ 		else {
/* 000331 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000331 */ 				var __accu0__ = (function () {
/* 000331 */ 					var __accu1__ = node;
/* 000331 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000331 */ 				}) ();
/* 000331 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000331 */ 			}) ());
/* 000331 */ 		}
/* 000333 */ 		(function () {
/* 000333 */ 			var __accu0__ = logger;
/* 000333 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000333 */ 		}) ();
/* 000335 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000335 */ 		__except0__.__cause__ = null;
/* 000335 */ 		throw __except0__;
/* 000335 */ 	});}
/* 000335 */ });
/* 000338 */ export var LLMMacroSpecError =  __class__ ('LLMMacroSpecError', [LLMSpecInfoError, macrospec.MacroSpec], {
/* 000338 */ 	__module__: __name__,
/* 000339 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000339 */ 		var kwargs = dict ();
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 				delete kwargs.__kwargtrans__;
/* 000339 */ 			}
/* 000339 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 			var args = tuple ();
/* 000339 */ 		}
/* 000340 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecError, self, args, kwargs);
/* 000340 */ 	});}
/* 000340 */ });
/* 000342 */ export var LLMEnvironmentSpecError =  __class__ ('LLMEnvironmentSpecError', [LLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000342 */ 	__module__: __name__,
/* 000343 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000343 */ 		var kwargs = dict ();
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 				delete kwargs.__kwargtrans__;
/* 000343 */ 			}
/* 000343 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 			var args = tuple ();
/* 000343 */ 		}
/* 000344 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecError, self, args, kwargs);
/* 000344 */ 	});}
/* 000344 */ });
/* 000346 */ export var LLMSpecialsSpecError =  __class__ ('LLMSpecialsSpecError', [LLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000346 */ 	__module__: __name__,
/* 000347 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000347 */ 		var kwargs = dict ();
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 				delete kwargs.__kwargtrans__;
/* 000347 */ 			}
/* 000347 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 			var args = tuple ();
/* 000347 */ 		}
/* 000348 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecError, self, args, kwargs);
/* 000348 */ 	});}
/* 000348 */ });
/* 000354 */ export var _href_arg_specs = dict ({'target_href': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000354 */ 	var __accu0__ = latexnodes_parsers;
/* 000354 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000357 */ }) (), argname: 'target_href'})), 'display_text': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'}))});
/* 000364 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [LLMMacroSpecBase], {
/* 000364 */ 	__module__: __name__,
/* 000366 */ 	allowed_in_standalone_mode: true,
/* 000368 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000368 */ 		var command_arguments = tuple (['target_href', 'display_text']);
/* 000368 */ 		var ref_type = 'href';
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000377 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000377 */ 			var __accu0__ = self;
/* 000377 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000377 */ 		}) ()}));
/* 000379 */ 		self.command_arguments = (function () {
/* 000379 */ 			var __accu0__ = [];
/* 000379 */ 			var __iterable0__ = command_arguments;
/* 000379 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000379 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000379 */ 				(function () {
/* 000379 */ 					var __accu1__ = __accu0__;
/* 000379 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000379 */ 						var __accu2__ = c;
/* 000379 */ 						return __call__ (__accu2__.strip, __accu2__, '[]');
/* 000379 */ 					}) ());
/* 000379 */ 				}) ();
/* 000379 */ 			}
/* 000379 */ 			return __accu0__;
/* 000379 */ 		}) ();
/* 000380 */ 		self.ref_type = ref_type;
/* 000382 */ 		if (__t__ (__in__ ('display_text', command_arguments))) {
/* 000385 */ 			self._llm_main_text_argument = 'display_text';
/* 000385 */ 		}
/* 000385 */ 	});},
/* 000388 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000389 */ 		return (function () {
/* 000389 */ 			var __accu0__ = [];
/* 000389 */ 			var __iterable0__ = command_arguments;
/* 000389 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000391 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000391 */ 				(function () {
/* 000391 */ 					var __accu1__ = __accu0__;
/* 000391 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000391 */ 				}) ();
/* 000391 */ 			}
/* 000391 */ 			return __accu0__;
/* 000391 */ 		}) ();
/* 000391 */ 	});},
/* 000395 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		var url_display = __call__ (str, null, target_href);
/* 000397 */ 		var __iterable0__ = tuple (['http://', 'https://']);
/* 000397 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000397 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000398 */ 			if (__t__ ((function () {
/* 000398 */ 				var __accu0__ = url_display;
/* 000398 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000398 */ 			}) ())) {
/* 000399 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000399 */ 				break;
/* 000399 */ 			}
/* 000399 */ 		}
/* 000401 */ 		var url_display = (function () {
/* 000401 */ 			var __accu0__ = url_display;
/* 000401 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000401 */ 		}) ();
/* 000402 */ 		return url_display;
/* 000402 */ 	});},
/* 000405 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000405 */ 		if (arguments.length) {
/* 000405 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000405 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000405 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000405 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000405 */ 					switch (__attrib0__) {
/* 000405 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000405 */ 					}
/* 000405 */ 				}
/* 000405 */ 			}
/* 000405 */ 		}
/* 000405 */ 		else {
/* 000405 */ 		}
/* 000407 */ 		var node_args = (function () {
/* 000407 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000407 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000407 */ 		}) ();
/* 000411 */ 		var target_href = null;
/* 000412 */ 		var display_text_nodelist = null;
/* 000414 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000415 */ 			var target_href = (function () {
/* 000415 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000415 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000415 */ 			}) ();
/* 000415 */ 		}
/* 000416 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000417 */ 			var display_text_nodelist = (function () {
/* 000417 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000417 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000417 */ 			}) ();
/* 000417 */ 		}
/* 000419 */ 		node.llm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000419 */ 	});},
/* 000424 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000426 */ 		var target_href = __getitem__ (node.llm_href_info, 'target_href');
/* 000427 */ 		var display_text_nodelist = __getitem__ (node.llm_href_info, 'display_text_nodelist');
/* 000430 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000431 */ 			var display_text_nodelist = (function () {
/* 000431 */ 				var __accu0__ = node.latex_walker;
/* 000433 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000433 */ 					var __accu1__ = node.latex_walker;
/* 000436 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: node.parsing_state, chars: (function () {
/* 000436 */ 						var __accu2__ = self;
/* 000436 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000436 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000436 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000436 */ 			}) ();
/* 000436 */ 		}
/* 000444 */ 		return (function () {
/* 000444 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000444 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000444 */ 		}) ();
/* 000444 */ 	});}
/* 000444 */ });
/* 000452 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [LLMSpecInfo], {
/* 000452 */ 	__module__: __name__,
/* 000454 */ 	allowed_in_standalone_mode: true,
/* 000462 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000462 */ 		var annotations = null;
/* 000462 */ 		var include_environment_begin_end = false;
/* 000462 */ 		var kwargs = dict ();
/* 000462 */ 		if (arguments.length) {
/* 000462 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000462 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000462 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000462 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000462 */ 					switch (__attrib0__) {
/* 000462 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000462 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000462 */ 					}
/* 000462 */ 				}
/* 000462 */ 				delete kwargs.__kwargtrans__;
/* 000462 */ 			}
/* 000462 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000462 */ 		}
/* 000462 */ 		else {
/* 000462 */ 			var args = tuple ();
/* 000462 */ 		}
/* 000466 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000467 */ 		self.annotations = annotations;
/* 000468 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000468 */ 	});},
/* 000470 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000470 */ 		if (arguments.length) {
/* 000470 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000470 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000470 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000470 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000470 */ 					switch (__attrib0__) {
/* 000470 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000470 */ 					}
/* 000470 */ 				}
/* 000470 */ 			}
/* 000470 */ 		}
/* 000470 */ 		else {
/* 000470 */ 		}
/* 000470 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000475 */ 		var environment_name = token.arg;
/* 000476 */ 		return (function () {
/* 000476 */ 			var __accu0__ = latexnodes_parsers;
/* 000476 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000476 */ 		}) ();
/* 000476 */ 	});},
/* 000481 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000481 */ 		if (arguments.length) {
/* 000481 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000481 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000481 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000481 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000481 */ 					switch (__attrib0__) {
/* 000481 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000481 */ 					}
/* 000481 */ 				}
/* 000481 */ 			}
/* 000481 */ 		}
/* 000481 */ 		else {
/* 000481 */ 		}
/* 000483 */ 		var environment_node_name = null;
/* 000485 */ 		if (__t__ ((function () {
/* 000485 */ 			var __accu0__ = node;
/* 000485 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000485 */ 		}) ())) {
/* 000487 */ 			var environment_node_name = node.environmentname;
/* 000489 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000490 */ 				var verbatim_contents = (function () {
/* 000490 */ 					var __accu0__ = node;
/* 000490 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000490 */ 				}) ();
/* 000490 */ 			}
/* 000491 */ 			else {
/* 000494 */ 				var verbatim_contents = (function () {
/* 000494 */ 					var __accu0__ = node.nodelist;
/* 000494 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000494 */ 				}) ();
/* 000494 */ 			}
/* 000494 */ 		}
/* 000495 */ 		else {
/* 000496 */ 			var verbatim_contents = (function () {
/* 000496 */ 				var __accu0__ = node;
/* 000496 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000496 */ 			}) ();
/* 000496 */ 		}
/* 000498 */ 		var annotations = __t__ (self.annotations) || [];
/* 000499 */ 		if (__t__ (environment_node_name !== null)) {
/* 000500 */ 			(function () {
/* 000500 */ 				var __accu0__ = annotations;
/* 000500 */ 				return __call__ (__accu0__.append, __accu0__, environment_node_name);
/* 000500 */ 			}) ();
/* 000500 */ 		}
/* 000502 */ 		return (function () {
/* 000502 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000502 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, __kwargtrans__ ({annotations: annotations}));
/* 000502 */ 		}) ();
/* 000502 */ 	});}
/* 000502 */ });
/* 000507 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo, macrospec.MacroSpec], {
/* 000507 */ 	__module__: __name__,
/* 000508 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000508 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000508 */ 			var verbatim_delimiters = null;
/* 000508 */ 		};
/* 000508 */ 		var kwargs = dict ();
/* 000508 */ 		if (arguments.length) {
/* 000508 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000508 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000508 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000508 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000508 */ 					switch (__attrib0__) {
/* 000508 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000508 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000508 */ 					}
/* 000508 */ 				}
/* 000508 */ 				delete kwargs.__kwargtrans__;
/* 000508 */ 			}
/* 000508 */ 		}
/* 000508 */ 		else {
/* 000508 */ 		}
/* 000514 */ 		var newkwargs = __call__ (dict, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [(function () {
/* 000514 */ 			var __accu0__ = latexnodes_parsers;
/* 000514 */ 			return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000514 */ 		}) ()]}, kwargs)));
/* 000520 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimMacro, self, [], newkwargs);
/* 000520 */ 	});}
/* 000520 */ });
/* 000523 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo, macrospec.EnvironmentSpec], {
/* 000523 */ 	__module__: __name__,
/* 000524 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000524 */ 		var kwargs = dict ();
/* 000524 */ 		if (arguments.length) {
/* 000524 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000524 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000524 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000524 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000524 */ 					switch (__attrib0__) {
/* 000524 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000524 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000524 */ 					}
/* 000524 */ 				}
/* 000524 */ 				delete kwargs.__kwargtrans__;
/* 000524 */ 			}
/* 000524 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000524 */ 		}
/* 000524 */ 		else {
/* 000524 */ 			var args = tuple ();
/* 000524 */ 		}
/* 000525 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimEnvironment, self, args, kwargs);
/* 000525 */ 	});}
/* 000525 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmspecinfo.map