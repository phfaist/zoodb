/* 000001 */ // Transcrypt'ed from Python, 2022-09-01 16:22:58
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
/* 000034 */ 				// pass;
/* 000037 */ 				__except0__.__cause__ = null;
/* 000037 */ 				throw __except0__;
/* 000037 */ 			}
/* 000037 */ 			else {
/* 000037 */ 				throw __except0__;
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 	});},
/* 000039 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000039 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000039 */ 			var is_block_level = null;
/* 000039 */ 		};
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000054 */ 		if (__t__ (nodelist === null)) {
/* 000055 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000055 */ 			__except0__.__cause__ = null;
/* 000055 */ 			throw __except0__;
/* 000055 */ 		}
/* 000057 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'llm_is_block_level'))))) {
/* 000058 */ 			// pass;
/* 000063 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute');
/* 000063 */ 			__except0__.__cause__ = null;
/* 000063 */ 			throw __except0__;
/* 000063 */ 		}
/* 000066 */ 		if (__t__ (is_block_level === null)) {
/* 000067 */ 			var is_block_level = nodelist.llm_is_block_level;
/* 000067 */ 		}
/* 000069 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.llm_is_block_level)) {
/* 000070 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000070 */ 			__except0__.__cause__ = null;
/* 000070 */ 			throw __except0__;
/* 000070 */ 		}
/* 000075 */ 		if (__t__ (is_block_level)) {
/* 000081 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'llm_blocks'))) {
/* 000082 */ 				var node_blocks = nodelist.llm_blocks;
/* 000082 */ 			}
/* 000083 */ 			else {
/* 000084 */ 				var node_blocks = [nodelist];
/* 000084 */ 			}
/* 000086 */ 			return (function () {
/* 000086 */ 				var __accu0__ = self;
/* 000086 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000086 */ 			}) ();
/* 000086 */ 		}
/* 000088 */ 		return (function () {
/* 000088 */ 			var __accu0__ = self;
/* 000088 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000088 */ 		}) ();
/* 000088 */ 	});},
/* 000091 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000091 */ 		if (arguments.length) {
/* 000091 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000091 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000091 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000091 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000091 */ 					switch (__attrib0__) {
/* 000091 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000091 */ 					}
/* 000091 */ 				}
/* 000091 */ 			}
/* 000091 */ 		}
/* 000091 */ 		else {
/* 000091 */ 		}
/* 000092 */ 		var render_context = (function () {
/* 000092 */ 			var __accu0__ = self;
/* 000092 */ 			return __call__ (__accu0__._ensure_render_context, __accu0__, render_context);
/* 000092 */ 		}) ();
/* 000093 */ 		if (__t__ ((function () {
/* 000093 */ 			var __accu0__ = node;
/* 000093 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000093 */ 		}) ())) {
/* 000094 */ 			return (function () {
/* 000094 */ 				var __accu0__ = self;
/* 000094 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000094 */ 			}) ();
/* 000094 */ 		}
/* 000095 */ 		if (__t__ ((function () {
/* 000095 */ 			var __accu0__ = node;
/* 000095 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000095 */ 		}) ())) {
/* 000096 */ 			return (function () {
/* 000096 */ 				var __accu0__ = self;
/* 000096 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000096 */ 			}) ();
/* 000096 */ 		}
/* 000097 */ 		if (__t__ ((function () {
/* 000097 */ 			var __accu0__ = node;
/* 000097 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000097 */ 		}) ())) {
/* 000098 */ 			return (function () {
/* 000098 */ 				var __accu0__ = self;
/* 000098 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000098 */ 			}) ();
/* 000098 */ 		}
/* 000099 */ 		if (__t__ ((function () {
/* 000099 */ 			var __accu0__ = node;
/* 000099 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000099 */ 		}) ())) {
/* 000100 */ 			return (function () {
/* 000100 */ 				var __accu0__ = self;
/* 000100 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000101 */ 		if (__t__ ((function () {
/* 000101 */ 			var __accu0__ = node;
/* 000101 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000101 */ 		}) ())) {
/* 000102 */ 			return (function () {
/* 000102 */ 				var __accu0__ = self;
/* 000102 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000102 */ 			}) ();
/* 000102 */ 		}
/* 000103 */ 		if (__t__ ((function () {
/* 000103 */ 			var __accu0__ = node;
/* 000103 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000103 */ 		}) ())) {
/* 000104 */ 			return (function () {
/* 000104 */ 				var __accu0__ = self;
/* 000104 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000105 */ 		if (__t__ ((function () {
/* 000105 */ 			var __accu0__ = node;
/* 000105 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000105 */ 		}) ())) {
/* 000106 */ 			return (function () {
/* 000106 */ 				var __accu0__ = self;
/* 000106 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000106 */ 			}) ();
/* 000106 */ 		}
/* 000108 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000108 */ 		__except0__.__cause__ = null;
/* 000108 */ 		throw __except0__;
/* 000108 */ 	});},
/* 000111 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000111 */ 		if (arguments.length) {
/* 000111 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000111 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000111 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000111 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000111 */ 					switch (__attrib0__) {
/* 000111 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000111 */ 					}
/* 000111 */ 				}
/* 000111 */ 			}
/* 000111 */ 		}
/* 000111 */ 		else {
/* 000111 */ 		}
/* 000112 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000113 */ 			var chars_value = node.llm_chars_value;
/* 000113 */ 		}
/* 000114 */ 		else {
/* 000115 */ 			var chars_value = null;
/* 000115 */ 		}
/* 000116 */ 		if (__t__ (chars_value === null)) {
/* 000118 */ 			var chars_value = node.chars;
/* 000118 */ 		}
/* 000119 */ 		return (function () {
/* 000119 */ 			var __accu0__ = self;
/* 000119 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value);
/* 000119 */ 		}) ();
/* 000119 */ 	});},
/* 000121 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000121 */ 		if (arguments.length) {
/* 000121 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000121 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000121 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000121 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000121 */ 					switch (__attrib0__) {
/* 000121 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000121 */ 					}
/* 000121 */ 				}
/* 000121 */ 			}
/* 000121 */ 		}
/* 000121 */ 		else {
/* 000121 */ 		}
/* 000122 */ 		return '';
/* 000122 */ 	});},
/* 000124 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
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
/* 000126 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000126 */ 				var __accu1__ = self;
/* 000126 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000126 */ 			}) ());
/* 000126 */ 		}) ();
/* 000126 */ 	});},
/* 000128 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
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
/* 000132 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
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
/* 000136 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
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
/* 000137 */ 		return (function () {
/* 000137 */ 			var __accu0__ = self;
/* 000138 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000138 */ 				var __accu1__ = self;
/* 000138 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000138 */ 			}) ());
/* 000138 */ 		}) ();
/* 000138 */ 	});},
/* 000140 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000140 */ 		if (arguments.length) {
/* 000140 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000140 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000140 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000140 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000140 */ 					switch (__attrib0__) {
/* 000140 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000140 */ 					}
/* 000140 */ 				}
/* 000140 */ 			}
/* 000140 */ 		}
/* 000140 */ 		else {
/* 000140 */ 		}
/* 000146 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000147 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000147 */ 			__except0__.__cause__ = null;
/* 000147 */ 			throw __except0__;
/* 000147 */ 		}
/* 000149 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000150 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000152 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000152 */ 					var __accu0__ = node;
/* 000152 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000152 */ 				}) ()));
/* 000152 */ 				__except0__.__cause__ = null;
/* 000152 */ 				throw __except0__;
/* 000152 */ 			}
/* 000152 */ 		}
/* 000155 */ 		return (function () {
/* 000155 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000158 */ 				var __accu1__ = self;
/* 000158 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000158 */ 			}) ());
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000163 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000163 */ 		if (arguments.length) {
/* 000163 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000163 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000163 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000163 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000163 */ 					switch (__attrib0__) {
/* 000163 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000163 */ 					}
/* 000163 */ 				}
/* 000163 */ 			}
/* 000163 */ 		}
/* 000163 */ 		else {
/* 000163 */ 		}
/* 000163 */ 		assert (render_context !== null);
/* 000168 */ 		if (__t__ (llm_specinfo === null)) {
/* 000169 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000169 */ 			__except0__.__cause__ = null;
/* 000169 */ 			throw __except0__;
/* 000169 */ 		}
/* 000171 */ 		if (__t__ (llm_specinfo.delayed_render)) {
/* 000174 */ 			var is_first_pass = render_context.is_first_pass;
/* 000175 */ 			var delayed_key = null;
/* 000177 */ 			if (__t__ (is_first_pass)) {
/* 000178 */ 				(function () {
/* 000178 */ 					var __accu0__ = llm_specinfo;
/* 000178 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000178 */ 				}) ();
/* 000179 */ 				var delayed_key = (function () {
/* 000179 */ 					var __accu0__ = render_context;
/* 000179 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000179 */ 				}) ();
/* 000179 */ 			}
/* 000181 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000184 */ 				return (function () {
/* 000184 */ 					var __accu0__ = self;
/* 000184 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000184 */ 				}) ();
/* 000184 */ 			}
/* 000185 */ 			else if (__t__ (is_first_pass)) {
/* 000187 */ 				(function () {
/* 000187 */ 					var __accu0__ = llm_specinfo;
/* 000187 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000187 */ 				}) ();
/* 000189 */ 				return (function () {
/* 000189 */ 					var __accu0__ = self;
/* 000189 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000189 */ 				}) ();
/* 000189 */ 			}
/* 000190 */ 			else {
/* 000190 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000194 */ 				return (function () {
/* 000194 */ 					var __accu0__ = render_context;
/* 000194 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000194 */ 				}) ();
/* 000194 */ 			}
/* 000194 */ 		}
/* 000199 */ 		var value = (function () {
/* 000199 */ 			var __accu0__ = llm_specinfo;
/* 000199 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000199 */ 		}) ();
/* 000200 */ 		return value;
/* 000200 */ 	});},
/* 000203 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000203 */ 		if (arguments.length) {
/* 000203 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000203 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000203 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000203 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000203 */ 					switch (__attrib0__) {
/* 000203 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000203 */ 					}
/* 000203 */ 				}
/* 000203 */ 			}
/* 000203 */ 		}
/* 000203 */ 		else {
/* 000203 */ 		}
/* 000204 */ 		return (function () {
/* 000204 */ 			var __accu0__ = self;
/* 000207 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000207 */ 				var __accu1__ = self;
/* 000207 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000207 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000207 */ 		}) ();
/* 000207 */ 	});},
/* 000213 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000213 */ 		var environmentname = null;
/* 000213 */ 		var target_id = null;
/* 000213 */ 		if (arguments.length) {
/* 000213 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000213 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000213 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000213 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000213 */ 					switch (__attrib0__) {
/* 000213 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000213 */ 					}
/* 000213 */ 				}
/* 000213 */ 			}
/* 000213 */ 		}
/* 000213 */ 		else {
/* 000213 */ 		}
/* 000219 */ 		var rendered = (function () {
/* 000219 */ 			var __accu0__ = self;
/* 000220 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000220 */ 				var __accu1__ = nodelist;
/* 000220 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000220 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({annotations: ['{}-math'.format (displaytype)], target_id: target_id}));
/* 000220 */ 		}) ();
/* 000224 */ 		if (__t__ (__eq__ (displaytype, 'display'))) {
/* 000225 */ 			return rendered;
/* 000225 */ 		}
/* 000226 */ 		return rendered;
/* 000226 */ 	});},
/* 000233 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000233 */ 		if (arguments.length) {
/* 000233 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000233 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000233 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000233 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000233 */ 					switch (__attrib0__) {
/* 000233 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000233 */ 					}
/* 000233 */ 				}
/* 000233 */ 			}
/* 000233 */ 		}
/* 000233 */ 		else {
/* 000233 */ 		}
/* 000235 */ 		var rendered_blocks = [];
/* 000237 */ 		var __iterable0__ = node_blocks;
/* 000237 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000237 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000238 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000239 */ 				(function () {
/* 000239 */ 					var __accu0__ = rendered_blocks;
/* 000239 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000239 */ 						var __accu1__ = self;
/* 000239 */ 						return __call__ (__accu1__.render_build_paragraph, __accu1__, block, render_context);
/* 000239 */ 					}) ());
/* 000239 */ 				}) ();
/* 000239 */ 			}
/* 000240 */ 			else {
/* 000241 */ 				(function () {
/* 000241 */ 					var __accu0__ = rendered_blocks;
/* 000241 */ 					return __call__ (__accu0__.append, __accu0__, (function () {
/* 000241 */ 						var __accu1__ = self;
/* 000241 */ 						return __call__ (__accu1__.render_node, __accu1__, block, render_context);
/* 000241 */ 					}) ());
/* 000241 */ 				}) ();
/* 000241 */ 			}
/* 000241 */ 		}
/* 000243 */ 		return (function () {
/* 000243 */ 			var __accu0__ = self;
/* 000243 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks);
/* 000243 */ 		}) ();
/* 000243 */ 	});},
/* 000246 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000250 */ 		return (function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000252 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		return (function () {
/* 000253 */ 			var __accu0__ = self;
/* 000253 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000253 */ 				var __accu1__ = [];
/* 000253 */ 				var __iterable0__ = nodelist;
/* 000253 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000254 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000254 */ 					(function () {
/* 000254 */ 						var __accu2__ = __accu1__;
/* 000253 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000253 */ 							var __accu3__ = self;
/* 000253 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000253 */ 						}) ());
/* 000253 */ 					}) ();
/* 000253 */ 				}
/* 000253 */ 				return __accu1__;
/* 000253 */ 			}) ());
/* 000253 */ 		}) ();
/* 000253 */ 	});},
/* 000257 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000257 */ 		if (arguments.length) {
/* 000257 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000257 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000257 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000257 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000257 */ 					switch (__attrib0__) {
/* 000257 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000257 */ 					}
/* 000257 */ 				}
/* 000257 */ 			}
/* 000257 */ 		}
/* 000257 */ 		else {
/* 000257 */ 		}
/* 000261 */ 		return (function () {
/* 000261 */ 			var __accu0__ = '';
/* 000261 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000261 */ 		}) ();
/* 000261 */ 	});},
/* 000264 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000264 */ 		if (arguments.length) {
/* 000264 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000264 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000264 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000264 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000264 */ 					switch (__attrib0__) {
/* 000264 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000264 */ 					}
/* 000264 */ 				}
/* 000264 */ 			}
/* 000264 */ 		}
/* 000264 */ 		else {
/* 000264 */ 		}
/* 000272 */ 		return (function () {
/* 000272 */ 			var __accu0__ = '\n\n';
/* 000272 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000272 */ 		}) ();
/* 000272 */ 	});},
/* 000278 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000278 */ 		var annotations = null;
/* 000278 */ 		var target_id = null;
/* 000278 */ 		if (arguments.length) {
/* 000278 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000278 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000278 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000278 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000278 */ 					switch (__attrib0__) {
/* 000278 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000278 */ 					}
/* 000278 */ 				}
/* 000278 */ 			}
/* 000278 */ 		}
/* 000278 */ 		else {
/* 000278 */ 		}
/* 000284 */ 		return content;
/* 000284 */ 	});},
/* 000290 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000290 */ 		if (arguments.length) {
/* 000290 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000290 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000290 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000290 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000290 */ 					switch (__attrib0__) {
/* 000290 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000290 */ 					}
/* 000290 */ 				}
/* 000290 */ 			}
/* 000290 */ 		}
/* 000290 */ 		else {
/* 000290 */ 		}
/* 000301 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000301 */ 		__except0__.__cause__ = null;
/* 000301 */ 		throw __except0__;
/* 000301 */ 	});},
/* 000306 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000307 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000307 */ 		__except0__.__cause__ = null;
/* 000307 */ 		throw __except0__;
/* 000307 */ 	});},
/* 000309 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000310 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000310 */ 		__except0__.__cause__ = null;
/* 000310 */ 		throw __except0__;
/* 000310 */ 	});},
/* 000312 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000312 */ 		if (arguments.length) {
/* 000312 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000312 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000312 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000312 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000312 */ 					switch (__attrib0__) {
/* 000312 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000312 */ 					}
/* 000312 */ 				}
/* 000312 */ 			}
/* 000312 */ 		}
/* 000312 */ 		else {
/* 000312 */ 		}
/* 000313 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000313 */ 		__except0__.__cause__ = null;
/* 000313 */ 		throw __except0__;
/* 000313 */ 	});},
/* 000315 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000315 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000315 */ 			var annotations = null;
/* 000315 */ 		};
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000316 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000316 */ 		__except0__.__cause__ = null;
/* 000316 */ 		throw __except0__;
/* 000316 */ 	});},
/* 000318 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000318 */ 		if (arguments.length) {
/* 000318 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000318 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000318 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000318 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000318 */ 					switch (__attrib0__) {
/* 000318 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000318 */ 					}
/* 000318 */ 				}
/* 000318 */ 			}
/* 000318 */ 		}
/* 000318 */ 		else {
/* 000318 */ 		}
/* 000319 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000319 */ 		__except0__.__cause__ = null;
/* 000319 */ 		throw __except0__;
/* 000319 */ 	});},
/* 000321 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000321 */ 		if (arguments.length) {
/* 000321 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000321 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000321 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000321 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000321 */ 					switch (__attrib0__) {
/* 000321 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 			}
/* 000321 */ 		}
/* 000321 */ 		else {
/* 000321 */ 		}
/* 000322 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000322 */ 		__except0__.__cause__ = null;
/* 000322 */ 		throw __except0__;
/* 000322 */ 	});},
/* 000324 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000324 */ 		var target_id_generator = null;
/* 000324 */ 		var annotations = null;
/* 000324 */ 		if (arguments.length) {
/* 000324 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000324 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000324 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000324 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000324 */ 					switch (__attrib0__) {
/* 000324 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000324 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
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
/* 000328 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000328 */ 		var heading_level = 1;
/* 000328 */ 		var inline_heading = false;
/* 000328 */ 		var target_id = null;
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 					}
/* 000328 */ 				}
/* 000328 */ 			}
/* 000328 */ 		}
/* 000328 */ 		else {
/* 000328 */ 		}
/* 000330 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000330 */ 		__except0__.__cause__ = null;
/* 000330 */ 		throw __except0__;
/* 000330 */ 	});},
/* 000332 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000332 */ 		var annotations = null;
/* 000332 */ 		var target_id = null;
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000333 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000333 */ 		__except0__.__cause__ = null;
/* 000333 */ 		throw __except0__;
/* 000333 */ 	});},
/* 000335 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000335 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000335 */ 			var annotations = null;
/* 000335 */ 		};
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000349 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000349 */ 		__except0__.__cause__ = null;
/* 000349 */ 		throw __except0__;
/* 000349 */ 	});},
/* 000355 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000355 */ 		if (arguments.length) {
/* 000355 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000355 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000355 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000355 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000355 */ 					switch (__attrib0__) {
/* 000355 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000355 */ 					}
/* 000355 */ 				}
/* 000355 */ 			}
/* 000355 */ 		}
/* 000355 */ 		else {
/* 000355 */ 		}
/* 000356 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000356 */ 		__except0__.__cause__ = null;
/* 000356 */ 		throw __except0__;
/* 000356 */ 	});},
/* 000358 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000359 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000359 */ 		__except0__.__cause__ = null;
/* 000359 */ 		throw __except0__;
/* 000359 */ 	});},
/* 000366 */ 	get _ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000367 */ 	});}
/* 000367 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map