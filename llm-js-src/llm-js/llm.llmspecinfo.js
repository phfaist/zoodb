/* 000001 */ // Transcrypt'ed from Python, 2022-12-20 20:23:36
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {LLMArgumentSpec, LLMParsingStateDeltaSetBlockLevel} from './llm.llmenvironment.js';
/* 000014 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000013 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {latexnodes_nodes, LLMParsingStateDeltaSetBlockLevel, LatexWalkerParseError, macrospec, latexnodes_parsers, ParsedArgumentsInfo, LLMArgumentSpec};
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
/* 000205 */ export var text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text'}));
/* 000211 */ export var label_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000211 */ 	var __accu0__ = latexnodes_parsers;
/* 000211 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000211 */ }) (), argname: 'label'}));
/* 000218 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes) {
/* 000218 */ 	if (arguments.length) {
/* 000218 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000218 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000218 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000218 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000218 */ 				switch (__attrib0__) {
/* 000218 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000218 */ 				}
/* 000218 */ 			}
/* 000218 */ 		}
/* 000218 */ 	}
/* 000218 */ 	else {
/* 000218 */ 	}
/* 000220 */ 	if (__t__ (!__t__ (((function () {
/* 000220 */ 		var __accu0__ = node_arg_label;
/* 000220 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000220 */ 	}) ())))) {
/* 000221 */ 		return null;
/* 000221 */ 	}
/* 000223 */ 	var the_labels = [];
/* 000224 */ 	var argnodes = (function () {
/* 000224 */ 		var __accu0__ = node_arg_label;
/* 000224 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000224 */ 	}) ();
/* 000225 */ 	var __iterable0__ = argnodes;
/* 000225 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000225 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000226 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000228 */ 			var the_label = (function () {
/* 000228 */ 				var __accu0__ = argnode.nodelist;
/* 000228 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000228 */ 			}) ();
/* 000229 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000230 */ 				var __left0__ = (function () {
/* 000230 */ 					var __accu0__ = the_label;
/* 000230 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000230 */ 				}) ();
/* 000230 */ 				var ref_type = __left0__ [0];
/* 000230 */ 				var ref_label = __left0__ [1];
/* 000230 */ 			}
/* 000231 */ 			else {
/* 000232 */ 				var __left0__ = tuple ([null, the_label]);
/* 000232 */ 				var ref_type = __left0__ [0];
/* 000232 */ 				var ref_label = __left0__ [1];
/* 000232 */ 			}
/* 000234 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000235 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000235 */ 				__except0__.__cause__ = null;
/* 000235 */ 				throw __except0__;
/* 000235 */ 			}
/* 000241 */ 			(function () {
/* 000241 */ 				var __accu0__ = the_labels;
/* 000241 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000241 */ 			}) ();
/* 000241 */ 			continue;
/* 000241 */ 		}
/* 000244 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000244 */ 		__except0__.__cause__ = null;
/* 000244 */ 		throw __except0__;
/* 000244 */ 	}
/* 000249 */ 	return the_labels;
/* 000249 */ };
/* 000255 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [LLMMacroSpecBase], {
/* 000255 */ 	__module__: __name__,
/* 000268 */ 	allowed_in_standalone_mode: true,
/* 000272 */ 	_llm_main_text_argument: 'text',
/* 000274 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000275 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000279 */ 		self.text_formats = text_formats;
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
/* 000283 */ 		var node_args = (function () {
/* 000283 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000283 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000283 */ 		}) ();
/* 000287 */ 		return (function () {
/* 000287 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000289 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000289 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000289 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000289 */ 			}) (), render_context);
/* 000289 */ 		}) ();
/* 000289 */ 	});}
/* 000289 */ });
/* 000294 */ export var LLMSpecInfoParagraphBreak =  __class__ ('LLMSpecInfoParagraphBreak', [LLMSpecInfo], {
/* 000294 */ 	__module__: __name__,
/* 000296 */ 	is_block_level: true,
/* 000298 */ 	is_paragraph_break_marker: true,
/* 000300 */ 	allowed_in_standalone_mode: true,
/* 000302 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000303 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000303 */ 		__except0__.__cause__ = null;
/* 000303 */ 		throw __except0__;
/* 000303 */ 	});}
/* 000303 */ });
/* 000306 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [LLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000306 */ 	__module__: __name__,
/* 000307 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000307 */ 		var kwargs = dict ();
/* 000307 */ 		if (arguments.length) {
/* 000307 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000307 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000307 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000307 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000307 */ 					switch (__attrib0__) {
/* 000307 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000307 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 				delete kwargs.__kwargtrans__;
/* 000307 */ 			}
/* 000307 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000307 */ 		}
/* 000307 */ 		else {
/* 000307 */ 			var args = tuple ();
/* 000307 */ 		}
/* 000308 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000308 */ 	});}
/* 000308 */ });
/* 000310 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [LLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000310 */ 	__module__: __name__,
/* 000311 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000311 */ 		var kwargs = dict ();
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 				delete kwargs.__kwargtrans__;
/* 000311 */ 			}
/* 000311 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 			var args = tuple ();
/* 000311 */ 		}
/* 000312 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000312 */ 	});}
/* 000312 */ });
/* 000317 */ export var LLMSpecInfoError =  __class__ ('LLMSpecInfoError', [LLMSpecInfo], {
/* 000317 */ 	__module__: __name__,
/* 000319 */ 	allowed_in_standalone_mode: true,
/* 000321 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000321 */ 		var error_msg = null;
/* 000321 */ 		var kwargs = dict ();
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 				delete kwargs.__kwargtrans__;
/* 000321 */ 			}
/* 000321 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 			var args = tuple ();
/* 000321 */ 		}
/* 000322 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000323 */ 		self.error_msg = error_msg;
/* 000323 */ 	});},
/* 000325 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		if (__t__ (self.error_msg)) {
/* 000327 */ 			var msg = self.error_msg;
/* 000327 */ 		}
/* 000328 */ 		else {
/* 000329 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format ((function () {
/* 000329 */ 				var __accu0__ = (function () {
/* 000329 */ 					var __accu1__ = node;
/* 000329 */ 					return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000329 */ 				}) ();
/* 000329 */ 				return __call__ (__accu0__.strip, __accu0__);
/* 000329 */ 			}) ());
/* 000329 */ 		}
/* 000331 */ 		(function () {
/* 000331 */ 			var __accu0__ = logger;
/* 000331 */ 			return __call__ (__accu0__.error, __accu0__, 'Misplaced node: {}'.format (__call__ (repr, null, node)));
/* 000331 */ 		}) ();
/* 000333 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000333 */ 		__except0__.__cause__ = null;
/* 000333 */ 		throw __except0__;
/* 000333 */ 	});}
/* 000333 */ });
/* 000336 */ export var LLMMacroSpecError =  __class__ ('LLMMacroSpecError', [LLMSpecInfoError, macrospec.MacroSpec], {
/* 000336 */ 	__module__: __name__,
/* 000337 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000337 */ 		var kwargs = dict ();
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 				delete kwargs.__kwargtrans__;
/* 000337 */ 			}
/* 000337 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 			var args = tuple ();
/* 000337 */ 		}
/* 000338 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecError, self, args, kwargs);
/* 000338 */ 	});}
/* 000338 */ });
/* 000340 */ export var LLMEnvironmentSpecError =  __class__ ('LLMEnvironmentSpecError', [LLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000340 */ 	__module__: __name__,
/* 000341 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000341 */ 		var kwargs = dict ();
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 				delete kwargs.__kwargtrans__;
/* 000341 */ 			}
/* 000341 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 			var args = tuple ();
/* 000341 */ 		}
/* 000342 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecError, self, args, kwargs);
/* 000342 */ 	});}
/* 000342 */ });
/* 000344 */ export var LLMSpecialsSpecError =  __class__ ('LLMSpecialsSpecError', [LLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000344 */ 	__module__: __name__,
/* 000345 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000345 */ 		var kwargs = dict ();
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
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
/* 000346 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecError, self, args, kwargs);
/* 000346 */ 	});}
/* 000346 */ });
/* 000352 */ export var _href_arg_specs = dict ({'target_href': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000352 */ 	var __accu0__ = latexnodes_parsers;
/* 000352 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000355 */ }) (), argname: 'target_href'})), 'display_text': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'}))});
/* 000362 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [LLMMacroSpecBase], {
/* 000362 */ 	__module__: __name__,
/* 000364 */ 	allowed_in_standalone_mode: true,
/* 000366 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000366 */ 		var command_arguments = tuple (['target_href', 'display_text']);
/* 000366 */ 		var ref_type = 'href';
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000375 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000375 */ 			var __accu0__ = self;
/* 000375 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000375 */ 		}) ()}));
/* 000377 */ 		self.command_arguments = (function () {
/* 000377 */ 			var __accu0__ = [];
/* 000377 */ 			var __iterable0__ = command_arguments;
/* 000377 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000377 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 				(function () {
/* 000377 */ 					var __accu1__ = __accu0__;
/* 000377 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000377 */ 						var __accu2__ = c;
/* 000377 */ 						return __call__ (__accu2__.strip, __accu2__, '[]');
/* 000377 */ 					}) ());
/* 000377 */ 				}) ();
/* 000377 */ 			}
/* 000377 */ 			return __accu0__;
/* 000377 */ 		}) ();
/* 000378 */ 		self.ref_type = ref_type;
/* 000380 */ 		if (__t__ (__in__ ('display_text', command_arguments))) {
/* 000383 */ 			self._llm_main_text_argument = 'display_text';
/* 000383 */ 		}
/* 000383 */ 	});},
/* 000386 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000387 */ 		return (function () {
/* 000387 */ 			var __accu0__ = [];
/* 000387 */ 			var __iterable0__ = command_arguments;
/* 000387 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000389 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000389 */ 				(function () {
/* 000389 */ 					var __accu1__ = __accu0__;
/* 000389 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000389 */ 				}) ();
/* 000389 */ 			}
/* 000389 */ 			return __accu0__;
/* 000389 */ 		}) ();
/* 000389 */ 	});},
/* 000393 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000393 */ 		if (arguments.length) {
/* 000393 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000393 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000393 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000393 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000393 */ 					switch (__attrib0__) {
/* 000393 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000393 */ 					}
/* 000393 */ 				}
/* 000393 */ 			}
/* 000393 */ 		}
/* 000393 */ 		else {
/* 000393 */ 		}
/* 000394 */ 		var url_display = __call__ (str, null, target_href);
/* 000395 */ 		var __iterable0__ = tuple (['http://', 'https://']);
/* 000395 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000395 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000396 */ 			if (__t__ ((function () {
/* 000396 */ 				var __accu0__ = url_display;
/* 000396 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000396 */ 			}) ())) {
/* 000397 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000397 */ 				break;
/* 000397 */ 			}
/* 000397 */ 		}
/* 000399 */ 		var url_display = (function () {
/* 000399 */ 			var __accu0__ = url_display;
/* 000399 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000399 */ 		}) ();
/* 000400 */ 		return url_display;
/* 000400 */ 	});},
/* 000403 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000405 */ 		var node_args = (function () {
/* 000405 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000405 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000405 */ 		}) ();
/* 000409 */ 		var target_href = null;
/* 000410 */ 		var display_text_nodelist = null;
/* 000412 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000413 */ 			var target_href = (function () {
/* 000413 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000413 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000413 */ 			}) ();
/* 000413 */ 		}
/* 000414 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000415 */ 			var display_text_nodelist = (function () {
/* 000415 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000415 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000415 */ 			}) ();
/* 000415 */ 		}
/* 000417 */ 		node.llm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000417 */ 	});},
/* 000422 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000422 */ 		if (arguments.length) {
/* 000422 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000422 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000422 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000422 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000422 */ 					switch (__attrib0__) {
/* 000422 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000422 */ 					}
/* 000422 */ 				}
/* 000422 */ 			}
/* 000422 */ 		}
/* 000422 */ 		else {
/* 000422 */ 		}
/* 000424 */ 		var target_href = __getitem__ (node.llm_href_info, 'target_href');
/* 000425 */ 		var display_text_nodelist = __getitem__ (node.llm_href_info, 'display_text_nodelist');
/* 000428 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000429 */ 			var display_text_nodelist = (function () {
/* 000429 */ 				var __accu0__ = node.latex_walker;
/* 000431 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000431 */ 					var __accu1__ = node.latex_walker;
/* 000434 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: node.parsing_state, chars: (function () {
/* 000434 */ 						var __accu2__ = self;
/* 000434 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000434 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000434 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000434 */ 			}) ();
/* 000434 */ 		}
/* 000442 */ 		return (function () {
/* 000442 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000442 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000442 */ 		}) ();
/* 000442 */ 	});}
/* 000442 */ });
/* 000450 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [LLMSpecInfo], {
/* 000450 */ 	__module__: __name__,
/* 000452 */ 	allowed_in_standalone_mode: true,
/* 000460 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000460 */ 		var annotations = null;
/* 000460 */ 		var include_environment_begin_end = false;
/* 000460 */ 		var kwargs = dict ();
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 				delete kwargs.__kwargtrans__;
/* 000460 */ 			}
/* 000460 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 			var args = tuple ();
/* 000460 */ 		}
/* 000464 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000465 */ 		self.annotations = annotations;
/* 000466 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000466 */ 	});},
/* 000468 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000468 */ 		if (arguments.length) {
/* 000468 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000468 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000468 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000468 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000468 */ 					switch (__attrib0__) {
/* 000468 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000468 */ 					}
/* 000468 */ 				}
/* 000468 */ 			}
/* 000468 */ 		}
/* 000468 */ 		else {
/* 000468 */ 		}
/* 000468 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000473 */ 		var environment_name = token.arg;
/* 000474 */ 		return (function () {
/* 000474 */ 			var __accu0__ = latexnodes_parsers;
/* 000474 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000474 */ 		}) ();
/* 000474 */ 	});},
/* 000479 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000479 */ 		if (arguments.length) {
/* 000479 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000479 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000479 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000479 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000479 */ 					switch (__attrib0__) {
/* 000479 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000479 */ 					}
/* 000479 */ 				}
/* 000479 */ 			}
/* 000479 */ 		}
/* 000479 */ 		else {
/* 000479 */ 		}
/* 000481 */ 		var environment_node_name = null;
/* 000483 */ 		if (__t__ ((function () {
/* 000483 */ 			var __accu0__ = node;
/* 000483 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000483 */ 		}) ())) {
/* 000485 */ 			var environment_node_name = node.environmentname;
/* 000487 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000488 */ 				var verbatim_contents = (function () {
/* 000488 */ 					var __accu0__ = node;
/* 000488 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000488 */ 				}) ();
/* 000488 */ 			}
/* 000489 */ 			else {
/* 000492 */ 				var verbatim_contents = (function () {
/* 000492 */ 					var __accu0__ = node.nodelist;
/* 000492 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000492 */ 				}) ();
/* 000492 */ 			}
/* 000492 */ 		}
/* 000493 */ 		else {
/* 000494 */ 			var verbatim_contents = (function () {
/* 000494 */ 				var __accu0__ = node;
/* 000494 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000494 */ 			}) ();
/* 000494 */ 		}
/* 000496 */ 		var annotations = __t__ (self.annotations) || [];
/* 000497 */ 		if (__t__ (environment_node_name !== null)) {
/* 000498 */ 			(function () {
/* 000498 */ 				var __accu0__ = annotations;
/* 000498 */ 				return __call__ (__accu0__.append, __accu0__, environment_node_name);
/* 000498 */ 			}) ();
/* 000498 */ 		}
/* 000500 */ 		return (function () {
/* 000500 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000500 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, __kwargtrans__ ({annotations: annotations}));
/* 000500 */ 		}) ();
/* 000500 */ 	});}
/* 000500 */ });
/* 000505 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo, macrospec.MacroSpec], {
/* 000505 */ 	__module__: __name__,
/* 000506 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000506 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000506 */ 			var verbatim_delimiters = null;
/* 000506 */ 		};
/* 000506 */ 		var kwargs = dict ();
/* 000506 */ 		if (arguments.length) {
/* 000506 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000506 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000506 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000506 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000506 */ 					switch (__attrib0__) {
/* 000506 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000506 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000506 */ 					}
/* 000506 */ 				}
/* 000506 */ 				delete kwargs.__kwargtrans__;
/* 000506 */ 			}
/* 000506 */ 		}
/* 000506 */ 		else {
/* 000506 */ 		}
/* 000512 */ 		var newkwargs = __call__ (dict, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [(function () {
/* 000512 */ 			var __accu0__ = latexnodes_parsers;
/* 000512 */ 			return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000512 */ 		}) ()]}, kwargs)));
/* 000518 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimMacro, self, [], newkwargs);
/* 000518 */ 	});}
/* 000518 */ });
/* 000521 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo, macrospec.EnvironmentSpec], {
/* 000521 */ 	__module__: __name__,
/* 000522 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000522 */ 		var kwargs = dict ();
/* 000522 */ 		if (arguments.length) {
/* 000522 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000522 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000522 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000522 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000522 */ 					switch (__attrib0__) {
/* 000522 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000522 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000522 */ 					}
/* 000522 */ 				}
/* 000522 */ 				delete kwargs.__kwargtrans__;
/* 000522 */ 			}
/* 000522 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000522 */ 		}
/* 000522 */ 		else {
/* 000522 */ 			var args = tuple ();
/* 000522 */ 		}
/* 000523 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimEnvironment, self, args, kwargs);
/* 000523 */ 	});}
/* 000523 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmspecinfo.map