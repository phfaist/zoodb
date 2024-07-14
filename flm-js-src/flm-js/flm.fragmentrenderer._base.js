/* 000001 */ // Transcrypt'ed from Python, 2024-07-14 20:46:44
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexToken, LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {FLMRenderContext, LatexToken, nodes, LatexWalkerLocatedError};
/* 000001 */ var __name__ = 'flm.fragmentrenderer._base';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000018 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000018 */ 	__module__: __name__,
/* 000025 */ 	supports_delayed_render_markers: false,
/* 000032 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000032 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000032 */ 			var config = null;
/* 000032 */ 		};
/* 000032 */ 		if (arguments.length) {
/* 000032 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000032 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000032 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000032 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000032 */ 					switch (__attrib0__) {
/* 000032 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000032 */ 					}
/* 000032 */ 				}
/* 000032 */ 			}
/* 000032 */ 		}
/* 000032 */ 		else {
/* 000032 */ 		}
/* 000033 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000035 */ 		if (__t__ (config !== null)) {
/* 000036 */ 			var __iterable0__ = (function () {
/* 000036 */ 				var __accu0__ = config;
/* 000036 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000036 */ 			}) ();
/* 000036 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000036 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000036 */ 				var k = __left0__ [0];
/* 000036 */ 				var v = __left0__ [1];
/* 000037 */ 				__call__ (setattr, null, self, k, v);
/* 000037 */ 			}
/* 000037 */ 		}
/* 000037 */ 	});},
/* 000040 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000040 */ 		if (arguments.length) {
/* 000040 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000040 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000040 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000040 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000040 */ 					switch (__attrib0__) {
/* 000040 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000040 */ 					}
/* 000040 */ 				}
/* 000040 */ 			}
/* 000040 */ 		}
/* 000040 */ 		else {
/* 000040 */ 		}
/* 000041 */ 		// pass;
/* 000041 */ 	});},
/* 000043 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000044 */ 		// pass;
/* 000044 */ 	});},
/* 000047 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000047 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000047 */ 			var is_block_level = null;
/* 000047 */ 		};
/* 000047 */ 		if (arguments.length) {
/* 000047 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000047 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000047 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000047 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000047 */ 					switch (__attrib0__) {
/* 000047 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000047 */ 					}
/* 000047 */ 				}
/* 000047 */ 			}
/* 000047 */ 		}
/* 000047 */ 		else {
/* 000047 */ 		}
/* 000048 */ 		try {
/* 000049 */ 			return (function () {
/* 000049 */ 				var __accu0__ = self;
/* 000050 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000050 */ 					var __accu1__ = self;
/* 000050 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000050 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000050 */ 			}) ();
/* 000050 */ 		}
/* 000050 */ 		catch (__except0__) {
/* 000050 */ 			if (isinstance (__except0__, Exception)) {
/* 000050 */ 				var e = __except0__;
/* 000053 */ 				// pass;
/* 000059 */ 				__except0__.__cause__ = null;
/* 000059 */ 				throw __except0__;
/* 000059 */ 			}
/* 000059 */ 			else {
/* 000059 */ 				throw __except0__;
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 	});},
/* 000061 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000061 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000061 */ 			var is_block_level = null;
/* 000061 */ 		};
/* 000061 */ 		if (arguments.length) {
/* 000061 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000061 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000061 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000061 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000061 */ 					switch (__attrib0__) {
/* 000061 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000061 */ 					}
/* 000061 */ 				}
/* 000061 */ 			}
/* 000061 */ 		}
/* 000061 */ 		else {
/* 000061 */ 		}
/* 000076 */ 		if (__t__ (nodelist === null)) {
/* 000077 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000077 */ 			__except0__.__cause__ = null;
/* 000077 */ 			throw __except0__;
/* 000077 */ 		}
/* 000079 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000080 */ 			// pass;
/* 000090 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute: {}'.format (__getslice__ (__call__ (repr, null, nodelist), 0, 100, 1)), __kwargtrans__ ({pos: (__t__ (__call__ (hasattr, null, nodelist, 'pos')) ? __call__ (getattr, null, nodelist, 'pos') : null)}));
/* 000090 */ 			__except0__.__cause__ = null;
/* 000090 */ 			throw __except0__;
/* 000090 */ 		}
/* 000094 */ 		if (__t__ (is_block_level === null)) {
/* 000095 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000095 */ 		}
/* 000097 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000098 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000098 */ 			__except0__.__cause__ = null;
/* 000098 */ 			throw __except0__;
/* 000098 */ 		}
/* 000103 */ 		if (__t__ (is_block_level)) {
/* 000109 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000110 */ 				var node_blocks = nodelist.flm_blocks;
/* 000110 */ 			}
/* 000111 */ 			else {
/* 000112 */ 				var node_blocks = [nodelist];
/* 000112 */ 			}
/* 000114 */ 			return (function () {
/* 000114 */ 				var __accu0__ = self;
/* 000114 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000114 */ 			}) ();
/* 000114 */ 		}
/* 000116 */ 		return (function () {
/* 000116 */ 			var __accu0__ = self;
/* 000116 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000116 */ 		}) ();
/* 000116 */ 	});},
/* 000119 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000119 */ 		if (arguments.length) {
/* 000119 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000119 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000119 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000119 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000119 */ 					switch (__attrib0__) {
/* 000119 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000119 */ 					}
/* 000119 */ 				}
/* 000119 */ 			}
/* 000119 */ 		}
/* 000119 */ 		else {
/* 000119 */ 		}
/* 000120 */ 		var render_context = (function () {
/* 000120 */ 			var __accu0__ = self;
/* 000120 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000120 */ 		}) ();
/* 000122 */ 		try {
/* 000124 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_replace_by_node')) && node.flm_replace_by_node !== null)) {
/* 000127 */ 				return (function () {
/* 000127 */ 					var __accu0__ = self;
/* 000127 */ 					return __call__ (__accu0__.render_node, __accu0__, node.flm_replace_by_node, render_context);
/* 000127 */ 				}) ();
/* 000127 */ 			}
/* 000129 */ 			if (__t__ ((function () {
/* 000129 */ 				var __accu0__ = node;
/* 000129 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000129 */ 			}) ())) {
/* 000130 */ 				return (function () {
/* 000130 */ 					var __accu0__ = self;
/* 000130 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000130 */ 				}) ();
/* 000130 */ 			}
/* 000131 */ 			if (__t__ ((function () {
/* 000131 */ 				var __accu0__ = node;
/* 000131 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000131 */ 			}) ())) {
/* 000132 */ 				return (function () {
/* 000132 */ 					var __accu0__ = self;
/* 000132 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000132 */ 				}) ();
/* 000132 */ 			}
/* 000133 */ 			if (__t__ ((function () {
/* 000133 */ 				var __accu0__ = node;
/* 000133 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000133 */ 			}) ())) {
/* 000134 */ 				return (function () {
/* 000134 */ 					var __accu0__ = self;
/* 000134 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000134 */ 				}) ();
/* 000134 */ 			}
/* 000135 */ 			if (__t__ ((function () {
/* 000135 */ 				var __accu0__ = node;
/* 000135 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000135 */ 			}) ())) {
/* 000136 */ 				return (function () {
/* 000136 */ 					var __accu0__ = self;
/* 000136 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000136 */ 				}) ();
/* 000136 */ 			}
/* 000137 */ 			if (__t__ ((function () {
/* 000137 */ 				var __accu0__ = node;
/* 000137 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000137 */ 			}) ())) {
/* 000138 */ 				return (function () {
/* 000138 */ 					var __accu0__ = self;
/* 000138 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000138 */ 				}) ();
/* 000138 */ 			}
/* 000139 */ 			if (__t__ ((function () {
/* 000139 */ 				var __accu0__ = node;
/* 000139 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000139 */ 			}) ())) {
/* 000140 */ 				return (function () {
/* 000140 */ 					var __accu0__ = self;
/* 000140 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000140 */ 				}) ();
/* 000140 */ 			}
/* 000141 */ 			if (__t__ ((function () {
/* 000141 */ 				var __accu0__ = node;
/* 000141 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000141 */ 			}) ())) {
/* 000142 */ 				return (function () {
/* 000142 */ 					var __accu0__ = self;
/* 000142 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000142 */ 				}) ();
/* 000142 */ 			}
/* 000144 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000144 */ 			__except0__.__cause__ = null;
/* 000144 */ 			throw __except0__;
/* 000144 */ 		}
/* 000144 */ 		catch (__except0__) {
/* 000144 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000144 */ 				var e = __except0__;
/* 000148 */ 				(function () {
/* 000148 */ 					var __accu0__ = e;
/* 000148 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000148 */ 				}) ();
/* 000149 */ 				var __except1__ = e;
/* 000149 */ 				__except1__.__cause__ = null;
/* 000149 */ 				throw __except1__;
/* 000149 */ 			}
/* 000149 */ 			else if (isinstance (__except0__, Exception)) {
/* 000149 */ 				var e = __except0__;
/* 000152 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000152 */ 				__except1__.__cause__ = null;
/* 000152 */ 				throw __except1__;
/* 000152 */ 			}
/* 000152 */ 			else {
/* 000152 */ 				throw __except0__;
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 	});},
/* 000155 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
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
/* 000156 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000157 */ 			var chars_value = node.flm_chars_value;
/* 000157 */ 		}
/* 000158 */ 		else {
/* 000159 */ 			var chars_value = null;
/* 000159 */ 		}
/* 000160 */ 		if (__t__ (chars_value === null)) {
/* 000162 */ 			var chars_value = node.chars;
/* 000162 */ 		}
/* 000163 */ 		return (function () {
/* 000163 */ 			var __accu0__ = self;
/* 000163 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000163 */ 		}) ();
/* 000163 */ 	});},
/* 000165 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000165 */ 		if (arguments.length) {
/* 000165 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000165 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000165 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000165 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000165 */ 					switch (__attrib0__) {
/* 000165 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000165 */ 					}
/* 000165 */ 				}
/* 000165 */ 			}
/* 000165 */ 		}
/* 000165 */ 		else {
/* 000165 */ 		}
/* 000166 */ 		return '';
/* 000166 */ 	});},
/* 000168 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000168 */ 		if (arguments.length) {
/* 000168 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000168 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000168 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000168 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000168 */ 					switch (__attrib0__) {
/* 000168 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000168 */ 					}
/* 000168 */ 				}
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 		else {
/* 000168 */ 		}
/* 000169 */ 		return (function () {
/* 000169 */ 			var __accu0__ = self;
/* 000170 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000170 */ 				var __accu1__ = self;
/* 000170 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000170 */ 			}) ());
/* 000170 */ 		}) ();
/* 000170 */ 	});},
/* 000172 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000172 */ 		if (arguments.length) {
/* 000172 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000172 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000172 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000172 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000172 */ 					switch (__attrib0__) {
/* 000172 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000172 */ 					}
/* 000172 */ 				}
/* 000172 */ 			}
/* 000172 */ 		}
/* 000172 */ 		else {
/* 000172 */ 		}
/* 000173 */ 		return (function () {
/* 000173 */ 			var __accu0__ = self;
/* 000174 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000174 */ 				var __accu1__ = self;
/* 000174 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000174 */ 			}) ());
/* 000174 */ 		}) ();
/* 000174 */ 	});},
/* 000176 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000176 */ 		if (arguments.length) {
/* 000176 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000176 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000176 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000176 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000176 */ 					switch (__attrib0__) {
/* 000176 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000176 */ 					}
/* 000176 */ 				}
/* 000176 */ 			}
/* 000176 */ 		}
/* 000176 */ 		else {
/* 000176 */ 		}
/* 000177 */ 		return (function () {
/* 000177 */ 			var __accu0__ = self;
/* 000178 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000178 */ 				var __accu1__ = self;
/* 000178 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000178 */ 			}) ());
/* 000178 */ 		}) ();
/* 000178 */ 	});},
/* 000180 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000180 */ 		if (arguments.length) {
/* 000180 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000180 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000180 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000180 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000180 */ 					switch (__attrib0__) {
/* 000180 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000180 */ 					}
/* 000180 */ 				}
/* 000180 */ 			}
/* 000180 */ 		}
/* 000180 */ 		else {
/* 000180 */ 		}
/* 000181 */ 		return (function () {
/* 000181 */ 			var __accu0__ = self;
/* 000182 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000182 */ 				var __accu1__ = self;
/* 000182 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000182 */ 			}) ());
/* 000182 */ 		}) ();
/* 000182 */ 	});},
/* 000184 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000184 */ 		if (arguments.length) {
/* 000184 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000184 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000184 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000184 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000184 */ 					switch (__attrib0__) {
/* 000184 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000184 */ 					}
/* 000184 */ 				}
/* 000184 */ 			}
/* 000184 */ 		}
/* 000184 */ 		else {
/* 000184 */ 		}
/* 000190 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000191 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000191 */ 			__except0__.__cause__ = null;
/* 000191 */ 			throw __except0__;
/* 000191 */ 		}
/* 000193 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000194 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000196 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000196 */ 					var __accu0__ = node;
/* 000196 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000196 */ 				}) ()));
/* 000196 */ 				__except0__.__cause__ = null;
/* 000196 */ 				throw __except0__;
/* 000196 */ 			}
/* 000196 */ 		}
/* 000199 */ 		return (function () {
/* 000199 */ 			var __accu0__ = self;
/* 000202 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000202 */ 				var __accu1__ = self;
/* 000202 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000202 */ 			}) ());
/* 000202 */ 		}) ();
/* 000202 */ 	});},
/* 000207 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000207 */ 		if (arguments.length) {
/* 000207 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000207 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000207 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000207 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000207 */ 					switch (__attrib0__) {
/* 000207 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000207 */ 					}
/* 000207 */ 				}
/* 000207 */ 			}
/* 000207 */ 		}
/* 000207 */ 		else {
/* 000207 */ 		}
/* 000207 */ 		assert (render_context !== null);
/* 000212 */ 		if (__t__ (flm_specinfo === null)) {
/* 000213 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000213 */ 			__except0__.__cause__ = null;
/* 000213 */ 			throw __except0__;
/* 000213 */ 		}
/* 000215 */ 		var is_delayed_render = (function () {
/* 000215 */ 			var __accu0__ = render_context;
/* 000215 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000215 */ 		}) ();
/* 000216 */ 		if (__t__ (is_delayed_render)) {
/* 000219 */ 			var is_first_pass = render_context.is_first_pass;
/* 000220 */ 			var delayed_key = null;
/* 000222 */ 			if (__t__ (is_first_pass)) {
/* 000223 */ 				(function () {
/* 000223 */ 					var __accu0__ = flm_specinfo;
/* 000223 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000223 */ 				}) ();
/* 000224 */ 				var delayed_key = (function () {
/* 000224 */ 					var __accu0__ = render_context;
/* 000224 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000224 */ 				}) ();
/* 000224 */ 			}
/* 000226 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000229 */ 				return (function () {
/* 000229 */ 					var __accu0__ = self;
/* 000229 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000229 */ 				}) ();
/* 000229 */ 			}
/* 000230 */ 			else if (__t__ (is_first_pass)) {
/* 000232 */ 				(function () {
/* 000232 */ 					var __accu0__ = flm_specinfo;
/* 000232 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000232 */ 				}) ();
/* 000234 */ 				return (function () {
/* 000234 */ 					var __accu0__ = self;
/* 000234 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000234 */ 				}) ();
/* 000234 */ 			}
/* 000235 */ 			else {
/* 000235 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000239 */ 				return (function () {
/* 000239 */ 					var __accu0__ = render_context;
/* 000239 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000239 */ 				}) ();
/* 000239 */ 			}
/* 000239 */ 		}
/* 000243 */ 		var value = (function () {
/* 000243 */ 			var __accu0__ = flm_specinfo;
/* 000243 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000243 */ 		}) ();
/* 000244 */ 		return value;
/* 000244 */ 	});},
/* 000246 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000246 */ 		if (arguments.length) {
/* 000246 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000246 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000246 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000246 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000246 */ 					switch (__attrib0__) {
/* 000246 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000246 */ 					}
/* 000246 */ 				}
/* 000246 */ 			}
/* 000246 */ 		}
/* 000246 */ 		else {
/* 000246 */ 		}
/* 000247 */ 		return (function () {
/* 000247 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000250 */ 				var __accu1__ = self;
/* 000250 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000250 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000255 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000255 */ 		var environmentname = null;
/* 000255 */ 		var target_id = null;
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000263 */ 		var __left0__ = delimiters;
/* 000263 */ 		var begin_delim = __left0__ [0];
/* 000263 */ 		var end_delim = __left0__ [1];
/* 000264 */ 		if (__t__ (environmentname)) {
/* 000265 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000266 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000266 */ 		}
/* 000268 */ 		var rendered = (function () {
/* 000268 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (begin_delim, (function () {
/* 000269 */ 				var __accu1__ = nodelist;
/* 000269 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000269 */ 			}) ()), end_delim), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000269 */ 		}) ();
/* 000275 */ 		return rendered;
/* 000275 */ 	});},
/* 000282 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000284 */ 		var rendered_blocks = [];
/* 000286 */ 		var __iterable0__ = node_blocks;
/* 000286 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000286 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000288 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000289 */ 				var para = (function () {
/* 000289 */ 					var __accu0__ = self;
/* 000289 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000289 */ 				}) ();
/* 000289 */ 			}
/* 000290 */ 			else {
/* 000291 */ 				var para = (function () {
/* 000291 */ 					var __accu0__ = self;
/* 000291 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000291 */ 				}) ();
/* 000291 */ 			}
/* 000293 */ 			(function () {
/* 000293 */ 				var __accu0__ = rendered_blocks;
/* 000293 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000293 */ 			}) ();
/* 000293 */ 		}
/* 000295 */ 		return (function () {
/* 000295 */ 			var __accu0__ = self;
/* 000295 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000295 */ 		}) ();
/* 000295 */ 	});},
/* 000298 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000298 */ 		if (arguments.length) {
/* 000298 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000298 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000298 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000298 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000298 */ 					switch (__attrib0__) {
/* 000298 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000298 */ 					}
/* 000298 */ 				}
/* 000298 */ 			}
/* 000298 */ 		}
/* 000298 */ 		else {
/* 000298 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000304 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000305 */ 		return (function () {
/* 000305 */ 			var __accu0__ = self;
/* 000305 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000305 */ 				var __accu1__ = [];
/* 000305 */ 				var __iterable0__ = nodelist;
/* 000305 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000306 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000306 */ 					(function () {
/* 000306 */ 						var __accu2__ = __accu1__;
/* 000305 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000305 */ 							var __accu3__ = self;
/* 000305 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000305 */ 						}) ());
/* 000305 */ 					}) ();
/* 000305 */ 				}
/* 000305 */ 				return __accu1__;
/* 000305 */ 			}) (), render_context);
/* 000305 */ 		}) ();
/* 000305 */ 	});},
/* 000309 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000309 */ 		if (arguments.length) {
/* 000309 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000309 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000309 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000309 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000309 */ 					switch (__attrib0__) {
/* 000309 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000309 */ 					}
/* 000309 */ 				}
/* 000309 */ 			}
/* 000309 */ 		}
/* 000309 */ 		else {
/* 000309 */ 		}
/* 000313 */ 		return (function () {
/* 000313 */ 			var __accu0__ = '';
/* 000313 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000313 */ 		}) ();
/* 000313 */ 	});},
/* 000316 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000316 */ 		if (arguments.length) {
/* 000316 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000316 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000316 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000316 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000316 */ 					switch (__attrib0__) {
/* 000316 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000316 */ 					}
/* 000316 */ 				}
/* 000316 */ 			}
/* 000316 */ 		}
/* 000316 */ 		else {
/* 000316 */ 		}
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = '\n\n';
/* 000324 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000324 */ 				var __accu1__ = [];
/* 000324 */ 				var __iterable0__ = content_list;
/* 000324 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000324 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000324 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000324 */ 						(function () {
/* 000324 */ 							var __accu2__ = __accu1__;
/* 000324 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000324 */ 						}) ();
/* 000324 */ 					}
/* 000324 */ 				}
/* 000324 */ 				return __accu1__;
/* 000324 */ 			}) ());
/* 000324 */ 		}) ();
/* 000324 */ 	});},
/* 000330 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000330 */ 		var annotations = null;
/* 000330 */ 		var target_id = null;
/* 000330 */ 		if (arguments.length) {
/* 000330 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000330 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000330 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000330 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000330 */ 					switch (__attrib0__) {
/* 000330 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000330 */ 					}
/* 000330 */ 				}
/* 000330 */ 			}
/* 000330 */ 		}
/* 000330 */ 		else {
/* 000330 */ 		}
/* 000337 */ 		return content;
/* 000337 */ 	});},
/* 000339 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000339 */ 		var annotations = null;
/* 000339 */ 		var target_id = null;
/* 000339 */ 		if (arguments.length) {
/* 000339 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000339 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000339 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000339 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000339 */ 					switch (__attrib0__) {
/* 000339 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000339 */ 					}
/* 000339 */ 				}
/* 000339 */ 			}
/* 000339 */ 		}
/* 000339 */ 		else {
/* 000339 */ 		}
/* 000346 */ 		return content;
/* 000346 */ 	});},
/* 000351 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000362 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000362 */ 		__except0__.__cause__ = null;
/* 000362 */ 		throw __except0__;
/* 000362 */ 	});},
/* 000367 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000368 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000368 */ 		__except0__.__cause__ = null;
/* 000368 */ 		throw __except0__;
/* 000368 */ 	});},
/* 000370 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000370 */ 		if (arguments.length) {
/* 000370 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000370 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000370 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000370 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000370 */ 					switch (__attrib0__) {
/* 000370 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000370 */ 					}
/* 000370 */ 				}
/* 000370 */ 			}
/* 000370 */ 		}
/* 000370 */ 		else {
/* 000370 */ 		}
/* 000371 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000371 */ 		__except0__.__cause__ = null;
/* 000371 */ 		throw __except0__;
/* 000371 */ 	});},
/* 000373 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000374 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000374 */ 		__except0__.__cause__ = null;
/* 000374 */ 		throw __except0__;
/* 000374 */ 	});},
/* 000376 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000376 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000376 */ 			var annotations = null;
/* 000376 */ 		};
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 					}
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 		}
/* 000376 */ 		else {
/* 000376 */ 		}
/* 000377 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000377 */ 		__except0__.__cause__ = null;
/* 000377 */ 		throw __except0__;
/* 000377 */ 	});},
/* 000379 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 					}
/* 000379 */ 				}
/* 000379 */ 			}
/* 000379 */ 		}
/* 000379 */ 		else {
/* 000379 */ 		}
/* 000380 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000380 */ 		__except0__.__cause__ = null;
/* 000380 */ 		throw __except0__;
/* 000380 */ 	});},
/* 000382 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000383 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000383 */ 		__except0__.__cause__ = null;
/* 000383 */ 		throw __except0__;
/* 000383 */ 	});},
/* 000385 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000385 */ 		var target_id_generator = null;
/* 000385 */ 		var annotations = null;
/* 000385 */ 		if (arguments.length) {
/* 000385 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000385 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000385 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000385 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000385 */ 					switch (__attrib0__) {
/* 000385 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000385 */ 					}
/* 000385 */ 				}
/* 000385 */ 			}
/* 000385 */ 		}
/* 000385 */ 		else {
/* 000385 */ 		}
/* 000387 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000387 */ 		__except0__.__cause__ = null;
/* 000387 */ 		throw __except0__;
/* 000387 */ 	});},
/* 000389 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000389 */ 		var heading_level = 1;
/* 000389 */ 		var inline_heading = false;
/* 000389 */ 		var target_id = null;
/* 000389 */ 		var annotations = null;
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000395 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000395 */ 		__except0__.__cause__ = null;
/* 000395 */ 		throw __except0__;
/* 000395 */ 	});},
/* 000397 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000397 */ 		var is_block_level = false;
/* 000397 */ 		var annotations = null;
/* 000397 */ 		var target_id = null;
/* 000397 */ 		if (arguments.length) {
/* 000397 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000397 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000397 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000397 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000397 */ 					switch (__attrib0__) {
/* 000397 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000397 */ 					}
/* 000397 */ 				}
/* 000397 */ 			}
/* 000397 */ 		}
/* 000397 */ 		else {
/* 000397 */ 		}
/* 000399 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000399 */ 		__except0__.__cause__ = null;
/* 000399 */ 		throw __except0__;
/* 000399 */ 	});},
/* 000401 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000401 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000401 */ 			var annotations = null;
/* 000401 */ 		};
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000415 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000415 */ 		__except0__.__cause__ = null;
/* 000415 */ 		throw __except0__;
/* 000415 */ 	});},
/* 000421 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 					}
/* 000421 */ 				}
/* 000421 */ 			}
/* 000421 */ 		}
/* 000421 */ 		else {
/* 000421 */ 		}
/* 000422 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000422 */ 		__except0__.__cause__ = null;
/* 000422 */ 		throw __except0__;
/* 000422 */ 	});},
/* 000424 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 					}
/* 000424 */ 				}
/* 000424 */ 			}
/* 000424 */ 		}
/* 000424 */ 		else {
/* 000424 */ 		}
/* 000425 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000425 */ 		__except0__.__cause__ = null;
/* 000425 */ 		throw __except0__;
/* 000425 */ 	});},
/* 000427 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000427 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000427 */ 			var target_id = null;
/* 000427 */ 		};
/* 000427 */ 		if (arguments.length) {
/* 000427 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000427 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000427 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000427 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000427 */ 					switch (__attrib0__) {
/* 000427 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000427 */ 					}
/* 000427 */ 				}
/* 000427 */ 			}
/* 000427 */ 		}
/* 000427 */ 		else {
/* 000427 */ 		}
/* 000428 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000428 */ 		__except0__.__cause__ = null;
/* 000428 */ 		throw __except0__;
/* 000428 */ 	});},
/* 000435 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000435 */ 		if (arguments.length) {
/* 000435 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000435 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000435 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000435 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000435 */ 					switch (__attrib0__) {
/* 000435 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000435 */ 					}
/* 000435 */ 				}
/* 000435 */ 			}
/* 000435 */ 		}
/* 000435 */ 		else {
/* 000435 */ 		}
/* 000436 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000436 */ 	});}
/* 000436 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map