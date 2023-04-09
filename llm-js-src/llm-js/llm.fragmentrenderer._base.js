/* 000001 */ // Transcrypt'ed from Python, 2023-04-09 22:34:26
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
/* 000108 */ 		if (__t__ ((function () {
/* 000108 */ 			var __accu0__ = node;
/* 000108 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000108 */ 		}) ())) {
/* 000109 */ 			return (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000110 */ 		if (__t__ ((function () {
/* 000110 */ 			var __accu0__ = node;
/* 000110 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000110 */ 		}) ())) {
/* 000111 */ 			return (function () {
/* 000111 */ 				var __accu0__ = self;
/* 000111 */ 				return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000111 */ 			}) ();
/* 000111 */ 		}
/* 000112 */ 		if (__t__ ((function () {
/* 000112 */ 			var __accu0__ = node;
/* 000112 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000112 */ 		}) ())) {
/* 000113 */ 			return (function () {
/* 000113 */ 				var __accu0__ = self;
/* 000113 */ 				return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000113 */ 			}) ();
/* 000113 */ 		}
/* 000114 */ 		if (__t__ ((function () {
/* 000114 */ 			var __accu0__ = node;
/* 000114 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000114 */ 		}) ())) {
/* 000115 */ 			return (function () {
/* 000115 */ 				var __accu0__ = self;
/* 000115 */ 				return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000115 */ 			}) ();
/* 000115 */ 		}
/* 000116 */ 		if (__t__ ((function () {
/* 000116 */ 			var __accu0__ = node;
/* 000116 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000116 */ 		}) ())) {
/* 000117 */ 			return (function () {
/* 000117 */ 				var __accu0__ = self;
/* 000117 */ 				return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000117 */ 			}) ();
/* 000117 */ 		}
/* 000118 */ 		if (__t__ ((function () {
/* 000118 */ 			var __accu0__ = node;
/* 000118 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000118 */ 		}) ())) {
/* 000119 */ 			return (function () {
/* 000119 */ 				var __accu0__ = self;
/* 000119 */ 				return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000119 */ 			}) ();
/* 000119 */ 		}
/* 000120 */ 		if (__t__ ((function () {
/* 000120 */ 			var __accu0__ = node;
/* 000120 */ 			return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000120 */ 		}) ())) {
/* 000121 */ 			return (function () {
/* 000121 */ 				var __accu0__ = self;
/* 000121 */ 				return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000121 */ 			}) ();
/* 000121 */ 		}
/* 000123 */ 		var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000123 */ 		__except0__.__cause__ = null;
/* 000123 */ 		throw __except0__;
/* 000123 */ 	});},
/* 000126 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000126 */ 		if (arguments.length) {
/* 000126 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000126 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000126 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000126 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000126 */ 					switch (__attrib0__) {
/* 000126 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000126 */ 					}
/* 000126 */ 				}
/* 000126 */ 			}
/* 000126 */ 		}
/* 000126 */ 		else {
/* 000126 */ 		}
/* 000127 */ 		if (__t__ (__call__ (hasattr, null, node, 'llm_chars_value'))) {
/* 000128 */ 			var chars_value = node.llm_chars_value;
/* 000128 */ 		}
/* 000129 */ 		else {
/* 000130 */ 			var chars_value = null;
/* 000130 */ 		}
/* 000131 */ 		if (__t__ (chars_value === null)) {
/* 000133 */ 			var chars_value = node.chars;
/* 000133 */ 		}
/* 000134 */ 		return (function () {
/* 000134 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000134 */ 		}) ();
/* 000134 */ 	});},
/* 000136 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000137 */ 		return '';
/* 000137 */ 	});},
/* 000139 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
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
/* 000141 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000141 */ 				var __accu1__ = self;
/* 000141 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000141 */ 			}) ());
/* 000141 */ 		}) ();
/* 000141 */ 	});},
/* 000143 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
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
/* 000145 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000145 */ 			}) ());
/* 000145 */ 		}) ();
/* 000145 */ 	});},
/* 000147 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
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
/* 000148 */ 		return (function () {
/* 000148 */ 			var __accu0__ = self;
/* 000149 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000149 */ 				var __accu1__ = self;
/* 000149 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000149 */ 			}) ());
/* 000149 */ 		}) ();
/* 000149 */ 	});},
/* 000151 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000151 */ 		if (arguments.length) {
/* 000151 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000151 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000151 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000151 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000151 */ 					switch (__attrib0__) {
/* 000151 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000151 */ 					}
/* 000151 */ 				}
/* 000151 */ 			}
/* 000151 */ 		}
/* 000151 */ 		else {
/* 000151 */ 		}
/* 000152 */ 		return (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000153 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000153 */ 				var __accu1__ = self;
/* 000153 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000153 */ 			}) ());
/* 000153 */ 		}) ();
/* 000153 */ 	});},
/* 000155 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000155 */ 		if (arguments.length) {
/* 000155 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000155 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000155 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000155 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000155 */ 					switch (__attrib0__) {
/* 000155 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000155 */ 					}
/* 000155 */ 				}
/* 000155 */ 			}
/* 000155 */ 		}
/* 000155 */ 		else {
/* 000155 */ 		}
/* 000161 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'llm_specinfo')))) || node.llm_specinfo === null)) {
/* 000162 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `llm_specinfo` attribute set'.format (node));
/* 000162 */ 			__except0__.__cause__ = null;
/* 000162 */ 			throw __except0__;
/* 000162 */ 		}
/* 000164 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000165 */ 			if (__t__ (!__t__ ((node.llm_specinfo.allowed_in_standalone_mode)))) {
/* 000167 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000167 */ 					var __accu0__ = node;
/* 000167 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000167 */ 				}) ()));
/* 000167 */ 				__except0__.__cause__ = null;
/* 000167 */ 				throw __except0__;
/* 000167 */ 			}
/* 000167 */ 		}
/* 000170 */ 		return (function () {
/* 000170 */ 			var __accu0__ = self;
/* 000173 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.llm_specinfo, (function () {
/* 000173 */ 				var __accu1__ = self;
/* 000173 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000173 */ 			}) ());
/* 000173 */ 		}) ();
/* 000173 */ 	});},
/* 000178 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, llm_specinfo, render_context) {
/* 000178 */ 		if (arguments.length) {
/* 000178 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000178 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000178 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000178 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000178 */ 					switch (__attrib0__) {
/* 000178 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'llm_specinfo': var llm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000178 */ 					}
/* 000178 */ 				}
/* 000178 */ 			}
/* 000178 */ 		}
/* 000178 */ 		else {
/* 000178 */ 		}
/* 000178 */ 		assert (render_context !== null);
/* 000183 */ 		if (__t__ (llm_specinfo === null)) {
/* 000184 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000184 */ 			__except0__.__cause__ = null;
/* 000184 */ 			throw __except0__;
/* 000184 */ 		}
/* 000186 */ 		var is_delayed_render = (function () {
/* 000186 */ 			var __accu0__ = render_context;
/* 000186 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000186 */ 		}) ();
/* 000187 */ 		if (__t__ (is_delayed_render)) {
/* 000190 */ 			var is_first_pass = render_context.is_first_pass;
/* 000191 */ 			var delayed_key = null;
/* 000193 */ 			if (__t__ (is_first_pass)) {
/* 000194 */ 				(function () {
/* 000194 */ 					var __accu0__ = llm_specinfo;
/* 000194 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000194 */ 				}) ();
/* 000195 */ 				var delayed_key = (function () {
/* 000195 */ 					var __accu0__ = render_context;
/* 000195 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000195 */ 				}) ();
/* 000195 */ 			}
/* 000197 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000200 */ 				return (function () {
/* 000200 */ 					var __accu0__ = self;
/* 000200 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000200 */ 				}) ();
/* 000200 */ 			}
/* 000201 */ 			else if (__t__ (is_first_pass)) {
/* 000203 */ 				(function () {
/* 000203 */ 					var __accu0__ = llm_specinfo;
/* 000203 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000203 */ 				}) ();
/* 000205 */ 				return (function () {
/* 000205 */ 					var __accu0__ = self;
/* 000205 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000205 */ 				}) ();
/* 000205 */ 			}
/* 000206 */ 			else {
/* 000206 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000210 */ 				return (function () {
/* 000210 */ 					var __accu0__ = render_context;
/* 000210 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000210 */ 				}) ();
/* 000210 */ 			}
/* 000210 */ 		}
/* 000214 */ 		var value = (function () {
/* 000214 */ 			var __accu0__ = llm_specinfo;
/* 000214 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000214 */ 		}) ();
/* 000215 */ 		return value;
/* 000215 */ 	});},
/* 000217 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000217 */ 		if (arguments.length) {
/* 000217 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000217 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000217 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000217 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000217 */ 					switch (__attrib0__) {
/* 000217 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000217 */ 					}
/* 000217 */ 				}
/* 000217 */ 			}
/* 000217 */ 		}
/* 000217 */ 		else {
/* 000217 */ 		}
/* 000218 */ 		return (function () {
/* 000218 */ 			var __accu0__ = self;
/* 000221 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000221 */ 				var __accu1__ = self;
/* 000221 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000221 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000221 */ 		}) ();
/* 000221 */ 	});},
/* 000226 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000226 */ 		var environmentname = null;
/* 000226 */ 		var target_id = null;
/* 000226 */ 		if (arguments.length) {
/* 000226 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000226 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000226 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000226 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000226 */ 					switch (__attrib0__) {
/* 000226 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000226 */ 					}
/* 000226 */ 				}
/* 000226 */ 			}
/* 000226 */ 		}
/* 000226 */ 		else {
/* 000226 */ 		}
/* 000233 */ 		var rendered = (function () {
/* 000233 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000234 */ 				var __accu1__ = nodelist;
/* 000234 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000234 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000234 */ 		}) ();
/* 000240 */ 		return rendered;
/* 000240 */ 	});},
/* 000247 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000247 */ 		if (arguments.length) {
/* 000247 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000247 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000247 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000247 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000247 */ 					switch (__attrib0__) {
/* 000247 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000247 */ 					}
/* 000247 */ 				}
/* 000247 */ 			}
/* 000247 */ 		}
/* 000247 */ 		else {
/* 000247 */ 		}
/* 000249 */ 		var rendered_blocks = [];
/* 000251 */ 		var __iterable0__ = node_blocks;
/* 000251 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000251 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000253 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000254 */ 				var para = (function () {
/* 000254 */ 					var __accu0__ = self;
/* 000254 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000254 */ 				}) ();
/* 000254 */ 			}
/* 000255 */ 			else {
/* 000256 */ 				var para = (function () {
/* 000256 */ 					var __accu0__ = self;
/* 000256 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000256 */ 				}) ();
/* 000256 */ 			}
/* 000258 */ 			(function () {
/* 000258 */ 				var __accu0__ = rendered_blocks;
/* 000258 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000258 */ 			}) ();
/* 000258 */ 		}
/* 000260 */ 		return (function () {
/* 000260 */ 			var __accu0__ = self;
/* 000260 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000260 */ 		}) ();
/* 000260 */ 	});},
/* 000263 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000267 */ 		return (function () {
/* 000267 */ 			var __accu0__ = self;
/* 000267 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000267 */ 		}) ();
/* 000267 */ 	});},
/* 000269 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000269 */ 		if (arguments.length) {
/* 000269 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000269 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000269 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000269 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000269 */ 					switch (__attrib0__) {
/* 000269 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000269 */ 					}
/* 000269 */ 				}
/* 000269 */ 			}
/* 000269 */ 		}
/* 000269 */ 		else {
/* 000269 */ 		}
/* 000270 */ 		return (function () {
/* 000270 */ 			var __accu0__ = self;
/* 000270 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000270 */ 				var __accu1__ = [];
/* 000270 */ 				var __iterable0__ = nodelist;
/* 000270 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000271 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000271 */ 					(function () {
/* 000271 */ 						var __accu2__ = __accu1__;
/* 000270 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000270 */ 							var __accu3__ = self;
/* 000270 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000270 */ 						}) ());
/* 000270 */ 					}) ();
/* 000270 */ 				}
/* 000270 */ 				return __accu1__;
/* 000270 */ 			}) (), render_context);
/* 000270 */ 		}) ();
/* 000270 */ 	});},
/* 000274 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000274 */ 		if (arguments.length) {
/* 000274 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000274 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000274 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000274 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000274 */ 					switch (__attrib0__) {
/* 000274 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000274 */ 					}
/* 000274 */ 				}
/* 000274 */ 			}
/* 000274 */ 		}
/* 000274 */ 		else {
/* 000274 */ 		}
/* 000278 */ 		return (function () {
/* 000278 */ 			var __accu0__ = '';
/* 000278 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000278 */ 		}) ();
/* 000278 */ 	});},
/* 000281 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000289 */ 		return (function () {
/* 000289 */ 			var __accu0__ = '\n\n';
/* 000289 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000289 */ 				var __accu1__ = [];
/* 000289 */ 				var __iterable0__ = content_list;
/* 000289 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000289 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000289 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000289 */ 						(function () {
/* 000289 */ 							var __accu2__ = __accu1__;
/* 000289 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000289 */ 						}) ();
/* 000289 */ 					}
/* 000289 */ 				}
/* 000289 */ 				return __accu1__;
/* 000289 */ 			}) ());
/* 000289 */ 		}) ();
/* 000289 */ 	});},
/* 000295 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000295 */ 		var annotations = null;
/* 000295 */ 		var target_id = null;
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000302 */ 		return content;
/* 000302 */ 	});},
/* 000304 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000304 */ 		var annotations = null;
/* 000304 */ 		var target_id = null;
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000311 */ 		return content;
/* 000311 */ 	});},
/* 000316 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000327 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000327 */ 		__except0__.__cause__ = null;
/* 000327 */ 		throw __except0__;
/* 000327 */ 	});},
/* 000332 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000332 */ 		if (arguments.length) {
/* 000332 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000332 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000332 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000332 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000332 */ 					switch (__attrib0__) {
/* 000332 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000332 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
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
/* 000335 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000335 */ 		if (arguments.length) {
/* 000335 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000335 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000335 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000335 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000335 */ 					switch (__attrib0__) {
/* 000335 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000335 */ 					}
/* 000335 */ 				}
/* 000335 */ 			}
/* 000335 */ 		}
/* 000335 */ 		else {
/* 000335 */ 		}
/* 000336 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000336 */ 		__except0__.__cause__ = null;
/* 000336 */ 		throw __except0__;
/* 000336 */ 	});},
/* 000338 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000339 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000339 */ 		__except0__.__cause__ = null;
/* 000339 */ 		throw __except0__;
/* 000339 */ 	});},
/* 000341 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000341 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000341 */ 			var annotations = null;
/* 000341 */ 		};
/* 000341 */ 		if (arguments.length) {
/* 000341 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000341 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000341 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000341 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000341 */ 					switch (__attrib0__) {
/* 000341 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000341 */ 					}
/* 000341 */ 				}
/* 000341 */ 			}
/* 000341 */ 		}
/* 000341 */ 		else {
/* 000341 */ 		}
/* 000342 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000342 */ 		__except0__.__cause__ = null;
/* 000342 */ 		throw __except0__;
/* 000342 */ 	});},
/* 000344 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000344 */ 		if (arguments.length) {
/* 000344 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000344 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000344 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000344 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000344 */ 					switch (__attrib0__) {
/* 000344 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000344 */ 					}
/* 000344 */ 				}
/* 000344 */ 			}
/* 000344 */ 		}
/* 000344 */ 		else {
/* 000344 */ 		}
/* 000345 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000345 */ 		__except0__.__cause__ = null;
/* 000345 */ 		throw __except0__;
/* 000345 */ 	});},
/* 000347 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000347 */ 		if (arguments.length) {
/* 000347 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000347 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000347 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000347 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000347 */ 					switch (__attrib0__) {
/* 000347 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000347 */ 					}
/* 000347 */ 				}
/* 000347 */ 			}
/* 000347 */ 		}
/* 000347 */ 		else {
/* 000347 */ 		}
/* 000348 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000348 */ 		__except0__.__cause__ = null;
/* 000348 */ 		throw __except0__;
/* 000348 */ 	});},
/* 000350 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000350 */ 		var target_id_generator = null;
/* 000350 */ 		var annotations = null;
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000352 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000352 */ 		__except0__.__cause__ = null;
/* 000352 */ 		throw __except0__;
/* 000352 */ 	});},
/* 000354 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000354 */ 		var heading_level = 1;
/* 000354 */ 		var inline_heading = false;
/* 000354 */ 		var target_id = null;
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000356 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000356 */ 		__except0__.__cause__ = null;
/* 000356 */ 		throw __except0__;
/* 000356 */ 	});},
/* 000358 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000358 */ 		var is_block_level = false;
/* 000358 */ 		var annotations = null;
/* 000358 */ 		var target_id = null;
/* 000358 */ 		if (arguments.length) {
/* 000358 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000358 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000358 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000358 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000358 */ 					switch (__attrib0__) {
/* 000358 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000358 */ 					}
/* 000358 */ 				}
/* 000358 */ 			}
/* 000358 */ 		}
/* 000358 */ 		else {
/* 000358 */ 		}
/* 000360 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000360 */ 		__except0__.__cause__ = null;
/* 000360 */ 		throw __except0__;
/* 000360 */ 	});},
/* 000362 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000362 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000362 */ 			var annotations = null;
/* 000362 */ 		};
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000376 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000376 */ 		__except0__.__cause__ = null;
/* 000376 */ 		throw __except0__;
/* 000376 */ 	});},
/* 000382 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000383 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000383 */ 		__except0__.__cause__ = null;
/* 000383 */ 		throw __except0__;
/* 000383 */ 	});},
/* 000385 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000386 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000386 */ 		__except0__.__cause__ = null;
/* 000386 */ 		throw __except0__;
/* 000386 */ 	});},
/* 000388 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000388 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000388 */ 			var target_id = null;
/* 000388 */ 		};
/* 000388 */ 		if (arguments.length) {
/* 000388 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000388 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000388 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000388 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000388 */ 					switch (__attrib0__) {
/* 000388 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000388 */ 					}
/* 000388 */ 				}
/* 000388 */ 			}
/* 000388 */ 		}
/* 000388 */ 		else {
/* 000388 */ 		}
/* 000389 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000389 */ 		__except0__.__cause__ = null;
/* 000389 */ 		throw __except0__;
/* 000389 */ 	});},
/* 000396 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000396 */ 		if (arguments.length) {
/* 000396 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000396 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000396 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000396 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000396 */ 					switch (__attrib0__) {
/* 000396 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000396 */ 					}
/* 000396 */ 				}
/* 000396 */ 			}
/* 000396 */ 		}
/* 000396 */ 		else {
/* 000396 */ 		}
/* 000397 */ 		return __t__ (render_context) || __call__ (LLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000397 */ 	});}
/* 000397 */ });
/* 000007 */ 
//# sourceMappingURL=llm.fragmentrenderer._base.map