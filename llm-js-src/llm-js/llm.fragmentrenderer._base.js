/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 00:31:36
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
/* 000035 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000035 */ 		if (arguments.length) {
/* 000035 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000035 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000035 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000035 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000035 */ 					switch (__attrib0__) {
/* 000035 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000035 */ 					}
/* 000035 */ 				}
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 		else {
/* 000035 */ 		}
/* 000036 */ 		// pass;
/* 000036 */ 	});},
/* 000038 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000038 */ 		if (arguments.length) {
/* 000038 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000038 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000038 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000038 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000038 */ 					switch (__attrib0__) {
/* 000038 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000038 */ 					}
/* 000038 */ 				}
/* 000038 */ 			}
/* 000038 */ 		}
/* 000038 */ 		else {
/* 000038 */ 		}
/* 000039 */ 		// pass;
/* 000039 */ 	});},
/* 000042 */ 	get render_fragment () {return __get__ (this, function (self, llm_fragment, render_context, is_block_level) {
/* 000042 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000042 */ 			var is_block_level = null;
/* 000042 */ 		};
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'llm_fragment': var llm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		try {
/* 000044 */ 			return (function () {
/* 000044 */ 				var __accu0__ = self;
/* 000045 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, llm_fragment.nodes, (function () {
/* 000045 */ 					var __accu1__ = self;
/* 000045 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000045 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000045 */ 			}) ();
/* 000045 */ 		}
/* 000045 */ 		catch (__except0__) {
/* 000045 */ 			if (isinstance (__except0__, Exception)) {
/* 000045 */ 				var e = __except0__;
/* 000048 */ 				// pass;
/* 000051 */ 				__except0__.__cause__ = null;
/* 000051 */ 				throw __except0__;
/* 000051 */ 			}
/* 000051 */ 			else {
/* 000051 */ 				throw __except0__;
/* 000051 */ 			}
/* 000051 */ 		}
/* 000051 */ 	});},
/* 000053 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000053 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000053 */ 			var is_block_level = null;
/* 000053 */ 		};
/* 000053 */ 		if (arguments.length) {
/* 000053 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000053 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000053 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000053 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000053 */ 					switch (__attrib0__) {
/* 000053 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000053 */ 					}
/* 000053 */ 				}
/* 000053 */ 			}
/* 000053 */ 		}
/* 000053 */ 		else {
/* 000053 */ 		}
/* 000068 */ 		if (__t__ (nodelist === null)) {
/* 000069 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000069 */ 			__except0__.__cause__ = null;
/* 000069 */ 			throw __except0__;
/* 000069 */ 		}
/* 000071 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'llm_is_block_level'))))) {
/* 000072 */ 			// pass;
/* 000077 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by LLM; missing .llm_is_block_level attribute');
/* 000077 */ 			__except0__.__cause__ = null;
/* 000077 */ 			throw __except0__;
/* 000077 */ 		}
/* 000080 */ 		if (__t__ (is_block_level === null)) {
/* 000081 */ 			var is_block_level = nodelist.llm_is_block_level;
/* 000081 */ 		}
/* 000083 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.llm_is_block_level)) {
/* 000084 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000084 */ 			__except0__.__cause__ = null;
/* 000084 */ 			throw __except0__;
/* 000084 */ 		}
/* 000089 */ 		if (__t__ (is_block_level)) {
/* 000095 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'llm_blocks'))) {
/* 000096 */ 				var node_blocks = nodelist.llm_blocks;
/* 000096 */ 			}
/* 000097 */ 			else {
/* 000098 */ 				var node_blocks = [nodelist];
/* 000098 */ 			}
/* 000100 */ 			return (function () {
/* 000100 */ 				var __accu0__ = self;
/* 000100 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000100 */ 			}) ();
/* 000100 */ 		}
/* 000102 */ 		return (function () {
/* 000102 */ 			var __accu0__ = self;
/* 000102 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000102 */ 		}) ();
/* 000102 */ 	});},
/* 000105 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000105 */ 		if (arguments.length) {
/* 000105 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000105 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000105 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000105 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000105 */ 					switch (__attrib0__) {
/* 000105 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000105 */ 					}
/* 000105 */ 				}
/* 000105 */ 			}
/* 000105 */ 		}
/* 000105 */ 		else {
/* 000105 */ 		}
/* 000106 */ 		var render_context = (function () {
/* 000106 */ 			var __accu0__ = self;
/* 000106 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000106 */ 		}) ();
/* 000107 */ 		if (__t__ ((function () {
/* 000107 */ 			var __accu0__ = node;
/* 000107 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000107 */ 		}) ())) {
/* 000108 */ 			return (function () {
/* 000108 */ 				var __accu0__ = self;
/* 000108 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000108 */ 			}) ();
/* 000108 */ 		}
/* 000109 */ 		if (__t__ ((function () {
/* 000109 */ 			var __accu0__ = node;
/* 000109 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000109 */ 		}) ())) {
/* 000110 */ 			return (function () {
/* 000110 */ 				var __accu0__ = self;
/* 000110 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000110 */ 			}) ();
/* 000110 */ 		}
/* 000111 */ 		if (__t__ ((function () {
/* 000111 */ 			var __accu0__ = node;
/* 000111 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000111 */ 		}) ())) {
/* 000112 */ 			return (function () {
/* 000112 */ 				var __accu0__ = self;
/* 000112 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000112 */ 			}) ();
/* 000112 */ 		}
/* 000113 */ 		if (__t__ ((function () {
/* 000113 */ 			var __accu0__ = node;
/* 000113 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000113 */ 		}) ())) {
/* 000114 */ 			return (function () {
/* 000114 */ 				var __accu0__ = self;
/* 000114 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000114 */ 			}) ();
/* 000114 */ 		}
/* 000115 */ 		if (__t__ ((function () {
/* 000115 */ 			var __accu0__ = node;
/* 000115 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000115 */ 		}) ())) {
/* 000116 */ 			return (function () {
/* 000116 */ 				var __accu0__ = self;
/* 000116 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000116 */ 			}) ();
/* 000116 */ 		}
/* 000117 */ 		if (__t__ ((function () {
/* 000117 */ 			var __accu0__ = node;
/* 000117 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000117 */ 		}) ())) {
/* 000118 */ 			return (function () {
/* 000118 */ 				var __accu0__ = self;
/* 000118 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000118 */ 			}) ();
/* 000118 */ 		}
/* 000119 */ 		if (__t__ ((function () {
/* 000119 */ 			var __accu0__ = node;
/* 000119 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000119 */ 		}) ())) {
/* 000120 */ 			return (function () {
/* 000120 */ 				var __accu0__ = self;
/* 000120 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000120 */ 			}) ();
/* 000120 */ 		}
/* 000122 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000122 */ 		__except0__.__cause__ = null;
/* 000122 */ 		throw __except0__;
/* 000122 */ 	});},
/* 000125 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000125 */ 		if (arguments.length) {
/* 000125 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000125 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000125 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000125 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000125 */ 					switch (__attrib0__) {
/* 000125 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000125 */ 					}
/* 000125 */ 				}
/* 000125 */ 			}
/* 000125 */ 		}
/* 000125 */ 		else {
/* 000125 */ 		}
/* 000126 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000127 */ 			var chars_value = node.llm_chars_value;
/* 000127 */ 		}
/* 000128 */ 		else {
/* 000129 */ 			var chars_value = null;
/* 000129 */ 		}
/* 000130 */ 		if (__t__ (chars_value === null)) {
/* 000132 */ 			var chars_value = node.chars;
/* 000132 */ 		}
/* 000133 */ 		return (function () {
/* 000133 */ 			var __accu0__ = self;
/* 000133 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000133 */ 		}) ();
/* 000133 */ 	});},
/* 000135 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000136 */ 		return '';
/* 000136 */ 	});},
/* 000138 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000138 */ 		if (arguments.length) {
/* 000138 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000138 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000138 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000138 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000138 */ 					switch (__attrib0__) {
/* 000138 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000138 */ 					}
/* 000138 */ 				}
/* 000138 */ 			}
/* 000138 */ 		}
/* 000138 */ 		else {
/* 000138 */ 		}
/* 000139 */ 		return (function () {
/* 000139 */ 			var __accu0__ = self;
/* 000140 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000140 */ 				var __accu1__ = self;
/* 000140 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000140 */ 			}) ());
/* 000140 */ 		}) ();
/* 000140 */ 	});},
/* 000142 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000142 */ 		if (arguments.length) {
/* 000142 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000142 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000142 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000142 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000142 */ 					switch (__attrib0__) {
/* 000142 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000142 */ 					}
/* 000142 */ 				}
/* 000142 */ 			}
/* 000142 */ 		}
/* 000142 */ 		else {
/* 000142 */ 		}
/* 000143 */ 		return (function () {
/* 000143 */ 			var __accu0__ = self;
/* 000144 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000144 */ 				var __accu1__ = self;
/* 000144 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000144 */ 			}) ());
/* 000144 */ 		}) ();
/* 000144 */ 	});},
/* 000146 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000146 */ 		if (arguments.length) {
/* 000146 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000146 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000146 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000146 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000146 */ 					switch (__attrib0__) {
/* 000146 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000146 */ 					}
/* 000146 */ 				}
/* 000146 */ 			}
/* 000146 */ 		}
/* 000146 */ 		else {
/* 000146 */ 		}
/* 000147 */ 		return (function () {
/* 000147 */ 			var __accu0__ = self;
/* 000148 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000148 */ 				var __accu1__ = self;
/* 000148 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000148 */ 			}) ());
/* 000148 */ 		}) ();
/* 000148 */ 	});},
/* 000150 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000150 */ 		if (arguments.length) {
/* 000150 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000150 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000150 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000150 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000150 */ 					switch (__attrib0__) {
/* 000150 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000150 */ 					}
/* 000150 */ 				}
/* 000150 */ 			}
/* 000150 */ 		}
/* 000150 */ 		else {
/* 000150 */ 		}
/* 000151 */ 		return (function () {
/* 000151 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000152 */ 				var __accu1__ = self;
/* 000152 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000152 */ 			}) ());
/* 000152 */ 		}) ();
/* 000152 */ 	});},
/* 000154 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000154 */ 		if (arguments.length) {
/* 000154 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000154 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000154 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000154 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000154 */ 					switch (__attrib0__) {
/* 000154 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000154 */ 					}
/* 000154 */ 				}
/* 000154 */ 			}
/* 000154 */ 		}
/* 000154 */ 		else {
/* 000154 */ 		}
/* 000160 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000161 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000161 */ 			__except0__.__cause__ = null;
/* 000161 */ 			throw __except0__;
/* 000161 */ 		}
/* 000163 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000164 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000166 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000166 */ 					var __accu0__ = node;
/* 000166 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000166 */ 				}) ()));
/* 000166 */ 				__except0__.__cause__ = null;
/* 000166 */ 				throw __except0__;
/* 000166 */ 			}
/* 000166 */ 		}
/* 000169 */ 		return (function () {
/* 000169 */ 			var __accu0__ = self;
/* 000172 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000172 */ 				var __accu1__ = self;
/* 000172 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000172 */ 			}) ());
/* 000172 */ 		}) ();
/* 000172 */ 	});},
/* 000177 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000177 */ 		assert (render_context !== null);
/* 000182 */ 		if (__t__ (llm_specinfo === null)) {
/* 000183 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000183 */ 			__except0__.__cause__ = null;
/* 000183 */ 			throw __except0__;
/* 000183 */ 		}
/* 000185 */ 		var is_delayed_render = (function () {
/* 000185 */ 			var __accu0__ = render_context;
/* 000185 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000185 */ 		}) ();
/* 000186 */ 		if (__t__ (is_delayed_render)) {
/* 000189 */ 			var is_first_pass = render_context.is_first_pass;
/* 000190 */ 			var delayed_key = null;
/* 000192 */ 			if (__t__ (is_first_pass)) {
/* 000193 */ 				(function () {
/* 000193 */ 					var __accu0__ = llm_specinfo;
/* 000193 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000193 */ 				}) ();
/* 000194 */ 				var delayed_key = (function () {
/* 000194 */ 					var __accu0__ = render_context;
/* 000194 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000194 */ 				}) ();
/* 000194 */ 			}
/* 000196 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000199 */ 				return (function () {
/* 000199 */ 					var __accu0__ = self;
/* 000199 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000199 */ 				}) ();
/* 000199 */ 			}
/* 000200 */ 			else if (__t__ (is_first_pass)) {
/* 000202 */ 				(function () {
/* 000202 */ 					var __accu0__ = llm_specinfo;
/* 000202 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000202 */ 				}) ();
/* 000204 */ 				return (function () {
/* 000204 */ 					var __accu0__ = self;
/* 000204 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000204 */ 				}) ();
/* 000204 */ 			}
/* 000205 */ 			else {
/* 000205 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000209 */ 				return (function () {
/* 000209 */ 					var __accu0__ = render_context;
/* 000209 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000209 */ 				}) ();
/* 000209 */ 			}
/* 000209 */ 		}
/* 000213 */ 		var value = (function () {
/* 000213 */ 			var __accu0__ = llm_specinfo;
/* 000213 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000213 */ 		}) ();
/* 000214 */ 		return value;
/* 000214 */ 	});},
/* 000216 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000216 */ 		if (arguments.length) {
/* 000216 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000216 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000216 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000216 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000216 */ 					switch (__attrib0__) {
/* 000216 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000216 */ 					}
/* 000216 */ 				}
/* 000216 */ 			}
/* 000216 */ 		}
/* 000216 */ 		else {
/* 000216 */ 		}
/* 000217 */ 		return (function () {
/* 000217 */ 			var __accu0__ = self;
/* 000220 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000220 */ 				var __accu1__ = self;
/* 000220 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000220 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000220 */ 		}) ();
/* 000220 */ 	});},
/* 000225 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000225 */ 		var environmentname = null;
/* 000225 */ 		var target_id = null;
/* 000225 */ 		if (arguments.length) {
/* 000225 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000225 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000225 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000225 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000225 */ 					switch (__attrib0__) {
/* 000225 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000225 */ 					}
/* 000225 */ 				}
/* 000225 */ 			}
/* 000225 */ 		}
/* 000225 */ 		else {
/* 000225 */ 		}
/* 000232 */ 		var rendered = (function () {
/* 000232 */ 			var __accu0__ = self;
/* 000233 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000233 */ 				var __accu1__ = nodelist;
/* 000233 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000233 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000233 */ 		}) ();
/* 000239 */ 		return rendered;
/* 000239 */ 	});},
/* 000246 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000248 */ 		var rendered_blocks = [];
/* 000250 */ 		var __iterable0__ = node_blocks;
/* 000250 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000250 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000252 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000253 */ 				var para = (function () {
/* 000253 */ 					var __accu0__ = self;
/* 000253 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000253 */ 				}) ();
/* 000253 */ 			}
/* 000254 */ 			else {
/* 000255 */ 				var para = (function () {
/* 000255 */ 					var __accu0__ = self;
/* 000255 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000255 */ 				}) ();
/* 000255 */ 			}
/* 000257 */ 			(function () {
/* 000257 */ 				var __accu0__ = rendered_blocks;
/* 000257 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000257 */ 			}) ();
/* 000257 */ 		}
/* 000259 */ 		return (function () {
/* 000259 */ 			var __accu0__ = self;
/* 000259 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000259 */ 		}) ();
/* 000259 */ 	});},
/* 000262 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000266 */ 		return (function () {
/* 000266 */ 			var __accu0__ = self;
/* 000266 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000266 */ 		}) ();
/* 000266 */ 	});},
/* 000268 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000268 */ 		if (arguments.length) {
/* 000268 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000268 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000268 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000268 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000268 */ 					switch (__attrib0__) {
/* 000268 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000268 */ 					}
/* 000268 */ 				}
/* 000268 */ 			}
/* 000268 */ 		}
/* 000268 */ 		else {
/* 000268 */ 		}
/* 000269 */ 		return (function () {
/* 000269 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000269 */ 				var __accu1__ = [];
/* 000269 */ 				var __iterable0__ = nodelist;
/* 000269 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000270 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000270 */ 					(function () {
/* 000270 */ 						var __accu2__ = __accu1__;
/* 000269 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000269 */ 							var __accu3__ = self;
/* 000269 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000269 */ 						}) ());
/* 000269 */ 					}) ();
/* 000269 */ 				}
/* 000269 */ 				return __accu1__;
/* 000269 */ 			}) (), render_context);
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000273 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000273 */ 		if (arguments.length) {
/* 000273 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000273 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000273 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000273 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000273 */ 					switch (__attrib0__) {
/* 000273 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000273 */ 					}
/* 000273 */ 				}
/* 000273 */ 			}
/* 000273 */ 		}
/* 000273 */ 		else {
/* 000273 */ 		}
/* 000277 */ 		return (function () {
/* 000277 */ 			var __accu0__ = '';
/* 000277 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000277 */ 		}) ();
/* 000277 */ 	});},
/* 000280 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000280 */ 		if (arguments.length) {
/* 000280 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000280 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000280 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000280 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000280 */ 					switch (__attrib0__) {
/* 000280 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000280 */ 					}
/* 000280 */ 				}
/* 000280 */ 			}
/* 000280 */ 		}
/* 000280 */ 		else {
/* 000280 */ 		}
/* 000288 */ 		return (function () {
/* 000288 */ 			var __accu0__ = '\n\n';
/* 000288 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000288 */ 				var __accu1__ = [];
/* 000288 */ 				var __iterable0__ = content_list;
/* 000288 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000288 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000288 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000288 */ 						(function () {
/* 000288 */ 							var __accu2__ = __accu1__;
/* 000288 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000288 */ 						}) ();
/* 000288 */ 					}
/* 000288 */ 				}
/* 000288 */ 				return __accu1__;
/* 000288 */ 			}) ());
/* 000288 */ 		}) ();
/* 000288 */ 	});},
/* 000294 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000294 */ 		var annotations = null;
/* 000294 */ 		var target_id = null;
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000301 */ 		return content;
/* 000301 */ 	});},
/* 000303 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000303 */ 		var annotations = null;
/* 000303 */ 		var target_id = null;
/* 000303 */ 		if (arguments.length) {
/* 000303 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000303 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000303 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000303 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000303 */ 					switch (__attrib0__) {
/* 000303 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000303 */ 					}
/* 000303 */ 				}
/* 000303 */ 			}
/* 000303 */ 		}
/* 000303 */ 		else {
/* 000303 */ 		}
/* 000310 */ 		return content;
/* 000310 */ 	});},
/* 000315 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000315 */ 		if (arguments.length) {
/* 000315 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000315 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000315 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000315 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000315 */ 					switch (__attrib0__) {
/* 000315 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000315 */ 					}
/* 000315 */ 				}
/* 000315 */ 			}
/* 000315 */ 		}
/* 000315 */ 		else {
/* 000315 */ 		}
/* 000326 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000326 */ 		__except0__.__cause__ = null;
/* 000326 */ 		throw __except0__;
/* 000326 */ 	});},
/* 000331 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000332 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000332 */ 		__except0__.__cause__ = null;
/* 000332 */ 		throw __except0__;
/* 000332 */ 	});},
/* 000334 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000335 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000335 */ 		__except0__.__cause__ = null;
/* 000335 */ 		throw __except0__;
/* 000335 */ 	});},
/* 000337 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000337 */ 		if (arguments.length) {
/* 000337 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000337 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000337 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000337 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000337 */ 					switch (__attrib0__) {
/* 000337 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000337 */ 					}
/* 000337 */ 				}
/* 000337 */ 			}
/* 000337 */ 		}
/* 000337 */ 		else {
/* 000337 */ 		}
/* 000338 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000338 */ 		__except0__.__cause__ = null;
/* 000338 */ 		throw __except0__;
/* 000338 */ 	});},
/* 000340 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000340 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000340 */ 			var annotations = null;
/* 000340 */ 		};
/* 000340 */ 		if (arguments.length) {
/* 000340 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000340 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000340 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000340 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000340 */ 					switch (__attrib0__) {
/* 000340 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000340 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
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
/* 000343 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000343 */ 		if (arguments.length) {
/* 000343 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000343 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000343 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000343 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000343 */ 					switch (__attrib0__) {
/* 000343 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000343 */ 					}
/* 000343 */ 				}
/* 000343 */ 			}
/* 000343 */ 		}
/* 000343 */ 		else {
/* 000343 */ 		}
/* 000344 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000344 */ 		__except0__.__cause__ = null;
/* 000344 */ 		throw __except0__;
/* 000344 */ 	});},
/* 000346 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000346 */ 		if (arguments.length) {
/* 000346 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000346 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000346 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000346 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000346 */ 					switch (__attrib0__) {
/* 000346 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 			}
/* 000346 */ 		}
/* 000346 */ 		else {
/* 000346 */ 		}
/* 000347 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000347 */ 		__except0__.__cause__ = null;
/* 000347 */ 		throw __except0__;
/* 000347 */ 	});},
/* 000349 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000349 */ 		var target_id_generator = null;
/* 000349 */ 		var annotations = null;
/* 000349 */ 		if (arguments.length) {
/* 000349 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000349 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000349 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000349 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000349 */ 					switch (__attrib0__) {
/* 000349 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000349 */ 					}
/* 000349 */ 				}
/* 000349 */ 			}
/* 000349 */ 		}
/* 000349 */ 		else {
/* 000349 */ 		}
/* 000351 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000351 */ 		__except0__.__cause__ = null;
/* 000351 */ 		throw __except0__;
/* 000351 */ 	});},
/* 000353 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000353 */ 		var heading_level = 1;
/* 000353 */ 		var inline_heading = false;
/* 000353 */ 		var target_id = null;
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000355 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000355 */ 		__except0__.__cause__ = null;
/* 000355 */ 		throw __except0__;
/* 000355 */ 	});},
/* 000357 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000357 */ 		var is_block_level = false;
/* 000357 */ 		var annotations = null;
/* 000357 */ 		var target_id = null;
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000359 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000359 */ 		__except0__.__cause__ = null;
/* 000359 */ 		throw __except0__;
/* 000359 */ 	});},
/* 000361 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000361 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000361 */ 			var annotations = null;
/* 000361 */ 		};
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000375 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000375 */ 		__except0__.__cause__ = null;
/* 000375 */ 		throw __except0__;
/* 000375 */ 	});},
/* 000381 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000381 */ 		if (arguments.length) {
/* 000381 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000381 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000381 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000381 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000381 */ 					switch (__attrib0__) {
/* 000381 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000381 */ 					}
/* 000381 */ 				}
/* 000381 */ 			}
/* 000381 */ 		}
/* 000381 */ 		else {
/* 000381 */ 		}
/* 000382 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000382 */ 		__except0__.__cause__ = null;
/* 000382 */ 		throw __except0__;
/* 000382 */ 	});},
/* 000384 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000384 */ 		if (arguments.length) {
/* 000384 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000384 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000384 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000384 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000384 */ 					switch (__attrib0__) {
/* 000384 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000384 */ 					}
/* 000384 */ 				}
/* 000384 */ 			}
/* 000384 */ 		}
/* 000384 */ 		else {
/* 000384 */ 		}
/* 000385 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000385 */ 		__except0__.__cause__ = null;
/* 000385 */ 		throw __except0__;
/* 000385 */ 	});},
/* 000387 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000387 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000387 */ 			var target_id = null;
/* 000387 */ 		};
/* 000387 */ 		if (arguments.length) {
/* 000387 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000387 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000387 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000387 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000387 */ 					switch (__attrib0__) {
/* 000387 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000387 */ 					}
/* 000387 */ 				}
/* 000387 */ 			}
/* 000387 */ 		}
/* 000387 */ 		else {
/* 000387 */ 		}
/* 000388 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000388 */ 		__except0__.__cause__ = null;
/* 000388 */ 		throw __except0__;
/* 000388 */ 	});},
/* 000395 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000396 */ 	});}
/* 000396 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map