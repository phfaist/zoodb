/* 000001 */ // Transcrypt'ed from Python, 2022-09-11 22:27:57
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {LLMArgumentSpec, LLMParsingStateDeltaSetBlockLevel} from './llm.llmenvironment.js';
/* 000014 */ import {LatexWalkerParseError, ParsedArgumentsInfo} from './pylatexenc.latexnodes.js';
/* 000013 */ import * as latexnodes_parsers from './pylatexenc.latexnodes.parsers.js';
/* 000012 */ import * as latexnodes_nodes from './pylatexenc.latexnodes.nodes.js';
/* 000011 */ import * as macrospec from './pylatexenc.macrospec.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {latexnodes_parsers, LLMParsingStateDeltaSetBlockLevel, LLMArgumentSpec, ParsedArgumentsInfo, LatexWalkerParseError, latexnodes_nodes, macrospec};
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
/* 000115 */ 		(function () {
/* 000115 */ 			var __accu0__ = self;
/* 000115 */ 			return __call__ (__accu0__.postprocess_parsed_node, __accu0__, node);
/* 000115 */ 		}) ();
/* 000116 */ 		node.llm_is_block_level = self.is_block_level;
/* 000117 */ 		node.llm_is_block_heading = self.is_block_heading;
/* 000118 */ 		node.llm_is_paragraph_break_marker = self.is_paragraph_break_marker;
/* 000119 */ 		return node;
/* 000119 */ 	});}
/* 000119 */ });
/* 000131 */ export var _dobaseconstructors2argslast = function (Me, self, args, kwargs, kwargs_to_first_constructor) {
/* 000131 */ 	if (typeof kwargs_to_first_constructor == 'undefined' || (kwargs_to_first_constructor != null && kwargs_to_first_constructor.hasOwnProperty ("__kwargtrans__"))) {;
/* 000131 */ 		var kwargs_to_first_constructor = null;
/* 000131 */ 	};
/* 000131 */ 	if (arguments.length) {
/* 000131 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 				switch (__attrib0__) {
/* 000131 */ 					case 'Me': var Me = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					case 'args': var args = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					case 'kwargs': var kwargs = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					case 'kwargs_to_first_constructor': var kwargs_to_first_constructor = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 	}
/* 000131 */ 	else {
/* 000131 */ 	}
/* 000133 */ 	var kwargs1 = dict ({});
/* 000134 */ 	var kwargs2 = __call__ (dict, null, kwargs);
/* 000135 */ 	if (__t__ (kwargs_to_first_constructor)) {
/* 000136 */ 		var __iterable0__ = kwargs_to_first_constructor;
/* 000136 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000136 */ 			var kwarg = __getitem__ (__iterable0__, __index0__);
/* 000137 */ 			if (__t__ (__in__ (kwarg, kwargs2))) {
/* 000138 */ 				__setitem__ (kwargs1, kwarg, (function () {
/* 000138 */ 					var __accu0__ = kwargs2;
/* 000138 */ 					return __call__ (__accu0__.py_pop, __accu0__, kwarg);
/* 000138 */ 				}) ());
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 	}
/* 000139 */ 	(function () {
/* 000139 */ 		var __accu0__ = __getitem__ (Me.__bases__, 0);
/* 000139 */ 		return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ (kwargs1));
/* 000139 */ 	}) ();
/* 000140 */ 	(function () {
/* 000140 */ 		var __accu0__ = __getitem__ (Me.__bases__, 1);
/* 000140 */ 		return __call__ (__accu0__.__init__, __accu0__, self, ...args, __kwargtrans__ (kwargs2));
/* 000140 */ 	}) ();
/* 000140 */ };
/* 000147 */ export var LLMMacroSpecBase =  __class__ ('LLMMacroSpecBase', [LLMSpecInfo, macrospec.MacroSpec], {
/* 000147 */ 	__module__: __name__,
/* 000148 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000148 */ 		var kwargs = dict ();
/* 000148 */ 		if (arguments.length) {
/* 000148 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000148 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000148 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000148 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000148 */ 					switch (__attrib0__) {
/* 000148 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000148 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000148 */ 					}
/* 000148 */ 				}
/* 000148 */ 				delete kwargs.__kwargtrans__;
/* 000148 */ 			}
/* 000148 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000148 */ 		}
/* 000148 */ 		else {
/* 000148 */ 			var args = tuple ();
/* 000148 */ 		}
/* 000149 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecBase, self, args, kwargs);
/* 000149 */ 	});}
/* 000149 */ });
/* 000151 */ export var LLMEnvironmentSpecBase =  __class__ ('LLMEnvironmentSpecBase', [LLMSpecInfo, macrospec.EnvironmentSpec], {
/* 000151 */ 	__module__: __name__,
/* 000152 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000152 */ 		var kwargs = dict ();
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 				delete kwargs.__kwargtrans__;
/* 000152 */ 			}
/* 000152 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 			var args = tuple ();
/* 000152 */ 		}
/* 000153 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecBase, self, args, kwargs);
/* 000153 */ 	});}
/* 000153 */ });
/* 000155 */ export var LLMSpecialsSpecBase =  __class__ ('LLMSpecialsSpecBase', [LLMSpecInfo, macrospec.SpecialsSpec], {
/* 000155 */ 	__module__: __name__,
/* 000156 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000156 */ 		var kwargs = dict ();
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 				delete kwargs.__kwargtrans__;
/* 000156 */ 			}
/* 000156 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 			var args = tuple ();
/* 000156 */ 		}
/* 000157 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecBase, self, args, kwargs);
/* 000157 */ 	});}
/* 000157 */ });
/* 000165 */ export var LLMSpecInfoConstantValue =  __class__ ('LLMSpecInfoConstantValue', [LLMSpecInfo], {
/* 000165 */ 	__module__: __name__,
/* 000167 */ 	allowed_in_standalone_mode: true,
/* 000169 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000169 */ 		var kwargs = dict ();
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 				delete kwargs.__kwargtrans__;
/* 000169 */ 			}
/* 000169 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 			var args = tuple ();
/* 000169 */ 		}
/* 000170 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoConstantValue, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000171 */ 		self.value = value;
/* 000171 */ 	});},
/* 000173 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000173 */ 		if (arguments.length) {
/* 000173 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000173 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000173 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000173 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000173 */ 					switch (__attrib0__) {
/* 000173 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000173 */ 					}
/* 000173 */ 				}
/* 000173 */ 			}
/* 000173 */ 		}
/* 000173 */ 		else {
/* 000173 */ 		}
/* 000174 */ 		return (function () {
/* 000174 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000174 */ 			return __call__ (__accu0__.render_value, __accu0__, self.value);
/* 000174 */ 		}) ();
/* 000174 */ 	});}
/* 000174 */ });
/* 000177 */ export var ConstantValueMacro =  __class__ ('ConstantValueMacro', [LLMSpecInfoConstantValue, macrospec.MacroSpec], {
/* 000177 */ 	__module__: __name__,
/* 000178 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000178 */ 		var kwargs = dict ();
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 				delete kwargs.__kwargtrans__;
/* 000178 */ 			}
/* 000178 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 			var args = tuple ();
/* 000178 */ 		}
/* 000179 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueMacro, self, args, kwargs, tuple (['value']));
/* 000179 */ 	});}
/* 000179 */ });
/* 000181 */ export var ConstantValueSpecials =  __class__ ('ConstantValueSpecials', [LLMSpecInfoConstantValue, macrospec.SpecialsSpec], {
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
/* 000183 */ 		__call__ (_dobaseconstructors2argslast, null, ConstantValueSpecials, self, args, kwargs, tuple (['value']));
/* 000183 */ 	});}
/* 000183 */ });
/* 000186 */ export var _parsing_state_delta_inline_mode = __call__ (LLMParsingStateDeltaSetBlockLevel, null, __kwargtrans__ ({is_block_level: false}));
/* 000188 */ export var text_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'text'}));
/* 000194 */ export var label_arg = __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000194 */ 	var __accu0__ = latexnodes_parsers;
/* 000194 */ 	return __call__ (__accu0__.LatexTackOnInformationFieldMacrosParser, __accu0__, ['label'], __kwargtrans__ ({allow_multiple: true}));
/* 000194 */ }) (), argname: 'label'}));
/* 000201 */ export var helper_collect_labels = function (node_arg_label, allowed_prefixes) {
/* 000201 */ 	if (arguments.length) {
/* 000201 */ 		var __ilastarg0__ = arguments.length - 1;
/* 000201 */ 		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000201 */ 			var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000201 */ 			for (var __attrib0__ in __allkwargs0__) {
/* 000201 */ 				switch (__attrib0__) {
/* 000201 */ 					case 'node_arg_label': var node_arg_label = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 					case 'allowed_prefixes': var allowed_prefixes = __allkwargs0__ [__attrib0__]; break;
/* 000201 */ 				}
/* 000201 */ 			}
/* 000201 */ 		}
/* 000201 */ 	}
/* 000201 */ 	else {
/* 000201 */ 	}
/* 000203 */ 	if (__t__ (!__t__ (((function () {
/* 000203 */ 		var __accu0__ = node_arg_label;
/* 000203 */ 		return __call__ (__accu0__.was_provided, __accu0__);
/* 000203 */ 	}) ())))) {
/* 000204 */ 		return null;
/* 000204 */ 	}
/* 000206 */ 	var the_labels = [];
/* 000207 */ 	var argnodes = (function () {
/* 000207 */ 		var __accu0__ = node_arg_label;
/* 000207 */ 		return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000207 */ 	}) ();
/* 000208 */ 	var __iterable0__ = argnodes;
/* 000208 */ 	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000208 */ 		var argnode = __getitem__ (__iterable0__, __index0__);
/* 000209 */ 		if (__t__ (__eq__ (__getitem__ (argnode.delimiters, 0), '\\label'))) {
/* 000211 */ 			var the_label = (function () {
/* 000211 */ 				var __accu0__ = argnode.nodelist;
/* 000211 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000211 */ 			}) ();
/* 000212 */ 			if (__t__ (__in__ (':', the_label))) {
/* 000213 */ 				var __left0__ = (function () {
/* 000213 */ 					var __accu0__ = the_label;
/* 000213 */ 					return __call__ (__accu0__.py_split, __accu0__, ':', 1);
/* 000213 */ 				}) ();
/* 000213 */ 				var ref_type = __left0__ [0];
/* 000213 */ 				var ref_label = __left0__ [1];
/* 000213 */ 			}
/* 000214 */ 			else {
/* 000215 */ 				var __left0__ = tuple ([null, the_label]);
/* 000215 */ 				var ref_type = __left0__ [0];
/* 000215 */ 				var ref_label = __left0__ [1];
/* 000215 */ 			}
/* 000217 */ 			if (__t__ (!__in__ (ref_type, allowed_prefixes))) {
/* 000218 */ 				var __except0__ = __call__ (LatexWalkerParseError, null, 'Heading label ‘{}’ has incorrect prefix ‘{}:’; expected one of {}'.format (the_label, ref_type, allowed_prefixes), __kwargtrans__ ({pos: argnode.pos}));
/* 000218 */ 				__except0__.__cause__ = null;
/* 000218 */ 				throw __except0__;
/* 000218 */ 			}
/* 000224 */ 			(function () {
/* 000224 */ 				var __accu0__ = the_labels;
/* 000224 */ 				return __call__ (__accu0__.append, __accu0__, tuple ([ref_type, ref_label]));
/* 000224 */ 			}) ();
/* 000224 */ 			continue;
/* 000224 */ 		}
/* 000227 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Bad information field macro {}'.format (__getitem__ (argnode.delimiters, 0)), __kwargtrans__ ({pos: argnode.pos}));
/* 000227 */ 		__except0__.__cause__ = null;
/* 000227 */ 		throw __except0__;
/* 000227 */ 	}
/* 000232 */ 	return the_labels;
/* 000232 */ };
/* 000238 */ export var TextFormatMacro =  __class__ ('TextFormatMacro', [LLMMacroSpecBase], {
/* 000238 */ 	__module__: __name__,
/* 000251 */ 	allowed_in_standalone_mode: true,
/* 000255 */ 	_llm_main_text_argument: 'text',
/* 000257 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000258 */ 		__call__ (__call__ (__super__, null, TextFormatMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: [text_arg]}));
/* 000262 */ 		self.text_formats = text_formats;
/* 000262 */ 	});},
/* 000264 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000266 */ 		var node_args = (function () {
/* 000266 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000266 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, tuple (['text']));
/* 000266 */ 		}) ();
/* 000270 */ 		return (function () {
/* 000270 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000272 */ 			return __call__ (__accu0__.render_text_format, __accu0__, self.text_formats, (function () {
/* 000272 */ 				var __accu1__ = __getitem__ (node_args, 'text');
/* 000272 */ 				return __call__ (__accu1__.get_content_nodelist, __accu1__);
/* 000272 */ 			}) (), render_context);
/* 000272 */ 		}) ();
/* 000272 */ 	});}
/* 000272 */ });
/* 000277 */ export var LLMSpecInfoParagraphBreak =  __class__ ('LLMSpecInfoParagraphBreak', [LLMSpecInfo], {
/* 000277 */ 	__module__: __name__,
/* 000279 */ 	is_block_level: true,
/* 000281 */ 	is_paragraph_break_marker: true,
/* 000283 */ 	allowed_in_standalone_mode: true,
/* 000285 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000285 */ 		if (arguments.length) {
/* 000285 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000285 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000285 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000285 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000285 */ 					switch (__attrib0__) {
/* 000285 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000285 */ 					}
/* 000285 */ 				}
/* 000285 */ 			}
/* 000285 */ 		}
/* 000285 */ 		else {
/* 000285 */ 		}
/* 000286 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, 'Paragraph break is not allowed here', __kwargtrans__ ({pos: node.pos}));
/* 000286 */ 		__except0__.__cause__ = null;
/* 000286 */ 		throw __except0__;
/* 000286 */ 	});}
/* 000286 */ });
/* 000289 */ export var ParagraphBreakSpecials =  __class__ ('ParagraphBreakSpecials', [LLMSpecInfoParagraphBreak, macrospec.SpecialsSpec], {
/* 000289 */ 	__module__: __name__,
/* 000290 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000290 */ 		var kwargs = dict ();
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 				delete kwargs.__kwargtrans__;
/* 000290 */ 			}
/* 000290 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 			var args = tuple ();
/* 000290 */ 		}
/* 000291 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakSpecials, self, args, kwargs);
/* 000291 */ 	});}
/* 000291 */ });
/* 000293 */ export var ParagraphBreakMacro =  __class__ ('ParagraphBreakMacro', [LLMSpecInfoParagraphBreak, macrospec.MacroSpec], {
/* 000293 */ 	__module__: __name__,
/* 000294 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000294 */ 		var kwargs = dict ();
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 				delete kwargs.__kwargtrans__;
/* 000294 */ 			}
/* 000294 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 			var args = tuple ();
/* 000294 */ 		}
/* 000295 */ 		__call__ (_dobaseconstructors2argslast, null, ParagraphBreakMacro, self, args, kwargs);
/* 000295 */ 	});}
/* 000295 */ });
/* 000300 */ export var LLMSpecInfoError =  __class__ ('LLMSpecInfoError', [LLMSpecInfo], {
/* 000300 */ 	__module__: __name__,
/* 000302 */ 	allowed_in_standalone_mode: true,
/* 000304 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000304 */ 		var error_msg = null;
/* 000304 */ 		var kwargs = dict ();
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'error_msg': var error_msg = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 				delete kwargs.__kwargtrans__;
/* 000304 */ 			}
/* 000304 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 			var args = tuple ();
/* 000304 */ 		}
/* 000305 */ 		__call__ (__call__ (__super__, null, LLMSpecInfoError, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000306 */ 		self.error_msg = error_msg;
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
/* 000309 */ 		if (__t__ (self.error_msg)) {
/* 000310 */ 			var msg = self.error_msg;
/* 000310 */ 		}
/* 000311 */ 		else {
/* 000312 */ 			var msg = 'The node ‘{}’ cannot be placed here.'.format (node);
/* 000312 */ 		}
/* 000314 */ 		var __except0__ = __call__ (LatexWalkerParseError, null, msg, __kwargtrans__ ({pos: node.pos}));
/* 000314 */ 		__except0__.__cause__ = null;
/* 000314 */ 		throw __except0__;
/* 000314 */ 	});}
/* 000314 */ });
/* 000317 */ export var LLMMacroSpecError =  __class__ ('LLMMacroSpecError', [LLMSpecInfoError, macrospec.MacroSpec], {
/* 000317 */ 	__module__: __name__,
/* 000318 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000318 */ 		var kwargs = dict ();
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 				delete kwargs.__kwargtrans__;
/* 000318 */ 			}
/* 000318 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 			var args = tuple ();
/* 000318 */ 		}
/* 000319 */ 		__call__ (_dobaseconstructors2argslast, null, LLMMacroSpecError, self, args, kwargs);
/* 000319 */ 	});}
/* 000319 */ });
/* 000321 */ export var LLMEnvironmentSpecError =  __class__ ('LLMEnvironmentSpecError', [LLMSpecInfoError, macrospec.EnvironmentSpec], {
/* 000321 */ 	__module__: __name__,
/* 000322 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000322 */ 		var kwargs = dict ();
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 				delete kwargs.__kwargtrans__;
/* 000322 */ 			}
/* 000322 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 			var args = tuple ();
/* 000322 */ 		}
/* 000323 */ 		__call__ (_dobaseconstructors2argslast, null, LLMEnvironmentSpecError, self, args, kwargs);
/* 000323 */ 	});}
/* 000323 */ });
/* 000325 */ export var LLMSpecialsSpecError =  __class__ ('LLMSpecialsSpecError', [LLMSpecInfoError, macrospec.SpecialsSpec], {
/* 000325 */ 	__module__: __name__,
/* 000326 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000326 */ 		var kwargs = dict ();
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 				delete kwargs.__kwargtrans__;
/* 000326 */ 			}
/* 000326 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 			var args = tuple ();
/* 000326 */ 		}
/* 000327 */ 		__call__ (_dobaseconstructors2argslast, null, LLMSpecialsSpecError, self, args, kwargs);
/* 000327 */ 	});}
/* 000327 */ });
/* 000333 */ export var _href_arg_specs = dict ({'target_href': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: (function () {
/* 000333 */ 	var __accu0__ = latexnodes_parsers;
/* 000333 */ 	return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, tuple (['{', '}']));
/* 000336 */ }) (), argname: 'target_href'})), 'display_text': __call__ (LLMArgumentSpec, null, __kwargtrans__ ({parser: '{', argname: 'display_text'}))});
/* 000343 */ export var HrefHyperlinkMacro =  __class__ ('HrefHyperlinkMacro', [LLMMacroSpecBase], {
/* 000343 */ 	__module__: __name__,
/* 000345 */ 	allowed_in_standalone_mode: true,
/* 000347 */ 	get __init__ () {return __get__ (this, function (self, macroname) {
/* 000347 */ 		var command_arguments = tuple (['target_href', 'display_text']);
/* 000347 */ 		var ref_type = 'href';
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000356 */ 		__call__ (__call__ (__super__, null, HrefHyperlinkMacro, '__init__'), null, self, __kwargtrans__ ({macroname: macroname, arguments_spec_list: (function () {
/* 000356 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__._get_arguments_spec_list, __accu0__, command_arguments);
/* 000356 */ 		}) ()}));
/* 000358 */ 		self.command_arguments = (function () {
/* 000358 */ 			var __accu0__ = [];
/* 000358 */ 			var __iterable0__ = command_arguments;
/* 000358 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000358 */ 				var c = __getitem__ (__iterable0__, __index0__);
/* 000358 */ 				(function () {
/* 000358 */ 					var __accu1__ = __accu0__;
/* 000358 */ 					return __call__ (__accu1__.append, __accu1__, (function () {
/* 000358 */ 						var __accu2__ = c;
/* 000358 */ 						return __call__ (__accu2__.strip, __accu2__, '[]');
/* 000358 */ 					}) ());
/* 000358 */ 				}) ();
/* 000358 */ 			}
/* 000358 */ 			return __accu0__;
/* 000358 */ 		}) ();
/* 000359 */ 		self.ref_type = ref_type;
/* 000361 */ 		if (__t__ (__in__ ('display_text', command_arguments))) {
/* 000364 */ 			self._llm_main_text_argument = 'display_text';
/* 000364 */ 		}
/* 000364 */ 	});},
/* 000367 */ 	get _get_arguments_spec_list () {return __getcm__ (this, function (cls, command_arguments) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'command_arguments': var command_arguments = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		return (function () {
/* 000368 */ 			var __accu0__ = [];
/* 000368 */ 			var __iterable0__ = command_arguments;
/* 000368 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000370 */ 				var cmdarg = __getitem__ (__iterable0__, __index0__);
/* 000370 */ 				(function () {
/* 000370 */ 					var __accu1__ = __accu0__;
/* 000370 */ 					return __call__ (__accu1__.append, __accu1__, __getitem__ (_href_arg_specs, cmdarg));
/* 000370 */ 				}) ();
/* 000370 */ 			}
/* 000370 */ 			return __accu0__;
/* 000370 */ 		}) ();
/* 000370 */ 	});},
/* 000374 */ 	get pretty_url () {return __getcm__ (this, function (cls, target_href) {
/* 000374 */ 		if (arguments.length) {
/* 000374 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000374 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000374 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000374 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000374 */ 					switch (__attrib0__) {
/* 000374 */ 						case 'cls': var cls = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 						case 'target_href': var target_href = __allkwargs0__ [__attrib0__]; break;
/* 000374 */ 					}
/* 000374 */ 				}
/* 000374 */ 			}
/* 000374 */ 		}
/* 000374 */ 		else {
/* 000374 */ 		}
/* 000375 */ 		var url_display = __call__ (str, null, target_href);
/* 000376 */ 		var __iterable0__ = tuple (['http://', 'https://']);
/* 000376 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000376 */ 			var prefix = __getitem__ (__iterable0__, __index0__);
/* 000377 */ 			if (__t__ ((function () {
/* 000377 */ 				var __accu0__ = url_display;
/* 000377 */ 				return __call__ (__accu0__.startswith, __accu0__, prefix);
/* 000377 */ 			}) ())) {
/* 000378 */ 				var url_display = __getslice__ (url_display, __call__ (len, null, prefix), null, 1);
/* 000378 */ 				break;
/* 000378 */ 			}
/* 000378 */ 		}
/* 000380 */ 		var url_display = (function () {
/* 000380 */ 			var __accu0__ = url_display;
/* 000380 */ 			return __call__ (__accu0__.rstrip, __accu0__, '/#?');
/* 000380 */ 		}) ();
/* 000381 */ 		return url_display;
/* 000381 */ 	});},
/* 000384 */ 	get postprocess_parsed_node () {return __get__ (this, function (self, node) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000386 */ 		var node_args = (function () {
/* 000386 */ 			var __accu0__ = __call__ (ParsedArgumentsInfo, null, __kwargtrans__ ({node: node}));
/* 000386 */ 			return __call__ (__accu0__.get_all_arguments_info, __accu0__, self.command_arguments);
/* 000386 */ 		}) ();
/* 000390 */ 		var target_href = null;
/* 000391 */ 		var display_text_nodelist = null;
/* 000393 */ 		if (__t__ (__in__ ('target_href', node_args))) {
/* 000394 */ 			var target_href = (function () {
/* 000394 */ 				var __accu0__ = __getitem__ (node_args, 'target_href');
/* 000394 */ 				return __call__ (__accu0__.get_content_as_chars, __accu0__);
/* 000394 */ 			}) ();
/* 000394 */ 		}
/* 000395 */ 		if (__t__ (__in__ ('display_text', node_args))) {
/* 000396 */ 			var display_text_nodelist = (function () {
/* 000396 */ 				var __accu0__ = __getitem__ (node_args, 'display_text');
/* 000396 */ 				return __call__ (__accu0__.get_content_nodelist, __accu0__);
/* 000396 */ 			}) ();
/* 000396 */ 		}
/* 000398 */ 		node.llm_href_info = dict ({'target_href': target_href, 'display_text_nodelist': display_text_nodelist});
/* 000398 */ 	});},
/* 000403 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000405 */ 		var target_href = __getitem__ (node.llm_href_info, 'target_href');
/* 000406 */ 		var display_text_nodelist = __getitem__ (node.llm_href_info, 'display_text_nodelist');
/* 000409 */ 		if (__t__ (display_text_nodelist === null)) {
/* 000410 */ 			var display_text_nodelist = (function () {
/* 000410 */ 				var __accu0__ = node.latex_walker;
/* 000412 */ 				return __call__ (__accu0__.make_nodelist, __accu0__, [(function () {
/* 000412 */ 					var __accu1__ = node.latex_walker;
/* 000415 */ 					return __call__ (__accu1__.make_node, __accu1__, latexnodes_nodes.LatexCharsNode, __kwargtrans__ ({parsing_state: node.parsing_state, chars: (function () {
/* 000415 */ 						var __accu2__ = self;
/* 000415 */ 						return __call__ (__accu2__.pretty_url, __accu2__, target_href);
/* 000415 */ 					}) (), pos: node.pos, pos_end: node.pos}));
/* 000415 */ 				}) ()], __kwargtrans__ ({parsing_state: node.parsing_state}));
/* 000415 */ 			}) ();
/* 000415 */ 		}
/* 000423 */ 		return (function () {
/* 000423 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000423 */ 			return __call__ (__accu0__.render_link, __accu0__, self.ref_type, target_href, display_text_nodelist, render_context);
/* 000423 */ 		}) ();
/* 000423 */ 	});}
/* 000423 */ });
/* 000431 */ export var VerbatimSpecInfo =  __class__ ('VerbatimSpecInfo', [LLMSpecInfo], {
/* 000431 */ 	__module__: __name__,
/* 000433 */ 	allowed_in_standalone_mode: true,
/* 000441 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000441 */ 		var annotations = null;
/* 000441 */ 		var include_environment_begin_end = false;
/* 000441 */ 		var kwargs = dict ();
/* 000441 */ 		if (arguments.length) {
/* 000441 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000441 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000441 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000441 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000441 */ 					switch (__attrib0__) {
/* 000441 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						case 'include_environment_begin_end': var include_environment_begin_end = __allkwargs0__ [__attrib0__]; break;
/* 000441 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000441 */ 					}
/* 000441 */ 				}
/* 000441 */ 				delete kwargs.__kwargtrans__;
/* 000441 */ 			}
/* 000441 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000441 */ 		}
/* 000441 */ 		else {
/* 000441 */ 			var args = tuple ();
/* 000441 */ 		}
/* 000445 */ 		__call__ (__call__ (__super__, null, VerbatimSpecInfo, '__init__'), null, self, ...args, __kwargtrans__ (kwargs));
/* 000446 */ 		self.annotations = annotations;
/* 000447 */ 		self.include_environment_begin_end = include_environment_begin_end;
/* 000447 */ 	});},
/* 000449 */ 	get make_body_parser () {return __get__ (this, function (self, token, nodeargd, arg_parsing_state_delta) {
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'token': var token = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'nodeargd': var nodeargd = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'arg_parsing_state_delta': var arg_parsing_state_delta = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000449 */ 		assert (__eq__ (token.tok, 'begin_environment'));
/* 000454 */ 		var environment_name = token.arg;
/* 000455 */ 		return (function () {
/* 000455 */ 			var __accu0__ = latexnodes_parsers;
/* 000455 */ 			return __call__ (__accu0__.LatexVerbatimEnvironmentContentsParser, __accu0__, __kwargtrans__ ({environment_name: environment_name}));
/* 000455 */ 		}) ();
/* 000455 */ 	});},
/* 000460 */ 	get render () {return __get__ (this, function (self, node, render_context) {
/* 000460 */ 		if (arguments.length) {
/* 000460 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000460 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000460 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000460 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000460 */ 					switch (__attrib0__) {
/* 000460 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000460 */ 					}
/* 000460 */ 				}
/* 000460 */ 			}
/* 000460 */ 		}
/* 000460 */ 		else {
/* 000460 */ 		}
/* 000462 */ 		var environment_node_name = null;
/* 000464 */ 		if (__t__ ((function () {
/* 000464 */ 			var __accu0__ = node;
/* 000464 */ 			return __call__ (__accu0__.isNodeType, __accu0__, latexnodes_nodes.LatexEnvironmentNode);
/* 000464 */ 		}) ())) {
/* 000466 */ 			var environment_node_name = node.environmentname;
/* 000468 */ 			if (__t__ (self.include_environment_begin_end)) {
/* 000469 */ 				var verbatim_contents = (function () {
/* 000469 */ 					var __accu0__ = node;
/* 000469 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000469 */ 				}) ();
/* 000469 */ 			}
/* 000470 */ 			else {
/* 000473 */ 				var verbatim_contents = (function () {
/* 000473 */ 					var __accu0__ = node.nodelist;
/* 000473 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000473 */ 				}) ();
/* 000473 */ 			}
/* 000473 */ 		}
/* 000474 */ 		else {
/* 000475 */ 			var verbatim_contents = (function () {
/* 000475 */ 				var __accu0__ = node;
/* 000475 */ 				return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000475 */ 			}) ();
/* 000475 */ 		}
/* 000477 */ 		var annotations = __t__ (self.annotations) || [];
/* 000478 */ 		if (__t__ (environment_node_name !== null)) {
/* 000479 */ 			(function () {
/* 000479 */ 				var __accu0__ = annotations;
/* 000479 */ 				return __call__ (__accu0__.append, __accu0__, environment_node_name);
/* 000479 */ 			}) ();
/* 000479 */ 		}
/* 000481 */ 		return (function () {
/* 000481 */ 			var __accu0__ = render_context.fragment_renderer;
/* 000481 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, verbatim_contents, __kwargtrans__ ({annotations: annotations}));
/* 000481 */ 		}) ();
/* 000481 */ 	});}
/* 000481 */ });
/* 000486 */ export var VerbatimMacro =  __class__ ('VerbatimMacro', [VerbatimSpecInfo, macrospec.MacroSpec], {
/* 000486 */ 	__module__: __name__,
/* 000487 */ 	get __init__ () {return __get__ (this, function (self, macroname, verbatim_delimiters) {
/* 000487 */ 		if (typeof verbatim_delimiters == 'undefined' || (verbatim_delimiters != null && verbatim_delimiters.hasOwnProperty ("__kwargtrans__"))) {;
/* 000487 */ 			var verbatim_delimiters = null;
/* 000487 */ 		};
/* 000487 */ 		var kwargs = dict ();
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'macroname': var macroname = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'verbatim_delimiters': var verbatim_delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 				delete kwargs.__kwargtrans__;
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000493 */ 		var newkwargs = __call__ (dict, null, __kwargtrans__ (__mergekwargtrans__ ({macroname: macroname, arguments_spec_list: [(function () {
/* 000493 */ 			var __accu0__ = latexnodes_parsers;
/* 000493 */ 			return __call__ (__accu0__.LatexDelimitedVerbatimParser, __accu0__, __kwargtrans__ ({delimiters: verbatim_delimiters}));
/* 000493 */ 		}) ()]}, kwargs)));
/* 000499 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimMacro, self, [], newkwargs);
/* 000499 */ 	});}
/* 000499 */ });
/* 000502 */ export var VerbatimEnvironment =  __class__ ('VerbatimEnvironment', [VerbatimSpecInfo, macrospec.EnvironmentSpec], {
/* 000502 */ 	__module__: __name__,
/* 000503 */ 	get __init__ () {return __get__ (this, function (self) {
/* 000503 */ 		var kwargs = dict ();
/* 000503 */ 		if (arguments.length) {
/* 000503 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000503 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000503 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000503 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000503 */ 					switch (__attrib0__) {
/* 000503 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000503 */ 						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
/* 000503 */ 					}
/* 000503 */ 				}
/* 000503 */ 				delete kwargs.__kwargtrans__;
/* 000503 */ 			}
/* 000503 */ 			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
/* 000503 */ 		}
/* 000503 */ 		else {
/* 000503 */ 			var args = tuple ();
/* 000503 */ 		}
/* 000504 */ 		__call__ (_dobaseconstructors2argslast, null, VerbatimEnvironment, self, args, kwargs);
/* 000504 */ 	});}
/* 000504 */ });
/* 000007 */ 
//# sourceMappingURL=llm.llmspecinfo.map