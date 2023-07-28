/* 000001 */ // Transcrypt'ed from Python, 2023-07-28 17:42:14
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000013 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000011 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {LatexWalkerLocatedError, nodes, FLMRenderContext};
/* 000001 */ var __name__ = 'flm.fragmentrenderer._base';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000016 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000016 */ 	__module__: __name__,
/* 000023 */ 	supports_delayed_render_markers: false,
/* 000030 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000030 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000030 */ 			var config = null;
/* 000030 */ 		};
/* 000030 */ 		if (arguments.length) {
/* 000030 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000030 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000030 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000030 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000030 */ 					switch (__attrib0__) {
/* 000030 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000030 */ 					}
/* 000030 */ 				}
/* 000030 */ 			}
/* 000030 */ 		}
/* 000030 */ 		else {
/* 000030 */ 		}
/* 000031 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000033 */ 		if (__t__ (config !== null)) {
/* 000034 */ 			var __iterable0__ = (function () {
/* 000034 */ 				var __accu0__ = config;
/* 000034 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000034 */ 			}) ();
/* 000034 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000034 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000034 */ 				var k = __left0__ [0];
/* 000034 */ 				var v = __left0__ [1];
/* 000035 */ 				__call__ (setattr, null, self, k, v);
/* 000035 */ 			}
/* 000035 */ 		}
/* 000035 */ 	});},
/* 000038 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
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
/* 000041 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000041 */ 		if (arguments.length) {
/* 000041 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000041 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000041 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000041 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000041 */ 					switch (__attrib0__) {
/* 000041 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000041 */ 					}
/* 000041 */ 				}
/* 000041 */ 			}
/* 000041 */ 		}
/* 000041 */ 		else {
/* 000041 */ 		}
/* 000042 */ 		// pass;
/* 000042 */ 	});},
/* 000045 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000045 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000045 */ 			var is_block_level = null;
/* 000045 */ 		};
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		try {
/* 000047 */ 			return (function () {
/* 000047 */ 				var __accu0__ = self;
/* 000048 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000048 */ 					var __accu1__ = self;
/* 000048 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000048 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000048 */ 			}) ();
/* 000048 */ 		}
/* 000048 */ 		catch (__except0__) {
/* 000048 */ 			if (isinstance (__except0__, Exception)) {
/* 000048 */ 				var e = __except0__;
/* 000051 */ 				// pass;
/* 000057 */ 				__except0__.__cause__ = null;
/* 000057 */ 				throw __except0__;
/* 000057 */ 			}
/* 000057 */ 			else {
/* 000057 */ 				throw __except0__;
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 	});},
/* 000059 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000059 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000059 */ 			var is_block_level = null;
/* 000059 */ 		};
/* 000059 */ 		if (arguments.length) {
/* 000059 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000059 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000059 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000059 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000059 */ 					switch (__attrib0__) {
/* 000059 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000059 */ 					}
/* 000059 */ 				}
/* 000059 */ 			}
/* 000059 */ 		}
/* 000059 */ 		else {
/* 000059 */ 		}
/* 000074 */ 		if (__t__ (nodelist === null)) {
/* 000075 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000075 */ 			__except0__.__cause__ = null;
/* 000075 */ 			throw __except0__;
/* 000075 */ 		}
/* 000077 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000078 */ 			// pass;
/* 000086 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute: {}'.format (__getslice__ (__call__ (repr, null, nodelist), 0, 100, 1)), __kwargtrans__ ({pos: __call__ (getattr, null, nodelist, 'pos', null)}));
/* 000086 */ 			__except0__.__cause__ = null;
/* 000086 */ 			throw __except0__;
/* 000086 */ 		}
/* 000089 */ 		if (__t__ (is_block_level === null)) {
/* 000090 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000090 */ 		}
/* 000092 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000093 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000093 */ 			__except0__.__cause__ = null;
/* 000093 */ 			throw __except0__;
/* 000093 */ 		}
/* 000098 */ 		if (__t__ (is_block_level)) {
/* 000104 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000105 */ 				var node_blocks = nodelist.flm_blocks;
/* 000105 */ 			}
/* 000106 */ 			else {
/* 000107 */ 				var node_blocks = [nodelist];
/* 000107 */ 			}
/* 000109 */ 			return (function () {
/* 000109 */ 				var __accu0__ = self;
/* 000109 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000109 */ 			}) ();
/* 000109 */ 		}
/* 000111 */ 		return (function () {
/* 000111 */ 			var __accu0__ = self;
/* 000111 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000111 */ 		}) ();
/* 000111 */ 	});},
/* 000114 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
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
/* 000115 */ 		var render_context = (function () {
/* 000115 */ 			var __accu0__ = self;
/* 000115 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000115 */ 		}) ();
/* 000117 */ 		try {
/* 000118 */ 			if (__t__ ((function () {
/* 000118 */ 				var __accu0__ = node;
/* 000118 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000118 */ 			}) ())) {
/* 000119 */ 				return (function () {
/* 000119 */ 					var __accu0__ = self;
/* 000119 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000119 */ 				}) ();
/* 000119 */ 			}
/* 000120 */ 			if (__t__ ((function () {
/* 000120 */ 				var __accu0__ = node;
/* 000120 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000120 */ 			}) ())) {
/* 000121 */ 				return (function () {
/* 000121 */ 					var __accu0__ = self;
/* 000121 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000121 */ 				}) ();
/* 000121 */ 			}
/* 000122 */ 			if (__t__ ((function () {
/* 000122 */ 				var __accu0__ = node;
/* 000122 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000122 */ 			}) ())) {
/* 000123 */ 				return (function () {
/* 000123 */ 					var __accu0__ = self;
/* 000123 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000123 */ 				}) ();
/* 000123 */ 			}
/* 000124 */ 			if (__t__ ((function () {
/* 000124 */ 				var __accu0__ = node;
/* 000124 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000124 */ 			}) ())) {
/* 000125 */ 				return (function () {
/* 000125 */ 					var __accu0__ = self;
/* 000125 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000125 */ 				}) ();
/* 000125 */ 			}
/* 000126 */ 			if (__t__ ((function () {
/* 000126 */ 				var __accu0__ = node;
/* 000126 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000126 */ 			}) ())) {
/* 000127 */ 				return (function () {
/* 000127 */ 					var __accu0__ = self;
/* 000127 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000127 */ 				}) ();
/* 000127 */ 			}
/* 000128 */ 			if (__t__ ((function () {
/* 000128 */ 				var __accu0__ = node;
/* 000128 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000128 */ 			}) ())) {
/* 000129 */ 				return (function () {
/* 000129 */ 					var __accu0__ = self;
/* 000129 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000129 */ 				}) ();
/* 000129 */ 			}
/* 000130 */ 			if (__t__ ((function () {
/* 000130 */ 				var __accu0__ = node;
/* 000130 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000130 */ 			}) ())) {
/* 000131 */ 				return (function () {
/* 000131 */ 					var __accu0__ = self;
/* 000131 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000131 */ 				}) ();
/* 000131 */ 			}
/* 000133 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000133 */ 			__except0__.__cause__ = null;
/* 000133 */ 			throw __except0__;
/* 000133 */ 		}
/* 000133 */ 		catch (__except0__) {
/* 000133 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000133 */ 				var e = __except0__;
/* 000136 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000137 */ 					e.pos = node.pos;
/* 000137 */ 				}
/* 000138 */ 				var __except1__ = e;
/* 000138 */ 				__except1__.__cause__ = null;
/* 000138 */ 				throw __except1__;
/* 000138 */ 			}
/* 000138 */ 			else if (isinstance (__except0__, Exception)) {
/* 000138 */ 				var e = __except0__;
/* 000141 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000141 */ 				__except1__.__cause__ = null;
/* 000141 */ 				throw __except1__;
/* 000141 */ 			}
/* 000141 */ 			else {
/* 000141 */ 				throw __except0__;
/* 000141 */ 			}
/* 000141 */ 		}
/* 000141 */ 	});},
/* 000144 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000144 */ 		if (arguments.length) {
/* 000144 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000144 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000144 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000144 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000144 */ 					switch (__attrib0__) {
/* 000144 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000144 */ 					}
/* 000144 */ 				}
/* 000144 */ 			}
/* 000144 */ 		}
/* 000144 */ 		else {
/* 000144 */ 		}
/* 000145 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000146 */ 			var chars_value = node.flm_chars_value;
/* 000146 */ 		}
/* 000147 */ 		else {
/* 000148 */ 			var chars_value = null;
/* 000148 */ 		}
/* 000149 */ 		if (__t__ (chars_value === null)) {
/* 000151 */ 			var chars_value = node.chars;
/* 000151 */ 		}
/* 000152 */ 		return (function () {
/* 000152 */ 			var __accu0__ = self;
/* 000152 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000152 */ 		}) ();
/* 000152 */ 	});},
/* 000154 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000155 */ 		return '';
/* 000155 */ 	});},
/* 000157 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000157 */ 		if (arguments.length) {
/* 000157 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000157 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000157 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000157 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000157 */ 					switch (__attrib0__) {
/* 000157 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000157 */ 					}
/* 000157 */ 				}
/* 000157 */ 			}
/* 000157 */ 		}
/* 000157 */ 		else {
/* 000157 */ 		}
/* 000158 */ 		return (function () {
/* 000158 */ 			var __accu0__ = self;
/* 000159 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000159 */ 				var __accu1__ = self;
/* 000159 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000159 */ 			}) ());
/* 000159 */ 		}) ();
/* 000159 */ 	});},
/* 000161 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000161 */ 		if (arguments.length) {
/* 000161 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000161 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000161 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000161 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000161 */ 					switch (__attrib0__) {
/* 000161 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000161 */ 					}
/* 000161 */ 				}
/* 000161 */ 			}
/* 000161 */ 		}
/* 000161 */ 		else {
/* 000161 */ 		}
/* 000162 */ 		return (function () {
/* 000162 */ 			var __accu0__ = self;
/* 000163 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000163 */ 				var __accu1__ = self;
/* 000163 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000163 */ 			}) ());
/* 000163 */ 		}) ();
/* 000163 */ 	});},
/* 000165 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
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
/* 000167 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000167 */ 				var __accu1__ = self;
/* 000167 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000167 */ 			}) ());
/* 000167 */ 		}) ();
/* 000167 */ 	});},
/* 000169 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
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
/* 000173 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
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
/* 000179 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000180 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000180 */ 			__except0__.__cause__ = null;
/* 000180 */ 			throw __except0__;
/* 000180 */ 		}
/* 000182 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000183 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000185 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000185 */ 					var __accu0__ = node;
/* 000185 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000185 */ 				}) ()));
/* 000185 */ 				__except0__.__cause__ = null;
/* 000185 */ 				throw __except0__;
/* 000185 */ 			}
/* 000185 */ 		}
/* 000188 */ 		return (function () {
/* 000188 */ 			var __accu0__ = self;
/* 000191 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000191 */ 				var __accu1__ = self;
/* 000191 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000191 */ 			}) ());
/* 000191 */ 		}) ();
/* 000191 */ 	});},
/* 000196 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000196 */ 		assert (render_context !== null);
/* 000201 */ 		if (__t__ (flm_specinfo === null)) {
/* 000202 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000202 */ 			__except0__.__cause__ = null;
/* 000202 */ 			throw __except0__;
/* 000202 */ 		}
/* 000204 */ 		var is_delayed_render = (function () {
/* 000204 */ 			var __accu0__ = render_context;
/* 000204 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000204 */ 		}) ();
/* 000205 */ 		if (__t__ (is_delayed_render)) {
/* 000208 */ 			var is_first_pass = render_context.is_first_pass;
/* 000209 */ 			var delayed_key = null;
/* 000211 */ 			if (__t__ (is_first_pass)) {
/* 000212 */ 				(function () {
/* 000212 */ 					var __accu0__ = flm_specinfo;
/* 000212 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000212 */ 				}) ();
/* 000213 */ 				var delayed_key = (function () {
/* 000213 */ 					var __accu0__ = render_context;
/* 000213 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000213 */ 				}) ();
/* 000213 */ 			}
/* 000215 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000218 */ 				return (function () {
/* 000218 */ 					var __accu0__ = self;
/* 000218 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000218 */ 				}) ();
/* 000218 */ 			}
/* 000219 */ 			else if (__t__ (is_first_pass)) {
/* 000221 */ 				(function () {
/* 000221 */ 					var __accu0__ = flm_specinfo;
/* 000221 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000221 */ 				}) ();
/* 000223 */ 				return (function () {
/* 000223 */ 					var __accu0__ = self;
/* 000223 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000223 */ 				}) ();
/* 000223 */ 			}
/* 000224 */ 			else {
/* 000224 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000228 */ 				return (function () {
/* 000228 */ 					var __accu0__ = render_context;
/* 000228 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000228 */ 				}) ();
/* 000228 */ 			}
/* 000228 */ 		}
/* 000232 */ 		var value = (function () {
/* 000232 */ 			var __accu0__ = flm_specinfo;
/* 000232 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000232 */ 		}) ();
/* 000233 */ 		return value;
/* 000233 */ 	});},
/* 000235 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000235 */ 		if (arguments.length) {
/* 000235 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000235 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000235 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000235 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000235 */ 					switch (__attrib0__) {
/* 000235 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000235 */ 					}
/* 000235 */ 				}
/* 000235 */ 			}
/* 000235 */ 		}
/* 000235 */ 		else {
/* 000235 */ 		}
/* 000236 */ 		return (function () {
/* 000236 */ 			var __accu0__ = self;
/* 000239 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000239 */ 				var __accu1__ = self;
/* 000239 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000239 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000239 */ 		}) ();
/* 000239 */ 	});},
/* 000244 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000244 */ 		var environmentname = null;
/* 000244 */ 		var target_id = null;
/* 000244 */ 		if (arguments.length) {
/* 000244 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000244 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000244 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000244 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000244 */ 					switch (__attrib0__) {
/* 000244 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000244 */ 					}
/* 000244 */ 				}
/* 000244 */ 			}
/* 000244 */ 		}
/* 000244 */ 		else {
/* 000244 */ 		}
/* 000251 */ 		var rendered = (function () {
/* 000251 */ 			var __accu0__ = self;
/* 000252 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000252 */ 				var __accu1__ = nodelist;
/* 000252 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000252 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000252 */ 		}) ();
/* 000258 */ 		return rendered;
/* 000258 */ 	});},
/* 000265 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000265 */ 		if (arguments.length) {
/* 000265 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000265 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000265 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000265 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000265 */ 					switch (__attrib0__) {
/* 000265 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000265 */ 					}
/* 000265 */ 				}
/* 000265 */ 			}
/* 000265 */ 		}
/* 000265 */ 		else {
/* 000265 */ 		}
/* 000267 */ 		var rendered_blocks = [];
/* 000269 */ 		var __iterable0__ = node_blocks;
/* 000269 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000269 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000271 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000272 */ 				var para = (function () {
/* 000272 */ 					var __accu0__ = self;
/* 000272 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000272 */ 				}) ();
/* 000272 */ 			}
/* 000273 */ 			else {
/* 000274 */ 				var para = (function () {
/* 000274 */ 					var __accu0__ = self;
/* 000274 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000274 */ 				}) ();
/* 000274 */ 			}
/* 000276 */ 			(function () {
/* 000276 */ 				var __accu0__ = rendered_blocks;
/* 000276 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000276 */ 			}) ();
/* 000276 */ 		}
/* 000278 */ 		return (function () {
/* 000278 */ 			var __accu0__ = self;
/* 000278 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000278 */ 		}) ();
/* 000278 */ 	});},
/* 000281 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000281 */ 		if (arguments.length) {
/* 000281 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000281 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000281 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000281 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000281 */ 					switch (__attrib0__) {
/* 000281 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000281 */ 					}
/* 000281 */ 				}
/* 000281 */ 			}
/* 000281 */ 		}
/* 000281 */ 		else {
/* 000281 */ 		}
/* 000285 */ 		return (function () {
/* 000285 */ 			var __accu0__ = self;
/* 000285 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000285 */ 		}) ();
/* 000285 */ 	});},
/* 000287 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000288 */ 		return (function () {
/* 000288 */ 			var __accu0__ = self;
/* 000288 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000288 */ 				var __accu1__ = [];
/* 000288 */ 				var __iterable0__ = nodelist;
/* 000288 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000289 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000289 */ 					(function () {
/* 000289 */ 						var __accu2__ = __accu1__;
/* 000288 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000288 */ 							var __accu3__ = self;
/* 000288 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000288 */ 						}) ());
/* 000288 */ 					}) ();
/* 000288 */ 				}
/* 000288 */ 				return __accu1__;
/* 000288 */ 			}) (), render_context);
/* 000288 */ 		}) ();
/* 000288 */ 	});},
/* 000292 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000292 */ 		if (arguments.length) {
/* 000292 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000292 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000292 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000292 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000292 */ 					switch (__attrib0__) {
/* 000292 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000292 */ 					}
/* 000292 */ 				}
/* 000292 */ 			}
/* 000292 */ 		}
/* 000292 */ 		else {
/* 000292 */ 		}
/* 000296 */ 		return (function () {
/* 000296 */ 			var __accu0__ = '';
/* 000296 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000296 */ 		}) ();
/* 000296 */ 	});},
/* 000299 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000299 */ 		if (arguments.length) {
/* 000299 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000299 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000299 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000299 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000299 */ 					switch (__attrib0__) {
/* 000299 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000299 */ 					}
/* 000299 */ 				}
/* 000299 */ 			}
/* 000299 */ 		}
/* 000299 */ 		else {
/* 000299 */ 		}
/* 000307 */ 		return (function () {
/* 000307 */ 			var __accu0__ = '\n\n';
/* 000307 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000307 */ 				var __accu1__ = [];
/* 000307 */ 				var __iterable0__ = content_list;
/* 000307 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000307 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000307 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000307 */ 						(function () {
/* 000307 */ 							var __accu2__ = __accu1__;
/* 000307 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000307 */ 						}) ();
/* 000307 */ 					}
/* 000307 */ 				}
/* 000307 */ 				return __accu1__;
/* 000307 */ 			}) ());
/* 000307 */ 		}) ();
/* 000307 */ 	});},
/* 000313 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000313 */ 		var annotations = null;
/* 000313 */ 		var target_id = null;
/* 000313 */ 		if (arguments.length) {
/* 000313 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000313 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000313 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000313 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000313 */ 					switch (__attrib0__) {
/* 000313 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000313 */ 					}
/* 000313 */ 				}
/* 000313 */ 			}
/* 000313 */ 		}
/* 000313 */ 		else {
/* 000313 */ 		}
/* 000320 */ 		return content;
/* 000320 */ 	});},
/* 000322 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000322 */ 		var annotations = null;
/* 000322 */ 		var target_id = null;
/* 000322 */ 		if (arguments.length) {
/* 000322 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000322 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000322 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000322 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000322 */ 					switch (__attrib0__) {
/* 000322 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000322 */ 					}
/* 000322 */ 				}
/* 000322 */ 			}
/* 000322 */ 		}
/* 000322 */ 		else {
/* 000322 */ 		}
/* 000329 */ 		return content;
/* 000329 */ 	});},
/* 000334 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000334 */ 		if (arguments.length) {
/* 000334 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000334 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000334 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000334 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000334 */ 					switch (__attrib0__) {
/* 000334 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000334 */ 					}
/* 000334 */ 				}
/* 000334 */ 			}
/* 000334 */ 		}
/* 000334 */ 		else {
/* 000334 */ 		}
/* 000345 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000345 */ 		__except0__.__cause__ = null;
/* 000345 */ 		throw __except0__;
/* 000345 */ 	});},
/* 000350 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000350 */ 		if (arguments.length) {
/* 000350 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000350 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000350 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000350 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000350 */ 					switch (__attrib0__) {
/* 000350 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000350 */ 					}
/* 000350 */ 				}
/* 000350 */ 			}
/* 000350 */ 		}
/* 000350 */ 		else {
/* 000350 */ 		}
/* 000351 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000351 */ 		__except0__.__cause__ = null;
/* 000351 */ 		throw __except0__;
/* 000351 */ 	});},
/* 000353 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000353 */ 		if (arguments.length) {
/* 000353 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000353 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000353 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000353 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000353 */ 					switch (__attrib0__) {
/* 000353 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000353 */ 					}
/* 000353 */ 				}
/* 000353 */ 			}
/* 000353 */ 		}
/* 000353 */ 		else {
/* 000353 */ 		}
/* 000354 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000354 */ 		__except0__.__cause__ = null;
/* 000354 */ 		throw __except0__;
/* 000354 */ 	});},
/* 000356 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000356 */ 		if (arguments.length) {
/* 000356 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000356 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000356 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000356 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000356 */ 					switch (__attrib0__) {
/* 000356 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000356 */ 					}
/* 000356 */ 				}
/* 000356 */ 			}
/* 000356 */ 		}
/* 000356 */ 		else {
/* 000356 */ 		}
/* 000357 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000357 */ 		__except0__.__cause__ = null;
/* 000357 */ 		throw __except0__;
/* 000357 */ 	});},
/* 000359 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000359 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000359 */ 			var annotations = null;
/* 000359 */ 		};
/* 000359 */ 		if (arguments.length) {
/* 000359 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000359 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000359 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000359 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000359 */ 					switch (__attrib0__) {
/* 000359 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000359 */ 					}
/* 000359 */ 				}
/* 000359 */ 			}
/* 000359 */ 		}
/* 000359 */ 		else {
/* 000359 */ 		}
/* 000360 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000360 */ 		__except0__.__cause__ = null;
/* 000360 */ 		throw __except0__;
/* 000360 */ 	});},
/* 000362 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000362 */ 		if (arguments.length) {
/* 000362 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000362 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000362 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000362 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000362 */ 					switch (__attrib0__) {
/* 000362 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000362 */ 					}
/* 000362 */ 				}
/* 000362 */ 			}
/* 000362 */ 		}
/* 000362 */ 		else {
/* 000362 */ 		}
/* 000363 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000363 */ 		__except0__.__cause__ = null;
/* 000363 */ 		throw __except0__;
/* 000363 */ 	});},
/* 000365 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000365 */ 		if (arguments.length) {
/* 000365 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000365 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000365 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000365 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000365 */ 					switch (__attrib0__) {
/* 000365 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000365 */ 					}
/* 000365 */ 				}
/* 000365 */ 			}
/* 000365 */ 		}
/* 000365 */ 		else {
/* 000365 */ 		}
/* 000366 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000366 */ 		__except0__.__cause__ = null;
/* 000366 */ 		throw __except0__;
/* 000366 */ 	});},
/* 000368 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000368 */ 		var target_id_generator = null;
/* 000368 */ 		var annotations = null;
/* 000368 */ 		if (arguments.length) {
/* 000368 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000368 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000368 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000368 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000368 */ 					switch (__attrib0__) {
/* 000368 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000368 */ 					}
/* 000368 */ 				}
/* 000368 */ 			}
/* 000368 */ 		}
/* 000368 */ 		else {
/* 000368 */ 		}
/* 000370 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000370 */ 		__except0__.__cause__ = null;
/* 000370 */ 		throw __except0__;
/* 000370 */ 	});},
/* 000372 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000372 */ 		var heading_level = 1;
/* 000372 */ 		var inline_heading = false;
/* 000372 */ 		var target_id = null;
/* 000372 */ 		if (arguments.length) {
/* 000372 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000372 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000372 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000372 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000372 */ 					switch (__attrib0__) {
/* 000372 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000372 */ 					}
/* 000372 */ 				}
/* 000372 */ 			}
/* 000372 */ 		}
/* 000372 */ 		else {
/* 000372 */ 		}
/* 000374 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000374 */ 		__except0__.__cause__ = null;
/* 000374 */ 		throw __except0__;
/* 000374 */ 	});},
/* 000376 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000376 */ 		var is_block_level = false;
/* 000376 */ 		var annotations = null;
/* 000376 */ 		var target_id = null;
/* 000376 */ 		if (arguments.length) {
/* 000376 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000376 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000376 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000376 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000376 */ 					switch (__attrib0__) {
/* 000376 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000376 */ 					}
/* 000376 */ 				}
/* 000376 */ 			}
/* 000376 */ 		}
/* 000376 */ 		else {
/* 000376 */ 		}
/* 000378 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000378 */ 		__except0__.__cause__ = null;
/* 000378 */ 		throw __except0__;
/* 000378 */ 	});},
/* 000380 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000380 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000380 */ 			var annotations = null;
/* 000380 */ 		};
/* 000380 */ 		if (arguments.length) {
/* 000380 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000380 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000380 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000380 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000380 */ 					switch (__attrib0__) {
/* 000380 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000380 */ 					}
/* 000380 */ 				}
/* 000380 */ 			}
/* 000380 */ 		}
/* 000380 */ 		else {
/* 000380 */ 		}
/* 000394 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000394 */ 		__except0__.__cause__ = null;
/* 000394 */ 		throw __except0__;
/* 000394 */ 	});},
/* 000400 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000400 */ 		if (arguments.length) {
/* 000400 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000400 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000400 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000400 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000400 */ 					switch (__attrib0__) {
/* 000400 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000400 */ 					}
/* 000400 */ 				}
/* 000400 */ 			}
/* 000400 */ 		}
/* 000400 */ 		else {
/* 000400 */ 		}
/* 000401 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000401 */ 		__except0__.__cause__ = null;
/* 000401 */ 		throw __except0__;
/* 000401 */ 	});},
/* 000403 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000403 */ 		if (arguments.length) {
/* 000403 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000403 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000403 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000403 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000403 */ 					switch (__attrib0__) {
/* 000403 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000403 */ 					}
/* 000403 */ 				}
/* 000403 */ 			}
/* 000403 */ 		}
/* 000403 */ 		else {
/* 000403 */ 		}
/* 000404 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000404 */ 		__except0__.__cause__ = null;
/* 000404 */ 		throw __except0__;
/* 000404 */ 	});},
/* 000406 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000406 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000406 */ 			var target_id = null;
/* 000406 */ 		};
/* 000406 */ 		if (arguments.length) {
/* 000406 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000406 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000406 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000406 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000406 */ 					switch (__attrib0__) {
/* 000406 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000406 */ 					}
/* 000406 */ 				}
/* 000406 */ 			}
/* 000406 */ 		}
/* 000406 */ 		else {
/* 000406 */ 		}
/* 000407 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000407 */ 		__except0__.__cause__ = null;
/* 000407 */ 		throw __except0__;
/* 000407 */ 	});},
/* 000414 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000414 */ 		if (arguments.length) {
/* 000414 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000414 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000414 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000414 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000414 */ 					switch (__attrib0__) {
/* 000414 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000414 */ 					}
/* 000414 */ 				}
/* 000414 */ 			}
/* 000414 */ 		}
/* 000414 */ 		else {
/* 000414 */ 		}
/* 000415 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000415 */ 	});}
/* 000415 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map