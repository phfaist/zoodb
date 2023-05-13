/* 000001 */ // Transcrypt'ed from Python, 2023-05-13 12:17:28
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
/* 000021 */ 	supports_delayed_render_markers: false,
/* 000028 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000028 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000028 */ 			var config = null;
/* 000028 */ 		};
/* 000028 */ 		if (arguments.length) {
/* 000028 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000028 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000028 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000028 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000028 */ 					switch (__attrib0__) {
/* 000028 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000028 */ 					}
/* 000028 */ 				}
/* 000028 */ 			}
/* 000028 */ 		}
/* 000028 */ 		else {
/* 000028 */ 		}
/* 000029 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000031 */ 		if (__t__ (config !== null)) {
/* 000032 */ 			var __iterable0__ = (function () {
/* 000032 */ 				var __accu0__ = config;
/* 000032 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000032 */ 			}) ();
/* 000032 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000032 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000032 */ 				var k = __left0__ [0];
/* 000032 */ 				var v = __left0__ [1];
/* 000033 */ 				__call__ (setattr, null, self, k, v);
/* 000033 */ 			}
/* 000033 */ 		}
/* 000033 */ 	});},
/* 000036 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000036 */ 		if (arguments.length) {
/* 000036 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000036 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000036 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000036 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000036 */ 					switch (__attrib0__) {
/* 000036 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000036 */ 					}
/* 000036 */ 				}
/* 000036 */ 			}
/* 000036 */ 		}
/* 000036 */ 		else {
/* 000036 */ 		}
/* 000037 */ 		// pass;
/* 000037 */ 	});},
/* 000039 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000039 */ 		if (arguments.length) {
/* 000039 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000039 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000039 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000039 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000039 */ 					switch (__attrib0__) {
/* 000039 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000039 */ 					}
/* 000039 */ 				}
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 		else {
/* 000039 */ 		}
/* 000040 */ 		// pass;
/* 000040 */ 	});},
/* 000043 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000043 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000043 */ 			var is_block_level = null;
/* 000043 */ 		};
/* 000043 */ 		if (arguments.length) {
/* 000043 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000043 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000043 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000043 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000043 */ 					switch (__attrib0__) {
/* 000043 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000043 */ 					}
/* 000043 */ 				}
/* 000043 */ 			}
/* 000043 */ 		}
/* 000043 */ 		else {
/* 000043 */ 		}
/* 000044 */ 		try {
/* 000045 */ 			return (function () {
/* 000045 */ 				var __accu0__ = self;
/* 000046 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000046 */ 					var __accu1__ = self;
/* 000046 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000046 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000046 */ 			}) ();
/* 000046 */ 		}
/* 000046 */ 		catch (__except0__) {
/* 000046 */ 			if (isinstance (__except0__, Exception)) {
/* 000046 */ 				var e = __except0__;
/* 000049 */ 				// pass;
/* 000055 */ 				__except0__.__cause__ = null;
/* 000055 */ 				throw __except0__;
/* 000055 */ 			}
/* 000055 */ 			else {
/* 000055 */ 				throw __except0__;
/* 000055 */ 			}
/* 000055 */ 		}
/* 000055 */ 	});},
/* 000057 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000057 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000057 */ 			var is_block_level = null;
/* 000057 */ 		};
/* 000057 */ 		if (arguments.length) {
/* 000057 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000057 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000057 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000057 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000057 */ 					switch (__attrib0__) {
/* 000057 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000057 */ 					}
/* 000057 */ 				}
/* 000057 */ 			}
/* 000057 */ 		}
/* 000057 */ 		else {
/* 000057 */ 		}
/* 000072 */ 		if (__t__ (nodelist === null)) {
/* 000073 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000073 */ 			__except0__.__cause__ = null;
/* 000073 */ 			throw __except0__;
/* 000073 */ 		}
/* 000075 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000076 */ 			// pass;
/* 000081 */ 			var __except0__ = __call__ (ValueError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute');
/* 000081 */ 			__except0__.__cause__ = null;
/* 000081 */ 			throw __except0__;
/* 000081 */ 		}
/* 000084 */ 		if (__t__ (is_block_level === null)) {
/* 000085 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000085 */ 		}
/* 000087 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000088 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000088 */ 			__except0__.__cause__ = null;
/* 000088 */ 			throw __except0__;
/* 000088 */ 		}
/* 000093 */ 		if (__t__ (is_block_level)) {
/* 000099 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000100 */ 				var node_blocks = nodelist.flm_blocks;
/* 000100 */ 			}
/* 000101 */ 			else {
/* 000102 */ 				var node_blocks = [nodelist];
/* 000102 */ 			}
/* 000104 */ 			return (function () {
/* 000104 */ 				var __accu0__ = self;
/* 000104 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000104 */ 			}) ();
/* 000104 */ 		}
/* 000106 */ 		return (function () {
/* 000106 */ 			var __accu0__ = self;
/* 000106 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000106 */ 		}) ();
/* 000106 */ 	});},
/* 000109 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000109 */ 		if (arguments.length) {
/* 000109 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000109 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000109 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000109 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000109 */ 					switch (__attrib0__) {
/* 000109 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000109 */ 					}
/* 000109 */ 				}
/* 000109 */ 			}
/* 000109 */ 		}
/* 000109 */ 		else {
/* 000109 */ 		}
/* 000110 */ 		var render_context = (function () {
/* 000110 */ 			var __accu0__ = self;
/* 000110 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000110 */ 		}) ();
/* 000112 */ 		try {
/* 000113 */ 			if (__t__ ((function () {
/* 000113 */ 				var __accu0__ = node;
/* 000113 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000113 */ 			}) ())) {
/* 000114 */ 				return (function () {
/* 000114 */ 					var __accu0__ = self;
/* 000114 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000114 */ 				}) ();
/* 000114 */ 			}
/* 000115 */ 			if (__t__ ((function () {
/* 000115 */ 				var __accu0__ = node;
/* 000115 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000115 */ 			}) ())) {
/* 000116 */ 				return (function () {
/* 000116 */ 					var __accu0__ = self;
/* 000116 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000116 */ 				}) ();
/* 000116 */ 			}
/* 000117 */ 			if (__t__ ((function () {
/* 000117 */ 				var __accu0__ = node;
/* 000117 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000117 */ 			}) ())) {
/* 000118 */ 				return (function () {
/* 000118 */ 					var __accu0__ = self;
/* 000118 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000118 */ 				}) ();
/* 000118 */ 			}
/* 000119 */ 			if (__t__ ((function () {
/* 000119 */ 				var __accu0__ = node;
/* 000119 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000119 */ 			}) ())) {
/* 000120 */ 				return (function () {
/* 000120 */ 					var __accu0__ = self;
/* 000120 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000120 */ 				}) ();
/* 000120 */ 			}
/* 000121 */ 			if (__t__ ((function () {
/* 000121 */ 				var __accu0__ = node;
/* 000121 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000121 */ 			}) ())) {
/* 000122 */ 				return (function () {
/* 000122 */ 					var __accu0__ = self;
/* 000122 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000122 */ 				}) ();
/* 000122 */ 			}
/* 000123 */ 			if (__t__ ((function () {
/* 000123 */ 				var __accu0__ = node;
/* 000123 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000123 */ 			}) ())) {
/* 000124 */ 				return (function () {
/* 000124 */ 					var __accu0__ = self;
/* 000124 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000124 */ 				}) ();
/* 000124 */ 			}
/* 000125 */ 			if (__t__ ((function () {
/* 000125 */ 				var __accu0__ = node;
/* 000125 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000125 */ 			}) ())) {
/* 000126 */ 				return (function () {
/* 000126 */ 					var __accu0__ = self;
/* 000126 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000126 */ 				}) ();
/* 000126 */ 			}
/* 000128 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000128 */ 			__except0__.__cause__ = null;
/* 000128 */ 			throw __except0__;
/* 000128 */ 		}
/* 000128 */ 		catch (__except0__) {
/* 000128 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000128 */ 				var e = __except0__;
/* 000131 */ 				if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, e, 'pos')))) || e.pos === null)) {
/* 000132 */ 					e.pos = node.pos;
/* 000132 */ 				}
/* 000133 */ 				var __except1__ = e;
/* 000133 */ 				__except1__.__cause__ = null;
/* 000133 */ 				throw __except1__;
/* 000133 */ 			}
/* 000133 */ 			else if (isinstance (__except0__, Exception)) {
/* 000133 */ 				var e = __except0__;
/* 000136 */ 				var __except1__ = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e), __kwargtrans__ ({pos: node.pos}));
/* 000136 */ 				__except1__.__cause__ = null;
/* 000136 */ 				throw __except1__;
/* 000136 */ 			}
/* 000136 */ 			else {
/* 000136 */ 				throw __except0__;
/* 000136 */ 			}
/* 000136 */ 		}
/* 000136 */ 	});},
/* 000139 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
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
/* 000140 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000141 */ 			var chars_value = node.flm_chars_value;
/* 000141 */ 		}
/* 000142 */ 		else {
/* 000143 */ 			var chars_value = null;
/* 000143 */ 		}
/* 000144 */ 		if (__t__ (chars_value === null)) {
/* 000146 */ 			var chars_value = node.chars;
/* 000146 */ 		}
/* 000147 */ 		return (function () {
/* 000147 */ 			var __accu0__ = self;
/* 000147 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000147 */ 		}) ();
/* 000147 */ 	});},
/* 000149 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000149 */ 		if (arguments.length) {
/* 000149 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000149 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000149 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000149 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000149 */ 					switch (__attrib0__) {
/* 000149 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000149 */ 					}
/* 000149 */ 				}
/* 000149 */ 			}
/* 000149 */ 		}
/* 000149 */ 		else {
/* 000149 */ 		}
/* 000150 */ 		return '';
/* 000150 */ 	});},
/* 000152 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
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
/* 000153 */ 		return (function () {
/* 000153 */ 			var __accu0__ = self;
/* 000154 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000154 */ 				var __accu1__ = self;
/* 000154 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000154 */ 			}) ());
/* 000154 */ 		}) ();
/* 000154 */ 	});},
/* 000156 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000156 */ 		if (arguments.length) {
/* 000156 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000156 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000156 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000156 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000156 */ 					switch (__attrib0__) {
/* 000156 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000156 */ 					}
/* 000156 */ 				}
/* 000156 */ 			}
/* 000156 */ 		}
/* 000156 */ 		else {
/* 000156 */ 		}
/* 000157 */ 		return (function () {
/* 000157 */ 			var __accu0__ = self;
/* 000158 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000158 */ 				var __accu1__ = self;
/* 000158 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000158 */ 			}) ());
/* 000158 */ 		}) ();
/* 000158 */ 	});},
/* 000160 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000160 */ 		if (arguments.length) {
/* 000160 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000160 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000160 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000160 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000160 */ 					switch (__attrib0__) {
/* 000160 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000160 */ 					}
/* 000160 */ 				}
/* 000160 */ 			}
/* 000160 */ 		}
/* 000160 */ 		else {
/* 000160 */ 		}
/* 000161 */ 		return (function () {
/* 000161 */ 			var __accu0__ = self;
/* 000162 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000162 */ 				var __accu1__ = self;
/* 000162 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000162 */ 			}) ());
/* 000162 */ 		}) ();
/* 000162 */ 	});},
/* 000164 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000164 */ 		if (arguments.length) {
/* 000164 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000164 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000164 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000164 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000164 */ 					switch (__attrib0__) {
/* 000164 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000164 */ 					}
/* 000164 */ 				}
/* 000164 */ 			}
/* 000164 */ 		}
/* 000164 */ 		else {
/* 000164 */ 		}
/* 000165 */ 		return (function () {
/* 000165 */ 			var __accu0__ = self;
/* 000166 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000166 */ 				var __accu1__ = self;
/* 000166 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000166 */ 			}) ());
/* 000166 */ 		}) ();
/* 000166 */ 	});},
/* 000168 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
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
/* 000174 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000175 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000175 */ 			__except0__.__cause__ = null;
/* 000175 */ 			throw __except0__;
/* 000175 */ 		}
/* 000177 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000178 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000180 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000180 */ 					var __accu0__ = node;
/* 000180 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000180 */ 				}) ()));
/* 000180 */ 				__except0__.__cause__ = null;
/* 000180 */ 				throw __except0__;
/* 000180 */ 			}
/* 000180 */ 		}
/* 000183 */ 		return (function () {
/* 000183 */ 			var __accu0__ = self;
/* 000186 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000186 */ 				var __accu1__ = self;
/* 000186 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000186 */ 			}) ());
/* 000186 */ 		}) ();
/* 000186 */ 	});},
/* 000191 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000191 */ 		if (arguments.length) {
/* 000191 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000191 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000191 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000191 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000191 */ 					switch (__attrib0__) {
/* 000191 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000191 */ 					}
/* 000191 */ 				}
/* 000191 */ 			}
/* 000191 */ 		}
/* 000191 */ 		else {
/* 000191 */ 		}
/* 000191 */ 		assert (render_context !== null);
/* 000196 */ 		if (__t__ (flm_specinfo === null)) {
/* 000197 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000197 */ 			__except0__.__cause__ = null;
/* 000197 */ 			throw __except0__;
/* 000197 */ 		}
/* 000199 */ 		var is_delayed_render = (function () {
/* 000199 */ 			var __accu0__ = render_context;
/* 000199 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000199 */ 		}) ();
/* 000200 */ 		if (__t__ (is_delayed_render)) {
/* 000203 */ 			var is_first_pass = render_context.is_first_pass;
/* 000204 */ 			var delayed_key = null;
/* 000206 */ 			if (__t__ (is_first_pass)) {
/* 000207 */ 				(function () {
/* 000207 */ 					var __accu0__ = flm_specinfo;
/* 000207 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000207 */ 				}) ();
/* 000208 */ 				var delayed_key = (function () {
/* 000208 */ 					var __accu0__ = render_context;
/* 000208 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000208 */ 				}) ();
/* 000208 */ 			}
/* 000210 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000213 */ 				return (function () {
/* 000213 */ 					var __accu0__ = self;
/* 000213 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000213 */ 				}) ();
/* 000213 */ 			}
/* 000214 */ 			else if (__t__ (is_first_pass)) {
/* 000216 */ 				(function () {
/* 000216 */ 					var __accu0__ = flm_specinfo;
/* 000216 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000216 */ 				}) ();
/* 000218 */ 				return (function () {
/* 000218 */ 					var __accu0__ = self;
/* 000218 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000218 */ 				}) ();
/* 000218 */ 			}
/* 000219 */ 			else {
/* 000219 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000223 */ 				return (function () {
/* 000223 */ 					var __accu0__ = render_context;
/* 000223 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000223 */ 				}) ();
/* 000223 */ 			}
/* 000223 */ 		}
/* 000227 */ 		var value = (function () {
/* 000227 */ 			var __accu0__ = flm_specinfo;
/* 000227 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000227 */ 		}) ();
/* 000228 */ 		return value;
/* 000228 */ 	});},
/* 000230 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000230 */ 		if (arguments.length) {
/* 000230 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000230 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000230 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000230 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000230 */ 					switch (__attrib0__) {
/* 000230 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000230 */ 					}
/* 000230 */ 				}
/* 000230 */ 			}
/* 000230 */ 		}
/* 000230 */ 		else {
/* 000230 */ 		}
/* 000231 */ 		return (function () {
/* 000231 */ 			var __accu0__ = self;
/* 000234 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000234 */ 				var __accu1__ = self;
/* 000234 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000234 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000234 */ 		}) ();
/* 000234 */ 	});},
/* 000239 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000239 */ 		var environmentname = null;
/* 000239 */ 		var target_id = null;
/* 000239 */ 		if (arguments.length) {
/* 000239 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000239 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000239 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000239 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000239 */ 					switch (__attrib0__) {
/* 000239 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000239 */ 					}
/* 000239 */ 				}
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 		else {
/* 000239 */ 		}
/* 000246 */ 		var rendered = (function () {
/* 000246 */ 			var __accu0__ = self;
/* 000247 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (__getitem__ (delimiters, 0), (function () {
/* 000247 */ 				var __accu1__ = nodelist;
/* 000247 */ 				return __call__ (__accu1__.latex_verbatim, __accu1__);
/* 000247 */ 			}) ()), __getitem__ (delimiters, 1)), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000247 */ 		}) ();
/* 000253 */ 		return rendered;
/* 000253 */ 	});},
/* 000260 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000260 */ 		if (arguments.length) {
/* 000260 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000260 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000260 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000260 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000260 */ 					switch (__attrib0__) {
/* 000260 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000260 */ 					}
/* 000260 */ 				}
/* 000260 */ 			}
/* 000260 */ 		}
/* 000260 */ 		else {
/* 000260 */ 		}
/* 000262 */ 		var rendered_blocks = [];
/* 000264 */ 		var __iterable0__ = node_blocks;
/* 000264 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000264 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000266 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000267 */ 				var para = (function () {
/* 000267 */ 					var __accu0__ = self;
/* 000267 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000267 */ 				}) ();
/* 000267 */ 			}
/* 000268 */ 			else {
/* 000269 */ 				var para = (function () {
/* 000269 */ 					var __accu0__ = self;
/* 000269 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000269 */ 				}) ();
/* 000269 */ 			}
/* 000271 */ 			(function () {
/* 000271 */ 				var __accu0__ = rendered_blocks;
/* 000271 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000271 */ 			}) ();
/* 000271 */ 		}
/* 000273 */ 		return (function () {
/* 000273 */ 			var __accu0__ = self;
/* 000273 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000273 */ 		}) ();
/* 000273 */ 	});},
/* 000276 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000276 */ 		if (arguments.length) {
/* 000276 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000276 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000276 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000276 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000276 */ 					switch (__attrib0__) {
/* 000276 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000276 */ 					}
/* 000276 */ 				}
/* 000276 */ 			}
/* 000276 */ 		}
/* 000276 */ 		else {
/* 000276 */ 		}
/* 000280 */ 		return (function () {
/* 000280 */ 			var __accu0__ = self;
/* 000280 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000280 */ 		}) ();
/* 000280 */ 	});},
/* 000282 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000282 */ 		if (arguments.length) {
/* 000282 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000282 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000282 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000282 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000282 */ 					switch (__attrib0__) {
/* 000282 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000282 */ 					}
/* 000282 */ 				}
/* 000282 */ 			}
/* 000282 */ 		}
/* 000282 */ 		else {
/* 000282 */ 		}
/* 000283 */ 		return (function () {
/* 000283 */ 			var __accu0__ = self;
/* 000283 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000283 */ 				var __accu1__ = [];
/* 000283 */ 				var __iterable0__ = nodelist;
/* 000283 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000284 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000284 */ 					(function () {
/* 000284 */ 						var __accu2__ = __accu1__;
/* 000283 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000283 */ 							var __accu3__ = self;
/* 000283 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000283 */ 						}) ());
/* 000283 */ 					}) ();
/* 000283 */ 				}
/* 000283 */ 				return __accu1__;
/* 000283 */ 			}) (), render_context);
/* 000283 */ 		}) ();
/* 000283 */ 	});},
/* 000287 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000287 */ 		if (arguments.length) {
/* 000287 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000287 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000287 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000287 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000287 */ 					switch (__attrib0__) {
/* 000287 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000287 */ 					}
/* 000287 */ 				}
/* 000287 */ 			}
/* 000287 */ 		}
/* 000287 */ 		else {
/* 000287 */ 		}
/* 000291 */ 		return (function () {
/* 000291 */ 			var __accu0__ = '';
/* 000291 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000291 */ 		}) ();
/* 000291 */ 	});},
/* 000294 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000302 */ 		return (function () {
/* 000302 */ 			var __accu0__ = '\n\n';
/* 000302 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000302 */ 				var __accu1__ = [];
/* 000302 */ 				var __iterable0__ = content_list;
/* 000302 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000302 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000302 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000302 */ 						(function () {
/* 000302 */ 							var __accu2__ = __accu1__;
/* 000302 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000302 */ 						}) ();
/* 000302 */ 					}
/* 000302 */ 				}
/* 000302 */ 				return __accu1__;
/* 000302 */ 			}) ());
/* 000302 */ 		}) ();
/* 000302 */ 	});},
/* 000308 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000308 */ 		var annotations = null;
/* 000308 */ 		var target_id = null;
/* 000308 */ 		if (arguments.length) {
/* 000308 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000308 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000308 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000308 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000308 */ 					switch (__attrib0__) {
/* 000308 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000308 */ 					}
/* 000308 */ 				}
/* 000308 */ 			}
/* 000308 */ 		}
/* 000308 */ 		else {
/* 000308 */ 		}
/* 000315 */ 		return content;
/* 000315 */ 	});},
/* 000317 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000317 */ 		var annotations = null;
/* 000317 */ 		var target_id = null;
/* 000317 */ 		if (arguments.length) {
/* 000317 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000317 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000317 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000317 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000317 */ 					switch (__attrib0__) {
/* 000317 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000317 */ 					}
/* 000317 */ 				}
/* 000317 */ 			}
/* 000317 */ 		}
/* 000317 */ 		else {
/* 000317 */ 		}
/* 000324 */ 		return content;
/* 000324 */ 	});},
/* 000329 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000329 */ 		if (arguments.length) {
/* 000329 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000329 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000329 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000329 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000329 */ 					switch (__attrib0__) {
/* 000329 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000329 */ 					}
/* 000329 */ 				}
/* 000329 */ 			}
/* 000329 */ 		}
/* 000329 */ 		else {
/* 000329 */ 		}
/* 000340 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000340 */ 		__except0__.__cause__ = null;
/* 000340 */ 		throw __except0__;
/* 000340 */ 	});},
/* 000345 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000345 */ 		if (arguments.length) {
/* 000345 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000345 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000345 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000345 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000345 */ 					switch (__attrib0__) {
/* 000345 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000345 */ 					}
/* 000345 */ 				}
/* 000345 */ 			}
/* 000345 */ 		}
/* 000345 */ 		else {
/* 000345 */ 		}
/* 000346 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000346 */ 		__except0__.__cause__ = null;
/* 000346 */ 		throw __except0__;
/* 000346 */ 	});},
/* 000348 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000348 */ 		if (arguments.length) {
/* 000348 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000348 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000348 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000348 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000348 */ 					switch (__attrib0__) {
/* 000348 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000348 */ 					}
/* 000348 */ 				}
/* 000348 */ 			}
/* 000348 */ 		}
/* 000348 */ 		else {
/* 000348 */ 		}
/* 000349 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000349 */ 		__except0__.__cause__ = null;
/* 000349 */ 		throw __except0__;
/* 000349 */ 	});},
/* 000351 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000351 */ 		if (arguments.length) {
/* 000351 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000351 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000351 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000351 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000351 */ 					switch (__attrib0__) {
/* 000351 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000351 */ 					}
/* 000351 */ 				}
/* 000351 */ 			}
/* 000351 */ 		}
/* 000351 */ 		else {
/* 000351 */ 		}
/* 000352 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000352 */ 		__except0__.__cause__ = null;
/* 000352 */ 		throw __except0__;
/* 000352 */ 	});},
/* 000354 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000354 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000354 */ 			var annotations = null;
/* 000354 */ 		};
/* 000354 */ 		if (arguments.length) {
/* 000354 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000354 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000354 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000354 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000354 */ 					switch (__attrib0__) {
/* 000354 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000354 */ 					}
/* 000354 */ 				}
/* 000354 */ 			}
/* 000354 */ 		}
/* 000354 */ 		else {
/* 000354 */ 		}
/* 000355 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000355 */ 		__except0__.__cause__ = null;
/* 000355 */ 		throw __except0__;
/* 000355 */ 	});},
/* 000357 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000357 */ 		if (arguments.length) {
/* 000357 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000357 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000357 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000357 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000357 */ 					switch (__attrib0__) {
/* 000357 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000357 */ 					}
/* 000357 */ 				}
/* 000357 */ 			}
/* 000357 */ 		}
/* 000357 */ 		else {
/* 000357 */ 		}
/* 000358 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000358 */ 		__except0__.__cause__ = null;
/* 000358 */ 		throw __except0__;
/* 000358 */ 	});},
/* 000360 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000360 */ 		if (arguments.length) {
/* 000360 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000360 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000360 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000360 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000360 */ 					switch (__attrib0__) {
/* 000360 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000360 */ 					}
/* 000360 */ 				}
/* 000360 */ 			}
/* 000360 */ 		}
/* 000360 */ 		else {
/* 000360 */ 		}
/* 000361 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000361 */ 		__except0__.__cause__ = null;
/* 000361 */ 		throw __except0__;
/* 000361 */ 	});},
/* 000363 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000363 */ 		var target_id_generator = null;
/* 000363 */ 		var annotations = null;
/* 000363 */ 		if (arguments.length) {
/* 000363 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000363 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000363 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000363 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000363 */ 					switch (__attrib0__) {
/* 000363 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000363 */ 					}
/* 000363 */ 				}
/* 000363 */ 			}
/* 000363 */ 		}
/* 000363 */ 		else {
/* 000363 */ 		}
/* 000365 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000365 */ 		__except0__.__cause__ = null;
/* 000365 */ 		throw __except0__;
/* 000365 */ 	});},
/* 000367 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000367 */ 		var heading_level = 1;
/* 000367 */ 		var inline_heading = false;
/* 000367 */ 		var target_id = null;
/* 000367 */ 		if (arguments.length) {
/* 000367 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000367 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000367 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000367 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000367 */ 					switch (__attrib0__) {
/* 000367 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000367 */ 					}
/* 000367 */ 				}
/* 000367 */ 			}
/* 000367 */ 		}
/* 000367 */ 		else {
/* 000367 */ 		}
/* 000369 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000369 */ 		__except0__.__cause__ = null;
/* 000369 */ 		throw __except0__;
/* 000369 */ 	});},
/* 000371 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000371 */ 		var is_block_level = false;
/* 000371 */ 		var annotations = null;
/* 000371 */ 		var target_id = null;
/* 000371 */ 		if (arguments.length) {
/* 000371 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000371 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000371 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000371 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000371 */ 					switch (__attrib0__) {
/* 000371 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000371 */ 					}
/* 000371 */ 				}
/* 000371 */ 			}
/* 000371 */ 		}
/* 000371 */ 		else {
/* 000371 */ 		}
/* 000373 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000373 */ 		__except0__.__cause__ = null;
/* 000373 */ 		throw __except0__;
/* 000373 */ 	});},
/* 000375 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000375 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000375 */ 			var annotations = null;
/* 000375 */ 		};
/* 000375 */ 		if (arguments.length) {
/* 000375 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000375 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000375 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000375 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000375 */ 					switch (__attrib0__) {
/* 000375 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000375 */ 					}
/* 000375 */ 				}
/* 000375 */ 			}
/* 000375 */ 		}
/* 000375 */ 		else {
/* 000375 */ 		}
/* 000389 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000389 */ 		__except0__.__cause__ = null;
/* 000389 */ 		throw __except0__;
/* 000389 */ 	});},
/* 000395 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000396 */ 		__except0__.__cause__ = null;
/* 000396 */ 		throw __except0__;
/* 000396 */ 	});},
/* 000398 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000398 */ 		if (arguments.length) {
/* 000398 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000398 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000398 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000398 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000398 */ 					switch (__attrib0__) {
/* 000398 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000399 */ 		__except0__.__cause__ = null;
/* 000399 */ 		throw __except0__;
/* 000399 */ 	});},
/* 000401 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000401 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000401 */ 			var target_id = null;
/* 000401 */ 		};
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000402 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000402 */ 		__except0__.__cause__ = null;
/* 000402 */ 		throw __except0__;
/* 000402 */ 	});},
/* 000409 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000409 */ 		if (arguments.length) {
/* 000409 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000409 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000409 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000409 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000409 */ 					switch (__attrib0__) {
/* 000409 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000409 */ 					}
/* 000409 */ 				}
/* 000409 */ 			}
/* 000409 */ 		}
/* 000409 */ 		else {
/* 000409 */ 		}
/* 000410 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000410 */ 	});}
/* 000410 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map