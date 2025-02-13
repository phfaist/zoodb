/* 000001 */ // Transcrypt'ed from Python, 2025-02-13 12:53:51
/* 000007 */ var logging = {};
/* 000007 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000016 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer.js';
/* 000015 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000013 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000010 */ import {LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000007 */ import * as __module_logging__ from './logging.js';
/* 000007 */ __nest__ (logging, '', __module_logging__);
/* 000007 */ export {nodes, FLMNodesFlmRecomposer, LatexWalkerLocatedError, FLMRenderContext};
/* 000001 */ var __name__ = 'flm.fragmentrenderer._base';
/* 000008 */ export var logger = (function () {
/* 000008 */ 	var __accu0__ = logging;
/* 000008 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000008 */ }) ();
/* 000020 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000020 */ 	__module__: __name__,
/* 000027 */ 	supports_delayed_render_markers: false,
/* 000034 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000034 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000034 */ 			var config = null;
/* 000034 */ 		};
/* 000034 */ 		if (arguments.length) {
/* 000034 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000034 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000034 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000034 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000034 */ 					switch (__attrib0__) {
/* 000034 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000034 */ 					}
/* 000034 */ 				}
/* 000034 */ 			}
/* 000034 */ 		}
/* 000034 */ 		else {
/* 000034 */ 		}
/* 000035 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000037 */ 		if (__t__ (config !== null)) {
/* 000038 */ 			var __iterable0__ = (function () {
/* 000038 */ 				var __accu0__ = config;
/* 000038 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000038 */ 			}) ();
/* 000038 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000038 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000038 */ 				var k = __left0__ [0];
/* 000038 */ 				var v = __left0__ [1];
/* 000039 */ 				__call__ (setattr, null, self, k, v);
/* 000039 */ 			}
/* 000039 */ 		}
/* 000039 */ 	});},
/* 000042 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000042 */ 		if (arguments.length) {
/* 000042 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000042 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000042 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000042 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000042 */ 					switch (__attrib0__) {
/* 000042 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000042 */ 					}
/* 000042 */ 				}
/* 000042 */ 			}
/* 000042 */ 		}
/* 000042 */ 		else {
/* 000042 */ 		}
/* 000043 */ 		// pass;
/* 000043 */ 	});},
/* 000045 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000045 */ 		if (arguments.length) {
/* 000045 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000045 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000045 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000045 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000045 */ 					switch (__attrib0__) {
/* 000045 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000045 */ 					}
/* 000045 */ 				}
/* 000045 */ 			}
/* 000045 */ 		}
/* 000045 */ 		else {
/* 000045 */ 		}
/* 000046 */ 		// pass;
/* 000046 */ 	});},
/* 000049 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000049 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000049 */ 			var is_block_level = null;
/* 000049 */ 		};
/* 000049 */ 		if (arguments.length) {
/* 000049 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000049 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000049 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000049 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000049 */ 					switch (__attrib0__) {
/* 000049 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000049 */ 					}
/* 000049 */ 				}
/* 000049 */ 			}
/* 000049 */ 		}
/* 000049 */ 		else {
/* 000049 */ 		}
/* 000050 */ 		try {
/* 000051 */ 			return (function () {
/* 000051 */ 				var __accu0__ = self;
/* 000052 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000052 */ 					var __accu1__ = self;
/* 000052 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000052 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000052 */ 			}) ();
/* 000052 */ 		}
/* 000052 */ 		catch (__except0__) {
/* 000052 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000052 */ 				var e = __except0__;
/* 000055 */ 				// pass;
/* 000062 */ 				(function () {
/* 000062 */ 					var __accu0__ = e;
/* 000062 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, flm_fragment.nodes, __kwargtrans__ ({what: flm_fragment.what}));
/* 000062 */ 				}) ();
/* 000065 */ 				var __except1__ = e;
/* 000065 */ 				__except1__.__cause__ = null;
/* 000065 */ 				throw __except1__;
/* 000065 */ 			}
/* 000065 */ 			else if (isinstance (__except0__, Exception)) {
/* 000065 */ 				var e = __except0__;
/* 000067 */ 				// pass;
/* 000073 */ 				__except0__.__cause__ = null;
/* 000073 */ 				throw __except0__;
/* 000073 */ 			}
/* 000073 */ 			else {
/* 000073 */ 				throw __except0__;
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 	});},
/* 000075 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000075 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000075 */ 			var is_block_level = null;
/* 000075 */ 		};
/* 000075 */ 		if (arguments.length) {
/* 000075 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000075 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000075 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000075 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000075 */ 					switch (__attrib0__) {
/* 000075 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000075 */ 					}
/* 000075 */ 				}
/* 000075 */ 			}
/* 000075 */ 		}
/* 000075 */ 		else {
/* 000075 */ 		}
/* 000090 */ 		if (__t__ (nodelist === null)) {
/* 000091 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000091 */ 			__except0__.__cause__ = null;
/* 000091 */ 			throw __except0__;
/* 000091 */ 		}
/* 000093 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000094 */ 			// pass;
/* 000104 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute: {}'.format (__getslice__ (__call__ (repr, null, nodelist), 0, 100, 1)), __kwargtrans__ ({pos: (__t__ (__call__ (hasattr, null, nodelist, 'pos')) ? __call__ (getattr, null, nodelist, 'pos') : null)}));
/* 000104 */ 			__except0__.__cause__ = null;
/* 000104 */ 			throw __except0__;
/* 000104 */ 		}
/* 000108 */ 		if (__t__ (is_block_level === null)) {
/* 000109 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000109 */ 		}
/* 000111 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000112 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000112 */ 			__except0__.__cause__ = null;
/* 000112 */ 			throw __except0__;
/* 000112 */ 		}
/* 000117 */ 		if (__t__ (is_block_level)) {
/* 000123 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000124 */ 				var node_blocks = nodelist.flm_blocks;
/* 000124 */ 			}
/* 000125 */ 			else {
/* 000126 */ 				var node_blocks = [nodelist];
/* 000126 */ 			}
/* 000128 */ 			return (function () {
/* 000128 */ 				var __accu0__ = self;
/* 000128 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000128 */ 			}) ();
/* 000128 */ 		}
/* 000130 */ 		return (function () {
/* 000130 */ 			var __accu0__ = self;
/* 000130 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000130 */ 		}) ();
/* 000130 */ 	});},
/* 000133 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000133 */ 		if (arguments.length) {
/* 000133 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000133 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000133 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000133 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000133 */ 					switch (__attrib0__) {
/* 000133 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000133 */ 					}
/* 000133 */ 				}
/* 000133 */ 			}
/* 000133 */ 		}
/* 000133 */ 		else {
/* 000133 */ 		}
/* 000134 */ 		var render_context = (function () {
/* 000134 */ 			var __accu0__ = self;
/* 000134 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000134 */ 		}) ();
/* 000136 */ 		try {
/* 000138 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_replace_by_node')) && node.flm_replace_by_node !== null)) {
/* 000141 */ 				return (function () {
/* 000141 */ 					var __accu0__ = self;
/* 000141 */ 					return __call__ (__accu0__.render_node, __accu0__, node.flm_replace_by_node, render_context);
/* 000141 */ 				}) ();
/* 000141 */ 			}
/* 000143 */ 			if (__t__ ((function () {
/* 000143 */ 				var __accu0__ = node;
/* 000143 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000143 */ 			}) ())) {
/* 000144 */ 				return (function () {
/* 000144 */ 					var __accu0__ = self;
/* 000144 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000144 */ 				}) ();
/* 000144 */ 			}
/* 000145 */ 			if (__t__ ((function () {
/* 000145 */ 				var __accu0__ = node;
/* 000145 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000145 */ 			}) ())) {
/* 000146 */ 				return (function () {
/* 000146 */ 					var __accu0__ = self;
/* 000146 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000146 */ 				}) ();
/* 000146 */ 			}
/* 000147 */ 			if (__t__ ((function () {
/* 000147 */ 				var __accu0__ = node;
/* 000147 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000147 */ 			}) ())) {
/* 000148 */ 				return (function () {
/* 000148 */ 					var __accu0__ = self;
/* 000148 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000148 */ 				}) ();
/* 000148 */ 			}
/* 000149 */ 			if (__t__ ((function () {
/* 000149 */ 				var __accu0__ = node;
/* 000149 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000149 */ 			}) ())) {
/* 000150 */ 				return (function () {
/* 000150 */ 					var __accu0__ = self;
/* 000150 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000150 */ 				}) ();
/* 000150 */ 			}
/* 000151 */ 			if (__t__ ((function () {
/* 000151 */ 				var __accu0__ = node;
/* 000151 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000151 */ 			}) ())) {
/* 000152 */ 				return (function () {
/* 000152 */ 					var __accu0__ = self;
/* 000152 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000152 */ 				}) ();
/* 000152 */ 			}
/* 000153 */ 			if (__t__ ((function () {
/* 000153 */ 				var __accu0__ = node;
/* 000153 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000153 */ 			}) ())) {
/* 000154 */ 				return (function () {
/* 000154 */ 					var __accu0__ = self;
/* 000154 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000154 */ 				}) ();
/* 000154 */ 			}
/* 000155 */ 			if (__t__ ((function () {
/* 000155 */ 				var __accu0__ = node;
/* 000155 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000155 */ 			}) ())) {
/* 000156 */ 				return (function () {
/* 000156 */ 					var __accu0__ = self;
/* 000156 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000156 */ 				}) ();
/* 000156 */ 			}
/* 000158 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000158 */ 			__except0__.__cause__ = null;
/* 000158 */ 			throw __except0__;
/* 000158 */ 		}
/* 000158 */ 		catch (__except0__) {
/* 000158 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000158 */ 				var e = __except0__;
/* 000162 */ 				(function () {
/* 000162 */ 					var __accu0__ = e;
/* 000162 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000162 */ 				}) ();
/* 000163 */ 				var __except1__ = e;
/* 000163 */ 				__except1__.__cause__ = null;
/* 000163 */ 				throw __except1__;
/* 000163 */ 			}
/* 000163 */ 			else if (isinstance (__except0__, Exception)) {
/* 000163 */ 				var e = __except0__;
/* 000166 */ 				var err = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e));
/* 000167 */ 				(function () {
/* 000167 */ 					var __accu0__ = err;
/* 000167 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000167 */ 				}) ();
/* 000168 */ 				var __except1__ = err;
/* 000168 */ 				__except1__.__cause__ = null;
/* 000168 */ 				throw __except1__;
/* 000168 */ 			}
/* 000168 */ 			else {
/* 000168 */ 				throw __except0__;
/* 000168 */ 			}
/* 000168 */ 		}
/* 000168 */ 	});},
/* 000171 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000171 */ 		if (arguments.length) {
/* 000171 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000171 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000171 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000171 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000171 */ 					switch (__attrib0__) {
/* 000171 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000171 */ 					}
/* 000171 */ 				}
/* 000171 */ 			}
/* 000171 */ 		}
/* 000171 */ 		else {
/* 000171 */ 		}
/* 000172 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000173 */ 			var chars_value = node.flm_chars_value;
/* 000173 */ 		}
/* 000174 */ 		else {
/* 000175 */ 			var chars_value = null;
/* 000175 */ 		}
/* 000176 */ 		if (__t__ (chars_value === null)) {
/* 000178 */ 			var chars_value = node.chars;
/* 000178 */ 		}
/* 000179 */ 		return (function () {
/* 000179 */ 			var __accu0__ = self;
/* 000179 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000179 */ 		}) ();
/* 000179 */ 	});},
/* 000181 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
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
/* 000182 */ 		return '';
/* 000182 */ 	});},
/* 000184 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
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
/* 000185 */ 		return (function () {
/* 000185 */ 			var __accu0__ = self;
/* 000186 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000186 */ 				var __accu1__ = self;
/* 000186 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000186 */ 			}) ());
/* 000186 */ 		}) ();
/* 000186 */ 	});},
/* 000188 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000188 */ 		if (arguments.length) {
/* 000188 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000188 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000188 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000188 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000188 */ 					switch (__attrib0__) {
/* 000188 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000188 */ 					}
/* 000188 */ 				}
/* 000188 */ 			}
/* 000188 */ 		}
/* 000188 */ 		else {
/* 000188 */ 		}
/* 000189 */ 		return (function () {
/* 000189 */ 			var __accu0__ = self;
/* 000190 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000190 */ 				var __accu1__ = self;
/* 000190 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000190 */ 			}) ());
/* 000190 */ 		}) ();
/* 000190 */ 	});},
/* 000192 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000192 */ 		if (arguments.length) {
/* 000192 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000192 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000192 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000192 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000192 */ 					switch (__attrib0__) {
/* 000192 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000192 */ 					}
/* 000192 */ 				}
/* 000192 */ 			}
/* 000192 */ 		}
/* 000192 */ 		else {
/* 000192 */ 		}
/* 000193 */ 		return (function () {
/* 000193 */ 			var __accu0__ = self;
/* 000194 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000194 */ 				var __accu1__ = self;
/* 000194 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000194 */ 			}) ());
/* 000194 */ 		}) ();
/* 000194 */ 	});},
/* 000196 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000196 */ 		if (arguments.length) {
/* 000196 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000196 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000196 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000196 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000196 */ 					switch (__attrib0__) {
/* 000196 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000196 */ 					}
/* 000196 */ 				}
/* 000196 */ 			}
/* 000196 */ 		}
/* 000196 */ 		else {
/* 000196 */ 		}
/* 000197 */ 		return (function () {
/* 000197 */ 			var __accu0__ = self;
/* 000198 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000198 */ 				var __accu1__ = self;
/* 000198 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000198 */ 			}) ());
/* 000198 */ 		}) ();
/* 000198 */ 	});},
/* 000200 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000200 */ 		if (arguments.length) {
/* 000200 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000200 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000200 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000200 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000200 */ 					switch (__attrib0__) {
/* 000200 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000200 */ 					}
/* 000200 */ 				}
/* 000200 */ 			}
/* 000200 */ 		}
/* 000200 */ 		else {
/* 000200 */ 		}
/* 000206 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000207 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000207 */ 			__except0__.__cause__ = null;
/* 000207 */ 			throw __except0__;
/* 000207 */ 		}
/* 000209 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000210 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000212 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000212 */ 					var __accu0__ = node;
/* 000212 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000212 */ 				}) ()));
/* 000212 */ 				__except0__.__cause__ = null;
/* 000212 */ 				throw __except0__;
/* 000212 */ 			}
/* 000212 */ 		}
/* 000215 */ 		return (function () {
/* 000215 */ 			var __accu0__ = self;
/* 000218 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000218 */ 				var __accu1__ = self;
/* 000218 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000218 */ 			}) ());
/* 000218 */ 		}) ();
/* 000218 */ 	});},
/* 000223 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000223 */ 		if (arguments.length) {
/* 000223 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000223 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000223 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000223 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000223 */ 					switch (__attrib0__) {
/* 000223 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000223 */ 					}
/* 000223 */ 				}
/* 000223 */ 			}
/* 000223 */ 		}
/* 000223 */ 		else {
/* 000223 */ 		}
/* 000223 */ 		assert (render_context !== null);
/* 000228 */ 		if (__t__ (flm_specinfo === null)) {
/* 000229 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000229 */ 			__except0__.__cause__ = null;
/* 000229 */ 			throw __except0__;
/* 000229 */ 		}
/* 000231 */ 		var is_delayed_render = (function () {
/* 000231 */ 			var __accu0__ = render_context;
/* 000231 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000231 */ 		}) ();
/* 000232 */ 		if (__t__ (is_delayed_render)) {
/* 000235 */ 			var is_first_pass = render_context.is_first_pass;
/* 000236 */ 			var delayed_key = null;
/* 000238 */ 			if (__t__ (is_first_pass)) {
/* 000239 */ 				(function () {
/* 000239 */ 					var __accu0__ = flm_specinfo;
/* 000239 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000239 */ 				}) ();
/* 000240 */ 				var delayed_key = (function () {
/* 000240 */ 					var __accu0__ = render_context;
/* 000240 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000240 */ 				}) ();
/* 000240 */ 			}
/* 000242 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000245 */ 				return (function () {
/* 000245 */ 					var __accu0__ = self;
/* 000245 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000245 */ 				}) ();
/* 000245 */ 			}
/* 000246 */ 			else if (__t__ (is_first_pass)) {
/* 000248 */ 				(function () {
/* 000248 */ 					var __accu0__ = flm_specinfo;
/* 000248 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000248 */ 				}) ();
/* 000250 */ 				return (function () {
/* 000250 */ 					var __accu0__ = self;
/* 000250 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000250 */ 				}) ();
/* 000250 */ 			}
/* 000251 */ 			else {
/* 000251 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000255 */ 				return (function () {
/* 000255 */ 					var __accu0__ = render_context;
/* 000255 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000255 */ 				}) ();
/* 000255 */ 			}
/* 000255 */ 		}
/* 000259 */ 		var value = (function () {
/* 000259 */ 			var __accu0__ = flm_specinfo;
/* 000259 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000259 */ 		}) ();
/* 000260 */ 		return value;
/* 000260 */ 	});},
/* 000262 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000262 */ 		if (arguments.length) {
/* 000262 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000262 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000262 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000262 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000262 */ 					switch (__attrib0__) {
/* 000262 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000262 */ 					}
/* 000262 */ 				}
/* 000262 */ 			}
/* 000262 */ 		}
/* 000262 */ 		else {
/* 000262 */ 		}
/* 000263 */ 		return (function () {
/* 000263 */ 			var __accu0__ = self;
/* 000266 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000266 */ 				var __accu1__ = self;
/* 000266 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000266 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000266 */ 		}) ();
/* 000266 */ 	});},
/* 000271 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000271 */ 		var environmentname = null;
/* 000271 */ 		var target_id = null;
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000279 */ 		var __left0__ = delimiters;
/* 000279 */ 		var begin_delim = __left0__ [0];
/* 000279 */ 		var end_delim = __left0__ [1];
/* 000280 */ 		if (__t__ (environmentname)) {
/* 000281 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000282 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000282 */ 		}
/* 000284 */ 		var rendered = (function () {
/* 000284 */ 			var __accu0__ = self;
/* 000285 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (begin_delim, (function () {
/* 000285 */ 				var __accu1__ = self;
/* 000285 */ 				return __call__ (__accu1__.recompose_latex, __accu1__, nodelist);
/* 000285 */ 			}) ()), end_delim), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000285 */ 		}) ();
/* 000291 */ 		return rendered;
/* 000291 */ 	});},
/* 000293 */ 	get recompose_latex () {return __get__ (this, function (self, node) {
/* 000293 */ 		if (arguments.length) {
/* 000293 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000293 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000293 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000293 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000293 */ 					switch (__attrib0__) {
/* 000293 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000293 */ 					}
/* 000293 */ 				}
/* 000293 */ 			}
/* 000293 */ 		}
/* 000293 */ 		else {
/* 000293 */ 		}
/* 000294 */ 		var flm = (function () {
/* 000294 */ 			var __accu0__ = __call__ (FLMNodesFlmRecomposer, null);
/* 000294 */ 			return __call__ (__accu0__.recompose_flm_text, __accu0__, node);
/* 000294 */ 		}) ();
/* 000295 */ 		// pass;
/* 000298 */ 		return flm;
/* 000298 */ 	});},
/* 000304 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000304 */ 		if (arguments.length) {
/* 000304 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000304 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000304 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000304 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000304 */ 					switch (__attrib0__) {
/* 000304 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000304 */ 					}
/* 000304 */ 				}
/* 000304 */ 			}
/* 000304 */ 		}
/* 000304 */ 		else {
/* 000304 */ 		}
/* 000306 */ 		var rendered_blocks = [];
/* 000308 */ 		var __iterable0__ = node_blocks;
/* 000308 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000308 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000310 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000311 */ 				var para = (function () {
/* 000311 */ 					var __accu0__ = self;
/* 000311 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000311 */ 				}) ();
/* 000311 */ 			}
/* 000312 */ 			else {
/* 000313 */ 				var para = (function () {
/* 000313 */ 					var __accu0__ = self;
/* 000313 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000313 */ 				}) ();
/* 000313 */ 			}
/* 000315 */ 			(function () {
/* 000315 */ 				var __accu0__ = rendered_blocks;
/* 000315 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000315 */ 			}) ();
/* 000315 */ 		}
/* 000317 */ 		return (function () {
/* 000317 */ 			var __accu0__ = self;
/* 000317 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000317 */ 		}) ();
/* 000317 */ 	});},
/* 000320 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000320 */ 		if (arguments.length) {
/* 000320 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000320 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000320 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000320 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000320 */ 					switch (__attrib0__) {
/* 000320 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000320 */ 					}
/* 000320 */ 				}
/* 000320 */ 			}
/* 000320 */ 		}
/* 000320 */ 		else {
/* 000320 */ 		}
/* 000324 */ 		return (function () {
/* 000324 */ 			var __accu0__ = self;
/* 000324 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000324 */ 		}) ();
/* 000324 */ 	});},
/* 000326 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000326 */ 		if (arguments.length) {
/* 000326 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000326 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000326 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000326 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000326 */ 					switch (__attrib0__) {
/* 000326 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000326 */ 					}
/* 000326 */ 				}
/* 000326 */ 			}
/* 000326 */ 		}
/* 000326 */ 		else {
/* 000326 */ 		}
/* 000327 */ 		return (function () {
/* 000327 */ 			var __accu0__ = self;
/* 000327 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000327 */ 				var __accu1__ = [];
/* 000327 */ 				var __iterable0__ = nodelist;
/* 000327 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000328 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000328 */ 					(function () {
/* 000328 */ 						var __accu2__ = __accu1__;
/* 000327 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000327 */ 							var __accu3__ = self;
/* 000327 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000327 */ 						}) ());
/* 000327 */ 					}) ();
/* 000327 */ 				}
/* 000327 */ 				return __accu1__;
/* 000327 */ 			}) (), render_context);
/* 000327 */ 		}) ();
/* 000327 */ 	});},
/* 000331 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000331 */ 		if (arguments.length) {
/* 000331 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000331 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000331 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000331 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000331 */ 					switch (__attrib0__) {
/* 000331 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000331 */ 					}
/* 000331 */ 				}
/* 000331 */ 			}
/* 000331 */ 		}
/* 000331 */ 		else {
/* 000331 */ 		}
/* 000335 */ 		return (function () {
/* 000335 */ 			var __accu0__ = '';
/* 000335 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000335 */ 		}) ();
/* 000335 */ 	});},
/* 000338 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000338 */ 		if (arguments.length) {
/* 000338 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000338 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000338 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000338 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000338 */ 					switch (__attrib0__) {
/* 000338 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000338 */ 					}
/* 000338 */ 				}
/* 000338 */ 			}
/* 000338 */ 		}
/* 000338 */ 		else {
/* 000338 */ 		}
/* 000346 */ 		return (function () {
/* 000346 */ 			var __accu0__ = '\n\n';
/* 000346 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000346 */ 				var __accu1__ = [];
/* 000346 */ 				var __iterable0__ = content_list;
/* 000346 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000346 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000346 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000346 */ 						(function () {
/* 000346 */ 							var __accu2__ = __accu1__;
/* 000346 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000346 */ 						}) ();
/* 000346 */ 					}
/* 000346 */ 				}
/* 000346 */ 				return __accu1__;
/* 000346 */ 			}) ());
/* 000346 */ 		}) ();
/* 000346 */ 	});},
/* 000352 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000352 */ 		var annotations = null;
/* 000352 */ 		var target_id = null;
/* 000352 */ 		if (arguments.length) {
/* 000352 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000352 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000352 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000352 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000352 */ 					switch (__attrib0__) {
/* 000352 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000352 */ 					}
/* 000352 */ 				}
/* 000352 */ 			}
/* 000352 */ 		}
/* 000352 */ 		else {
/* 000352 */ 		}
/* 000359 */ 		return content;
/* 000359 */ 	});},
/* 000361 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000361 */ 		var annotations = null;
/* 000361 */ 		var target_id = null;
/* 000361 */ 		if (arguments.length) {
/* 000361 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000361 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000361 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000361 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000361 */ 					switch (__attrib0__) {
/* 000361 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000361 */ 					}
/* 000361 */ 				}
/* 000361 */ 			}
/* 000361 */ 		}
/* 000361 */ 		else {
/* 000361 */ 		}
/* 000368 */ 		return content;
/* 000368 */ 	});},
/* 000373 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000373 */ 		if (arguments.length) {
/* 000373 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000373 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000373 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000373 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000373 */ 					switch (__attrib0__) {
/* 000373 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000373 */ 					}
/* 000373 */ 				}
/* 000373 */ 			}
/* 000373 */ 		}
/* 000373 */ 		else {
/* 000373 */ 		}
/* 000384 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000384 */ 		__except0__.__cause__ = null;
/* 000384 */ 		throw __except0__;
/* 000384 */ 	});},
/* 000389 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000389 */ 		if (arguments.length) {
/* 000389 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000389 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000389 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000389 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000389 */ 					switch (__attrib0__) {
/* 000389 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000389 */ 					}
/* 000389 */ 				}
/* 000389 */ 			}
/* 000389 */ 		}
/* 000389 */ 		else {
/* 000389 */ 		}
/* 000390 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000390 */ 		__except0__.__cause__ = null;
/* 000390 */ 		throw __except0__;
/* 000390 */ 	});},
/* 000392 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000392 */ 		if (arguments.length) {
/* 000392 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000392 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000392 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000392 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000392 */ 					switch (__attrib0__) {
/* 000392 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000392 */ 					}
/* 000392 */ 				}
/* 000392 */ 			}
/* 000392 */ 		}
/* 000392 */ 		else {
/* 000392 */ 		}
/* 000393 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000393 */ 		__except0__.__cause__ = null;
/* 000393 */ 		throw __except0__;
/* 000393 */ 	});},
/* 000395 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000395 */ 		if (arguments.length) {
/* 000395 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000395 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000395 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000395 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000395 */ 					switch (__attrib0__) {
/* 000395 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000395 */ 					}
/* 000395 */ 				}
/* 000395 */ 			}
/* 000395 */ 		}
/* 000395 */ 		else {
/* 000395 */ 		}
/* 000396 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000396 */ 		__except0__.__cause__ = null;
/* 000396 */ 		throw __except0__;
/* 000396 */ 	});},
/* 000398 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
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
/* 000398 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000398 */ 					}
/* 000398 */ 				}
/* 000398 */ 			}
/* 000398 */ 		}
/* 000398 */ 		else {
/* 000398 */ 		}
/* 000399 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000399 */ 		__except0__.__cause__ = null;
/* 000399 */ 		throw __except0__;
/* 000399 */ 	});},
/* 000401 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000401 */ 		if (arguments.length) {
/* 000401 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000401 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000401 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000401 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000401 */ 					switch (__attrib0__) {
/* 000401 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000401 */ 					}
/* 000401 */ 				}
/* 000401 */ 			}
/* 000401 */ 		}
/* 000401 */ 		else {
/* 000401 */ 		}
/* 000402 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000402 */ 		__except0__.__cause__ = null;
/* 000402 */ 		throw __except0__;
/* 000402 */ 	});},
/* 000404 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000404 */ 		if (arguments.length) {
/* 000404 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000404 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000404 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000404 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000404 */ 					switch (__attrib0__) {
/* 000404 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000404 */ 					}
/* 000404 */ 				}
/* 000404 */ 			}
/* 000404 */ 		}
/* 000404 */ 		else {
/* 000404 */ 		}
/* 000405 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000405 */ 		__except0__.__cause__ = null;
/* 000405 */ 		throw __except0__;
/* 000405 */ 	});},
/* 000407 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000407 */ 		var target_id_generator = null;
/* 000407 */ 		var annotations = null;
/* 000407 */ 		if (arguments.length) {
/* 000407 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000407 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000407 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000407 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000407 */ 					switch (__attrib0__) {
/* 000407 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000407 */ 					}
/* 000407 */ 				}
/* 000407 */ 			}
/* 000407 */ 		}
/* 000407 */ 		else {
/* 000407 */ 		}
/* 000409 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000409 */ 		__except0__.__cause__ = null;
/* 000409 */ 		throw __except0__;
/* 000409 */ 	});},
/* 000411 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000411 */ 		var heading_level = 1;
/* 000411 */ 		var inline_heading = false;
/* 000411 */ 		var target_id = null;
/* 000411 */ 		var annotations = null;
/* 000411 */ 		if (arguments.length) {
/* 000411 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000411 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000411 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000411 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000411 */ 					switch (__attrib0__) {
/* 000411 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000411 */ 					}
/* 000411 */ 				}
/* 000411 */ 			}
/* 000411 */ 		}
/* 000411 */ 		else {
/* 000411 */ 		}
/* 000417 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000417 */ 		__except0__.__cause__ = null;
/* 000417 */ 		throw __except0__;
/* 000417 */ 	});},
/* 000419 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000419 */ 		var is_block_level = false;
/* 000419 */ 		var annotations = null;
/* 000419 */ 		var target_id = null;
/* 000419 */ 		if (arguments.length) {
/* 000419 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000419 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000419 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000419 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000419 */ 					switch (__attrib0__) {
/* 000419 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000419 */ 					}
/* 000419 */ 				}
/* 000419 */ 			}
/* 000419 */ 		}
/* 000419 */ 		else {
/* 000419 */ 		}
/* 000421 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000421 */ 		__except0__.__cause__ = null;
/* 000421 */ 		throw __except0__;
/* 000421 */ 	});},
/* 000423 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000423 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000423 */ 			var annotations = null;
/* 000423 */ 		};
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000437 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000437 */ 		__except0__.__cause__ = null;
/* 000437 */ 		throw __except0__;
/* 000437 */ 	});},
/* 000443 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000443 */ 		if (arguments.length) {
/* 000443 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000443 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000443 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000443 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000443 */ 					switch (__attrib0__) {
/* 000443 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000443 */ 					}
/* 000443 */ 				}
/* 000443 */ 			}
/* 000443 */ 		}
/* 000443 */ 		else {
/* 000443 */ 		}
/* 000444 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000444 */ 		__except0__.__cause__ = null;
/* 000444 */ 		throw __except0__;
/* 000444 */ 	});},
/* 000446 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000446 */ 		if (arguments.length) {
/* 000446 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000446 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000446 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000446 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000446 */ 					switch (__attrib0__) {
/* 000446 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000446 */ 					}
/* 000446 */ 				}
/* 000446 */ 			}
/* 000446 */ 		}
/* 000446 */ 		else {
/* 000446 */ 		}
/* 000447 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000447 */ 		__except0__.__cause__ = null;
/* 000447 */ 		throw __except0__;
/* 000447 */ 	});},
/* 000449 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000449 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000449 */ 			var target_id = null;
/* 000449 */ 		};
/* 000449 */ 		if (arguments.length) {
/* 000449 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000449 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000449 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000449 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000449 */ 					switch (__attrib0__) {
/* 000449 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000449 */ 					}
/* 000449 */ 				}
/* 000449 */ 			}
/* 000449 */ 		}
/* 000449 */ 		else {
/* 000449 */ 		}
/* 000450 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000450 */ 		__except0__.__cause__ = null;
/* 000450 */ 		throw __except0__;
/* 000450 */ 	});},
/* 000457 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000457 */ 		if (arguments.length) {
/* 000457 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000457 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000457 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000457 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000457 */ 					switch (__attrib0__) {
/* 000457 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000457 */ 					}
/* 000457 */ 				}
/* 000457 */ 			}
/* 000457 */ 		}
/* 000457 */ 		else {
/* 000457 */ 		}
/* 000458 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000458 */ 	});}
/* 000458 */ });
/* 000007 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map