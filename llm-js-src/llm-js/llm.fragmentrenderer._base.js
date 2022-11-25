/* 000001 */ // Transcrypt'ed from Python, 2022-11-13 21:11:23
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {LLMRenderContext} from './llm.llmrendercontext.js';
/* 000010 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {nodes, LLMRenderContext};
/* 000001 */ var __name__ = 'llm.fragmentrenderer._base';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000015 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000015 */ 	__module__: __name__,
/* 000020 */ 	supports_delayed_render_markers: false,
/* 000028 */ 	get render_fragment () {return __get__ (this, function (self, llm_fragment, render_context, is_block_level) {
/* 000028 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var is_block_level = null;
/* 000028 */ 		};
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'llm_fragment': var llm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000029 */ 		try {
/* 000030 */ 			return (function () {
/* 000030 */ 				var __accu0__ = self;
/* 000031 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, llm_fragment.nodes, (function () {
/* 000031 */ 					var __accu1__ = self;
/* 000031 */ 					return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000031 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000031 */ 			}) ();
/* 000031 */ 		}
/* 000031 */ 		catch (__except0__) {
/* 000031 */ 			if (isinstance (__except0__, Exception)) {
/* 000031 */ 				var e = __except0__;
/* 000034 */ 				(function () {
/* 000034 */ 					var __accu0__ = logger;
/* 000034 */ 					return __call__ (__accu0__.debug, __accu0__, 'Exception while rendering fragment ‘{}’: {}'.format (llm_fragment.what, e));
/* 000034 */ 				}) ();
/* 000035 */ 				__except0__.__cause__ = null;
/* 000035 */ 				throw __except0__;
/* 000035 */ 			}
/* 000035 */ 			else {
/* 000035 */ 				throw __except0__;
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 	});},
/* 000037 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000037 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000037 */ 			var is_block_level = null;
/* 000037 */ 		};
/* 000037 */ 		if (arguments.length) {
/* 000037 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000037 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000037 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000037 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000037 */ 					switch (__attrib0__) {
/* 000037 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000037 */ 					}
/* 000037 */ 				}
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 		else {
/* 000037 */ 		}
/* 000052 */ 		if (__t__ (nodelist === null)) {
/* 000053 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000053 */ 			__except0__.__cause__ = null;
/* 000053 */ 			throw __except0__;
/* 000053 */ 		}
/* 000055 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'llm_is_block_level'))))) {
/* 000056 */ 			(function () {
/* 000056 */ 				var __accu0__ = logger;
/* 000056 */ 				return __call__ (__accu0__.debug, __accu0__, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute:\nnodelist={}'.format (nodelist));
/* 000056 */ 			}) ();
/* 000059 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute');
/* 000059 */ 			__except0__.__cause__ = null;
/* 000059 */ 			throw __except0__;
/* 000059 */ 		}
/* 000062 */ 		if (__t__ (is_block_level === null)) {
/* 000063 */ 			var is_block_level = nodelist.llm_is_block_level;
/* 000063 */ 		}
/* 000065 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.llm_is_block_level)) {
/* 000066 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000066 */ 			__except0__.__cause__ = null;
/* 000066 */ 			throw __except0__;
/* 000066 */ 		}
/* 000071 */ 		if (__t__ (is_block_level)) {
/* 000077 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'llm_blocks'))) {
/* 000078 */ 				var node_blocks = nodelist.llm_blocks;
/* 000078 */ 			}
/* 000079 */ 			else {
/* 000080 */ 				var node_blocks = [nodelist];
/* 000080 */ 			}
/* 000082 */ 			return (function () {
/* 000082 */ 				var __accu0__ = self;
/* 000082 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000082 */ 			}) ();
/* 000082 */ 		}
/* 000084 */ 		return (function () {
/* 000084 */ 			var __accu0__ = self;
/* 000084 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000084 */ 		}) ();
/* 000084 */ 	});},
/* 000087 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000087 */ 		if (arguments.length) {
/* 000087 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000087 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000087 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000087 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000087 */ 					switch (__attrib0__) {
/* 000087 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000087 */ 					}
/* 000087 */ 				}
/* 000087 */ 			}
/* 000087 */ 		}
/* 000087 */ 		else {
/* 000087 */ 		}
/* 000088 */ 		var render_context = (function () {
/* 000088 */ 			var __accu0__ = self;
/* 000088 */ 			return __call__ (__accu0__._ensure_render_context, __accu0__, render_context);
/* 000088 */ 		}) ();
/* 000089 */ 		if (__t__ ((function () {
/* 000089 */ 			var __accu0__ = node;
/* 000089 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000089 */ 		}) ())) {
/* 000090 */ 			return (function () {
/* 000090 */ 				var __accu0__ = self;
/* 000090 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000090 */ 			}) ();
/* 000090 */ 		}
/* 000091 */ 		if (__t__ ((function () {
/* 000091 */ 			var __accu0__ = node;
/* 000091 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000091 */ 		}) ())) {
/* 000092 */ 			return (function () {
/* 000092 */ 				var __accu0__ = self;
/* 000092 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000092 */ 			}) ();
/* 000092 */ 		}
/* 000093 */ 		if (__t__ ((function () {
/* 000093 */ 			var __accu0__ = node;
/* 000093 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000093 */ 		}) ())) {
/* 000094 */ 			return (function () {
/* 000094 */ 				var __accu0__ = self;
/* 000094 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000094 */ 			}) ();
/* 000094 */ 		}
/* 000095 */ 		if (__t__ ((function () {
/* 000095 */ 			var __accu0__ = node;
/* 000095 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000095 */ 		}) ())) {
/* 000096 */ 			return (function () {
/* 000096 */ 				var __accu0__ = self;
/* 000096 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000096 */ 			}) ();
/* 000096 */ 		}
/* 000097 */ 		if (__t__ ((function () {
/* 000097 */ 			var __accu0__ = node;
/* 000097 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000097 */ 		}) ())) {
/* 000098 */ 			return (function () {
/* 000098 */ 				var __accu0__ = self;
/* 000098 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000098 */ 			}) ();
/* 000098 */ 		}
/* 000099 */ 		if (__t__ ((function () {
/* 000099 */ 			var __accu0__ = node;
/* 000099 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000099 */ 		}) ())) {
/* 000100 */ 			return (function () {
/* 000100 */ 				var __accu0__ = self;
/* 000100 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000101 */ 		if (__t__ ((function () {
/* 000101 */ 			var __accu0__ = node;
/* 000101 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000101 */ 		}) ())) {
/* 000102 */ 			return (function () {
/* 000102 */ 				var __accu0__ = self;
/* 000102 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000102 */ 			}) ();
/* 000102 */ 		}
/* 000104 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000104 */ 		__except0__.__cause__ = null;
/* 000104 */ 		throw __except0__;
/* 000104 */ 	});},
/* 000107 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000107 */ 		if (arguments.length) {
/* 000107 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000107 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000107 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000107 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000107 */ 					switch (__attrib0__) {
/* 000107 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000107 */ 					}
/* 000107 */ 				}
/* 000107 */ 			}
/* 000107 */ 		}
/* 000107 */ 		else {
/* 000107 */ 		}
/* 000108 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000109 */ 			var chars_value = node.llm_chars_value;
/* 000109 */ 		}
/* 000110 */ 		else {
/* 000111 */ 			var chars_value = null;
/* 000111 */ 		}
/* 000112 */ 		if (__t__ (chars_value === null)) {
/* 000114 */ 			var chars_value = node.chars;
/* 000114 */ 		}
/* 000115 */ 		return (function () {
/* 000115 */ 			var __accu0__ = self;
/* 000115 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value);
/* 000115 */ 		}) ();
/* 000115 */ 	});},
/* 000117 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000117 */ 		if (arguments.length) {
/* 000117 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000117 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000117 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000117 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000117 */ 					switch (__attrib0__) {
/* 000117 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000117 */ 					}
/* 000117 */ 				}
/* 000117 */ 			}
/* 000117 */ 		}
/* 000117 */ 		else {
/* 000117 */ 		}
/* 000118 */ 		return '';
/* 000118 */ 	});},
/* 000120 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000120 */ 		if (arguments.length) {
/* 000120 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000120 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000120 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000120 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000120 */ 					switch (__attrib0__) {
/* 000120 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000120 */ 					}
/* 000120 */ 				}
/* 000120 */ 			}
/* 000120 */ 		}
/* 000120 */ 		else {
/* 000120 */ 		}
/* 000121 */ 		return (function () {
/* 000121 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000122 */ 				var __accu1__ = self;
/* 000122 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000122 */ 			}) ());
/* 000122 */ 		}) ();
/* 000122 */ 	});},
/* 000124 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000124 */ 		if (arguments.length) {
/* 000124 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000124 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000124 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000124 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000124 */ 					switch (__attrib0__) {
/* 000124 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000124 */ 					}
/* 000124 */ 				}
/* 000124 */ 			}
/* 000124 */ 		}
/* 000124 */ 		else {
/* 000124 */ 		}
/* 000125 */ 		return (function () {
/* 000125 */ 			var __accu0__ = self;
/* 000126 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000126 */ 				var __accu1__ = self;
/* 000126 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000126 */ 			}) ());
/* 000126 */ 		}) ();
/* 000126 */ 	});},
/* 000128 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000128 */ 		if (arguments.length) {
/* 000128 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000128 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000128 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000128 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000128 */ 					switch (__attrib0__) {
/* 000128 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000128 */ 					}
/* 000128 */ 				}
/* 000128 */ 			}
/* 000128 */ 		}
/* 000128 */ 		else {
/* 000128 */ 		}
/* 000129 */ 		return (function () {
/* 000129 */ 			var __accu0__ = self;
/* 000130 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000130 */ 				var __accu1__ = self;
/* 000130 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000130 */ 			}) ());
/* 000130 */ 		}) ();
/* 000130 */ 	});},
/* 000132 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000132 */ 		if (arguments.length) {
/* 000132 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000132 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000132 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000132 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000132 */ 					switch (__attrib0__) {
/* 000132 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000132 */ 					}
/* 000132 */ 				}
/* 000132 */ 			}
/* 000132 */ 		}
/* 000132 */ 		else {
/* 000132 */ 		}
/* 000133 */ 		return (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000134 */ 				var __accu1__ = self;
/* 000134 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000134 */ 			}) ());
/* 000134 */ 		}) ();
/* 000134 */ 	});},
/* 000136 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000136 */ 		if (arguments.length) {
/* 000136 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000136 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000136 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000136 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000136 */ 					switch (__attrib0__) {
/* 000136 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000136 */ 					}
/* 000136 */ 				}
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 		else {
/* 000136 */ 		}
/* 000142 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000143 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000143 */ 			__except0__.__cause__ = null;
/* 000143 */ 			throw __except0__;
/* 000143 */ 		}
/* 000145 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000146 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000148 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000148 */ 					var __accu0__ = node;
/* 000148 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000148 */ 				}) ()));
/* 000148 */ 				__except0__.__cause__ = null;
/* 000148 */ 				throw __except0__;
/* 000148 */ 			}
/* 000148 */ 		}
/* 000151 */ 		return (function () {
/* 000151 */ 			var __accu0__ = self;
/* 000154 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000154 */ 				var __accu1__ = self;
/* 000154 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000154 */ 			}) ());
/* 000154 */ 		}) ();
/* 000154 */ 	});},
/* 000159 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000159 */ 		if (arguments.length) {
/* 000159 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000159 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000159 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000159 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000159 */ 					switch (__attrib0__) {
/* 000159 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000159 */ 					}
/* 000159 */ 				}
/* 000159 */ 			}
/* 000159 */ 		}
/* 000159 */ 		else {
/* 000159 */ 		}
/* 000159 */ 		assert (render_context !== null);
/* 000164 */ 		if (__t__ (llm_specinfo === null)) {
/* 000165 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000165 */ 			__except0__.__cause__ = null;
/* 000165 */ 			throw __except0__;
/* 000165 */ 		}
/* 000167 */ 		if (__t__ (llm_specinfo.delayed_render)) {
/* 000170 */ 			var is_first_pass = render_context.is_first_pass;
/* 000171 */ 			var delayed_key = null;
/* 000173 */ 			if (__t__ (is_first_pass)) {
/* 000174 */ 				(function () {
/* 000174 */ 					var __accu0__ = llm_specinfo;
/* 000174 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000174 */ 				}) ();
/* 000175 */ 				var delayed_key = (function () {
/* 000175 */ 					var __accu0__ = render_context;
/* 000175 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000175 */ 				}) ();
/* 000175 */ 			}
/* 000177 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000180 */ 				return (function () {
/* 000180 */ 					var __accu0__ = self;
/* 000180 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000180 */ 				}) ();
/* 000180 */ 			}
/* 000181 */ 			else if (__t__ (is_first_pass)) {
/* 000183 */ 				(function () {
/* 000183 */ 					var __accu0__ = llm_specinfo;
/* 000183 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000183 */ 				}) ();
/* 000185 */ 				return (function () {
/* 000185 */ 					var __accu0__ = self;
/* 000185 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000185 */ 				}) ();
/* 000185 */ 			}
/* 000186 */ 			else {
/* 000186 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000190 */ 				return (function () {
/* 000190 */ 					var __accu0__ = render_context;
/* 000190 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000190 */ 				}) ();
/* 000190 */ 			}
/* 000190 */ 		}
/* 000195 */ 		var value = (function () {
/* 000195 */ 			var __accu0__ = llm_specinfo;
/* 000195 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000195 */ 		}) ();
/* 000196 */ 		return value;
/* 000196 */ 	});},
/* 000199 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000199 */ 		if (arguments.length) {
/* 000199 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000199 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000199 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000199 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000199 */ 					switch (__attrib0__) {
/* 000199 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000199 */ 					}
/* 000199 */ 				}
/* 000199 */ 			}
/* 000199 */ 		}
/* 000199 */ 		else {
/* 000199 */ 		}
/* 000200 */ 		return (function () {
/* 000200 */ 			var __accu0__ = self;
/* 000203 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000203 */ 				var __accu1__ = self;
/* 000203 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000203 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000203 */ 		}) ();
/* 000203 */ 	});},
/* 000209 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000209 */ 		var environmentname = null;
/* 000209 */ 		var target_id = null;
/* 000209 */ 		if (arguments.length) {
/* 000209 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000209 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000209 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000209 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000209 */ 					switch (__attrib0__) {
/* 000209 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000209 */ 					}
/* 000209 */ 				}
/* 000209 */ 			}
/* 000209 */ 		}
/* 000209 */ 		else {
/* 000209 */ 		}
/* 000215 */ 		var rendered = (function () {
/* 000215 */ 			var __accu0__ = self;
/* 000216 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000216 */ 				var __accu1__ = nodelist;
/* 000216 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000216 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({annotations: ['{}-math'.format (displaytype)], target_id: target_id}));
/* 000216 */ 		}) ();
/* 000220 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000221 */ 			return rendered;
/* 000221 */ 		}
/* 000222 */ 		return rendered;
/* 000222 */ 	});},
/* 000229 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000229 */ 		if (arguments.length) {
/* 000229 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000229 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000229 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000229 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000229 */ 					switch (__attrib0__) {
/* 000229 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000229 */ 					}
/* 000229 */ 				}
/* 000229 */ 			}
/* 000229 */ 		}
/* 000229 */ 		else {
/* 000229 */ 		}
/* 000231 */ 		var rendered_blocks = [];
/* 000233 */ 		var __iterable0__ = node_blocks;
/* 000233 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000233 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000234 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000235 */ 				(function () {
/* 000235 */ 					var __accu0__ = rendered_blocks;
/* 000235 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000235 */ 						var __accu1__ = self;
/* 000235 */ 						return __call__ (__accu1__.render_build_paragraph, __accu1__, block, render_context);
/* 000235 */ 					}) ());
/* 000235 */ 				}) ();
/* 000235 */ 			}
/* 000236 */ 			else {
/* 000237 */ 				(function () {
/* 000237 */ 					var __accu0__ = rendered_blocks;
/* 000237 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000237 */ 						var __accu1__ = self;
/* 000237 */ 						return __call__ (__accu1__.render_node, __accu1__, block, render_context);
/* 000237 */ 					}) ());
/* 000237 */ 				}) ();
/* 000237 */ 			}
/* 000237 */ 		}
/* 000239 */ 		return (function () {
/* 000239 */ 			var __accu0__ = self;
/* 000239 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks);
/* 000239 */ 		}) ();
/* 000239 */ 	});},
/* 000242 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000246 */ 		return (function () {
/* 000246 */ 			var __accu0__ = self;
/* 000246 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000246 */ 		}) ();
/* 000246 */ 	});},
/* 000248 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000248 */ 		if (arguments.length) {
/* 000248 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000248 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000248 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000248 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000248 */ 					switch (__attrib0__) {
/* 000248 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000248 */ 					}
/* 000248 */ 				}
/* 000248 */ 			}
/* 000248 */ 		}
/* 000248 */ 		else {
/* 000248 */ 		}
/* 000249 */ 		return (function () {
/* 000249 */ 			var __accu0__ = self;
/* 000249 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000249 */ 				var __accu1__ = [];
/* 000249 */ 				var __iterable0__ = nodelist;
/* 000249 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000250 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000250 */ 					(function () {
/* 000250 */ 						var __accu2__ = __accu1__;
/* 000249 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000249 */ 							var __accu3__ = self;
/* 000249 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000249 */ 						}) ());
/* 000249 */ 					}) ();
/* 000249 */ 				}
/* 000249 */ 				return __accu1__;
/* 000249 */ 			}) ());
/* 000249 */ 		}) ();
/* 000249 */ 	});},
/* 000253 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000253 */ 		if (arguments.length) {
/* 000253 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000253 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000253 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000253 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000253 */ 					switch (__attrib0__) {
/* 000253 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000253 */ 					}
/* 000253 */ 				}
/* 000253 */ 			}
/* 000253 */ 		}
/* 000253 */ 		else {
/* 000253 */ 		}
/* 000257 */ 		return (function () {
/* 000257 */ 			var __accu0__ = '';
/* 000257 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000257 */ 		}) ();
/* 000257 */ 	});},
/* 000260 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000268 */ 		return (function () {
/* 000268 */ 			var __accu0__ = '\n\n';
/* 000268 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000268 */ 		}) ();
/* 000268 */ 	});},
/* 000274 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000274 */ 		var annotations = null;
/* 000274 */ 		var target_id = null;
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000280 */ 		return content;
/* 000280 */ 	});},
/* 000286 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000297 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000297 */ 		__except0__.__cause__ = null;
/* 000297 */ 		throw __except0__;
/* 000297 */ 	});},
/* 000302 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000302 */ 		if (arguments.length) {
/* 000302 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000302 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000302 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000302 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000302 */ 					switch (__attrib0__) {
/* 000302 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 			}
/* 000302 */ 		}
/* 000302 */ 		else {
/* 000302 */ 		}
/* 000303 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000303 */ 		__except0__.__cause__ = null;
/* 000303 */ 		throw __except0__;
/* 000303 */ 	});},
/* 000305 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000305 */ 		if (arguments.length) {
/* 000305 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000305 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000305 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000305 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000305 */ 					switch (__attrib0__) {
/* 000305 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000305 */ 					}
/* 000305 */ 				}
/* 000305 */ 			}
/* 000305 */ 		}
/* 000305 */ 		else {
/* 000305 */ 		}
/* 000306 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000306 */ 		__except0__.__cause__ = null;
/* 000306 */ 		throw __except0__;
/* 000306 */ 	});},
/* 000308 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000309 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000309 */ 		__except0__.__cause__ = null;
/* 000309 */ 		throw __except0__;
/* 000309 */ 	});},
/* 000311 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000311 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000311 */ 			var annotations = null;
/* 000311 */ 		};
/* 000311 */ 		if (arguments.length) {
/* 000311 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000311 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000311 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000311 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000311 */ 					switch (__attrib0__) {
/* 000311 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000311 */ 					}
/* 000311 */ 				}
/* 000311 */ 			}
/* 000311 */ 		}
/* 000311 */ 		else {
/* 000311 */ 		}
/* 000312 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000312 */ 		__except0__.__cause__ = null;
/* 000312 */ 		throw __except0__;
/* 000312 */ 	});},
/* 000314 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 					}
/* 000314 */ 				}
/* 000314 */ 			}
/* 000314 */ 		}
/* 000314 */ 		else {
/* 000314 */ 		}
/* 000315 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000315 */ 		__except0__.__cause__ = null;
/* 000315 */ 		throw __except0__;
/* 000315 */ 	});},
/* 000317 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000318 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000318 */ 		__except0__.__cause__ = null;
/* 000318 */ 		throw __except0__;
/* 000318 */ 	});},
/* 000320 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000320 */ 		var target_id_generator = null;
/* 000320 */ 		var annotations = null;
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000322 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000322 */ 		__except0__.__cause__ = null;
/* 000322 */ 		throw __except0__;
/* 000322 */ 	});},
/* 000324 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000324 */ 		var heading_level = 1;
/* 000324 */ 		var inline_heading = false;
/* 000324 */ 		var target_id = null;
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 			}
/* 000324 */ 		}
/* 000324 */ 		else {
/* 000324 */ 		}
/* 000326 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000326 */ 		__except0__.__cause__ = null;
/* 000326 */ 		throw __except0__;
/* 000326 */ 	});},
/* 000328 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000328 */ 		var annotations = null;
/* 000328 */ 		var target_id = null;
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000329 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000329 */ 		__except0__.__cause__ = null;
/* 000329 */ 		throw __except0__;
/* 000329 */ 	});},
/* 000331 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000331 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000331 */ 			var annotations = null;
/* 000331 */ 		};
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000345 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000345 */ 		__except0__.__cause__ = null;
/* 000345 */ 		throw __except0__;
/* 000345 */ 	});},
/* 000351 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000352 */ 		__except0__.__cause__ = null;
/* 000352 */ 		throw __except0__;
/* 000352 */ 	});},
/* 000354 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000355 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000355 */ 		__except0__.__cause__ = null;
/* 000355 */ 		throw __except0__;
/* 000355 */ 	});},
/* 000357 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000357 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000357 */ 			var target_id = null;
/* 000357 */ 		};
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000358 */ 		__except0__.__cause__ = null;
/* 000358 */ 		throw __except0__;
/* 000358 */ 	});},
/* 000365 */ 	get _ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000366 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000366 */ 	});}
/* 000366 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map