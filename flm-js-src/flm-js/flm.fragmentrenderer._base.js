/* 000001 */ // Transcrypt'ed from Python, 2026-06-30 21:51:25
/* 000024 */ var logging = {};
/* 000024 */ import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _copy, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
/* 000033 */ import {FLMNodesFlmRecomposer} from './flm.flmrecomposer.js';
/* 000032 */ import {FLMRenderContext} from './flm.flmrendercontext.js';
/* 000030 */ import * as nodes from './pylatexenc.latexnodes.nodes.js';
/* 000027 */ import {LatexWalkerLocatedError} from './pylatexenc.latexnodes.js';
/* 000024 */ import * as __module_logging__ from './logging.js';
/* 000024 */ __nest__ (logging, '', __module_logging__);
/* 000024 */ export {nodes, LatexWalkerLocatedError, FLMNodesFlmRecomposer, FLMRenderContext};
/* 000001 */ var __name__ = 'flm.fragmentrenderer._base';
/* 000025 */ export var logger = (function () {
/* 000025 */ 	var __accu0__ = logging;
/* 000025 */ 	return __call__ (__accu0__.getLogger, __accu0__, __name__);
/* 000025 */ }) ();
/* 000037 */ export var FragmentRenderer =  __class__ ('FragmentRenderer', [object], {
/* 000037 */ 	__module__: __name__,
/* 000055 */ 	supports_delayed_render_markers: false,
/* 000065 */ 	get __init__ () {return __get__ (this, function (self, config) {
/* 000065 */ 		if (typeof config == 'undefined' || (config != null && config.hasOwnProperty ("__kwargtrans__"))) {;
/* 000065 */ 			var config = null;
/* 000065 */ 		};
/* 000065 */ 		if (arguments.length) {
/* 000065 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000065 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000065 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000065 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000065 */ 					switch (__attrib0__) {
/* 000065 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 						case 'config': var config = __allkwargs0__ [__attrib0__]; break;
/* 000065 */ 					}
/* 000065 */ 				}
/* 000065 */ 			}
/* 000065 */ 		}
/* 000065 */ 		else {
/* 000065 */ 		}
/* 000066 */ 		__call__ (__call__ (__super__, null, FragmentRenderer, '__init__'), null, self);
/* 000068 */ 		if (__t__ (config !== null)) {
/* 000069 */ 			var __iterable0__ = (function () {
/* 000069 */ 				var __accu0__ = config;
/* 000069 */ 				return __call__ (__accu0__.py_items, __accu0__);
/* 000069 */ 			}) ();
/* 000069 */ 			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000069 */ 				var __left0__ = __getitem__ (__iterable0__, __index0__);
/* 000069 */ 				var k = __left0__ [0];
/* 000069 */ 				var v = __left0__ [1];
/* 000070 */ 				__call__ (setattr, null, self, k, v);
/* 000070 */ 			}
/* 000070 */ 		}
/* 000070 */ 	});},
/* 000073 */ 	get document_render_start () {return __get__ (this, function (self, render_context) {
/* 000073 */ 		if (arguments.length) {
/* 000073 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000073 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000073 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000073 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000073 */ 					switch (__attrib0__) {
/* 000073 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000073 */ 					}
/* 000073 */ 				}
/* 000073 */ 			}
/* 000073 */ 		}
/* 000073 */ 		else {
/* 000073 */ 		}
/* 000082 */ 		// pass;
/* 000082 */ 	});},
/* 000084 */ 	get document_render_finish () {return __get__ (this, function (self, render_context) {
/* 000084 */ 		if (arguments.length) {
/* 000084 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000084 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000084 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000084 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000084 */ 					switch (__attrib0__) {
/* 000084 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000084 */ 					}
/* 000084 */ 				}
/* 000084 */ 			}
/* 000084 */ 		}
/* 000084 */ 		else {
/* 000084 */ 		}
/* 000093 */ 		// pass;
/* 000093 */ 	});},
/* 000096 */ 	get render_fragment () {return __get__ (this, function (self, flm_fragment, render_context, is_block_level) {
/* 000096 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000096 */ 			var is_block_level = null;
/* 000096 */ 		};
/* 000096 */ 		if (arguments.length) {
/* 000096 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000096 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000096 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000096 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000096 */ 					switch (__attrib0__) {
/* 000096 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'flm_fragment': var flm_fragment = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000096 */ 					}
/* 000096 */ 				}
/* 000096 */ 			}
/* 000096 */ 		}
/* 000096 */ 		else {
/* 000096 */ 		}
/* 000106 */ 		try {
/* 000107 */ 			return (function () {
/* 000107 */ 				var __accu0__ = self;
/* 000108 */ 				return __call__ (__accu0__.render_nodelist, __accu0__, flm_fragment.nodes, (function () {
/* 000108 */ 					var __accu1__ = self;
/* 000108 */ 					return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000108 */ 				}) (), __kwargtrans__ ({is_block_level: is_block_level}));
/* 000108 */ 			}) ();
/* 000108 */ 		}
/* 000108 */ 		catch (__except0__) {
/* 000108 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000108 */ 				var e = __except0__;
/* 000111 */ 				// pass;
/* 000118 */ 				(function () {
/* 000118 */ 					var __accu0__ = e;
/* 000118 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, flm_fragment.nodes, __kwargtrans__ ({what: flm_fragment.what}));
/* 000118 */ 				}) ();
/* 000121 */ 				var __except1__ = e;
/* 000121 */ 				__except1__.__cause__ = null;
/* 000121 */ 				throw __except1__;
/* 000121 */ 			}
/* 000121 */ 			else if (isinstance (__except0__, Exception)) {
/* 000121 */ 				var e = __except0__;
/* 000123 */ 				// pass;
/* 000129 */ 				__except0__.__cause__ = null;
/* 000129 */ 				throw __except0__;
/* 000129 */ 			}
/* 000129 */ 			else {
/* 000129 */ 				throw __except0__;
/* 000129 */ 			}
/* 000129 */ 		}
/* 000129 */ 	});},
/* 000131 */ 	get render_nodelist () {return __get__ (this, function (self, nodelist, render_context, is_block_level) {
/* 000131 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000131 */ 			var is_block_level = null;
/* 000131 */ 		};
/* 000131 */ 		if (arguments.length) {
/* 000131 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000131 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000131 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000131 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000131 */ 					switch (__attrib0__) {
/* 000131 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000131 */ 					}
/* 000131 */ 				}
/* 000131 */ 			}
/* 000131 */ 		}
/* 000131 */ 		else {
/* 000131 */ 		}
/* 000150 */ 		if (__t__ (nodelist === null)) {
/* 000151 */ 			var __except0__ = __call__ (ValueError, null, 'render_nodelist(): nodelist should not be None');
/* 000151 */ 			__except0__.__cause__ = null;
/* 000151 */ 			throw __except0__;
/* 000151 */ 		}
/* 000153 */ 		if (__t__ (!__t__ ((__call__ (hasattr, null, nodelist, 'flm_is_block_level'))))) {
/* 000154 */ 			// pass;
/* 000164 */ 			var __except0__ = __call__ (LatexWalkerLocatedError, null, 'The given node list was not parsed & produced by FLM; missing .flm_is_block_level attribute: {}'.format (__getslice__ (__call__ (repr, null, nodelist), 0, 100, 1)), __kwargtrans__ ({pos: (__t__ (__call__ (hasattr, null, nodelist, 'pos')) ? __call__ (getattr, null, nodelist, 'pos') : null)}));
/* 000164 */ 			__except0__.__cause__ = null;
/* 000164 */ 			throw __except0__;
/* 000164 */ 		}
/* 000168 */ 		if (__t__ (is_block_level === null)) {
/* 000169 */ 			var is_block_level = nodelist.flm_is_block_level;
/* 000169 */ 		}
/* 000171 */ 		if (__t__ (__t__ (!__t__ ((is_block_level))) && nodelist.flm_is_block_level)) {
/* 000172 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node list ‘{}’ in inline mode (not block level mode) as it contains block-level elements.'.format (nodelist));
/* 000172 */ 			__except0__.__cause__ = null;
/* 000172 */ 			throw __except0__;
/* 000172 */ 		}
/* 000177 */ 		if (__t__ (is_block_level)) {
/* 000183 */ 			if (__t__ (__call__ (hasattr, null, nodelist, 'flm_blocks'))) {
/* 000184 */ 				var node_blocks = nodelist.flm_blocks;
/* 000184 */ 			}
/* 000185 */ 			else {
/* 000186 */ 				var node_blocks = [nodelist];
/* 000186 */ 			}
/* 000188 */ 			return (function () {
/* 000188 */ 				var __accu0__ = self;
/* 000188 */ 				return __call__ (__accu0__.render_blocks, __accu0__, node_blocks, render_context);
/* 000188 */ 			}) ();
/* 000188 */ 		}
/* 000190 */ 		return (function () {
/* 000190 */ 			var __accu0__ = self;
/* 000190 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000190 */ 		}) ();
/* 000190 */ 	});},
/* 000193 */ 	get render_node () {return __get__ (this, function (self, node, render_context) {
/* 000193 */ 		if (arguments.length) {
/* 000193 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000193 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000193 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000193 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000193 */ 					switch (__attrib0__) {
/* 000193 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000193 */ 					}
/* 000193 */ 				}
/* 000193 */ 			}
/* 000193 */ 		}
/* 000193 */ 		else {
/* 000193 */ 		}
/* 000205 */ 		var render_context = (function () {
/* 000205 */ 			var __accu0__ = self;
/* 000205 */ 			return __call__ (__accu0__.ensure_render_context, __accu0__, render_context);
/* 000205 */ 		}) ();
/* 000207 */ 		try {
/* 000209 */ 			if (__t__ (__t__ (__call__ (hasattr, null, node, 'flm_replace_by_node')) && node.flm_replace_by_node !== null)) {
/* 000212 */ 				return (function () {
/* 000212 */ 					var __accu0__ = self;
/* 000212 */ 					return __call__ (__accu0__.render_node, __accu0__, node.flm_replace_by_node, render_context);
/* 000212 */ 				}) ();
/* 000212 */ 			}
/* 000214 */ 			if (__t__ ((function () {
/* 000214 */ 				var __accu0__ = node;
/* 000214 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCharsNode);
/* 000214 */ 			}) ())) {
/* 000215 */ 				return (function () {
/* 000215 */ 					var __accu0__ = self;
/* 000215 */ 					return __call__ (__accu0__.render_node_chars, __accu0__, node, render_context);
/* 000215 */ 				}) ();
/* 000215 */ 			}
/* 000216 */ 			if (__t__ ((function () {
/* 000216 */ 				var __accu0__ = node;
/* 000216 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexCommentNode);
/* 000216 */ 			}) ())) {
/* 000217 */ 				return (function () {
/* 000217 */ 					var __accu0__ = self;
/* 000217 */ 					return __call__ (__accu0__.render_node_comment, __accu0__, node, render_context);
/* 000217 */ 				}) ();
/* 000217 */ 			}
/* 000218 */ 			if (__t__ ((function () {
/* 000218 */ 				var __accu0__ = node;
/* 000218 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexGroupNode);
/* 000218 */ 			}) ())) {
/* 000219 */ 				return (function () {
/* 000219 */ 					var __accu0__ = self;
/* 000219 */ 					return __call__ (__accu0__.render_node_group, __accu0__, node, render_context);
/* 000219 */ 				}) ();
/* 000219 */ 			}
/* 000220 */ 			if (__t__ ((function () {
/* 000220 */ 				var __accu0__ = node;
/* 000220 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMacroNode);
/* 000220 */ 			}) ())) {
/* 000221 */ 				return (function () {
/* 000221 */ 					var __accu0__ = self;
/* 000221 */ 					return __call__ (__accu0__.render_node_macro, __accu0__, node, render_context);
/* 000221 */ 				}) ();
/* 000221 */ 			}
/* 000222 */ 			if (__t__ ((function () {
/* 000222 */ 				var __accu0__ = node;
/* 000222 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexEnvironmentNode);
/* 000222 */ 			}) ())) {
/* 000223 */ 				return (function () {
/* 000223 */ 					var __accu0__ = self;
/* 000223 */ 					return __call__ (__accu0__.render_node_environment, __accu0__, node, render_context);
/* 000223 */ 				}) ();
/* 000223 */ 			}
/* 000224 */ 			if (__t__ ((function () {
/* 000224 */ 				var __accu0__ = node;
/* 000224 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexSpecialsNode);
/* 000224 */ 			}) ())) {
/* 000225 */ 				return (function () {
/* 000225 */ 					var __accu0__ = self;
/* 000225 */ 					return __call__ (__accu0__.render_node_specials, __accu0__, node, render_context);
/* 000225 */ 				}) ();
/* 000225 */ 			}
/* 000226 */ 			if (__t__ ((function () {
/* 000226 */ 				var __accu0__ = node;
/* 000226 */ 				return __call__ (__accu0__.isNodeType, __accu0__, nodes.LatexMathNode);
/* 000226 */ 			}) ())) {
/* 000227 */ 				return (function () {
/* 000227 */ 					var __accu0__ = self;
/* 000227 */ 					return __call__ (__accu0__.render_node_math, __accu0__, node, render_context);
/* 000227 */ 				}) ();
/* 000227 */ 			}
/* 000229 */ 			var __except0__ = __call__ (ValueError, null, 'Invalid node type: {}'.format (node));
/* 000229 */ 			__except0__.__cause__ = null;
/* 000229 */ 			throw __except0__;
/* 000229 */ 		}
/* 000229 */ 		catch (__except0__) {
/* 000229 */ 			if (isinstance (__except0__, LatexWalkerLocatedError)) {
/* 000229 */ 				var e = __except0__;
/* 000233 */ 				(function () {
/* 000233 */ 					var __accu0__ = e;
/* 000233 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000233 */ 				}) ();
/* 000234 */ 				var __except1__ = e;
/* 000234 */ 				__except1__.__cause__ = null;
/* 000234 */ 				throw __except1__;
/* 000234 */ 			}
/* 000234 */ 			else if (isinstance (__except0__, Exception)) {
/* 000234 */ 				var e = __except0__;
/* 000237 */ 				var err = __call__ (LatexWalkerLocatedError, null, __call__ (str, null, e));
/* 000238 */ 				(function () {
/* 000238 */ 					var __accu0__ = err;
/* 000238 */ 					return __call__ (__accu0__.set_pos_or_add_open_context_from_node, __accu0__, node);
/* 000238 */ 				}) ();
/* 000239 */ 				var __except1__ = err;
/* 000239 */ 				__except1__.__cause__ = null;
/* 000239 */ 				throw __except1__;
/* 000239 */ 			}
/* 000239 */ 			else {
/* 000239 */ 				throw __except0__;
/* 000239 */ 			}
/* 000239 */ 		}
/* 000239 */ 	});},
/* 000242 */ 	get render_node_chars () {return __get__ (this, function (self, node, render_context) {
/* 000242 */ 		if (arguments.length) {
/* 000242 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000242 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000242 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000242 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000242 */ 					switch (__attrib0__) {
/* 000242 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000242 */ 					}
/* 000242 */ 				}
/* 000242 */ 			}
/* 000242 */ 		}
/* 000242 */ 		else {
/* 000242 */ 		}
/* 000243 */ 		if (__t__ (__call__ (hasattr, null, node, 'flm_chars_value'))) {
/* 000244 */ 			var chars_value = node.flm_chars_value;
/* 000244 */ 		}
/* 000245 */ 		else {
/* 000246 */ 			var chars_value = null;
/* 000246 */ 		}
/* 000247 */ 		if (__t__ (chars_value === null)) {
/* 000249 */ 			var chars_value = node.chars;
/* 000249 */ 		}
/* 000250 */ 		return (function () {
/* 000250 */ 			var __accu0__ = self;
/* 000250 */ 			return __call__ (__accu0__.render_value, __accu0__, chars_value, render_context);
/* 000250 */ 		}) ();
/* 000250 */ 	});},
/* 000252 */ 	get render_node_comment () {return __get__ (this, function (self, node, render_context) {
/* 000252 */ 		if (arguments.length) {
/* 000252 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000252 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000252 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000252 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000252 */ 					switch (__attrib0__) {
/* 000252 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000252 */ 					}
/* 000252 */ 				}
/* 000252 */ 			}
/* 000252 */ 		}
/* 000252 */ 		else {
/* 000252 */ 		}
/* 000253 */ 		return '';
/* 000253 */ 	});},
/* 000255 */ 	get render_node_group () {return __get__ (this, function (self, node, render_context) {
/* 000255 */ 		if (arguments.length) {
/* 000255 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000255 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000255 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000255 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000255 */ 					switch (__attrib0__) {
/* 000255 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000255 */ 					}
/* 000255 */ 				}
/* 000255 */ 			}
/* 000255 */ 		}
/* 000255 */ 		else {
/* 000255 */ 		}
/* 000256 */ 		return (function () {
/* 000256 */ 			var __accu0__ = self;
/* 000257 */ 			return __call__ (__accu0__.render_nodelist, __accu0__, node.nodelist, (function () {
/* 000257 */ 				var __accu1__ = self;
/* 000257 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000257 */ 			}) ());
/* 000257 */ 		}) ();
/* 000257 */ 	});},
/* 000259 */ 	get render_node_macro () {return __get__ (this, function (self, node, render_context) {
/* 000259 */ 		if (arguments.length) {
/* 000259 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000259 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000259 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000259 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000259 */ 					switch (__attrib0__) {
/* 000259 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000259 */ 					}
/* 000259 */ 				}
/* 000259 */ 			}
/* 000259 */ 		}
/* 000259 */ 		else {
/* 000259 */ 		}
/* 000260 */ 		return (function () {
/* 000260 */ 			var __accu0__ = self;
/* 000261 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000261 */ 				var __accu1__ = self;
/* 000261 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000261 */ 			}) ());
/* 000261 */ 		}) ();
/* 000261 */ 	});},
/* 000263 */ 	get render_node_environment () {return __get__ (this, function (self, node, render_context) {
/* 000263 */ 		if (arguments.length) {
/* 000263 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000263 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000263 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000263 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000263 */ 					switch (__attrib0__) {
/* 000263 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000263 */ 					}
/* 000263 */ 				}
/* 000263 */ 			}
/* 000263 */ 		}
/* 000263 */ 		else {
/* 000263 */ 		}
/* 000264 */ 		return (function () {
/* 000264 */ 			var __accu0__ = self;
/* 000265 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000265 */ 				var __accu1__ = self;
/* 000265 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000265 */ 			}) ());
/* 000265 */ 		}) ();
/* 000265 */ 	});},
/* 000267 */ 	get render_node_specials () {return __get__ (this, function (self, node, render_context) {
/* 000267 */ 		if (arguments.length) {
/* 000267 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000267 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000267 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000267 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000267 */ 					switch (__attrib0__) {
/* 000267 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000267 */ 					}
/* 000267 */ 				}
/* 000267 */ 			}
/* 000267 */ 		}
/* 000267 */ 		else {
/* 000267 */ 		}
/* 000268 */ 		return (function () {
/* 000268 */ 			var __accu0__ = self;
/* 000269 */ 			return __call__ (__accu0__.render_invocable_node, __accu0__, node, (function () {
/* 000269 */ 				var __accu1__ = self;
/* 000269 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000269 */ 			}) ());
/* 000269 */ 		}) ();
/* 000269 */ 	});},
/* 000271 */ 	get render_invocable_node () {return __get__ (this, function (self, node, render_context) {
/* 000271 */ 		if (arguments.length) {
/* 000271 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000271 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000271 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000271 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000271 */ 					switch (__attrib0__) {
/* 000271 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000271 */ 					}
/* 000271 */ 				}
/* 000271 */ 			}
/* 000271 */ 		}
/* 000271 */ 		else {
/* 000271 */ 		}
/* 000277 */ 		if (__t__ (__t__ (!__t__ ((__call__ (hasattr, null, node, 'flm_specinfo')))) || node.flm_specinfo === null)) {
/* 000278 */ 			var __except0__ = __call__ (RuntimeError, null, 'Node {} does not have the `flm_specinfo` attribute set'.format (node));
/* 000278 */ 			__except0__.__cause__ = null;
/* 000278 */ 			throw __except0__;
/* 000278 */ 		}
/* 000280 */ 		if (__t__ (render_context.is_standalone_mode)) {
/* 000281 */ 			if (__t__ (!__t__ ((node.flm_specinfo.allowed_in_standalone_mode)))) {
/* 000283 */ 				var __except0__ = __call__ (ValueError, null, 'Cannot render ‘{}’ in standalone mode.'.format ((function () {
/* 000283 */ 					var __accu0__ = node;
/* 000283 */ 					return __call__ (__accu0__.latex_verbatim, __accu0__);
/* 000283 */ 				}) ()));
/* 000283 */ 				__except0__.__cause__ = null;
/* 000283 */ 				throw __except0__;
/* 000283 */ 			}
/* 000283 */ 		}
/* 000286 */ 		return (function () {
/* 000286 */ 			var __accu0__ = self;
/* 000289 */ 			return __call__ (__accu0__.render_invocable_node_call_render, __accu0__, node, node.flm_specinfo, (function () {
/* 000289 */ 				var __accu1__ = self;
/* 000289 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000289 */ 			}) ());
/* 000289 */ 		}) ();
/* 000289 */ 	});},
/* 000294 */ 	get render_invocable_node_call_render () {return __get__ (this, function (self, node, flm_specinfo, render_context) {
/* 000294 */ 		if (arguments.length) {
/* 000294 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000294 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000294 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000294 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000294 */ 					switch (__attrib0__) {
/* 000294 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'flm_specinfo': var flm_specinfo = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000294 */ 					}
/* 000294 */ 				}
/* 000294 */ 			}
/* 000294 */ 		}
/* 000294 */ 		else {
/* 000294 */ 		}
/* 000294 */ 		assert (render_context !== null);
/* 000299 */ 		if (__t__ (flm_specinfo === null)) {
/* 000300 */ 			var __except0__ = __call__ (ValueError, null, 'Cannot render node={} because specinfo is None!'.format (node));
/* 000300 */ 			__except0__.__cause__ = null;
/* 000300 */ 			throw __except0__;
/* 000300 */ 		}
/* 000302 */ 		var is_delayed_render = (function () {
/* 000302 */ 			var __accu0__ = render_context;
/* 000302 */ 			return __call__ (__accu0__.get_is_delayed_render, __accu0__, node);
/* 000302 */ 		}) ();
/* 000303 */ 		if (__t__ (is_delayed_render)) {
/* 000306 */ 			var is_first_pass = render_context.is_first_pass;
/* 000307 */ 			var delayed_key = null;
/* 000309 */ 			if (__t__ (is_first_pass)) {
/* 000310 */ 				(function () {
/* 000310 */ 					var __accu0__ = flm_specinfo;
/* 000310 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000310 */ 				}) ();
/* 000311 */ 				var delayed_key = (function () {
/* 000311 */ 					var __accu0__ = render_context;
/* 000311 */ 					return __call__ (__accu0__.register_delayed_render, __accu0__, node, self);
/* 000311 */ 				}) ();
/* 000311 */ 			}
/* 000313 */ 			if (__t__ (self.supports_delayed_render_markers)) {
/* 000316 */ 				return (function () {
/* 000316 */ 					var __accu0__ = self;
/* 000316 */ 					return __call__ (__accu0__.render_delayed_marker, __accu0__, node, delayed_key, render_context);
/* 000316 */ 				}) ();
/* 000316 */ 			}
/* 000317 */ 			else if (__t__ (is_first_pass)) {
/* 000319 */ 				(function () {
/* 000319 */ 					var __accu0__ = flm_specinfo;
/* 000319 */ 					return __call__ (__accu0__.prepare_delayed_render, __accu0__, node, render_context);
/* 000319 */ 				}) ();
/* 000321 */ 				return (function () {
/* 000321 */ 					var __accu0__ = self;
/* 000321 */ 					return __call__ (__accu0__.render_delayed_dummy_placeholder, __accu0__, node, delayed_key, render_context);
/* 000321 */ 				}) ();
/* 000321 */ 			}
/* 000322 */ 			else {
/* 000322 */ 				assert (!__t__ ((render_context.is_first_pass)));
/* 000326 */ 				return (function () {
/* 000326 */ 					var __accu0__ = render_context;
/* 000326 */ 					return __call__ (__accu0__.get_delayed_render_content, __accu0__, node);
/* 000326 */ 				}) ();
/* 000326 */ 			}
/* 000326 */ 		}
/* 000330 */ 		var value = (function () {
/* 000330 */ 			var __accu0__ = flm_specinfo;
/* 000330 */ 			return __call__ (__accu0__.render, __accu0__, node, render_context);
/* 000330 */ 		}) ();
/* 000331 */ 		return value;
/* 000331 */ 	});},
/* 000333 */ 	get render_node_math () {return __get__ (this, function (self, node, render_context) {
/* 000333 */ 		if (arguments.length) {
/* 000333 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000333 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000333 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000333 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000333 */ 					switch (__attrib0__) {
/* 000333 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000333 */ 					}
/* 000333 */ 				}
/* 000333 */ 			}
/* 000333 */ 		}
/* 000333 */ 		else {
/* 000333 */ 		}
/* 000334 */ 		return (function () {
/* 000334 */ 			var __accu0__ = self;
/* 000337 */ 			return __call__ (__accu0__.render_math_content, __accu0__, node.delimiters, node.nodelist, (function () {
/* 000337 */ 				var __accu1__ = self;
/* 000337 */ 				return __call__ (__accu1__.ensure_render_context, __accu1__, render_context);
/* 000337 */ 			}) (), __kwargtrans__ ({displaytype: node.displaytype, target_id: null}));
/* 000337 */ 		}) ();
/* 000337 */ 	});},
/* 000342 */ 	get render_math_content () {return __get__ (this, function (self, delimiters, nodelist, render_context, displaytype) {
/* 000342 */ 		var environmentname = null;
/* 000342 */ 		var target_id = null;
/* 000342 */ 		if (arguments.length) {
/* 000342 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000342 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000342 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000342 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000342 */ 					switch (__attrib0__) {
/* 000342 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'delimiters': var delimiters = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'displaytype': var displaytype = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'environmentname': var environmentname = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000342 */ 					}
/* 000342 */ 				}
/* 000342 */ 			}
/* 000342 */ 		}
/* 000342 */ 		else {
/* 000342 */ 		}
/* 000350 */ 		var __left0__ = delimiters;
/* 000350 */ 		var begin_delim = __left0__ [0];
/* 000350 */ 		var end_delim = __left0__ [1];
/* 000351 */ 		if (__t__ (environmentname)) {
/* 000352 */ 			var begin_delim = '\\begin{}{}{}'.format ('{', environmentname, '}');
/* 000353 */ 			var end_delim = '\\end{}{}{}'.format ('{', environmentname, '}');
/* 000353 */ 		}
/* 000355 */ 		var rendered = (function () {
/* 000355 */ 			var __accu0__ = self;
/* 000356 */ 			return __call__ (__accu0__.render_verbatim, __accu0__, __add__ (__add__ (begin_delim, (function () {
/* 000356 */ 				var __accu1__ = self;
/* 000356 */ 				return __call__ (__accu1__.recompose_latex, __accu1__, nodelist);
/* 000356 */ 			}) ()), end_delim), __kwargtrans__ ({render_context: render_context, annotations: ['{}-math'.format (displaytype)], target_id: target_id, is_block_level: __eq__ (displaytype, 'display')}));
/* 000356 */ 		}) ();
/* 000362 */ 		return rendered;
/* 000362 */ 	});},
/* 000364 */ 	get recompose_latex () {return __get__ (this, function (self, node) {
/* 000364 */ 		if (arguments.length) {
/* 000364 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000364 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000364 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000364 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000364 */ 					switch (__attrib0__) {
/* 000364 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000364 */ 					}
/* 000364 */ 				}
/* 000364 */ 			}
/* 000364 */ 		}
/* 000364 */ 		else {
/* 000364 */ 		}
/* 000372 */ 		var flm = (function () {
/* 000372 */ 			var __accu0__ = __call__ (FLMNodesFlmRecomposer, null);
/* 000372 */ 			return __call__ (__accu0__.recompose_flm_text, __accu0__, node);
/* 000372 */ 		}) ();
/* 000373 */ 		// pass;
/* 000376 */ 		return flm;
/* 000376 */ 	});},
/* 000382 */ 	get render_blocks () {return __get__ (this, function (self, node_blocks, render_context) {
/* 000382 */ 		if (arguments.length) {
/* 000382 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000382 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000382 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000382 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000382 */ 					switch (__attrib0__) {
/* 000382 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'node_blocks': var node_blocks = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000382 */ 					}
/* 000382 */ 				}
/* 000382 */ 			}
/* 000382 */ 		}
/* 000382 */ 		else {
/* 000382 */ 		}
/* 000396 */ 		var rendered_blocks = [];
/* 000398 */ 		var __iterable0__ = node_blocks;
/* 000398 */ 		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000398 */ 			var block = __getitem__ (__iterable0__, __index0__);
/* 000400 */ 			if (__t__ (__call__ (isinstance, null, block, nodes.LatexNodeList))) {
/* 000401 */ 				var para = (function () {
/* 000401 */ 					var __accu0__ = self;
/* 000401 */ 					return __call__ (__accu0__.render_build_paragraph, __accu0__, block, render_context);
/* 000401 */ 				}) ();
/* 000401 */ 			}
/* 000402 */ 			else {
/* 000403 */ 				var para = (function () {
/* 000403 */ 					var __accu0__ = self;
/* 000403 */ 					return __call__ (__accu0__.render_node, __accu0__, block, render_context);
/* 000403 */ 				}) ();
/* 000403 */ 			}
/* 000405 */ 			(function () {
/* 000405 */ 				var __accu0__ = rendered_blocks;
/* 000405 */ 				return __call__ (__accu0__.append, __accu0__, para);
/* 000405 */ 			}) ();
/* 000405 */ 		}
/* 000407 */ 		return (function () {
/* 000407 */ 			var __accu0__ = self;
/* 000407 */ 			return __call__ (__accu0__.render_join_blocks, __accu0__, rendered_blocks, render_context);
/* 000407 */ 		}) ();
/* 000407 */ 	});},
/* 000410 */ 	get render_build_paragraph () {return __get__ (this, function (self, nodelist, render_context) {
/* 000410 */ 		if (arguments.length) {
/* 000410 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000410 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000410 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000410 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000410 */ 					switch (__attrib0__) {
/* 000410 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000410 */ 					}
/* 000410 */ 				}
/* 000410 */ 			}
/* 000410 */ 		}
/* 000410 */ 		else {
/* 000410 */ 		}
/* 000421 */ 		return (function () {
/* 000421 */ 			var __accu0__ = self;
/* 000421 */ 			return __call__ (__accu0__.render_inline_content, __accu0__, nodelist, render_context);
/* 000421 */ 		}) ();
/* 000421 */ 	});},
/* 000423 */ 	get render_inline_content () {return __get__ (this, function (self, nodelist, render_context) {
/* 000423 */ 		if (arguments.length) {
/* 000423 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000423 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000423 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000423 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000423 */ 					switch (__attrib0__) {
/* 000423 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000423 */ 					}
/* 000423 */ 				}
/* 000423 */ 			}
/* 000423 */ 		}
/* 000423 */ 		else {
/* 000423 */ 		}
/* 000433 */ 		return (function () {
/* 000433 */ 			var __accu0__ = self;
/* 000433 */ 			return __call__ (__accu0__.render_join, __accu0__, (function () {
/* 000433 */ 				var __accu1__ = [];
/* 000433 */ 				var __iterable0__ = nodelist;
/* 000433 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000434 */ 					var n = __getitem__ (__iterable0__, __index0__);
/* 000434 */ 					(function () {
/* 000434 */ 						var __accu2__ = __accu1__;
/* 000433 */ 						return __call__ (__accu2__.append, __accu2__, (function () {
/* 000433 */ 							var __accu3__ = self;
/* 000433 */ 							return __call__ (__accu3__.render_node, __accu3__, n, render_context);
/* 000433 */ 						}) ());
/* 000433 */ 					}) ();
/* 000433 */ 				}
/* 000433 */ 				return __accu1__;
/* 000433 */ 			}) (), render_context);
/* 000433 */ 		}) ();
/* 000433 */ 	});},
/* 000437 */ 	get render_join () {return __get__ (this, function (self, content_list, render_context) {
/* 000437 */ 		if (arguments.length) {
/* 000437 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000437 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000437 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000437 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000437 */ 					switch (__attrib0__) {
/* 000437 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000437 */ 					}
/* 000437 */ 				}
/* 000437 */ 			}
/* 000437 */ 		}
/* 000437 */ 		else {
/* 000437 */ 		}
/* 000447 */ 		return (function () {
/* 000447 */ 			var __accu0__ = '';
/* 000447 */ 			return __call__ (__accu0__.join, __accu0__, content_list);
/* 000447 */ 		}) ();
/* 000447 */ 	});},
/* 000450 */ 	get render_join_blocks () {return __get__ (this, function (self, content_list, render_context) {
/* 000450 */ 		if (arguments.length) {
/* 000450 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000450 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000450 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000450 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000450 */ 					switch (__attrib0__) {
/* 000450 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'content_list': var content_list = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000450 */ 					}
/* 000450 */ 				}
/* 000450 */ 			}
/* 000450 */ 		}
/* 000450 */ 		else {
/* 000450 */ 		}
/* 000461 */ 		return (function () {
/* 000461 */ 			var __accu0__ = '\n\n';
/* 000461 */ 			return __call__ (__accu0__.join, __accu0__, (function () {
/* 000461 */ 				var __accu1__ = [];
/* 000461 */ 				var __iterable0__ = content_list;
/* 000461 */ 				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
/* 000461 */ 					var c = __getitem__ (__iterable0__, __index0__);
/* 000461 */ 					if (__t__ (__t__ (c !== null) && __call__ (len, null, c))) {
/* 000461 */ 						(function () {
/* 000461 */ 							var __accu2__ = __accu1__;
/* 000461 */ 							return __call__ (__accu2__.append, __accu2__, c);
/* 000461 */ 						}) ();
/* 000461 */ 					}
/* 000461 */ 				}
/* 000461 */ 				return __accu1__;
/* 000461 */ 			}) ());
/* 000461 */ 		}) ();
/* 000461 */ 	});},
/* 000467 */ 	get render_semantic_span () {return __get__ (this, function (self, content, role, render_context) {
/* 000467 */ 		var annotations = null;
/* 000467 */ 		var target_id = null;
/* 000467 */ 		if (arguments.length) {
/* 000467 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000467 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000467 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000467 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000467 */ 					switch (__attrib0__) {
/* 000467 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000467 */ 					}
/* 000467 */ 				}
/* 000467 */ 			}
/* 000467 */ 		}
/* 000467 */ 		else {
/* 000467 */ 		}
/* 000485 */ 		return content;
/* 000485 */ 	});},
/* 000487 */ 	get render_semantic_block () {return __get__ (this, function (self, content, role, render_context) {
/* 000487 */ 		var annotations = null;
/* 000487 */ 		var target_id = null;
/* 000487 */ 		if (arguments.length) {
/* 000487 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000487 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000487 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000487 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000487 */ 					switch (__attrib0__) {
/* 000487 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000487 */ 					}
/* 000487 */ 				}
/* 000487 */ 			}
/* 000487 */ 		}
/* 000487 */ 		else {
/* 000487 */ 		}
/* 000505 */ 		return content;
/* 000505 */ 	});},
/* 000510 */ 	get replace_delayed_markers_with_final_values () {return __get__ (this, function (self, content, delayed_values) {
/* 000510 */ 		if (arguments.length) {
/* 000510 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000510 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000510 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000510 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000510 */ 					switch (__attrib0__) {
/* 000510 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 						case 'delayed_values': var delayed_values = __allkwargs0__ [__attrib0__]; break;
/* 000510 */ 					}
/* 000510 */ 				}
/* 000510 */ 			}
/* 000510 */ 		}
/* 000510 */ 		else {
/* 000510 */ 		}
/* 000523 */ 		var __except0__ = __call__ (RuntimeError, null, 'Reimplement me!');
/* 000523 */ 		__except0__.__cause__ = null;
/* 000523 */ 		throw __except0__;
/* 000523 */ 	});},
/* 000528 */ 	get render_value () {return __get__ (this, function (self, value, render_context) {
/* 000528 */ 		if (arguments.length) {
/* 000528 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000528 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000528 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000528 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000528 */ 					switch (__attrib0__) {
/* 000528 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000528 */ 					}
/* 000528 */ 				}
/* 000528 */ 			}
/* 000528 */ 		}
/* 000528 */ 		else {
/* 000528 */ 		}
/* 000538 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000538 */ 		__except0__.__cause__ = null;
/* 000538 */ 		throw __except0__;
/* 000538 */ 	});},
/* 000540 */ 	get render_delayed_marker () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000540 */ 		if (arguments.length) {
/* 000540 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000540 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000540 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000540 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000540 */ 					switch (__attrib0__) {
/* 000540 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000540 */ 					}
/* 000540 */ 				}
/* 000540 */ 			}
/* 000540 */ 		}
/* 000540 */ 		else {
/* 000540 */ 		}
/* 000552 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000552 */ 		__except0__.__cause__ = null;
/* 000552 */ 		throw __except0__;
/* 000552 */ 	});},
/* 000554 */ 	get render_delayed_dummy_placeholder () {return __get__ (this, function (self, node, delayed_key, render_context) {
/* 000554 */ 		if (arguments.length) {
/* 000554 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000554 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000554 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000554 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000554 */ 					switch (__attrib0__) {
/* 000554 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						case 'node': var node = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						case 'delayed_key': var delayed_key = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000554 */ 					}
/* 000554 */ 				}
/* 000554 */ 			}
/* 000554 */ 		}
/* 000554 */ 		else {
/* 000554 */ 		}
/* 000567 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000567 */ 		__except0__.__cause__ = null;
/* 000567 */ 		throw __except0__;
/* 000567 */ 	});},
/* 000569 */ 	get render_nothing () {return __get__ (this, function (self, render_context, annotations) {
/* 000569 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000569 */ 			var annotations = null;
/* 000569 */ 		};
/* 000569 */ 		if (arguments.length) {
/* 000569 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000569 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000569 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000569 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000569 */ 					switch (__attrib0__) {
/* 000569 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000569 */ 					}
/* 000569 */ 				}
/* 000569 */ 			}
/* 000569 */ 		}
/* 000569 */ 		else {
/* 000569 */ 		}
/* 000580 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000580 */ 		__except0__.__cause__ = null;
/* 000580 */ 		throw __except0__;
/* 000580 */ 	});},
/* 000582 */ 	get render_empty_error_placeholder () {return __get__ (this, function (self, debug_str, render_context) {
/* 000582 */ 		if (arguments.length) {
/* 000582 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000582 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000582 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000582 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000582 */ 					switch (__attrib0__) {
/* 000582 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'debug_str': var debug_str = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000582 */ 					}
/* 000582 */ 				}
/* 000582 */ 			}
/* 000582 */ 		}
/* 000582 */ 		else {
/* 000582 */ 		}
/* 000592 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000592 */ 		__except0__.__cause__ = null;
/* 000592 */ 		throw __except0__;
/* 000592 */ 	});},
/* 000594 */ 	get render_text_format () {return __get__ (this, function (self, text_formats, nodelist, render_context) {
/* 000594 */ 		if (arguments.length) {
/* 000594 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000594 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000594 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000594 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000594 */ 					switch (__attrib0__) {
/* 000594 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'text_formats': var text_formats = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'nodelist': var nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000594 */ 					}
/* 000594 */ 				}
/* 000594 */ 			}
/* 000594 */ 		}
/* 000594 */ 		else {
/* 000594 */ 		}
/* 000603 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000603 */ 		__except0__.__cause__ = null;
/* 000603 */ 		throw __except0__;
/* 000603 */ 	});},
/* 000605 */ 	get render_enumeration () {return __get__ (this, function (self, iter_items_nodelists, counter_formatter, render_context) {
/* 000605 */ 		var target_id_generator = null;
/* 000605 */ 		var annotations = null;
/* 000605 */ 		if (arguments.length) {
/* 000605 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000605 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000605 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000605 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000605 */ 					switch (__attrib0__) {
/* 000605 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'iter_items_nodelists': var iter_items_nodelists = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'counter_formatter': var counter_formatter = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'target_id_generator': var target_id_generator = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000605 */ 					}
/* 000605 */ 				}
/* 000605 */ 			}
/* 000605 */ 		}
/* 000605 */ 		else {
/* 000605 */ 		}
/* 000621 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000621 */ 		__except0__.__cause__ = null;
/* 000621 */ 		throw __except0__;
/* 000621 */ 	});},
/* 000623 */ 	get render_lines () {return __get__ (this, function (self, lines_info_list, render_context) {
/* 000623 */ 		var role = null;
/* 000623 */ 		var annotations = null;
/* 000623 */ 		var target_id = null;
/* 000623 */ 		if (arguments.length) {
/* 000623 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000623 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000623 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000623 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000623 */ 					switch (__attrib0__) {
/* 000623 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'lines_info_list': var lines_info_list = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'role': var role = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000623 */ 					}
/* 000623 */ 				}
/* 000623 */ 			}
/* 000623 */ 		}
/* 000623 */ 		else {
/* 000623 */ 		}
/* 000636 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000636 */ 		__except0__.__cause__ = null;
/* 000636 */ 		throw __except0__;
/* 000636 */ 	});},
/* 000638 */ 	get render_heading () {return __get__ (this, function (self, heading_nodelist, render_context) {
/* 000638 */ 		var heading_level = 1;
/* 000638 */ 		var inline_heading = false;
/* 000638 */ 		var target_id = null;
/* 000638 */ 		var annotations = null;
/* 000638 */ 		if (arguments.length) {
/* 000638 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000638 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000638 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000638 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000638 */ 					switch (__attrib0__) {
/* 000638 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'heading_nodelist': var heading_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'heading_level': var heading_level = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'inline_heading': var inline_heading = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000638 */ 					}
/* 000638 */ 				}
/* 000638 */ 			}
/* 000638 */ 		}
/* 000638 */ 		else {
/* 000638 */ 		}
/* 000656 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000656 */ 		__except0__.__cause__ = null;
/* 000656 */ 		throw __except0__;
/* 000656 */ 	});},
/* 000658 */ 	get render_verbatim () {return __get__ (this, function (self, value, render_context) {
/* 000658 */ 		var is_block_level = false;
/* 000658 */ 		var annotations = null;
/* 000658 */ 		var target_id = null;
/* 000658 */ 		if (arguments.length) {
/* 000658 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000658 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000658 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000658 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000658 */ 					switch (__attrib0__) {
/* 000658 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000658 */ 					}
/* 000658 */ 				}
/* 000658 */ 			}
/* 000658 */ 		}
/* 000658 */ 		else {
/* 000658 */ 		}
/* 000671 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000671 */ 		__except0__.__cause__ = null;
/* 000671 */ 		throw __except0__;
/* 000671 */ 	});},
/* 000673 */ 	get render_link () {return __get__ (this, function (self, ref_type, href, display_nodelist, render_context, annotations) {
/* 000673 */ 		if (typeof annotations == 'undefined' || (annotations != null && annotations.hasOwnProperty ("__kwargtrans__"))) {;
/* 000673 */ 			var annotations = null;
/* 000673 */ 		};
/* 000673 */ 		if (arguments.length) {
/* 000673 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000673 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000673 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000673 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000673 */ 					switch (__attrib0__) {
/* 000673 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'ref_type': var ref_type = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'href': var href = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 						case 'annotations': var annotations = __allkwargs0__ [__attrib0__]; break;
/* 000673 */ 					}
/* 000673 */ 				}
/* 000673 */ 			}
/* 000673 */ 		}
/* 000673 */ 		else {
/* 000673 */ 		}
/* 000685 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000685 */ 		__except0__.__cause__ = null;
/* 000685 */ 		throw __except0__;
/* 000685 */ 	});},
/* 000687 */ 	get render_annotation_comment () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000687 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var is_block_level = false;
/* 000687 */ 		};
/* 000687 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var color_index = 0;
/* 000687 */ 		};
/* 000687 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000687 */ 			var initials = null;
/* 000687 */ 		};
/* 000687 */ 		if (arguments.length) {
/* 000687 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000687 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000687 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000687 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000687 */ 					switch (__attrib0__) {
/* 000687 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000687 */ 					}
/* 000687 */ 				}
/* 000687 */ 			}
/* 000687 */ 		}
/* 000687 */ 		else {
/* 000687 */ 		}
/* 000704 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000704 */ 		__except0__.__cause__ = null;
/* 000704 */ 		throw __except0__;
/* 000704 */ 	});},
/* 000706 */ 	get render_annotation_highlight () {return __get__ (this, function (self, display_nodelist, render_context, is_block_level, color_index, initials) {
/* 000706 */ 		if (typeof is_block_level == 'undefined' || (is_block_level != null && is_block_level.hasOwnProperty ("__kwargtrans__"))) {;
/* 000706 */ 			var is_block_level = false;
/* 000706 */ 		};
/* 000706 */ 		if (typeof color_index == 'undefined' || (color_index != null && color_index.hasOwnProperty ("__kwargtrans__"))) {;
/* 000706 */ 			var color_index = 0;
/* 000706 */ 		};
/* 000706 */ 		if (typeof initials == 'undefined' || (initials != null && initials.hasOwnProperty ("__kwargtrans__"))) {;
/* 000706 */ 			var initials = null;
/* 000706 */ 		};
/* 000706 */ 		if (arguments.length) {
/* 000706 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000706 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000706 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000706 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000706 */ 					switch (__attrib0__) {
/* 000706 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'display_nodelist': var display_nodelist = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'is_block_level': var is_block_level = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'color_index': var color_index = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 						case 'initials': var initials = __allkwargs0__ [__attrib0__]; break;
/* 000706 */ 					}
/* 000706 */ 				}
/* 000706 */ 			}
/* 000706 */ 		}
/* 000706 */ 		else {
/* 000706 */ 		}
/* 000723 */ 		var __except0__ = __call__ (RuntimeError, null, 'Subclasses need to reimplement this method');
/* 000723 */ 		__except0__.__cause__ = null;
/* 000723 */ 		throw __except0__;
/* 000723 */ 	});},
/* 000729 */ 	get render_float () {return __get__ (this, function (self, float_instance, render_context) {
/* 000729 */ 		if (arguments.length) {
/* 000729 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000729 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000729 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000729 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000729 */ 					switch (__attrib0__) {
/* 000729 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'float_instance': var float_instance = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000729 */ 					}
/* 000729 */ 				}
/* 000729 */ 			}
/* 000729 */ 		}
/* 000729 */ 		else {
/* 000729 */ 		}
/* 000738 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000738 */ 		__except0__.__cause__ = null;
/* 000738 */ 		throw __except0__;
/* 000738 */ 	});},
/* 000740 */ 	get render_graphics_block () {return __get__ (this, function (self, graphics_resource, render_context) {
/* 000740 */ 		if (arguments.length) {
/* 000740 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000740 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000740 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000740 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000740 */ 					switch (__attrib0__) {
/* 000740 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000740 */ 						case 'graphics_resource': var graphics_resource = __allkwargs0__ [__attrib0__]; break;
/* 000740 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000740 */ 					}
/* 000740 */ 				}
/* 000740 */ 			}
/* 000740 */ 		}
/* 000740 */ 		else {
/* 000740 */ 		}
/* 000748 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000748 */ 		__except0__.__cause__ = null;
/* 000748 */ 		throw __except0__;
/* 000748 */ 	});},
/* 000750 */ 	get render_cells () {return __get__ (this, function (self, cells_model, render_context, target_id) {
/* 000750 */ 		if (typeof target_id == 'undefined' || (target_id != null && target_id.hasOwnProperty ("__kwargtrans__"))) {;
/* 000750 */ 			var target_id = null;
/* 000750 */ 		};
/* 000750 */ 		if (arguments.length) {
/* 000750 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000750 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000750 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000750 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000750 */ 					switch (__attrib0__) {
/* 000750 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 						case 'cells_model': var cells_model = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 						case 'target_id': var target_id = __allkwargs0__ [__attrib0__]; break;
/* 000750 */ 					}
/* 000750 */ 				}
/* 000750 */ 			}
/* 000750 */ 		}
/* 000750 */ 		else {
/* 000750 */ 		}
/* 000760 */ 		var __except0__ = __call__ (RuntimeError, null, 'Feature is not implemented by subclass');
/* 000760 */ 		__except0__.__cause__ = null;
/* 000760 */ 		throw __except0__;
/* 000760 */ 	});},
/* 000767 */ 	get ensure_render_context () {return __get__ (this, function (self, render_context) {
/* 000767 */ 		if (arguments.length) {
/* 000767 */ 			var __ilastarg0__ = arguments.length - 1;
/* 000767 */ 			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
/* 000767 */ 				var __allkwargs0__ = arguments [__ilastarg0__--];
/* 000767 */ 				for (var __attrib0__ in __allkwargs0__) {
/* 000767 */ 					switch (__attrib0__) {
/* 000767 */ 						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 						case 'render_context': var render_context = __allkwargs0__ [__attrib0__]; break;
/* 000767 */ 					}
/* 000767 */ 				}
/* 000767 */ 			}
/* 000767 */ 		}
/* 000767 */ 		else {
/* 000767 */ 		}
/* 000774 */ 		return __t__ (render_context) || __call__ (FLMRenderContext, null, __kwargtrans__ ({fragment_renderer: self}));
/* 000774 */ 	});}
/* 000774 */ });
/* 000024 */ 
//# sourceMappingURL=flm.fragmentrenderer._base.map