/* 000001 */ // Transcrypt'ed from Python, 2023-10-16 20:52:36
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexToken, LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {nodes, LatexWalkerLocatedError, FLMRenderContext, LatexToken};
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
/* 000088 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute: {}'.format (__getslice__ (__call__ (repr, null, nodelist), 0, 100, 1)), __kwargtrans__ ({pos: __call__ (getattr, null, nodelist, 'pos', null)}));
/* 000088 */ 			__except0__.__cause__ = null;
/* 000088 */ 			throw __except0__;
/* 000088 */ 		}
/* 000091 */ 		if (__t__ (is_block_level === null)) {
/* 000092 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000092 */ 		}
/* 000094 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000095 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000095 */ 			__except0__.__cause__ = null;
/* 000095 */ 			throw __except0__;
/* 000095 */ 		}
/* 000100 */ 		if (__t__ (is_block_level)) {
/* 000106 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000107 */ 				var node_blocks = nodelist.flm_blocks;
/* 000107 */ 			}
/* 000108 */ 			else {
/* 000109 */ 				var node_blocks = [nodelist];
/* 000109 */ 			}
/* 000111 */ 			return (function () {
/* 000111 */ 				var __accu0__ = self;
/* 000111 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000111 */ 			}) ();
/* 000111 */ 		}
/* 000113 */ 		return (function () {
/* 000113 */ 			var __accu0__ = self;
/* 000113 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000113 */ 		}) ();
/* 000113 */ 	});},
/* 000116 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000116 */ 		if (arguments.length) {
/* 000116 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000116 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000116 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000116 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000116 */ 					switch (__attrib0__) {
/* 000116 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000116 */ 					}
/* 000116 */ 				}
/* 000116 */ 			}
/* 000116 */ 		}
/* 000116 */ 		else {
/* 000116 */ 		}
/* 000117 */ 		var render_context = (function () {
/* 000117 */ 			var __accu0__ = self;
/* 000117 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000117 */ 		}) ();
/* 000119 */ 		try {
/* 000121 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_replace_by_node')) && node.flm_replace_by_node !== null)) {
/* 000124 */ 				return (function () {
/* 000124 */ 					var __accu0__ = self;
/* 000124 */ 					return __call__ (__accu0__.render_node, __accu0__, node.flm_replace_by_node, render_context);
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000126 */ 			if (__t__ ((function () {
/* 000126 */ 				var __accu0__ = node;
/* 000126 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000126 */ 			}) ())) {
/* 000127 */ 				return (function () {
/* 000127 */ 					var __accu0__ = self;
/* 000127 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000127 */ 				}) ();
/* 000127 */ 			}
/* 000128 */ 			if (__t__ ((function () {
/* 000128 */ 				var __accu0__ = node;
/* 000128 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000128 */ 			}) ())) {
/* 000129 */ 				return (function () {
/* 000129 */ 					var __accu0__ = self;
/* 000129 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000129 */ 				}) ();
/* 000129 */ 			}
/* 000130 */ 			if (__t__ ((function () {
/* 000130 */ 				var __accu0__ = node;
/* 000130 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000130 */ 			}) ())) {
/* 000131 */ 				return (function () {
/* 000131 */ 					var __accu0__ = self;
/* 000131 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000131 */ 				}) ();
/* 000131 */ 			}
/* 000132 */ 			if (__t__ ((function () {
/* 000132 */ 				var __accu0__ = node;
/* 000132 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000132 */ 			}) ())) {
/* 000133 */ 				return (function () {
/* 000133 */ 					var __accu0__ = self;
/* 000133 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000133 */ 				}) ();
/* 000133 */ 			}
/* 000134 */ 			if (__t__ ((function () {
/* 000134 */ 				var __accu0__ = node;
/* 000134 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000134 */ 			}) ())) {
/* 000135 */ 				return (function () {
/* 000135 */ 					var __accu0__ = self;
/* 000135 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000135 */ 				}) ();
/* 000135 */ 			}
/* 000136 */ 			if (__t__ ((function () {
/* 000136 */ 				var __accu0__ = node;
/* 000136 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000136 */ 			}) ())) {
/* 000137 */ 				return (function () {
/* 000137 */ 					var __accu0__ = self;
/* 000137 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000137 */ 				}) ();
/* 000137 */ 			}
/* 000138 */ 			if (__t__ ((function () {
/* 000138 */ 				var __accu0__ = node;
/* 000138 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000138 */ 			}) ())) {
/* 000139 */ 				return (function () {
/* 000139 */ 					var __accu0__ = self;
/* 000139 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000139 */ 				}) ();
/* 000139 */ 			}
/* 000141 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000141 */ 			__except0__.__cause__ = null;
/* 000141 */ 			throw __except0__;
/* 000141 */ 		}
/* 000141 */ 		catch (__except0__) {
/* 000141 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000141 */ 				var e = __except0__;
/* 000145 */ 				(function () {
/* 000145 */ 					var __accu0__ = e;
/* 000145 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000145 */ 				}) ();
/* 000146 */ 				var __except1__ = e;
/* 000146 */ 				__except1__.__cause__ = null;
/* 000146 */ 				throw __except1__;
/* 000146 */ 			}
/* 000146 */ 			else if (isinstance (__except0__, Exception)) {
/* 000146 */ 				var e = __except0__;
/* 000149 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000149 */ 				__except1__.__cause__ = null;
/* 000149 */ 				throw __except1__;
/* 000149 */ 			}
/* 000149 */ 			else {
/* 000149 */ 				throw __except0__;
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 	});},
/* 000152 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000152 */ 		if (arguments.length) {
/* 000152 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000152 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000152 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000152 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000152 */ 					switch (__attrib0__) {
/* 000152 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000152 */ 					}
/* 000152 */ 				}
/* 000152 */ 			}
/* 000152 */ 		}
/* 000152 */ 		else {
/* 000152 */ 		}
/* 000153 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000154 */ 			var chars_value = node.flm_chars_value;
/* 000154 */ 		}
/* 000155 */ 		else {
/* 000156 */ 			var chars_value = null;
/* 000156 */ 		}
/* 000157 */ 		if (__t__ (chars_value === null)) {
/* 000159 */ 			var chars_value = node.chars;
/* 000159 */ 		}
/* 000160 */ 		return (function () {
/* 000160 */ 			var __accu0__ = self;
/* 000160 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000160 */ 		}) ();
/* 000160 */ 	});},
/* 000162 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000162 */ 		if (arguments.length) {
/* 000162 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000162 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000162 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000162 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000162 */ 					switch (__attrib0__) {
/* 000162 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000162 */ 					}
/* 000162 */ 				}
/* 000162 */ 			}
/* 000162 */ 		}
/* 000162 */ 		else {
/* 000162 */ 		}
/* 000163 */ 		return '';
/* 000163 */ 	});},
/* 000165 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
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
/* 000166 */ 		return (function () {
/* 000166 */ 			var __accu0__ = self;
/* 000167 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000167 */ 				var __accu1__ = self;
/* 000167 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000167 */ 			}) ());
/* 000167 */ 		}) ();
/* 000167 */ 	});},
/* 000169 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000169 */ 		if (arguments.length) {
/* 000169 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000169 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000169 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000169 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000169 */ 					switch (__attrib0__) {
/* 000169 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000169 */ 					}
/* 000169 */ 				}
/* 000169 */ 			}
/* 000169 */ 		}
/* 000169 */ 		else {
/* 000169 */ 		}
/* 000170 */ 		return (function () {
/* 000170 */ 			var __accu0__ = self;
/* 000171 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000171 */ 				var __accu1__ = self;
/* 000171 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000171 */ 			}) ());
/* 000171 */ 		}) ();
/* 000171 */ 	});},
/* 000173 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
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
/* 000174 */ 			var __accu0__ = self;
/* 000175 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000175 */ 				var __accu1__ = self;
/* 000175 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000175 */ 			}) ());
/* 000175 */ 		}) ();
/* 000175 */ 	});},
/* 000177 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000177 */ 		if (arguments.length) {
/* 000177 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000177 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000177 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000177 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000177 */ 					switch (__attrib0__) {
/* 000177 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000177 */ 					}
/* 000177 */ 				}
/* 000177 */ 			}
/* 000177 */ 		}
/* 000177 */ 		else {
/* 000177 */ 		}
/* 000178 */ 		return (function () {
/* 000178 */ 			var __accu0__ = self;
/* 000179 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000179 */ 				var __accu1__ = self;
/* 000179 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000179 */ 			}) ());
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000181 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000181 */ 		if (arguments.length) {
/* 000181 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000181 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000181 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000181 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000181 */ 					switch (__attrib0__) {
/* 000181 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000181 */ 					}
/* 000181 */ 				}
/* 000181 */ 			}
/* 000181 */ 		}
/* 000181 */ 		else {
/* 000181 */ 		}
/* 000187 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000188 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000188 */ 			__except0__.__cause__ = null;
/* 000188 */ 			throw __except0__;
/* 000188 */ 		}
/* 000190 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000191 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000193 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000193 */ 					var __accu0__ = node;
/* 000193 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000193 */ 				}) ()));
/* 000193 */ 				__except0__.__cause__ = null;
/* 000193 */ 				throw __except0__;
/* 000193 */ 			}
/* 000193 */ 		}
/* 000196 */ 		return (function () {
/* 000196 */ 			var __accu0__ = self;
/* 000199 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000199 */ 				var __accu1__ = self;
/* 000199 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000199 */ 			}) ());
/* 000199 */ 		}) ();
/* 000199 */ 	});},
/* 000204 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000204 */ 		if (arguments.length) {
/* 000204 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000204 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000204 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000204 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000204 */ 					switch (__attrib0__) {
/* 000204 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000204 */ 					}
/* 000204 */ 				}
/* 000204 */ 			}
/* 000204 */ 		}
/* 000204 */ 		else {
/* 000204 */ 		}
/* 000204 */ 		assert (render_context !== null);
/* 000209 */ 		if (__t__ (flm_specinfo === null)) {
/* 000210 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000210 */ 			__except0__.__cause__ = null;
/* 000210 */ 			throw __except0__;
/* 000210 */ 		}
/* 000212 */ 		var is_delayed_render = (function () {
/* 000212 */ 			var __accu0__ = render_context;
/* 000212 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000212 */ 		}) ();
/* 000213 */ 		if (__t__ (is_delayed_render)) {
/* 000216 */ 			var is_first_pass = render_context.is_first_pass;
/* 000217 */ 			var delayed_key = null;
/* 000219 */ 			if (__t__ (is_first_pass)) {
/* 000220 */ 				(function () {
/* 000220 */ 					var __accu0__ = flm_specinfo;
/* 000220 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000220 */ 				}) ();
/* 000221 */ 				var delayed_key = (function () {
/* 000221 */ 					var __accu0__ = render_context;
/* 000221 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000221 */ 				}) ();
/* 000221 */ 			}
/* 000223 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000226 */ 				return (function () {
/* 000226 */ 					var __accu0__ = self;
/* 000226 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000226 */ 				}) ();
/* 000226 */ 			}
/* 000227 */ 			else if (__t__ (is_first_pass)) {
/* 000229 */ 				(function () {
/* 000229 */ 					var __accu0__ = flm_specinfo;
/* 000229 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000229 */ 				}) ();
/* 000231 */ 				return (function () {
/* 000231 */ 					var __accu0__ = self;
/* 000231 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000231 */ 				}) ();
/* 000231 */ 			}
/* 000232 */ 			else {
/* 000232 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000236 */ 				return (function () {
/* 000236 */ 					var __accu0__ = render_context;
/* 000236 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000236 */ 				}) ();
/* 000236 */ 			}
/* 000236 */ 		}
/* 000240 */ 		var value = (function () {
/* 000240 */ 			var __accu0__ = flm_specinfo;
/* 000240 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000240 */ 		}) ();
/* 000241 */ 		return value;
/* 000241 */ 	});},
/* 000243 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000243 */ 		if (arguments.length) {
/* 000243 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000243 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000243 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000243 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000243 */ 					switch (__attrib0__) {
/* 000243 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000243 */ 					}
/* 000243 */ 				}
/* 000243 */ 			}
/* 000243 */ 		}
/* 000243 */ 		else {
/* 000243 */ 		}
/* 000244 */ 		return (function () {
/* 000244 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000247 */ 				var __accu1__ = self;
/* 000247 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000247 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000247 */ 		}) ();
/* 000247 */ 	});},
/* 000252 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000252 */ 		var environmentname = null;
/* 000252 */ 		var target_id = null;
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000260 */ 		var __left0__ = delimiters;
/* 000260 */ 		var begin_delim = __left0__ [0];
/* 000260 */ 		var end_delim = __left0__ [1];
/* 000261 */ 		if (__t__ (environmentname)) {
/* 000262 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000263 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000263 */ 		}
/* 000265 */ 		var rendered = (function () {
/* 000265 */ 			var __accu0__ = self;
/* 000266 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (begin_delim, (function () {
/* 000266 */ 				var __accu1__ = nodelist;
/* 000266 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000266 */ 			}) ()), end_delim), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000266 */ 		}) ();
/* 000272 */ 		return rendered;
/* 000272 */ 	});},
/* 000279 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000279 */ 		if (arguments.length) {
/* 000279 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000279 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000279 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000279 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000279 */ 					switch (__attrib0__) {
/* 000279 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000279 */ 					}
/* 000279 */ 				}
/* 000279 */ 			}
/* 000279 */ 		}
/* 000279 */ 		else {
/* 000279 */ 		}
/* 000281 */ 		var rendered_blocks = [];
/* 000283 */ 		var __iterable0__ = node_blocks;
/* 000283 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000283 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000285 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000286 */ 				var para = (function () {
/* 000286 */ 					var __accu0__ = self;
/* 000286 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000286 */ 				}) ();
/* 000286 */ 			}
/* 000287 */ 			else {
/* 000288 */ 				var para = (function () {
/* 000288 */ 					var __accu0__ = self;
/* 000288 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000288 */ 				}) ();
/* 000288 */ 			}
/* 000290 */ 			(function () {
/* 000290 */ 				var __accu0__ = rendered_blocks;
/* 000290 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000290 */ 			}) ();
/* 000290 */ 		}
/* 000292 */ 		return (function () {
/* 000292 */ 			var __accu0__ = self;
/* 000292 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000292 */ 		}) ();
/* 000292 */ 	});},
/* 000295 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000295 */ 		if (arguments.length) {
/* 000295 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000295 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000295 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000295 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000295 */ 					switch (__attrib0__) {
/* 000295 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000295 */ 					}
/* 000295 */ 				}
/* 000295 */ 			}
/* 000295 */ 		}
/* 000295 */ 		else {
/* 000295 */ 		}
/* 000299 */ 		return (function () {
/* 000299 */ 			var __accu0__ = self;
/* 000299 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000299 */ 		}) ();
/* 000299 */ 	});},
/* 000301 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000301 */ 		if (arguments.length) {
/* 000301 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000301 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000301 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000301 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000301 */ 					switch (__attrib0__) {
/* 000301 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000301 */ 					}
/* 000301 */ 				}
/* 000301 */ 			}
/* 000301 */ 		}
/* 000301 */ 		else {
/* 000301 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = self;
/* 000302 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000302 */ 				var __accu1__ = [];
/* 000302 */ 				var __iterable0__ = nodelist;
/* 000302 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000303 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000303 */ 					(function () {
/* 000303 */ 						var __accu2__ = __accu1__;
/* 000302 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000302 */ 							var __accu3__ = self;
/* 000302 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000302 */ 						}) ());
/* 000302 */ 					}) ();
/* 000302 */ 				}
/* 000302 */ 				return __accu1__;
/* 000302 */ 			}) (), render_context);
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000306 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000306 */ 		if (arguments.length) {
/* 000306 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000306 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000306 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000306 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000306 */ 					switch (__attrib0__) {
/* 000306 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000306 */ 					}
/* 000306 */ 				}
/* 000306 */ 			}
/* 000306 */ 		}
/* 000306 */ 		else {
/* 000306 */ 		}
/* 000310 */ 		return (function () {
/* 000310 */ 			var __accu0__ = '';
/* 000310 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000310 */ 		}) ();
/* 000310 */ 	});},
/* 000313 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000321 */ 		return (function () {
/* 000321 */ 			var __accu0__ = '\n\n';
/* 000321 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000321 */ 				var __accu1__ = [];
/* 000321 */ 				var __iterable0__ = content_list;
/* 000321 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000321 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000321 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000321 */ 						(function () {
/* 000321 */ 							var __accu2__ = __accu1__;
/* 000321 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000321 */ 						}) ();
/* 000321 */ 					}
/* 000321 */ 				}
/* 000321 */ 				return __accu1__;
/* 000321 */ 			}) ());
/* 000321 */ 		}) ();
/* 000321 */ 	});},
/* 000327 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000327 */ 		var annotations = null;
/* 000327 */ 		var target_id = null;
/* 000327 */ 		if (arguments.length) {
/* 000327 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000327 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000327 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000327 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000327 */ 					switch (__attrib0__) {
/* 000327 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000327 */ 					}
/* 000327 */ 				}
/* 000327 */ 			}
/* 000327 */ 		}
/* 000327 */ 		else {
/* 000327 */ 		}
/* 000334 */ 		return content;
/* 000334 */ 	});},
/* 000336 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000336 */ 		var annotations = null;
/* 000336 */ 		var target_id = null;
/* 000336 */ 		if (arguments.length) {
/* 000336 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000336 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000336 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000336 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000336 */ 					switch (__attrib0__) {
/* 000336 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000336 */ 					}
/* 000336 */ 				}
/* 000336 */ 			}
/* 000336 */ 		}
/* 000336 */ 		else {
/* 000336 */ 		}
/* 000343 */ 		return content;
/* 000343 */ 	});},
/* 000348 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000348 */ 		if (arguments.length) {
/* 000348 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000348 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000348 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000348 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000348 */ 					switch (__attrib0__) {
/* 000348 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 					}
/* 000348 */ 				}
/* 000348 */ 			}
/* 000348 */ 		}
/* 000348 */ 		else {
/* 000348 */ 		}
/* 000359 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000359 */ 		__except0__.__cause__ = null;
/* 000359 */ 		throw __except0__;
/* 000359 */ 	});},
/* 000364 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000365 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000365 */ 		__except0__.__cause__ = null;
/* 000365 */ 		throw __except0__;
/* 000365 */ 	});},
/* 000367 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
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
/* 000370 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
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
/* 000373 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000373 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000373 */ 			var annotations = null;
/* 000373 */ 		};
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
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
/* 000376 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
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
/* 000379 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000379 */ 		if (arguments.length) {
/* 000379 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000379 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000379 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000379 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000379 */ 					switch (__attrib0__) {
/* 000379 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000379 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
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
/* 000382 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000382 */ 		var target_id_generator = null;
/* 000382 */ 		var annotations = null;
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000384 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000384 */ 		__except0__.__cause__ = null;
/* 000384 */ 		throw __except0__;
/* 000384 */ 	});},
/* 000386 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000386 */ 		var heading_level = 1;
/* 000386 */ 		var inline_heading = false;
/* 000386 */ 		var target_id = null;
/* 000386 */ 		var annotations = null;
/* 000386 */ 		if (arguments.length) {
/* 000386 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000386 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000386 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000386 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000386 */ 					switch (__attrib0__) {
/* 000386 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000386 */ 					}
/* 000386 */ 				}
/* 000386 */ 			}
/* 000386 */ 		}
/* 000386 */ 		else {
/* 000386 */ 		}
/* 000392 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000392 */ 		__except0__.__cause__ = null;
/* 000392 */ 		throw __except0__;
/* 000392 */ 	});},
/* 000394 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000394 */ 		var is_block_level = false;
/* 000394 */ 		var annotations = null;
/* 000394 */ 		var target_id = null;
/* 000394 */ 		if (arguments.length) {
/* 000394 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000394 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000394 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000394 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000394 */ 					switch (__attrib0__) {
/* 000394 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000394 */ 					}
/* 000394 */ 				}
/* 000394 */ 			}
/* 000394 */ 		}
/* 000394 */ 		else {
/* 000394 */ 		}
/* 000396 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000396 */ 		__except0__.__cause__ = null;
/* 000396 */ 		throw __except0__;
/* 000396 */ 	});},
/* 000398 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000398 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000398 */ 			var annotations = null;
/* 000398 */ 		};
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000412 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000412 */ 		__except0__.__cause__ = null;
/* 000412 */ 		throw __except0__;
/* 000412 */ 	});},
/* 000418 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000418 */ 		if (arguments.length) {
/* 000418 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000418 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000418 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000418 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000418 */ 					switch (__attrib0__) {
/* 000418 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000418 */ 					}
/* 000418 */ 				}
/* 000418 */ 			}
/* 000418 */ 		}
/* 000418 */ 		else {
/* 000418 */ 		}
/* 000419 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000419 */ 		__except0__.__cause__ = null;
/* 000419 */ 		throw __except0__;
/* 000419 */ 	});},
/* 000421 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000421 */ 		if (arguments.length) {
/* 000421 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000421 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000421 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000421 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000421 */ 					switch (__attrib0__) {
/* 000421 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000421 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
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
/* 000424 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000424 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000424 */ 			var target_id = null;
/* 000424 */ 		};
/* 000424 */ 		if (arguments.length) {
/* 000424 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000424 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000424 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000424 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000424 */ 					switch (__attrib0__) {
/* 000424 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000424 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
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
/* 000432 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000432 */ 		if (arguments.length) {
/* 000432 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000432 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000432 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000432 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000432 */ 					switch (__attrib0__) {
/* 000432 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000432 */ 					}
/* 000432 */ 				}
/* 000432 */ 			}
/* 000432 */ 		}
/* 000432 */ 		else {
/* 000432 */ 		}
/* 000433 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000433 */ 	});}
/* 000433 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map