/* 000001 */ // Transcrypt'ed from Python, 2022-12-14 17:06:08
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000012 */ import {LLMRenderContext} from './llm.llmrendercontext.js';
/* 000010 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LLMRenderContext, nodes};
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
/* 000041 */ 				(function () {
/* 000041 */ 					var __accu0__ = logger;
/* 000041 */ 					return __call__ (__accu0__.debug, __accu0__, 'Exception while rendering fragment ‘{}’: {}'.format (llm_fragment.what, e));
/* 000041 */ 				}) ();
/* 000042 */ 				__except0__.__cause__ = null;
/* 000042 */ 				throw __except0__;
/* 000042 */ 			}
/* 000042 */ 			else {
/* 000042 */ 				throw __except0__;
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 	});},
/* 000044 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000044 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000044 */ 			var is_block_level = null;
/* 000044 */ 		};
/* 000044 */ 		if (arguments.length) {
/* 000044 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000044 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000044 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000044 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000044 */ 					switch (__attrib0__) {
/* 000044 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000044 */ 					}
/* 000044 */ 				}
/* 000044 */ 			}
/* 000044 */ 		}
/* 000044 */ 		else {
/* 000044 */ 		}
/* 000059 */ 		if (__t__ (nodelist === null)) {
/* 000060 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000060 */ 			__except0__.__cause__ = null;
/* 000060 */ 			throw __except0__;
/* 000060 */ 		}
/* 000062 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'llm_is_block_level'))))) {
/* 000063 */ 			(function () {
/* 000063 */ 				var __accu0__ = logger;
/* 000063 */ 				return __call__ (__accu0__.debug, __accu0__, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute:\nnodelist={}'.format (nodelist));
/* 000063 */ 			}) ();
/* 000066 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute');
/* 000066 */ 			__except0__.__cause__ = null;
/* 000066 */ 			throw __except0__;
/* 000066 */ 		}
/* 000069 */ 		if (__t__ (is_block_level === null)) {
/* 000070 */ 			var is_block_level = nodelist.llm_is_block_level;
/* 000070 */ 		}
/* 000072 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.llm_is_block_level)) {
/* 000073 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000073 */ 			__except0__.__cause__ = null;
/* 000073 */ 			throw __except0__;
/* 000073 */ 		}
/* 000078 */ 		if (__t__ (is_block_level)) {
/* 000084 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'llm_blocks'))) {
/* 000085 */ 				var node_blocks = nodelist.llm_blocks;
/* 000085 */ 			}
/* 000086 */ 			else {
/* 000087 */ 				var node_blocks = [nodelist];
/* 000087 */ 			}
/* 000089 */ 			return (function () {
/* 000089 */ 				var __accu0__ = self;
/* 000089 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000089 */ 			}) ();
/* 000089 */ 		}
/* 000091 */ 		return (function () {
/* 000091 */ 			var __accu0__ = self;
/* 000091 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000091 */ 		}) ();
/* 000091 */ 	});},
/* 000094 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000094 */ 		if (arguments.length) {
/* 000094 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000094 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000094 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000094 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000094 */ 					switch (__attrib0__) {
/* 000094 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000094 */ 					}
/* 000094 */ 				}
/* 000094 */ 			}
/* 000094 */ 		}
/* 000094 */ 		else {
/* 000094 */ 		}
/* 000095 */ 		var render_context = (function () {
/* 000095 */ 			var __accu0__ = self;
/* 000095 */ 			return __call__ (__accu0__._ensure_render_context, __accu0__, render_context);
/* 000095 */ 		}) ();
/* 000096 */ 		if (__t__ ((function () {
/* 000096 */ 			var __accu0__ = node;
/* 000096 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000096 */ 		}) ())) {
/* 000097 */ 			return (function () {
/* 000097 */ 				var __accu0__ = self;
/* 000097 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000097 */ 			}) ();
/* 000097 */ 		}
/* 000098 */ 		if (__t__ ((function () {
/* 000098 */ 			var __accu0__ = node;
/* 000098 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000098 */ 		}) ())) {
/* 000099 */ 			return (function () {
/* 000099 */ 				var __accu0__ = self;
/* 000099 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000099 */ 			}) ();
/* 000099 */ 		}
/* 000100 */ 		if (__t__ ((function () {
/* 000100 */ 			var __accu0__ = node;
/* 000100 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000100 */ 		}) ())) {
/* 000101 */ 			return (function () {
/* 000101 */ 				var __accu0__ = self;
/* 000101 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000101 */ 			}) ();
/* 000101 */ 		}
/* 000102 */ 		if (__t__ ((function () {
/* 000102 */ 			var __accu0__ = node;
/* 000102 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000102 */ 		}) ())) {
/* 000103 */ 			return (function () {
/* 000103 */ 				var __accu0__ = self;
/* 000103 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000103 */ 			}) ();
/* 000103 */ 		}
/* 000104 */ 		if (__t__ ((function () {
/* 000104 */ 			var __accu0__ = node;
/* 000104 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000104 */ 		}) ())) {
/* 000105 */ 			return (function () {
/* 000105 */ 				var __accu0__ = self;
/* 000105 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000105 */ 			}) ();
/* 000105 */ 		}
/* 000106 */ 		if (__t__ ((function () {
/* 000106 */ 			var __accu0__ = node;
/* 000106 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000106 */ 		}) ())) {
/* 000107 */ 			return (function () {
/* 000107 */ 				var __accu0__ = self;
/* 000107 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000107 */ 			}) ();
/* 000107 */ 		}
/* 000108 */ 		if (__t__ ((function () {
/* 000108 */ 			var __accu0__ = node;
/* 000108 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000108 */ 		}) ())) {
/* 000109 */ 			return (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000111 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000111 */ 		__except0__.__cause__ = null;
/* 000111 */ 		throw __except0__;
/* 000111 */ 	});},
/* 000114 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000114 */ 		if (arguments.length) {
/* 000114 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000114 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000114 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000114 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000114 */ 					switch (__attrib0__) {
/* 000114 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000114 */ 					}
/* 000114 */ 				}
/* 000114 */ 			}
/* 000114 */ 		}
/* 000114 */ 		else {
/* 000114 */ 		}
/* 000115 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000116 */ 			var chars_value = node.llm_chars_value;
/* 000116 */ 		}
/* 000117 */ 		else {
/* 000118 */ 			var chars_value = null;
/* 000118 */ 		}
/* 000119 */ 		if (__t__ (chars_value === null)) {
/* 000121 */ 			var chars_value = node.chars;
/* 000121 */ 		}
/* 000122 */ 		return (function () {
/* 000122 */ 			var __accu0__ = self;
/* 000122 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value);
/* 000122 */ 		}) ();
/* 000122 */ 	});},
/* 000124 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000125 */ 		return '';
/* 000125 */ 	});},
/* 000127 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000127 */ 		if (arguments.length) {
/* 000127 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000127 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000127 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000127 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000127 */ 					switch (__attrib0__) {
/* 000127 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000127 */ 					}
/* 000127 */ 				}
/* 000127 */ 			}
/* 000127 */ 		}
/* 000127 */ 		else {
/* 000127 */ 		}
/* 000128 */ 		return (function () {
/* 000128 */ 			var __accu0__ = self;
/* 000129 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000129 */ 				var __accu1__ = self;
/* 000129 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000129 */ 			}) ());
/* 000129 */ 		}) ();
/* 000129 */ 	});},
/* 000131 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
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
/* 000133 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000133 */ 				var __accu1__ = self;
/* 000133 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000133 */ 			}) ());
/* 000133 */ 		}) ();
/* 000133 */ 	});},
/* 000135 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
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
/* 000139 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
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
/* 000143 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
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
/* 000149 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000150 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000150 */ 			__except0__.__cause__ = null;
/* 000150 */ 			throw __except0__;
/* 000150 */ 		}
/* 000152 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000153 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000155 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000155 */ 					var __accu0__ = node;
/* 000155 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000155 */ 				}) ()));
/* 000155 */ 				__except0__.__cause__ = null;
/* 000155 */ 				throw __except0__;
/* 000155 */ 			}
/* 000155 */ 		}
/* 000158 */ 		return (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000161 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000161 */ 				var __accu1__ = self;
/* 000161 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000161 */ 			}) ());
/* 000161 */ 		}) ();
/* 000161 */ 	});},
/* 000166 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000166 */ 		if (arguments.length) {
/* 000166 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000166 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000166 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000166 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000166 */ 					switch (__attrib0__) {
/* 000166 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000166 */ 					}
/* 000166 */ 				}
/* 000166 */ 			}
/* 000166 */ 		}
/* 000166 */ 		else {
/* 000166 */ 		}
/* 000166 */ 		assert (render_context !== null);
/* 000171 */ 		if (__t__ (llm_specinfo === null)) {
/* 000172 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000172 */ 			__except0__.__cause__ = null;
/* 000172 */ 			throw __except0__;
/* 000172 */ 		}
/* 000174 */ 		var is_delayed_render = (function () {
/* 000174 */ 			var __accu0__ = render_context;
/* 000174 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000174 */ 		}) ();
/* 000175 */ 		if (__t__ (is_delayed_render)) {
/* 000178 */ 			var is_first_pass = render_context.is_first_pass;
/* 000179 */ 			var delayed_key = null;
/* 000181 */ 			if (__t__ (is_first_pass)) {
/* 000182 */ 				(function () {
/* 000182 */ 					var __accu0__ = llm_specinfo;
/* 000182 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000182 */ 				}) ();
/* 000183 */ 				var delayed_key = (function () {
/* 000183 */ 					var __accu0__ = render_context;
/* 000183 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000183 */ 				}) ();
/* 000183 */ 			}
/* 000185 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000188 */ 				return (function () {
/* 000188 */ 					var __accu0__ = self;
/* 000188 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000188 */ 				}) ();
/* 000188 */ 			}
/* 000189 */ 			else if (__t__ (is_first_pass)) {
/* 000191 */ 				(function () {
/* 000191 */ 					var __accu0__ = llm_specinfo;
/* 000191 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000191 */ 				}) ();
/* 000193 */ 				return (function () {
/* 000193 */ 					var __accu0__ = self;
/* 000193 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000193 */ 				}) ();
/* 000193 */ 			}
/* 000194 */ 			else {
/* 000194 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000198 */ 				return (function () {
/* 000198 */ 					var __accu0__ = render_context;
/* 000198 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000198 */ 				}) ();
/* 000198 */ 			}
/* 000198 */ 		}
/* 000203 */ 		var value = (function () {
/* 000203 */ 			var __accu0__ = llm_specinfo;
/* 000203 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000203 */ 		}) ();
/* 000204 */ 		return value;
/* 000204 */ 	});},
/* 000206 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000206 */ 		if (arguments.length) {
/* 000206 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000206 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000206 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000206 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000206 */ 					switch (__attrib0__) {
/* 000206 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000206 */ 					}
/* 000206 */ 				}
/* 000206 */ 			}
/* 000206 */ 		}
/* 000206 */ 		else {
/* 000206 */ 		}
/* 000207 */ 		return (function () {
/* 000207 */ 			var __accu0__ = self;
/* 000210 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000210 */ 				var __accu1__ = self;
/* 000210 */ 				return __call__ (__accu1__._ensure_render_context, __accu1__, render_context);
/* 000210 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000210 */ 		}) ();
/* 000210 */ 	});},
/* 000215 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000215 */ 		var environmentname = null;
/* 000215 */ 		var target_id = null;
/* 000215 */ 		if (arguments.length) {
/* 000215 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000215 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000215 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000215 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000215 */ 					switch (__attrib0__) {
/* 000215 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000215 */ 					}
/* 000215 */ 				}
/* 000215 */ 			}
/* 000215 */ 		}
/* 000215 */ 		else {
/* 000215 */ 		}
/* 000222 */ 		var rendered = (function () {
/* 000222 */ 			var __accu0__ = self;
/* 000223 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000223 */ 				var __accu1__ = nodelist;
/* 000223 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000223 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({annotations: ['{}-math'.format (displaytype)], target_id: target_id}));
/* 000223 */ 		}) ();
/* 000227 */ 		return rendered;
/* 000227 */ 	});},
/* 000234 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000234 */ 		if (arguments.length) {
/* 000234 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000234 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000234 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000234 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000234 */ 					switch (__attrib0__) {
/* 000234 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000234 */ 					}
/* 000234 */ 				}
/* 000234 */ 			}
/* 000234 */ 		}
/* 000234 */ 		else {
/* 000234 */ 		}
/* 000236 */ 		var rendered_blocks = [];
/* 000238 */ 		var __iterable0__ = node_blocks;
/* 000238 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000238 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000240 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000241 */ 				var para = (function () {
/* 000241 */ 					var __accu0__ = self;
/* 000241 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000241 */ 				}) ();
/* 000241 */ 			}
/* 000242 */ 			else {
/* 000243 */ 				var para = (function () {
/* 000243 */ 					var __accu0__ = self;
/* 000243 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000243 */ 				}) ();
/* 000243 */ 			}
/* 000245 */ 			(function () {
/* 000245 */ 				var __accu0__ = rendered_blocks;
/* 000245 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000245 */ 			}) ();
/* 000245 */ 		}
/* 000247 */ 		return (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks);
/* 000247 */ 		}) ();
/* 000247 */ 	});},
/* 000250 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000250 */ 		if (arguments.length) {
/* 000250 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000250 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000250 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000250 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000250 */ 					switch (__attrib0__) {
/* 000250 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000250 */ 					}
/* 000250 */ 				}
/* 000250 */ 			}
/* 000250 */ 		}
/* 000250 */ 		else {
/* 000250 */ 		}
/* 000254 */ 		return (function () {
/* 000254 */ 			var __accu0__ = self;
/* 000254 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000254 */ 		}) ();
/* 000254 */ 	});},
/* 000256 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000256 */ 		if (arguments.length) {
/* 000256 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000256 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000256 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000256 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000256 */ 					switch (__attrib0__) {
/* 000256 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000256 */ 					}
/* 000256 */ 				}
/* 000256 */ 			}
/* 000256 */ 		}
/* 000256 */ 		else {
/* 000256 */ 		}
/* 000257 */ 		return (function () {
/* 000257 */ 			var __accu0__ = self;
/* 000257 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000257 */ 				var __accu1__ = [];
/* 000257 */ 				var __iterable0__ = nodelist;
/* 000257 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000258 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000258 */ 					(function () {
/* 000258 */ 						var __accu2__ = __accu1__;
/* 000257 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000257 */ 							var __accu3__ = self;
/* 000257 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000257 */ 						}) ());
/* 000257 */ 					}) ();
/* 000257 */ 				}
/* 000257 */ 				return __accu1__;
/* 000257 */ 			}) ());
/* 000257 */ 		}) ();
/* 000257 */ 	});},
/* 000261 */ 	get render_join () {return __get__ (this, function (self, content_list) {
/* 000261 */ 		if (arguments.length) {
/* 000261 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000261 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000261 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000261 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000261 */ 					switch (__attrib0__) {
/* 000261 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000261 */ 					}
/* 000261 */ 				}
/* 000261 */ 			}
/* 000261 */ 		}
/* 000261 */ 		else {
/* 000261 */ 		}
/* 000265 */ 		return (function () {
/* 000265 */ 			var __accu0__ = '';
/* 000265 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000265 */ 		}) ();
/* 000265 */ 	});},
/* 000268 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000276 */ 		return (function () {
/* 000276 */ 			var __accu0__ = '\n\n';
/* 000276 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000276 */ 				var __accu1__ = [];
/* 000276 */ 				var __iterable0__ = content_list;
/* 000276 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000276 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000276 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000276 */ 						(function () {
/* 000276 */ 							var __accu2__ = __accu1__;
/* 000276 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000276 */ 						}) ();
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 				return __accu1__;
/* 000276 */ 			}) ());
/* 000276 */ 		}) ();
/* 000276 */ 	});},
/* 000282 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role) {
/* 000282 */ 		var annotations = null;
/* 000282 */ 		var target_id = null;
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000288 */ 		return content;
/* 000288 */ 	});},
/* 000294 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000305 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000305 */ 		__except0__.__cause__ = null;
/* 000305 */ 		throw __except0__;
/* 000305 */ 	});},
/* 000310 */ 	get render_value () {return __get__ (this, function (self, value) {
/* 000310 */ 		if (arguments.length) {
/* 000310 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000310 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000310 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000310 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000310 */ 					switch (__attrib0__) {
/* 000310 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000310 */ 					}
/* 000310 */ 				}
/* 000310 */ 			}
/* 000310 */ 		}
/* 000310 */ 		else {
/* 000310 */ 		}
/* 000311 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000311 */ 		__except0__.__cause__ = null;
/* 000311 */ 		throw __except0__;
/* 000311 */ 	});},
/* 000313 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000314 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000314 */ 		__except0__.__cause__ = null;
/* 000314 */ 		throw __except0__;
/* 000314 */ 	});},
/* 000316 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000317 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000317 */ 		__except0__.__cause__ = null;
/* 000317 */ 		throw __except0__;
/* 000317 */ 	});},
/* 000319 */ 	get render_nothing () {return __get__ (this, function (self, annotations) {
/* 000319 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000319 */ 			var annotations = null;
/* 000319 */ 		};
/* 000319 */ 		if (arguments.length) {
/* 000319 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000319 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000319 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000319 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000319 */ 					switch (__attrib0__) {
/* 000319 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000319 */ 					}
/* 000319 */ 				}
/* 000319 */ 			}
/* 000319 */ 		}
/* 000319 */ 		else {
/* 000319 */ 		}
/* 000320 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000320 */ 		__except0__.__cause__ = null;
/* 000320 */ 		throw __except0__;
/* 000320 */ 	});},
/* 000322 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str) {
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000323 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000323 */ 		__except0__.__cause__ = null;
/* 000323 */ 		throw __except0__;
/* 000323 */ 	});},
/* 000325 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000325 */ 		if (arguments.length) {
/* 000325 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000325 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000325 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000325 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000325 */ 					switch (__attrib0__) {
/* 000325 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000325 */ 					}
/* 000325 */ 				}
/* 000325 */ 			}
/* 000325 */ 		}
/* 000325 */ 		else {
/* 000325 */ 		}
/* 000326 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000326 */ 		__except0__.__cause__ = null;
/* 000326 */ 		throw __except0__;
/* 000326 */ 	});},
/* 000328 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000328 */ 		var target_id_generator = null;
/* 000328 */ 		var annotations = null;
/* 000328 */ 		if (arguments.length) {
/* 000328 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000328 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000328 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000328 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000328 */ 					switch (__attrib0__) {
/* 000328 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000328 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
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
/* 000332 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000332 */ 		var heading_level = 1;
/* 000332 */ 		var inline_heading = false;
/* 000332 */ 		var target_id = null;
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
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
/* 000336 */ 	get render_verbatim () {return __get__ (this, function (self, value) {
/* 000336 */ 		var annotations = null;
/* 000336 */ 		var target_id = null;
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000337 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000337 */ 		__except0__.__cause__ = null;
/* 000337 */ 		throw __except0__;
/* 000337 */ 	});},
/* 000339 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000339 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000339 */ 			var annotations = null;
/* 000339 */ 		};
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000353 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000353 */ 		__except0__.__cause__ = null;
/* 000353 */ 		throw __except0__;
/* 000353 */ 	});},
/* 000359 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000360 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000360 */ 		__except0__.__cause__ = null;
/* 000360 */ 		throw __except0__;
/* 000360 */ 	});},
/* 000362 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource) {
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000363 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000363 */ 		__except0__.__cause__ = null;
/* 000363 */ 		throw __except0__;
/* 000363 */ 	});},
/* 000365 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000365 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000365 */ 			var target_id = null;
/* 000365 */ 		};
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000366 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000366 */ 		__except0__.__cause__ = null;
/* 000366 */ 		throw __except0__;
/* 000366 */ 	});},
/* 000373 */ 	get _ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000374 */ 	});}
/* 000374 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map