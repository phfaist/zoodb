/* 000001 */ // Transcrypt'ed from Python, 2023-01-02 19:15:54
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
/* 000027 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000027 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000027 */ 			var config = null;
/* 000027 */ 		};
/* 000027 */ 		if (arguments.length) {
/* 000027 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000027 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000027 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000027 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000027 */ 					switch (__attrib0__) {
/* 000027 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000027 */ 					}
/* 000027 */ 				}
/* 000027 */ 			}
/* 000027 */ 		}
/* 000027 */ 		else {
/* 000027 */ 		}
/* 000028 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000030 */ 		if (__t__ (config !== null)) {
/* 000031 */ 			var __iterable0__ = (function () {
/* 000031 */ 				var __accu0__ = config;
/* 000031 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000031 */ 			}) ();
/* 000031 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000031 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000031 */ 				var k = __left0__ [0];
/* 000031 */ 				var v = __left0__ [1];
/* 000032 */ 				__call__ (setattr, null, self, k, v);
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 	});},
/* 000035 */ 	get render_fragment () {return __get__ (this, function (self, llm_fragment, render_context, is_block_level) {
/* 000035 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000035 */ 			var is_block_level = null;
/* 000035 */ 		};
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'llm_fragment': var llm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		try {
/* 000037 */ 			return (function () {
/* 000037 */ 				var __accu0__ = self;
/* 000038 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, llm_fragment.nodes, (function () {
/* 000038 */ 					var __accu1__ = self;
/* 000038 */ 					return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000038 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000038 */ 			}) ();
/* 000038 */ 		}
/* 000038 */ 		catch (__except0__) {
/* 000038 */ 			if (isinstance (__except0__, Exception)) {
/* 000038 */ 				var e = __except0__;
/* 000041 */ 				// pass;
/* 000044 */ 				__except0__.__cause__ = null;
/* 000044 */ 				throw __except0__;
/* 000044 */ 			}
/* 000044 */ 			else {
/* 000044 */ 				throw __except0__;
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 	});},
/* 000046 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000046 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000046 */ 			var is_block_level = null;
/* 000046 */ 		};
/* 000046 */ 		if (arguments.length) {
/* 000046 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000046 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000046 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000046 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000046 */ 					switch (__attrib0__) {
/* 000046 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000046 */ 					}
/* 000046 */ 				}
/* 000046 */ 			}
/* 000046 */ 		}
/* 000046 */ 		else {
/* 000046 */ 		}
/* 000061 */ 		if (__t__ (nodelist === null)) {
/* 000062 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000062 */ 			__except0__.__cause__ = null;
/* 000062 */ 			throw __except0__;
/* 000062 */ 		}
/* 000064 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'llm_is_block_level'))))) {
/* 000065 */ 			// pass;
/* 000070 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute');
/* 000070 */ 			__except0__.__cause__ = null;
/* 000070 */ 			throw __except0__;
/* 000070 */ 		}
/* 000073 */ 		if (__t__ (is_block_level === null)) {
/* 000074 */ 			var is_block_level = nodelist.llm_is_block_level;
/* 000074 */ 		}
/* 000076 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.llm_is_block_level)) {
/* 000077 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000077 */ 			__except0__.__cause__ = null;
/* 000077 */ 			throw __except0__;
/* 000077 */ 		}
/* 000082 */ 		if (__t__ (is_block_level)) {
/* 000088 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'llm_blocks'))) {
/* 000089 */ 				var node_blocks = nodelist.llm_blocks;
/* 000089 */ 			}
/* 000090 */ 			else {
/* 000091 */ 				var node_blocks = [nodelist];
/* 000091 */ 			}
/* 000093 */ 			return (function () {
/* 000093 */ 				var __accu0__ = self;
/* 000093 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000093 */ 			}) ();
/* 000093 */ 		}
/* 000095 */ 		return (function () {
/* 000095 */ 			var __accu0__ = self;
/* 000095 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000095 */ 		}) ();
/* 000095 */ 	});},
/* 000098 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000098 */ 		if (arguments.length) {
/* 000098 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000098 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000098 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000098 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000098 */ 					switch (__attrib0__) {
/* 000098 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000098 */ 					}
/* 000098 */ 				}
/* 000098 */ 			}
/* 000098 */ 		}
/* 000098 */ 		else {
/* 000098 */ 		}
/* 000099 */ 		var render_context = (function () {
/* 000099 */ 			var __accu0__ = self;
/* 000099 */ 			return __call__ (__accu0__._ensure_render_context, __accu0__, render_context);
/* 000099 */ 		}) ();
/* 000100 */ 		if (__t__ ((function () {
/* 000100 */ 			var __accu0__ = node;
/* 000100 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000100 */ 		}) ())) {
/* 000101 */ 			return (function () {
/* 000101 */ 				var __accu0__ = self;
/* 000101 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000101 */ 			}) ();
/* 000101 */ 		}
/* 000102 */ 		if (__t__ ((function () {
/* 000102 */ 			var __accu0__ = node;
/* 000102 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000102 */ 		}) ())) {
/* 000103 */ 			return (function () {
/* 000103 */ 				var __accu0__ = self;
/* 000103 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000103 */ 			}) ();
/* 000103 */ 		}
/* 000104 */ 		if (__t__ ((function () {
/* 000104 */ 			var __accu0__ = node;
/* 000104 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000104 */ 		}) ())) {
/* 000105 */ 			return (function () {
/* 000105 */ 				var __accu0__ = self;
/* 000105 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000106 */ 		if (__t__ ((function () {
/* 000106 */ 			var __accu0__ = node;
/* 000106 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000106 */ 		}) ())) {
/* 000107 */ 			return (function () {
/* 000107 */ 				var __accu0__ = self;
/* 000107 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000107 */ 			}) ();
/* 000107 */ 		}
/* 000108 */ 		if (__t__ ((function () {
/* 000108 */ 			var __accu0__ = node;
/* 000108 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000108 */ 		}) ())) {
/* 000109 */ 			return (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000110 */ 		if (__t__ ((function () {
/* 000110 */ 			var __accu0__ = node;
/* 000110 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000110 */ 		}) ())) {
/* 000111 */ 			return (function () {
/* 000111 */ 				var __accu0__ = self;
/* 000111 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000111 */ 			}) ();
/* 000111 */ 		}
/* 000112 */ 		if (__t__ ((function () {
/* 000112 */ 			var __accu0__ = node;
/* 000112 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000112 */ 		}) ())) {
/* 000113 */ 			return (function () {
/* 000113 */ 				var __accu0__ = self;
/* 000113 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000115 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000115 */ 		__except0__.__cause__ = null;
/* 000115 */ 		throw __except0__;
/* 000115 */ 	});},
/* 000118 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000118 */ 		if (arguments.length) {
/* 000118 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000118 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000118 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000118 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000118 */ 					switch (__attrib0__) {
/* 000118 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000118 */ 					}
/* 000118 */ 				}
/* 000118 */ 			}
/* 000118 */ 		}
/* 000118 */ 		else {
/* 000118 */ 		}
/* 000119 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000120 */ 			var chars_value = node.llm_chars_value;
/* 000120 */ 		}
/* 000121 */ 		else {
/* 000122 */ 			var chars_value = null;
/* 000122 */ 		}
/* 000123 */ 		if (__t__ (chars_value === null)) {
/* 000125 */ 			var chars_value = node.chars;
/* 000125 */ 		}
/* 000126 */ 		return (function () {
/* 000126 */ 			var __accu0__ = self;
/* 000126 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value);
/* 000126 */ 		}) ();
/* 000126 */ 	});},
/* 000128 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000129 */ 		return '';
/* 000129 */ 	});},
/* 000131 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000132 */ 		return (function () {
/* 000132 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000133 */ 				var __accu1__ = self;
/* 000133 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000133 */ 			}) ());
/* 000133 */ 		}) ();
/* 000133 */ 	});},
/* 000135 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000135 */ 		if (arguments.length) {
/* 000135 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000135 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000135 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000135 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000135 */ 					switch (__attrib0__) {
/* 000135 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000135 */ 					}
/* 000135 */ 				}
/* 000135 */ 			}
/* 000135 */ 		}
/* 000135 */ 		else {
/* 000135 */ 		}
/* 000136 */ 		return (function () {
/* 000136 */ 			var __accu0__ = self;
/* 000137 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000137 */ 				var __accu1__ = self;
/* 000137 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000137 */ 			}) ());
/* 000137 */ 		}) ();
/* 000137 */ 	});},
/* 000139 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000139 */ 		if (arguments.length) {
/* 000139 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000139 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000139 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000139 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000139 */ 					switch (__attrib0__) {
/* 000139 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000139 */ 					}
/* 000139 */ 				}
/* 000139 */ 			}
/* 000139 */ 		}
/* 000139 */ 		else {
/* 000139 */ 		}
/* 000140 */ 		return (function () {
/* 000140 */ 			var __accu0__ = self;
/* 000141 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000141 */ 				var __accu1__ = self;
/* 000141 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000141 */ 			}) ());
/* 000141 */ 		}) ();
/* 000141 */ 	});},
/* 000143 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000143 */ 		if (arguments.length) {
/* 000143 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000143 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000143 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000143 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000143 */ 					switch (__attrib0__) {
/* 000143 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000143 */ 					}
/* 000143 */ 				}
/* 000143 */ 			}
/* 000143 */ 		}
/* 000143 */ 		else {
/* 000143 */ 		}
/* 000144 */ 		return (function () {
/* 000144 */ 			var __accu0__ = self;
/* 000145 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000145 */ 				var __accu1__ = self;
/* 000145 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000145 */ 			}) ());
/* 000145 */ 		}) ();
/* 000145 */ 	});},
/* 000147 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000147 */ 		if (arguments.length) {
/* 000147 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000147 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000147 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000147 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000147 */ 					switch (__attrib0__) {
/* 000147 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000147 */ 					}
/* 000147 */ 				}
/* 000147 */ 			}
/* 000147 */ 		}
/* 000147 */ 		else {
/* 000147 */ 		}
/* 000153 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000154 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000154 */ 			__except0__.__cause__ = null;
/* 000154 */ 			throw __except0__;
/* 000154 */ 		}
/* 000156 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000157 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000159 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000159 */ 					var __accu0__ = node;
/* 000159 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000159 */ 				}) ()));
/* 000159 */ 				__except0__.__cause__ = null;
/* 000159 */ 				throw __except0__;
/* 000159 */ 			}
/* 000159 */ 		}
/* 000162 */ 		return (function () {
/* 000162 */ 			var __accu0__ = self;
/* 000165 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000165 */ 				var __accu1__ = self;
/* 000165 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000165 */ 			}) ());
/* 000165 */ 		}) ();
/* 000165 */ 	});},
/* 000170 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000170 */ 		if (arguments.length) {
/* 000170 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000170 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000170 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000170 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000170 */ 					switch (__attrib0__) {
/* 000170 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000170 */ 					}
/* 000170 */ 				}
/* 000170 */ 			}
/* 000170 */ 		}
/* 000170 */ 		else {
/* 000170 */ 		}
/* 000170 */ 		assert (render_context !== null);
/* 000175 */ 		if (__t__ (llm_specinfo === null)) {
/* 000176 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000176 */ 			__except0__.__cause__ = null;
/* 000176 */ 			throw __except0__;
/* 000176 */ 		}
/* 000178 */ 		var is_delayed_render = (function () {
/* 000178 */ 			var __accu0__ = render_context;
/* 000178 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000178 */ 		}) ();
/* 000179 */ 		if (__t__ (is_delayed_render)) {
/* 000182 */ 			var is_first_pass = render_context.is_first_pass;
/* 000183 */ 			var delayed_key = null;
/* 000185 */ 			if (__t__ (is_first_pass)) {
/* 000186 */ 				(function () {
/* 000186 */ 					var __accu0__ = llm_specinfo;
/* 000186 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000186 */ 				}) ();
/* 000187 */ 				var delayed_key = (function () {
/* 000187 */ 					var __accu0__ = render_context;
/* 000187 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000187 */ 				}) ();
/* 000187 */ 			}
/* 000189 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000192 */ 				return (function () {
/* 000192 */ 					var __accu0__ = self;
/* 000192 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000192 */ 				}) ();
/* 000192 */ 			}
/* 000193 */ 			else if (__t__ (is_first_pass)) {
/* 000195 */ 				(function () {
/* 000195 */ 					var __accu0__ = llm_specinfo;
/* 000195 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000195 */ 				}) ();
/* 000197 */ 				return (function () {
/* 000197 */ 					var __accu0__ = self;
/* 000197 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000197 */ 				}) ();
/* 000197 */ 			}
/* 000198 */ 			else {
/* 000198 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000202 */ 				return (function () {
/* 000202 */ 					var __accu0__ = render_context;
/* 000202 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000202 */ 				}) ();
/* 000202 */ 			}
/* 000202 */ 		}
/* 000207 */ 		var value = (function () {
/* 000207 */ 			var __accu0__ = llm_specinfo;
/* 000207 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000207 */ 		}) ();
/* 000208 */ 		return value;
/* 000208 */ 	});},
/* 000210 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000210 */ 		if (arguments.length) {
/* 000210 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000210 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000210 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000210 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000210 */ 					switch (__attrib0__) {
/* 000210 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000210 */ 					}
/* 000210 */ 				}
/* 000210 */ 			}
/* 000210 */ 		}
/* 000210 */ 		else {
/* 000210 */ 		}
/* 000211 */ 		return (function () {
/* 000211 */ 			var __accu0__ = self;
/* 000214 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000214 */ 				var __accu1__ = self;
/* 000214 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000214 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000214 */ 		}) ();
/* 000214 */ 	});},
/* 000219 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000219 */ 		var environmentname = null;
/* 000219 */ 		var target_id = null;
/* 000219 */ 		if (arguments.length) {
/* 000219 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000219 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000219 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000219 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000219 */ 					switch (__attrib0__) {
/* 000219 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000219 */ 					}
/* 000219 */ 				}
/* 000219 */ 			}
/* 000219 */ 		}
/* 000219 */ 		else {
/* 000219 */ 		}
/* 000226 */ 		var rendered = (function () {
/* 000226 */ 			var __accu0__ = self;
/* 000227 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000227 */ 				var __accu1__ = nodelist;
/* 000227 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000227 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({annotations: ['{}-math'.format (displaytype)], target_id: target_id}));
/* 000227 */ 		}) ();
/* 000231 */ 		return rendered;
/* 000231 */ 	});},
/* 000238 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000238 */ 		if (arguments.length) {
/* 000238 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000238 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000238 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000238 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000238 */ 					switch (__attrib0__) {
/* 000238 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000238 */ 					}
/* 000238 */ 				}
/* 000238 */ 			}
/* 000238 */ 		}
/* 000238 */ 		else {
/* 000238 */ 		}
/* 000240 */ 		var rendered_blocks = [];
/* 000242 */ 		var __iterable0__ = node_blocks;
/* 000242 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000242 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000244 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000245 */ 				var para = (function () {
/* 000245 */ 					var __accu0__ = self;
/* 000245 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000245 */ 				}) ();
/* 000245 */ 			}
/* 000246 */ 			else {
/* 000247 */ 				var para = (function () {
/* 000247 */ 					var __accu0__ = self;
/* 000247 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000247 */ 				}) ();
/* 000247 */ 			}
/* 000249 */ 			(function () {
/* 000249 */ 				var __accu0__ = rendered_blocks;
/* 000249 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000249 */ 			}) ();
/* 000249 */ 		}
/* 000251 */ 		return (function () {
/* 000251 */ 			var __accu0__ = self;
/* 000251 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks);
/* 000251 */ 		}) ();
/* 000251 */ 	});},
/* 000254 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000254 */ 		if (arguments.length) {
/* 000254 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000254 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000254 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000254 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000254 */ 					switch (__attrib0__) {
/* 000254 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000254 */ 					}
/* 000254 */ 				}
/* 000254 */ 			}
/* 000254 */ 		}
/* 000254 */ 		else {
/* 000254 */ 		}
/* 000258 */ 		return (function () {
/* 000258 */ 			var __accu0__ = self;
/* 000258 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000258 */ 		}) ();
/* 000258 */ 	});},
/* 000260 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000261 */ 		return (function () {
/* 000261 */ 			var __accu0__ = self;
/* 000261 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000261 */ 				var __accu1__ = [];
/* 000261 */ 				var __iterable0__ = nodelist;
/* 000261 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000262 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000262 */ 					(function () {
/* 000262 */ 						var __accu2__ = __accu1__;
/* 000261 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000261 */ 							var __accu3__ = self;
/* 000261 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000261 */ 						}) ());
/* 000261 */ 					}) ();
/* 000261 */ 				}
/* 000261 */ 				return __accu1__;
/* 000261 */ 			}) ());
/* 000261 */ 		}) ();
/* 000261 */ 	});},
/* 000265 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000269 */ 		return (function () {
/* 000269 */ 			var __accu0__ = '';
/* 000269 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000272 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000272 */ 		if (arguments.length) {
/* 000272 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000272 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000272 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000272 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000272 */ 					switch (__attrib0__) {
/* 000272 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000272 */ 					}
/* 000272 */ 				}
/* 000272 */ 			}
/* 000272 */ 		}
/* 000272 */ 		else {
/* 000272 */ 		}
/* 000280 */ 		return (function () {
/* 000280 */ 			var __accu0__ = '\n\n';
/* 000280 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000280 */ 				var __accu1__ = [];
/* 000280 */ 				var __iterable0__ = content_list;
/* 000280 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000280 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000280 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000280 */ 						(function () {
/* 000280 */ 							var __accu2__ = __accu1__;
/* 000280 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000280 */ 						}) ();
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 				return __accu1__;
/* 000280 */ 			}) ());
/* 000280 */ 		}) ();
/* 000280 */ 	});},
/* 000286 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000286 */ 		var annotations = null;
/* 000286 */ 		var target_id = null;
/* 000286 */ 		if (arguments.length) {
/* 000286 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000286 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000286 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000286 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000286 */ 					switch (__attrib0__) {
/* 000286 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000286 */ 					}
/* 000286 */ 				}
/* 000286 */ 			}
/* 000286 */ 		}
/* 000286 */ 		else {
/* 000286 */ 		}
/* 000292 */ 		return content;
/* 000292 */ 	});},
/* 000298 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000309 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000309 */ 		__except0__.__cause__ = null;
/* 000309 */ 		throw __except0__;
/* 000309 */ 	});},
/* 000314 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000314 */ 		if (arguments.length) {
/* 000314 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000314 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000314 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000314 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000314 */ 					switch (__attrib0__) {
/* 000314 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000314 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
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
/* 000317 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
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
/* 000320 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000321 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000321 */ 		__except0__.__cause__ = null;
/* 000321 */ 		throw __except0__;
/* 000321 */ 	});},
/* 000323 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000323 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000323 */ 			var annotations = null;
/* 000323 */ 		};
/* 000323 */ 		if (arguments.length) {
/* 000323 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000323 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000323 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000323 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000323 */ 					switch (__attrib0__) {
/* 000323 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000323 */ 					}
/* 000323 */ 				}
/* 000323 */ 			}
/* 000323 */ 		}
/* 000323 */ 		else {
/* 000323 */ 		}
/* 000324 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000324 */ 		__except0__.__cause__ = null;
/* 000324 */ 		throw __except0__;
/* 000324 */ 	});},
/* 000326 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000327 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000327 */ 		__except0__.__cause__ = null;
/* 000327 */ 		throw __except0__;
/* 000327 */ 	});},
/* 000329 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000330 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000330 */ 		__except0__.__cause__ = null;
/* 000330 */ 		throw __except0__;
/* 000330 */ 	});},
/* 000332 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000332 */ 		var target_id_generator = null;
/* 000332 */ 		var annotations = null;
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 					}
/* 000332 */ 				}
/* 000332 */ 			}
/* 000332 */ 		}
/* 000332 */ 		else {
/* 000332 */ 		}
/* 000334 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000334 */ 		__except0__.__cause__ = null;
/* 000334 */ 		throw __except0__;
/* 000334 */ 	});},
/* 000336 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000336 */ 		var heading_level = 1;
/* 000336 */ 		var inline_heading = false;
/* 000336 */ 		var target_id = null;
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000338 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000338 */ 		__except0__.__cause__ = null;
/* 000338 */ 		throw __except0__;
/* 000338 */ 	});},
/* 000340 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000340 */ 		var annotations = null;
/* 000340 */ 		var target_id = null;
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 					}
/* 000340 */ 				}
/* 000340 */ 			}
/* 000340 */ 		}
/* 000340 */ 		else {
/* 000340 */ 		}
/* 000341 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000341 */ 		__except0__.__cause__ = null;
/* 000341 */ 		throw __except0__;
/* 000341 */ 	});},
/* 000343 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000343 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000343 */ 			var annotations = null;
/* 000343 */ 		};
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 		}
/* 000357 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000357 */ 		__except0__.__cause__ = null;
/* 000357 */ 		throw __except0__;
/* 000357 */ 	});},
/* 000363 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000364 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000364 */ 		__except0__.__cause__ = null;
/* 000364 */ 		throw __except0__;
/* 000364 */ 	});},
/* 000366 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000366 */ 		if (arguments.length) {
/* 000366 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000366 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000366 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000366 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000366 */ 					switch (__attrib0__) {
/* 000366 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000366 */ 					}
/* 000366 */ 				}
/* 000366 */ 			}
/* 000366 */ 		}
/* 000366 */ 		else {
/* 000366 */ 		}
/* 000367 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000367 */ 		__except0__.__cause__ = null;
/* 000367 */ 		throw __except0__;
/* 000367 */ 	});},
/* 000369 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000369 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000369 */ 			var target_id = null;
/* 000369 */ 		};
/* 000369 */ 		if (arguments.length) {
/* 000369 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000369 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000369 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000369 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000369 */ 					switch (__attrib0__) {
/* 000369 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000369 */ 					}
/* 000369 */ 				}
/* 000369 */ 			}
/* 000369 */ 		}
/* 000369 */ 		else {
/* 000369 */ 		}
/* 000370 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000370 */ 		__except0__.__cause__ = null;
/* 000370 */ 		throw __except0__;
/* 000370 */ 	});},
/* 000377 */ 	get _ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000377 */ 		if (arguments.length) {
/* 000377 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000377 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000377 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000377 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000377 */ 					switch (__attrib0__) {
/* 000377 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000377 */ 					}
/* 000377 */ 				}
/* 000377 */ 			}
/* 000377 */ 		}
/* 000377 */ 		else {
/* 000377 */ 		}
/* 000378 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000378 */ 	});}
/* 000378 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map